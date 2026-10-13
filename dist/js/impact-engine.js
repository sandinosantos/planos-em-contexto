/*
 * Planos em Contexto · motor de impacto potencial
 *
 * Este arquivo executa as regras declaradas em content.js. Ele não calcula
 * benefício financeiro, probabilidade eleitoral ou resultado de governo.
 */

window.impactEngine = (() => {
  const content = window.siteContent;
  const model = content.analysis.impactModel;
  const skip = content.answersToSkip || [];
  const incomeBands = content.incomeBands || [];

  const fieldLabels = {
    personalIncome: 'renda pessoal',
    householdDisposableIncome: 'renda disponível da casa',
    residents: 'moradores',
    childrenUnder14: 'crianças menores de 14 anos',
    householdNeeds: 'necessidades da casa',
    essentialBurden: 'peso das despesas essenciais',
    work: 'situação de trabalho',
    workSchedule: 'jornada',
    incomeSources: 'origens da renda',
    mainIncomeSource: 'principal fonte de renda',
    businessRelation: 'relação com empresa própria',
    businessWithdrawal: 'forma de retirada da empresa',
    capitalShare: 'parcela de renda do capital',
    businessLabor: 'trabalho utilizado no negócio próprio',
    housing: 'moradia',
    housingBurden: 'peso de aluguel ou prestação',
    healthAccess: 'acesso à saúde',
    educationContext: 'situação educacional',
    area: 'área urbana ou rural',
    region: 'região',
    gender: 'gênero',
    race: 'raça/cor',
    religion: 'religião'
  };

  const isKnown = (profile, field) => {
    const value = profile[field];
    if (Array.isArray(value)) return value.some(item => !skip.includes(item));
    return Boolean(value && !skip.includes(value));
  };

  const hasAny = (value, values) => Array.isArray(value)
    ? values.some(item => value.includes(item))
    : values.includes(value);

  function matchesCondition(profile, condition) {
    const value = profile[condition.field];
    switch (condition.op) {
      case 'present':
        return isKnown(profile, condition.field);
      case 'equalsAny':
        return isKnown(profile, condition.field) && hasAny(value, condition.values);
      case 'hasAny':
        return isKnown(profile, condition.field) && hasAny(value, condition.values);
      case 'incomeIndexAtMost':
        return isKnown(profile, condition.field) && incomeBands.indexOf(value) >= 0 && incomeBands.indexOf(value) <= condition.value;
      case 'incomeIndexAtLeast':
        return isKnown(profile, condition.field) && incomeBands.indexOf(value) >= 0 && incomeBands.indexOf(value) >= condition.value;
      default:
        return false;
    }
  }

  function matches(profile, conditions = []) {
    return conditions.every(condition => matchesCondition(profile, condition));
  }

  function confidenceRank(value) {
    return { low: 1, medium: 2, high: 3 }[value] || 1;
  }

  function confidenceLabel(value) {
    return content.pages.confidenceLevels[value] || value;
  }

  function relevanceLabel(score) {
    if (score >= 3) return content.pages.relevanceLevels.high;
    if (score >= 2) return content.pages.relevanceLevels.medium;
    if (score >= 1) return content.pages.relevanceLevels.low;
    return content.pages.relevanceLevels.none;
  }

  function scoreLabel(score) {
    if (score > 0) return content.pages.scorePositive;
    if (score < 0) return content.pages.scoreNegative;
    return content.pages.scoreNeutral;
  }

  function outcomeLabel(improvements, pressures) {
    if (improvements.length && pressures.length) return content.pages.scoreMixed;
    if (improvements.length) return content.pages.scorePositive;
    if (pressures.length) return content.pages.scoreNegative;
    return content.pages.scoreNeutral;
  }

  function formatScore(score) {
    return score > 0 ? `+${score}` : String(score).replace('-', '−');
  }

  function clampScore(score, limit = 2) {
    return Math.max(-limit, Math.min(limit, score));
  }

  function signedDelta(rule) {
    if (typeof rule.delta === 'number') return rule.delta;
    if (rule.effect === 'improvement') return 1;
    if (rule.effect === 'pressure') return -1;
    return 0;
  }

  function readableValue(value) {
    return Array.isArray(value) ? value.join(', ') : value;
  }

  function signals(topicId, profile) {
    const config = model.topics[topicId] || {};
    const fields = config.contextFields || [];
    const values = fields
      .filter(field => isKnown(profile, field))
      .map(field => `${fieldLabels[field] || field}: ${readableValue(profile[field])}`);
    return values.join(' · ') || 'Nenhuma resposta específica para este tema; a leitura permanece geral.';
  }

  function evaluate(topic, candidateId, profile) {
    const config = model.topics[topic.id] || {};
    const relevanceMatches = (config.relevanceRules || []).filter(rule => matches(profile, rule.when));
    const relevance = relevanceMatches.reduce((max, rule) => Math.max(max, rule.score || 0), 0);
    const rules = (config.candidateRules && config.candidateRules[candidateId]) || [];
    const matchedRules = rules.filter(rule => matches(profile, rule.when));
    const historyConfig = model.historyRules && model.historyRules[topic.id];
    const historyRules = (historyConfig && historyConfig[candidateId]) || [];
    const matchedHistory = historyRules.filter(rule => matches(profile, rule.when));
    const improvements = matchedRules.filter(rule => rule.effect === 'improvement' || (rule.delta || 0) > 0);
    const pressures = matchedRules.filter(rule => rule.effect === 'pressure' || (rule.delta || 0) < 0);
    const historyImprovements = matchedHistory.filter(rule => rule.effect === 'improvement' || (rule.delta || 0) > 0);
    const historyPressures = matchedHistory.filter(rule => rule.effect === 'pressure' || (rule.delta || 0) < 0);
    const historyContext = matchedHistory.filter(rule => rule.effect === 'context' || signedDelta(rule) === 0);
    const proposalScore = clampScore(matchedRules.reduce((total, rule) => total + signedDelta(rule), 0));
    const historyScore = clampScore(matchedHistory.reduce((total, rule) => total + signedDelta(rule), 0));
    const score = clampScore(proposalScore + historyScore, 3);
    const allMatched = [...matchedRules, ...matchedHistory];
    const confidence = allMatched.reduce((best, rule) => confidenceRank(rule.confidence) > confidenceRank(best) ? rule.confidence : best, 'low');

    return {
      score,
      scoreText: formatScore(score),
      proposalScore,
      proposalScoreText: formatScore(proposalScore),
      historyScore,
      historyScoreText: formatScore(historyScore),
      scoreLabel: outcomeLabel([...improvements, ...historyImprovements], [...pressures, ...historyPressures]),
      relevance,
      relevanceText: relevanceLabel(relevance),
      confidence,
      confidenceText: confidenceLabel(confidence),
      reasons: matchedRules.map(rule => rule.text),
      improvements: improvements.map(rule => rule.text),
      pressures: pressures.map(rule => rule.text),
      historyImprovements: historyImprovements.map(rule => ({
        text: rule.text,
        sourceId: rule.sourceId,
        relation: rule.relation || 'context',
        confidence: rule.confidence
      })),
      historyPressures: historyPressures.map(rule => ({
        text: rule.text,
        sourceId: rule.sourceId,
        relation: rule.relation || 'context',
        confidence: rule.confidence
      })),
      historyContext: historyContext.map(rule => ({
        text: rule.text,
        sourceId: rule.sourceId,
        relation: rule.relation || 'context',
        confidence: rule.confidence
      })),
      relevanceReasons: relevanceMatches.map(rule => rule.reason),
      signals: signals(topic.id, profile)
    };
  }

  function regionalSafety(profile) {
    const config = content.analysis.regionalSafety;
    if (!config || !isKnown(profile, 'region') || !config.regions[profile.region]) return null;
    const regional = config.regions[profile.region];
    let rate = regional.total;
    let group = 'população total da região';
    let source = config.totalSource;
    let sourceUrl = config.sourceUrl;

    if (isKnown(profile, 'race') && ['Preta', 'Parda'].includes(profile.race)) {
      rate = regional.black;
      group = 'pessoas pretas e pardas na região';
      source = config.raceSource;
      sourceUrl = config.raceSourceUrl;
    } else if (isKnown(profile, 'race') && profile.race === 'Branca') {
      rate = regional.nonBlack;
      group = 'grupo agregado de pessoas não negras na região; não é uma taxa exclusiva para pessoas brancas';
      source = config.raceSource;
      sourceUrl = config.raceSourceUrl;
    }

    return {
      region: profile.region,
      year: config.year,
      rate,
      percentage: rate / 1000,
      group,
      source,
      sourceUrl,
      totalRate: regional.total,
      totalPercentage: regional.total / 1000,
      nationalRate: config.nationalRate
    };
  }

  return { evaluate, signals, regionalSafety };
})();

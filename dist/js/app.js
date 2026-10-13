/*
 * Planos em Contexto · interface e comportamento
 *
 * Este arquivo monta as telas, navega entre rotas e processa as respostas em
 * memória. Textos editoriais, perguntas e links devem ser editados em
 * content.js; aparência deve ser editada em ../css/style.css.
 */

const {
  meta,
  navigation,
  shell,
  home: homeCopy,
  pages: copy,
  sources: sourceConfig,
  visuals,
  topics,
  statements,
  evidenceSources,
  incomeBands,
  questions,
  answersToSkip: skip,
  analysis,
  editorialSections
} = window.siteContent;

const root = sourceConfig.tseRoot;
const plans = Object.fromEntries(Object.entries(sourceConfig.plans).map(([candidate, path]) => [candidate, root + path]));
const names = sourceConfig.names;

const profile = {};
let step = 0;
let completed = false;
let filters = { candidate: 'all', topic: 'all', type: 'all' };

const app = document.getElementById('app');

const esc = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

const known = key => Array.isArray(profile[key])
  ? profile[key].some(value => !skip.includes(value))
  : Boolean(profile[key] && !skip.includes(profile[key]));

const profileHasAny = (field, values) => {
  const answer = profile[field];
  return Array.isArray(answer) ? values.some(value => answer.includes(value)) : values.includes(answer);
};

const questionIsVisible = question => !question.showWhenAny || question.showWhenAny.some(rule => known(rule.field) && profileHasAny(rule.field, rule.values));
const activeQuestions = () => questions.filter(questionIsVisible);

function discardHiddenAnswers() {
  questions.filter(question => !questionIsVisible(question)).forEach(question => delete profile[question.id]);
}

function renderShell() {
  document.querySelector('header').innerHTML = `<div class="wrap top">
    <button class="brand" data-go="inicio" aria-label="${esc(meta.brand)}, início">
      <span class="mark" aria-hidden="true">${esc(shell.mark)}</span>${esc(meta.brand)}
    </button>
    <nav class="nav" aria-label="Navegação principal">
      ${navigation.map(item => `<a href="#${item.route}">${esc(item.label)}</a>`).join('')}
    </nav>
  </div>`;

  document.querySelector('footer').innerHTML = `<div class="wrap footer-inner">
    <span>${esc(shell.footerTagline)}</span>
    <span>Revisão das fontes: ${esc(meta.revision)}</span>
  </div>`;
}

function link(url, label) {
  return `<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗<span class="sr">${esc(copy.openInNewTab)}</span></a>`;
}

function go(route) {
  if (location.hash === `#${route}`) render();
  else location.hash = route;
}

function heading(label, title, text) {
  return `<div class="page-head">
    <a class="back" href="#inicio">${esc(copy.back)}</a>
    <div class="eyebrow">${esc(label)}</div>
    <h1>${esc(title)}</h1>
    <p class="muted">${esc(text)}</p>
  </div>`;
}

function home() {
  return `<div class="home-kicker"><span>${esc(homeCopy.kicker)}</span><span>${esc(homeCopy.period)}</span></div>
    <section class="hero">
      <div>
        <h1>${esc(homeCopy.title[0])}<br>${esc(homeCopy.title[1])} <em>${esc(homeCopy.title[2])}</em></h1>
        <p class="lead">${esc(homeCopy.lead)}</p>
        <div class="hero-cta">
          <a class="btn" href="#analise">${esc(completed ? homeCopy.reviewLabel : homeCopy.startLabel)} <span aria-hidden="true">→</span></a>
          <span class="mini">${esc(homeCopy.optionalQuestions)}</span>
        </div>
        ${completed ? '<p class="mini"><a href="#resultados">Voltar aos resultados →</a></p>' : ''}
      </div>
      <aside class="topic-directory" aria-label="Temas da análise">
        <div class="directory-head"><b>${esc(homeCopy.directoryTitle)}</b><span>${esc(homeCopy.directoryIndex)}</span></div>
        ${topics.map((topic, index) => `<div class="directory-row"><i>${String(index + 1).padStart(2, '0')}</i><span>${esc(topic.title)}</span></div>`).join('')}
        <p class="directory-foot">${homeCopy.directoryFoot}</p>
      </aside>
    </section>
    <div class="home-links">
      <a class="home-link" href="#metodologia"><span class="eyebrow">${esc(homeCopy.methodCard.eyebrow)}</span><b>${esc(homeCopy.methodCard.title)}</b><span class="arrow" aria-hidden="true">↗</span><p>${esc(homeCopy.methodCard.description)}</p></a>
      <a class="home-link" href="#fontes"><span class="eyebrow">${esc(homeCopy.sourcesCard.eyebrow)}</span><b>${esc(homeCopy.sourcesCard.title)}</b><span class="arrow" aria-hidden="true">↗</span><p>${esc(homeCopy.sourcesCard.description)}</p></a>
    </div>
    <div class="note">${esc(homeCopy.note)}</div>`;
}

function wizard() {
  const visibleQuestions = activeQuestions();
  step = Math.min(step, visibleQuestions.length - 1);
  const question = visibleQuestions[step];
  const selected = profile[question.id] || [];
  const options = [...question.options, ...skip];

  return `<div class="wizard">
    <div class="wizard-top"><a class="back" href="#inicio">${esc(copy.back)}</a><span class="eyebrow">${esc(copy.analysisLabel)}</span></div>
    <section class="wizard-card">
      <div class="progress-row">
        <div class="step-bubble" aria-hidden="true">${String(step + 1).padStart(2, '0')}</div>
        <div class="progress-copy">
          <b role="status">${esc(copy.questionCounter)} ${step + 1} ${esc(copy.questionOf)} ${visibleQuestions.length}</b>
          <div class="bar" role="progressbar" aria-label="Progresso das perguntas" aria-valuemin="0" aria-valuemax="${visibleQuestions.length}" aria-valuenow="${step + 1}"><span style="width:${(step + 1) / visibleQuestions.length * 100}%"></span></div>
        </div>
      </div>
      <h1 class="question" id="question">${esc(question.title)}</h1>
      <details class="question-help"><summary>${esc(copy.questionHelp)}</summary><p>${esc(question.why)}</p></details>
      ${question.multi ? `<p class="mini muted">${esc(question.multiHint || 'Marque todas as opções que se aplicam.')}</p>` : ''}
      <div class="options" role="group" aria-labelledby="question">
        ${options.map(option => `<label class="option ${skip.includes(option) ? 'skip-option' : ''}"><input type="${question.multi ? 'checkbox' : 'radio'}" name="answer" value="${esc(option)}" ${(question.multi ? selected.includes(option) : selected === option) ? 'checked' : ''}><span>${esc(option)}</span></label>`).join('')}
      </div>
      <div class="controls"><button class="btn secondary" id="prev">${step ? esc(copy.previous) : esc(copy.home)}</button><button class="btn" id="next">${step === visibleQuestions.length - 1 ? esc(copy.seeResults) : esc(copy.continue)}</button></div>
      <p class="wizard-note">${esc(copy.wizardNote)}</p>
    </section>
  </div>`;
}

function reason(topic) {
  return impactEngine.signals(topic.id, profile);
}

function incomeContext() {
  const parts = [];
  if (known('householdDisposableIncome')) parts.push(`Renda disponível da casa: ${profile.householdDisposableIncome}.`);
  if (known('residents')) parts.push(`Moradores: ${profile.residents}.`);
  if (known('essentialBurden')) parts.push(`Despesas essenciais: ${profile.essentialBurden} da renda disponível.`);
  if (known('capitalShare')) parts.push(`Parcela vinda de capital: ${profile.capitalShare}.`);
  if (known('incomeSources')) parts.push(`Fontes pessoais: ${profile.incomeSources.join(', ')}.`);
  if (known('mainIncomeSource')) parts.push(`Fonte principal: ${profile.mainIncomeSource}.`);
  if (known('businessWithdrawal')) parts.push(`Retirada de empresa própria: ${profile.businessWithdrawal}.`);
  return `${parts.join(' ') || 'Dados econômicos insuficientes para uma leitura específica.'} Não calculamos imposto, benefício ou economia em reais.`;
}

function statementCard(statement) {
  return `<span class="badge">${esc(copy.statementType)}</span><p>${esc(statement.text)}</p>
    <details><summary>${esc(copy.author.replace(':', ''))}, ${esc(copy.publication.replace(':', ''))} e ${esc(copy.context.replace(':', ''))}</summary>
      <p><b>${esc(copy.author)}</b> ${esc(statement.author)}</p>
      <p><b>${esc(copy.publication)}</b> ${esc(statement.date)}</p>
      <p><b>${esc(copy.context)}</b> ${esc(statement.context)}</p>
      <p class="muted">${esc(copy.statementDisclaimer)}</p>
    </details>${link(statement.url, copy.openOriginal)}`;
}

function candidate(topic, candidateId) {
  const topicStatements = statements.filter(statement => statement.candidate === candidateId && statement.topic === topic.id);
  const statementMarkup = topicStatements.length
    ? topicStatements.map(statementCard).join('')
    : `<span class="badge">${esc(copy.statementType)}</span><p class="muted">${esc(copy.missingStatement)}</p><p class="mini muted">${esc(copy.missingStatementNote)}</p>`;
  const pages = candidateId === 'lula' ? topic.lp : topic.fp;
  const candidateVisual = visuals.candidates[candidateId];

  return `<section class="candidate"><div class="candidate-head"><img class="candidate-portrait" src="${esc(candidateVisual.image)}" alt="${esc(candidateVisual.alt)}" loading="lazy"><div><h4>${esc(names[candidateId])}</h4><span class="badge">${esc(copy.officialPlanBadge)}</span></div></div>
    <div class="promise-label">${esc(copy.promiseLabel)}</div><p class="promise">${esc(topic[candidateId])}</p>${link(`${plans[candidateId]}#page=${pages.split(/[–;]/)[0]}`, `TSE · PDF, páginas ${pages}`)}
    <div class="statement">${statementMarkup}</div></section>`;
}

function topicVisual(topic) {
  const visual = visuals.topics[topic.id];
  return `<figure class="topic-visual"><img src="${esc(visual.image)}" alt="${esc(visual.alt)}" loading="lazy"><figcaption><span class="eyebrow">${esc(copy.visualLabel)}</span><p>${esc(visual.caption)}</p><small>${esc(copy.visualDisclaimer)}</small></figcaption></figure>`;
}

function comparisonCard(topic) {
  const comparison = topic.comparison;
  return `<section class="editorial-analysis"><div class="eyebrow">${esc(copy.comparisonLabel)}</div><h3>${esc(comparison.criterion)}</h3><p class="analysis-disclaimer">${esc(copy.comparisonDisclaimer)}</p><div class="analysis-grid"><div><b>${esc(names.lula)} · ${esc(copy.relativeStrength)}</b><p>${esc(comparison.lula)}</p></div><div><b>${esc(names.flavio)} · ${esc(copy.relativeStrength)}</b><p>${esc(comparison.flavio)}</p></div><div><b>${esc(copy.tradeoff)}</b><p>${esc(comparison.tradeoff)}</p></div></div><p class="analysis-source"><b>${esc(copy.comparisonSource)}:</b> ${link(sourceConfig.comparative.url, sourceConfig.comparative.name)}. ${esc(sourceConfig.comparative.note)}</p></section>`;
}

function profileImpactCard(topic) {
  const impact = topic.comparison.profileImpact;
  const lula = impactEngine.evaluate(topic, 'lula', profile);
  const flavio = impactEngine.evaluate(topic, 'flavio', profile);
  const confidenceRank = { low: 1, medium: 2, high: 3 };
  const confidenceLevel = [lula.confidence, flavio.confidence].sort((a, b) => confidenceRank[b] - confidenceRank[a])[0];
  const effectList = (label, items, className) => items.length ? `<div class="effect-list ${className}"><b>${esc(label)}</b><ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : '';
  const scoreBlock = (candidateName, result, narrative) => `<div class="impact-candidate"><div class="impact-candidate-top"><b>${esc(candidateName)}</b><span class="impact-direction">${esc(result.scoreLabel)}</span></div>${effectList(copy.possibleUpside, result.improvements, 'effect-positive')}${effectList(copy.possiblePressure, result.pressures, 'effect-negative')}${!result.reasons.length ? `<p>${esc(copy.noSpecificRule)}</p>` : ''}<p class="impact-narrative">${esc(narrative)}</p><small>${esc(copy.confidenceLabel)}: ${esc(result.confidenceText)}</small></div>`;
  const risk = topic.id === 'security' ? impactEngine.regionalSafety(profile) : null;
  const riskMarkup = risk ? `<div class="statistical-risk"><div><span class="eyebrow">${esc(copy.statisticalRiskLabel)}</span><strong>${esc(risk.rate.toFixed(1).replace('.', ','))} por 100 mil</strong><b>${esc(risk.percentage.toFixed(4).replace('.', ','))}% ao ano</b></div><p>Referência: ${esc(risk.group)}, ${esc(risk.region)}, ${esc(risk.year)}. Taxa total da região: ${esc(risk.totalRate.toFixed(1).replace('.', ','))} por 100 mil (${esc(risk.totalPercentage.toFixed(4).replace('.', ','))}%).</p><p class="mini muted">${esc(copy.statisticalRiskWarning)}</p><p class="mini">Fonte: ${link(risk.sourceUrl, risk.source)}</p></div>` : '';
  return `<section class="profile-impact"><div class="eyebrow">${esc(copy.profileImpactLabel)}</div><p class="profile-impact-intro">${esc(copy.profileImpactIntro)} ${esc(copy.scoreScale)}.</p><p class="profile-signals"><b>${esc(copy.profileSignals)}:</b> ${esc(lula.signals)}</p>${riskMarkup}<div class="impact-meta"><span><b>${esc(copy.relevanceLabel)}:</b> ${esc(lula.relevanceText)}</span><span><b>${esc(copy.confidenceLabel)}:</b> ${esc(copy.confidenceLevels[confidenceLevel])}</span></div><div class="impact-grid"><div>${scoreBlock(names.lula, lula, impact.lula)}</div><div>${scoreBlock(names.flavio, flavio, impact.flavio)}</div><div class="impact-caveat"><b>${esc(copy.tradeoff)}</b><p>${esc(impact.caveat)}</p></div></div></section>`;
}

function results() {
  const ordered = [...topics];
  const labels = { personalIncome: 'Renda pessoal', householdDisposableIncome: 'Renda disponível', residents: 'Moradores', childrenUnder14: 'Crianças menores de 14', householdNeeds: 'Cuidados e educação', essentialBurden: 'Despesas essenciais', work: 'Situações de trabalho', workSchedule: 'Jornada', incomeSources: 'Fontes de renda', mainIncomeSource: 'Fonte principal', businessRelation: 'Relação com empresa própria', businessWithdrawal: 'Retirada da empresa', capitalShare: 'Renda do capital', businessLabor: 'Trabalho no negócio próprio', housing: 'Moradia', housingBurden: 'Custo da moradia', healthAccess: 'Acesso à saúde', educationContext: 'Educação', area: 'Área', region: 'Região', gender: 'Gênero', race: 'Raça/cor', religion: 'Liberdade religiosa' };

  return `${heading(copy.results.label, copy.results.title, copy.results.intro)}
    <details class="profile-sheet"><summary>${esc(copy.profileSummary)}</summary><div class="profile">${questions.filter(question => known(question.id)).map(question => `<span>${esc(labels[question.id] + ': ' + (question.multi ? profile[question.id].join(', ') : profile[question.id]))}</span>`).join('') || `<span>${esc(copy.profileEmpty)}</span>`}</div></details>
    <div class="controls" style="margin:0 0 18px;flex-wrap:wrap"><a class="btn secondary" href="#analise">${esc(copy.reviewAnswers)}</a><button class="btn secondary" id="clear">${esc(copy.clearAnswers)}</button></div>
    <div class="note" style="margin-bottom:18px">${esc(copy.resultsNote)}</div>
    <div class="topics">${ordered.map((topic, index) => `<details class="topic" ${index === 0 ? 'open' : ''}><summary class="topic-summary"><span class="topic-index">${String(index + 1).padStart(2, '0')}</span><span class="topic-title"><h2>${esc(topic.title)}</h2><span>${esc(copy.complementaryTopic)}</span></span></summary><div class="topic-body"><div class="context"><b>${esc(copy.contextLabel)}</b><p>${esc(reason(topic))}</p></div>${topicVisual(topic)}<div class="compare">${candidate(topic, 'lula')}${candidate(topic, 'flavio')}</div>${profileImpactCard(topic)}${comparisonCard(topic)}<details class="limits"><summary>${esc(copy.possibleRelation)}</summary><p class="mini">${esc(analysis.relations[topic.id])}</p>${['cost', 'work'].includes(topic.id) ? `<p class="mini">${esc(incomeContext())}</p>` : ''}<div class="uncertain"><b>${esc(copy.uncertaintyTitle)}</b><p>${esc(topic.limit)}</p><p>${esc(copy.documentedCommitment)}</p></div></details></div></details>`).join('')}</div>`;
}

function method() {
  return `${heading(copy.method.label, copy.method.title, copy.method.intro)}<div class="method-grid">${editorialSections.map(([title, text]) => `<section class="panel"><h3>${esc(title)}</h3><p class="muted">${esc(text)}</p></section>`).join('')}</div><p style="margin-top:25px"><a class="btn" href="#analise">${esc(copy.startAnalysis)}</a></p>`;
}

function sourceRecords() {
  return [
    ...Object.keys(names).flatMap(candidateId => topics.map(topic => ({
      candidate: candidateId,
      topic: topic.id,
      type: 'plan',
      title: `Plano de governo 2027–2030 · ${topic.title}`,
      date: 'Eleições 2026; data de publicação não informada nesta revisão',
      meta: `TSE · páginas ${candidateId === 'lula' ? topic.lp : topic.fp}`,
      url: `${plans[candidateId]}#page=${(candidateId === 'lula' ? topic.lp : topic.fp).split(/[–;]/)[0]}`
    }))),
    ...statements.map(statement => ({ ...statement, type: 'statement', meta: `${statement.author} · ${statement.context}` })),
    ...Object.keys(names).flatMap(candidateId => topics.map(topic => ({
      candidate: candidateId,
      topic: topic.id,
      type: 'comparison',
      title: `Resumo comparativo · ${topic.title}`,
      date: `Consultado em ${meta.revision}`,
      meta: sourceConfig.comparative.note,
      url: sourceConfig.comparative.url
    }))),
    ...topics.map(topic => ({
      candidate: 'evidence',
      topic: topic.id,
      type: 'evidence',
      title: `${sourceConfig.supplemental.name} · ${topic.title}`,
      date: `Consultado em ${meta.revision}`,
      meta: sourceConfig.supplemental.note,
      url: sourceConfig.supplemental.url
    })),
    ...evidenceSources.map(source => ({
      candidate: 'evidence',
      topic: source.topic,
      type: 'evidence',
      title: source.title,
      date: source.date,
      meta: `${source.institution} · ${source.note}`,
      url: source.url
    }))
  ];
}

function sources() {
  const records = sourceRecords().filter(source =>
    (filters.candidate === 'all' || source.candidate === filters.candidate) &&
    (filters.topic === 'all' || source.topic === filters.topic) &&
    (filters.type === 'all' || source.type === filters.type)
  );
  const filterOptions = [
    ['candidate', copy.filters.candidate, [['all', copy.filters.all], ...Object.entries(names), ['evidence', copy.evidenceType]]],
    ['topic', copy.filters.topic, [['all', copy.filters.all], ...topics.map(topic => [topic.id, topic.title])]],
    ['type', copy.filters.type, [['all', copy.filters.all], ['plan', copy.filters.plan], ['statement', copy.filters.statement], ['comparison', copy.comparisonType], ['evidence', copy.filters.evidence]]]
  ];

  return `${heading(copy.sources.label, copy.sources.title, copy.sources.intro)}
    <div class="filters">${filterOptions.map(([id, label, options]) => `<label>${esc(label)}<select data-filter="${id}">${options.map(([value, name]) => `<option value="${esc(value)}" ${filters[id] === value ? 'selected' : ''}>${esc(name)}</option>`).join('')}</select></label>`).join('')}</div>
    <p class="mini muted" role="status">${records.length} ${esc(copy.sourceCountSuffix)} ${esc(meta.revision)}</p>
    <div class="sources">${records.map(source => `<article class="panel"><div class="eyebrow">${esc(source.candidate === 'evidence' ? copy.evidenceType : names[source.candidate])} · ${esc(topics.find(topic => topic.id === source.topic).title)}</div><h3>${esc(source.title)}</h3><span class="badge">${esc(source.type === 'plan' ? copy.planType : source.type === 'statement' ? copy.statementType : source.type === 'evidence' ? copy.evidenceType : copy.comparisonType)}</span><p class="source-meta">${esc(source.date)}</p><p class="mini muted">${esc(source.meta)}</p>${link(source.url, copy.openSource)}</article>`).join('') || `<p>${esc(copy.noMatchingSources)}</p>`}</div>
    <div class="note" style="margin-top:25px">${esc(copy.sourceNote)} ${link(`${root}propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno`, copy.officialTseIndex)}.</div>`;
}

function render(focus = true) {
  let route = location.hash.slice(1) || 'inicio';
  if (route === 'resultados' && !completed) route = 'analise';
  const pages = { inicio: home, analise: wizard, resultados: results, metodologia: method, fontes: sources };

  app.innerHTML = (pages[route] || home)();
  document.querySelectorAll('.nav a').forEach(anchor => anchor.setAttribute('aria-current', anchor.hash === `#${route}` ? 'page' : 'false'));
  if (focus) {
    app.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  const titles = { analise: 'Análise guiada', resultados: 'Seus resultados', metodologia: 'Metodologia', fontes: 'Lista de fontes' };
  document.title = route === 'inicio' ? meta.pageTitle : `${titles[route] || 'Início'} · ${meta.brand}`;
}

app.addEventListener('change', event => {
  if (event.target.dataset.filter) {
    filters[event.target.dataset.filter] = event.target.value;
    render(false);
    app.querySelector(`[data-filter="${event.target.dataset.filter}"]`).focus();
    return;
  }

  if (event.target.name !== 'answer') return;
  const question = activeQuestions()[step];

  if (question.multi) {
    let values = [...app.querySelectorAll('input:checked')].map(input => input.value);
    if (skip.includes(event.target.value) && event.target.checked) values = [event.target.value];
    else if (event.target.checked) values = values.filter(value => !skip.includes(value));
    if (question.id === 'incomeSources') {
      if (event.target.value === 'Sem renda pessoal' && event.target.checked) values = ['Sem renda pessoal'];
      else if (event.target.checked) values = values.filter(value => value !== 'Sem renda pessoal');
    }
    if (question.exclusiveOption) {
      if (event.target.value === question.exclusiveOption && event.target.checked) values = [question.exclusiveOption];
      else if (event.target.checked) values = values.filter(value => value !== question.exclusiveOption);
    }
    profile[question.id] = values;
    app.querySelectorAll('input').forEach(input => { input.checked = values.includes(input.value); });
  } else {
    profile[question.id] = event.target.value;
  }
  discardHiddenAnswers();
});

app.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;

  if (button.id === 'prev') {
    if (step) step--;
    else go('inicio');
    if (step || location.hash === '#analise') render();
  }

  if (button.id === 'next') {
    const visibleQuestions = activeQuestions();
    const question = visibleQuestions[step];
    if (!profile[question.id] || profile[question.id].length === 0) profile[question.id] = question.multi ? ['Prefiro não responder'] : 'Prefiro não responder';
    discardHiddenAnswers();
    const updatedQuestions = activeQuestions();
    if (step < updatedQuestions.length - 1) {
      step++;
      render();
    } else {
      completed = true;
      go('resultados');
    }
  }

  if (button.id === 'clear') {
    Object.keys(profile).forEach(key => delete profile[key]);
    completed = false;
    step = 0;
    go('inicio');
  }
});

renderShell();
document.querySelector('.brand').addEventListener('click', () => go('inicio'));
window.addEventListener('hashchange', () => render());
render(false);

/*
 * Planos em Contexto · conteúdo editorial
 *
 * EDITE AQUI quando quiser:
 * - corrigir uma vírgula ou trocar um texto;
 * - acrescentar uma fonte ou declaração;
 * - alterar perguntas e opções do questionário;
 * - atualizar a data de revisão.
 *
 * A interface e o comportamento ficam em app.js. A aparência fica em
 * ../css/style.css. Não é necessário procurar textos dentro de HTML minificado.
 */

window.siteContent = {
  meta: {
    brand: 'Planos em Contexto',
    pageTitle: 'Planos em Contexto',
    description: 'Propostas e declarações públicas em contexto. Uma leitura informativa, com fontes e incertezas, a partir de respostas opcionais.',
    themeColor: '#f3f1eb',
    revision: '13/10/2026'
  },

  navigation: [
    { label: 'Início', route: 'inicio' },
    { label: 'Análise', route: 'analise' },
    { label: 'Metodologia', route: 'metodologia' },
    { label: 'Fontes', route: 'fontes' }
  ],

  shell: {
    mark: 'p.',
    footerTagline: 'Planos em Contexto · informação para sua própria reflexão'
  },

  home: {
    kicker: 'Um guia para ler propostas',
    period: 'Presidência · Brasil · 2026',
    title: ['O que muda', 'na', 'sua vida?'],
    lead: 'Lula e Flávio Bolsonaro. Planos, declarações e as possíveis relações com o seu cotidiano — sem escolher por você.',
    startLabel: 'Começar minha análise',
    reviewLabel: 'Revisar minha análise',
    optionalQuestions: 'Perguntas adaptadas ao seu contexto. Todas opcionais e sem cadastro.',
    directoryTitle: 'O cotidiano, em seis temas.',
    directoryIndex: 'ÍNDICE',
    directoryFoot: 'Você informa seu contexto.<br>A leitura aproxima as propostas da sua realidade e mostra os limites dessa relação.',
    methodCard: {
      eyebrow: 'Antes de comparar',
      title: 'Como funciona',
      description: 'Critérios, privacidade e limites da análise.'
    },
    sourcesCard: {
      eyebrow: 'Para conferir',
      title: 'Fontes abertas',
      description: 'Planos e publicações. Leia no original.'
    },
    note: 'Não é recomendação de voto nem previsão de resultados. As respostas ficam apenas na memória desta página e se apagam ao recarregar. Não pedimos nome, CPF ou endereço.'
  },

  pages: {
    analysisLabel: 'Seu contexto',
    method: {
      label: 'Critérios editoriais',
      title: 'Como esta leitura é construída.',
      intro: 'Informação rastreável, interpretação identificada e limites à vista.'
    },
    results: {
      label: 'Sua leitura em contexto',
      title: 'Explore um tema de cada vez.',
      intro: 'Abra os cards para comparar propostas, declarações, relações possíveis e limites. Nenhum tema estima ganho pessoal ou resultado de governo.'
    },
    sources: {
      label: 'Documentos e publicações',
      title: 'Abra a fonte. Leia no original.',
      intro: 'Filtre por candidato, tema e tipo. Os links dos planos apontam para o mesmo documento, em páginas relacionadas a cada tema.'
    },
    back: '← Início',
    startAnalysis: 'Iniciar análise →',
    reviewAnswers: 'Revisar respostas',
    clearAnswers: 'Apagar respostas',
    resultsNote: 'A leitura separa relevância, possíveis melhorias, possíveis pressões e confiança; não é ranking nem recomendação de candidato.',
    profileSummary: 'Ver o contexto que você informou',
    profileEmpty: 'Perfil não informado · leitura geral',
    questionHelp: 'Como responder e por que perguntamos',
    continue: 'Continuar →',
    seeResults: 'Ver resultados →',
    previous: '← Voltar',
    home: '← Início',
    wizardNote: 'Você pode mudar as respostas depois. Avançar sem selecionar equivale a “Prefiro não responder”.',
    selectedTopic: 'Tema escolhido por você',
    complementaryTopic: 'Impacto potencial para o seu perfil',
    contextLabel: 'Seu contexto',
    comparisonLabel: 'Análise comparativa · interpretação editorial',
    comparisonDisclaimer: 'Isto é uma análise, não uma recomendação de voto. “Melhor” ou “pior” depende do critério declarado e da execução; não significa que uma proposta produzirá o resultado esperado.',
    comparisonCriterion: 'Critério observado',
    relativeStrength: 'Ponto forte relativo',
    tradeoff: 'Contrapartida e limite',
    comparisonSource: 'Fonte do comparativo',
    profileImpactLabel: 'Como isso pode tocar o seu perfil',
    profileImpactIntro: 'Relacionamos mecanismos das propostas às respostas que você informou. Melhorias e pressões aparecem separadamente; não calculamos uma nota geral nem prevemos o que acontecerá com você.',
    profileSignals: 'Respostas consideradas',
    impactScoreLabel: 'Direção da leitura',
    relevanceLabel: 'Relevância para o perfil',
    confidenceLabel: 'Confiança da leitura',
    scoreScale: 'sem soma entre temas',
    relevanceLevels: { none: 'não identificada', low: 'baixa', medium: 'média', high: 'alta' },
    confidenceLevels: { low: 'baixa', medium: 'média', high: 'alta' },
    noSpecificRule: 'Nenhum mecanismo específico foi acionado pelas respostas informadas; mostramos a análise geral do tema.',
    scorePositive: 'possível melhora',
    scoreNegative: 'possível pressão',
    scoreNeutral: 'efeito indeterminado',
    scoreMixed: 'efeitos mistos',
    statisticalRiskLabel: 'Risco estatístico regional',
    statisticalRiskWarning: 'Taxa populacional anual observada; não é sua probabilidade pessoal. A macrorregião reúne realidades muito diferentes e não incorpora município, bairro, idade, rotina ou outras exposições.',
    possibleUpside: 'Possível melhora',
    possiblePressure: 'Possível pressão ou risco',
    possibleRelation: 'Possível relação e limites da leitura',
    visualLabel: 'Imagem de contexto',
    visualDisclaimer: 'Ilustração editorial criada para contextualizar o tema; não é material oficial de campanha nem prova da proposta.',
    promiseLabel: 'O que o candidato promete',
    uncertaintyTitle: 'Incerteza · o que esta leitura não permite concluir',
    documentedCommitment: 'Um compromisso documentado não é um resultado assegurado. Custos, prazos, regulamentação e execução podem alterar o alcance da proposta.',
    statementType: 'Declaração oficial',
    comparisonType: 'Fonte comparativa',
    evidenceType: 'Estudo ou dado público',
    planType: 'Plano de governo',
    officialPlanBadge: 'Plano de governo',
    missingStatement: 'Não localizado nesta revisão para este tema.',
    missingStatementNote: 'Isso não significa que o candidato não tenha se manifestado.',
    statementDisclaimer: 'Resumo editorial, sem citação direta. Conteúdo de canal ligado ao candidato; verificação da publicação não confirma a realização da promessa.',
    author: 'Autor:',
    publication: 'Publicação:',
    context: 'Contexto:',
    openOriginal: 'Abrir publicação original',
    openSource: 'Abrir fonte original',
    filters: { candidate: 'Candidato', topic: 'Tema', type: 'Tipo', all: 'Todos', plan: 'Plano de governo', statement: 'Declaração oficial', evidence: 'Estudo ou dado público' },
    sourceCountSuffix: 'referências · consultadas em',
    sourceNote: 'Datas de publicação não são automaticamente datas da fala. “Não localizado” nos cards registra uma lacuna da revisão, sem criar links ou atribuições. Para os planos, consulte também',
    officialTseIndex: 'o índice oficial do TSE',
    noMatchingSources: 'Nenhuma fonte corresponde a esses filtros.',
    questionCounter: 'Pergunta',
    questionOf: 'de',
    openInNewTab: ' (abre em nova aba)'
  },

  sources: {
    tseRoot: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/',
    plans: {
      lula: 'arquivos/proposta-pt',
      flavio: 'arquivos/proposta-pl'
    },
    names: { lula: 'Lula', flavio: 'Flávio Bolsonaro' },
    comparative: {
      name: 'Brasil do Futuro · Voto Informado 2026',
      url: 'https://brasil-futuro.vercel.app/',
      note: 'Resumos temáticos publicados pela fonte indicada; usados aqui como insumo comparativo, com interpretação editorial separada.'
    },
    supplemental: {
      name: 'Como isso me afeta? · medidas e contexto público',
      url: 'https://como-isso-me-afeta.vercel.app/',
      note: 'Fonte complementar com medidas vigentes, cálculos por faixa de renda, recortes territoriais e distinções entre propostas; conferir cada norma na fonte original.'
    },
    externalReview: {
      name: 'Sites externos · revisão de fontes e métodos',
      note: 'Sites de comparação, simuladores, guias documentais e páginas de campanha são fontes secundárias: ajudam a localizar dados e explicitar métodos, mas não substituem planos do TSE, leis, bases oficiais, estudos originais ou o contexto completo.'
    }
  },

  // Imagens são conteúdo editorial: troque os arquivos ou as descrições aqui.
  // Os caminhos são relativos à pasta dist/ e podem ser substituídos sem mexer no app.js.
  visuals: {
    candidates: {
      lula: {
        image: 'assets/candidate-lula.png',
        alt: 'Caricatura editorial de Luiz Inácio Lula da Silva, em retrato de meio corpo.'
      },
      flavio: {
        image: 'assets/candidate-flavio.png',
        alt: 'Caricatura editorial de Flávio Bolsonaro, em retrato de meio corpo.'
      }
    },
    topics: {
      work: {
        image: 'assets/topic-work.png',
        alt: 'Ilustração com trabalhadores, relógio, cinco dias destacados no calendário e uma família ao fim do expediente.',
        caption: 'Relógio, cinco dias destacados e vida familiar visualizam a discussão sobre jornada, descanso e negociação.'
      },
      cost: {
        image: 'assets/topic-cost.png',
        alt: 'Ilustração com família, cesta de compras, contas domésticas e uma balança de políticas públicas.',
        caption: 'Cesta de compras, contas e balança representam a relação entre renda, tributos, benefícios e preços.'
      },
      housing: {
        image: 'assets/topic-housing.png',
        alt: 'Ilustração com família recebendo chaves, conjunto habitacional, trabalhadores e planta urbana.',
        caption: 'Chaves, moradia em construção e planta urbana representam acesso à habitação e regularização.'
      },
      health: {
        image: 'assets/topic-health.png',
        alt: 'Ilustração com unidade de saúde, profissionais, teleatendimento e prontuário digital.',
        caption: 'Unidade de saúde, teleatendimento e registro digital representam filas, cuidado especializado e tecnologia.'
      },
      education: {
        image: 'assets/topic-education.png',
        alt: 'Ilustração com crianças em sala de aula, professora, escola e laboratório de formação técnica.',
        caption: 'Sala de aula, escola e laboratório representam educação básica, formação técnica e qualificação.'
      },
      security: {
        image: 'assets/topic-security.png',
        alt: 'Ilustração com centro integrado de operações, mapas, análise de dados e diálogo entre agentes e comunidade.',
        caption: 'Mapas, dados, coordenação e diálogo comunitário representam inteligência, integração e prevenção.'
      }
    }
  },

  topics: [
    {
      id: 'work', title: 'Trabalho e renda',
      lula: 'Propõe valorização do salário mínimo, fim da escala 6×1 e jornada de 40 horas; o resumo comparativo também destaca reindustrialização, emprego e renda com uso de bancos públicos.',
      flavio: 'Propõe reduzir custos de contratação e ampliar a negociação das condições de trabalho; o resumo comparativo acrescenta redução de impostos sobre consumo, equilíbrio fiscal e crédito acessível.',
      comparison: {
        criterion: 'Qual proposta explicita melhor o caminho para gerar trabalho e renda?',
        lula: 'Ponto forte relativo: apresenta uma estratégia mais ampla de política industrial, geração de emprego e atuação de bancos públicos.',
        flavio: 'Ponto forte relativo: concentra-se mais em reduzir custos, ampliar crédito e aliviar impostos que afetam o consumo.',
        tradeoff: 'A primeira depende de coordenação e recursos públicos; a segunda depende de espaço fiscal, desenho tributário e transmissão do crédito para a economia real.',
        profileImpact: {
          lula: 'Para quem depende do salário e trabalha em emprego formal, a valorização salarial e a redução da jornada poderiam melhorar renda e tempo disponível se aprovadas. Uma calculadora externa ilustra a ordem de grandeza da discussão: a 6×1 representa 52 folgas a menos por ano que a 5×2, sob uma hipótese simplificada; isso não é uma previsão individual. Para empresas e empregadores, a adaptação pode pressionar custos e contratação.',
          flavio: 'Para quem busca emprego ou administra um pequeno negócio, menor custo de contratação e mais crédito poderiam ampliar oportunidades. Para trabalhadores, um regime mais flexível ou por hora sem teto semanal claramente definido pode trazer flexibilidade, mas também menos previsibilidade; isso depende da regra aprovada e não é tratado como efeito automático.',
          caveat: 'O efeito depende do vínculo, do setor, do tamanho da empresa e das regras aprovadas.'
        }
      },
      lp: '73–77', fp: '43–45',
      limit: 'A situação de trabalho não revela sua jornada, categoria ou convenção coletiva. Aprovação legislativa, regras de transição, espaço fiscal e execução precisam ser considerados.'
    },
    {
      id: 'cost', title: 'Custo de vida',
      lula: 'Defende reforma tributária, tributação progressiva, isenção de imposto de renda para faixas menores e menor carga sobre o consumo, combinadas a medidas de distribuição de renda.',
      flavio: 'Propõe reduzir impostos sobre o consumo, corrigir a reforma para baixar o IVA, simplificar a tributação e revisar subsídios considerados ineficientes.',
      comparison: {
        criterion: 'Qual proposta explicita melhor o critério escolhido para aliviar o orçamento?',
        lula: 'Ponto forte relativo: é mais explícito no objetivo distributivo — aliviar faixas menores e deslocar parte da carga para renda e patrimônio.',
        flavio: 'Ponto forte relativo: é mais explícito no objetivo de reduzir o imposto embutido no consumo e simplificar o sistema.',
        tradeoff: 'A comparação não permite concluir qual reduziria mais os preços ou impostos: isso depende de alíquotas, compensações, arrecadação e comportamento dos preços.',
        profileImpact: {
          lula: 'Para famílias de renda menor ou que gastam quase tudo em consumo, uma combinação de menor carga sobre consumo e transferência de renda poderia ampliar o orçamento disponível. A isenção do IR até R$ 5.000 aparece como regra vigente no contexto complementar; por isso, sua manutenção não deve ser contada como ganho novo sem uma mudança adicional. Comparativos externos também lembram que inflação menor significa preços subindo mais devagar, não preços automaticamente menores.',
          flavio: 'Para famílias que comprometem grande parte do orçamento com compras e contas, uma redução do imposto sobre consumo poderia aliviar preços se fosse repassada. O contexto complementar mostra que alíquotas estaduais e regras atuais já formam uma base diferente por estado; ajustes fiscais ou mudanças em benefícios podem criar pressão compensatória, dependendo do desenho.',
          caveat: 'Renda informada não mostra gastos, patrimônio, impostos pagos ou acesso a benefícios; não calculamos economia individual.'
        }
      },
      lp: '18–25; 55–58', fp: '30; 33; 71–72',
      limit: 'Renda pessoal e familiar não equivalem automaticamente a renda tributável. Não calculamos desconto, preço futuro, benefício individual ou economia doméstica.'
    },
    {
      id: 'housing', title: 'Moradia',
      lula: 'Propõe ampliar o Minha Casa, Minha Vida para famílias de baixa renda, urbanizar assentamentos precários, regularizar terrenos e oferecer subsídios com juros menores.',
      flavio: 'Prevê Casa Verde e Amarela, desburocratização do financiamento, combate à especulação e redução de custos de cartório.',
      comparison: {
        criterion: 'Qual proposta cobre melhor o obstáculo de moradia que está sendo observado?',
        lula: 'Ponto forte relativo: cobre mais diretamente a baixa renda, a urbanização e a regularização de áreas precárias.',
        flavio: 'Ponto forte relativo: concentra-se em facilitar financiamento, reduzir custos de transação e acelerar o acesso à propriedade.',
        tradeoff: 'A primeira exige subsídio, oferta habitacional e coordenação urbana; a segunda depende de crédito, renda e de que a desburocratização não reduza a proteção necessária.',
        profileImpact: {
          lula: 'Para quem aluga, tem renda menor ou informou necessidade de regularização, subsídios, urbanização e documentação podem dialogar mais diretamente com o problema. A melhora depende de elegibilidade, oferta local e financiamento.',
          flavio: 'Para quem já consegue acessar crédito ou enfrenta custos de cartório e burocracia, simplificação e redução de despesas podem facilitar a compra. Para renda muito baixa, a ausência de subsídio suficiente pode limitar o efeito.',
          caveat: 'Ser inquilino, financiado ou proprietário não basta para concluir elegibilidade ou aprovação de crédito.'
        }
      },
      lp: '45–46', fp: '47–48',
      limit: 'Faixa de renda e situação de moradia não estabelecem elegibilidade. Financiamento, subsídios, oferta local e condições de crédito dependem de regras posteriores.'
    },
    {
      id: 'health', title: 'Saúde e cuidados',
      lula: 'Aborda redução de filas, fortalecimento do SUS, atenção primária, produção nacional de medicamentos e vacinas, saúde digital, telessaúde, Mais Médicos e valorização dos profissionais.',
      flavio: 'Prevê saúde preventiva, diagnóstico precoce, prontuário eletrônico único, telessaúde, inteligência artificial para apoio clínico e foco familiar em crianças, idosos e saúde mental.',
      comparison: {
        criterion: 'Qual proposta prioriza melhor o tipo de problema de saúde observado?',
        lula: 'Ponto forte relativo: apresenta uma agenda mais abrangente de rede pública, atenção primária, profissionais e produção nacional.',
        flavio: 'Ponto forte relativo: é mais concentrado em prevenção, integração de dados e apoio tecnológico ao atendimento.',
        tradeoff: 'Mais abrangência pode exigir mais coordenação e financiamento; mais tecnologia exige infraestrutura, proteção de dados, profissionais e avaliação clínica.',
        profileImpact: {
          lula: 'Se há crianças, idosos ou dependência maior da rede pública no domicílio, atenção primária, profissionais, medicamentos e redução de filas podem ter relação mais direta com o cuidado. A possível melhora depende da oferta no município.',
          flavio: 'Para quem enfrenta distância, espera ou dificuldade de deslocamento, prevenção, prontuário integrado e telessaúde poderiam facilitar o acompanhamento. A pressão possível é depender de conectividade, proteção de dados e qualidade do apoio tecnológico.',
          caveat: 'A composição familiar não informa diagnóstico, frequência de atendimento ou necessidade clínica.'
        }
      },
      lp: '34–40', fp: '25–26; 37–39',
      limit: 'Não perguntamos diagnósticos nem uso de serviços. Oferta de atendimento depende da rede local, profissionais, recursos, dados e execução.'
    },
    {
      id: 'education', title: 'Educação e formação',
      lula: 'Aborda alfabetização na idade certa, escola em tempo integral, valorização docente, ensino técnico e superior, Institutos Federais e pesquisa em universidades públicas.',
      flavio: 'Aborda método fônico, escola integral orientada a resultados, ensino técnico conectado ao mercado, escolas cívico-militares, gestão por resultados e voucher quando faltarem vagas.',
      comparison: {
        criterion: 'Qual proposta está mais alinhada ao objetivo educacional declarado?',
        lula: 'Ponto forte relativo: cobre um percurso mais amplo, da alfabetização à universidade, com maior ênfase na rede pública e na pesquisa.',
        flavio: 'Ponto forte relativo: é mais específico sobre método de alfabetização, gestão por resultados, formação técnica e escolha quando faltarem vagas.',
        tradeoff: 'A primeira depende de expansão e coordenação da rede; a segunda depende de medir resultados, definir vouchers e equilibrar escolha, qualidade e equidade.',
        profileImpact: {
          lula: 'Para quem informou crianças ou adolescentes em casa, escola integral, alfabetização, professores e oferta pública podem ter relação direta com cuidado e aprendizagem. Para estudantes e trabalhadores, ensino técnico e superior ampliados podem abrir caminhos, se houver vagas.',
          flavio: 'Para famílias que enfrentam falta de vagas, a proposta de voucher pode ampliar opções se houver oferta e regras claras; método fônico e ensino técnico podem atender a critérios específicos. Também há pressão possível sobre equidade e qualidade entre escolas.',
          caveat: 'A resposta sobre a composição da casa não informa idade, matrícula, qualidade da escola ou necessidade profissional.'
        }
      },
      lp: '30–34', fp: '21; 34–37',
      limit: 'Composição familiar não informa idade escolar ou matrícula. Vagas, currículo, resultados e implementação dependem também de estados e municípios.'
    },
    {
      id: 'security', title: 'Segurança pública',
      lula: 'Propõe integração entre União, estados e municípios, inteligência e asfixia financeira das facções, além de enfrentamento da violência contra mulheres e do racismo estrutural, controle de armas e modernização policial.',
      flavio: 'Prevê classificar facções como organizações narcoterroristas, reduzir a maioridade penal, criar presídios de segurança máxima, reforçar fronteiras, usar reconhecimento facial e restringir progressão para crimes hediondos.',
      comparison: {
        criterion: 'Qual proposta se ajusta melhor ao tipo de redução de violência que está sendo avaliado?',
        lula: 'Ponto forte relativo: prioriza coordenação federativa, inteligência e sufocamento financeiro, com medidas preventivas e de proteção a grupos vulneráveis.',
        flavio: 'Ponto forte relativo: apresenta medidas mais duras e concretas de punição, encarceramento, fronteiras e vigilância tecnológica.',
        tradeoff: 'A primeira depende de cooperação e investigação qualificada; a segunda depende de mudanças legais, capacidade prisional, controle de tecnologia e avaliação de efeitos sobre violência e direitos.',
        profileImpact: {
          lula: 'Para qualquer perfil, integração, investigação e proteção contra violência podem melhorar a segurança coletiva se forem executadas. Para grupos expostos a violência doméstica ou discriminação, a ênfase específica pode ser mais relevante.',
          flavio: 'Para quem prioriza resposta penal rápida, fronteiras e vigilância, medidas mais duras podem parecer mais diretamente alinhadas. A pressão possível inclui efeitos sobre encarceramento, direitos, custos e erros de reconhecimento tecnológico; a fonte complementar destaca que esses mecanismos precisam ser avaliados separadamente, não como redução garantida do crime.',
          caveat: 'A região informada é apenas uma macrorregião: não permite inferir risco pessoal, crime no bairro ou qual política reduziria sua exposição.'
        }
      },
      lp: '26–30', fp: '13–16',
      limit: 'Região não identifica exposição à violência. Não estimamos redução de crimes; mudanças legais, coordenação federativa, capacidade prisional e controle de tecnologia condicionam a execução.'
    }
  ],

  statements: [
    { id: 'lw', candidate: 'lula', topic: 'work', title: 'Lula confirma envio de projeto sobre fim da escala 6×1 ao Congresso', date: '08/04/2026', author: 'Lula, conforme publicação da Rede PT de Comunicação', context: 'Entrevista ao portal ICL, relatada no canal oficial do partido.', text: 'Defendeu reduzir a jornada sem reduzir salários, com espaço para negociação coletiva.', url: 'https://pt.org.br/lula-confirma-envio-de-projeto-sobre-fim-da-escala-6x1-ao-congresso/' },
    { id: 'fw', candidate: 'flavio', topic: 'work', title: 'Flávio Bolsonaro defende a liberdade do trabalhador decidir pela própria carga horária', date: '24/08/2026', author: 'Flávio Bolsonaro, conforme comunicação oficial da campanha', context: 'Visita à reunião da diretoria da Fiesp, em São Paulo.', text: 'Defendeu liberdade de negociação da carga horária e afirmou que os direitos trabalhistas seriam mantidos.', url: 'https://www.flaviobolsonaro.com.br/noticias/defende-a-liberdade-do-trabalhador-decidir-pela-propria-carga-horaria' },
    { id: 'lh', candidate: 'lula', topic: 'health', title: 'Rede de tratamento do câncer: publicação oficial de campanha', date: 'Setembro de 2026; dia não informado na página consultada', author: 'Campanha de Lula; texto sem assinatura individual', context: 'Publicação de propostas de saúde no site oficial. Não é transcrição de uma fala.', text: 'A comunicação oficial apresenta a proposta de centros de tratamento de câncer em cidades com mais de 150 mil habitantes.', url: 'https://lula.com.br/lula-vai-criar-rede-de-tratamento-do-cancer-nas-cidades-com-mais-de-150-mil-habitantes/' },
    { id: 'fc', candidate: 'flavio', topic: 'cost', title: 'Bolsa Família será mantido e aprimorado, afirma Flávio Bolsonaro', date: '11/10/2026', author: 'Flávio Bolsonaro, conforme comunicação oficial da campanha', context: 'Publicação da campanha sobre assistência social e transição para o emprego; data da fala não especificada.', text: 'A publicação atribui ao candidato a defesa da manutenção do benefício e de apoio à transição para o trabalho.', url: 'https://www.flaviobolsonaro.com.br/noticias/bolsa-familia-sera-mantido-e-aprimorado-afirma-flavio-bolsonaro' }
  ],

  evidenceSources: [
    { id: 'ev-work-hours', topic: 'work', title: 'Longas jornadas e risco cardiovascular', institution: 'OMS e OIT', date: '2021', note: 'Revisões sistemáticas e estimativas globais; associação observada a partir de 55 horas semanais.', url: 'https://www.who.int/news-room/questions-and-answers/item/global-regional-and-national-burdens-of-ischemic-heart-disease-and-stroke-attributable-to-exposure-to-long-working-hours-for-194-countries-2000-2016' },
    { id: 'ev-cost-pof', topic: 'cost', title: 'Composição das despesas por faixa de renda', institution: 'IBGE · POF 2017–2018', date: '2019', note: 'Mostra o peso proporcionalmente maior de alimentação e habitação nos orçamentos de menor renda.', url: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/25598-pof-2017-2018-familias-com-ate-r-1-9-mil-destinam-61-2-de-seus-gastos-a-alimentacao-e-habitacao' },
    { id: 'ev-cost-brasmod', topic: 'cost', title: 'Microssimulação de impostos e benefícios no Brasil', institution: 'BRASMOD · USP/EUROMOD', date: '2024', note: 'Modelo aberto para avaliar efeitos distributivos de regras tributárias e benefícios.', url: 'https://brasmod.github.io/brasmod_main/' },
    { id: 'ev-housing', topic: 'housing', title: 'Minha Casa Minha Vida: acesso a oportunidades', institution: 'Ipea', date: '2023', note: 'Avalia elegibilidade e acesso a emprego, educação e saúde nos empreendimentos.', url: 'https://repositorio.ipea.gov.br/bitstream/11058/12107/1/TD_2888_web.pdf' },
    { id: 'ev-health', topic: 'health', title: 'Acesso e utilização de serviços de saúde', institution: 'IBGE · PNS 2019', date: '2020', note: 'Cobertura de planos e procura por serviços públicos segundo renda e região.', url: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/28793-pns-2019-sete-em-cada-dez-pessoas-que-procuram-o-mesmo-servico-de-saude-vao-a-rede-publica' },
    { id: 'ev-education', topic: 'education', title: 'Impactos do Programa de Educação Integral em São Paulo', institution: 'Estudos Econômicos', date: '2022', note: 'Avaliação causal de desempenho, infraestrutura e composição das escolas.', url: 'https://www.scielo.br/j/ee/a/XjMWSdzS59Pky6wL5jdCcBd/?lang=en' },
    { id: 'ev-security-total', topic: 'security', title: 'Taxa de homicídios por região e UF', institution: 'DATASUS/SIM · elaboração FAPESPA', date: '2023', note: 'Taxas anuais por 100 mil habitantes; dados preliminares extraídos em novembro de 2024.', url: 'https://fapespa.pa.gov.br/sistemas/pcn2024/tabelas/7-seguranca/1-taxa-de-homicidios-total-por-100000-habitantes-2019-2023.htm' },
    { id: 'ev-security-race', topic: 'security', title: 'Taxas regionais de homicídios de negros e não negros', institution: 'Ipea e FBSP · Atlas da Violência 2025', date: '2025', note: 'Recorte regional com dados de 2023; negros correspondem a pessoas pretas e pardas.', url: 'https://forumseguranca.org.br/wp-content/uploads/2025/05/atlas-violencia-2025.pdf' },
    { id: 'ev-security-women', topic: 'security', title: 'Avaliação da efetividade da Lei Maria da Penha', institution: 'Ipea', date: '2015', note: 'Avaliação por diferenças em diferenças; efeitos heterogêneos conforme serviços protetivos locais.', url: 'https://repositorio.ipea.gov.br/bitstream/11058/3538/1/td_2048.pdf' },
    { id: 'ev-security-face', topic: 'security', title: 'Efeitos demográficos no reconhecimento facial', institution: 'NIST', date: '2019', note: 'Avalia diferenças de falsos positivos e falsos negativos por idade, sexo e raça.', url: 'https://www.nist.gov/publications/face-recognition-vendor-test-part-3-demographic-effects' },
    { id: 'ev-cima-work', topic: 'work', title: 'Medidas e cenários de jornada, contrato PJ e trabalho por aplicativo', institution: 'Como isso me afeta?', date: '2026', note: 'Apresenta a regra atual de jornada e separa cenários de contrato por hora, pejotização e trabalho em plataforma; usamos como mapa complementar, não como fonte primária do plano.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-cima-cost', topic: 'cost', title: 'Cálculos de IR, salário mínimo e ICMS por estado', institution: 'Como isso me afeta?', date: '2026', note: 'Exibe valores e cálculos de medidas vigentes por faixa de renda e estado; os números devem ser conferidos na lei e na fonte oficial correspondente.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-cima-housing', topic: 'housing', title: 'Faixas de acesso a moradia e tarifa social', institution: 'Como isso me afeta?', date: '2026', note: 'Relaciona Minha Casa Minha Vida, tarifa social de energia e perfil de renda; usamos para distinguir regra atual de promessa futura.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-cima-health', topic: 'health', title: 'Regras atuais e propostas de saúde', institution: 'Como isso me afeta?', date: '2026', note: 'Resume SUS, pisos constitucionais, filas, prontuário e parcerias; a análise final depende das normas e fontes originais.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-cima-education', topic: 'education', title: 'Regras atuais e cenários de educação', institution: 'Como isso me afeta?', date: '2026', note: 'Resume escolaridade obrigatória, pisos de investimento e alternativas de oferta; não substitui avaliação de evidência educacional.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-cima-security', topic: 'security', title: 'Regras penais e medidas de segurança em contexto', institution: 'Como isso me afeta?', date: '2026', note: 'Distingue competências, propostas penais, reconhecimento facial e limites da inferência sobre risco individual.', url: 'https://como-isso-me-afeta.vercel.app/' },
    { id: 'ev-ext-flaviofalou', topic: 'work', title: 'Compilação de falas e documentos públicos de Flávio Bolsonaro', institution: 'Flávio Falou · fonte secundária de campanha/oposição', date: 'Consultado em 13/10/2026', note: 'Ajuda a localizar entrevistas, documentos e reportagens sobre jornada, impostos e histórico. É uma compilação editorial, não fonte neutra; cada afirmação deve ser aberta na fonte original.', url: 'https://flaviofalou.netlify.app' },
    { id: 'ev-ext-futurobr', topic: 'work', title: 'Simulação de propostas, Congresso e histórico', institution: 'FuturoBR · ferramenta educativa em revisão', date: 'Consultado em 13/10/2026', note: 'Explicita tipo de aprovação, apoio estimado, risco jurídico, custo e impactos por objetivo. O próprio site informa uso de IA e estado de revisão; usamos como referência metodológica, não como estimativa validada.', url: 'https://futurobr-revisao.netlify.app' },
    { id: 'ev-ext-jogo', topic: 'work', title: 'Acervo de vídeos para compartilhamento político', institution: 'O Que Está em Jogo · conteúdo de campanha', date: 'Consultado em 13/10/2026', note: 'É um acervo audiovisual com linguagem de mobilização. Pode indicar temas e declarações a conferir, mas não sustenta sozinho uma análise factual ou causal.', url: 'https://o-que-esta-em-jogo.vercel.app' },
    { id: 'ev-ext-quemcompara', topic: 'cost', title: 'Cards comparativos e guias em PDF', institution: 'Quem compara vota Lula · iniciativa voluntária de campanha', date: 'Consultado em 13/10/2026', note: 'Oferece 35 cards e três guias com fontes indicadas. O próprio site se identifica como campanha não oficial; usamos como índice de temas, nunca como placar neutro.', url: 'https://quemcomparavotalula13.netlify.app' },
    { id: 'ev-ext-guia', topic: 'security', title: 'Guias página a página de documentos públicos', institution: 'Guias de leitura · documentos públicos', date: 'Consultado em 13/10/2026', note: 'Organiza denúncia, decisões judiciais e atos oficiais com trechos marcados e distingue fato registrado de alegação. O status processual e o documento original continuam sendo a referência.', url: 'https://guiadenunciaflavio.github.io/' },
    { id: 'ev-ext-riscoreal', topic: 'security', title: 'Comparação por tema e recorte regional', institution: 'Risco Real · iniciativa independente', date: 'Consultado em 13/10/2026', note: 'Reúne temas nacionais e mapas de violência e desemprego por estado, separando histórico, proposta, projeção e ressalva. Usamos a metodologia como referência; não importamos uma previsão individual de risco.', url: 'https://riscoreal.com.br' },
    { id: 'ev-ext-6x1', topic: 'work', title: 'Calculadora ilustrativa de dias livres na escala 6×1', institution: 'Quanto a 6x1 tira da sua vida?', date: 'Consultado em 13/10/2026', note: 'A conta usa 52 folgas a menos por ano na 6×1 em relação à 5×2 e projeta o resultado até a aposentadoria. É uma ilustração dependente da hipótese de permanência na escala, não uma previsão individual.', url: 'https://vncsvr.github.io/quanto-a-6x1-tira/' },
    { id: 'ev-ext-voteconsciente', topic: 'cost', title: 'Comparação de dados e propostas com enquadramento partidário', institution: 'Voto Consciente · campanha pró-Bolsonaro', date: 'Consultado em 13/10/2026', note: 'Traz links para Câmara, Planalto, IBGE, INPE e outras fontes, mas o título e a seleção são explicitamente favoráveis a Bolsonaro. Usamos apenas como pista para conferência das fontes originais.', url: 'https://voteconsciente.github.io/eleicoes2026/' },
    { id: 'ev-ext-comparabrasil', topic: 'cost', title: 'Coleção de indicadores históricos e propostas', institution: 'Compara Brasil · painel comparativo', date: 'Consultado em 13/10/2026', note: 'Reúne indicadores de inflação, emprego, renda, saúde, educação, programas sociais e segurança com links de origem. As próprias notas alertam para janelas diferentes, dados sujeitos a revisão e ausência de causalidade presidencial.', url: 'https://comparabrasil.app' },
    { id: 'ev-ext-lulax', topic: 'health', title: 'Gráficos compartilháveis sobre governos e indicadores', institution: 'Lula X Bolsonaro · seleção editorial pró-Lula', date: 'Consultado em 13/10/2026', note: 'Oferece 73 gráficos com fontes clicáveis e ressalvas metodológicas. A página informa que a seleção favorece Lula e não é balanço completo; usamos os links oficiais, não o placar editorial.', url: 'https://lulaxbolsonaro.com' },
    { id: 'ev-ext-amigos', topic: 'security', title: 'Relações e acusações envolvendo Flávio Bolsonaro', institution: 'Os amigos de Flávio Bolsonaro · página de advocacy', date: 'Consultado em 13/10/2026', note: 'Reúne vídeos e referências sobre pessoas e acusações. Serve somente para localizar documentos e checar o status de cada caso; a linguagem é acusatória e não deve ser tratada como constatação judicial automática.', url: 'https://amigosdoflavio.com' }
  ],

  incomeBands: [
    'Sem renda', 'Até R$ 1.500', 'Acima de R$ 1.500 até R$ 3.000', 'Acima de R$ 3.000 até R$ 6.000', 'Acima de R$ 6.000 até R$ 12.000', 'Acima de R$ 12.000 até R$ 20.000', 'Acima de R$ 20.000 até R$ 35.000', 'Acima de R$ 35.000 até R$ 50.000', 'Acima de R$ 50.000 até R$ 100.000', 'Acima de R$ 100.000 até R$ 250.000', 'Acima de R$ 250.000'
  ],

  householdDisposableIncomeBands: [
    'Até R$ 1.600', 'Acima de R$ 1.600 até R$ 3.200', 'Acima de R$ 3.200 até R$ 5.000', 'Acima de R$ 5.000 até R$ 9.600', 'Acima de R$ 9.600 até R$ 13.000', 'Acima de R$ 13.000 até R$ 25.000', 'Acima de R$ 25.000 até R$ 50.000', 'Acima de R$ 50.000'
  ],

  questions: [
    { id: 'personalIncome', title: 'Qual é a sua renda mensal pessoal aproximada?', why: 'Distingue sua renda da soma da família. Considere salários antes de descontos e valores que recebe pessoalmente de negócios, aluguéis ou investimentos. Se varia, use uma média dos últimos meses. Para PJ, não informe o faturamento da empresa: informe sua retirada pessoal, como pró-labore e lucros recebidos.', optionsFrom: 'incomeBands' },
    { id: 'householdDisposableIncome', title: 'Quanto entra por mês no orçamento da sua casa, depois dos descontos obrigatórios?', why: 'Some os valores efetivamente disponíveis para as pessoas que compartilham despesas. Esta aproximação ajuda a comparar capacidade de consumo; não substitui a renda bruta usada por programas ou pela Receita Federal.', optionsFrom: 'householdDisposableIncomeBands' },
    { id: 'residents', title: 'Quantas pessoas vivem desse orçamento?', why: 'A mesma renda sustenta padrões de vida diferentes conforme o número de moradores. Usamos a resposta para contextualizar renda por pessoa e economias de despesas compartilhadas.', options: ['1 pessoa', '2 pessoas', '3 pessoas', '4 pessoas', '5 pessoas', '6 pessoas ou mais'] },
    { id: 'childrenUnder14', title: 'Quantas dessas pessoas têm menos de 14 anos?', why: 'Crianças têm necessidades diferentes de adultos. A informação permite uma aproximação de renda equivalente, sem pedir idade exata ou identificação.', options: ['Nenhuma', '1 criança', '2 crianças', '3 crianças', '4 crianças ou mais'] },
    { id: 'householdNeeds', title: 'Quem na casa pode demandar políticas de cuidado ou educação?', why: 'Ajuda a relacionar saúde, cuidado e educação sem pedir diagnóstico. Marque todas as opções aplicáveis.', multi: true, exclusiveOption: 'Ninguém nessas situações', options: ['Crianças ou adolescentes em idade escolar', 'Pessoa idosa', 'Pessoa com deficiência ou necessidade contínua de cuidado', 'Ninguém nessas situações'] },
    { id: 'essentialBurden', title: 'Quanto da renda disponível costuma ir para despesas essenciais?', why: 'Considere alimentação, moradia, contas básicas, transporte, saúde e educação. Uma proporção aproximada é mais informativa que renda isolada para medir pressão no orçamento.', options: ['Menos de 50%', 'De 50% a 70%', 'De 71% a 90%', 'Mais de 90%'] },
    { id: 'work', title: 'Quais situações de trabalho se aplicam atualmente a você?', why: 'Você pode ter mais de uma atividade. Se usa uma empresa própria para prestar serviços, marque a opção de MEI ou PJ não MEI; pró-labore e dividendos serão tratados apenas depois, se fizer sentido.', multi: true, exclusiveOption: 'Não exerço atividade remunerada atualmente', options: ['Emprego com carteira assinada', 'Servidor(a) público(a)', 'Trabalho em empresa própria — MEI', 'Trabalho em empresa própria — PJ não MEI', 'Trabalho autônomo sem CNPJ', 'Trabalho informal ou por diária', 'Trabalho temporário ou por aplicativo', 'Não exerço atividade remunerada atualmente'] },
    { id: 'workSchedule', title: 'Como é sua jornada principal de trabalho?', why: 'Jornada e escala são necessárias para avaliar propostas como redução de horas ou negociação das condições de trabalho.', options: ['Até 30 horas por semana', 'De 31 a 40 horas por semana', 'De 41 a 44 horas por semana', '45 a 54 horas por semana', '55 horas ou mais por semana', 'Escala 6×1 ou trabalho frequente aos fins de semana', 'Não se aplica ou varia muito'] },
    { id: 'incomeSources', title: 'Quais fontes de renda pessoal você recebeu nos últimos 12 meses?', why: 'Marque as origens gerais, sem informar valores exatos. Se houver renda de empresa própria, perguntaremos apenas o necessário para distinguir trabalho e capital.', multi: true, exclusiveOption: 'Sem renda pessoal', options: ['Salário de empresa privada', 'Remuneração de serviço público', 'Renda de empresa própria', 'Renda de trabalho autônomo, informal, diária ou aplicativo', 'Aluguéis recebidos', 'Rendimentos de aplicações financeiras', 'Aposentadoria ou pensão', 'Benefício social', 'Ajuda financeira de familiares ou outras pessoas', 'Sem renda pessoal', 'Outra fonte'] },
    { id: 'mainIncomeSource', title: 'Qual dessas fontes representa a maior parte da sua renda pessoal?', why: 'A fonte principal evita tratar um rendimento pequeno e eventual como se tivesse o mesmo peso do rendimento que sustenta seu orçamento.', options: ['Salário de empresa privada', 'Remuneração de serviço público', 'Renda de empresa própria', 'Trabalho autônomo, informal, diária ou aplicativo', 'Aluguéis ou aplicações financeiras', 'Aposentadoria ou pensão', 'Benefício social ou ajuda de outras pessoas', 'Não tenho renda pessoal', 'Outra fonte'] },
    { id: 'businessRelation', title: 'Qual opção descreve melhor sua relação com a empresa própria?', why: 'Esta pergunta só aparece quando suas respostas indicam empresa própria. Ela distingue MEI, PJ não MEI e participação sem trabalho direto, sem pedir faturamento ou valores.', showWhenAny: [{ field: 'work', values: ['Trabalho em empresa própria — MEI', 'Trabalho em empresa própria — PJ não MEI'] }, { field: 'incomeSources', values: ['Renda de empresa própria'] }], options: ['Sou MEI e trabalho na atividade', 'Sou sócio(a) de PJ não MEI e trabalho na empresa', 'Sou sócio(a) ou proprietário(a), mas não trabalho diretamente na empresa', 'Participo de mais de uma empresa', 'Não sei classificar'] },
    { id: 'businessWithdrawal', title: 'Como a renda da empresa costuma chegar até você?', why: 'Não pedimos valores. A composição aproximada é suficiente para distinguir remuneração pelo trabalho e renda do capital quando uma proposta tributária tornar isso relevante.', showWhenAny: [{ field: 'businessRelation', values: ['Sou MEI e trabalho na atividade', 'Sou sócio(a) de PJ não MEI e trabalho na empresa', 'Sou sócio(a) ou proprietário(a), mas não trabalho diretamente na empresa', 'Participo de mais de uma empresa'] }], options: ['Principalmente pró-labore', 'Pró-labore e lucros ou dividendos em proporções relevantes', 'Principalmente lucros ou dividendos', 'Faço retiradas sem distinguir claramente', 'A empresa ainda não me remunera', 'Não sei informar'] },
    { id: 'capitalShare', title: 'Qual parcela aproximada da sua renda pessoal vem de lucros, dividendos, aluguéis ou aplicações?', why: 'A pergunta só aparece quando você informa alguma dessas fontes. Usamos faixas, não valores, e apenas para propostas que possam tratar renda do trabalho e do capital de formas diferentes.', showWhenAny: [{ field: 'incomeSources', values: ['Renda de empresa própria', 'Aluguéis recebidos', 'Rendimentos de aplicações financeiras'] }], options: ['Nenhuma ou quase nenhuma', 'Até 25%', 'De 26% a 50%', 'De 51% a 75%', 'Mais de 75%'] },
    { id: 'businessLabor', title: 'Quem trabalha na empresa ou negócio próprio?', why: 'Esta pergunta só aparece para quem indicou participação em empresa. Ela ajuda a separar quem trabalha sozinho de quem pode ser afetado por mudanças em contratação ou folha.', showWhenAny: [{ field: 'businessRelation', values: ['Sou MEI e trabalho na atividade', 'Sou sócio(a) de PJ não MEI e trabalho na empresa', 'Sou sócio(a) ou proprietário(a), mas não trabalho diretamente na empresa', 'Participo de mais de uma empresa'] }], options: ['Somente eu trabalho no negócio', 'Sócios ou familiares trabalham, sem empregados', 'Há de 1 a 5 empregados com carteira', 'Há de 6 a 20 empregados com carteira', 'Há mais de 20 empregados com carteira', 'Há prestadores PJ ou autônomos, mas não empregados com carteira', 'Não acompanho contratação ou folha'] },
    { id: 'housing', title: 'Qual é sua situação de moradia?', why: 'Ajuda a relacionar propostas habitacionais com aluguel, financiamento e regularização.', options: ['Imóvel alugado', 'Imóvel próprio financiado', 'Imóvel próprio quitado', 'Imóvel cedido ou compartilhado', 'Moradia com necessidade de regularização'] },
    { id: 'housingBurden', title: 'Quanto da renda disponível vai para aluguel ou prestação da moradia?', why: 'Comprometimento elevado pode indicar pressão habitacional. A resposta não estabelece elegibilidade para programas.', options: ['Não pago aluguel ou prestação', 'Até 20%', 'De 21% a 30%', 'De 31% a 40%', 'Mais de 40%'] },
    { id: 'healthAccess', title: 'Como a sua casa costuma acessar atendimento de saúde?', why: 'Distingue dependência da rede pública, cobertura privada e dificuldades de acesso sem pedir diagnósticos.', options: ['Principalmente pelo SUS', 'SUS e plano de saúde', 'Principalmente por plano de saúde', 'Atendimento particular sem plano', 'Tem dificuldade frequente para conseguir atendimento'] },
    { id: 'educationContext', title: 'Qual situação educacional existe na sua casa?', why: 'Se houver mais de uma, marque todas. Separa acesso, permanência e formação profissional.', multi: true, exclusiveOption: 'Não se aplica', options: ['Estudante em escola pública', 'Estudante em escola privada', 'Falta vaga ou turno adequado', 'Busca ensino técnico ou qualificação profissional', 'Busca ensino superior', 'Não se aplica'] },
    { id: 'area', title: 'Você vive em área urbana ou rural?', why: 'Oferta de serviços, transporte e regras de alguns programas variam entre áreas urbanas e rurais.', options: ['Área urbana', 'Área rural', 'Não sei classificar'] },
    { id: 'region', title: 'Em qual região do Brasil você mora?', why: 'Dá contexto territorial à leitura. Uma macrorregião não permite estimar oferta de serviços ou efeitos no seu município.', options: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul', 'Fora do Brasil'] },
    { id: 'gender', title: 'Como você se identifica em relação a gênero?', why: 'Resposta opcional. Só será usada quando houver relação explícita entre uma proposta e desigualdades ou direitos de gênero.', options: ['Mulher', 'Homem', 'Pessoa não binária', 'Outra identidade de gênero', 'Prefiro não responder'] },
    { id: 'race', title: 'Como você se identifica em relação a raça ou cor?', why: 'Resposta opcional. A leitura não presume risco ou comportamento individual; usa a informação apenas quando houver relação explícita com desigualdades ou políticas públicas.', options: ['Branca', 'Preta', 'Parda', 'Amarela', 'Indígena', 'Outra', 'Prefiro não responder'] },
    { id: 'religion', title: 'Alguma proposta sobre liberdade ou discriminação religiosa é diretamente relevante para você?', why: 'Resposta opcional. Religião não altera automaticamente a análise. A informação só será usada quando existir uma proposta concreta sobre liberdade religiosa ou discriminação.', options: ['Sim', 'Não', 'Prefiro não responder'] }
  ],

  answersToSkip: ['Não sei', 'Prefiro não responder'],

  analysis: {
    relations: {
      work: '[Interpretação] As propostas tratam de remuneração, contratação e jornada. A relação com sua rotina depende do vínculo de trabalho e das regras aplicáveis à categoria.',
      cost: '[Interpretação] Tributos, preços e políticas de renda podem dialogar com o orçamento familiar. A faixa informada não permite prever quanto você ganharia ou economizaria.',
      housing: '[Interpretação] Acesso à habitação e regularização podem ser pertinentes a quem aluga, financia ou busca regularizar a moradia. Isso não constitui análise de elegibilidade.',
      health: '[Interpretação] Políticas de atendimento e cuidados podem ser relevantes para diferentes arranjos familiares. Não inferimos necessidade de tratamento ou dependência.',
      education: '[Interpretação] Formação profissional e educação podem se relacionar com estudos e cuidados familiares. Não presumimos que alguém da casa precise de uma vaga.',
      security: '[Interpretação] Segurança pública afeta a vida coletiva. A região informada serve apenas como contexto, sem atribuir risco pessoal.'
    },
    incomeContext: {
      noIncome: 'Você informou não ter renda pessoal. A renda familiar, quando informada, oferece outro contexto; não presumimos dependência ou acesso a benefícios.',
      low: '[Interpretação] Para a faixa pessoal informada, discussões sobre renda e despesas essenciais merecem atenção. Não conhecemos seus gastos, número de dependentes ou acesso a políticas públicas.',
      middle: '[Interpretação] Sua faixa pessoal permite uma leitura distinta das rendas acima de R$ 12 mil. O peso do custo de vida ainda depende de despesas, composição da casa e localização.',
      upperMiddle: '[Interpretação] Esta leitura distingue sua faixa das rendas de R$ 50 mil ou mais. Vínculo de trabalho e origem dos recebimentos precisam ser considerados separadamente do valor mensal.',
      high: '[Interpretação] Sua faixa pessoal é tratada separadamente das rendas de R$ 12 mil a R$ 50 mil. Renda elevada não informa patrimônio, composição tributável ou proporção entre trabalho e capital; não atribuímos uma alíquota ou efeito de proposta a você.',
      unknown: 'Renda pessoal não informada: não classificamos seu nível de renda pela soma familiar.',
      pj: '[Interpretação] Você informou trabalhar em empresa própria como PJ não MEI. Não aplicamos automaticamente regras de emprego com carteira, de MEI ou um regime tributário específico.',
      sourcesPrefix: 'Fontes informadas: ',
      sourcesSuffix: '. Não presumimos que todos os recebimentos tenham o mesmo tratamento.'
    },

    regionalSafety: {
      year: 2023,
      nationalRate: 20.03,
      totalSource: 'DATASUS/SIM; elaboração FAPESPA, dados preliminares extraídos em novembro de 2024',
      raceSource: 'Atlas da Violência 2025; SIM e PNAD Contínua; elaboração Ipea e FBSP',
      sourceUrl: 'https://fapespa.pa.gov.br/sistemas/pcn2024/tabelas/7-seguranca/1-taxa-de-homicidios-total-por-100000-habitantes-2019-2023.htm',
      raceSourceUrl: 'https://forumseguranca.org.br/wp-content/uploads/2025/05/atlas-violencia-2025.pdf',
      regions: {
        Norte: { total: 31.29, black: 35.7, nonBlack: 15.6 },
        Nordeste: { total: 33.08, black: 41.7, nonBlack: 11.6 },
        'Centro-Oeste': { total: 19.44, black: 25.7, nonBlack: 13.5 },
        Sudeste: { total: 11.49, black: 17.3, nonBlack: 7.4 },
        Sul: { total: 14.01, black: 18.4, nonBlack: 14.6 }
      }
    },

    // Regras editoriais por mecanismo. Melhorias e pressões permanecem
    // separadas; não são uma previsão financeira nem recomendação de voto.
    impactModel: {
      topics: {
        work: {
          contextFields: ['personalIncome', 'work', 'workSchedule', 'incomeSources', 'mainIncomeSource', 'businessRelation', 'businessWithdrawal', 'capitalShare', 'businessLabor'],
          relevanceRules: [
            { when: [{ field: 'work', op: 'present' }], score: 3, reason: 'o vínculo de trabalho é diretamente relacionado ao tema.' },
            { when: [{ field: 'workSchedule', op: 'present' }], score: 3, reason: 'a jornada informada permite avaliar propostas sobre horas e escala.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'workSchedule', op: 'equalsAny', values: ['45 a 54 horas por semana', '55 horas ou mais por semana', 'Escala 6×1 ou trabalho frequente aos fins de semana'] }], confidence: 'medium', text: 'Redução de jornada sem redução salarial poderia ampliar tempo disponível e reduzir exposição a jornadas longas, se aprovada e aplicada ao vínculo.' },
              { effect: 'pressure', when: [{ field: 'businessLabor', op: 'equalsAny', values: ['Há de 1 a 5 empregados com carteira', 'Há de 6 a 20 empregados com carteira', 'Há mais de 20 empregados com carteira'] }], confidence: 'low', text: 'Como responsável por negócio com empregados, você poderia enfrentar custos de reorganização de escalas ou contratação; o plano não permite calcular esse custo.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'work', op: 'equalsAny', values: ['Trabalho em empresa própria — MEI', 'Trabalho em empresa própria — PJ não MEI'] }], confidence: 'low', text: 'Mais liberdade de negociação e menor custo de contratação podem dialogar com atividade empresarial ou prestação de serviços.' },
              { effect: 'pressure', when: [{ field: 'workSchedule', op: 'equalsAny', values: ['45 a 54 horas por semana', '55 horas ou mais por semana', 'Escala 6×1 ou trabalho frequente aos fins de semana'] }, { field: 'work', op: 'equalsAny', values: ['Emprego com carteira assinada', 'Trabalho informal'] }], confidence: 'low', text: 'Para quem já trabalha jornadas longas, mais negociação sem parâmetros definidos pode manter ou ampliar assimetria; o efeito depende das proteções aprovadas.' }
            ]
          }
        },
        cost: {
          contextFields: ['householdDisposableIncome', 'residents', 'essentialBurden', 'personalIncome', 'incomeSources', 'mainIncomeSource', 'capitalShare'],
          relevanceRules: [
            { when: [{ field: 'essentialBurden', op: 'present' }], score: 3, reason: 'o comprometimento com despesas essenciais mede pressão orçamentária.' },
            { when: [{ field: 'householdDisposableIncome', op: 'present' }, { field: 'residents', op: 'present' }], score: 3, reason: 'renda disponível e moradores permitem contextualizar recursos da casa.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'essentialBurden', op: 'equalsAny', values: ['De 71% a 90%', 'Mais de 90%'] }], confidence: 'medium', text: 'Alívio sobre consumo e políticas de renda teriam maior importância para um orçamento já muito comprometido, sem permitir estimar valor.' },
              { effect: 'pressure', when: [{ field: 'capitalShare', op: 'equalsAny', values: ['De 51% a 75%', 'Mais de 75%'] }], confidence: 'low', text: 'Maior tributação progressiva sobre renda ou patrimônio pode atingir parte dos rendimentos de capital, dependendo das regras e limites aprovados.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'essentialBurden', op: 'equalsAny', values: ['De 71% a 90%', 'Mais de 90%'] }], confidence: 'low', text: 'Redução de tributos sobre consumo poderia aliviar um orçamento muito comprometido se houver repasse aos preços.' },
              { effect: 'improvement', when: [{ field: 'capitalShare', op: 'equalsAny', values: ['De 51% a 75%', 'Mais de 75%'] }], confidence: 'low', text: 'Simplificação tributária pode ser relevante para quem recebe parcela elevada de renda de negócios ou capital; faltam parâmetros para calcular o efeito.' }
            ]
          }
        },
        housing: {
          contextFields: ['housing', 'housingBurden', 'householdDisposableIncome', 'residents', 'area'],
          relevanceRules: [
            { when: [{ field: 'housing', op: 'present' }], score: 3, reason: 'a situação de moradia é diretamente relacionada ao tema.' },
            { when: [{ field: 'housingBurden', op: 'equalsAny', values: ['De 31% a 40%', 'Mais de 40%'] }], score: 3, reason: 'o gasto habitacional informado indica pressão elevada sobre a renda disponível.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'housing', op: 'equalsAny', values: ['Imóvel alugado', 'Moradia com necessidade de regularização', 'Imóvel cedido ou compartilhado'] }], confidence: 'medium', text: 'Subsídio, urbanização e regularização dialogam diretamente com a situação informada.' },
              { effect: 'pressure', when: [{ field: 'area', op: 'equalsAny', values: ['Área urbana', 'Área rural'] }], confidence: 'low', text: 'Oferta distante de emprego e serviços pode transferir parte do ganho habitacional para transporte e tempo de deslocamento; depende da localização.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'housing', op: 'equalsAny', values: ['Imóvel próprio financiado', 'Imóvel alugado', 'Moradia com necessidade de regularização'] }], confidence: 'low', text: 'Crédito, desburocratização e redução de custos de cartório podem facilitar compra ou regularização para quem consegue acessar financiamento.' },
              { effect: 'pressure', when: [{ field: 'housingBurden', op: 'equalsAny', values: ['De 31% a 40%', 'Mais de 40%'] }], confidence: 'low', text: 'Para orçamento já pressionado, facilitação de crédito sem subsídio suficiente pode não tornar a prestação sustentável.' }
            ]
          }
        },
        health: {
          contextFields: ['healthAccess', 'householdNeeds', 'area', 'region'],
          relevanceRules: [
            { when: [{ field: 'healthAccess', op: 'present' }], score: 3, reason: 'a forma de acesso ao atendimento é diretamente relacionada ao tema.' },
            { when: [{ field: 'householdNeeds', op: 'hasAny', values: ['Pessoa idosa', 'Pessoa com deficiência ou necessidade contínua de cuidado'] }], score: 3, reason: 'a casa informou demanda contínua de cuidado, sem revelar diagnóstico.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'healthAccess', op: 'equalsAny', values: ['Principalmente pelo SUS', 'SUS e plano de saúde', 'Tem dificuldade frequente para conseguir atendimento'] }], confidence: 'medium', text: 'Fortalecimento do SUS, atenção primária, profissionais e redução de filas dialogam diretamente com o acesso informado.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'healthAccess', op: 'equalsAny', values: ['Principalmente pelo SUS', 'SUS e plano de saúde', 'Tem dificuldade frequente para conseguir atendimento'] }], confidence: 'low', text: 'Prevenção, prontuário integrado e telessaúde podem facilitar acompanhamento, dependendo de conectividade, equipe e oferta local.' },
              { effect: 'pressure', when: [{ field: 'area', op: 'equalsAny', values: ['Área rural'] }], confidence: 'low', text: 'Soluções digitais podem ter alcance menor onde conectividade, equipamentos ou profissionais de apoio são insuficientes.' }
            ]
          }
        },
        education: {
          contextFields: ['educationContext', 'householdNeeds', 'work', 'area'],
          relevanceRules: [
            { when: [{ field: 'educationContext', op: 'present' }], score: 3, reason: 'a situação educacional informada é diretamente relacionada ao tema.' },
            { when: [{ field: 'householdNeeds', op: 'hasAny', values: ['Crianças ou adolescentes em idade escolar'] }], score: 3, reason: 'há criança ou adolescente em idade escolar na casa.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'educationContext', op: 'hasAny', values: ['Estudante em escola pública', 'Falta vaga ou turno adequado'] }], confidence: 'medium', text: 'Expansão da rede pública e escola integral pode melhorar acesso, aprendizagem e tempo de cuidado, se vier com infraestrutura e qualidade.' },
              { effect: 'improvement', when: [{ field: 'educationContext', op: 'hasAny', values: ['Busca ensino técnico ou qualificação profissional', 'Busca ensino superior'] }], confidence: 'low', text: 'Expansão de ensino técnico e superior pode ampliar oportunidades, condicionada a vagas e acesso local.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'educationContext', op: 'hasAny', values: ['Falta vaga ou turno adequado'] }], confidence: 'low', text: 'Voucher pode ampliar opções quando faltam vagas, mas a evidência é heterogênea e depende de oferta e regulação.' },
              { effect: 'improvement', when: [{ field: 'educationContext', op: 'hasAny', values: ['Busca ensino técnico ou qualificação profissional'] }], confidence: 'low', text: 'Formação técnica conectada ao mercado pode melhorar empregabilidade quando houver qualidade e demanda local.' },
              { effect: 'pressure', when: [{ field: 'educationContext', op: 'hasAny', values: ['Estudante em escola pública'] }], confidence: 'low', text: 'Uso de vouchers sem expansão equivalente da qualidade pública pode produzir efeitos desiguais; o plano não detalha oferta, valor e regulação.' }
            ]
          }
        },
        security: {
          contextFields: ['region', 'gender', 'race', 'religion'],
          relevanceRules: [
            { when: [{ field: 'region', op: 'present' }], score: 2, reason: 'a taxa regional oferece uma referência estatística ampla, não risco pessoal.' },
            { when: [{ field: 'gender', op: 'equalsAny', values: ['Mulher'] }], score: 2, reason: 'políticas específicas de violência contra mulheres são diretamente relevantes.' },
            { when: [{ field: 'race', op: 'equalsAny', values: ['Preta', 'Parda'] }], score: 2, reason: 'o Atlas permite um recorte regional específico para pessoas pretas e pardas.' }
          ],
          candidateRules: {
            lula: [
              { effect: 'improvement', when: [{ field: 'gender', op: 'equalsAny', values: ['Mulher'] }], confidence: 'low', text: 'A proposta menciona enfrentamento da violência contra mulheres; avaliações anteriores mostram que o efeito depende da rede protetiva local.' },
              { effect: 'improvement', when: [{ field: 'race', op: 'equalsAny', values: ['Preta', 'Parda'] }], confidence: 'low', text: 'A menção ao racismo estrutural dialoga com a desigualdade regional observada, mas não permite prever redução individual de risco.' }
            ],
            flavio: [
              { effect: 'improvement', when: [{ field: 'region', op: 'present' }], confidence: 'low', text: 'Reforço de fronteiras, investigação e resposta penal podem ter relevância coletiva, mas o plano não quantifica redução de homicídios.' },
              { effect: 'pressure', when: [{ field: 'race', op: 'equalsAny', values: ['Preta', 'Parda'] }], confidence: 'medium', text: 'Reconhecimento facial exige controles adicionais: avaliações técnicas encontram diferenças demográficas em falsos positivos, com consequências potencialmente desiguais.' }
            ]
          }
        }
      }
    }
  },

  editorialSections: [
    ['01 · Pessoa e domicílio', 'Renda pessoal não é tratada como sinônimo de condição econômica. A leitura combina renda disponível da casa, número de moradores, crianças, pressão de despesas essenciais e moradia. Perguntas sobre empresa própria só aparecem quando fizerem sentido; pró-labore e dividendos são distinguidos por composição aproximada, sem solicitar valores exatos. Os intervalos são aproximações editoriais, não classes sociais nem critérios automáticos de elegibilidade.'],
    ['02 · Mesma régua para ambos', 'Comparamos compromissos por tema nos planos de 2026 publicados pelo TSE. Resumos não são citações. O recorte não substitui os documentos completos e não equivale a endosso do TSE às propostas.'],
    ['03 · Tipos de informação', 'Plano de governo identifica o documento eleitoral. Declaração oficial identifica fala ou comunicação publicada em canal oficial, com autoria, data disponível e contexto. Comunicação de campanha não é apresentada como transcrição pessoal.'],
    ['04 · Efeitos sem nota geral', 'Possíveis melhorias e possíveis pressões aparecem separadamente por mecanismo. Relevância, direção e confiança não são somadas entre temas. A leitura não calcula benefício, preço, renda futura, preferência partidária ou resultado de governo.'],
    ['05 · Lacunas e incertezas', 'Não localizado significa que a revisão não encontrou uma declaração confiável para aquele candidato e tema. Não demonstra ausência de posição. Diferenciamos intenção, aprovação de lei, financiamento e implementação; não presumimos resultados. Sites de comparação, simuladores e campanhas entram como fontes secundárias de descoberta e método; a evidência principal continua sendo o documento original.'],
    ['06 · Evidência e risco estatístico', 'Planos e declarações documentam compromissos; estudos e dados oficiais avaliam mecanismos e resultados observados. Em segurança, mostramos taxas anuais por 100 mil habitantes e a porcentagem equivalente para a macrorregião. Quando disponível, o recorte racial usa taxas do Atlas da Violência 2025. Taxa populacional não é previsão pessoal e não substitui dados de município, bairro, idade ou rotina.'],
    ['07 · Privacidade', 'As respostas são processadas na memória do navegador. O código da análise não envia respostas, não usa cookies nem as guarda em armazenamento local. Recarregar ou apagar respostas remove esse perfil. Links externos têm suas próprias políticas; a hospedagem e o acesso ao site podem registrar dados técnicos.'],
    ['08 · Escopo', 'A análise é informativa: não prevê o que acontecerá, não recomenda voto e não apresenta promessas como efeitos certos. O conjunto de temas e declarações é um recorte editorial, com cobertura que pode variar conforme as fontes localizadas.']
  ]
};

// Deriva opções que dependem de outras partes do conteúdo, sem duplicar texto.
window.siteContent.questions = window.siteContent.questions.map(question => ({
  ...question,
  options: question.options || (
    question.optionsFrom === 'incomeBands' ? window.siteContent.incomeBands :
    question.optionsFrom === 'householdDisposableIncomeBands' ? window.siteContent.householdDisposableIncomeBands :
    question.optionsFrom === 'topicTitles' ? window.siteContent.topics.map(topic => topic.title) : []
  )
}));

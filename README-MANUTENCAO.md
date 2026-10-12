# Planos em Contexto · manutenção

Esta versão separa o site em conteúdo editorial, aparência e comportamento.

## Onde editar

- `dist/js/content.js`: textos, perguntas, opções, temas, análises, critérios editoriais e fontes.
- `dist/css/style.css`: paleta, tipografia, espaçamentos, componentes e responsividade.
- `dist/js/app.js`: interface, navegação, filtros e montagem dos cards. Só altere aqui quando o comportamento visual/interativo mudar.
- `dist/js/impact-engine.js`: motor que aplica regras de relevância, possíveis melhorias, possíveis pressões e risco estatístico regional. A lógica é executável; textos, condições e dados ficam em `analysis`, no `content.js`.
- `dist/assets/`: caricaturas dos candidatos e imagens de contexto dos seis temas.
- `dist/index.html`: estrutura mínima da página e ordem de carregamento dos arquivos.

Os comparativos também usam como insumo a fonte externa [Brasil do Futuro · Voto Informado 2026](https://brasil-futuro.vercel.app/), registrada em `sources.comparative` no `dist/js/content.js`. A análise exibida nos cards é uma interpretação editorial: o site informa o critério, o ponto forte relativo de cada proposta e as contrapartidas, sem transformar isso em recomendação de voto.

## Leitura de impacto

Os resultados não usam nota geral. Para cada tema e candidato, exibem separadamente relevância, possíveis melhorias, possíveis pressões e confiança. As regras ficam em `analysis.impactModel` e devem registrar o mecanismo que conecta a resposta à proposta.

- `relevanceRules` define quanto o tema se relaciona ao perfil informado;
- `candidateRules` define quais respostas ativam uma possível melhora ou pressão para cada candidato;
- `confidence` registra a confiança editorial da regra (`low`, `medium` ou `high`);
- `text` explica por que a regra foi ativada.

Gênero e raça/cor só ativam regras quando existe relação explícita no recorte da proposta ou em evidência pública. Religião é opcional e não altera automaticamente a análise. Em segurança, `analysis.regionalSafety` guarda taxas anuais por 100 mil habitantes e seus links; a interface também mostra a porcentagem equivalente, sempre como taxa populacional, nunca como previsão individual. As respostas continuam apenas na memória do navegador.

O questionário aceita `showWhenAny` em uma pergunta para exibi-la somente quando alguma resposta anterior justificar o detalhamento. As perguntas sobre empresa própria usam essa ramificação: não solicitam faturamento ou valores exatos e distinguem pró-labore e dividendos apenas por composição aproximada.

## Alterações comuns

### Corrigir um texto

Procure o texto em `dist/js/content.js`. Os blocos `home`, `pages`, `topics`, `statements`, `analysis`, `impactModel` e `editorialSections` concentram o conteúdo exibido.

Para alterar uma regra de impacto, procure o tema dentro de `analysis.impactModel.topics`. Não altere `impact-engine.js` para trocar uma frase ou condição: esse arquivo executa as regras e deve permanecer genérico.

### Acrescentar uma fonte ou declaração

Adicione um objeto ao array `statements` em `dist/js/content.js` com `id`, `candidate`, `topic`, `title`, `date`, `author`, `context`, `text` e `url`.

Para uma fonte de plano, os links são gerados a partir de `sources.plans` e das páginas `lp`/`fp` de cada tema.

### Trocar uma imagem

Substitua o arquivo correspondente dentro de `dist/assets/` e atualize o caminho e o texto alternativo em `visuals` no `dist/js/content.js`. As imagens de tema aparecem quando o visitante abre cada card; as caricaturas aparecem ao lado do nome de cada candidato. A legenda deve explicar o que a imagem contextualiza, sem transformar a ilustração em prova da promessa.

### Mudar a aparência

Comece pelos tokens no início de `dist/css/style.css` (`--bg`, `--card`, `--ink`, `--muted`, `--line`, `--soft` e `--serif`). Depois ajuste os componentes abaixo deles. Um designer pode trabalhar nesse arquivo sem precisar entender a lógica do questionário.

## Prévia local

Na pasta do projeto, sirva a pasta `dist` com qualquer servidor HTTP estático. A página de entrada é `dist/index.html`. Não abra o arquivo diretamente pelo sistema de arquivos, porque o navegador pode bloquear o carregamento dos scripts.

## Publicação externa

O Cloudflare Pages deve receber o conteúdo de `dist/`, com `index.html` e as pastas `css/` e `js/` preservadas. Esta versão não exige etapa de build: é HTML, CSS e JavaScript estático. O novo arquivo `js/impact-engine.js` também precisa ser enviado.

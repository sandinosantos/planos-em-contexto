# Planos em Contexto · guia de manutenção

Este documento é para quem vai editar o projeto sem conhecer sua história. A regra central é simples: **conteúdo editorial fica em `content.js`, aparência fica em `style.css`, e comportamento fica em `app.js`/`impact-engine.js`**.

## 1. Intuito do projeto

O site compara propostas de governo e declarações documentadas com um perfil socioeconômico informado em faixas. O objetivo é mostrar mecanismos plausíveis de impacto, não produzir uma nota de candidato nem uma recomendação automática de voto.

Cada tema pode apresentar:

- o que cada candidato propõe no plano de governo;
- declarações oficiais/documentadas encontradas para aquele tema;
- uma análise comparativa editorial, com vantagens relativas e contrapartidas;
- a relação do tema com o perfil do visitante;
- possíveis melhorias e possíveis pressões para cada candidato;
- a confiança e os limites da leitura.

A análise deve sempre distinguir **compromisso documentado**, **interpretação** e **resultado efetivamente comprovado**. Um plano de governo não garante execução, prazo, orçamento ou resultado.

As respostas ficam apenas na memória do navegador. Não criar armazenamento de respostas sem uma decisão específica sobre privacidade, segurança e consentimento.

## 2. Mapa dos arquivos

### Conteúdo e dados editoriais — `dist/js/content.js`

É o arquivo principal para manutenção editorial. Nele ficam:

- `copy`: rótulos e textos gerais da interface;
- `sources`: planos de governo, estudos e fontes externas;
- `visuals`: caminhos, legendas e textos alternativos das imagens;
- `topics`: temas, propostas resumidas, páginas dos PDFs e limites da leitura;
- `statements`: declarações documentadas por candidato e tema;
- `questions`: perguntas, opções, ordem e ramificações do questionário;
- `analysis`: textos de método, relações, ressalvas e modelo de impacto;
- `editorialSections`: blocos explicativos exibidos na página de método.

### Interface e comportamento — `dist/js/app.js`

Monta as telas, navega entre as rotas, mostra perguntas, cria cards, aplica filtros e exibe os resultados produzidos pelo motor. Só altere este arquivo quando for necessário mudar o funcionamento da interface — por exemplo, criar uma nova tela ou alterar a forma de abrir um card.

### Motor de pontuação — `dist/js/impact-engine.js`

Lê as regras declaradas em `content.js`, verifica quais condições combinam com as respostas e devolve o resultado para a interface. Ele deve continuar genérico. Frases, critérios, limiares e condições editoriais devem ser alterados em `content.js`, não diretamente no motor.

### Aparência — `dist/css/style.css`

Controla cores, tipografia, bordas, espaçamentos, cartões, grids, botões, imagens e responsividade. Um colega pode trabalhar nesse arquivo sem alterar a lógica do questionário.

### Estrutura e imagens

- `dist/index.html`: carregamento inicial dos scripts e estrutura mínima.
- `dist/assets/`: imagens de candidatos e imagens de contexto dos temas.

## 3. Pontuações: como funciona

O site não calcula impacto financeiro exato. Ele aplica regras editoriais condicionais às respostas em faixas.

### 3.1 Relevância do tema

Cada tema possui `relevanceRules`. Uma regra tem condições em `when`, uma pontuação de relevância e uma justificativa. O motor usa a maior pontuação compatível:

- `0`: nenhuma relação específica identificada;
- `1`: relação baixa;
- `2`: relação média;
- `3` ou mais: relação alta.

Exemplo simplificado:

```js
{
  score: 2,
  when: [
    { field: 'essentialBurden', op: 'incomeIndexAtLeast', value: 3 }
  ],
  reason: 'O peso das despesas essenciais torna o tema mais sensível para este perfil.'
}
```

### 3.2 Resultado por candidato

As regras de cada candidato ficam em `analysis.impactModel.topics[ID_DO_TEMA].candidateRules`.

Cada regra pode ser uma possível:

- `improvement`: melhoria possível para o perfil;
- `pressure`: pressão, custo ou risco possível para o perfil.

O cálculo atual é:

```text
pontuação bruta = quantidade de melhorias − quantidade de pressões
pontuação exibida = pontuação bruta limitada entre −2 e +2
```

Assim:

- `+2`: predominam possíveis melhorias;
- `+1`: há uma melhoria líquida moderada;
- `0`: resultado neutro, misto ou sem regra específica;
- `−1`: há uma pressão líquida moderada;
- `−2`: predominam possíveis pressões.

Essa pontuação é um resumo da leitura das regras, não uma probabilidade, percentual de ganho, estimativa de renda ou previsão de resultado de governo.

### 3.3 Confiança

Cada regra possui `confidence`: `low`, `medium` ou `high`. Quando várias regras são ativadas, o site exibe o maior nível encontrado entre elas.

Use:

- `high` somente quando o mecanismo estiver muito bem documentado e a relação for direta;
- `medium` quando houver evidência razoável, mas a execução ou o contexto puder alterar o efeito;
- `low` quando a leitura depender de detalhes não informados, implementação local ou hipótese plausível.

### 3.4 Onde modificar uma pontuação

1. Abra `dist/js/content.js`.
2. Procure `analysis.impactModel.topics`.
3. Localize o tema pelo `id`, como `cost`, `work`, `housing`, `health`, `education` ou `security`.
4. Dentro do tema, escolha `relevanceRules` ou `candidateRules`.
5. Edite a condição, o efeito, a confiança e o texto explicativo.
6. Verifique se os valores usados em `field` e `values` são exatamente iguais aos textos das opções em `questions`.

Não invente novos `field` ou `topic` sem conferir como eles são usados no restante do código. Os IDs atuais dos candidatos são `lula` e `flavio`; os IDs dos temas estão no array `topics`.

## 4. Conteúdo: como editar

### 4.1 Alterar um texto exibido

Comece procurando o texto em `dist/js/content.js`. Os blocos mais comuns são `copy`, `topics`, `analysis`, `editorialSections` e `statements`.

Não altere `app.js` apenas para corrigir uma vírgula ou uma frase.

### 4.2 Alterar a proposta de um candidato

As propostas resumidas ficam dentro de cada objeto do array `topics`, nos campos dos candidatos. Preserve:

- o `id` do tema;
- os IDs dos candidatos;
- o link do plano em `sources.plans`;
- as páginas `lp` e `fp` do PDF.

Se a proposta mudar, atualize também a fonte e a indicação de página. Não apresente interpretação como se fosse citação do plano.

### 4.3 Acrescentar uma declaração documentada

Adicione um objeto ao array `statements` com, no mínimo:

```js
{
  id: 'identificador-estavel',
  candidate: 'lula',
  topic: 'security',
  title: 'Título ou identificação da declaração',
  date: 'AAAA-MM-DD',
  author: 'Fonte ou órgão responsável',
  context: 'Entrevista, documento, evento ou página',
  text: 'Trecho resumido ou transcrição curta e fiel',
  url: 'https://endereco-da-fonte'
}
```

O `candidate` e o `topic` precisam usar IDs já existentes. O `id` deve ser único e estável. Para mudar uma mensagem específica de um candidato, edite ou acrescente sua entrada em `statements`; `missingStatement` é uma mensagem global usada quando não há declaração cadastrada para aquele candidato e tema.

### 4.4 Fontes e análises comparativas

Registre fontes em `sources` e mantenha o endereço original. Os comparativos usam [Brasil do Futuro · Voto Informado 2026](https://brasil-futuro.vercel.app/), registrado em `sources.comparative`. A fonte complementar [Como isso me afeta?](https://como-isso-me-afeta.vercel.app/) fica em `sources.supplemental` e em `evidenceSources`: ajuda a separar regras vigentes, cálculos por faixa e cenários de proposta, mas não substitui leis, planos do TSE ou estudos originais.

Uma análise deve explicar:

1. qual é a diferença entre as propostas;
2. qual mecanismo pode produzir vantagem ou desvantagem;
3. para qual perfil esse mecanismo tende a ser mais relevante;
4. qual é a contrapartida, incerteza ou condição de execução.

Evite frases absolutas como “vai melhorar” ou “vai piorar”. Prefira “pode melhorar”, “tende a pressionar” e “depende de”, sempre indicando o motivo.

### 4.5 Perguntas e faixas

As perguntas ficam no array `questions`. Use faixas e categorias que mudem a análise, não detalhes íntimos desnecessários.

Perguntas condicionais usam `showWhenAny`. Quando uma resposta anterior justifica o detalhamento, a pergunta aparece; caso contrário, ela fica escondida e a resposta antiga é removida do perfil ativo.

Para empresa própria, mantenha a separação conceitual entre:

- relação com a empresa;
- forma de retirada, como pró-labore e lucros/dividendos;
- parcela aproximada de renda do capital;
- presença de empregados ou prestadores.

Não peça faturamento, pró-labore ou dividendos exatos quando uma faixa for suficiente para distinguir o impacto.

### 4.6 Gênero, raça/cor e religião

Essas respostas só devem ativar uma regra quando houver relação explícita com o tema, a proposta ou a evidência utilizada.

- Raça/cor e gênero podem ser relevantes para desigualdades documentadas, mas não permitem presumir uma experiência individual.
- Religião pode contextualizar valores ou políticas específicas, mas não deve alterar automaticamente a pontuação.
- Nunca transforme uma taxa populacional em risco certo para uma pessoa.

### 4.7 Segurança e risco regional

Os dados ficam em `analysis.regionalSafety`. As taxas são anuais por 100 mil habitantes e possuem fonte e ano. A interface mostra também a conversão matemática:

```text
percentual aproximado = taxa por 100 mil ÷ 1.000
```

Isso é uma proporção estatística do grupo e da região, não a chance individual exata do visitante. Ao atualizar esses números, altere o ano, a fonte, o link e a descrição do grupo analisado.

## 5. Layout: como funciona e onde editar

O layout é construído pelo `app.js` e estilizado pelo `style.css`.

### Para alterar somente a aparência

Edite `dist/css/style.css`:

1. comece pelas variáveis no início do arquivo, como `--bg`, `--card`, `--ink`, `--muted`, `--line`, `--soft` e `--serif`;
2. depois ajuste os componentes, como cabeçalho, cartões, grids, botões, imagens e caixas de alerta;
3. confira as regras de responsividade para telas pequenas;
4. preserve contraste, foco de teclado e legibilidade.

Não coloque textos editoriais no CSS.

### Para mudar a estrutura de um card ou tela

Edite as funções correspondentes em `dist/js/app.js`, como:

- `home()`: página inicial;
- `wizard()`: questionário;
- `candidate()`: card de cada candidato;
- `topicVisual()`: imagem e legenda do tema;
- `profileImpactCard()`: resultado personalizado;
- `comparisonCard()`: análise comparativa;
- `sources()`: biblioteca de fontes.

Se a mudança for apenas cor, tamanho ou espaçamento, não altere essas funções: use CSS.

## 6. Imagens

Coloque os arquivos em `dist/assets/` e atualize o bloco `visuals` no `content.js`:

- `visuals.candidates`: caricaturas dos candidatos;
- `visuals.topics`: imagens de contexto dos temas.

Atualize sempre o caminho, o `alt` e a legenda. A imagem ajuda a contextualizar; não é prova da promessa nem substitui a fonte documental.

## 7. Regras básicas para colaboradores

1. Trabalhe somente no repositório `planos-em-contexto`.
2. Não misture arquivos ou configurações de outros projetos.
3. Não commite tokens, senhas, cookies, dados pessoais, arquivos ZIP ou credenciais do Cloudflare.
4. Não altere a pasta `.openai/`; ela contém metadados do Site original e não faz parte do código público do repositório.
5. Preserve IDs existentes de candidatos, temas, perguntas e declarações. IDs são referências internas; trocá-los pode quebrar filtros e regras.
6. Para uma nova fonte, inclua URL, autor, data, contexto e uma descrição fiel do que ela sustenta.
7. Para cada nova regra de impacto, escreva o mecanismo e a incerteza no campo `text`.
8. Use faixas, não valores financeiros exatos, salvo quando um valor for indispensável e estiver publicamente documentado.
9. Não transforme associação estatística em causalidade nem promessa em resultado garantido.
10. Faça uma alteração coerente por commit e descreva o que mudou.
11. Revise o diff antes de publicar.
12. Se o conteúdo mudar, publique somente depois de testar o questionário e os links.

## 8. Checklist antes de publicar

- [ ] O JavaScript continua válido.
- [ ] O site abre via servidor HTTP local.
- [ ] O caminho sem empresa própria não mostra perguntas empresariais.
- [ ] O caminho com empresa própria mostra apenas as perguntas condicionais pertinentes.
- [ ] A pergunta não pede valores exatos desnecessários.
- [ ] Os seis temas abrem corretamente.
- [ ] As fontes e páginas dos planos estão corretas.
- [ ] Imagens carregam e possuem texto alternativo.
- [ ] A pontuação mostra melhorias, pressões, confiança e limitações.
- [ ] O risco de segurança está identificado como estatístico e regional.
- [ ] Nenhum token, ZIP ou dado pessoal entrou no commit.
- [ ] A publicação usa a branch `main` e o projeto Cloudflare `planos-em-contexto`.

## 9. Prévia local e publicação

Sirva a pasta `dist/` com qualquer servidor HTTP estático. A entrada é `dist/index.html`.

Este projeto não exige build: a publicação recebe diretamente `dist/`, com `index.html`, `css/`, `js/` e `assets/` preservados. O arquivo `js/impact-engine.js` também precisa acompanhar a publicação.

Para publicar pelo GitHub:

1. faça commit e push na branch `main`;
2. abra a aba **Actions**;
3. escolha **Publicar planos-em-contexto**;
4. clique em **Run workflow**;
5. confirme a publicação no endereço do projeto Cloudflare.

O workflow usa os segredos `CLOUDFLARE_ACCOUNT_ID` e `CLOUDFLARE_API_TOKEN`. O valor do token só deve existir nos segredos do GitHub, nunca no código.

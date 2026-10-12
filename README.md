# Planos em Contexto

Site estático para leitura comparativa de propostas, declarações documentadas e possíveis relações com diferentes contextos socioeconômicos.

## Estrutura

- `dist/index.html`: entrada do site.
- `dist/js/content.js`: textos, perguntas, fontes, propostas e regras editoriais.
- `dist/js/impact-engine.js`: execução genérica das regras de impacto.
- `dist/js/app.js`: interface e navegação.
- `dist/css/style.css`: aparência e responsividade.
- `dist/assets/`: imagens de candidatos e temas.
- `README-MANUTENCAO.md`: guia detalhado para editar conteúdo e aparência.

## Desenvolvimento local

Não há etapa de build. Sirva a pasta `dist/` com um servidor HTTP estático e abra `index.html` pelo endereço local.

## Publicação

O site atual está hospedado no Cloudflare Pages como `planos-em-contexto`. O projeto Cloudflare existente usa Direct Upload; por isso, alterações devem passar por revisão e ser publicadas no painel ou por um fluxo de CI/CD autorizado.

Há um fluxo manual em `.github/workflows/deploy-cloudflare.yml`. Para ativá-lo, um administrador deve cadastrar no repositório os segredos `CLOUDFLARE_ACCOUNT_ID` e `CLOUDFLARE_API_TOKEN` e depois executar a ação pela aba Actions. O token deve ter somente a permissão necessária para editar Pages; nunca coloque o valor do token em arquivos ou commits.

## Privacidade e escopo

As respostas do visitante permanecem na memória do navegador. Este repositório deve permanecer privado. Não inclua tokens, credenciais, dados pessoais ou arquivos ZIP no Git.

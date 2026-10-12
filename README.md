# Planos em Contexto

Site estático para leitura comparativa de propostas, declarações documentadas e possíveis relações com diferentes contextos socioeconômicos.

O projeto não tenta dizer em quem o visitante deve votar. Ele organiza fontes públicas, explicita limites da evidência e mostra uma leitura condicional: determinada proposta pode ter efeitos diferentes para pessoas em situações diferentes.

## Intuito do projeto

O visitante responde perguntas em faixas, sem precisar informar valores exatos ou dados identificáveis. A partir dessas respostas, o site:

1. identifica quais temas têm mais relação com o perfil informado;
2. compara as propostas dos candidatos naquele tema;
3. procura declarações documentadas quando elas existem;
4. apresenta possíveis melhorias e possíveis pressões para cada perfil;
5. indica a confiança da leitura e as limitações que impedem uma conclusão mais forte;
6. em segurança, mostra somente um risco estatístico regional, nunca uma previsão individual.

As respostas ficam apenas na memória do navegador. O site não possui banco de dados de visitantes.

## Onde cada parte fica

| Parte | Arquivo | O que deve ser editado ali |
| --- | --- | --- |
| Conteúdo editorial | `dist/js/content.js` | Textos, perguntas, opções, propostas, declarações, fontes, análises, regras de impacto e imagens |
| Motor de pontuação | `dist/js/impact-engine.js` | Execução genérica das regras; normalmente não precisa ser alterado |
| Interface e comportamento | `dist/js/app.js` | Navegação, montagem das telas, filtros, cards e perguntas condicionais |
| Aparência | `dist/css/style.css` | Cores, fontes, espaçamentos, cartões, responsividade e estados visuais |
| Estrutura mínima | `dist/index.html` | Ordem de carregamento dos arquivos e elementos-base da página |
| Imagens | `dist/assets/` | Arquivos de imagem usados pelos candidatos e pelos temas |
| Documentação | `README.md` e `README-MANUTENCAO.md` | Orientações para quem for colaborar |

O guia detalhado está em [README-MANUTENCAO.md](README-MANUTENCAO.md).

## Desenvolvimento local

Não há etapa de build. A pasta publicada é `dist/`, com HTML, CSS e JavaScript estáticos. Para testar localmente, sirva essa pasta por HTTP e abra o endereço local; não abra `index.html` diretamente pelo sistema de arquivos, pois o navegador pode bloquear o carregamento dos scripts.

Antes de publicar, faça pelo menos uma verificação de sintaxe dos arquivos JavaScript e teste os caminhos principais do questionário.

## Publicação

O site está hospedado no Cloudflare Pages como `planos-em-contexto`. O projeto usa Direct Upload, e o repositório privado do código é:

https://github.com/sandinosantos/planos-em-contexto

O fluxo manual em `.github/workflows/deploy-cloudflare.yml` publica a pasta `dist/` no mesmo projeto. Para executá-lo, o repositório precisa ter os segredos `CLOUDFLARE_ACCOUNT_ID` e `CLOUDFLARE_API_TOKEN`; depois, um administrador deve abrir a aba **Actions**, escolher **Publicar planos-em-contexto** e usar **Run workflow** na branch `main`.

O token do Cloudflare deve ter somente a permissão de edição do Cloudflare Pages. Nunca coloque tokens, credenciais, dados pessoais ou arquivos ZIP no Git.

## Privacidade e escopo

Este repositório deve permanecer restrito ao projeto `planos-em-contexto`. Não misture arquivos, credenciais, dados ou configurações de outros projetos.

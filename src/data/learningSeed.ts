import type { LearningSeed } from '@/types/learning';

export const learningSeed: LearningSeed = {
  "modules": [
    {
      "id": "module-html-basics",
      "language": "html",
      "title": "HTML Basico",
      "description": "Trilha completa de HTML: estrutura, semantica, formularios, SEO e boas praticas.",
      "order": 1,
      "tags": [
        "html",
        "estrutura",
        "semantica",
        "seo"
      ]
    },
    {
      "id": "module-css-basics",
      "language": "css",
      "title": "CSS Basico",
      "description": "Trilha completa de CSS: seletores, box model, layout, responsividade e animacoes.",
      "order": 2,
      "tags": [
        "css",
        "layout",
        "responsivo",
        "animacao"
      ]
    },
    {
      "id": "module-js-basics",
      "language": "javascript",
      "title": "JavaScript Basico",
      "description": "Trilha pratica para sair do zero com explicacoes curtas, exemplos reais e exercicios guiados.",
      "order": 3,
      "tags": [
        "js",
        "basics",
        "iniciante"
      ]
    }
  ],
  "lessons": [
    {
      "id": "legacy-html-u1-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-o-que-e-a-web",
      "title": "O que e a Web",
      "content": "Objetivo: Entenda como a internet funciona. A Web e um conjunto de documentos ligados por links e acessados via navegador. Ela usa a internet (a rede fisica) para transportar dados, enquanto a Web define como o conteudo e publicado. Exemplo de uso: ao digitar um endereco, o navegador baixa arquivos HTML, CSS e JS. Uso comum: sites, dashboards e aplicativos web. Dica pratica: use o DevTools (F12) para ver o HTML recebido. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 1,
      "tags": [
        "introducao",
        "web",
        "que"
      ]
    },
    {
      "id": "legacy-html-u1-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-o-que-e-html",
      "title": "O que e HTML",
      "content": "Objetivo: Descubra a linguagem da web. HTML define a estrutura do conteudo. Pense nele como o esqueleto da pagina. Cada elemento e criado com tags e pode ter atributos. Exemplo de uso: paginas, artigos e blogs sempre tem HTML por tras. Uso comum: organizar titulos, textos, listas e imagens. Dica pratica: comece simples e va adicionando tags aos poucos. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 2,
      "tags": [
        "introducao",
        "web",
        "que",
        "html"
      ]
    },
    {
      "id": "legacy-html-u1-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-html-vs-css-vs-javascript",
      "title": "HTML vs CSS vs JavaScript",
      "content": "Objetivo: Entenda o papel de cada tecnologia. HTML, CSS e JavaScript trabalham juntos. HTML define estrutura, CSS define aparencia e JS adiciona comportamento. Exemplo de uso: botao estilizado que responde a clique. Uso comum: interfaces completas e responsivas. Dica pratica: teste cada camada separadamente. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 3,
      "tags": [
        "introducao",
        "web",
        "html",
        "css",
        "javascript"
      ]
    },
    {
      "id": "legacy-html-u1-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-como-o-navegador-interpreta-html",
      "title": "Como o navegador interpreta HTML",
      "content": "Objetivo: Veja como sua pagina ganha vida. O navegador le o codigo HTML de cima para baixo e constroi uma arvore de elementos chamada DOM (Document Object Model). Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 4,
      "tags": [
        "introducao",
        "web",
        "como",
        "navegador",
        "interpreta"
      ]
    },
    {
      "id": "legacy-html-u1-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-o-que-sao-tags",
      "title": "O que sao tags",
      "content": "Objetivo: Aprenda a sintaxe basica do HTML. Tags sao comandos entre sinais de . A maioria tem abertura e fechamento . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 5,
      "tags": [
        "introducao",
        "web",
        "que",
        "sao",
        "tags"
      ]
    },
    {
      "id": "legacy-html-u1-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-o-que-sao-atributos",
      "title": "O que sao atributos",
      "content": "Objetivo: Adicione informacoes extras as tags. Atributos fornecem informacoes extras sobre um elemento. Ficam dentro da tag de abertura: . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 6,
      "tags": [
        "introducao",
        "web",
        "que",
        "sao",
        "atributos"
      ]
    },
    {
      "id": "legacy-html-u1-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-html-nao-e-linguagem-de-programacao",
      "title": "HTML nao e linguagem de programacao",
      "content": "Objetivo: Entenda a diferenca importante. HTML e uma linguagem de marcacao, nao de programacao. Ela nao faz calculos, loops ou decisoes logicas. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 7,
      "tags": [
        "introducao",
        "web",
        "html",
        "nao",
        "linguagem"
      ]
    },
    {
      "id": "legacy-html-u2-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-doctype-html",
      "title": "<!DOCTYPE html>",
      "content": "Objetivo: A primeira linha de todo documento. O DOCTYPE informa ao navegador que o documento segue o padrao HTML5. Sem ele, alguns navegadores entram em modo de compatibilidade. Exemplo de uso: todo arquivo HTML deve iniciar com o DOCTYPE. Uso comum: padronizar renderizacao entre navegadores. Dica pratica: deixe o DOCTYPE sempre na primeira linha. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 8,
      "tags": [
        "estrutura",
        "html",
        "doctype"
      ]
    },
    {
      "id": "legacy-html-u2-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-tag-html",
      "title": "Tag <html>",
      "content": "Objetivo: O elemento raiz do documento. A tag envolve todo o documento e define o idioma com lang. Exemplo de uso: lang=\"pt-BR\" ajuda leitores de tela e SEO. Uso comum: definir idioma e agrupar head/body. Dica pratica: sempre configure o lang correto. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 9,
      "tags": [
        "estrutura",
        "html",
        "tag"
      ]
    },
    {
      "id": "legacy-html-u2-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-tag-head",
      "title": "Tag <head>",
      "content": "Objetivo: Metadados e configuracoes. O head guarda metadados e links para recursos externos. Exemplo de uso: carregar CSS e definir o titulo da pagina. Uso comum: incluir fontes, meta tags e scripts. Dica pratica: mantenha o head organizado e limpo. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 10,
      "tags": [
        "estrutura",
        "html",
        "tag",
        "head"
      ]
    },
    {
      "id": "legacy-html-u2-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-tag-body",
      "title": "Tag <body>",
      "content": "Objetivo: O conteudo visivel da pagina. O body contem tudo que aparece na pagina: textos, imagens, botoes. Exemplo de uso: todo conteudo visivel vai no body. Uso comum: organizar a interface da pagina. Dica pratica: separe o conteudo em secoes. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 11,
      "tags": [
        "estrutura",
        "html",
        "tag",
        "body"
      ]
    },
    {
      "id": "legacy-html-u2-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-title",
      "title": "<title>",
      "content": "Objetivo: O titulo na aba do navegador. A tag define o titulo que aparece na aba do navegador e nos resultados de busca. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 12,
      "tags": [
        "estrutura",
        "html",
        "title"
      ]
    },
    {
      "id": "legacy-html-u2-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-meta-charset",
      "title": "<meta charset>",
      "content": "Objetivo: Codificacao de caracteres. O define a codificacao de caracteres. UTF-8 suporta acentos e caracteres especiais. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 13,
      "tags": [
        "estrutura",
        "html",
        "meta",
        "charset"
      ]
    },
    {
      "id": "legacy-html-u2-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-meta-name-viewport",
      "title": "<meta name=\"viewport\">",
      "content": "Objetivo: Responsividade em dispositivos. O viewport e a area visivel da pagina. A meta viewport ajusta o site para diferentes tamanhos de tela. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 14,
      "tags": [
        "estrutura",
        "html",
        "meta",
        "name",
        "viewport"
      ]
    },
    {
      "id": "legacy-html-u2-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-comentarios-html",
      "title": "Comentarios HTML",
      "content": "Objetivo: Anotacoes no codigo. Comentarios sao anotacoes no codigo que o navegador ignora. Usamos para documentar e explicar o codigo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 15,
      "tags": [
        "estrutura",
        "html",
        "comentarios"
      ]
    },
    {
      "id": "legacy-html-u2-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-indentacao-e-organizacao",
      "title": "Indentacao e organizacao",
      "content": "Objetivo: Codigo limpo e legivel. A indentacao (espacos no inicio da linha) torna o codigo mais facil de ler e entender a hierarquia. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 16,
      "tags": [
        "estrutura",
        "html",
        "indentacao",
        "organizacao"
      ]
    },
    {
      "id": "legacy-html-u3-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-titulos-h1-a-h6",
      "title": "Titulos <h1> a <h6>",
      "content": "Objetivo: Hierarquia de titulos. Titulos criam hierarquia de leitura. Use h1 apenas uma vez por pagina. Exemplo de uso: organizar secao de conteudo. Uso comum: melhorar SEO e acessibilidade. Dica pratica: nao pule niveis de titulo. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 17,
      "tags": [
        "texto",
        "conteudo",
        "titulos"
      ]
    },
    {
      "id": "legacy-html-u3-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-paragrafos-p",
      "title": "Paragrafos <p>",
      "content": "Objetivo: Blocos de texto. Paragrafos agrupam texto e criam espacamento automatico. Exemplo de uso: textos longos em artigos. Uso comum: separar ideias em blocos. Dica pratica: evite usar para blocos de texto. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 18,
      "tags": [
        "texto",
        "conteudo",
        "paragrafos"
      ]
    },
    {
      "id": "legacy-html-u3-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-quebra-de-linha-br",
      "title": "Quebra de linha <br>",
      "content": "Objetivo: Pular para proxima linha. A tag forca uma quebra de linha. E uma tag auto-fechante (nao precisa de ). Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 19,
      "tags": [
        "texto",
        "conteudo",
        "quebra",
        "linha"
      ]
    },
    {
      "id": "legacy-html-u3-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-linha-horizontal-hr",
      "title": "Linha horizontal <hr>",
      "content": "Objetivo: Separador visual. A tag cria uma linha horizontal para separar secoes. Tambem e auto-fechante. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 20,
      "tags": [
        "texto",
        "conteudo",
        "linha",
        "horizontal"
      ]
    },
    {
      "id": "legacy-html-u3-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-negrito-strong",
      "title": "Negrito <strong>",
      "content": "Objetivo: Destaque importante. Use para texto com importancia forte. O navegador exibe em negrito. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 21,
      "tags": [
        "texto",
        "conteudo",
        "negrito",
        "strong"
      ]
    },
    {
      "id": "legacy-html-u3-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-italico-em",
      "title": "Italico <em>",
      "content": "Objetivo: Enfase no texto. Use para dar enfase ao texto. O navegador exibe em italico. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 22,
      "tags": [
        "texto",
        "conteudo",
        "italico"
      ]
    },
    {
      "id": "legacy-html-u3-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-texto-pre-formatado-pre",
      "title": "Texto pre-formatado <pre>",
      "content": "Objetivo: Preservar espacos e quebras. preserva espacos e quebras de linha exatamente como voce escreveu. Usa fonte monoespacada. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 23,
      "tags": [
        "texto",
        "conteudo",
        "pre",
        "formatado"
      ]
    },
    {
      "id": "legacy-html-u3-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-codigo-code",
      "title": "Codigo <code>",
      "content": "Objetivo: Exibir codigo no texto. e usado para marcar trechos de codigo no texto. Exibe em fonte monoespacada. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 24,
      "tags": [
        "texto",
        "conteudo",
        "codigo",
        "code"
      ]
    },
    {
      "id": "legacy-html-u3-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteudo-citacoes-blockquote",
      "title": "Citacoes <blockquote>",
      "content": "Objetivo: Blocos de citacao. e usado para citacoes longas. O navegador geralmente adiciona recuo. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 25,
      "tags": [
        "texto",
        "conteudo",
        "citacoes",
        "blockquote"
      ]
    },
    {
      "id": "legacy-html-u4-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-tag-a",
      "title": "Tag <a>",
      "content": "Objetivo: Criando links. Links conectam paginas e recursos com a tag . Exemplo de uso: navegar para outra pagina ou abrir um email. Uso comum: menus e chamadas para acao. Dica pratica: sempre use texto descritivo no link. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 26,
      "tags": [
        "links",
        "navegacao",
        "tag"
      ]
    },
    {
      "id": "legacy-html-u4-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-atributo-href",
      "title": "Atributo href",
      "content": "Objetivo: Definindo o destino. href (Hypertext Reference) define para onde o link leva. Pode ser uma URL, arquivo ou secao da pagina. Exemplo de uso: Link Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 27,
      "tags": [
        "links",
        "navegacao",
        "atributo",
        "href"
      ]
    },
    {
      "id": "legacy-html-u4-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-links-externos",
      "title": "Links externos",
      "content": "Objetivo: Links para outros sites. Links externos apontam para outros sites. Use a URL completa comecando com https://. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 28,
      "tags": [
        "links",
        "navegacao",
        "externos"
      ]
    },
    {
      "id": "legacy-html-u4-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-links-internos",
      "title": "Links internos",
      "content": "Objetivo: Links dentro do site. Links internos apontam para outras paginas do mesmo site. Use caminhos relativos. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 29,
      "tags": [
        "links",
        "navegacao",
        "internos"
      ]
    },
    {
      "id": "legacy-html-u4-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-ancoras",
      "title": "Ancoras",
      "content": "Objetivo: Links para secoes da pagina. Use #id para linkar a uma secao da mesma pagina. O elemento de destino precisa ter o id correspondente. Exemplo de uso: #id { / estilos / } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 30,
      "tags": [
        "links",
        "navegacao",
        "ancoras"
      ]
    },
    {
      "id": "legacy-html-u4-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-atributo-target",
      "title": "Atributo target",
      "content": "Objetivo: Onde abrir o link. target define onde o link abre. _blank abre em nova aba, _self na mesma (padrao). Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 31,
      "tags": [
        "links",
        "navegacao",
        "atributo",
        "target"
      ]
    },
    {
      "id": "legacy-html-u4-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-atributo-rel",
      "title": "Atributo rel",
      "content": "Objetivo: Relacao do link. rel define a relacao entre a pagina atual e o destino. Importante para seguranca e SEO. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 32,
      "tags": [
        "links",
        "navegacao",
        "atributo",
        "rel"
      ]
    },
    {
      "id": "legacy-html-u4-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-links-mailto",
      "title": "Links mailto",
      "content": "Objetivo: Links para email. Use mailto: para criar links que abrem o cliente de email do usuario. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 33,
      "tags": [
        "links",
        "navegacao",
        "mailto"
      ]
    },
    {
      "id": "legacy-html-u4-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao-links-tel",
      "title": "Links tel",
      "content": "Objetivo: Links para telefone. Use tel: para criar links que iniciam chamadas em dispositivos moveis. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 34,
      "tags": [
        "links",
        "navegacao",
        "tel"
      ]
    },
    {
      "id": "legacy-html-u5-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-tag-img",
      "title": "Tag <img>",
      "content": "Objetivo: Inserindo imagens. Imagens usam a tag com src e alt. Exemplo de uso: ilustrar produtos e conteudos. Uso comum: banners, galerias e perfis. Dica pratica: o alt ajuda acessibilidade e SEO. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 35,
      "tags": [
        "imagens",
        "midia",
        "tag",
        "img"
      ]
    },
    {
      "id": "legacy-html-u5-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-atributo-src",
      "title": "Atributo src",
      "content": "Objetivo: Caminho da imagem. src (source) define o caminho ou URL da imagem. Pode ser relativo ou absoluto. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 36,
      "tags": [
        "imagens",
        "midia",
        "atributo",
        "src"
      ]
    },
    {
      "id": "legacy-html-u5-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-atributo-alt",
      "title": "Atributo alt",
      "content": "Objetivo: Texto alternativo. alt fornece texto alternativo se a imagem nao carregar. Essencial para acessibilidade. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 37,
      "tags": [
        "imagens",
        "midia",
        "atributo",
        "alt"
      ]
    },
    {
      "id": "legacy-html-u5-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-tamanho-de-imagens",
      "title": "Tamanho de imagens",
      "content": "Objetivo: width e height. Use width e height para definir dimensoes em pixels. Ajuda o layout carregar corretamente. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 38,
      "tags": [
        "imagens",
        "midia",
        "tamanho"
      ]
    },
    {
      "id": "legacy-html-u5-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-formatos-de-imagem",
      "title": "Formatos de imagem",
      "content": "Objetivo: JPG, PNG, GIF, WebP, SVG. JPG: fotos. PNG: transparencia. GIF: animacoes simples. WebP: moderno, menor tamanho. SVG: vetores. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 39,
      "tags": [
        "imagens",
        "midia",
        "formatos",
        "imagem"
      ]
    },
    {
      "id": "legacy-html-u5-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-figure",
      "title": "<figure>",
      "content": "Objetivo: Container para midia. e um container semantico para imagens, diagramas ou ilustracoes com legendas. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 40,
      "tags": [
        "imagens",
        "midia",
        "figure"
      ]
    },
    {
      "id": "legacy-html-u5-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-figcaption",
      "title": "<figcaption>",
      "content": "Objetivo: Legendas para figuras. adiciona uma legenda ao . Fica dentro do figure. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 41,
      "tags": [
        "imagens",
        "midia",
        "figcaption"
      ]
    },
    {
      "id": "legacy-html-u5-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-audio",
      "title": "<audio>",
      "content": "Objetivo: Inserindo audio. incorpora arquivos de audio. Use o atributo controls para mostrar controles de reproducao. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 42,
      "tags": [
        "imagens",
        "midia",
        "audio"
      ]
    },
    {
      "id": "legacy-html-u5-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-video",
      "title": "<video>",
      "content": "Objetivo: Inserindo video. incorpora arquivos de video. Funciona similar ao audio, com controls e outros atributos. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 43,
      "tags": [
        "imagens",
        "midia",
        "video"
      ]
    },
    {
      "id": "legacy-html-u6-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-lista-nao-ordenada-ul",
      "title": "Lista nao ordenada <ul>",
      "content": "Objetivo: Listas com marcadores. (unordered list) cria listas com marcadores ( ). A ordem nao importa. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 44,
      "tags": [
        "listas",
        "lista",
        "nao",
        "ordenada"
      ]
    },
    {
      "id": "legacy-html-u6-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-lista-ordenada-ol",
      "title": "Lista ordenada <ol>",
      "content": "Objetivo: Listas numeradas. (ordered list) cria listas numeradas (1, 2, 3...). Use quando a ordem importa. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 45,
      "tags": [
        "listas",
        "lista",
        "ordenada"
      ]
    },
    {
      "id": "legacy-html-u6-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-itens-li",
      "title": "Itens <li>",
      "content": "Objetivo: Itens de lista. (list item) representa cada item dentro de ou . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 46,
      "tags": [
        "listas",
        "itens"
      ]
    },
    {
      "id": "legacy-html-u6-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-listas-aninhadas",
      "title": "Listas aninhadas",
      "content": "Objetivo: Listas dentro de listas. Voce pode colocar uma lista dentro de outra, criando sublistas. A lista interna fica dentro de um . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 47,
      "tags": [
        "listas",
        "aninhadas"
      ]
    },
    {
      "id": "legacy-html-u6-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-lista-de-definicao-dl",
      "title": "Lista de definicao <dl>",
      "content": "Objetivo: Termos e definicoes. (definition list) e usada para termos e suas definicoes, como um glossario. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 48,
      "tags": [
        "listas",
        "lista",
        "definicao"
      ]
    },
    {
      "id": "legacy-html-u7-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-tag-table",
      "title": "Tag <table>",
      "content": "Objetivo: Criando tabelas. cria uma tabela. Tabelas organizam dados em linhas e colunas. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 49,
      "tags": [
        "tabelas",
        "tag",
        "table"
      ]
    },
    {
      "id": "legacy-html-u7-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-tr",
      "title": "<tr>",
      "content": "Objetivo: Linhas da tabela. (table row) cria uma linha na tabela. Celulas ficam dentro de cada linha. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 50,
      "tags": [
        "tabelas"
      ]
    },
    {
      "id": "legacy-html-u7-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-td",
      "title": "<td>",
      "content": "Objetivo: Celulas de dados. (table data) cria uma celula com dados. Fica dentro de . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 51,
      "tags": [
        "tabelas"
      ]
    },
    {
      "id": "legacy-html-u7-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-th",
      "title": "<th>",
      "content": "Objetivo: Celulas de cabecalho. (table header) cria uma celula de cabecalho. Aparece em negrito e centralizada. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 52,
      "tags": [
        "tabelas"
      ]
    },
    {
      "id": "legacy-html-u7-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-thead",
      "title": "<thead>",
      "content": "Objetivo: Grupo de cabecalho. agrupa as linhas de cabecalho. Melhora a semantica e facilita estilizacao. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 53,
      "tags": [
        "tabelas",
        "thead"
      ]
    },
    {
      "id": "legacy-html-u7-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-tbody",
      "title": "<tbody>",
      "content": "Objetivo: Corpo da tabela. agrupa as linhas de dados principais da tabela. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 54,
      "tags": [
        "tabelas",
        "tbody"
      ]
    },
    {
      "id": "legacy-html-u7-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-tfoot",
      "title": "<tfoot>",
      "content": "Objetivo: Rodape da tabela. agrupa linhas de rodape, como totais ou resumos. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 55,
      "tags": [
        "tabelas",
        "tfoot"
      ]
    },
    {
      "id": "legacy-html-u7-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-colspan-e-rowspan",
      "title": "colspan e rowspan",
      "content": "Objetivo: Mesclando celulas. colspan mescla colunas horizontalmente. rowspan mescla linhas verticalmente. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 56,
      "tags": [
        "tabelas",
        "colspan",
        "rowspan"
      ]
    },
    {
      "id": "legacy-html-u7-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-caption",
      "title": "<caption>",
      "content": "Objetivo: Titulo da tabela. adiciona um titulo a tabela. Deve ser o primeiro elemento dentro de . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 57,
      "tags": [
        "tabelas",
        "caption"
      ]
    },
    {
      "id": "legacy-html-u8-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-tag-form",
      "title": "Tag <form>",
      "content": "Objetivo: Criando formularios. Formularios coletam dados com inputs, labels e botoes. Exemplo de uso: cadastro e login. Uso comum: pesquisas, contato e pagamento. Dica pratica: sempre associe label ao input. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 58,
      "tags": [
        "formularios",
        "tag",
        "form"
      ]
    },
    {
      "id": "legacy-html-u8-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-action",
      "title": "action",
      "content": "Objetivo: Destino do formulario. action define a URL para onde os dados serao enviados quando o form for submetido. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 59,
      "tags": [
        "formularios",
        "action"
      ]
    },
    {
      "id": "legacy-html-u8-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-method",
      "title": "method",
      "content": "Objetivo: Como enviar dados. method define como os dados sao enviados. GET na URL, POST no corpo da requisicao. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 60,
      "tags": [
        "formularios",
        "method"
      ]
    },
    {
      "id": "legacy-html-u8-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-input-type-text",
      "title": "<input type=\"text\">",
      "content": "Objetivo: Campo de texto. cria um campo para texto simples de uma linha. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 61,
      "tags": [
        "formularios",
        "input",
        "type",
        "text"
      ]
    },
    {
      "id": "legacy-html-u8-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-input-type-email",
      "title": "<input type=\"email\">",
      "content": "Objetivo: Campo de email. type=\"email\" valida automaticamente se o texto e um email valido. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 62,
      "tags": [
        "formularios",
        "input",
        "type",
        "email"
      ]
    },
    {
      "id": "legacy-html-u8-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-input-type-password",
      "title": "<input type=\"password\">",
      "content": "Objetivo: Campo de senha. type=\"password\" oculta os caracteres digitados, mostrando apenas pontos. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 63,
      "tags": [
        "formularios",
        "input",
        "type",
        "password"
      ]
    },
    {
      "id": "legacy-html-u8-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-input-type-checkbox",
      "title": "<input type=\"checkbox\">",
      "content": "Objetivo: Caixa de selecao. type=\"checkbox\" cria uma caixa que pode ser marcada ou desmarcada. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 64,
      "tags": [
        "formularios",
        "input",
        "type",
        "checkbox"
      ]
    },
    {
      "id": "legacy-html-u8-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-input-type-radio",
      "title": "<input type=\"radio\">",
      "content": "Objetivo: Botoes de opcao. type=\"radio\" cria botoes onde apenas uma opcao pode ser selecionada por grupo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 65,
      "tags": [
        "formularios",
        "input",
        "type",
        "radio"
      ]
    },
    {
      "id": "legacy-html-u8-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-textarea",
      "title": "<textarea>",
      "content": "Objetivo: Area de texto. cria uma area para texto longo com multiplas linhas. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 66,
      "tags": [
        "formularios",
        "textarea"
      ]
    },
    {
      "id": "legacy-html-u8-l10",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-select",
      "title": "<select>",
      "content": "Objetivo: Lista suspensa. cria uma lista dropdown. Opcoes ficam dentro com . Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 67,
      "tags": [
        "formularios",
        "select"
      ]
    },
    {
      "id": "legacy-html-u8-l11",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-option",
      "title": "<option>",
      "content": "Objetivo: Opcoes do select. define cada opcao dentro de . O atributo value e o que e enviado. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 68,
      "tags": [
        "formularios",
        "option"
      ]
    },
    {
      "id": "legacy-html-u8-l12",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-button",
      "title": "<button>",
      "content": "Objetivo: Botoes de acao. cria um botao clicavel. Por padrao, type=\"submit\" envia o formulario. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 69,
      "tags": [
        "formularios",
        "button"
      ]
    },
    {
      "id": "legacy-html-u8-l13",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-required",
      "title": "required",
      "content": "Objetivo: Campo obrigatorio. O atributo required torna o campo obrigatorio. O formulario nao envia se estiver vazio. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 70,
      "tags": [
        "formularios",
        "required"
      ]
    },
    {
      "id": "legacy-html-u8-l14",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-placeholder",
      "title": "placeholder",
      "content": "Objetivo: Texto de dica. placeholder mostra um texto de dica dentro do campo, que desaparece quando voce digita. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 71,
      "tags": [
        "formularios",
        "placeholder"
      ]
    },
    {
      "id": "legacy-html-u8-l15",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-name",
      "title": "name",
      "content": "Objetivo: Nome do campo. name identifica o campo quando os dados sao enviados. E a chave no par chave=valor. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 72,
      "tags": [
        "formularios",
        "name"
      ]
    },
    {
      "id": "legacy-html-u9-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-o-que-e-html-semantico",
      "title": "O que e HTML semantico",
      "content": "Objetivo: Significado no codigo. HTML semantico usa tags que descrevem o conteudo. Exemplo de uso: organizar pagina em areas claras. Uso comum: melhorar acessibilidade e SEO. Dica pratica: evite excesso de div sem significado. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 73,
      "tags": [
        "html",
        "semantico",
        "que"
      ]
    },
    {
      "id": "legacy-html-u9-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-header",
      "title": "<header>",
      "content": "Objetivo: Cabecalho da pagina. representa o cabecalho de uma pagina ou secao. Geralmente contem logo, titulo e navegacao. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 74,
      "tags": [
        "html",
        "semantico",
        "header"
      ]
    },
    {
      "id": "legacy-html-u9-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-nav",
      "title": "<nav>",
      "content": "Objetivo: Navegacao principal. representa uma secao de navegacao com links para outras paginas ou partes do site. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 75,
      "tags": [
        "html",
        "semantico",
        "nav"
      ]
    },
    {
      "id": "legacy-html-u9-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-main",
      "title": "<main>",
      "content": "Objetivo: Conteudo principal. contem o conteudo principal da pagina. Deve haver apenas um por pagina. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 76,
      "tags": [
        "html",
        "semantico",
        "main"
      ]
    },
    {
      "id": "legacy-html-u9-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-section",
      "title": "<section>",
      "content": "Objetivo: Secoes tematicas. representa uma secao tematica de conteudo. Geralmente tem seu proprio titulo. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 77,
      "tags": [
        "html",
        "semantico",
        "section"
      ]
    },
    {
      "id": "legacy-html-u9-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-article",
      "title": "<article>",
      "content": "Objetivo: Conteudo independente. representa conteudo autocontido que faz sentido sozinho: post, noticia, comentario. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 78,
      "tags": [
        "html",
        "semantico",
        "article"
      ]
    },
    {
      "id": "legacy-html-u9-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-aside",
      "title": "<aside>",
      "content": "Objetivo: Conteudo relacionado. contem conteudo relacionado mas separado: sidebars, caixas de destaque, anuncios. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 79,
      "tags": [
        "html",
        "semantico",
        "aside"
      ]
    },
    {
      "id": "legacy-html-u9-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-footer",
      "title": "<footer>",
      "content": "Objetivo: Rodape. representa o rodape de uma pagina ou secao. Contem copyright, links, contato. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 80,
      "tags": [
        "html",
        "semantico",
        "footer"
      ]
    },
    {
      "id": "legacy-html-u9-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico-quando-usar-div",
      "title": "Quando usar div",
      "content": "Objetivo: O papel da div generica. e um container generico sem significado semantico. Use quando nenhuma tag semantica se aplica. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 81,
      "tags": [
        "html",
        "semantico",
        "quando",
        "usar",
        "div"
      ]
    },
    {
      "id": "legacy-html-u10-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-id",
      "title": "id",
      "content": "Objetivo: Identificador unico. id e um identificador unico na pagina. Cada id so pode aparecer uma vez. Exemplo de uso: ... Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 82,
      "tags": [
        "atributos",
        "globais"
      ]
    },
    {
      "id": "legacy-html-u10-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-class",
      "title": "class",
      "content": "Objetivo: Classes de estilo. class define uma ou mais classes CSS. Diferente de id, classes podem ser repetidas. Exemplo de uso: Conteudo Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 83,
      "tags": [
        "atributos",
        "globais",
        "class"
      ]
    },
    {
      "id": "legacy-html-u10-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-style",
      "title": "style",
      "content": "Objetivo: CSS inline. style aplica CSS diretamente no elemento. Util para estilos unicos e rapidos. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 84,
      "tags": [
        "atributos",
        "globais",
        "style"
      ]
    },
    {
      "id": "legacy-html-u10-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-title",
      "title": "title",
      "content": "Objetivo: Dica ao passar o mouse. title mostra uma tooltip quando o usuario passa o mouse sobre o elemento. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 85,
      "tags": [
        "atributos",
        "globais",
        "title"
      ]
    },
    {
      "id": "legacy-html-u10-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-lang",
      "title": "lang",
      "content": "Objetivo: Idioma do conteudo. lang define o idioma do conteudo. Importante para acessibilidade e SEO. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 86,
      "tags": [
        "atributos",
        "globais",
        "lang"
      ]
    },
    {
      "id": "legacy-html-u10-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-data",
      "title": "data-*",
      "content": "Objetivo: Dados personalizados. data- permite armazenar dados personalizados nos elementos. Util para JavaScript. Exemplo de uso: p { data-: valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 87,
      "tags": [
        "atributos",
        "globais",
        "data"
      ]
    },
    {
      "id": "legacy-html-u10-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-hidden",
      "title": "hidden",
      "content": "Objetivo: Ocultar elementos. hidden oculta o elemento da pagina. Ele ainda existe no codigo, mas nao e exibido. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 88,
      "tags": [
        "atributos",
        "globais",
        "hidden"
      ]
    },
    {
      "id": "legacy-html-u10-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-tabindex",
      "title": "tabindex",
      "content": "Objetivo: Ordem de tabulacao. tabindex controla se e em que ordem o elemento recebe foco ao pressionar Tab. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 89,
      "tags": [
        "atributos",
        "globais",
        "tabindex"
      ]
    },
    {
      "id": "legacy-html-u11-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-o-que-e-acessibilidade",
      "title": "O que e acessibilidade",
      "content": "Objetivo: Web para todos. Acessibilidade garante que todos consigam usar o site. Exemplo de uso: leitores de tela dependem do alt e aria. Uso comum: formularios, botoes e menus. Dica pratica: teste com teclado e leitor de tela. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 90,
      "tags": [
        "acessibilidade",
        "que"
      ]
    },
    {
      "id": "legacy-html-u11-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-uso-correto-de-alt",
      "title": "Uso correto de alt",
      "content": "Objetivo: Descrevendo imagens. O atributo alt e lido por leitores de tela. Descreva o conteudo e funcao da imagem. Exemplo de uso: Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 91,
      "tags": [
        "acessibilidade",
        "uso",
        "correto",
        "alt"
      ]
    },
    {
      "id": "legacy-html-u11-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-label-e-formularios",
      "title": "<label> e formularios",
      "content": "Objetivo: Rotulos acessiveis. associa texto a um campo de formulario. Essencial para leitores de tela. Exemplo de uso: Texto aqui Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 92,
      "tags": [
        "acessibilidade",
        "label",
        "formularios"
      ]
    },
    {
      "id": "legacy-html-u11-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-ordem-de-tabulacao",
      "title": "Ordem de tabulacao",
      "content": "Objetivo: Navegacao por teclado. Muitos usuarios navegam com Tab. A ordem deve fazer sentido logico. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 93,
      "tags": [
        "acessibilidade",
        "ordem",
        "tabulacao"
      ]
    },
    {
      "id": "legacy-html-u11-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-introducao-a-aria",
      "title": "Introducao a ARIA",
      "content": "Objetivo: Atributos de acessibilidade. ARIA (Accessible Rich Internet Applications) sao atributos que melhoram a acessibilidade de conteudo dinamico. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 94,
      "tags": [
        "acessibilidade",
        "introducao",
        "aria"
      ]
    },
    {
      "id": "legacy-html-u11-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-aria-label",
      "title": "aria-label",
      "content": "Objetivo: Rotulos invisiveis. aria-label fornece um rotulo acessivel quando nao ha texto visivel. Exemplo de uso: p { aria-label: valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 95,
      "tags": [
        "acessibilidade",
        "aria",
        "label"
      ]
    },
    {
      "id": "legacy-html-u11-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-aria-hidden",
      "title": "aria-hidden",
      "content": "Objetivo: Ocultando de leitores de tela. aria-hidden=\"true\" esconde o elemento de tecnologias assistivas, mas mantem visivel. Exemplo de uso: p { aria-hidden=\"true\": valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 96,
      "tags": [
        "acessibilidade",
        "aria",
        "hidden"
      ]
    },
    {
      "id": "legacy-html-u12-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-titulos-hierarquicos",
      "title": "Titulos hierarquicos",
      "content": "Objetivo: Estrutura para buscadores. Buscadores usam h1-h6 para entender a estrutura. Use apenas um h1, depois h2, h3 em ordem. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 97,
      "tags": [
        "seo",
        "com",
        "html",
        "titulos",
        "hierarquicos"
      ]
    },
    {
      "id": "legacy-html-u12-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-estrutura-semantica",
      "title": "Estrutura semantica",
      "content": "Objetivo: HTML que buscadores entendem. Tags semanticas (header, main, article) ajudam buscadores a entender a estrutura do conteudo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 98,
      "tags": [
        "seo",
        "com",
        "html",
        "estrutura",
        "semantica"
      ]
    },
    {
      "id": "legacy-html-u12-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-meta-description",
      "title": "Meta description",
      "content": "Objetivo: Descricao nos resultados. A meta description aparece nos resultados de busca abaixo do titulo. Deve ser atraente e ter ate 160 caracteres. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 99,
      "tags": [
        "seo",
        "com",
        "html",
        "meta",
        "description"
      ]
    },
    {
      "id": "legacy-html-u12-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-links-internos",
      "title": "Links internos",
      "content": "Objetivo: Conectando paginas. Links entre paginas do seu site ajudam buscadores a descobrir e indexar conteudo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 100,
      "tags": [
        "seo",
        "com",
        "html",
        "links",
        "internos"
      ]
    },
    {
      "id": "legacy-html-u12-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-imagens-com-alt",
      "title": "Imagens com alt",
      "content": "Objetivo: SEO para imagens. O atributo alt ajuda buscadores a entender o conteudo da imagem. Pode aparecer em buscas de imagens. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 101,
      "tags": [
        "seo",
        "com",
        "html",
        "imagens",
        "alt"
      ]
    },
    {
      "id": "legacy-html-u13-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integracao-com-css-e-js-link",
      "title": "<link>",
      "content": "Objetivo: Conectando CSS externo. conecta arquivos CSS externos. Vai dentro do . Exemplo de uso: Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 102,
      "tags": [
        "integracao",
        "com",
        "css",
        "link"
      ]
    },
    {
      "id": "legacy-html-u13-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integracao-com-css-e-js-style",
      "title": "<style>",
      "content": "Objetivo: CSS interno. permite escrever CSS diretamente no HTML, dentro do . Exemplo de uso: Texto aqui Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 103,
      "tags": [
        "integracao",
        "com",
        "css",
        "style"
      ]
    },
    {
      "id": "legacy-html-u13-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integracao-com-css-e-js-script",
      "title": "<script>",
      "content": "Objetivo: Adicionando JavaScript. adiciona JavaScript. Pode ser codigo inline ou arquivo externo. Exemplo de uso: Texto aqui Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 104,
      "tags": [
        "integracao",
        "com",
        "css",
        "script"
      ]
    },
    {
      "id": "legacy-html-u13-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integracao-com-css-e-js-defer",
      "title": "defer",
      "content": "Objetivo: Carregamento adiado. defer faz o script baixar em paralelo e executar apos o HTML ser completamente parseado. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 105,
      "tags": [
        "integracao",
        "com",
        "css",
        "defer"
      ]
    },
    {
      "id": "legacy-html-u13-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integracao-com-css-e-js-async",
      "title": "async",
      "content": "Objetivo: Carregamento assincrono. async baixa em paralelo e executa imediatamente apos baixar, sem esperar o HTML. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 106,
      "tags": [
        "integracao",
        "com",
        "css",
        "async"
      ]
    },
    {
      "id": "legacy-html-u14-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-codigo-limpo",
      "title": "Codigo limpo",
      "content": "Objetivo: HTML organizado. HTML limpo e facil de ler, manter e colaborar. Use indentacao consistente e nomes claros. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 107,
      "tags": [
        "boas",
        "praticas",
        "codigo",
        "limpo"
      ]
    },
    {
      "id": "legacy-html-u14-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-comentarios-uteis",
      "title": "Comentarios uteis",
      "content": "Objetivo: Documentando o codigo. Comente o porque, nao o que. Bom: \" \". Ruim: \" \". Exemplo de uso: p { : valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 108,
      "tags": [
        "boas",
        "praticas",
        "comentarios",
        "uteis"
      ]
    },
    {
      "id": "legacy-html-u14-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-validacao-html",
      "title": "Validacao HTML",
      "content": "Objetivo: Verificando erros. Validadores verificam se seu HTML segue os padroes. Erros podem causar problemas de renderizacao. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 109,
      "tags": [
        "boas",
        "praticas",
        "validacao",
        "html"
      ]
    },
    {
      "id": "legacy-html-u14-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-performance-basica",
      "title": "Performance basica",
      "content": "Objetivo: Sites mais rapidos. HTML leve carrega mais rapido. Evite codigo desnecessario e otimize recursos. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 110,
      "tags": [
        "boas",
        "praticas",
        "performance",
        "basica"
      ]
    },
    {
      "id": "legacy-html-u14-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-compatibilidade",
      "title": "Compatibilidade",
      "content": "Objetivo: Funcionando em todos navegadores. Nem todos navegadores interpretam HTML igualmente. Teste em Chrome, Firefox, Safari, Edge. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 111,
      "tags": [
        "boas",
        "praticas",
        "compatibilidade"
      ]
    },
    {
      "id": "legacy-html-u15-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-pagina-pessoal",
      "title": "Pagina pessoal",
      "content": "Objetivo: Seu primeiro site. Vamos criar uma pagina simples com seu nome, foto, bio e links para redes sociais. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 112,
      "tags": [
        "projetos",
        "praticos",
        "pagina",
        "pessoal"
      ]
    },
    {
      "id": "legacy-html-u15-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-landing-page-simples",
      "title": "Landing page simples",
      "content": "Objetivo: Pagina de conversao. Uma landing page tem: titulo chamativo, proposta de valor, beneficios e call-to-action. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 113,
      "tags": [
        "projetos",
        "praticos",
        "landing",
        "page",
        "simples"
      ]
    },
    {
      "id": "legacy-html-u15-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-pagina-de-contato",
      "title": "Pagina de contato",
      "content": "Objetivo: Formulario de contato. Inclua informacoes de contato (email, telefone, endereco) e um formulario para mensagens. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 114,
      "tags": [
        "projetos",
        "praticos",
        "pagina",
        "contato"
      ]
    },
    {
      "id": "legacy-html-u15-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-formulario-funcional",
      "title": "Formulario funcional",
      "content": "Objetivo: Formulario completo. Pratique todos os tipos de input: text, email, password, checkbox, radio, select, textarea. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 115,
      "tags": [
        "projetos",
        "praticos",
        "formulario",
        "funcional"
      ]
    },
    {
      "id": "legacy-html-u15-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-mini-site-institucional",
      "title": "Mini site institucional",
      "content": "Objetivo: Site de empresa. Site com multiplas paginas: Home, Sobre, Servicos, Contato. Navegacao entre elas. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 116,
      "tags": [
        "projetos",
        "praticos",
        "mini",
        "site",
        "institucional"
      ]
    },
    {
      "id": "legacy-html-u16-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "complementar-html-vs-frameworks",
      "title": "HTML vs frameworks",
      "content": "Objetivo: HTML puro e bibliotecas. Frameworks como React, Vue, Angular usam HTML dentro de JavaScript. A base ainda e HTML. Exemplo de uso: Titulo Texto base Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 117,
      "tags": [
        "complementar",
        "html",
        "frameworks"
      ]
    },
    {
      "id": "legacy-html-u16-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "complementar-introducao-a-web-components",
      "title": "Introducao a Web Components",
      "content": "Objetivo: Componentes nativos. Web Components permitem criar elementos HTML customizados e reutilizaveis, nativamente no navegador. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 118,
      "tags": [
        "complementar",
        "introducao",
        "web",
        "components"
      ]
    },
    {
      "id": "legacy-html-u16-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "complementar-html-em-pwas",
      "title": "HTML em PWAs",
      "content": "Objetivo: Apps progressivos. PWAs sao sites que funcionam como apps. Podem ser instalados e funcionar offline. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 119,
      "tags": [
        "complementar",
        "html",
        "pwas"
      ]
    },
    {
      "id": "legacy-css-u17-l1",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-de-css-o-que-e-css",
      "title": "O que e CSS",
      "content": "Objetivo: Estilos para a web. CSS define a aparencia dos elementos HTML. Exemplo de uso: mudar cores, tamanhos e espacamentos. Uso comum: criar identidade visual. Dica pratica: comece pelo layout geral e refine depois. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 1,
      "tags": [
        "fundamentos",
        "css",
        "que"
      ]
    },
    {
      "id": "legacy-css-u17-l2",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-de-css-seletores",
      "title": "Seletores",
      "content": "Objetivo: Como escolher elementos. Seletores escolhem quais elementos receberao estilo. Exemplo de uso: aplicar estilos pontuais. Uso comum: diferenciar componentes. Dica pratica: prefira classes para reutilizacao. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 2,
      "tags": [
        "fundamentos",
        "css",
        "seletores"
      ]
    },
    {
      "id": "legacy-css-u17-l3",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-de-css-cores-e-tipografia",
      "title": "Cores e tipografia",
      "content": "Objetivo: Deixando o texto legivel. Use color, font-size, font-family e font-weight para estilizar textos. Exemplo de uso: p { color: #1f2937; } Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 3,
      "tags": [
        "fundamentos",
        "css",
        "cores",
        "tipografia"
      ]
    },
    {
      "id": "legacy-css-u17-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-de-css-box-model",
      "title": "Box model",
      "content": "Objetivo: Espacamento e tamanho. Todo elemento tem conteudo, padding, border e margin. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 4,
      "tags": [
        "fundamentos",
        "css",
        "box",
        "model"
      ]
    },
    {
      "id": "legacy-css-u17-l5",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-de-css-cascata-e-especificidade",
      "title": "Cascata e especificidade",
      "content": "Objetivo: Quem vence?. Se dois estilos se aplicam, vence o mais especifico ou o que esta por ultimo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 5,
      "tags": [
        "fundamentos",
        "css",
        "cascata",
        "especificidade"
      ]
    },
    {
      "id": "legacy-css-u18-l1",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-e-responsividade-flexbox",
      "title": "Flexbox",
      "content": "Objetivo: Alinhamento flexivel. Box model define como tamanho e espacamento funcionam. Exemplo de uso: criar cartoes com respiro. Uso comum: ajustar layout sem quebrar o conteudo. Dica pratica: use DevTools para visualizar o box model. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 6,
      "tags": [
        "layout",
        "responsividade",
        "flexbox"
      ]
    },
    {
      "id": "legacy-css-u18-l2",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-e-responsividade-grid",
      "title": "Grid",
      "content": "Objetivo: Layout em grade. Flexbox alinha itens em uma linha ou coluna. Exemplo de uso: barras de navegacao e cards. Uso comum: alinhar botoes e menus. Dica pratica: combine com gap para espacamento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 7,
      "tags": [
        "layout",
        "responsividade",
        "grid"
      ]
    },
    {
      "id": "legacy-css-u18-l3",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-e-responsividade-position",
      "title": "Position",
      "content": "Objetivo: Controle de posicionamento. relative mantem espaco, absolute remove do fluxo e posiciona no ancestral. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 8,
      "tags": [
        "layout",
        "responsividade",
        "position"
      ]
    },
    {
      "id": "legacy-css-u18-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-e-responsividade-responsividade",
      "title": "Responsividade",
      "content": "Objetivo: Layouts para todas telas. Media queries aplicam estilos em condicoes, como largura da tela. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 9,
      "tags": [
        "layout",
        "responsividade"
      ]
    },
    {
      "id": "legacy-css-u18-l5",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-e-responsividade-pseudo-classes",
      "title": "Pseudo-classes",
      "content": "Objetivo: Estados interativos. Pseudo-classes como :hover, :focus e :active controlam estados. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 10,
      "tags": [
        "layout",
        "responsividade",
        "pseudo",
        "classes"
      ]
    },
    {
      "id": "legacy-css-u19-l1",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-transitions",
      "title": "Transitions",
      "content": "Objetivo: Animacoes suaves. Transicoes criam animacoes suaves entre estados. Exemplo de uso: feedback visual em botoes. Uso comum: melhorar a sensacao de interacao. Dica pratica: transicoes curtas sao mais naturais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 11,
      "tags": [
        "css",
        "avancado",
        "transitions"
      ]
    },
    {
      "id": "legacy-css-u19-l2",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-animations",
      "title": "Animations",
      "content": "Objetivo: Keyframes no CSS. Crie animacoes com @keyframes e aplique com animation. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 12,
      "tags": [
        "css",
        "avancado",
        "animations"
      ]
    },
    {
      "id": "legacy-css-u19-l3",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-variaveis-css",
      "title": "Variaveis CSS",
      "content": "Objetivo: Custom properties. Variaveis CSS comecam com -- e sao usadas com var(). Exemplo de uso: p { --: valor; } Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 13,
      "tags": [
        "css",
        "avancado",
        "variaveis"
      ]
    },
    {
      "id": "legacy-css-u19-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-pseudo-elementos",
      "title": "Pseudo-elementos",
      "content": "Objetivo: Detalhes com ::before/::after. Use ::before e ::after para inserir conteudo decorativo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 14,
      "tags": [
        "css",
        "avancado",
        "pseudo",
        "elementos"
      ]
    },
    {
      "id": "legacy-css-u19-l5",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-sombras-e-fundos",
      "title": "Sombras e fundos",
      "content": "Objetivo: Profundidade visual. Use box-shadow para criar profundidade em cartoes e botoes. Exemplo de uso: p { box-shadow: valor; } Uso comum: estilizar elementos e ajustar o layout. Dica pratica: altere valores e observe as mudancas visuais. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 15,
      "tags": [
        "css",
        "avancado",
        "sombras",
        "fundos"
      ]
    },
    {
      "id": "legacy-css-u22-l1",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "seletores-e-especificidade-seletores-basicos",
      "title": "Seletores basicos",
      "content": "Objetivo: Elementos, classes e IDs. Seletores permitem escolher quais elementos receberao estilos. Exemplo de uso: .card { padding: 16px; border-radius: 12px; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 16,
      "tags": [
        "seletores",
        "especificidade",
        "basicos"
      ]
    },
    {
      "id": "legacy-css-u22-l2",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "seletores-e-especificidade-combinadores",
      "title": "Combinadores",
      "content": "Objetivo: Descendentes e filhos. Eles definem relacoes entre elementos: descendente, filho e irmao. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 17,
      "tags": [
        "seletores",
        "especificidade",
        "combinadores"
      ]
    },
    {
      "id": "legacy-css-u22-l3",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "seletores-e-especificidade-pseudo-classes",
      "title": "Pseudo-classes",
      "content": "Objetivo: Estados dos elementos. Use :hover, :focus e :nth-child() para estados e posicao. Exemplo de uso: p { :nth-child(): valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 18,
      "tags": [
        "seletores",
        "especificidade",
        "pseudo",
        "classes"
      ]
    },
    {
      "id": "legacy-css-u22-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "seletores-e-especificidade-especificidade",
      "title": "Especificidade",
      "content": "Objetivo: Quem vence no CSS. Quando regras entram em conflito, a mais especifica vence. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 19,
      "tags": [
        "seletores",
        "especificidade"
      ]
    },
    {
      "id": "legacy-css-u23-l1",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "flexbox-e-grid-flex-container",
      "title": "Flex container",
      "content": "Objetivo: Eixos e alinhamento. Ative com display: flex para distribuir itens em um eixo. Exemplo de uso: Trecho pratico aplicado ao mesmo conceito da licao. Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 20,
      "tags": [
        "flexbox",
        "grid",
        "flex",
        "container"
      ]
    },
    {
      "id": "legacy-css-u23-l2",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "flexbox-e-grid-flex-items",
      "title": "Flex items",
      "content": "Objetivo: Crescimento e espaco. Use flex para controlar crescimento, reducao e tamanho base. Exemplo de uso: container { display: flex; gap: 12px; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 21,
      "tags": [
        "flexbox",
        "grid",
        "flex",
        "items"
      ]
    },
    {
      "id": "legacy-css-u23-l3",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "flexbox-e-grid-grid-basico",
      "title": "Grid basico",
      "content": "Objetivo: Colunas e linhas. Use display: grid para layouts bidimensionais. Exemplo de uso: .card { padding: 16px; border-radius: 12px; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 22,
      "tags": [
        "flexbox",
        "grid",
        "basico"
      ]
    },
    {
      "id": "legacy-css-u23-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "flexbox-e-grid-layout-responsivo",
      "title": "Layout responsivo",
      "content": "Objetivo: Grid fluido. Combine auto-fit e minmax() para grades adaptaveis. Exemplo de uso: p { auto-fit: valor; } Uso comum: estruturar conteudo de paginas web. Dica pratica: visualize no navegador e inspecione o elemento. Veja um exemplo completo aplicado: O que observar: estrutura, nomes claros e boas praticas.",
      "order": 23,
      "tags": [
        "flexbox",
        "grid",
        "layout",
        "responsivo"
      ]
    },
    {
      "id": "lesson-js-variables",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "variaveis",
      "title": "Variaveis e constantes",
      "content": "Objetivo: guardar dados com clareza. Regra pratica: use const por padrao e let quando o valor precisar mudar. Exemplo: const nome = \"Ana\"; let pontos = 0; pontos += 5;. Erro comum: usar nomes vagos como x ou dado; prefira nomes que expliquem a intencao, como totalCarrinho ou usuarioAtual.",
      "order": 1,
      "tags": [
        "js",
        "variaveis",
        "const",
        "let"
      ]
    },
    {
      "id": "lesson-js-conditionals",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "condicionais",
      "title": "Condicionais",
      "content": "Objetivo: tomar decisoes no codigo. Use if/else para escolher entre caminhos: if (idade >= 18) { ... } else { ... }. Compare valores com operadores claros (===, !==, >, >=) e combine regras com && (e) e || (ou). Erro comum: usar = dentro de condicao; lembre que = atribui e === compara.",
      "order": 2,
      "tags": [
        "js",
        "if",
        "else",
        "comparacao"
      ]
    },
    {
      "id": "lesson-js-functions",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "funcoes",
      "title": "Funcoes",
      "content": "Objetivo: reutilizar logica sem repetir codigo. Pense em funcao como maquina: entrada (parametros), processamento e saida (return). Exemplo: function soma(a, b) { return a + b; }. Para casos curtos, use arrow function: const dobro = (n) => n * 2;. Erro comum: esquecer o return quando a funcao precisa devolver valor.",
      "order": 3,
      "tags": [
        "js",
        "funcoes",
        "parametros",
        "return"
      ]
    },
    {
      "id": "lesson-js-loops",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "repeticao",
      "title": "Lacos de repeticao",
      "content": "Objetivo: repetir instrucoes sem copiar e colar codigo. Use for quando souber quantas repeticoes deseja, e while quando depender de uma condicao. Exemplo for: for (let i = 0; i < 3; i++) { ... }. Erro comum: esquecer de atualizar o contador e criar loop infinito.",
      "order": 4,
      "tags": [
        "js",
        "for",
        "while",
        "repeticao"
      ]
    },
    {
      "id": "lesson-js-arrays",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "arrays",
      "title": "Arrays",
      "content": "Objetivo: armazenar colecoes de dados na ordem. Acesso por indice comeca em 0: lista[0] e o primeiro item. Propriedade util: lista.length mostra quantidade. Operacao comum: lista.push(novoItem) para adicionar no final. Erro comum: tentar acessar indice que nao existe e receber undefined.",
      "order": 5,
      "tags": [
        "js",
        "arrays",
        "lista",
        "length"
      ]
    },
    {
      "id": "lesson-js-objects",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "objetos",
      "title": "Objetos",
      "content": "Objetivo: representar entidades com propriedades nomeadas. Exemplo: const usuario = { nome: \"Lia\", idade: 20 };. Leia com usuario.nome e atualize com usuario.idade = 21. Use objetos quando cada item tiver varios campos relacionados. Erro comum: confundir [] de arrays com {} de objetos.",
      "order": 6,
      "tags": [
        "js",
        "objetos",
        "propriedades"
      ]
    },
    {
      "id": "lesson-js-strings",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "strings",
      "title": "Strings e templates",
      "content": "Objetivo: manipular texto com seguranca e legibilidade. Operacoes essenciais: trim() remove espacos extras, toLowerCase() padroniza letras e template string facilita montar frases: `Ola, ${nome}`. Erro comum: esquecer parenteses em metodos, por exemplo usar toUpperCase em vez de toUpperCase().",
      "order": 7,
      "tags": [
        "js",
        "strings",
        "template",
        "texto"
      ]
    },
    {
      "id": "lesson-js-logic",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "logica",
      "title": "Comparacoes e logica booleana",
      "content": "Objetivo: escrever regras corretas usando true e false. Use comparacoes estritas (===, !==) e operadores logicos: && exige todas as condicoes; || aceita pelo menos uma. Erro comum: confundir = (atribui) com === (compara). Outra boa pratica: quebrar condicoes complexas em variaveis booleanas com nomes claros.",
      "order": 8,
      "tags": [
        "js",
        "boolean",
        "comparacao",
        "logica"
      ]
    },
    {
      "id": "lesson-js-array-methods",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "metodos-array",
      "title": "Metodos de array: map, filter e reduce",
      "content": "Objetivo: transformar listas sem loops manuais. map cria nova lista transformada, filter seleciona itens por condicao e reduce acumula um resultado unico. Exemplo: precos.reduce((total, p) => total + p, 0). Erro comum: esquecer o valor inicial do reduce e gerar comportamento inesperado em listas vazias.",
      "order": 9,
      "tags": [
        "js",
        "array",
        "map",
        "filter",
        "reduce"
      ]
    },
    {
      "id": "lesson-js-dom-events",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "dom-eventos",
      "title": "DOM e eventos",
      "content": "Objetivo: conectar JavaScript com a interface. Use document.querySelector para selecionar elementos e addEventListener para reagir a acoes do usuario. Padrao util: selecione, valide se o elemento existe e depois atualize textContent ou classes. Erro comum: tentar manipular elemento nulo sem verificar.",
      "order": 10,
      "tags": [
        "js",
        "dom",
        "eventos",
        "queryselector"
      ]
    },
    {
      "id": "lesson-js-async",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "async-await",
      "title": "Async/Await e requisicoes",
      "content": "Objetivo: lidar com operacoes que demoram, como chamadas de API. async transforma a funcao para trabalhar com Promises e await pausa ate o resultado chegar. Fluxo basico: await fetch(...), await resposta.json() e retorno final. Erro comum: esquecer await e tentar usar dados antes da resposta estar pronta.",
      "order": 11,
      "tags": [
        "js",
        "async",
        "await",
        "fetch",
        "api"
      ]
    },
    {
      "id": "lesson-js-error-handling",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "tratamento-erros",
      "title": "Tratamento de erros com try/catch",
      "content": "Objetivo: evitar que seu programa quebre quando algo inesperado acontece. Use try para executar o codigo que pode falhar e catch para tratar o erro com seguranca. Regra pratica: trate erro perto da origem e devolva um resultado previsivel (null, false ou mensagem). Erro comum: capturar erro e ignorar completamente sem retornar nada util.",
      "order": 12,
      "tags": [
        "js",
        "try",
        "catch",
        "erro"
      ]
    },
    {
      "id": "lesson-js-promises",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "promises",
      "title": "Promises na pratica",
      "content": "Objetivo: controlar operacoes assincronas com sucesso e falha. Promise.resolve entrega um valor com sucesso e Promise.reject representa erro. Com then voce trata sucesso; com catch trata falha. Em codigo moderno, async/await torna esse fluxo mais legivel. Erro comum: esquecer o catch e deixar erro sem tratamento.",
      "order": 13,
      "tags": [
        "js",
        "promise",
        "then",
        "catch",
        "assincrono"
      ]
    },
    {
      "id": "lesson-js-classes",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "classes",
      "title": "Classes e objetos na pratica",
      "content": "Objetivo: organizar dados e comportamentos relacionados. Com class voce define um molde e com new cria objetos. O constructor recebe os dados iniciais e metodos ficam no corpo da classe. Erro comum: esquecer this ao acessar propriedades da instancia.",
      "order": 14,
      "tags": [
        "js",
        "class",
        "constructor",
        "this",
        "oop"
      ]
    },
    {
      "id": "lesson-js-modularizacao",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "modularizacao",
      "title": "Modularizacao de codigo",
      "content": "Objetivo: dividir o codigo em partes pequenas e reutilizaveis. Um modulo deve ter responsabilidade clara, com funcoes de entrada e saida bem definidas. Em projetos reais usamos export/import para ligar modulos. Erro comum: criar modulo gigante com regras de varios assuntos misturados.",
      "order": 15,
      "tags": [
        "js",
        "modulo",
        "organizacao",
        "reuso"
      ]
    },
    {
      "id": "lesson-js-testing",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "testes",
      "title": "Testes unitarios para iniciantes",
      "content": "Objetivo: garantir que funcoes continuem corretas ao evoluir o codigo. Um teste unitario valida uma regra pequena, com entrada previsivel e saida esperada. Padrao util: organize por cenarios de sucesso, limite e erro. Erro comum: testar varias responsabilidades ao mesmo tempo e nao saber onde o bug aconteceu.",
      "order": 16,
      "tags": [
        "js",
        "testes",
        "qualidade",
        "assert"
      ]
    }
  ],
  "exercises": [
    {
      "id": "legacy-html-u1-l1-3",
      "lesson_id": "legacy-html-u1-l1",
      "type": "blank",
      "prompt": "Quem criou a World Wide Web? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tim Berners-Lee",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e a Web."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Bill Gates / Steve Jobs."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tim Berners-Lee"
        }
      ],
      "solution": "Tim Berners-Lee",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l1-4",
      "lesson_id": "legacy-html-u1-l1",
      "type": "blank",
      "prompt": "Complete: A Web usa a sigla...",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "WWW",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que e a Web."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: WWW"
        }
      ],
      "solution": "WWW",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l1-practice",
      "lesson_id": "legacy-html-u1-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que e a Web",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e a Web."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que e a Web"
        }
      ],
      "solution": "O que e a Web",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l2-3",
      "lesson_id": "legacy-html-u1-l2",
      "type": "blank",
      "prompt": "Complete a sigla HTML:",
      "starter_code": "{{blank1}} Markup Language",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HyperText",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que e HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HyperText"
        }
      ],
      "solution": "HyperText Markup Language",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l2-4",
      "lesson_id": "legacy-html-u1-l2",
      "type": "blank",
      "prompt": "HTML e uma linguagem de: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Marcacao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Programacao / Estilo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Marcacao"
        }
      ],
      "solution": "Marcacao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l2-practice",
      "lesson_id": "legacy-html-u1-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que e HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que e HTML"
        }
      ],
      "solution": "O que e HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l3-3",
      "lesson_id": "legacy-html-u1-l3",
      "type": "blank",
      "prompt": "Qual tecnologia define cores e fontes? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "CSS",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML vs CSS vs JavaScript."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: HTML / JavaScript."
        },
        {
          "level": 3,
          "text": "Resposta esperada: CSS"
        }
      ],
      "solution": "CSS",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l3-4",
      "lesson_id": "legacy-html-u1-l3",
      "type": "blank",
      "prompt": "Qual tecnologia adiciona interatividade? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "JavaScript",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML vs CSS vs JavaScript."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: HTML / CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: JavaScript"
        }
      ],
      "solution": "JavaScript",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l3-practice",
      "lesson_id": "legacy-html-u1-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HTML vs CSS vs JavaScript",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML vs CSS vs JavaScript."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HTML vs CSS vs JavaScript"
        }
      ],
      "solution": "HTML vs CSS vs JavaScript",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l4-3",
      "lesson_id": "legacy-html-u1-l4",
      "type": "blank",
      "prompt": "A arvore de elementos se chama:",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "DOM",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Como o navegador interpreta HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: DOM"
        }
      ],
      "solution": "DOM",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l4-4",
      "lesson_id": "legacy-html-u1-l4",
      "type": "blank",
      "prompt": "O navegador le o HTML em qual ordem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "De cima para baixo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Como o navegador interpreta HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: De baixo para cima / Aleatoriamente."
        },
        {
          "level": 3,
          "text": "Resposta esperada: De cima para baixo"
        }
      ],
      "solution": "De cima para baixo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l4-practice",
      "lesson_id": "legacy-html-u1-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Como o navegador interpreta HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Como o navegador interpreta HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Como o navegador interpreta HTML"
        }
      ],
      "solution": "Como o navegador interpreta HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l5-2",
      "lesson_id": "legacy-html-u1-l5",
      "type": "blank",
      "prompt": "Complete a tag de paragrafo:",
      "starter_code": "<{{blank1}}>Ola, mundo!</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "p",
              "placeholder": "_"
            },
            {
              "id": "blank2",
              "answer": "p",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que sao tags."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: p"
        }
      ],
      "solution": "<p>Ola, mundo!</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u1-l5-4",
      "lesson_id": "legacy-html-u1-l5",
      "type": "blank",
      "prompt": "Feche a tag corretamente:",
      "starter_code": "<h1>Titulo<{{blank1}}h1>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "/",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que sao tags."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: /"
        }
      ],
      "solution": "<h1>Titulo</h1>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l5-practice",
      "lesson_id": "legacy-html-u1-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que sao tags",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que sao tags."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que sao tags"
        }
      ],
      "solution": "O que sao tags",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l6-3",
      "lesson_id": "legacy-html-u1-l6",
      "type": "blank",
      "prompt": "Adicione o atributo href:",
      "starter_code": "<a {{blank1}}=\"https://google.com\">Link</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "href",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que sao atributos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: href"
        }
      ],
      "solution": "<a href=\"https://google.com\">Link</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l6-4",
      "lesson_id": "legacy-html-u1-l6",
      "type": "blank",
      "prompt": "Onde ficam os atributos? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dentro da tag de abertura",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que sao atributos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Na tag de fechamento / Fora das tags."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dentro da tag de abertura"
        }
      ],
      "solution": "Dentro da tag de abertura",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l6-practice",
      "lesson_id": "legacy-html-u1-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que sao atributos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que sao atributos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que sao atributos"
        }
      ],
      "solution": "O que sao atributos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l7-3",
      "lesson_id": "legacy-html-u1-l7",
      "type": "blank",
      "prompt": "HTML pode fazer calculos matematicos? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML nao e linguagem de programacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao"
        }
      ],
      "solution": "Nao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l7-4",
      "lesson_id": "legacy-html-u1-l7",
      "type": "blank",
      "prompt": "Para logica e interatividade, usamos: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "JavaScript",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML nao e linguagem de programacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: HTML / CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: JavaScript"
        }
      ],
      "solution": "JavaScript",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u1-l7-practice",
      "lesson_id": "legacy-html-u1-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HTML nao e linguagem de programacao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML nao e linguagem de programacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HTML nao e linguagem de programacao"
        }
      ],
      "solution": "HTML nao e linguagem de programacao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l1-3",
      "lesson_id": "legacy-html-u2-l1",
      "type": "blank",
      "prompt": "Complete a declaracao:",
      "starter_code": "<!{{blank1}} html>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "DOCTYPE",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <!DOCTYPE html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: DOCTYPE"
        }
      ],
      "solution": "<!DOCTYPE html>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u2-l1-4",
      "lesson_id": "legacy-html-u2-l1",
      "type": "blank",
      "prompt": "Onde fica o DOCTYPE? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Na primeira linha",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <!DOCTYPE html>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: No final do documento / Dentro do <body>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Na primeira linha"
        }
      ],
      "solution": "Na primeira linha",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l1-practice",
      "lesson_id": "legacy-html-u2-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da licao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <!DOCTYPE html>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da licao"
        }
      ],
      "solution": "Tema da licao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l2-3",
      "lesson_id": "legacy-html-u2-l2",
      "type": "blank",
      "prompt": "Complete a estrutura:",
      "starter_code": "<!DOCTYPE html>\n<{{blank1}} lang=\"pt-BR\">\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "html",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "html",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: html"
        }
      ],
      "solution": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n</html>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l2-4",
      "lesson_id": "legacy-html-u2-l2",
      "type": "blank",
      "prompt": "Defina o idioma como portugues:",
      "starter_code": "<html {{blank1}}=\"pt-BR\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "lang",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: lang"
        }
      ],
      "solution": "<html lang=\"pt-BR\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u2-l2-practice",
      "lesson_id": "legacy-html-u2-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento html com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "html",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "html",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: html"
        }
      ],
      "solution": "<html class=\"destaque\">Texto</html>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l3-3",
      "lesson_id": "legacy-html-u2-l3",
      "type": "blank",
      "prompt": "Complete a estrutura:",
      "starter_code": "<html>\n <{{blank1}}>\n <!-- metadados aqui -->\n </{{blank2}}>\n</html>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "head",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "head",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <head>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: head"
        }
      ],
      "solution": "<html>\n <head>\n <!-- metadados aqui -->\n </head>\n</html>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l3-4",
      "lesson_id": "legacy-html-u2-l3",
      "type": "blank",
      "prompt": "O conteudo do <head> aparece na pagina? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao diretamente",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <head>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, sempre / As vezes."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao diretamente"
        }
      ],
      "solution": "Nao diretamente",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l3-practice",
      "lesson_id": "legacy-html-u2-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento head com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "head",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "head",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <head>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: head"
        }
      ],
      "solution": "<head class=\"destaque\">Texto</head>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l4-3",
      "lesson_id": "legacy-html-u2-l4",
      "type": "blank",
      "prompt": "Onde vai o conteudo visivel?",
      "starter_code": "<html>\n <head></head>\n <{{blank1}}>\n <h1>Ola!</h1>\n </{{blank2}}>\n</html>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "body",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "body",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <body>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: body"
        }
      ],
      "solution": "<html>\n <head></head>\n <body>\n <h1>Ola!</h1>\n </body>\n</html>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l4-4",
      "lesson_id": "legacy-html-u2-l4",
      "type": "blank",
      "prompt": "Quantos <body> pode ter um documento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Apenas um",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <body>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Quantos quiser / Dois."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Apenas um"
        }
      ],
      "solution": "Apenas um",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l4-practice",
      "lesson_id": "legacy-html-u2-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento body com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "body",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "body",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <body>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: body"
        }
      ],
      "solution": "<body class=\"destaque\">Texto</body>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l5-3",
      "lesson_id": "legacy-html-u2-l5",
      "type": "blank",
      "prompt": "Adicione um titulo:",
      "starter_code": "<head>\n <{{blank1}}>Meu Site</{{blank2}}>\n</head>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "title",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "title",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <title>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: title"
        }
      ],
      "solution": "<head>\n <title>Meu Site</title>\n</head>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l5-4",
      "lesson_id": "legacy-html-u2-l5",
      "type": "blank",
      "prompt": "Onde aparece o <title>? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Na aba do navegador",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <title>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: No corpo da pagina / No rodape."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Na aba do navegador"
        }
      ],
      "solution": "Na aba do navegador",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l5-practice",
      "lesson_id": "legacy-html-u2-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento title com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "title",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "title",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <title>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: title"
        }
      ],
      "solution": "<title class=\"destaque\">Texto</title>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l6-3",
      "lesson_id": "legacy-html-u2-l6",
      "type": "blank",
      "prompt": "Defina a codificacao:",
      "starter_code": "<meta {{blank1}}=\"UTF-8\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "charset",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <meta charset>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: charset"
        }
      ],
      "solution": "<meta charset=\"UTF-8\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u2-l6-4",
      "lesson_id": "legacy-html-u2-l6",
      "type": "blank",
      "prompt": "Qual codificacao suporta acentos? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "UTF-8",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <meta charset>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: ASCII / Binary."
        },
        {
          "level": 3,
          "text": "Resposta esperada: UTF-8"
        }
      ],
      "solution": "UTF-8",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l6-practice",
      "lesson_id": "legacy-html-u2-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da licao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <meta charset>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da licao"
        }
      ],
      "solution": "Tema da licao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l7-3",
      "lesson_id": "legacy-html-u2-l7",
      "type": "blank",
      "prompt": "Complete a meta viewport:",
      "starter_code": "<meta name=\"{{blank1}}\" content=\"width=device-width\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "viewport",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <meta name=\"viewport\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: viewport"
        }
      ],
      "solution": "<meta name=\"viewport\" content=\"width=device-width\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u2-l7-4",
      "lesson_id": "legacy-html-u2-l7",
      "type": "blank",
      "prompt": "A meta viewport e importante para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dispositivos moveis",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <meta name=\"viewport\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: SEO / Velocidade."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dispositivos moveis"
        }
      ],
      "solution": "Dispositivos moveis",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l7-practice",
      "lesson_id": "legacy-html-u2-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da licao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <meta name=\"viewport\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da licao"
        }
      ],
      "solution": "Tema da licao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l8-3",
      "lesson_id": "legacy-html-u2-l8",
      "type": "blank",
      "prompt": "Crie um comentario:",
      "starter_code": "{{blank1}}-- Este e um comentario --{{blank2}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<!",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": ">",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <!"
        }
      ],
      "solution": "<!-- Este e um comentario -->",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u2-l8-4",
      "lesson_id": "legacy-html-u2-l8",
      "type": "blank",
      "prompt": "Comentarios aparecem na pagina? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao"
        }
      ],
      "solution": "Nao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l8-practice",
      "lesson_id": "legacy-html-u2-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Comentarios HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Comentarios HTML"
        }
      ],
      "solution": "Comentarios HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l9-3",
      "lesson_id": "legacy-html-u2-l9",
      "type": "blank",
      "prompt": "Qual codigo esta bem indentado? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<div>\\n <p>Texto</p>\\n</div>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Indentacao e organizacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div><p>Texto</p></div>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <div>\\n <p>Texto</p>\\n</div>"
        }
      ],
      "solution": "<div>\\n <p>Texto</p>\\n</div>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l9-4",
      "lesson_id": "legacy-html-u2-l9",
      "type": "blank",
      "prompt": "Indentacao afeta o funcionamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao, so melhora a leitura",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Indentacao e organizacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, e obrigatoria."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao, so melhora a leitura"
        }
      ],
      "solution": "Nao, so melhora a leitura",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l9-practice",
      "lesson_id": "legacy-html-u2-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Indentacao e organizacao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Indentacao e organizacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Indentacao e organizacao"
        }
      ],
      "solution": "Indentacao e organizacao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l1-2",
      "lesson_id": "legacy-html-u3-l1",
      "type": "blank",
      "prompt": "Crie o titulo principal:",
      "starter_code": "<{{blank1}}>Bem-vindo ao meu site</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "h1",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "h1",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: h1"
        }
      ],
      "solution": "<h1>Bem-vindo ao meu site</h1>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l1-3",
      "lesson_id": "legacy-html-u3-l1",
      "type": "blank",
      "prompt": "Qual e o maior titulo? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<h1>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <h6> / <h3>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <h1>"
        }
      ],
      "solution": "<h1>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l1-4",
      "lesson_id": "legacy-html-u3-l1",
      "type": "blank",
      "prompt": "Crie um subtitulo (nivel 2):",
      "starter_code": "<{{blank1}}>Sobre Nos</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "h2",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "h2",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: h2"
        }
      ],
      "solution": "<h2>Sobre Nos</h2>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l1-practice",
      "lesson_id": "legacy-html-u3-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento h1 com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "h1",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "h1",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: h1"
        }
      ],
      "solution": "<h1 class=\"destaque\">Texto</h1>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l2-2",
      "lesson_id": "legacy-html-u3-l2",
      "type": "blank",
      "prompt": "Crie um paragrafo:",
      "starter_code": "<{{blank1}}>Este e meu primeiro paragrafo.</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "p",
              "placeholder": "_"
            },
            {
              "id": "blank2",
              "answer": "p",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Paragrafos <p>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: p"
        }
      ],
      "solution": "<p>Este e meu primeiro paragrafo.</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l2-3",
      "lesson_id": "legacy-html-u3-l2",
      "type": "blank",
      "prompt": "Paragrafos sao elementos: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Block",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Paragrafos <p>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Inline."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Block"
        }
      ],
      "solution": "Block",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l2-practice",
      "lesson_id": "legacy-html-u3-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento p com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "p",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "p",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Paragrafos <p>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: p"
        }
      ],
      "solution": "<p class=\"destaque\">Texto</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l3-2",
      "lesson_id": "legacy-html-u3-l3",
      "type": "blank",
      "prompt": "Quebre a linha:",
      "starter_code": "<p>Linha 1<{{blank1}}>Linha 2</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "br",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Quebra de linha <br>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: br"
        }
      ],
      "solution": "<p>Linha 1<br>Linha 2</p>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u3-l3-3",
      "lesson_id": "legacy-html-u3-l3",
      "type": "blank",
      "prompt": "<br> precisa de tag de fechamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Quebra de linha <br>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao"
        }
      ],
      "solution": "Nao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l3-practice",
      "lesson_id": "legacy-html-u3-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<br>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Quebra de linha <br>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div> / <section>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <br>"
        }
      ],
      "solution": "<br>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l4-2",
      "lesson_id": "legacy-html-u3-l4",
      "type": "blank",
      "prompt": "Adicione uma linha separadora:",
      "starter_code": "<p>Secao 1</p>\n<{{blank1}}>\n<p>Secao 2</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "hr",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Linha horizontal <hr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: hr"
        }
      ],
      "solution": "<p>Secao 1</p>\n<hr>\n<p>Secao 2</p>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u3-l4-3",
      "lesson_id": "legacy-html-u3-l4",
      "type": "blank",
      "prompt": "<hr> significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Horizontal Rule",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Linha horizontal <hr>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Header Rule / Hard Return."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Horizontal Rule"
        }
      ],
      "solution": "Horizontal Rule",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l4-practice",
      "lesson_id": "legacy-html-u3-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<hr>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Linha horizontal <hr>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div> / <section>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <hr>"
        }
      ],
      "solution": "<hr>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l5-2",
      "lesson_id": "legacy-html-u3-l5",
      "type": "blank",
      "prompt": "Deixe \"atencao\" em negrito:",
      "starter_code": "<p><{{blank1}}>Atencao</{{blank2}}>: leia com cuidado.</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "strong",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "strong",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Negrito <strong>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: strong"
        }
      ],
      "solution": "<p><strong>Atencao</strong>: leia com cuidado.</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l5-4",
      "lesson_id": "legacy-html-u3-l5",
      "type": "blank",
      "prompt": "Qual tag indica importancia semantica? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<strong>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Negrito <strong>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <b>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <strong>"
        }
      ],
      "solution": "<strong>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l5-practice",
      "lesson_id": "legacy-html-u3-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento strong com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "strong",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "strong",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Negrito <strong>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: strong"
        }
      ],
      "solution": "<strong class=\"destaque\">Texto</strong>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l6-2",
      "lesson_id": "legacy-html-u3-l6",
      "type": "blank",
      "prompt": "Enfatize \"muito\":",
      "starter_code": "<p>Estou <{{blank1}}>muito</{{blank2}}> feliz!</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "em",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "em",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Italico <em>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: em"
        }
      ],
      "solution": "<p>Estou <em>muito</em> feliz!</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l6-4",
      "lesson_id": "legacy-html-u3-l6",
      "type": "blank",
      "prompt": "Qual tag indica enfase? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<em>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Italico <em>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <i>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <em>"
        }
      ],
      "solution": "<em>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l6-practice",
      "lesson_id": "legacy-html-u3-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento em com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "em",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "em",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Italico <em>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: em"
        }
      ],
      "solution": "<em class=\"destaque\">Texto</em>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l7-2",
      "lesson_id": "legacy-html-u3-l7",
      "type": "blank",
      "prompt": "Crie texto pre-formatado:",
      "starter_code": "<{{blank1}}>\n Linha 1\n Linha 2\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "pre",
              "placeholder": "___"
            },
            {
              "id": "blank2",
              "answer": "pre",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Texto pre-formatado <pre>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: pre"
        }
      ],
      "solution": "<pre>\n Linha 1\n Linha 2\n</pre>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l7-3",
      "lesson_id": "legacy-html-u3-l7",
      "type": "blank",
      "prompt": "<pre> preserva: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Espacos e quebras de linha",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Texto pre-formatado <pre>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas cores / Apenas links."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Espacos e quebras de linha"
        }
      ],
      "solution": "Espacos e quebras de linha",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l7-practice",
      "lesson_id": "legacy-html-u3-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento pre com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "pre",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "pre",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Texto pre-formatado <pre>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: pre"
        }
      ],
      "solution": "<pre class=\"destaque\">Texto</pre>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l8-2",
      "lesson_id": "legacy-html-u3-l8",
      "type": "blank",
      "prompt": "Marque como codigo:",
      "starter_code": "<p>Use <{{blank1}}>console.log()</{{blank2}}> para debug.</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "code",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "code",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Codigo <code>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: code"
        }
      ],
      "solution": "<p>Use <code>console.log()</code> para debug.</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l8-4",
      "lesson_id": "legacy-html-u3-l8",
      "type": "blank",
      "prompt": "<code> e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Trechos de codigo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Codigo <code>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Citacoes / Links."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Trechos de codigo"
        }
      ],
      "solution": "Trechos de codigo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l8-practice",
      "lesson_id": "legacy-html-u3-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento code com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "code",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "code",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Codigo <code>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: code"
        }
      ],
      "solution": "<code class=\"destaque\">Texto</code>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l9-2",
      "lesson_id": "legacy-html-u3-l9",
      "type": "blank",
      "prompt": "Crie uma citacao:",
      "starter_code": "<{{blank1}}>\n \"A simplicidade e a sofisticacao suprema.\"\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "blockquote",
              "placeholder": "__________"
            },
            {
              "id": "blank2",
              "answer": "blockquote",
              "placeholder": "__________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Citacoes <blockquote>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: blockquote"
        }
      ],
      "solution": "<blockquote>\n \"A simplicidade e a sofisticacao suprema.\"\n</blockquote>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l9-4",
      "lesson_id": "legacy-html-u3-l9",
      "type": "blank",
      "prompt": "<blockquote> e para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Citacoes longas",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Citacoes <blockquote>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Codigo / Listas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Citacoes longas"
        }
      ],
      "solution": "Citacoes longas",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l9-practice",
      "lesson_id": "legacy-html-u3-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento blockquote com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "blockquote",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "blockquote",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Citacoes <blockquote>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: blockquote"
        }
      ],
      "solution": "<blockquote class=\"destaque\">Texto</blockquote>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u4-l1-2",
      "lesson_id": "legacy-html-u4-l1",
      "type": "blank",
      "prompt": "Crie um link:",
      "starter_code": "<{{blank1}} href=\"https://google.com\">Google</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "a",
              "placeholder": "_"
            },
            {
              "id": "blank2",
              "answer": "a",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <a>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: a"
        }
      ],
      "solution": "<a href=\"https://google.com\">Google</a>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u4-l1-3",
      "lesson_id": "legacy-html-u4-l1",
      "type": "blank",
      "prompt": "A tag para links e: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<a>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <a>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <link> / <href>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <a>"
        }
      ],
      "solution": "<a>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l1-practice",
      "lesson_id": "legacy-html-u4-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Complete o link com href:",
      "starter_code": "<a {{blank1}}=\"https://exemplo.com\">Site</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "href",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <a>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: href"
        }
      ],
      "solution": "<a href=\"https://exemplo.com\">Site</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l2-2",
      "lesson_id": "legacy-html-u4-l2",
      "type": "blank",
      "prompt": "Adicione o atributo:",
      "starter_code": "<a {{blank1}}=\"https://github.com\">GitHub</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "href",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Atributo href."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: href"
        }
      ],
      "solution": "<a href=\"https://github.com\">GitHub</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l2-3",
      "lesson_id": "legacy-html-u4-l2",
      "type": "blank",
      "prompt": "O que href significa? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Hypertext Reference",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo href."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: HTML Reference / Header Reference."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Hypertext Reference"
        }
      ],
      "solution": "Hypertext Reference",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l2-practice",
      "lesson_id": "legacy-html-u4-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Atributo href",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo href."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Atributo href"
        }
      ],
      "solution": "Atributo href",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l3-2",
      "lesson_id": "legacy-html-u4-l3",
      "type": "blank",
      "prompt": "Link para site externo:",
      "starter_code": "<a href=\"{{blank1}}://twitter.com\">Twitter</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "https",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Links externos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: https"
        }
      ],
      "solution": "<a href=\"https://twitter.com\">Twitter</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l3-3",
      "lesson_id": "legacy-html-u4-l3",
      "type": "blank",
      "prompt": "Links externos usam: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "URL completa",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links externos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Caminho relativo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: URL completa"
        }
      ],
      "solution": "URL completa",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l3-practice",
      "lesson_id": "legacy-html-u4-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Links externos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links externos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Links externos"
        }
      ],
      "solution": "Links externos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l4-2",
      "lesson_id": "legacy-html-u4-l4",
      "type": "blank",
      "prompt": "Link para pagina local:",
      "starter_code": "<a href=\"{{blank1}}\">Sobre</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "sobre.html",
              "placeholder": "_________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Links internos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: sobre.html"
        }
      ],
      "solution": "<a href=\"sobre.html\">Sobre</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l4-4",
      "lesson_id": "legacy-html-u4-l4",
      "type": "blank",
      "prompt": "../ significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pasta pai",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Pasta atual / Pasta raiz."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pasta pai"
        }
      ],
      "solution": "Pasta pai",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l4-practice",
      "lesson_id": "legacy-html-u4-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Links internos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Links internos"
        }
      ],
      "solution": "Links internos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l5-2",
      "lesson_id": "legacy-html-u4-l5",
      "type": "blank",
      "prompt": "Link para secao com id \"contato\":",
      "starter_code": "<a href=\"{{blank1}}contato\">Ir para Contato</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "#",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Ancoras."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: #"
        }
      ],
      "solution": "<a href=\"#contato\">Ir para Contato</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l5-4",
      "lesson_id": "legacy-html-u4-l5",
      "type": "blank",
      "prompt": "href=\"#topo\" leva para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Elemento com id=\"topo\"",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Ancoras."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Outro site / Outra pagina."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Elemento com id=\"topo\""
        }
      ],
      "solution": "Elemento com id=\"topo\"",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l5-practice",
      "lesson_id": "legacy-html-u4-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Ancoras",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Ancoras."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Ancoras"
        }
      ],
      "solution": "Ancoras",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l6-2",
      "lesson_id": "legacy-html-u4-l6",
      "type": "blank",
      "prompt": "Abra em nova aba:",
      "starter_code": "<a href=\"https://google.com\" {{blank1}}=\"_blank\">Google</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "target",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Atributo target."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: target"
        }
      ],
      "solution": "<a href=\"https://google.com\" target=\"_blank\">Google</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l6-3",
      "lesson_id": "legacy-html-u4-l6",
      "type": "blank",
      "prompt": "target=\"_blank\" faz o que? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Abre em nova aba",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo target."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Abre na mesma aba / Fecha a aba."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Abre em nova aba"
        }
      ],
      "solution": "Abre em nova aba",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l6-practice",
      "lesson_id": "legacy-html-u4-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Atributo target",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo target."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Atributo target"
        }
      ],
      "solution": "Atributo target",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l7-3",
      "lesson_id": "legacy-html-u4-l7",
      "type": "blank",
      "prompt": "Adicione seguranca ao link:",
      "starter_code": "<a href=\"...\" target=\"_blank\" {{blank1}}=\"noopener noreferrer\">Link</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "rel",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Atributo rel."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: rel"
        }
      ],
      "solution": "<a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">Link</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l7-4",
      "lesson_id": "legacy-html-u4-l7",
      "type": "blank",
      "prompt": "rel=\"nofollow\" e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Indicar ao Google para nao seguir",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo rel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Abrir nova aba / Seguranca."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Indicar ao Google para nao seguir"
        }
      ],
      "solution": "Indicar ao Google para nao seguir",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l7-practice",
      "lesson_id": "legacy-html-u4-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Atributo rel",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo rel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Atributo rel"
        }
      ],
      "solution": "Atributo rel",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l8-2",
      "lesson_id": "legacy-html-u4-l8",
      "type": "blank",
      "prompt": "Crie link de email:",
      "starter_code": "<a href=\"{{blank1}}:contato@site.com\">Envie um email</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "mailto",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Links mailto."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: mailto"
        }
      ],
      "solution": "<a href=\"mailto:contato@site.com\">Envie um email</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l8-4",
      "lesson_id": "legacy-html-u4-l8",
      "type": "blank",
      "prompt": "mailto: abre: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Cliente de email",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links mailto."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nova aba / Formulario."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Cliente de email"
        }
      ],
      "solution": "Cliente de email",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l8-practice",
      "lesson_id": "legacy-html-u4-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Links mailto",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links mailto."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Links mailto"
        }
      ],
      "solution": "Links mailto",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l9-2",
      "lesson_id": "legacy-html-u4-l9",
      "type": "blank",
      "prompt": "Crie link de telefone:",
      "starter_code": "<a href=\"{{blank1}}:+5511999999999\">Ligar</a>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tel",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Links tel."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tel"
        }
      ],
      "solution": "<a href=\"tel:+5511999999999\">Ligar</a>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u4-l9-4",
      "lesson_id": "legacy-html-u4-l9",
      "type": "blank",
      "prompt": "tel: e mais util em: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dispositivos moveis",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links tel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Desktop."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dispositivos moveis"
        }
      ],
      "solution": "Dispositivos moveis",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l9-practice",
      "lesson_id": "legacy-html-u4-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Links tel",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links tel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Links tel"
        }
      ],
      "solution": "Links tel",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l1-2",
      "lesson_id": "legacy-html-u5-l1",
      "type": "blank",
      "prompt": "Complete a tag:",
      "starter_code": "<{{blank1}} src=\"foto.jpg\" alt=\"Descricao\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "img",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <img>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: img"
        }
      ],
      "solution": "<img src=\"foto.jpg\" alt=\"Descricao\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l1-3",
      "lesson_id": "legacy-html-u5-l1",
      "type": "blank",
      "prompt": "<img> precisa de fechamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <img>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao"
        }
      ],
      "solution": "Nao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l1-practice",
      "lesson_id": "legacy-html-u5-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Complete a tag de imagem com src:",
      "starter_code": "<img {{blank1}}=\"foto.jpg\" alt=\"Perfil\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "src",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <img>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: src"
        }
      ],
      "solution": "<img src=\"foto.jpg\" alt=\"Perfil\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l2-2",
      "lesson_id": "legacy-html-u5-l2",
      "type": "blank",
      "prompt": "Adicione o caminho:",
      "starter_code": "<img {{blank1}}=\"images/logo.png\" alt=\"Logo\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "src",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Atributo src."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: src"
        }
      ],
      "solution": "<img src=\"images/logo.png\" alt=\"Logo\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l2-4",
      "lesson_id": "legacy-html-u5-l2",
      "type": "blank",
      "prompt": "src significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Source",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo src."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Script / Screen."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Source"
        }
      ],
      "solution": "Source",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l2-practice",
      "lesson_id": "legacy-html-u5-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Atributo src",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo src."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Atributo src"
        }
      ],
      "solution": "Atributo src",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l3-2",
      "lesson_id": "legacy-html-u5-l3",
      "type": "blank",
      "prompt": "Adicione descricao:",
      "starter_code": "<img src=\"cachorro.jpg\" {{blank1}}=\"Um cachorro correndo no parque\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Atributo alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "<img src=\"cachorro.jpg\" alt=\"Um cachorro correndo no parque\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l3-4",
      "lesson_id": "legacy-html-u5-l3",
      "type": "blank",
      "prompt": "alt e importante para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Acessibilidade",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Velocidade / Estilo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Acessibilidade"
        }
      ],
      "solution": "Acessibilidade",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l3-practice",
      "lesson_id": "legacy-html-u5-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Atributo alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Atributo alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Atributo alt"
        }
      ],
      "solution": "Atributo alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l4-2",
      "lesson_id": "legacy-html-u5-l4",
      "type": "blank",
      "prompt": "Defina largura de 300px:",
      "starter_code": "<img src=\"foto.jpg\" {{blank1}}=\"300\" alt=\"Foto\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "width",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: width"
        }
      ],
      "solution": "<img src=\"foto.jpg\" width=\"300\" alt=\"Foto\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l4-4",
      "lesson_id": "legacy-html-u5-l4",
      "type": "blank",
      "prompt": "Defina altura de 200px:",
      "starter_code": "<img src=\"foto.jpg\" {{blank1}}=\"200\" alt=\"Foto\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "height",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: height"
        }
      ],
      "solution": "<img src=\"foto.jpg\" height=\"200\" alt=\"Foto\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u5-l4-practice",
      "lesson_id": "legacy-html-u5-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tamanho de imagens",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tamanho de imagens"
        }
      ],
      "solution": "Tamanho de imagens",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l5-2",
      "lesson_id": "legacy-html-u5-l5",
      "type": "blank",
      "prompt": "Qual formato suporta transparencia? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "PNG",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Formatos de imagem."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: JPG / GIF."
        },
        {
          "level": 3,
          "text": "Resposta esperada: PNG"
        }
      ],
      "solution": "PNG",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l5-3",
      "lesson_id": "legacy-html-u5-l5",
      "type": "blank",
      "prompt": "Qual formato e melhor para fotos? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "JPG",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Formatos de imagem."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: PNG / SVG."
        },
        {
          "level": 3,
          "text": "Resposta esperada: JPG"
        }
      ],
      "solution": "JPG",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l5-practice",
      "lesson_id": "legacy-html-u5-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Formatos de imagem",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Formatos de imagem."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Formatos de imagem"
        }
      ],
      "solution": "Formatos de imagem",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l6-2",
      "lesson_id": "legacy-html-u5-l6",
      "type": "blank",
      "prompt": "Crie um figure:",
      "starter_code": "<{{blank1}}>\n <img src=\"foto.jpg\" alt=\"Foto\">\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "figure",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "figure",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <figure>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: figure"
        }
      ],
      "solution": "<figure>\n <img src=\"foto.jpg\" alt=\"Foto\">\n</figure>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l6-3",
      "lesson_id": "legacy-html-u5-l6",
      "type": "blank",
      "prompt": "<figure> e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Imagens com legendas",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <figure>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Links / Formularios."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Imagens com legendas"
        }
      ],
      "solution": "Imagens com legendas",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l6-practice",
      "lesson_id": "legacy-html-u5-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento figure com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "figure",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "figure",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <figure>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: figure"
        }
      ],
      "solution": "<figure class=\"destaque\">Texto</figure>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l7-2",
      "lesson_id": "legacy-html-u5-l7",
      "type": "blank",
      "prompt": "Adicione legenda:",
      "starter_code": "<figure>\n <img src=\"foto.jpg\" alt=\"Montanha\">\n <{{blank1}}>Vista das montanhas</{{blank2}}>\n</figure>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "figcaption",
              "placeholder": "__________"
            },
            {
              "id": "blank2",
              "answer": "figcaption",
              "placeholder": "__________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <figcaption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: figcaption"
        }
      ],
      "solution": "<figure>\n <img src=\"foto.jpg\" alt=\"Montanha\">\n <figcaption>Vista das montanhas</figcaption>\n</figure>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l7-3",
      "lesson_id": "legacy-html-u5-l7",
      "type": "blank",
      "prompt": "<figcaption> deve ficar: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dentro do figure",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <figcaption>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Fora do figure."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dentro do figure"
        }
      ],
      "solution": "Dentro do figure",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l7-practice",
      "lesson_id": "legacy-html-u5-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento figcaption com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "figcaption",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "figcaption",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <figcaption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: figcaption"
        }
      ],
      "solution": "<figcaption class=\"destaque\">Texto</figcaption>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l8-2",
      "lesson_id": "legacy-html-u5-l8",
      "type": "blank",
      "prompt": "Crie um player de audio:",
      "starter_code": "<{{blank1}} src=\"musica.mp3\" controls></{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "audio",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "audio",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <audio>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: audio"
        }
      ],
      "solution": "<audio src=\"musica.mp3\" controls></audio>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l8-4",
      "lesson_id": "legacy-html-u5-l8",
      "type": "blank",
      "prompt": "controls mostra: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Botoes de play/pause",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <audio>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nada."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Botoes de play/pause"
        }
      ],
      "solution": "Botoes de play/pause",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l8-practice",
      "lesson_id": "legacy-html-u5-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento audio com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "audio",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "audio",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <audio>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: audio"
        }
      ],
      "solution": "<audio class=\"destaque\">Texto</audio>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l9-2",
      "lesson_id": "legacy-html-u5-l9",
      "type": "blank",
      "prompt": "Crie um player de video:",
      "starter_code": "<{{blank1}} src=\"video.mp4\" controls width=\"640\"></{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "video",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "video",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <video>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: video"
        }
      ],
      "solution": "<video src=\"video.mp4\" controls width=\"640\"></video>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u5-l9-4",
      "lesson_id": "legacy-html-u5-l9",
      "type": "blank",
      "prompt": "poster define: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Imagem de previa",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <video>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Velocidade / Tamanho."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Imagem de previa"
        }
      ],
      "solution": "Imagem de previa",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l9-practice",
      "lesson_id": "legacy-html-u5-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento video com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "video",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "video",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <video>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: video"
        }
      ],
      "solution": "<video class=\"destaque\">Texto</video>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l1-2",
      "lesson_id": "legacy-html-u6-l1",
      "type": "blank",
      "prompt": "Crie uma lista nao ordenada:",
      "starter_code": "<{{blank1}}>\n <li>Item 1</li>\n <li>Item 2</li>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ul",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "ul",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista nao ordenada <ul>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ul"
        }
      ],
      "solution": "<ul>\n <li>Item 1</li>\n <li>Item 2</li>\n</ul>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l1-3",
      "lesson_id": "legacy-html-u6-l1",
      "type": "blank",
      "prompt": "ul significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Unordered List",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Lista nao ordenada <ul>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Ordered List."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Unordered List"
        }
      ],
      "solution": "Unordered List",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l1-practice",
      "lesson_id": "legacy-html-u6-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento ul com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ul",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "ul",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista nao ordenada <ul>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ul"
        }
      ],
      "solution": "<ul class=\"destaque\">Texto</ul>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l2-2",
      "lesson_id": "legacy-html-u6-l2",
      "type": "blank",
      "prompt": "Crie uma lista ordenada:",
      "starter_code": "<{{blank1}}>\n <li>Primeiro</li>\n <li>Segundo</li>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ol",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "ol",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista ordenada <ol>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ol"
        }
      ],
      "solution": "<ol>\n <li>Primeiro</li>\n <li>Segundo</li>\n</ol>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l2-3",
      "lesson_id": "legacy-html-u6-l2",
      "type": "blank",
      "prompt": "ol significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Ordered List",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Lista ordenada <ol>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Outer List."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Ordered List"
        }
      ],
      "solution": "Ordered List",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l2-practice",
      "lesson_id": "legacy-html-u6-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento ol com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ol",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "ol",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista ordenada <ol>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ol"
        }
      ],
      "solution": "<ol class=\"destaque\">Texto</ol>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l3-2",
      "lesson_id": "legacy-html-u6-l3",
      "type": "blank",
      "prompt": "Adicione um item:",
      "starter_code": "<ul>\n <{{blank1}}>Maca</{{blank2}}>\n <li>Banana</li>\n</ul>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "li",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "li",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Itens <li>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: li"
        }
      ],
      "solution": "<ul>\n <li>Maca</li>\n <li>Banana</li>\n</ul>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l3-3",
      "lesson_id": "legacy-html-u6-l3",
      "type": "blank",
      "prompt": "<li> pode ficar fora de <ul> ou <ol>? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Itens <li>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao"
        }
      ],
      "solution": "Nao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l3-practice",
      "lesson_id": "legacy-html-u6-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento li com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "li",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "li",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Itens <li>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: li"
        }
      ],
      "solution": "<li class=\"destaque\">Texto</li>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l4-3",
      "lesson_id": "legacy-html-u6-l4",
      "type": "blank",
      "prompt": "A lista interna deve estar dentro de: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<li>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Listas aninhadas."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <ul>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <li>"
        }
      ],
      "solution": "<li>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l4-practice",
      "lesson_id": "legacy-html-u6-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Crie uma lista nao ordenada:",
      "starter_code": "<{{blank1}}>\n <li>Item</li>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ul",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "ul",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Listas aninhadas."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ul"
        }
      ],
      "solution": "<ul>\n <li>Item</li>\n</ul>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l5-3",
      "lesson_id": "legacy-html-u6-l5",
      "type": "blank",
      "prompt": "Crie uma lista de definicao:",
      "starter_code": "<{{blank1}}>\n <dt>HTML</dt>\n <dd>Linguagem de marcacao</dd>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "dl",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "dl",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista de definicao <dl>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: dl"
        }
      ],
      "solution": "<dl>\n <dt>HTML</dt>\n <dd>Linguagem de marcacao</dd>\n</dl>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u6-l5-4",
      "lesson_id": "legacy-html-u6-l5",
      "type": "blank",
      "prompt": "<dt> representa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Termo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Lista de definicao <dl>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Definicao."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Termo"
        }
      ],
      "solution": "Termo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l5-practice",
      "lesson_id": "legacy-html-u6-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento dl com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "dl",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "dl",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Lista de definicao <dl>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: dl"
        }
      ],
      "solution": "<dl class=\"destaque\">Texto</dl>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l1-2",
      "lesson_id": "legacy-html-u7-l1",
      "type": "blank",
      "prompt": "Inicie uma tabela:",
      "starter_code": "<{{blank1}}>\n <!-- linhas aqui -->\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "table",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "table",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <table>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: table"
        }
      ],
      "solution": "<table>\n <!-- linhas aqui -->\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l1-4",
      "lesson_id": "legacy-html-u7-l1",
      "type": "blank",
      "prompt": "Tabelas sao para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dados tabulares",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <table>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Layout de pagina."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dados tabulares"
        }
      ],
      "solution": "Dados tabulares",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l1-practice",
      "lesson_id": "legacy-html-u7-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento table com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "table",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "table",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <table>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: table"
        }
      ],
      "solution": "<table class=\"destaque\">Texto</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l2-2",
      "lesson_id": "legacy-html-u7-l2",
      "type": "blank",
      "prompt": "Adicione uma linha:",
      "starter_code": "<table>\n <{{blank1}}>\n <td>Celula</td>\n </{{blank2}}>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tr",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "tr",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tr"
        }
      ],
      "solution": "<table>\n <tr>\n <td>Celula</td>\n </tr>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l2-3",
      "lesson_id": "legacy-html-u7-l2",
      "type": "blank",
      "prompt": "tr significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Table Row",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <tr>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Table Rule."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Table Row"
        }
      ],
      "solution": "Table Row",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l2-practice",
      "lesson_id": "legacy-html-u7-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento tr com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tr",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "tr",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tr"
        }
      ],
      "solution": "<tr class=\"destaque\">Texto</tr>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l3-2",
      "lesson_id": "legacy-html-u7-l3",
      "type": "blank",
      "prompt": "Adicione uma celula:",
      "starter_code": "<tr>\n <{{blank1}}>Joao</{{blank2}}>\n <td>25</td>\n</tr>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "td",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "td",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <td>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: td"
        }
      ],
      "solution": "<tr>\n <td>Joao</td>\n <td>25</td>\n</tr>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l3-3",
      "lesson_id": "legacy-html-u7-l3",
      "type": "blank",
      "prompt": "td significa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Table Data",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <td>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Table Division."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Table Data"
        }
      ],
      "solution": "Table Data",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l3-practice",
      "lesson_id": "legacy-html-u7-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento td com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "td",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "td",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <td>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: td"
        }
      ],
      "solution": "<td class=\"destaque\">Texto</td>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l4-2",
      "lesson_id": "legacy-html-u7-l4",
      "type": "blank",
      "prompt": "Crie um cabecalho:",
      "starter_code": "<tr>\n <{{blank1}}>Nome</{{blank2}}>\n <th>Idade</th>\n</tr>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "th",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "th",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <th>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: th"
        }
      ],
      "solution": "<tr>\n <th>Nome</th>\n <th>Idade</th>\n</tr>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l4-3",
      "lesson_id": "legacy-html-u7-l4",
      "type": "blank",
      "prompt": "<th> e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Cabecalhos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <th>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Dados normais."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Cabecalhos"
        }
      ],
      "solution": "Cabecalhos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l4-practice",
      "lesson_id": "legacy-html-u7-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento th com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "th",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "th",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <th>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: th"
        }
      ],
      "solution": "<th class=\"destaque\">Texto</th>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l5-2",
      "lesson_id": "legacy-html-u7-l5",
      "type": "blank",
      "prompt": "Agrupe o cabecalho:",
      "starter_code": "<table>\n <{{blank1}}>\n <tr><th>Nome</th></tr>\n </{{blank2}}>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "thead",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "thead",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <thead>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: thead"
        }
      ],
      "solution": "<table>\n <thead>\n <tr><th>Nome</th></tr>\n </thead>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l5-3",
      "lesson_id": "legacy-html-u7-l5",
      "type": "blank",
      "prompt": "<thead> deve vir: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Antes de <tbody>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <thead>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Depois de <tbody>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Antes de <tbody>"
        }
      ],
      "solution": "Antes de <tbody>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l5-practice",
      "lesson_id": "legacy-html-u7-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento thead com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "thead",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "thead",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <thead>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: thead"
        }
      ],
      "solution": "<thead class=\"destaque\">Texto</thead>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l6-2",
      "lesson_id": "legacy-html-u7-l6",
      "type": "blank",
      "prompt": "Agrupe os dados:",
      "starter_code": "<table>\n <thead>...</thead>\n <{{blank1}}>\n <tr><td>Dado</td></tr>\n </{{blank2}}>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tbody",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "tbody",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tbody>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tbody"
        }
      ],
      "solution": "<table>\n <thead>...</thead>\n <tbody>\n <tr><td>Dado</td></tr>\n </tbody>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l6-3",
      "lesson_id": "legacy-html-u7-l6",
      "type": "blank",
      "prompt": "<tbody> contem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Dados principais",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <tbody>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Cabecalhos."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Dados principais"
        }
      ],
      "solution": "Dados principais",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l6-practice",
      "lesson_id": "legacy-html-u7-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento tbody com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tbody",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "tbody",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tbody>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tbody"
        }
      ],
      "solution": "<tbody class=\"destaque\">Texto</tbody>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l7-2",
      "lesson_id": "legacy-html-u7-l7",
      "type": "blank",
      "prompt": "Adicione um rodape:",
      "starter_code": "<table>\n <tbody>...</tbody>\n <{{blank1}}>\n <tr><td>Total: 100</td></tr>\n </{{blank2}}>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tfoot",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "tfoot",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tfoot>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tfoot"
        }
      ],
      "solution": "<table>\n <tbody>...</tbody>\n <tfoot>\n <tr><td>Total: 100</td></tr>\n </tfoot>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l7-3",
      "lesson_id": "legacy-html-u7-l7",
      "type": "blank",
      "prompt": "<tfoot> e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Totais e resumos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <tfoot>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Titulos."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Totais e resumos"
        }
      ],
      "solution": "Totais e resumos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l7-practice",
      "lesson_id": "legacy-html-u7-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento tfoot com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tfoot",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "tfoot",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <tfoot>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tfoot"
        }
      ],
      "solution": "<tfoot class=\"destaque\">Texto</tfoot>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l8-2",
      "lesson_id": "legacy-html-u7-l8",
      "type": "blank",
      "prompt": "Mescle 2 colunas:",
      "starter_code": "<td {{blank1}}=\"2\">Ocupa 2 colunas</td>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "colspan",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: colspan"
        }
      ],
      "solution": "<td colspan=\"2\">Ocupa 2 colunas</td>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u7-l8-3",
      "lesson_id": "legacy-html-u7-l8",
      "type": "blank",
      "prompt": "Mescle 3 linhas:",
      "starter_code": "<td {{blank1}}=\"3\">Ocupa 3 linhas</td>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "rowspan",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: rowspan"
        }
      ],
      "solution": "<td rowspan=\"3\">Ocupa 3 linhas</td>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u7-l8-4",
      "lesson_id": "legacy-html-u7-l8",
      "type": "blank",
      "prompt": "colspan mescla: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Colunas",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Linhas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Colunas"
        }
      ],
      "solution": "Colunas",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l8-practice",
      "lesson_id": "legacy-html-u7-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Complete a estrutura da tabela:",
      "starter_code": "<table>\n <{{blank1}}>\n <td>Celula</td>\n </{{blank2}}>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tr",
              "placeholder": "__"
            },
            {
              "id": "blank2",
              "answer": "tr",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tr"
        }
      ],
      "solution": "<table>\n <tr>\n <td>Celula</td>\n </tr>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l9-2",
      "lesson_id": "legacy-html-u7-l9",
      "type": "blank",
      "prompt": "Adicione um titulo:",
      "starter_code": "<table>\n <{{blank1}}>Vendas 2024</{{blank2}}>\n <thead>...</thead>\n</table>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "caption",
              "placeholder": "_______"
            },
            {
              "id": "blank2",
              "answer": "caption",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <caption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: caption"
        }
      ],
      "solution": "<table>\n <caption>Vendas 2024</caption>\n <thead>...</thead>\n</table>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u7-l9-3",
      "lesson_id": "legacy-html-u7-l9",
      "type": "blank",
      "prompt": "<caption> deve ser: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Primeiro elemento",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <caption>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Ultimo elemento."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Primeiro elemento"
        }
      ],
      "solution": "Primeiro elemento",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u7-l9-practice",
      "lesson_id": "legacy-html-u7-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento caption com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "caption",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "caption",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <caption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: caption"
        }
      ],
      "solution": "<caption class=\"destaque\">Texto</caption>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l1-2",
      "lesson_id": "legacy-html-u8-l1",
      "type": "blank",
      "prompt": "Crie um formulario:",
      "starter_code": "<{{blank1}}>\n <!-- campos aqui -->\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "form",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "form",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <form>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: form"
        }
      ],
      "solution": "<form>\n <!-- campos aqui -->\n</form>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l1-4",
      "lesson_id": "legacy-html-u8-l1",
      "type": "blank",
      "prompt": "<form> e usado para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Coletar dados",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Tag <form>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Exibir tabelas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Coletar dados"
        }
      ],
      "solution": "Coletar dados",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l1-practice",
      "lesson_id": "legacy-html-u8-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento form com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "form",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "form",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Tag <form>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: form"
        }
      ],
      "solution": "<form class=\"destaque\">Texto</form>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l2-2",
      "lesson_id": "legacy-html-u8-l2",
      "type": "blank",
      "prompt": "Defina o destino:",
      "starter_code": "<form {{blank1}}=\"/processar\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "action",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: action."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: action"
        }
      ],
      "solution": "<form action=\"/processar\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l2-4",
      "lesson_id": "legacy-html-u8-l2",
      "type": "blank",
      "prompt": "action define: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Para onde os dados vao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: action."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: O estilo do form."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Para onde os dados vao"
        }
      ],
      "solution": "Para onde os dados vao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l2-practice",
      "lesson_id": "legacy-html-u8-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: action."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l3-2",
      "lesson_id": "legacy-html-u8-l3",
      "type": "blank",
      "prompt": "Use POST para enviar:",
      "starter_code": "<form action=\"/login\" {{blank1}}=\"POST\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "method",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: method."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: method"
        }
      ],
      "solution": "<form action=\"/login\" method=\"POST\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l3-3",
      "lesson_id": "legacy-html-u8-l3",
      "type": "blank",
      "prompt": "Para senhas, use: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "POST",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: method."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: GET."
        },
        {
          "level": 3,
          "text": "Resposta esperada: POST"
        }
      ],
      "solution": "POST",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l3-practice",
      "lesson_id": "legacy-html-u8-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: method."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l4-2",
      "lesson_id": "legacy-html-u8-l4",
      "type": "blank",
      "prompt": "Crie um campo de texto:",
      "starter_code": "<input {{blank1}}=\"text\" name=\"nome\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <input type=\"text\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "<input type=\"text\" name=\"nome\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l4-4",
      "lesson_id": "legacy-html-u8-l4",
      "type": "blank",
      "prompt": "type=\"text\" e para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Texto simples",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"text\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Senhas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Texto simples"
        }
      ],
      "solution": "Texto simples",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l4-practice",
      "lesson_id": "legacy-html-u8-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"text\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l5-2",
      "lesson_id": "legacy-html-u8-l5",
      "type": "blank",
      "prompt": "Crie campo de email:",
      "starter_code": "<input type=\"{{blank1}}\" name=\"email\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "email",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <input type=\"email\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: email"
        }
      ],
      "solution": "<input type=\"email\" name=\"email\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l5-4",
      "lesson_id": "legacy-html-u8-l5",
      "type": "blank",
      "prompt": "type=\"email\" faz validacao: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Automatica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"email\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Manual."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Automatica"
        }
      ],
      "solution": "Automatica",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l5-practice",
      "lesson_id": "legacy-html-u8-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"email\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l6-2",
      "lesson_id": "legacy-html-u8-l6",
      "type": "blank",
      "prompt": "Crie campo de senha:",
      "starter_code": "<input type=\"{{blank1}}\" name=\"senha\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "password",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <input type=\"password\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: password"
        }
      ],
      "solution": "<input type=\"password\" name=\"senha\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l6-4",
      "lesson_id": "legacy-html-u8-l6",
      "type": "blank",
      "prompt": "type=\"password\" exibe: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pontos/asteriscos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"password\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Texto claro."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pontos/asteriscos"
        }
      ],
      "solution": "Pontos/asteriscos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l6-practice",
      "lesson_id": "legacy-html-u8-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"password\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l7-2",
      "lesson_id": "legacy-html-u8-l7",
      "type": "blank",
      "prompt": "Crie um checkbox:",
      "starter_code": "<input type=\"{{blank1}}\" name=\"aceito\"> Li os termos",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "checkbox",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <input type=\"checkbox\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: checkbox"
        }
      ],
      "solution": "<input type=\"checkbox\" name=\"aceito\"> Li os termos",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l7-4",
      "lesson_id": "legacy-html-u8-l7",
      "type": "blank",
      "prompt": "Checkbox permite: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Multiplas escolhas",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"checkbox\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas uma escolha."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Multiplas escolhas"
        }
      ],
      "solution": "Multiplas escolhas",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l7-practice",
      "lesson_id": "legacy-html-u8-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"checkbox\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l8-2",
      "lesson_id": "legacy-html-u8-l8",
      "type": "blank",
      "prompt": "Crie um radio:",
      "starter_code": "<input type=\"{{blank1}}\" name=\"genero\" value=\"m\"> Masculino",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "radio",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <input type=\"radio\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: radio"
        }
      ],
      "solution": "<input type=\"radio\" name=\"genero\" value=\"m\"> Masculino",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l8-4",
      "lesson_id": "legacy-html-u8-l8",
      "type": "blank",
      "prompt": "Radio permite: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Apenas uma escolha",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"radio\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Multiplas escolhas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Apenas uma escolha"
        }
      ],
      "solution": "Apenas uma escolha",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l8-practice",
      "lesson_id": "legacy-html-u8-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <input type=\"radio\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l9-2",
      "lesson_id": "legacy-html-u8-l9",
      "type": "blank",
      "prompt": "Crie uma area de texto:",
      "starter_code": "<{{blank1}} name=\"mensagem\"></{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "textarea",
              "placeholder": "________"
            },
            {
              "id": "blank2",
              "answer": "textarea",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <textarea>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: textarea"
        }
      ],
      "solution": "<textarea name=\"mensagem\"></textarea>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l9-4",
      "lesson_id": "legacy-html-u8-l9",
      "type": "blank",
      "prompt": "<textarea> precisa de fechamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Sim",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <textarea>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nao."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Sim"
        }
      ],
      "solution": "Sim",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l9-practice",
      "lesson_id": "legacy-html-u8-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento textarea com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "textarea",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "textarea",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <textarea>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: textarea"
        }
      ],
      "solution": "<textarea class=\"destaque\">Texto</textarea>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l10-2",
      "lesson_id": "legacy-html-u8-l10",
      "type": "blank",
      "prompt": "Crie um select:",
      "starter_code": "<{{blank1}} name=\"pais\">\n <option>Brasil</option>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "select",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "select",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <select>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: select"
        }
      ],
      "solution": "<select name=\"pais\">\n <option>Brasil</option>\n</select>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l10-4",
      "lesson_id": "legacy-html-u8-l10",
      "type": "blank",
      "prompt": "<select> cria: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Lista dropdown",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <select>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Campo de texto."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Lista dropdown"
        }
      ],
      "solution": "Lista dropdown",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l10-practice",
      "lesson_id": "legacy-html-u8-l10",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento select com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "select",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "select",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <select>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: select"
        }
      ],
      "solution": "<select class=\"destaque\">Texto</select>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l11-2",
      "lesson_id": "legacy-html-u8-l11",
      "type": "blank",
      "prompt": "Crie uma opcao:",
      "starter_code": "<select>\n <{{blank1}} value=\"br\">Brasil</{{blank2}}>\n</select>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "option",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "option",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <option>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: option"
        }
      ],
      "solution": "<select>\n <option value=\"br\">Brasil</option>\n</select>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l11-4",
      "lesson_id": "legacy-html-u8-l11",
      "type": "blank",
      "prompt": "O que e enviado ao servidor? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O value",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <option>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: O texto visivel."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O value"
        }
      ],
      "solution": "O value",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l11-practice",
      "lesson_id": "legacy-html-u8-l11",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento option com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "option",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "option",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <option>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: option"
        }
      ],
      "solution": "<option class=\"destaque\">Texto</option>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l12-2",
      "lesson_id": "legacy-html-u8-l12",
      "type": "blank",
      "prompt": "Crie um botao:",
      "starter_code": "<{{blank1}}>Enviar</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "button",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "button",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <button>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: button"
        }
      ],
      "solution": "<button>Enviar</button>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l12-4",
      "lesson_id": "legacy-html-u8-l12",
      "type": "blank",
      "prompt": "type=\"submit\" faz o que? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Envia o formulario",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <button>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Limpa o formulario."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Envia o formulario"
        }
      ],
      "solution": "Envia o formulario",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l12-practice",
      "lesson_id": "legacy-html-u8-l12",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento button com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "button",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "button",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <button>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: button"
        }
      ],
      "solution": "<button class=\"destaque\">Texto</button>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u8-l13-2",
      "lesson_id": "legacy-html-u8-l13",
      "type": "blank",
      "prompt": "Torne o campo obrigatorio:",
      "starter_code": "<input type=\"email\" {{blank1}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "required",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: required."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: required"
        }
      ],
      "solution": "<input type=\"email\" required>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l13-4",
      "lesson_id": "legacy-html-u8-l13",
      "type": "blank",
      "prompt": "required e um atributo: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Booleano (sem valor)",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: required."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Com valor."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Booleano (sem valor)"
        }
      ],
      "solution": "Booleano (sem valor)",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l13-practice",
      "lesson_id": "legacy-html-u8-l13",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: required."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l14-2",
      "lesson_id": "legacy-html-u8-l14",
      "type": "blank",
      "prompt": "Adicione uma dica:",
      "starter_code": "<input type=\"text\" {{blank1}}=\"Digite seu nome\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "placeholder",
              "placeholder": "___________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: placeholder."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: placeholder"
        }
      ],
      "solution": "<input type=\"text\" placeholder=\"Digite seu nome\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l14-4",
      "lesson_id": "legacy-html-u8-l14",
      "type": "blank",
      "prompt": "Placeholder some quando: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Voce digita",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: placeholder."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: A pagina carrega."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Voce digita"
        }
      ],
      "solution": "Voce digita",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l14-practice",
      "lesson_id": "legacy-html-u8-l14",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: placeholder."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l15-2",
      "lesson_id": "legacy-html-u8-l15",
      "type": "blank",
      "prompt": "Nomeie o campo:",
      "starter_code": "<input type=\"text\" {{blank1}}=\"usuario\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "name",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: name."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: name"
        }
      ],
      "solution": "<input type=\"text\" name=\"usuario\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u8-l15-4",
      "lesson_id": "legacy-html-u8-l15",
      "type": "blank",
      "prompt": "Campo sem name: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao e enviado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: name."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: E enviado normalmente."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao e enviado"
        }
      ],
      "solution": "Nao e enviado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l15-practice",
      "lesson_id": "legacy-html-u8-l15",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "type",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: name."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: name / value."
        },
        {
          "level": 3,
          "text": "Resposta esperada: type"
        }
      ],
      "solution": "type",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l1-3",
      "lesson_id": "legacy-html-u9-l1",
      "type": "blank",
      "prompt": "Qual e mais semantico? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<nav>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e HTML semantico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div class=\"nav\">."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <nav>"
        }
      ],
      "solution": "<nav>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l1-4",
      "lesson_id": "legacy-html-u9-l1",
      "type": "blank",
      "prompt": "HTML semantico ajuda: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Todos: devs, usuarios, buscadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e HTML semantico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas desenvolvedores."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Todos: devs, usuarios, buscadores"
        }
      ],
      "solution": "Todos: devs, usuarios, buscadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l1-practice",
      "lesson_id": "legacy-html-u9-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que e HTML semantico",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e HTML semantico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que e HTML semantico"
        }
      ],
      "solution": "O que e HTML semantico",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l2-2",
      "lesson_id": "legacy-html-u9-l2",
      "type": "blank",
      "prompt": "Crie um header:",
      "starter_code": "<{{blank1}}>\n <h1>Meu Site</h1>\n <nav>...</nav>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "header",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "header",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <header>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: header"
        }
      ],
      "solution": "<header>\n <h1>Meu Site</h1>\n <nav>...</nav>\n</header>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l2-3",
      "lesson_id": "legacy-html-u9-l2",
      "type": "blank",
      "prompt": "<header> e para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Cabecalho",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <header>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Rodape."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Cabecalho"
        }
      ],
      "solution": "Cabecalho",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l2-practice",
      "lesson_id": "legacy-html-u9-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento header com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "header",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "header",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <header>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: header"
        }
      ],
      "solution": "<header class=\"destaque\">Texto</header>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l3-2",
      "lesson_id": "legacy-html-u9-l3",
      "type": "blank",
      "prompt": "Crie navegacao:",
      "starter_code": "<{{blank1}}>\n <a href=\"/\">Home</a>\n <a href=\"/sobre\">Sobre</a>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "nav",
              "placeholder": "___"
            },
            {
              "id": "blank2",
              "answer": "nav",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <nav>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: nav"
        }
      ],
      "solution": "<nav>\n <a href=\"/\">Home</a>\n <a href=\"/sobre\">Sobre</a>\n</nav>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l3-4",
      "lesson_id": "legacy-html-u9-l3",
      "type": "blank",
      "prompt": "<nav> e ideal para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Menu principal",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <nav>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Links de rodape simples."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Menu principal"
        }
      ],
      "solution": "Menu principal",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l3-practice",
      "lesson_id": "legacy-html-u9-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento nav com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "nav",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "nav",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <nav>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: nav"
        }
      ],
      "solution": "<nav class=\"destaque\">Texto</nav>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l4-2",
      "lesson_id": "legacy-html-u9-l4",
      "type": "blank",
      "prompt": "Crie o main:",
      "starter_code": "<{{blank1}}>\n <h1>Bem-vindo</h1>\n <p>Conteudo principal aqui.</p>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "main",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "main",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <main>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: main"
        }
      ],
      "solution": "<main>\n <h1>Bem-vindo</h1>\n <p>Conteudo principal aqui.</p>\n</main>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l4-3",
      "lesson_id": "legacy-html-u9-l4",
      "type": "blank",
      "prompt": "Quantos <main> por pagina? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Apenas um",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <main>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Quantos quiser."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Apenas um"
        }
      ],
      "solution": "Apenas um",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l4-practice",
      "lesson_id": "legacy-html-u9-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento main com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "main",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "main",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <main>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: main"
        }
      ],
      "solution": "<main class=\"destaque\">Texto</main>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l5-2",
      "lesson_id": "legacy-html-u9-l5",
      "type": "blank",
      "prompt": "Crie uma secao:",
      "starter_code": "<{{blank1}}>\n <h2>Nossos Servicos</h2>\n <p>...</p>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "section",
              "placeholder": "_______"
            },
            {
              "id": "blank2",
              "answer": "section",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <section>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: section"
        }
      ],
      "solution": "<section>\n <h2>Nossos Servicos</h2>\n <p>...</p>\n</section>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l5-4",
      "lesson_id": "legacy-html-u9-l5",
      "type": "blank",
      "prompt": "<section> agrupa: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Conteudo tematicamente relacionado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <section>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Qualquer conteudo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Conteudo tematicamente relacionado"
        }
      ],
      "solution": "Conteudo tematicamente relacionado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l5-practice",
      "lesson_id": "legacy-html-u9-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento section com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "section",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "section",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <section>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: section"
        }
      ],
      "solution": "<section class=\"destaque\">Texto</section>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l6-2",
      "lesson_id": "legacy-html-u9-l6",
      "type": "blank",
      "prompt": "Crie um artigo:",
      "starter_code": "<{{blank1}}>\n <h2>Titulo do Post</h2>\n <p>Conteudo do post...</p>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "article",
              "placeholder": "_______"
            },
            {
              "id": "blank2",
              "answer": "article",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <article>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: article"
        }
      ],
      "solution": "<article>\n <h2>Titulo do Post</h2>\n <p>Conteudo do post...</p>\n</article>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l6-4",
      "lesson_id": "legacy-html-u9-l6",
      "type": "blank",
      "prompt": "<article> e para conteudo: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Independente e autocontido",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <article>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Que depende do contexto."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Independente e autocontido"
        }
      ],
      "solution": "Independente e autocontido",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l6-practice",
      "lesson_id": "legacy-html-u9-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento article com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "article",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "article",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <article>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: article"
        }
      ],
      "solution": "<article class=\"destaque\">Texto</article>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l7-2",
      "lesson_id": "legacy-html-u9-l7",
      "type": "blank",
      "prompt": "Crie um aside:",
      "starter_code": "<{{blank1}}>\n <h3>Posts Relacionados</h3>\n <ul>...</ul>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "aside",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "aside",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <aside>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: aside"
        }
      ],
      "solution": "<aside>\n <h3>Posts Relacionados</h3>\n <ul>...</ul>\n</aside>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l7-4",
      "lesson_id": "legacy-html-u9-l7",
      "type": "blank",
      "prompt": "<aside> e ideal para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Sidebar ou informacoes extras",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <aside>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Conteudo principal."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Sidebar ou informacoes extras"
        }
      ],
      "solution": "Sidebar ou informacoes extras",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l7-practice",
      "lesson_id": "legacy-html-u9-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento aside com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "aside",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "aside",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <aside>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: aside"
        }
      ],
      "solution": "<aside class=\"destaque\">Texto</aside>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l8-2",
      "lesson_id": "legacy-html-u9-l8",
      "type": "blank",
      "prompt": "Crie um footer:",
      "starter_code": "<{{blank1}}>\n <p>&copy; 2024 Meu Site</p>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "footer",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "footer",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <footer>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: footer"
        }
      ],
      "solution": "<footer>\n <p>&copy; 2024 Meu Site</p>\n</footer>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l8-4",
      "lesson_id": "legacy-html-u9-l8",
      "type": "blank",
      "prompt": "<footer> geralmente contem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Copyright e links de contato",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <footer>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Navegacao principal."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Copyright e links de contato"
        }
      ],
      "solution": "Copyright e links de contato",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l8-practice",
      "lesson_id": "legacy-html-u9-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento footer com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "footer",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "footer",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <footer>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: footer"
        }
      ],
      "solution": "<footer class=\"destaque\">Texto</footer>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l9-3",
      "lesson_id": "legacy-html-u9-l9",
      "type": "blank",
      "prompt": "Para uma sidebar, prefira: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<aside>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Quando usar div."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div class=\"sidebar\">."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <aside>"
        }
      ],
      "solution": "<aside>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l9-4",
      "lesson_id": "legacy-html-u9-l9",
      "type": "blank",
      "prompt": "div e: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Generica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Quando usar div."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Semantica."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Generica"
        }
      ],
      "solution": "Generica",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l9-practice",
      "lesson_id": "legacy-html-u9-l9",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Quando usar div",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Quando usar div."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Quando usar div"
        }
      ],
      "solution": "Quando usar div",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l1-2",
      "lesson_id": "legacy-html-u10-l1",
      "type": "blank",
      "prompt": "Adicione um id:",
      "starter_code": "<div {{blank1}}=\"cabecalho\">Meu Header</div>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "id",
              "placeholder": "__"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: id."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: id"
        }
      ],
      "solution": "<div id=\"cabecalho\">Meu Header</div>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l1-4",
      "lesson_id": "legacy-html-u10-l1",
      "type": "blank",
      "prompt": "Cada id deve ser: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Unico na pagina",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: id."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Repetido quando necessario."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Unico na pagina"
        }
      ],
      "solution": "Unico na pagina",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l1-practice",
      "lesson_id": "legacy-html-u10-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "id",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: id."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: id"
        }
      ],
      "solution": "id",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l2-2",
      "lesson_id": "legacy-html-u10-l2",
      "type": "blank",
      "prompt": "Adicione uma classe:",
      "starter_code": "<button {{blank1}}=\"btn-primary\">Clique</button>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "class",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: class."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: class"
        }
      ],
      "solution": "<button class=\"btn-primary\">Clique</button>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l2-4",
      "lesson_id": "legacy-html-u10-l2",
      "type": "blank",
      "prompt": "Classes podem ser: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Multiplas por elemento",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: class."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas uma por elemento."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Multiplas por elemento"
        }
      ],
      "solution": "Multiplas por elemento",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l2-practice",
      "lesson_id": "legacy-html-u10-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "class",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: class."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: class"
        }
      ],
      "solution": "class",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l3-2",
      "lesson_id": "legacy-html-u10-l3",
      "type": "blank",
      "prompt": "Adicione estilo inline:",
      "starter_code": "<p {{blank1}}=\"color: red;\">Texto vermelho</p>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "style",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: style."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: style"
        }
      ],
      "solution": "<p style=\"color: red;\">Texto vermelho</p>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l3-4",
      "lesson_id": "legacy-html-u10-l3",
      "type": "blank",
      "prompt": "Para projetos grandes, prefira: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "CSS externo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: style."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: style inline."
        },
        {
          "level": 3,
          "text": "Resposta esperada: CSS externo"
        }
      ],
      "solution": "CSS externo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l3-practice",
      "lesson_id": "legacy-html-u10-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "style",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: style."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: style"
        }
      ],
      "solution": "style",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l4-2",
      "lesson_id": "legacy-html-u10-l4",
      "type": "blank",
      "prompt": "Adicione uma dica:",
      "starter_code": "<abbr {{blank1}}=\"HyperText Markup Language\">HTML</abbr>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "title",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: title."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: title"
        }
      ],
      "solution": "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l4-4",
      "lesson_id": "legacy-html-u10-l4",
      "type": "blank",
      "prompt": "title aparece ao: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Passar o mouse",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: title."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Clicar."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Passar o mouse"
        }
      ],
      "solution": "Passar o mouse",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l4-practice",
      "lesson_id": "legacy-html-u10-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "title",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: title."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: title"
        }
      ],
      "solution": "title",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l5-2",
      "lesson_id": "legacy-html-u10-l5",
      "type": "blank",
      "prompt": "Defina portugues brasileiro:",
      "starter_code": "<html {{blank1}}=\"pt-BR\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "lang",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: lang."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: lang"
        }
      ],
      "solution": "<html lang=\"pt-BR\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l5-4",
      "lesson_id": "legacy-html-u10-l5",
      "type": "blank",
      "prompt": "lang ajuda: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Leitores de tela e buscadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: lang."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas o estilo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Leitores de tela e buscadores"
        }
      ],
      "solution": "Leitores de tela e buscadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l5-practice",
      "lesson_id": "legacy-html-u10-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "lang",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: lang."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: lang"
        }
      ],
      "solution": "lang",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l6-2",
      "lesson_id": "legacy-html-u10-l6",
      "type": "blank",
      "prompt": "Adicione um dado personalizado:",
      "starter_code": "<div {{blank1}}-produto-id=\"123\">Produto</div>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "data",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: data-*."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: data"
        }
      ],
      "solution": "<div data-produto-id=\"123\">Produto</div>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l6-4",
      "lesson_id": "legacy-html-u10-l6",
      "type": "blank",
      "prompt": "data-* e valido para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Qualquer elemento",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: data-*."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas alguns elementos."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Qualquer elemento"
        }
      ],
      "solution": "Qualquer elemento",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l6-practice",
      "lesson_id": "legacy-html-u10-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "data-*",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: data-*."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: data-*"
        }
      ],
      "solution": "data-*",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l7-2",
      "lesson_id": "legacy-html-u10-l7",
      "type": "blank",
      "prompt": "Oculte o elemento:",
      "starter_code": "<div {{blank1}}>Conteudo oculto</div>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "hidden",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: hidden."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: hidden"
        }
      ],
      "solution": "<div hidden>Conteudo oculto</div>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l7-4",
      "lesson_id": "legacy-html-u10-l7",
      "type": "blank",
      "prompt": "Elemento com hidden: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Existe mas nao aparece",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: E removido do DOM."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Existe mas nao aparece"
        }
      ],
      "solution": "Existe mas nao aparece",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l7-practice",
      "lesson_id": "legacy-html-u10-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "hidden",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: hidden"
        }
      ],
      "solution": "hidden",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l8-3",
      "lesson_id": "legacy-html-u10-l8",
      "type": "blank",
      "prompt": "Torne focavel via Tab:",
      "starter_code": "<div {{blank1}}=\"0\">Clique ou Tab</div>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tabindex",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: tabindex."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tabindex"
        }
      ],
      "solution": "<div tabindex=\"0\">Clique ou Tab</div>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u10-l8-4",
      "lesson_id": "legacy-html-u10-l8",
      "type": "blank",
      "prompt": "tabindex e importante para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Acessibilidade via teclado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: tabindex."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estilo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Acessibilidade via teclado"
        }
      ],
      "solution": "Acessibilidade via teclado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l8-practice",
      "lesson_id": "legacy-html-u10-l8",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "tabindex",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: tabindex."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: tabindex"
        }
      ],
      "solution": "tabindex",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l1-3",
      "lesson_id": "legacy-html-u11-l1",
      "type": "blank",
      "prompt": "Acessibilidade beneficia: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Todos os usuarios",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e acessibilidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas pessoas com deficiencia."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Todos os usuarios"
        }
      ],
      "solution": "Todos os usuarios",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l1-practice",
      "lesson_id": "legacy-html-u11-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e acessibilidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l2-3",
      "lesson_id": "legacy-html-u11-l2",
      "type": "blank",
      "prompt": "Para imagem decorativa, use: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt=\"\"",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Uso correto de alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nao colocar alt."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt=\"\""
        }
      ],
      "solution": "alt=\"\"",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l2-4",
      "lesson_id": "legacy-html-u11-l2",
      "type": "blank",
      "prompt": "Descreva a imagem:",
      "starter_code": "<img src=\"cachorro.jpg\" {{blank1}}=\"Cachorro golden retriever brincando no parque\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Uso correto de alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "<img src=\"cachorro.jpg\" alt=\"Cachorro golden retriever brincando no parque\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u11-l2-practice",
      "lesson_id": "legacy-html-u11-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Uso correto de alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l3-2",
      "lesson_id": "legacy-html-u11-l3",
      "type": "blank",
      "prompt": "Associe label ao input:",
      "starter_code": "<{{blank1}} for=\"email\">Email:</{{blank2}}>\n<input id=\"email\" type=\"email\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "label",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "label",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <label> e formularios."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: label"
        }
      ],
      "solution": "<label for=\"email\">Email:</label>\n<input id=\"email\" type=\"email\">",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u11-l3-4",
      "lesson_id": "legacy-html-u11-l3",
      "type": "blank",
      "prompt": "for do label deve corresponder a: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "id do input",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <label> e formularios."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: class do input."
        },
        {
          "level": 3,
          "text": "Resposta esperada: id do input"
        }
      ],
      "solution": "id do input",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l3-practice",
      "lesson_id": "legacy-html-u11-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento label com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "label",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "label",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <label> e formularios."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: label"
        }
      ],
      "solution": "<label class=\"destaque\">Texto</label>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u11-l4-3",
      "lesson_id": "legacy-html-u11-l4",
      "type": "blank",
      "prompt": "tabindex positivo alto e: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Geralmente evitado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Ordem de tabulacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Recomendado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Geralmente evitado"
        }
      ],
      "solution": "Geralmente evitado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l4-practice",
      "lesson_id": "legacy-html-u11-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Ordem de tabulacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l5-3",
      "lesson_id": "legacy-html-u11-l5",
      "type": "blank",
      "prompt": "ARIA deve ser usado: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Quando HTML nativo nao basta",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Introducao a ARIA."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Em todos os elementos."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Quando HTML nativo nao basta"
        }
      ],
      "solution": "Quando HTML nativo nao basta",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l5-practice",
      "lesson_id": "legacy-html-u11-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Introducao a ARIA."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l6-2",
      "lesson_id": "legacy-html-u11-l6",
      "type": "blank",
      "prompt": "Rotule o botao de icone:",
      "starter_code": "<button {{blank1}}=\"Fechar menu\"> </button>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "aria-label",
              "placeholder": "__________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: aria-label."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: aria-label"
        }
      ],
      "solution": "<button aria-label=\"Fechar menu\"> </button>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u11-l6-4",
      "lesson_id": "legacy-html-u11-l6",
      "type": "blank",
      "prompt": "aria-label e anunciado por: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Leitores de tela",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: aria-label."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Navegadores visuais."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Leitores de tela"
        }
      ],
      "solution": "Leitores de tela",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l6-practice",
      "lesson_id": "legacy-html-u11-l6",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: aria-label."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l7-2",
      "lesson_id": "legacy-html-u11-l7",
      "type": "blank",
      "prompt": "Esconda o icone decorativo:",
      "starter_code": "<span {{blank1}}=\"true\"> </span>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "aria-hidden",
              "placeholder": "___________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: aria-hidden."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: aria-hidden"
        }
      ],
      "solution": "<span aria-hidden=\"true\"> </span>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u11-l7-4",
      "lesson_id": "legacy-html-u11-l7",
      "type": "blank",
      "prompt": "aria-hidden=\"true\" torna invisivel para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Leitores de tela",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: aria-hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Usuarios visuais."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Leitores de tela"
        }
      ],
      "solution": "Leitores de tela",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l7-practice",
      "lesson_id": "legacy-html-u11-l7",
      "type": "blank",
      "prompt": "Pratica guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: aria-hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: src / title."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l1-3",
      "lesson_id": "legacy-html-u12-l1",
      "type": "blank",
      "prompt": "Quantos h1 por pagina? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Apenas um",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Titulos hierarquicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Quantos quiser."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Apenas um"
        }
      ],
      "solution": "Apenas um",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l1-4",
      "lesson_id": "legacy-html-u12-l1",
      "type": "blank",
      "prompt": "Qual ordem esta correta? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "h1, h2, h3, h4",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Titulos hierarquicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: h1, h3, h2, h4."
        },
        {
          "level": 3,
          "text": "Resposta esperada: h1, h2, h3, h4"
        }
      ],
      "solution": "h1, h2, h3, h4",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l1-practice",
      "lesson_id": "legacy-html-u12-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Titulos hierarquicos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Titulos hierarquicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Titulos hierarquicos"
        }
      ],
      "solution": "Titulos hierarquicos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l2-3",
      "lesson_id": "legacy-html-u12-l2",
      "type": "blank",
      "prompt": "Buscadores preferem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tags semanticas",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Estrutura semantica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Muitas divs genericas."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tags semanticas"
        }
      ],
      "solution": "Tags semanticas",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l2-practice",
      "lesson_id": "legacy-html-u12-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Estrutura semantica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Estrutura semantica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Estrutura semantica"
        }
      ],
      "solution": "Estrutura semantica",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l3-2",
      "lesson_id": "legacy-html-u12-l3",
      "type": "blank",
      "prompt": "Crie uma meta description:",
      "starter_code": "<meta name=\"{{blank1}}\" content=\"Aprenda HTML do zero...\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "description",
              "placeholder": "___________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Meta description."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: description"
        }
      ],
      "solution": "<meta name=\"description\" content=\"Aprenda HTML do zero...\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u12-l3-4",
      "lesson_id": "legacy-html-u12-l3",
      "type": "blank",
      "prompt": "Meta description deve ter: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Ate 160 caracteres",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Meta description."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Ate 500 caracteres."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Ate 160 caracteres"
        }
      ],
      "solution": "Ate 160 caracteres",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l3-practice",
      "lesson_id": "legacy-html-u12-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Meta description",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Meta description."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Meta description"
        }
      ],
      "solution": "Meta description",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l4-3",
      "lesson_id": "legacy-html-u12-l4",
      "type": "blank",
      "prompt": "Qual texto ancora e melhor? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Guia completo de HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Clique aqui."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Guia completo de HTML"
        }
      ],
      "solution": "Guia completo de HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l4-practice",
      "lesson_id": "legacy-html-u12-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Links internos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Links internos"
        }
      ],
      "solution": "Links internos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l5-3",
      "lesson_id": "legacy-html-u12-l5",
      "type": "blank",
      "prompt": "Para SEO, alt deve ser: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Descritivo e natural",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Imagens com alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Cheio de palavras-chave."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Descritivo e natural"
        }
      ],
      "solution": "Descritivo e natural",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u12-l5-4",
      "lesson_id": "legacy-html-u12-l5",
      "type": "blank",
      "prompt": "Alt otimizado:",
      "starter_code": "<img src=\"bolo.jpg\" {{blank1}}=\"Bolo de chocolate decorado para festa de aniversario\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "alt",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Imagens com alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: alt"
        }
      ],
      "solution": "<img src=\"bolo.jpg\" alt=\"Bolo de chocolate decorado para festa de aniversario\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u12-l5-practice",
      "lesson_id": "legacy-html-u12-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Imagens com alt",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Imagens com alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Imagens com alt"
        }
      ],
      "solution": "Imagens com alt",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l1-2",
      "lesson_id": "legacy-html-u13-l1",
      "type": "blank",
      "prompt": "Conecte um arquivo CSS:",
      "starter_code": "<{{blank1}} rel=\"stylesheet\" href=\"estilos.css\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "link",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <link>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: link"
        }
      ],
      "solution": "<link rel=\"stylesheet\" href=\"estilos.css\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u13-l1-4",
      "lesson_id": "legacy-html-u13-l1",
      "type": "blank",
      "prompt": "Complete o link:",
      "starter_code": "<link {{blank1}}=\"stylesheet\" href=\"style.css\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "rel",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <link>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: rel"
        }
      ],
      "solution": "<link rel=\"stylesheet\" href=\"style.css\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u13-l1-practice",
      "lesson_id": "legacy-html-u13-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<link>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <link>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <div> / <section>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <link>"
        }
      ],
      "solution": "<link>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l2-2",
      "lesson_id": "legacy-html-u13-l2",
      "type": "blank",
      "prompt": "Crie um bloco de estilos:",
      "starter_code": "<{{blank1}}>\n body { background: blue; }\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "style",
              "placeholder": "_____"
            },
            {
              "id": "blank2",
              "answer": "style",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <style>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: style"
        }
      ],
      "solution": "<style>\n body { background: blue; }\n</style>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u13-l2-4",
      "lesson_id": "legacy-html-u13-l2",
      "type": "blank",
      "prompt": "<style> deve ficar no: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<head>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <style>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <body>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <head>"
        }
      ],
      "solution": "<head>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l2-practice",
      "lesson_id": "legacy-html-u13-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento style com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "style",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "style",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <style>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: style"
        }
      ],
      "solution": "<style class=\"destaque\">Texto</style>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u13-l3-2",
      "lesson_id": "legacy-html-u13-l3",
      "type": "blank",
      "prompt": "Conecte um arquivo JS:",
      "starter_code": "<{{blank1}} src=\"app.js\"></{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "script",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "script",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <script>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: script"
        }
      ],
      "solution": "<script src=\"app.js\"></script>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u13-l3-4",
      "lesson_id": "legacy-html-u13-l3",
      "type": "blank",
      "prompt": "<script> precisa de fechamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Sim",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: <script>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nao."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Sim"
        }
      ],
      "solution": "Sim",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l3-practice",
      "lesson_id": "legacy-html-u13-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Crie um elemento script com classe:",
      "starter_code": "<{{blank1}} class=\"destaque\">Texto</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "script",
              "placeholder": "____"
            },
            {
              "id": "blank2",
              "answer": "script",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: <script>."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: script"
        }
      ],
      "solution": "<script class=\"destaque\">Texto</script>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u13-l4-2",
      "lesson_id": "legacy-html-u13-l4",
      "type": "blank",
      "prompt": "Adicione defer:",
      "starter_code": "<script src=\"app.js\" {{blank1}}></script>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "defer",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: defer."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: defer"
        }
      ],
      "solution": "<script src=\"app.js\" defer></script>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u13-l4-4",
      "lesson_id": "legacy-html-u13-l4",
      "type": "blank",
      "prompt": "defer executa apos: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Parsear todo o HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: defer."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Baixar o arquivo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Parsear todo o HTML"
        }
      ],
      "solution": "Parsear todo o HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l4-practice",
      "lesson_id": "legacy-html-u13-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: defer."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l5-2",
      "lesson_id": "legacy-html-u13-l5",
      "type": "blank",
      "prompt": "Adicione async:",
      "starter_code": "<script src=\"analytics.js\" {{blank1}}></script>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "async",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: async."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: async"
        }
      ],
      "solution": "<script src=\"analytics.js\" async></script>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u13-l5-4",
      "lesson_id": "legacy-html-u13-l5",
      "type": "blank",
      "prompt": "async e ideal para: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Scripts independentes",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: async."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Scripts que dependem de outros."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Scripts independentes"
        }
      ],
      "solution": "Scripts independentes",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u13-l5-practice",
      "lesson_id": "legacy-html-u13-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: async."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l1-3",
      "lesson_id": "legacy-html-u14-l1",
      "type": "blank",
      "prompt": "Qual esta mais limpo? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<div class=\"box\">\\n <p>texto</p>\\n</div>",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Codigo limpo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <DIV CLASS=box><P>texto</DIV>."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <div class=\"box\">\\n <p>texto</p>\\n</div>"
        }
      ],
      "solution": "<div class=\"box\">\\n <p>texto</p>\\n</div>",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l1-practice",
      "lesson_id": "legacy-html-u14-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Codigo limpo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Codigo limpo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Codigo limpo"
        }
      ],
      "solution": "Codigo limpo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l2-3",
      "lesson_id": "legacy-html-u14-l2",
      "type": "blank",
      "prompt": "Qual comentario e mais util? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "<!-- Formulario de contato - requer validacao JS -->",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Comentarios uteis."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <!-- paragrafo -->."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <!-- Formulario de contato - requer validacao JS -->"
        }
      ],
      "solution": "<!-- Formulario de contato - requer validacao JS -->",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l2-practice",
      "lesson_id": "legacy-html-u14-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Comentarios uteis",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Comentarios uteis."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Comentarios uteis"
        }
      ],
      "solution": "Comentarios uteis",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l3-3",
      "lesson_id": "legacy-html-u14-l3",
      "type": "blank",
      "prompt": "Validar HTML ajuda a: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Encontrar erros e melhorar compatibilidade",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Validacao HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Deixar mais bonito."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Encontrar erros e melhorar compatibilidade"
        }
      ],
      "solution": "Encontrar erros e melhorar compatibilidade",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l3-practice",
      "lesson_id": "legacy-html-u14-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Validacao HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Validacao HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Validacao HTML"
        }
      ],
      "solution": "Validacao HTML",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l4-3",
      "lesson_id": "legacy-html-u14-l4",
      "type": "blank",
      "prompt": "Especificar dimensoes de imagem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Evita layout shift",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Performance basica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Nao faz diferenca."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Evita layout shift"
        }
      ],
      "solution": "Evita layout shift",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l4-practice",
      "lesson_id": "legacy-html-u14-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Performance basica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Performance basica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Performance basica"
        }
      ],
      "solution": "Performance basica",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l5-3",
      "lesson_id": "legacy-html-u14-l5",
      "type": "blank",
      "prompt": "Para compatibilidade, devemos: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Testar em varios navegadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Compatibilidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Testar so em um navegador."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Testar em varios navegadores"
        }
      ],
      "solution": "Testar em varios navegadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l5-practice",
      "lesson_id": "legacy-html-u14-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Compatibilidade",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Compatibilidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Compatibilidade"
        }
      ],
      "solution": "Compatibilidade",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l1-3",
      "lesson_id": "legacy-html-u15-l1",
      "type": "blank",
      "prompt": "Crie a estrutura:",
      "starter_code": "<{{blank1}}>\n <h1>Seu Nome</h1>\n</{{blank2}}>\n<main>\n <img src=\"foto.jpg\" alt=\"Minha foto\">\n <p>Sobre mim...</p>\n</main>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "header",
              "placeholder": "______"
            },
            {
              "id": "blank2",
              "answer": "header",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Pagina pessoal."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: header"
        }
      ],
      "solution": "<header>\n <h1>Seu Nome</h1>\n</header>\n<main>\n <img src=\"foto.jpg\" alt=\"Minha foto\">\n <p>Sobre mim...</p>\n</main>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u15-l1-practice",
      "lesson_id": "legacy-html-u15-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pagina pessoal",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pagina pessoal."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pagina pessoal"
        }
      ],
      "solution": "Pagina pessoal",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l2-3",
      "lesson_id": "legacy-html-u15-l2",
      "type": "blank",
      "prompt": "Crie a secao hero:",
      "starter_code": "<{{blank1}}>\n <h1>Aprenda HTML em 30 dias</h1>\n <p>Do zero ao profissional</p>\n <button>Comece agora</button>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "section",
              "placeholder": "_______"
            },
            {
              "id": "blank2",
              "answer": "section",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Landing page simples."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: section"
        }
      ],
      "solution": "<section>\n <h1>Aprenda HTML em 30 dias</h1>\n <p>Do zero ao profissional</p>\n <button>Comece agora</button>\n</section>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u15-l2-practice",
      "lesson_id": "legacy-html-u15-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Landing page simples",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Landing page simples."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Landing page simples"
        }
      ],
      "solution": "Landing page simples",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l3-3",
      "lesson_id": "legacy-html-u15-l3",
      "type": "blank",
      "prompt": "Crie o form de contato:",
      "starter_code": "<form action=\"/contato\" method=\"POST\">\n <label for=\"nome\">Nome:</label>\n <input type=\"text\" id=\"nome\" name=\"nome\" {{blank1}}>\n <button type=\"submit\">Enviar</button>\n</form>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "required",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Pagina de contato."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: required"
        }
      ],
      "solution": "<form action=\"/contato\" method=\"POST\">\n <label for=\"nome\">Nome:</label>\n <input type=\"text\" id=\"nome\" name=\"nome\" required>\n <button type=\"submit\">Enviar</button>\n</form>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u15-l3-practice",
      "lesson_id": "legacy-html-u15-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pagina de contato",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pagina de contato."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pagina de contato"
        }
      ],
      "solution": "Pagina de contato",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l4-3",
      "lesson_id": "legacy-html-u15-l4",
      "type": "blank",
      "prompt": "Agrupe campos:",
      "starter_code": "<{{blank1}}>\n <legend>Dados pessoais</legend>\n <label>Nome: <input type=\"text\"></label>\n</{{blank2}}>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "fieldset",
              "placeholder": "________"
            },
            {
              "id": "blank2",
              "answer": "fieldset",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Formulario funcional."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: fieldset"
        }
      ],
      "solution": "<fieldset>\n <legend>Dados pessoais</legend>\n <label>Nome: <input type=\"text\"></label>\n</fieldset>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u15-l4-practice",
      "lesson_id": "legacy-html-u15-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Formulario funcional",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Formulario funcional."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Formulario funcional"
        }
      ],
      "solution": "Formulario funcional",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l5-3",
      "lesson_id": "legacy-html-u15-l5",
      "type": "blank",
      "prompt": "Crie a navegacao:",
      "starter_code": "<nav>\n <a href=\"index.html\">Home</a>\n <a href=\"{{blank1}}\">Sobre</a>\n <a href=\"servicos.html\">Servicos</a>\n <a href=\"contato.html\">Contato</a>\n</nav>",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "sobre.html",
              "placeholder": "__________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Mini site institucional."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: sobre.html"
        }
      ],
      "solution": "<nav>\n <a href=\"index.html\">Home</a>\n <a href=\"sobre.html\">Sobre</a>\n <a href=\"servicos.html\">Servicos</a>\n <a href=\"contato.html\">Contato</a>\n</nav>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u15-l5-practice",
      "lesson_id": "legacy-html-u15-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Mini site institucional",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Mini site institucional."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Mini site institucional"
        }
      ],
      "solution": "Mini site institucional",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l1-3",
      "lesson_id": "legacy-html-u16-l1",
      "type": "blank",
      "prompt": "Frameworks substituem HTML? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Nao, usam HTML por baixo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML vs frameworks."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, completamente."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Nao, usam HTML por baixo"
        }
      ],
      "solution": "Nao, usam HTML por baixo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l1-practice",
      "lesson_id": "legacy-html-u16-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HTML vs frameworks",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML vs frameworks."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HTML vs frameworks"
        }
      ],
      "solution": "HTML vs frameworks",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l2-3",
      "lesson_id": "legacy-html-u16-l2",
      "type": "blank",
      "prompt": "Web Components sao: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Padrao nativo dos navegadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Introducao a Web Components."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Um framework especifico."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Padrao nativo dos navegadores"
        }
      ],
      "solution": "Padrao nativo dos navegadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l2-practice",
      "lesson_id": "legacy-html-u16-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Introducao a Web Components",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Introducao a Web Components."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Introducao a Web Components"
        }
      ],
      "solution": "Introducao a Web Components",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l3-3",
      "lesson_id": "legacy-html-u16-l3",
      "type": "blank",
      "prompt": "Link para o manifest:",
      "starter_code": "<link rel=\"{{blank1}}\" href=\"manifest.json\">",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "manifest",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: HTML em PWAs."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: manifest"
        }
      ],
      "solution": "<link rel=\"manifest\" href=\"manifest.json\">",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u16-l3-4",
      "lesson_id": "legacy-html-u16-l3",
      "type": "blank",
      "prompt": "PWAs podem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Funcionar offline e ser instalados",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML em PWAs."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Apenas funcionar online."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Funcionar offline e ser instalados"
        }
      ],
      "solution": "Funcionar offline e ser instalados",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l3-practice",
      "lesson_id": "legacy-html-u16-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HTML em PWAs",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: HTML em PWAs."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HTML em PWAs"
        }
      ],
      "solution": "HTML em PWAs",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l1-3",
      "lesson_id": "legacy-css-u17-l1",
      "type": "blank",
      "prompt": "O CSS e responsavel por: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Estilo e layout",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e CSS."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura do conteudo / Logica e interatividade."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Estilo e layout"
        }
      ],
      "solution": "Estilo e layout",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l1-4",
      "lesson_id": "legacy-css-u17-l1",
      "type": "blank",
      "prompt": "Complete a sigla:",
      "starter_code": "{{blank1}} Style Sheets",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Cascading",
              "placeholder": "_________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: O que e CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Cascading"
        }
      ],
      "solution": "Cascading Style Sheets",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l1-practice",
      "lesson_id": "legacy-css-u17-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: O que e CSS."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l2-2",
      "lesson_id": "legacy-css-u17-l2",
      "type": "blank",
      "prompt": "Selecione todos os paragrafos:",
      "starter_code": "{{blank1}} { color: red; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "p",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Seletores."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: p"
        }
      ],
      "solution": "p { color: red; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l2-3",
      "lesson_id": "legacy-css-u17-l2",
      "type": "blank",
      "prompt": "O seletor de classe e: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ".classe",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Seletores."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: #classe / classe."
        },
        {
          "level": 3,
          "text": "Resposta esperada: .classe"
        }
      ],
      "solution": ".classe",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l2-practice",
      "lesson_id": "legacy-css-u17-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Qual seletor aplica em classe? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ".card",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Seletores."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: #card / card."
        },
        {
          "level": 3,
          "text": "Resposta esperada: .card"
        }
      ],
      "solution": ".card",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l3-2",
      "lesson_id": "legacy-css-u17-l3",
      "type": "blank",
      "prompt": "Defina a cor do texto:",
      "starter_code": "p { {{blank1}}: #1f2937; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "color",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Cores e tipografia."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: color"
        }
      ],
      "solution": "p { color: #1f2937; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l3-3",
      "lesson_id": "legacy-css-u17-l3",
      "type": "blank",
      "prompt": "Qual propriedade muda o tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Cores e tipografia."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-style / line-style."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l3-practice",
      "lesson_id": "legacy-css-u17-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Defina a cor do texto:",
      "starter_code": "p { {{blank1}}: #0f172a; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "color",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Cores e tipografia."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: color"
        }
      ],
      "solution": "p { color: #0f172a; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l4-2",
      "lesson_id": "legacy-css-u17-l4",
      "type": "blank",
      "prompt": "Adicione espaco interno:",
      "starter_code": ".card { {{blank1}}: 16px; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "padding",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Box model."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: padding"
        }
      ],
      "solution": ".card { padding: 16px; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l4-3",
      "lesson_id": "legacy-css-u17-l4",
      "type": "blank",
      "prompt": "Qual propriedade cria espaco externo? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "margin",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Box model."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: padding / border."
        },
        {
          "level": 3,
          "text": "Resposta esperada: margin"
        }
      ],
      "solution": "margin",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l4-practice",
      "lesson_id": "legacy-css-u17-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Box model."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l5-2",
      "lesson_id": "legacy-css-u17-l5",
      "type": "blank",
      "prompt": "Quem tem maior especificidade? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "#botao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Cascata e especificidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: .botao / button."
        },
        {
          "level": 3,
          "text": "Resposta esperada: #botao"
        }
      ],
      "solution": "#botao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u17-l5-3",
      "lesson_id": "legacy-css-u17-l5",
      "type": "blank",
      "prompt": "Selecione por id:",
      "starter_code": "{{blank1}}menu { color: white; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "#",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Cascata e especificidade."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: #"
        }
      ],
      "solution": "#menu { color: white; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u17-l5-practice",
      "lesson_id": "legacy-css-u17-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Cascata e especificidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l1-2",
      "lesson_id": "legacy-css-u18-l1",
      "type": "blank",
      "prompt": "Ative o flex:",
      "starter_code": ".container { display: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "flex",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Flexbox."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: flex"
        }
      ],
      "solution": ".container { display: flex; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u18-l1-3",
      "lesson_id": "legacy-css-u18-l1",
      "type": "blank",
      "prompt": "Centralizar horizontalmente no eixo principal: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "justify-content: center",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flexbox."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: align-items: center / flex-wrap: center."
        },
        {
          "level": 3,
          "text": "Resposta esperada: justify-content: center"
        }
      ],
      "solution": "justify-content: center",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l1-practice",
      "lesson_id": "legacy-css-u18-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Flexbox",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flexbox."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Flexbox"
        }
      ],
      "solution": "Flexbox",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l2-2",
      "lesson_id": "legacy-css-u18-l2",
      "type": "blank",
      "prompt": "Crie duas colunas iguais:",
      "starter_code": ".grid { display: grid; {{blank1}}: 1fr 1fr; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "grid-template-columns",
              "placeholder": "____________________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Grid."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: grid-template-columns"
        }
      ],
      "solution": ".grid { display: grid; grid-template-columns: 1fr 1fr; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u18-l2-3",
      "lesson_id": "legacy-css-u18-l2",
      "type": "blank",
      "prompt": "Para espacamento entre colunas/linhas use: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "gap",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Grid."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: padding / margin."
        },
        {
          "level": 3,
          "text": "Resposta esperada: gap"
        }
      ],
      "solution": "gap",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l2-practice",
      "lesson_id": "legacy-css-u18-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Grid",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Grid."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Grid"
        }
      ],
      "solution": "Grid",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l3-2",
      "lesson_id": "legacy-css-u18-l3",
      "type": "blank",
      "prompt": "Posicione com absolute:",
      "starter_code": ".badge { position: {{blank1}}; top: 8px; right: 8px; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "absolute",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Position."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: absolute"
        }
      ],
      "solution": ".badge { position: absolute; top: 8px; right: 8px; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u18-l3-3",
      "lesson_id": "legacy-css-u18-l3",
      "type": "blank",
      "prompt": "Elemento fixo no topo da tela: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "position: fixed",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Position."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: position: sticky / position: static."
        },
        {
          "level": 3,
          "text": "Resposta esperada: position: fixed"
        }
      ],
      "solution": "position: fixed",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l3-practice",
      "lesson_id": "legacy-css-u18-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Position",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Position."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Position"
        }
      ],
      "solution": "Position",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l4-2",
      "lesson_id": "legacy-css-u18-l4",
      "type": "blank",
      "prompt": "Crie uma media query:",
      "starter_code": "@media (max-width: 768px) { {{blank1}} }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "body { font-size: 14px; }",
              "placeholder": "________________________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Responsividade."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: body { font-size: 14px; }"
        }
      ],
      "solution": "@media (max-width: 768px) { body { font-size: 14px; } }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u18-l4-3",
      "lesson_id": "legacy-css-u18-l4",
      "type": "blank",
      "prompt": "Para mobile first, comecamos: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Estilos base para mobile",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Responsividade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estilos base para desktop / Sem estilos base."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Estilos base para mobile"
        }
      ],
      "solution": "Estilos base para mobile",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l4-practice",
      "lesson_id": "legacy-css-u18-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Responsividade",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Responsividade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Responsividade"
        }
      ],
      "solution": "Responsividade",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l5-2",
      "lesson_id": "legacy-css-u18-l5",
      "type": "blank",
      "prompt": "Crie um hover:",
      "starter_code": "button{{blank1}} { background: #22c55e; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ":hover",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: :hover"
        }
      ],
      "solution": "button:hover { background: #22c55e; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u18-l5-3",
      "lesson_id": "legacy-css-u18-l5",
      "type": "blank",
      "prompt": "Qual pseudo-classe indica foco? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ":focus",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: :visited / :checked."
        },
        {
          "level": 3,
          "text": "Resposta esperada: :focus"
        }
      ],
      "solution": ":focus",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u18-l5-practice",
      "lesson_id": "legacy-css-u18-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pseudo-classes",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pseudo-classes"
        }
      ],
      "solution": "Pseudo-classes",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l1-2",
      "lesson_id": "legacy-css-u19-l1",
      "type": "blank",
      "prompt": "Adicione transicao:",
      "starter_code": ".btn { transition: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "all 0.3s ease",
              "placeholder": "______________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Transitions."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: all 0.3s ease"
        }
      ],
      "solution": ".btn { transition: all 0.3s ease; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l1-3",
      "lesson_id": "legacy-css-u19-l1",
      "type": "blank",
      "prompt": "Qual propriedade define duracao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "transition-duration",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Transitions."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: transition-delay / transition-property."
        },
        {
          "level": 3,
          "text": "Resposta esperada: transition-duration"
        }
      ],
      "solution": "transition-duration",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l1-practice",
      "lesson_id": "legacy-css-u19-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Transitions."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l2-2",
      "lesson_id": "legacy-css-u19-l2",
      "type": "blank",
      "prompt": "Defina uma animacao:",
      "starter_code": "@keyframes {{blank1}} { from { opacity: 0; } to { opacity: 1; } }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "fadeIn",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Animations."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: fadeIn"
        }
      ],
      "solution": "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l2-3",
      "lesson_id": "legacy-css-u19-l2",
      "type": "blank",
      "prompt": "Repetir infinitamente: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "animation-iteration-count: infinite",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Animations."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: animation-delay: infinite / animation-fill-mode: infinite."
        },
        {
          "level": 3,
          "text": "Resposta esperada: animation-iteration-count: infinite"
        }
      ],
      "solution": "animation-iteration-count: infinite",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l2-practice",
      "lesson_id": "legacy-css-u19-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Animations."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l3-2",
      "lesson_id": "legacy-css-u19-l3",
      "type": "blank",
      "prompt": "Defina uma variavel:",
      "starter_code": ":root { {{blank1}}: #22c55e; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "--cor-primaria",
              "placeholder": "____________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Variaveis CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: --cor-primaria"
        }
      ],
      "solution": ":root { --cor-primaria: #22c55e; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l3-3",
      "lesson_id": "legacy-css-u19-l3",
      "type": "blank",
      "prompt": "Use a variavel:",
      "starter_code": "button { background: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "var(--cor-primaria)",
              "placeholder": "____________________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Variaveis CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: var(--cor-primaria)"
        }
      ],
      "solution": "button { background: var(--cor-primaria); }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l3-practice",
      "lesson_id": "legacy-css-u19-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Variaveis CSS."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l4-2",
      "lesson_id": "legacy-css-u19-l4",
      "type": "blank",
      "prompt": "Crie um marcador:",
      "starter_code": ".item{{blank1}} { content: \" \"; color: #22c55e; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "::before",
              "placeholder": "________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Pseudo-elementos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ::before"
        }
      ],
      "solution": ".item::before { content: \" \"; color: #22c55e; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l4-3",
      "lesson_id": "legacy-css-u19-l4",
      "type": "blank",
      "prompt": "Pseudo-elementos requerem: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "content",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-elementos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: display / position."
        },
        {
          "level": 3,
          "text": "Resposta esperada: content"
        }
      ],
      "solution": "content",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l4-practice",
      "lesson_id": "legacy-css-u19-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-elementos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l5-2",
      "lesson_id": "legacy-css-u19-l5",
      "type": "blank",
      "prompt": "Adicione sombra:",
      "starter_code": ".card { box-shadow: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "0 8px 24px rgba(0,0,0,0.2)",
              "placeholder": "__________________________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Sombras e fundos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: 0 8px 24px rgba(0,0,0,0.2)"
        }
      ],
      "solution": ".card { box-shadow: 0 8px 24px rgba(0,0,0,0.2); }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u19-l5-3",
      "lesson_id": "legacy-css-u19-l5",
      "type": "blank",
      "prompt": "Para gradiente use: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "background: linear-gradient(...)",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Sombras e fundos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: background: solid(...) / background: gradient(...)."
        },
        {
          "level": 3,
          "text": "Resposta esperada: background: linear-gradient(...)"
        }
      ],
      "solution": "background: linear-gradient(...)",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u19-l5-practice",
      "lesson_id": "legacy-css-u19-l5",
      "type": "blank",
      "prompt": "Pratica guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "font-size",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Sombras e fundos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: font-weight / line-height."
        },
        {
          "level": 3,
          "text": "Resposta esperada: font-size"
        }
      ],
      "solution": "font-size",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l1-3",
      "lesson_id": "legacy-css-u22-l1",
      "type": "blank",
      "prompt": "Selecione a classe botao:",
      "starter_code": "{{blank1}}botao { background: #22c55e; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ".",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Seletores basicos."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ."
        }
      ],
      "solution": ".botao { background: #22c55e; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u22-l1-4",
      "lesson_id": "legacy-css-u22-l1",
      "type": "blank",
      "prompt": "Qual seletor usa #? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "ID",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Seletores basicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Classe / Elemento."
        },
        {
          "level": 3,
          "text": "Resposta esperada: ID"
        }
      ],
      "solution": "ID",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l1-practice",
      "lesson_id": "legacy-css-u22-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Seletores basicos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Seletores basicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Seletores basicos"
        }
      ],
      "solution": "Seletores basicos",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l2-2",
      "lesson_id": "legacy-css-u22-l2",
      "type": "blank",
      "prompt": "Selecione apenas filhos diretos:",
      "starter_code": "ul {{blank1}} li { list-style: none; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ">",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Combinadores."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: >"
        }
      ],
      "solution": "ul > li { list-style: none; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u22-l2-3",
      "lesson_id": "legacy-css-u22-l2",
      "type": "blank",
      "prompt": "Selecione links dentro de nav:",
      "starter_code": "nav {{blank1}} { color: #0ea5e9; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "a",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Combinadores."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: a"
        }
      ],
      "solution": "nav a { color: #0ea5e9; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u22-l2-4",
      "lesson_id": "legacy-css-u22-l2",
      "type": "blank",
      "prompt": "Qual combinador indica filho direto? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ">",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Combinadores."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: + / ~."
        },
        {
          "level": 3,
          "text": "Resposta esperada: >"
        }
      ],
      "solution": ">",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l2-practice",
      "lesson_id": "legacy-css-u22-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Combinadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Combinadores."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Combinadores"
        }
      ],
      "solution": "Combinadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l3-2",
      "lesson_id": "legacy-css-u22-l3",
      "type": "blank",
      "prompt": "Estilo no hover:",
      "starter_code": "button{{blank1}} { transform: scale(1.02); }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ":hover",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: :hover"
        }
      ],
      "solution": "button:hover { transform: scale(1.02); }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u22-l3-3",
      "lesson_id": "legacy-css-u22-l3",
      "type": "blank",
      "prompt": "Qual pseudo-classe indica foco? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": ":focus",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: :active / :visited."
        },
        {
          "level": 3,
          "text": "Resposta esperada: :focus"
        }
      ],
      "solution": ":focus",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l3-practice",
      "lesson_id": "legacy-css-u22-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Pseudo-classes",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Pseudo-classes"
        }
      ],
      "solution": "Pseudo-classes",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l4-3",
      "lesson_id": "legacy-css-u22-l4",
      "type": "blank",
      "prompt": "Qual seletor e mais especifico? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "#menu .item",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Especificidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: .menu .item / nav a."
        },
        {
          "level": 3,
          "text": "Resposta esperada: #menu .item"
        }
      ],
      "solution": "#menu .item",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u22-l4-4",
      "lesson_id": "legacy-css-u22-l4",
      "type": "blank",
      "prompt": "Exemplo com ID:",
      "starter_code": "{{blank1}}header { position: sticky; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "#",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Especificidade."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: #"
        }
      ],
      "solution": "#header { position: sticky; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u22-l4-practice",
      "lesson_id": "legacy-css-u22-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Especificidade",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Especificidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Especificidade"
        }
      ],
      "solution": "Especificidade",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l1-2",
      "lesson_id": "legacy-css-u23-l1",
      "type": "blank",
      "prompt": "Ative o flex:",
      "starter_code": ".linha { display: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "flex",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Flex container."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: flex"
        }
      ],
      "solution": ".linha { display: flex; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u23-l1-3",
      "lesson_id": "legacy-css-u23-l1",
      "type": "blank",
      "prompt": "Alinhar no eixo principal: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "justify-content",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flex container."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: align-items / place-content."
        },
        {
          "level": 3,
          "text": "Resposta esperada: justify-content"
        }
      ],
      "solution": "justify-content",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l1-practice",
      "lesson_id": "legacy-css-u23-l1",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Flex container",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flex container."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Flex container"
        }
      ],
      "solution": "Flex container",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l2-2",
      "lesson_id": "legacy-css-u23-l2",
      "type": "blank",
      "prompt": "Item que cresce:",
      "starter_code": ".card { flex: {{blank1}}; }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "1",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Flex items."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: 1"
        }
      ],
      "solution": ".card { flex: 1; }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u23-l2-3",
      "lesson_id": "legacy-css-u23-l2",
      "type": "blank",
      "prompt": "Espaco entre itens: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "gap",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flex items."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: spacing / margin-inline."
        },
        {
          "level": 3,
          "text": "Resposta esperada: gap"
        }
      ],
      "solution": "gap",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l2-practice",
      "lesson_id": "legacy-css-u23-l2",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Flex items",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Flex items."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Flex items"
        }
      ],
      "solution": "Flex items",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l3-2",
      "lesson_id": "legacy-css-u23-l3",
      "type": "blank",
      "prompt": "Crie 3 colunas iguais:",
      "starter_code": ".grid { grid-template-columns: repeat(3, {{blank1}}); }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "1fr",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Grid basico."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: 1fr"
        }
      ],
      "solution": ".grid { grid-template-columns: repeat(3, 1fr); }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u23-l3-3",
      "lesson_id": "legacy-css-u23-l3",
      "type": "blank",
      "prompt": "Qual propriedade define espacamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "gap",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Grid basico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: space / grid-space."
        },
        {
          "level": 3,
          "text": "Resposta esperada: gap"
        }
      ],
      "solution": "gap",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l3-practice",
      "lesson_id": "legacy-css-u23-l3",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Grid basico",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Grid basico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Grid basico"
        }
      ],
      "solution": "Grid basico",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l4-2",
      "lesson_id": "legacy-css-u23-l4",
      "type": "blank",
      "prompt": "Grade fluida:",
      "starter_code": ".cards { grid-template-columns: repeat(auto-fit, minmax(220px, {{blank1}})); }",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "1fr",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Revise o ponto principal da licao: Layout responsivo."
        },
        {
          "level": 2,
          "text": "Compare com o padrao de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: 1fr"
        }
      ],
      "solution": ".cards { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-css-u23-l4-3",
      "lesson_id": "legacy-css-u23-l4",
      "type": "blank",
      "prompt": "Quando usar media queries? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Para ajustes por largura",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Layout responsivo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Para mudar HTML / Para trocar JS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Para ajustes por largura"
        }
      ],
      "solution": "Para ajustes por largura",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-css-u23-l4-practice",
      "lesson_id": "legacy-css-u23-l4",
      "type": "blank",
      "prompt": "Pratica guiada: Com base no que voce acabou de estudar, qual e o tema principal desta licao? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Layout responsivo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da licao: Layout responsivo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura basica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Layout responsivo"
        }
      ],
      "solution": "Layout responsivo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-vars-1",
      "lesson_id": "lesson-js-variables",
      "type": "blank",
      "prompt": "Complete o nome da variavel para guardar o nome da pessoa.",
      "starter_code": "const {{blank1}} = \"Ana\";",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "nome",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use um nome de variavel que descreva o valor guardado."
        },
        {
          "level": 2,
          "text": "O valor e o nome de uma pessoa."
        },
        {
          "level": 3,
          "text": "Resposta: nome"
        }
      ],
      "solution": "const nome = \"Ana\";",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-vars-2",
      "lesson_id": "lesson-js-variables",
      "type": "code",
      "prompt": "Crie uma variavel let chamada contador iniciando em 0.",
      "starter_code": "// escreva seu codigo abaixo",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "contador deve ser numero",
              "code": "assert(typeof contador === 'number', 'contador deve ser numero');"
            },
            {
              "name": "contador inicia em 0",
              "code": "assert(contador === 0, 'contador deve iniciar em 0');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use let porque o contador pode mudar no futuro."
        },
        {
          "level": 2,
          "text": "Nome exigido: contador."
        },
        {
          "level": 3,
          "text": "Exemplo: let contador = 0;"
        }
      ],
      "solution": "let contador = 0;",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-vars-3",
      "lesson_id": "lesson-js-variables",
      "type": "bugfix",
      "prompt": "Corrija o bug: a funcao monta a mensagem, mas nao devolve o resultado.",
      "starter_code": "function criarMensagem(nome) {\n  const mensagem = \"Ola, \" + nome;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "funcao retorna mensagem",
              "code": "assert(criarMensagem('Ada') === 'Ola, Ada', 'A funcao deve retornar a mensagem');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A variavel mensagem esta correta. Falta devolver o valor."
        },
        {
          "level": 2,
          "text": "Use return no final da funcao."
        },
        {
          "level": 3,
          "text": "Return mensagem no final da funcao."
        }
      ],
      "solution": "function criarMensagem(nome) {\n  const mensagem = \"Ola, \" + nome;\n  return mensagem;\n}",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-if-1",
      "lesson_id": "lesson-js-conditionals",
      "type": "blank",
      "prompt": "Complete a condicao com a variavel correta.",
      "starter_code": "if ({{blank1}} >= 18) {\n  console.log(\"acesso permitido\");\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "idade",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no dado que esta sendo comparado com 18."
        },
        {
          "level": 2,
          "text": "A variavel representa a idade da pessoa."
        },
        {
          "level": 3,
          "text": "Resposta: idade"
        }
      ],
      "solution": "if (idade >= 18) {\n  console.log(\"acesso permitido\");\n}",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-if-2",
      "lesson_id": "lesson-js-conditionals",
      "type": "code",
      "prompt": "Implemente a funcao isPar que retorna true para numeros pares.",
      "starter_code": "function isPar(n) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "2 e par",
              "code": "assert(isPar(2) === true, '2 deve ser par');"
            },
            {
              "name": "3 e impar",
              "code": "assert(isPar(3) === false, '3 deve ser impar');"
            },
            {
              "name": "0 e par",
              "code": "assert(isPar(0) === true, '0 deve ser par');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use o operador de resto (%)."
        },
        {
          "level": 2,
          "text": "Numero par deixa resto 0 ao dividir por 2."
        },
        {
          "level": 3,
          "text": "return n % 2 === 0;"
        }
      ],
      "solution": "function isPar(n) {\n  return n % 2 === 0;\n}",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-if-3",
      "lesson_id": "lesson-js-conditionals",
      "type": "bugfix",
      "prompt": "Corrija a comparacao para que 18 anos tambem seja permitido.",
      "starter_code": "function podeDirigir(idade) {\n  return idade > 18;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "18 deve ser permitido",
              "code": "assert(podeDirigir(18) === true, '18 deve ser permitido');"
            },
            {
              "name": "17 deve ser negado",
              "code": "assert(podeDirigir(17) === false, '17 deve ser negado');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A regra correta e maior ou igual a 18."
        },
        {
          "level": 2,
          "text": "Troque > por >=."
        },
        {
          "level": 3,
          "text": "return idade >= 18;"
        }
      ],
      "solution": "function podeDirigir(idade) {\n  return idade >= 18;\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-fn-1",
      "lesson_id": "lesson-js-functions",
      "type": "blank",
      "prompt": "Complete o nome da funcao de soma.",
      "starter_code": "function {{blank1}}(a, b) {\n  return a + b;\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "soma",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use um nome que indique claramente a acao."
        },
        {
          "level": 2,
          "text": "A funcao adiciona dois numeros."
        },
        {
          "level": 3,
          "text": "Resposta: soma"
        }
      ],
      "solution": "function soma(a, b) {\n  return a + b;\n}",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-fn-2",
      "lesson_id": "lesson-js-functions",
      "type": "code",
      "prompt": "Crie uma arrow function chamada dobro que multiplica por 2.",
      "starter_code": "// escreva aqui",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "dobro e funcao",
              "code": "assert(typeof dobro === 'function', 'dobro deve ser funcao');"
            },
            {
              "name": "dobro de 4",
              "code": "assert(dobro(4) === 8, 'dobro de 4 deve ser 8');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use const para armazenar a funcao."
        },
        {
          "level": 2,
          "text": "Sintaxe: (parametro) => expressao."
        },
        {
          "level": 3,
          "text": "const dobro = (n) => n * 2;"
        }
      ],
      "solution": "const dobro = (n) => n * 2;",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-fn-3",
      "lesson_id": "lesson-js-functions",
      "type": "code",
      "prompt": "Implemente a funcao saudacao que retorna 'Ola, <nome>'.",
      "starter_code": "function saudacao(nome) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "saudacao inclui nome",
              "code": "assert(saudacao('Lia') === 'Ola, Lia', 'saudacao deve incluir nome');"
            },
            {
              "name": "saudacao com outro nome",
              "code": "assert(saudacao('Caio') === 'Ola, Caio', 'deve funcionar para qualquer nome');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Retorne uma string usando o parametro nome."
        },
        {
          "level": 2,
          "text": "Voce pode usar concatenacao ou template string."
        },
        {
          "level": 3,
          "text": "return 'Ola, ' + nome;"
        }
      ],
      "solution": "function saudacao(nome) {\n  return 'Ola, ' + nome;\n}",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-fn-4",
      "lesson_id": "lesson-js-functions",
      "type": "bugfix",
      "prompt": "Corrija a funcao para usar largura e altura no calculo da area.",
      "starter_code": "function areaRetangulo(largura, altura) {\n  return largura * largura;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "area correta",
              "code": "assert(areaRetangulo(3, 4) === 12, 'area deve ser largura * altura');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A altura foi ignorada no codigo atual."
        },
        {
          "level": 2,
          "text": "Multiplique largura por altura."
        },
        {
          "level": 3,
          "text": "return largura * altura;"
        }
      ],
      "solution": "function areaRetangulo(largura, altura) {\n  return largura * altura;\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-loop-1",
      "lesson_id": "lesson-js-loops",
      "type": "blank",
      "prompt": "Complete o limite do for para repetir 5 vezes (0 ate 4).",
      "starter_code": "for (let i = 0; i < {{blank1}}; i++) {\n  console.log(i);\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "5",
              "placeholder": "_"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "O for comeca em 0."
        },
        {
          "level": 2,
          "text": "Para executar 5 vezes, o ultimo valor de i deve ser 4."
        },
        {
          "level": 3,
          "text": "Resposta: 5"
        }
      ],
      "solution": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-loop-2",
      "lesson_id": "lesson-js-loops",
      "type": "code",
      "prompt": "Crie a funcao somaAte(n) que soma todos os numeros de 1 ate n.",
      "starter_code": "function somaAte(n) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "funcao existe",
              "code": "assert(typeof somaAte === 'function', 'somaAte deve ser funcao');"
            },
            {
              "name": "somaAte(1)",
              "code": "assert(somaAte(1) === 1, 'somaAte(1) deve ser 1');"
            },
            {
              "name": "somaAte(4)",
              "code": "assert(somaAte(4) === 10, 'somaAte(4) deve ser 10');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Crie uma variavel acumuladora com valor inicial 0."
        },
        {
          "level": 2,
          "text": "Use for de 1 ate n, somando cada valor no acumulador."
        },
        {
          "level": 3,
          "text": "No final, retorne o acumulador."
        }
      ],
      "solution": "function somaAte(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i++) {\n    total += i;\n  }\n  return total;\n}",
      "difficulty": "medium",
      "estimated_time": 75
    },
    {
      "id": "ex-js-loop-3",
      "lesson_id": "lesson-js-loops",
      "type": "bugfix",
      "prompt": "Corrija o loop para ele terminar e retornar 3.",
      "starter_code": "function contarAteTres() {\n  let numero = 0;\n  while (numero < 3) {\n    numero = numero + 0;\n  }\n  return numero;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "deve retornar 3",
              "code": "assert(contarAteTres() === 3, 'funcao deve retornar 3');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Dentro do while, o valor precisa mudar a cada volta."
        },
        {
          "level": 2,
          "text": "Some 1 em numero a cada iteracao."
        },
        {
          "level": 3,
          "text": "numero = numero + 1;"
        }
      ],
      "solution": "function contarAteTres() {\n  let numero = 0;\n  while (numero < 3) {\n    numero = numero + 1;\n  }\n  return numero;\n}",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-arr-1",
      "lesson_id": "lesson-js-arrays",
      "type": "blank",
      "prompt": "Complete com a propriedade que informa quantos itens existem no array.",
      "starter_code": "const frutas = ['maca', 'banana', 'uva'];\nconst totalFrutas = frutas.{{blank1}};",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "length",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "E uma propriedade nativa de arrays."
        },
        {
          "level": 2,
          "text": "Comeca com a letra l."
        },
        {
          "level": 3,
          "text": "Resposta: length"
        }
      ],
      "solution": "const frutas = ['maca', 'banana', 'uva'];\nconst totalFrutas = frutas.length;",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-arr-2",
      "lesson_id": "lesson-js-arrays",
      "type": "code",
      "prompt": "Implemente primeiroItem(lista) para retornar o primeiro elemento do array.",
      "starter_code": "function primeiroItem(lista) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna primeiro item",
              "code": "assert(primeiroItem(['a', 'b', 'c']) === 'a', 'deve retornar o primeiro item');"
            },
            {
              "name": "retorna primeiro numero",
              "code": "assert(primeiroItem([10, 20]) === 10, 'deve funcionar com numeros');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Lembre que o primeiro indice de um array e 0."
        },
        {
          "level": 2,
          "text": "Acesso por colchetes: lista[indice]."
        },
        {
          "level": 3,
          "text": "return lista[0];"
        }
      ],
      "solution": "function primeiroItem(lista) {\n  return lista[0];\n}",
      "difficulty": "easy",
      "estimated_time": 50
    },
    {
      "id": "ex-js-arr-3",
      "lesson_id": "lesson-js-arrays",
      "type": "bugfix",
      "prompt": "Corrija a funcao para adicionar tarefa no final da lista.",
      "starter_code": "function adicionarTarefa(lista, tarefa) {\n  lista.pop(tarefa);\n  return lista;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "adiciona tarefa no final",
              "code": "const tarefas = ['estudar']; const resultado = adicionarTarefa(tarefas, 'praticar'); assert(resultado.length === 2, 'deve ter 2 itens');"
            },
            {
              "name": "ultimo item deve ser tarefa nova",
              "code": "const tarefas = ['estudar']; const resultado = adicionarTarefa(tarefas, 'praticar'); assert(resultado[1] === 'praticar', 'deve adicionar no final');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "pop remove item; aqui voce precisa adicionar."
        },
        {
          "level": 2,
          "text": "Use push para incluir no final do array."
        },
        {
          "level": 3,
          "text": "lista.push(tarefa);"
        }
      ],
      "solution": "function adicionarTarefa(lista, tarefa) {\n  lista.push(tarefa);\n  return lista;\n}",
      "difficulty": "medium",
      "estimated_time": 60
    },
    {
      "id": "ex-js-obj-1",
      "lesson_id": "lesson-js-objects",
      "type": "blank",
      "prompt": "Complete o acesso para pegar o nome no objeto usuario.",
      "starter_code": "const usuario = { nome: 'Lia', idade: 20 };\nconst nomeUsuario = usuario.{{blank1}};",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "nome",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use o nome da propriedade que guarda texto."
        },
        {
          "level": 2,
          "text": "A propriedade e a mesma definida no objeto literal."
        },
        {
          "level": 3,
          "text": "Resposta: nome"
        }
      ],
      "solution": "const usuario = { nome: 'Lia', idade: 20 };\nconst nomeUsuario = usuario.nome;",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-obj-2",
      "lesson_id": "lesson-js-objects",
      "type": "code",
      "prompt": "Crie a funcao criarProduto(nome, preco) que retorna um objeto com essas propriedades.",
      "starter_code": "function criarProduto(nome, preco) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna objeto",
              "code": "const produto = criarProduto('Caderno', 20); assert(typeof produto === 'object', 'deve retornar objeto');"
            },
            {
              "name": "nome e preco corretos",
              "code": "const produto = criarProduto('Caderno', 20); assert(produto.nome === 'Caderno' && produto.preco === 20, 'propriedades incorretas');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Retorne um objeto literal com chaves nome e preco."
        },
        {
          "level": 2,
          "text": "Sintaxe: return { chave: valor };"
        },
        {
          "level": 3,
          "text": "return { nome, preco };"
        }
      ],
      "solution": "function criarProduto(nome, preco) {\n  return { nome, preco };\n}",
      "difficulty": "medium",
      "estimated_time": 65
    },
    {
      "id": "ex-js-obj-3",
      "lesson_id": "lesson-js-objects",
      "type": "bugfix",
      "prompt": "Corrija o calculo para aplicar desconto percentual no preco.",
      "starter_code": "function aplicarDesconto(produto, percentual) {\n  produto.preco = produto.preco + percentual;\n  return produto;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "desconto de 10 por cento",
              "code": "const produto = { preco: 200 }; const atualizado = aplicarDesconto(produto, 10); assert(atualizado.preco === 180, 'preco final deve ser 180');"
            },
            {
              "name": "desconto de 25 por cento",
              "code": "const produto = { preco: 80 }; const atualizado = aplicarDesconto(produto, 25); assert(atualizado.preco === 60, 'preco final deve ser 60');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Percentual nao e valor fixo. Voce precisa calcular uma parte do preco."
        },
        {
          "level": 2,
          "text": "Formule: preco - preco * (percentual / 100)."
        },
        {
          "level": 3,
          "text": "produto.preco = produto.preco - produto.preco * (percentual / 100);"
        }
      ],
      "solution": "function aplicarDesconto(produto, percentual) {\n  produto.preco = produto.preco - produto.preco * (percentual / 100);\n  return produto;\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-str-1",
      "lesson_id": "lesson-js-strings",
      "type": "blank",
      "prompt": "Complete com o metodo que remove espacos no inicio e no fim da string.",
      "starter_code": "const frase = '  JavaScript  ';\nconst limpa = frase.{{blank1}}();",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "trim",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "O metodo remove espacos extras das bordas."
        },
        {
          "level": 2,
          "text": "Tem quatro letras."
        },
        {
          "level": 3,
          "text": "Resposta: trim"
        }
      ],
      "solution": "const frase = '  JavaScript  ';\nconst limpa = frase.trim();",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-str-2",
      "lesson_id": "lesson-js-strings",
      "type": "code",
      "prompt": "Implemente criarSlug(texto) para retornar minusculo, sem espacos nas pontas e com espacos trocados por hifen.",
      "starter_code": "function criarSlug(texto) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "slug simples",
              "code": "assert(criarSlug('Meu Curso JS') === 'meu-curso-js', 'slug deve trocar espacos por hifen e reduzir para minusculo');"
            },
            {
              "name": "remove espacos extras",
              "code": "assert(criarSlug('  Ola Mundo  ') === 'ola-mundo', 'deve remover espacos nas pontas');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use trim() e toLowerCase() antes de montar o slug."
        },
        {
          "level": 2,
          "text": "Voce pode usar split(' ') e join('-')."
        },
        {
          "level": 3,
          "text": "return texto.trim().toLowerCase().split(' ').filter(Boolean).join('-');"
        }
      ],
      "solution": "function criarSlug(texto) {\n  return texto.trim().toLowerCase().split(' ').filter(Boolean).join('-');\n}",
      "difficulty": "medium",
      "estimated_time": 75
    },
    {
      "id": "ex-js-str-3",
      "lesson_id": "lesson-js-strings",
      "type": "bugfix",
      "prompt": "Corrija a funcao para retornar o texto com primeira letra maiuscula.",
      "starter_code": "function primeiraLetraMaiuscula(nome) {\n  return nome[0].toUpperCase + nome.slice(1);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "capitaliza ana",
              "code": "assert(primeiraLetraMaiuscula('ana') === 'Ana', 'deve retornar Ana');"
            },
            {
              "name": "capitaliza jose",
              "code": "assert(primeiraLetraMaiuscula('jose') === 'Jose', 'deve retornar Jose');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "toUpperCase e um metodo e precisa ser chamado."
        },
        {
          "level": 2,
          "text": "Adicione parenteses apos toUpperCase."
        },
        {
          "level": 3,
          "text": "nome[0].toUpperCase() + nome.slice(1)"
        }
      ],
      "solution": "function primeiraLetraMaiuscula(nome) {\n  return nome[0].toUpperCase() + nome.slice(1);\n}",
      "difficulty": "easy",
      "estimated_time": 50
    },
    {
      "id": "ex-js-logic-1",
      "lesson_id": "lesson-js-logic",
      "type": "blank",
      "prompt": "Complete com o operador de igualdade estrita.",
      "starter_code": "if (status {{blank1}} 'ativo') {\n  console.log('ok');\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "===",
              "placeholder": "==="
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Evite comparacao solta para reduzir bugs."
        },
        {
          "level": 2,
          "text": "Use 3 sinais de igual."
        },
        {
          "level": 3,
          "text": "Resposta: ==="
        }
      ],
      "solution": "if (status === 'ativo') {\n  console.log('ok');\n}",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-logic-2",
      "lesson_id": "lesson-js-logic",
      "type": "code",
      "prompt": "Implemente podeAcessarAreaPremium(logado, assinaturaAtiva). Deve retornar true somente quando as duas condicoes forem verdadeiras.",
      "starter_code": "function podeAcessarAreaPremium(logado, assinaturaAtiva) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "duas condicoes verdadeiras",
              "code": "assert(podeAcessarAreaPremium(true, true) === true, \"deve liberar quando ambos forem true\");"
            },
            {
              "name": "nao logado",
              "code": "assert(podeAcessarAreaPremium(false, true) === false, \"deve negar se nao estiver logado\");"
            },
            {
              "name": "sem assinatura",
              "code": "assert(podeAcessarAreaPremium(true, false) === false, \"deve negar se nao tiver assinatura\");"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use operador && para combinar as condicoes."
        },
        {
          "level": 2,
          "text": "A resposta e uma unica expressao booleana."
        },
        {
          "level": 3,
          "text": "return logado && assinaturaAtiva;"
        }
      ],
      "solution": "function podeAcessarAreaPremium(logado, assinaturaAtiva) {\n  return logado && assinaturaAtiva;\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-logic-3",
      "lesson_id": "lesson-js-logic",
      "type": "bugfix",
      "prompt": "Corrija a regra para considerar nota 7 como aprovado.",
      "starter_code": "function classificarNota(nota) {\n  if (nota > 7) {\n    return 'aprovado';\n  }\n  return 'reprovado';\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "nota 7 aprova",
              "code": "assert(classificarNota(7) === 'aprovado', 'nota 7 deve aprovar');"
            },
            {
              "name": "nota 6 reprova",
              "code": "assert(classificarNota(6) === 'reprovado', 'nota 6 deve reprovar');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A comparacao deve incluir o 7."
        },
        {
          "level": 2,
          "text": "Troque > por >=."
        },
        {
          "level": 3,
          "text": "if (nota >= 7) { ... }"
        }
      ],
      "solution": "function classificarNota(nota) {\n  if (nota >= 7) {\n    return 'aprovado';\n  }\n  return 'reprovado';\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-arrm-1",
      "lesson_id": "lesson-js-array-methods",
      "type": "blank",
      "prompt": "Complete com o metodo que transforma cada item do array.",
      "starter_code": "const numeros = [1, 2, 3];\nconst dobrados = numeros.{{blank1}}((n) => n * 2);",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "map",
              "placeholder": "___"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Esse metodo retorna um novo array transformado."
        },
        {
          "level": 2,
          "text": "Tem tres letras."
        },
        {
          "level": 3,
          "text": "Resposta: map"
        }
      ],
      "solution": "const numeros = [1, 2, 3];\nconst dobrados = numeros.map((n) => n * 2);",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-arrm-2",
      "lesson_id": "lesson-js-array-methods",
      "type": "code",
      "prompt": "Implemente filtrarPares(lista) usando filter para retornar somente numeros pares.",
      "starter_code": "function filtrarPares(lista) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "filtra pares",
              "code": "const resultado = filtrarPares([1, 2, 3, 4, 5, 6]); assert(JSON.stringify(resultado) === JSON.stringify([2, 4, 6]), 'deve retornar apenas pares');"
            },
            {
              "name": "lista sem pares",
              "code": "const resultado = filtrarPares([1, 3, 5]); assert(JSON.stringify(resultado) === JSON.stringify([]), 'deve retornar array vazio quando nao houver pares');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use lista.filter(...) com uma condicao booleana."
        },
        {
          "level": 2,
          "text": "Numero par: n % 2 === 0."
        },
        {
          "level": 3,
          "text": "return lista.filter((n) => n % 2 === 0);"
        }
      ],
      "solution": "function filtrarPares(lista) {\n  return lista.filter((n) => n % 2 === 0);\n}",
      "difficulty": "medium",
      "estimated_time": 65
    },
    {
      "id": "ex-js-arrm-3",
      "lesson_id": "lesson-js-array-methods",
      "type": "bugfix",
      "prompt": "Corrija a funcao para somar os precos corretamente com reduce.",
      "starter_code": "function totalCarrinho(itens) {\n  return itens.reduce((total, item) => total - item.preco, 0);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "soma dois itens",
              "code": "const itens = [{ preco: 20 }, { preco: 30 }]; assert(totalCarrinho(itens) === 50, 'deve somar os precos');"
            },
            {
              "name": "lista vazia",
              "code": "const itens = []; assert(totalCarrinho(itens) === 0, 'lista vazia deve retornar 0');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A operacao atual esta subtraindo em vez de somar."
        },
        {
          "level": 2,
          "text": "No callback do reduce, use + com item.preco."
        },
        {
          "level": 3,
          "text": "return itens.reduce((total, item) => total + item.preco, 0);"
        }
      ],
      "solution": "function totalCarrinho(itens) {\n  return itens.reduce((total, item) => total + item.preco, 0);\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-dom-1",
      "lesson_id": "lesson-js-dom-events",
      "type": "blank",
      "prompt": "Complete com o metodo usado para selecionar o primeiro elemento por seletor CSS.",
      "starter_code": "const botao = document.{{blank1}}('#enviar');",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "querySelector",
              "placeholder": "_____________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Esse metodo recebe seletores como #id, .classe e nome-da-tag."
        },
        {
          "level": 2,
          "text": "Ele retorna apenas o primeiro elemento encontrado."
        },
        {
          "level": 3,
          "text": "Resposta: querySelector"
        }
      ],
      "solution": "const botao = document.querySelector('#enviar');",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-dom-2",
      "lesson_id": "lesson-js-dom-events",
      "type": "code",
      "prompt": "Implemente atualizarTexto(doc, seletor, texto): selecione o elemento, atualize textContent e retorne true. Se nao existir, retorne false.",
      "starter_code": "function atualizarTexto(doc, seletor, texto) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "atualiza quando encontra elemento",
              "code": "const elemento = { textContent: 'antigo' }; const doc = { querySelector: (sel) => (sel === '.titulo' ? elemento : null) }; const ok = atualizarTexto(doc, '.titulo', 'Novo titulo'); assert(ok === true, 'deve retornar true quando atualizar'); assert(elemento.textContent === 'Novo titulo', 'deve atualizar textContent');"
            },
            {
              "name": "retorna false quando seletor nao existe",
              "code": "const doc = { querySelector: () => null }; const ok = atualizarTexto(doc, '.inexistente', 'Novo'); assert(ok === false, 'deve retornar false quando nao encontrar elemento');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Guarde o resultado de doc.querySelector(seletor) em uma variavel."
        },
        {
          "level": 2,
          "text": "Se elemento for null, retorne false; caso contrario atualize textContent."
        },
        {
          "level": 3,
          "text": "const el = doc.querySelector(seletor); if (!el) return false; el.textContent = texto; return true;"
        }
      ],
      "solution": "function atualizarTexto(doc, seletor, texto) {\n  const el = doc.querySelector(seletor);\n  if (!el) return false;\n  el.textContent = texto;\n  return true;\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-dom-3",
      "lesson_id": "lesson-js-dom-events",
      "type": "bugfix",
      "prompt": "Corrija a funcao para registrar o evento correto de clique.",
      "starter_code": "function registrarClique(botao, aoClicar) {\n  botao.addEventListener('mouseover', aoClicar);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "usa evento click",
              "code": "let evento = ''; let handler = null; const botao = { addEventListener: (nome, fn) => { evento = nome; handler = fn; } }; let contador = 0; registrarClique(botao, () => { contador += 1; }); assert(evento === 'click', 'evento deve ser click'); handler(); assert(contador === 1, 'handler deve ser chamado ao clicar');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A funcao esta ouvindo o evento errado."
        },
        {
          "level": 2,
          "text": "Troque 'mouseover' por 'click'."
        },
        {
          "level": 3,
          "text": "botao.addEventListener('click', aoClicar);"
        }
      ],
      "solution": "function registrarClique(botao, aoClicar) {\n  botao.addEventListener('click', aoClicar);\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-async-1",
      "lesson_id": "lesson-js-async",
      "type": "blank",
      "prompt": "Complete com o metodo usado para converter a resposta de API para objeto JavaScript.",
      "starter_code": "const resposta = await fetch(url);\nconst dados = await resposta.{{blank1}}();",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "json",
              "placeholder": "____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Esse metodo transforma o corpo da resposta em objeto."
        },
        {
          "level": 2,
          "text": "Tem quatro letras."
        },
        {
          "level": 3,
          "text": "Resposta: json"
        }
      ],
      "solution": "const resposta = await fetch(url);\nconst dados = await resposta.json();",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-async-2",
      "lesson_id": "lesson-js-async",
      "type": "code",
      "prompt": "Implemente a funcao async buscarNomeUsuario(fetchFn, url) que faz a requisicao e retorna dados.nome.",
      "starter_code": "async function buscarNomeUsuario(fetchFn, url) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna nome do json",
              "code": "const fetchFn = async (url) => ({ ok: true, json: async () => ({ nome: 'Lia', origem: url }) }); const nome = await buscarNomeUsuario(fetchFn, '/usuarios/1'); assert(nome === 'Lia', 'deve retornar nome vindo do json');"
            },
            {
              "name": "funciona com outro retorno",
              "code": "const fetchFn = async () => ({ ok: true, json: async () => ({ nome: 'Caio' }) }); const nome = await buscarNomeUsuario(fetchFn, '/qualquer'); assert(nome === 'Caio', 'deve funcionar para qualquer resposta valida');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use await ao chamar fetchFn(url)."
        },
        {
          "level": 2,
          "text": "Depois, use await resposta.json() para ler o corpo."
        },
        {
          "level": 3,
          "text": "return dados.nome;"
        }
      ],
      "solution": "async function buscarNomeUsuario(fetchFn, url) {\n  const resposta = await fetchFn(url);\n  const dados = await resposta.json();\n  return dados.nome;\n}",
      "difficulty": "medium",
      "estimated_time": 75
    },
    {
      "id": "ex-js-async-3",
      "lesson_id": "lesson-js-async",
      "type": "bugfix",
      "prompt": "Corrija a funcao para aguardar a resposta e retornar dados.total.",
      "starter_code": "async function obterTotalPedidos(fetchFn) {\n  const resposta = fetchFn('/pedidos');\n  const dados = resposta.json();\n  return dados.total;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna total 7",
              "code": "const fetchFn = async () => ({ json: async () => ({ total: 7 }) }); const total = await obterTotalPedidos(fetchFn); assert(total === 7, 'deve retornar total correto');"
            },
            {
              "name": "retorna total 0",
              "code": "const fetchFn = async () => ({ json: async () => ({ total: 0 }) }); const total = await obterTotalPedidos(fetchFn); assert(total === 0, 'deve funcionar com total zero');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Faltam awaits antes de fetchFn e de resposta.json()."
        },
        {
          "level": 2,
          "text": "Quando nao usa await, resposta e dados viram Promise, nao valor final."
        },
        {
          "level": 3,
          "text": "const resposta = await fetchFn('/pedidos'); const dados = await resposta.json();"
        }
      ],
      "solution": "async function obterTotalPedidos(fetchFn) {\n  const resposta = await fetchFn('/pedidos');\n  const dados = await resposta.json();\n  return dados.total;\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-err-1",
      "lesson_id": "lesson-js-error-handling",
      "type": "blank",
      "prompt": "Complete o parametro do catch para capturar o erro.",
      "starter_code": "try {\n  JSON.parse(texto);\n} catch ({{blank1}}) {\n  console.log('json invalido');\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "error",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use um nome simples para o objeto de erro."
        },
        {
          "level": 2,
          "text": "Nome mais comum: error."
        },
        {
          "level": 3,
          "text": "Resposta: error"
        }
      ],
      "solution": "try {\n  JSON.parse(texto);\n} catch (error) {\n  console.log('json invalido');\n}",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-err-2",
      "lesson_id": "lesson-js-error-handling",
      "type": "code",
      "prompt": "Implemente parseJsonSeguro(texto). Deve retornar objeto em JSON valido e null quando for invalido.",
      "starter_code": "function parseJsonSeguro(texto) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "json valido retorna objeto",
              "code": "const resultado = parseJsonSeguro('{\"nome\":\"Lia\"}'); assert(resultado && resultado.nome === 'Lia', 'deve retornar objeto para json valido');"
            },
            {
              "name": "json invalido retorna null",
              "code": "const resultado = parseJsonSeguro('{nome:Lia}'); assert(resultado === null, 'deve retornar null para json invalido');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use try/catch envolvendo JSON.parse."
        },
        {
          "level": 2,
          "text": "No try retorne o parse; no catch retorne null."
        },
        {
          "level": 3,
          "text": "try { return JSON.parse(texto); } catch (error) { return null; }"
        }
      ],
      "solution": "function parseJsonSeguro(texto) {\n  try {\n    return JSON.parse(texto);\n  } catch (error) {\n    return null;\n  }\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-err-3",
      "lesson_id": "lesson-js-error-handling",
      "type": "bugfix",
      "prompt": "Corrija a funcao para retornar null quando houver divisao por zero.",
      "starter_code": "function dividirSeguro(a, b) {\n  try {\n    return a / b;\n  } catch (error) {\n    return null;\n  }\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "divisao normal",
              "code": "assert(dividirSeguro(6, 3) === 2, \"deve dividir normalmente quando b for diferente de zero\");"
            },
            {
              "name": "divisao por zero retorna null",
              "code": "assert(dividirSeguro(6, 0) === null, \"divisao por zero deve retornar null\");"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Dividir por zero nao gera excecao automaticamente em JS."
        },
        {
          "level": 2,
          "text": "Antes de dividir, valide se b e zero."
        },
        {
          "level": 3,
          "text": "if (b === 0) throw new Error('divisao por zero');"
        }
      ],
      "solution": "function dividirSeguro(a, b) {\n  try {\n    if (b === 0) throw new Error('divisao por zero');\n    return a / b;\n  } catch (error) {\n    return null;\n  }\n}",
      "difficulty": "medium",
      "estimated_time": 65
    },
    {
      "id": "ex-js-promise-1",
      "lesson_id": "lesson-js-promises",
      "type": "blank",
      "prompt": "Complete com o construtor de promessa.",
      "starter_code": "function criarRespostaImediata() {\n  return new {{blank1}}((resolve) => resolve('ok'));\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Promise",
              "placeholder": "_______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Esse tipo representa resultado futuro de operacao assincrona."
        },
        {
          "level": 2,
          "text": "Comeca com letra maiuscula."
        },
        {
          "level": 3,
          "text": "Resposta: Promise"
        }
      ],
      "solution": "function criarRespostaImediata() {\n  return new Promise((resolve) => resolve('ok'));\n}",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-promise-2",
      "lesson_id": "lesson-js-promises",
      "type": "code",
      "prompt": "Implemente esperarValor(valor) como funcao async que aguarda uma Promise e retorna o valor final.",
      "starter_code": "async function esperarValor(valor) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna valor numerico",
              "code": "const resultado = await esperarValor(42); assert(resultado === 42, \"deve retornar o mesmo valor\");"
            },
            {
              "name": "retorna valor texto",
              "code": "const resultado = await esperarValor('js'); assert(resultado === 'js', 'deve funcionar com texto');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use Promise.resolve(valor) para criar uma promise com sucesso imediato."
        },
        {
          "level": 2,
          "text": "Use await para extrair o resultado da promise."
        },
        {
          "level": 3,
          "text": "const resultado = await Promise.resolve(valor); return resultado;"
        }
      ],
      "solution": "async function esperarValor(valor) {\n  const resultado = await Promise.resolve(valor);\n  return resultado;\n}",
      "difficulty": "medium",
      "estimated_time": 70
    },
    {
      "id": "ex-js-promise-3",
      "lesson_id": "lesson-js-promises",
      "type": "bugfix",
      "prompt": "Corrija a funcao para usar fallback quando a promessa principal falhar.",
      "starter_code": "function buscarComFallback(buscarPrimario, buscarSecundario) {\n  return buscarPrimario().then((dados) => dados);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "usa primario quando funciona",
              "code": "const resultado = await buscarComFallback(() => Promise.resolve('primario'), () => Promise.resolve('secundario')); assert(resultado === 'primario', 'deve manter resultado primario quando nao falhar');"
            },
            {
              "name": "usa secundario quando primario falha",
              "code": "const resultado = await buscarComFallback(() => Promise.reject(new Error('falhou')), () => Promise.resolve('secundario')); assert(resultado === 'secundario', 'deve usar fallback em caso de erro');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A funcao nao trata erro do primario."
        },
        {
          "level": 2,
          "text": "Encadeie um catch chamando buscarSecundario()."
        },
        {
          "level": 3,
          "text": "return buscarPrimario().catch(() => buscarSecundario());"
        }
      ],
      "solution": "function buscarComFallback(buscarPrimario, buscarSecundario) {\n  return buscarPrimario().catch(() => buscarSecundario());\n}",
      "difficulty": "medium",
      "estimated_time": 75
    },
    {
      "id": "ex-js-class-1",
      "lesson_id": "lesson-js-classes",
      "type": "blank",
      "prompt": "Complete com a palavra-chave para declarar classe.",
      "starter_code": "{{blank1}} Usuario {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "class",
              "placeholder": "_____"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Classes em JavaScript usam uma palavra reservada especifica."
        },
        {
          "level": 2,
          "text": "A palavra comeca com c."
        },
        {
          "level": 3,
          "text": "Resposta: class"
        }
      ],
      "solution": "class Usuario {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-class-2",
      "lesson_id": "lesson-js-classes",
      "type": "code",
      "prompt": "Crie uma classe Contador com constructor(valorInicial) e metodo incrementar() que soma 1 e retorna o novo valor.",
      "starter_code": "// escreva sua classe abaixo",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "classe existe",
              "code": "assert(typeof Contador === 'function', 'Contador deve ser uma classe/fun??o construtora');"
            },
            {
              "name": "incrementa corretamente",
              "code": "const c = new Contador(5); assert(c.incrementar() === 6, 'primeiro incremento deve retornar 6'); assert(c.incrementar() === 7, 'segundo incremento deve retornar 7');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Guarde valorInicial em this.valor dentro do constructor."
        },
        {
          "level": 2,
          "text": "No metodo incrementar, faca this.valor += 1."
        },
        {
          "level": 3,
          "text": "Retorne this.valor apos incrementar."
        }
      ],
      "solution": "class Contador {\n  constructor(valorInicial) {\n    this.valor = valorInicial;\n  }\n\n  incrementar() {\n    this.valor += 1;\n    return this.valor;\n  }\n}",
      "difficulty": "medium",
      "estimated_time": 80
    },
    {
      "id": "ex-js-class-3",
      "lesson_id": "lesson-js-classes",
      "type": "bugfix",
      "prompt": "Corrija a classe para retornar o nome da conta corretamente.",
      "starter_code": "class Conta {\n  constructor(nome) {\n    this.nome = nome;\n  }\n\n  getNome() {\n    return nome;\n  }\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna nome da instancia",
              "code": "const conta = new Conta('Plano Pro'); assert(conta.getNome() === 'Plano Pro', 'getNome deve retornar nome da conta');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Dentro de metodo de classe, propriedades da instancia usam this."
        },
        {
          "level": 2,
          "text": "Troque nome por this.nome."
        },
        {
          "level": 3,
          "text": "return this.nome;"
        }
      ],
      "solution": "class Conta {\n  constructor(nome) {\n    this.nome = nome;\n  }\n\n  getNome() {\n    return this.nome;\n  }\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-mod-1",
      "lesson_id": "lesson-js-modularizacao",
      "type": "blank",
      "prompt": "Complete o nome do objeto que representa um modulo de calculo.",
      "starter_code": "const {{blank1}} = {\n  somar(a, b) { return a + b; }\n};",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "moduloCalculo",
              "placeholder": "______________"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use o nome pedido no enunciado."
        },
        {
          "level": 2,
          "text": "Comeca com modulo e termina com Calculo."
        },
        {
          "level": 3,
          "text": "Resposta: moduloCalculo"
        }
      ],
      "solution": "const moduloCalculo = {\n  somar(a, b) { return a + b; }\n};",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-mod-2",
      "lesson_id": "lesson-js-modularizacao",
      "type": "code",
      "prompt": "Crie a funcao criarModuloUsuario() que retorna um objeto com dois metodos: normalizarNome(nome) e gerarSlug(nome).",
      "starter_code": "function criarModuloUsuario() {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna metodos esperados",
              "code": "const modulo = criarModuloUsuario(); assert(typeof modulo.normalizarNome === 'function', 'deve ter normalizarNome'); assert(typeof modulo.gerarSlug === 'function', 'deve ter gerarSlug');"
            },
            {
              "name": "normaliza nome",
              "code": "const modulo = criarModuloUsuario(); assert(modulo.normalizarNome('  liA  ') === 'Lia', 'normalizarNome deve ajustar espacos e capitalizacao');"
            },
            {
              "name": "gera slug",
              "code": "const modulo = criarModuloUsuario(); assert(modulo.gerarSlug('  Curso JS Basico  ') === 'curso-js-basico', 'gerarSlug deve criar slug valido');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Retorne um objeto com as duas funcoes dentro."
        },
        {
          "level": 2,
          "text": "normalizarNome: trim + primeira letra maiuscula + resto minusculo."
        },
        {
          "level": 3,
          "text": "gerarSlug: trim + toLowerCase + split(' ') + filter(Boolean) + join('-')."
        }
      ],
      "solution": "function criarModuloUsuario() {\n  return {\n    normalizarNome(nome) {\n      const limpo = nome.trim().toLowerCase();\n      return limpo[0].toUpperCase() + limpo.slice(1);\n    },\n    gerarSlug(nome) {\n      return nome.trim().toLowerCase().split(' ').filter(Boolean).join('-');\n    }\n  };\n}",
      "difficulty": "medium",
      "estimated_time": 90
    },
    {
      "id": "ex-js-mod-3",
      "lesson_id": "lesson-js-modularizacao",
      "type": "bugfix",
      "prompt": "Corrija a funcao para delegar validacao ao modulo recebido por parametro.",
      "starter_code": "function validarComModulo(modulo, email) {\n  return validarEmail(email);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "usa metodo do modulo",
              "code": "let chamado = 0; const modulo = { validarEmail(valor) { chamado += 1; return valor.includes('@'); } }; const ok = validarComModulo(modulo, 'lia@email.com'); assert(ok === true, 'deve validar email correto'); assert(chamado === 1, 'deve chamar metodo do modulo uma vez');"
            },
            {
              "name": "retorna false para email invalido",
              "code": "const modulo = { validarEmail(valor) { return valor.includes('@'); } }; const ok = validarComModulo(modulo, 'email-invalido'); assert(ok === false, 'deve retornar false para email sem @');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A funcao precisa usar o parametro modulo."
        },
        {
          "level": 2,
          "text": "Chame modulo.validarEmail(email)."
        },
        {
          "level": 3,
          "text": "return modulo.validarEmail(email);"
        }
      ],
      "solution": "function validarComModulo(modulo, email) {\n  return modulo.validarEmail(email);\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-test-1",
      "lesson_id": "lesson-js-testing",
      "type": "blank",
      "prompt": "Complete com o nome da funcao usada para validar condicoes em testes.",
      "starter_code": "{{blank1}}(soma(2, 2) === 4, \"2 + 2 deve ser 4\");",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "assert",
              "placeholder": "______"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Essa funcao ja aparece nos testes autom?ticos dos exercicios."
        },
        {
          "level": 2,
          "text": "Comeca com a letra a."
        },
        {
          "level": 3,
          "text": "Resposta: assert"
        }
      ],
      "solution": "assert(soma(2, 2) === 4, \"2 + 2 deve ser 4\");",
      "difficulty": "easy",
      "estimated_time": 30
    },
    {
      "id": "ex-js-test-2",
      "lesson_id": "lesson-js-testing",
      "type": "code",
      "prompt": "Implemente a funcao verificarParidade(fnIsPar) que retorna true somente se a funcao passar nos testes basicos de paridade.",
      "starter_code": "function verificarParidade(fnIsPar) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna true para implementacao correta",
              "code": "const ok = verificarParidade((n) => n % 2 === 0); assert(ok === true, \"deve retornar true para funcao correta\");"
            },
            {
              "name": "retorna false para implementacao incorreta",
              "code": "const ok = verificarParidade(() => true); assert(ok === false, \"deve retornar false para funcao incorreta\");"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Crie um bloco try/catch e rode asserts dentro dele."
        },
        {
          "level": 2,
          "text": "Teste ao menos dois cenarios: 2 -> true e 3 -> false."
        },
        {
          "level": 3,
          "text": "Se nenhum assert falhar, retorne true; no catch, retorne false."
        }
      ],
      "solution": "function verificarParidade(fnIsPar) {\n  try {\n    if (fnIsPar(2) !== true) throw new Error(\"falhou no 2\");\n    if (fnIsPar(3) !== false) throw new Error(\"falhou no 3\");\n    return true;\n  } catch (error) {\n    return false;\n  }\n}",
      "difficulty": "medium",
      "estimated_time": 80
    },
    {
      "id": "ex-js-test-3",
      "lesson_id": "lesson-js-testing",
      "type": "bugfix",
      "prompt": "Corrija a funcao para validar todos os cenarios de teste e retornar false se qualquer um falhar.",
      "starter_code": "function executarCenarios(fn, cenarios) {\n  for (const cenario of cenarios) {\n    if (fn(cenario.entrada) === cenario.esperado) {\n      return true;\n    }\n  }\n  return false;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna true quando todos passam",
              "code": "const cenarios = [{ entrada: 2, esperado: 4 }, { entrada: 3, esperado: 6 }]; const ok = executarCenarios((n) => n * 2, cenarios); assert(ok === true, 'deve retornar true quando todos os cenarios passam');"
            },
            {
              "name": "retorna false quando um falha",
              "code": "const cenarios = [{ entrada: 2, esperado: 4 }, { entrada: 3, esperado: 7 }]; const ok = executarCenarios((n) => n * 2, cenarios); assert(ok === false, 'deve retornar false quando qualquer cenario falha');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A versao atual retorna true cedo demais, no primeiro acerto."
        },
        {
          "level": 2,
          "text": "Se encontrar falha, retorne false imediatamente. Se terminar o loop sem falha, retorne true."
        },
        {
          "level": 3,
          "text": "Use if (fn(...) !== esperado) return false; ao final return true."
        }
      ],
      "solution": "function executarCenarios(fn, cenarios) {\n  for (const cenario of cenarios) {\n    if (fn(cenario.entrada) !== cenario.esperado) {\n      return false;\n    }\n  }\n  return true;\n}",
      "difficulty": "medium",
      "estimated_time": 70
    }
  ]
};

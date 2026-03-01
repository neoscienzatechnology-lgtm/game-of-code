import type { LearningSeed } from '@/types/learning';

export const learningSeed: LearningSeed = {
  "modules": [
    {
      "id": "module-html-basics",
      "language": "html",
      "title": "HTML Básico",
      "description": "Trilha completa de HTML: estrutura, semântica, formularios, SEO e boas práticas.",
      "order": 1,
      "tags": [
        "html",
        "estrutura",
        "semântica",
        "seo"
      ]
    },
    {
      "id": "module-css-basics",
      "language": "css",
      "title": "CSS Básico",
      "description": "Trilha completa de CSS: seletores, box model, layout, responsividade e animações.",
      "order": 2,
      "tags": [
        "css",
        "layout",
        "responsivo",
        "animação"
      ]
    },
    {
      "id": "module-js-basics",
      "language": "javascript",
      "title": "JavaScript Básico",
      "description": "Trilha prática para sair do zero com explicacoes curtas, exemplos reais e exercicios guiados.",
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
      "content": "Objetivo: Entenda a diferença entre internet e Web.\n\nFato-chave: A internet é a infraestrutura física (cabos, roteadores, servidores). A Web é um serviço que roda sobre ela — formada por páginas HTML acessadas via navegador usando o protocolo HTTP ou HTTPS.\n\nExemplo de uso: Quando você digita https://google.com, o navegador envia uma requisição HTTP ao servidor, que devolve um arquivo HTML. O navegador interpreta esse HTML e exibe a página.\n\nUso comum: Sites, aplicações web, dashboards, sistemas de e-commerce e blogs — tudo funciona sobre a Web.\n\nDica prática: Abra o DevTools (F12) → aba Network e recarregue uma página. Você verá cada arquivo solicitado: HTML, CSS, JS, imagens e fontes.",
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
      "content": "Objetivo: Descubra o papel do HTML na web.\n\nFato-chave: HTML (HyperText Markup Language) é uma linguagem de marcação que define a estrutura e o significado semântico do conteúdo. Ele não controla a aparência — isso é trabalho do CSS.\n\nExemplo de uso:\n<h1>Meu Site</h1>\n<p>Bem-vindo ao meu primeiro site!</p>\n<a href=\"sobre.html\">Saiba mais</a>\n\nUso comum: Todo site tem pelo menos um arquivo HTML como ponto de entrada. HTML é o esqueleto sobre o qual CSS e JavaScript trabalham.\n\nDica prática: Use o validador validator.w3.org para encontrar erros de HTML. O navegador tolera erros silenciosamente, mas eles causam problemas em acessibilidade e SEO.",
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
      "content": "Objetivo: Entenda a responsabilidade de cada tecnologia da web.\n\nFato-chave: As três tecnologias têm papéis distintos: HTML define O QUÊ (estrutura e conteúdo), CSS define COMO (aparência e layout) e JavaScript define O COMPORTAMENTO (interações e lógica dinâmica).\n\nExemplo de uso:\n<!-- HTML: estrutura -->\n<button id=\"btn\">Clique aqui</button>\n\n/* CSS: aparência */\n#btn { background: blue; color: white; border-radius: 8px; }\n\n// JS: comportamento\ndocument.getElementById('btn').onclick = () => alert('Olá!');\n\nUso comum: Qualquer interface moderna combina as três camadas. Separá-las facilita manutenção e reuso de código.\n\nDica prática: Nunca misture CSS inline (style=\"...\") com HTML de conteúdo. Mantenha os arquivos separados para facilitar futuras mudanças de design sem tocar no HTML.",
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
      "content": "Objetivo: Entenda o processo de renderização do navegador.\n\nFato-chave: O navegador lê o HTML de cima para baixo, construindo uma árvore chamada DOM (Document Object Model). Em seguida, combina o DOM com o CSSOM (regras CSS) para criar a Render Tree e exibir a página.\n\nExemplo de uso: Se você colocar um <script> no <head> sem o atributo defer, ele bloqueia a análise do HTML até ser executado. Por isso, use defer ou coloque scripts antes de </body>.\n\nUso comum: Entender o fluxo de renderização é essencial para otimizar performance e evitar conteúdo que \"pisca\" ao carregar.\n\nDica prática: No DevTools (F12) → aba Performance, grave o carregamento da página para visualizar cada etapa: Parse HTML, Style, Layout, Paint e Composite.",
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
      "concept": "introducao-a-web-o-que-são-tags",
      "title": "O que são tags",
      "content": "Objetivo: Aprenda a sintaxe básica das tags HTML.\n\nFato-chave: Tags são delimitadas por < e >. A maioria vem em pares: <tag> abre e </tag> fecha. Algumas são void elements (auto-fechantes) como <br>, <img> e <input> — não possuem conteúdo interno nem tag de fechamento.\n\nExemplo de uso:\n<p>Isso é um parágrafo.</p>\n<img src=\"foto.jpg\" alt=\"Minha foto\">\n<input type=\"text\" placeholder=\"Digite aqui\">\n\nUso comum: O HTML5 define mais de 100 tags diferentes, cada uma com significado semântico específico. Usar a tag certa melhora acessibilidade e SEO.\n\nDica prática: Nunca use <br> para adicionar espaçamento visual — use margin CSS. A tag <br> é para quebras que fazem parte do conteúdo, como em endereços postais ou poemas.",
      "order": 5,
      "tags": [
        "introducao",
        "web",
        "que",
        "são",
        "tags"
      ]
    },
    {
      "id": "legacy-html-u1-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-o-que-são-atributos",
      "title": "O que são atributos",
      "content": "Objetivo: Adicione informações extras às tags com atributos.\n\nFato-chave: Atributos ficam dentro da tag de abertura no formato nome=\"valor\". Eles modificam o comportamento ou as propriedades do elemento. Um elemento pode ter vários atributos separados por espaço.\n\nExemplo de uso:\n<a href=\"https://exemplo.com\" target=\"_blank\" rel=\"noopener\">Abrir site</a>\n<img src=\"logo.png\" alt=\"Logo da empresa\" width=\"200\">\n<input type=\"email\" required placeholder=\"Seu e-mail\">\n\nUso comum: Atributos class e id conectam HTML ao CSS e JavaScript. Atributos como required e disabled controlam formulários.\n\nDica prática: Sempre coloque valores de atributos entre aspas duplas. Embora aspas sejam opcionais em alguns casos no HTML5, mantê-las evita erros e é uma boa prática universal.",
      "order": 6,
      "tags": [
        "introducao",
        "web",
        "que",
        "são",
        "atributos"
      ]
    },
    {
      "id": "legacy-html-u1-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "introducao-a-web-html-não-e-linguagem-de-programacao",
      "title": "HTML não e linguagem de programacao",
      "content": "Objetivo: Entenda a distinção entre linguagem de marcação e de programação.\n\nFato-chave: HTML é uma linguagem de marcação (markup language), não de programação. Ele não tem variáveis, condicionais (if/else) nem laços (for/while). HTML apenas declara o que existe na página — não o que fazer com esses dados.\n\nExemplo de uso:\n<!-- HTML não pode fazer isso. JavaScript pode: -->\nif (usuario.logado) {\n  document.querySelector('.menu').textContent = 'Sair';\n}\n\nUso comum: Entender essa distinção importa ao escolher o que aprender: HTML estrutura páginas, JavaScript as torna dinâmicas.\n\nDica prática: Para gerar HTML dinamicamente a partir de dados (banco de dados, API), use JavaScript no front-end ou linguagens como Python, PHP ou Node.js no servidor.",
      "order": 7,
      "tags": [
        "introducao",
        "web",
        "html",
        "não",
        "linguagem"
      ]
    },
    {
      "id": "legacy-html-u2-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-html-doctype-html",
      "title": "<!DOCTYPE html>",
      "content": "Objetivo: Entenda por que todo documento HTML começa com DOCTYPE.\n\nFato-chave: <!DOCTYPE html> não é uma tag — é uma instrução para o navegador que indica que o documento segue o padrão HTML5. Sem ela, navegadores antigos entram em \"Quirks Mode\", que renderiza páginas de forma imprevisível e diferente entre browsers.\n\nExemplo de uso:\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Meu Site</title>\n  </head>\n  <body>\n    <p>Conteúdo da página.</p>\n  </body>\n</html>\n\nUso comum: Presente em absolutamente todo arquivo HTML moderno. É sempre a primeira linha do documento.\n\nDica prática: Confirme o modo de renderização no DevTools: Console → digit document.compatMode. O valor \"CSS1Compat\" indica modo padrão (correto). \"BackCompat\" indica Quirks Mode (problema).",
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
      "content": "Objetivo: Conheça o elemento raiz de todo documento HTML.\n\nFato-chave: A tag <html> envolve todo o conteúdo da página e é a raiz da árvore DOM. O atributo lang define o idioma principal do documento — essencial para leitores de tela, tradução automática e indexação pelo Google.\n\nExemplo de uso:\n<html lang=\"pt-BR\">  <!-- Português do Brasil -->\n  ...\n</html>\n\n<!-- Outros idiomas: -->\n<html lang=\"en\">     <!-- Inglês -->\n<html lang=\"es\">     <!-- Espanhol -->\n<html lang=\"pt-PT\">  <!-- Português de Portugal -->\n\nUso comum: Todo documento HTML tem exatamente uma tag <html>. O lang é recomendado pelas diretrizes WCAG 2.1 de acessibilidade.\n\nDica prática: Use códigos IETF corretos: pt-BR, en-US, es-ES. Evite usar apenas \"pt\" quando o conteúdo é especificamente brasileiro — afeta leitores de tela e SEO regional.",
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
      "content": "Objetivo: Entenda o papel dos metadados no <head>.\n\nFato-chave: O <head> contém informações sobre a página que não aparecem no conteúdo visível. Inclui charset, viewport, título, links para CSS, meta tags de SEO e scripts com defer.\n\nExemplo de uso:\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Aprenda HTML do zero com exemplos práticos.\">\n  <title>Curso de HTML | Exemplo</title>\n  <link rel=\"stylesheet\" href=\"estilo.css\">\n</head>\n\nUso comum: O <head> bem estruturado melhora SEO, acessibilidade e desempenho. O Google lê as meta tags para indexar e exibir seu site nos resultados de busca.\n\nDica prática: A ordem dos elementos no <head> importa para performance: primeiro <meta charset>, depois <meta viewport>, depois o CSS. Scripts com defer podem vir por último.",
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
      "content": "Objetivo: Conheça onde vai todo o conteúdo visível da página.\n\nFato-chave: O <body> contém todo o conteúdo que o usuário vê e interage: textos, imagens, botões, formulários, vídeos. É único por página e deve ser organizado com elementos semânticos para melhor acessibilidade.\n\nExemplo de uso:\n<body>\n  <header>\n    <h1>Meu Blog</h1>\n    <nav>...</nav>\n  </header>\n  <main>\n    <article>...</article>\n  </main>\n  <footer>...</footer>\n</body>\n\nUso comum: Toda estrutura de página — menus, conteúdo, rodapé, formulários — vive dentro do <body>.\n\nDica prática: Coloque scripts que manipulam o DOM logo antes de </body> (ou use defer no <head>) para garantir que o HTML já foi completamente carregado quando o script executar.",
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
      "content": "Objetivo: Defina o título que aparece na aba do navegador.\n\nFato-chave: A tag <title> define o texto exibido na aba do navegador, nos resultados do Google e nos favoritos. É um dos fatores mais importantes de SEO on-page. Cada página deve ter um <title> único.\n\nExemplo de uso:\n<!-- Ruim (genérico, prejudica SEO): -->\n<title>Página</title>\n\n<!-- Bom (descritivo e único): -->\n<title>Como Fazer Bolo de Cenoura em 30 Minutos | Receitas da Maria</title>\n\nO ideal: entre 50–60 caracteres para não ser cortado nos resultados de busca.\n\nUso comum: SEO, abas do navegador, histórico de navegação, favoritos compartilhados.\n\nDica prática: Use o formato \"Tópico Principal | Nome do Site\". Evite títulos genéricos como \"Início\" ou \"Home\". Ferramentas como Google Search Console mostram como seus títulos aparecem nos resultados de busca.",
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
      "content": "Objetivo: Configure a codificação de caracteres do documento.\n\nFato-chave: O charset define como o navegador interpreta os bytes do arquivo HTML. UTF-8 é o padrão universal que suporta caracteres de todos os idiomas — incluindo acentos (ã, é, ç), emojis e ideogramas asiáticos.\n\nExemplo de uso:\n<head>\n  <meta charset=\"UTF-8\">   <!-- Sempre a primeira linha do <head> -->\n</head>\n\n<!-- Sem isso, acentos aparecem corrompidos: -->\n<!-- \"Olá\" vira \"OlÃ¡\" -->\n<!-- \"não\" vira \"nÃ£o\" -->\n\nUso comum: Obrigatório em 100% dos documentos HTML modernos. Sem ele, o site pode exibir caracteres corrompidos dependendo do sistema operacional do usuário.\n\nDica prática: O <meta charset> deve ser o PRIMEIRO elemento dentro do <head>, antes do <title>. Isso garante que o navegador saiba a codificação antes de tentar interpretar qualquer texto.",
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
      "content": "Objetivo: Torne seu site responsivo em dispositivos móveis.\n\nFato-chave: Sem a meta viewport, navegadores mobile exibem a página simulando uma tela de desktop e fazem zoom out, tornando o texto minúsculo. A meta viewport instrui o navegador a usar a largura real do dispositivo.\n\nExemplo de uso:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n<!-- NUNCA desabilite o zoom (prejudica acessibilidade): -->\n<meta name=\"viewport\" content=\"..., user-scalable=no\">  <!-- Evite! -->\n\nUso comum: Presente em 100% dos sites responsivos. É pré-requisito para que media queries CSS funcionem corretamente em celulares e tablets.\n\nDica prática: No DevTools (F12), pressione Ctrl+Shift+M para ativar o modo responsivo. Você pode simular iPhone, iPad e outros dispositivos sem precisar de um aparelho físico.",
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
      "content": "Objetivo: Documente e organize seu código com comentários.\n\nFato-chave: Comentários HTML ficam entre <!-- e --> e são ignorados pelo navegador. Eles servem para explicar o código, deixar lembretes para a equipe ou desativar partes do HTML temporariamente.\n\nExemplo de uso:\n<!-- Cabeçalho principal da página -->\n<header>\n  <h1>Meu Site</h1>\n</header>\n\n<!-- TODO: adicionar navegação responsiva aqui -->\n\n<!-- Seção desativada temporariamente:\n<div class=\"banner-antigo\">...</div>\n-->\n\nUso comum: Marcar seções em arquivos HTML longos, indicar onde terminam elementos, documentar decisões de arquitetura.\n\nDica prática: CUIDADO: comentários HTML são visíveis no código-fonte (Ctrl+U). Jamais insira senhas, tokens de API ou dados privados em comentários HTML — qualquer usuário pode lê-los.",
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
      "concept": "estrutura-do-html-indentação-e-organização",
      "title": "Indentação e organização",
      "content": "Objetivo: Escreva HTML limpo, legível e fácil de manter.\n\nFato-chave: Indentação é o recuo que mostra visualmente a hierarquia dos elementos. O padrão mais comum é 2 espaços por nível de aninhamento. Código bem indentado facilita debugging, revisão em equipe e manutenção a longo prazo.\n\nExemplo de uso:\n<!-- Mal indentado (difícil de ler): -->\n<div><ul><li>Item</li><li>Item</li></ul></div>\n\n<!-- Bem indentado (fácil de ler): -->\n<div>\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n</div>\n\nUso comum: Projetos profissionais sempre têm padrões de formatação definidos. Editores como VS Code indentam automaticamente ao pressionar Enter após uma tag de abertura.\n\nDica prática: Use Shift+Alt+F no VS Code para formatar o arquivo inteiro de uma vez. Instale a extensão Prettier para padronizar formatação automaticamente ao salvar.",
      "order": 16,
      "tags": [
        "estrutura",
        "html",
        "indentação",
        "organização"
      ]
    },
    {
      "id": "legacy-html-u3-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-títulos-h1-a-h6",
      "title": "Titulos <h1> a <h6>",
      "content": "Objetivo: Crie hierarquia de conteúdo com títulos semânticos.\n\nFato-chave: HTML tem 6 níveis de títulos: <h1> é o mais importante e <h6> o menos. Os títulos definem hierarquia de conteúdo — não tamanho de fonte (para isso, use CSS). Nunca pule níveis (de h2 direto para h4).\n\nExemplo de uso:\n<h1>Guia de Culinária Brasileira</h1>\n  <h2>Sobremesas</h2>\n    <h3>Bolos</h3>\n      <h4>Bolo de Cenoura com Cobertura de Chocolate</h4>\n\nUso comum: Motores de busca lêem títulos para entender a estrutura do conteúdo. Leitores de tela usam títulos para navegação rápida na página.\n\nDica prática: Cada página deve ter exatamente um <h1> — o título principal. A extensão \"HeadingsMap\" para Chrome exibe a hierarquia de títulos de qualquer página, útil para revisar sua própria estrutura.",
      "order": 17,
      "tags": [
        "texto",
        "conteúdo",
        "títulos"
      ]
    },
    {
      "id": "legacy-html-u3-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-paragrafos-p",
      "title": "Paragrafos <p>",
      "content": "Objetivo: Organize texto em blocos lógicos com parágrafos.\n\nFato-chave: A tag <p> define um bloco de texto. O navegador adiciona automaticamente margem acima e abaixo. Parágrafos são elementos de bloco — cada um ocupa sua própria linha. Nunca use <br><br> para simular parágrafo.\n\nExemplo de uso:\n<p>O HTML foi criado por Tim Berners-Lee em 1991.</p>\n<p>A versão atual, HTML5, foi padronizada pelo W3C em 2014.</p>\n\n<!-- Errado: simular parágrafo com quebras: -->\nPrimeiro bloco de texto...<br><br>Segundo bloco de texto...\n\nUso comum: Todo texto de artigos, notícias, descrições de produtos e documentações usa <p> para organizar o conteúdo.\n\nDica prática: Controle o espaçamento entre parágrafos com CSS: p { margin-bottom: 1rem; } — nunca use <br> para esse fim. Isso mantém o espaçamento consistente em todo o site.",
      "order": 18,
      "tags": [
        "texto",
        "conteúdo",
        "paragrafos"
      ]
    },
    {
      "id": "legacy-html-u3-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-quebra-de-linha-br",
      "title": "Quebra de linha <br>",
      "content": "Objetivo: Insira quebras de linha dentro de blocos de texto.\n\nFato-chave: <br> é um void element (auto-fechante) que força uma quebra de linha sem criar novo parágrafo. Use apenas quando a quebra é parte do significado do conteúdo — não para fins de espaçamento.\n\nExemplo de uso:\n<!-- Uso correto: endereço postal -->\n<address>\n  Rua das Flores, 123<br>\n  Jardim Primavera<br>\n  São Paulo — SP, 01234-567\n</address>\n\n<!-- Uso correto: trecho de poema -->\n<p>Rosas são vermelhas,<br>Violetas são azuis,<br>HTML é estrutura,<br>E CSS é o visual.</p>\n\nUso comum: Endereços, poemas, letras de música, código com quebras específicas de formatação.\n\nDica prática: Se você usa <br> para criar espaço visual entre elementos, esse é um sinal claro de que você precisa de CSS (margin ou padding), não de <br>.",
      "order": 19,
      "tags": [
        "texto",
        "conteúdo",
        "quebra",
        "linha"
      ]
    },
    {
      "id": "legacy-html-u3-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-linha-horizontal-hr",
      "title": "Linha horizontal <hr>",
      "content": "Objetivo: Separe seções temáticas com uma linha divisória semântica.\n\nFato-chave: <hr> (horizontal rule) representa uma quebra temática entre partes do conteúdo — como a mudança de assunto em um artigo. É um void element exibido como linha horizontal por padrão, mas totalmente estilizável com CSS.\n\nExemplo de uso:\n<article>\n  <h2>Capítulo 1: Introdução</h2>\n  <p>Texto do capítulo...</p>\n\n  <hr>\n\n  <h2>Capítulo 2: Desenvolvimento</h2>\n  <p>Texto do próximo capítulo...</p>\n</article>\n\nUso comum: Divisão entre seções de artigos, documentos técnicos ou formulários longos com múltiplas etapas.\n\nDica prática: Para estilizar, use CSS: hr { border: none; border-top: 2px solid #ccc; margin: 2rem 0; }. Para linhas meramente decorativas (sem mudança de tema), prefira um div com bordas CSS — semanticamente mais correto.",
      "order": 20,
      "tags": [
        "texto",
        "conteúdo",
        "linha",
        "horizontal"
      ]
    },
    {
      "id": "legacy-html-u3-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-negrito-strong",
      "title": "Negrito <strong>",
      "content": "Objetivo: Destaque texto com importância semântica alta.\n\nFato-chave: <strong> indica importância forte — não apenas negrito visual. Leitores de tela enfatizam a voz ao ler <strong>. Use para alertas críticos, termos-chave ou informações que o leitor jamais deve ignorar.\n\nExemplo de uso:\n<p><strong>Atenção:</strong> Nunca compartilhe sua senha com ninguém.</p>\n<p>O prazo final é <strong>31 de dezembro de 2025</strong>, sem prorrogação.</p>\n\n<!-- <b> é para negrito visual sem importância semântica: -->\n<p>Os produtos em <b>destaque</b> estão na vitrine central.</p>\n\nUso comum: Alertas, definições, termos-chave em documentação técnica, datas ou valores críticos.\n\nDica prática: Diferencie <strong> (importância semântica, afeta acessibilidade) de <b> (apenas visual). O estilo padrão é idêntico, mas o significado para tecnologias assistivas é diferente. Prefira <strong> na maioria dos casos.",
      "order": 21,
      "tags": [
        "texto",
        "conteúdo",
        "negrito",
        "strong"
      ]
    },
    {
      "id": "legacy-html-u3-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-italico-em",
      "title": "Italico <em>",
      "content": "Objetivo: Destaque texto com ênfase semântica que muda o sentido.\n\nFato-chave: <em> (emphasis) indica ênfase que altera o significado da frase — como se fosse a entonação na fala. Leitores de tela mudam o tom de voz ao ler <em>. Use quando a ênfase muda o sentido, não apenas a aparência.\n\nExemplo de uso:\n<p>Você precisa salvar o arquivo <em>antes</em> de fechar o editor.</p>\n<p>O framework não é obrigatório — o <em>JavaScript</em> em si é o que importa.</p>\n\n<!-- <i> é para itálico visual sem ênfase semântica: -->\n<p>O nome científico é <i>Homo sapiens</i>.</p>\n<p>Função de <i>callback</i> é executada assincronamente.</p>\n\nUso comum: Ênfase em instruções, termos em língua estrangeira, títulos de obras.\n\nDica prática: <em> pode ser aninhado com <strong>: <strong><em>Crítico:</em> leia com atenção.</strong>. Use <i> para itálico decorativo (termos técnicos em inglês, nomes científicos, etc.).",
      "order": 22,
      "tags": [
        "texto",
        "conteúdo",
        "italico"
      ]
    },
    {
      "id": "legacy-html-u3-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-texto-pre-formatado-pre",
      "title": "Texto pre-formatado <pre>",
      "content": "Objetivo: Preserve espaços e quebras de linha exatamente como escritos.\n\nFato-chave: HTML normalmente colapsa múltiplos espaços em um só e ignora quebras de linha no código. A tag <pre> (preformatted) preserva a formatação exata do texto — todos os espaços, tabs e newlines — e usa fonte monoespaçada por padrão.\n\nExemplo de uso:\n<pre>\n  Nome:  João Silva\n  Email: joao@email.com\n  Cargo: Desenvolvedor Front-end\n</pre>\n\n<!-- Combinado com <code> para blocos de código: -->\n<pre><code>function soma(a, b) {\n  return a + b;\n}\n\nconsole.log(soma(2, 3)); // 5\n</code></pre>\n\nUso comum: Exibir saídas de terminal, arte ASCII, código-fonte com indentação preservada.\n\nDica prática: Sempre combine <pre> com <code> para blocos de código. Estilize com CSS: pre { background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; }",
      "order": 23,
      "tags": [
        "texto",
        "conteúdo",
        "pre",
        "formatado"
      ]
    },
    {
      "id": "legacy-html-u3-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-codigo-code",
      "title": "Codigo <code>",
      "content": "Objetivo: Marque trechos de código dentro de texto corrido.\n\nFato-chave: <code> é um elemento inline que marca código no meio de um texto. Não preserva espaços como <pre> — é para nomes de funções, propriedades, comandos ou valores mencionados dentro de um parágrafo.\n\nExemplo de uso:\n<p>Use a propriedade <code>display: flex</code> para alinhar elementos.</p>\n<p>A função <code>console.log()</code> exibe valores no console do navegador.</p>\n<p>O arquivo principal deve se chamar <code>index.html</code>.</p>\n\nUso comum: Documentações técnicas, tutoriais, artigos de programação — qualquer texto que mencione código, comandos, nomes de arquivos ou propriedades CSS/JS.\n\nDica prática: Estilize o <code> inline com CSS para diferenciar visualmente do texto:\ncode { background: #f0f0f0; color: #d63384; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.9em; }",
      "order": 24,
      "tags": [
        "texto",
        "conteúdo",
        "codigo",
        "code"
      ]
    },
    {
      "id": "legacy-html-u3-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-conteúdo-citações-blockquote",
      "title": "Citacoes <blockquote>",
      "content": "Objetivo: Marque citações longas de fontes externas com semântica correta.\n\nFato-chave: <blockquote> define um bloco de citação proveniente de outra fonte. O atributo cite especifica a URL da fonte original (não visível na página, mas útil para ferramentas e SEO). Use <q> para citações curtas inline.\n\nExemplo de uso:\n<blockquote cite=\"https://www.w3.org/\">\n  <p>A missão do W3C é liderar a World Wide Web para que atinja seu pleno potencial.</p>\n  <footer>— <cite>World Wide Web Consortium (W3C)</cite></footer>\n</blockquote>\n\n<!-- Para citações curtas dentro de um parágrafo: -->\n<p>Tim Berners-Lee disse: <q>A Web é para todos.</q></p>\n\nUso comum: Artigos com citações de obras, entrevistas, depoimentos, trechos de documentações técnicas ou discursos.\n\nDica prática: O navegador adiciona aspas automáticas ao conteúdo de <q> no idioma definido pelo atributo lang da página. Sempre inclua a fonte da citação — melhora credibilidade e evita problemas de plágio.",
      "order": 25,
      "tags": [
        "texto",
        "conteúdo",
        "citações",
        "blockquote"
      ]
    },
    {
      "id": "legacy-html-u4-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-tag-a",
      "title": "Tag <a>",
      "content": "Objetivo: Crie links para conectar páginas e recursos.\n\nFato-chave: A tag <a> (anchor) é a base da Web — ela cria hyperlinks que conectam páginas, arquivos e seções. O atributo href define o destino. Sem <a>, não existiria navegação entre páginas.\n\nExemplo de uso:\n<a href=\"https://developer.mozilla.org\">MDN Web Docs</a>\n<a href=\"sobre.html\">Sobre nós</a>\n<a href=\"#contato\">Ir para Contato</a>\n<a href=\"mailto:email@exemplo.com\">Enviar e-mail</a>\n\nUso comum: Menus de navegação, botões que redirecionam, breadcrumbs, rodapés com links sociais e links dentro de texto corrido.\n\nDica prática: Use texto descritivo no link — nunca \"clique aqui\". Leitores de tela leem apenas o texto do link para navegar. Prefira \"Saiba mais sobre acessibilidade\" a \"Clique aqui\".",
      "order": 26,
      "tags": [
        "links",
        "navegação",
        "tag"
      ]
    },
    {
      "id": "legacy-html-u4-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-atributo-href",
      "title": "Atributo href",
      "content": "Objetivo: Defina o destino de um link com o atributo href.\n\nFato-chave: href (Hypertext Reference) é o atributo obrigatório da tag <a>. Pode receber: URL absoluta (https://...), URL relativa (pagina.html), âncora (#secao), e-mail (mailto:), telefone (tel:) ou JavaScript (javascript:void 0 — evitar).\n\nExemplo de uso:\n<!-- URL absoluta (outro site) -->\n<a href=\"https://github.com\">GitHub</a>\n\n<!-- URL relativa (mesma pasta) -->\n<a href=\"contato.html\">Contato</a>\n\n<!-- URL relativa (pasta acima) -->\n<a href=\"../index.html\">Início</a>\n\n<!-- Âncora na mesma página -->\n<a href=\"#sobre\">Sobre</a>\n\nUso comum: Toda navegação web depende de href correto. URLs relativas são preferidas para links internos — o site funciona em qualquer domínio.\n\nDica prática: Nunca use href=\"#\" para links que não redirecionam — cria rolar para o topo inesperado. Use href=\"javascript:void(0)\" ou um <button> com evento JS se precisar de um elemento clicável sem navegação.",
      "order": 27,
      "tags": [
        "links",
        "navegação",
        "atributo",
        "href"
      ]
    },
    {
      "id": "legacy-html-u4-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-links-externos",
      "title": "Links externos",
      "content": "Objetivo: Crie links que abrem outros sites corretamente.\n\nFato-chave: Links externos apontam para outros domínios e devem usar a URL completa com protocolo (https://). Boas práticas de segurança recomendam target=\"_blank\" + rel=\"noopener noreferrer\" para evitar que a página de destino acesse window.opener.\n\nExemplo de uso:\n<!-- Link externo seguro -->\n<a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Pesquisar no Google\n</a>\n\n<!-- Link externo sem abrir nova aba -->\n<a href=\"https://exemplo.com\">Visitar Exemplo</a>\n\nUso comum: Referências a fontes externas, redes sociais, documentações de terceiros, parceiros e afiliados.\n\nDica prática: Sempre adicione rel=\"noopener noreferrer\" quando usar target=\"_blank\". Sem isso, a nova aba pode manipular a página original via JavaScript — uma vulnerabilidade conhecida como \"reverse tabnapping\".",
      "order": 28,
      "tags": [
        "links",
        "navegação",
        "externos"
      ]
    },
    {
      "id": "legacy-html-u4-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-links-internos",
      "title": "Links internos",
      "content": "Objetivo: Navegue entre páginas do mesmo site com links internos.\n\nFato-chave: Links internos usam caminhos relativos — sem domínio. Isso faz o site funcionar em qualquer ambiente (localhost, staging, produção) sem necessidade de atualizar os links. O navegador resolve o caminho relativo a partir da URL atual.\n\nExemplo de uso:\n<!-- Da raiz do site -->\n<a href=\"sobre.html\">Sobre</a>\n<a href=\"blog/artigo.html\">Artigo</a>\n\n<!-- De dentro de uma subpasta -->\n<a href=\"../index.html\">Voltar ao início</a>\n<a href=\"./contato.html\">Contato</a>\n\n<!-- Caminho absoluto do site (barra inicial) -->\n<a href=\"/produtos\">Ver Produtos</a>\n\nUso comum: Menus, breadcrumbs, paginação, links entre seções do site, botões \"Próximo artigo\" / \"Artigo anterior\".\n\nDica prática: Use / (barra) no início para links absolutos do site: href=\"/contato\" sempre aponta para a raiz, independente de qual página você está. Use caminhos relativos (../outra.html) para projetos simples sem servidor.",
      "order": 29,
      "tags": [
        "links",
        "navegação",
        "internos"
      ]
    },
    {
      "id": "legacy-html-u4-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-ancoras",
      "title": "Ancoras",
      "content": "Objetivo: Crie links para seções específicas da mesma página.\n\nFato-chave: Âncoras funcionam em dois passos: (1) o elemento de destino recebe um atributo id e (2) o link usa href=\"#id\" para navegar até ele. Isso rola a página suavemente até a seção correspondente.\n\nExemplo de uso:\n<!-- Links de navegação -->\n<nav>\n  <a href=\"#sobre\">Sobre</a>\n  <a href=\"#servicos\">Serviços</a>\n  <a href=\"#contato\">Contato</a>\n</nav>\n\n<!-- Seções com IDs correspondentes -->\n<section id=\"sobre\">\n  <h2>Sobre Nós</h2>\n  ...\n</section>\n\n<section id=\"contato\">\n  <h2>Contato</h2>\n  ...\n</section>\n\nUso comum: Páginas longas de landing page, FAQs, documentações técnicas, páginas de políticas e tutoriais com índice.\n\nDica prática: Adicione scroll-behavior: smooth ao CSS global para criar rolagem suave: html { scroll-behavior: smooth; }. Também considere scroll-margin-top: 80px nas seções para compensar headers fixos.",
      "order": 30,
      "tags": [
        "links",
        "navegação",
        "ancoras"
      ]
    },
    {
      "id": "legacy-html-u4-l6",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-atributo-target",
      "title": "Atributo target",
      "content": "Objetivo: Controle onde o link abre com o atributo target.\n\nFato-chave: O atributo target define onde a página de destino é aberta. Os valores mais usados são _self (mesma aba, padrão) e _blank (nova aba). Evite _blank sem rel=\"noopener\" por questões de segurança.\n\nExemplo de uso:\n<!-- Abre na mesma aba (padrão) -->\n<a href=\"pagina.html\" target=\"_self\">Mesma aba</a>\n\n<!-- Abre em nova aba -->\n<a href=\"https://exemplo.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Nova aba\n</a>\n\n<!-- Outros valores menos comuns -->\n<a href=\"pagina.html\" target=\"_parent\">Frame pai</a>\n<a href=\"pagina.html\" target=\"_top\">Janela completa</a>\n\nUso comum: Links externos geralmente abrem em _blank para não tirar o usuário do seu site. Links internos ficam em _self.\n\nDica prática: Do ponto de vista de UX, abrir links em nova aba (_blank) sem aviso pode confundir usuários. Considere adicionar um ícone de \"nova aba\" ou uma tooltip indicando esse comportamento, especialmente em contextos de acessibilidade.",
      "order": 31,
      "tags": [
        "links",
        "navegação",
        "atributo",
        "target"
      ]
    },
    {
      "id": "legacy-html-u4-l7",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-atributo-rel",
      "title": "Atributo rel",
      "content": "Objetivo: Defina a relação semântica entre a página e o link com rel.\n\nFato-chave: O atributo rel define a relação entre a página atual e o destino do link. É essencial para segurança (noopener), SEO (nofollow) e acessibilidade. Pode receber múltiplos valores separados por espaço.\n\nExemplo de uso:\n<!-- Segurança: impede acesso a window.opener -->\n<a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">Link externo</a>\n\n<!-- SEO: instrui o Google a não seguir/valorizar este link -->\n<a href=\"...\" rel=\"nofollow\">Link pago ou não endossado</a>\n\n<!-- Link para o autor do conteúdo -->\n<a href=\"...\" rel=\"author\">Sobre o autor</a>\n\n<!-- Link alternativo (como feed RSS) -->\n<link rel=\"alternate\" type=\"application/rss+xml\" href=\"/feed.xml\">\n\nUso comum: noopener noreferrer em links externos com _blank. nofollow em links pagos, comments e conteúdo de usuários.\n\nDica prática: O Google interpreta rel=\"nofollow\" como uma sugestão desde 2019 — não uma regra absoluta. Para afiliados e publicidade, use rel=\"sponsored\". Para conteúdo de usuários (comentários), use rel=\"ugc\".",
      "order": 32,
      "tags": [
        "links",
        "navegação",
        "atributo",
        "rel"
      ]
    },
    {
      "id": "legacy-html-u4-l8",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-links-mailto",
      "title": "Links mailto",
      "content": "Objetivo: Crie links que abrem o cliente de e-mail do usuário.\n\nFato-chave: O esquema mailto: no href transforma um link em ação de e-mail. Ao clicar, o sistema operacional abre o aplicativo de e-mail padrão com o destinatário já preenchido. Você pode pré-preencher subject, cc, bcc e body também.\n\nExemplo de uso:\n<!-- Simples -->\n<a href=\"mailto:contato@empresa.com\">Envie um e-mail</a>\n\n<!-- Com assunto e corpo pré-preenchidos -->\n<a href=\"mailto:suporte@app.com?subject=Problema%20com%20login&body=Olá%2C%20preciso%20de%20ajuda%20com...\">\n  Contatar suporte\n</a>\n\n<!-- Com cópia -->\n<a href=\"mailto:fulano@email.com?cc=beltrano@email.com\">Email com cópia</a>\n\nUso comum: Páginas de contato, rodapés de sites corporativos, portfolios, formulários simples sem backend.\n\nDica prática: Use encodeURIComponent() em JavaScript para gerar URLs mailto: dinâmicas corretamente. Espaços viram %20, @ vira %40. Evite expor e-mails em texto puro no HTML — bots coletam esses endereços para spam.",
      "order": 33,
      "tags": [
        "links",
        "navegação",
        "mailto"
      ]
    },
    {
      "id": "legacy-html-u4-l9",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegação-links-tel",
      "title": "Links tel",
      "content": "Objetivo: Crie links que iniciam ligações em dispositivos móveis.\n\nFato-chave: O esquema tel: transforma um link em ação de ligação. Em celulares, ao clicar, o discador é aberto com o número preenchido. Em desktops, pode abrir apps de VoIP como Skype ou FaceTime, dependendo da configuração do sistema.\n\nExemplo de uso:\n<!-- Formato recomendado: E.164 (código do país + DDD + número) -->\n<a href=\"tel:+5511987654321\">(11) 98765-4321</a>\n\n<!-- Com texto descritivo -->\n<a href=\"tel:+5508001234567\">\n  Ligue grátis: 0800 123 4567\n</a>\n\nUso comum: Sites de negócios locais, clínicas, imobiliárias, e-commerce com suporte telefônico — qualquer site onde o usuário precisa ligar.\n\nDica prática: Exiba o número formatado de forma legível para humanos no texto do link (com parênteses, traços e espaços) e use o formato E.164 no href (apenas números e + no início). Isso garante compatibilidade com todos os sistemas.",
      "order": 34,
      "tags": [
        "links",
        "navegação",
        "tel"
      ]
    },
    {
      "id": "legacy-html-u5-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia-tag-img",
      "title": "Tag <img>",
      "content": "Objetivo: Insira imagens em páginas web com a tag correta.\n\nFato-chave: A tag <img> é um void element (sem fechamento) que incorpora imagens. Os atributos src (caminho) e alt (texto alternativo) são obrigatórios. Sem alt, leitores de tela não conseguem descrever a imagem.\n\nExemplo de uso:\n<!-- Imagem local -->\n<img src=\"foto.jpg\" alt=\"Foto do produto X em fundo branco\">\n\n<!-- Imagem externa (URL) -->\n<img src=\"https://exemplo.com/logo.png\" alt=\"Logo da Empresa\">\n\n<!-- Com dimensões definidas -->\n<img src=\"banner.jpg\" alt=\"Promoção de verão\" width=\"800\" height=\"400\">\n\nUso comum: Fotos de produtos, avatars de usuários, logos, banners, ilustrações, ícones e galerias de imagens.\n\nDica prática: Sempre defina width e height no HTML mesmo que controle o tamanho com CSS. Isso reserva o espaço antes da imagem carregar, evitando o \"layout shift\" (CLS) que prejudica a experiência e o score do Core Web Vitals.",
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
      "content": "Objetivo: Especifique o caminho ou URL da imagem com src.\n\nFato-chave: O atributo src (source) define de onde a imagem será carregada. Aceita três formatos: URL absoluta (https://...), URL relativa ao arquivo HTML atual (../img/foto.jpg) ou URL relativa à raiz do site (/img/foto.jpg).\n\nExemplo de uso:\n<!-- URL absoluta (outro servidor) -->\n<img src=\"https://picsum.photos/400/300\" alt=\"Imagem aleatória\">\n\n<!-- Relativa ao arquivo atual -->\n<img src=\"imagens/perfil.jpg\" alt=\"Foto de perfil\">\n<img src=\"../assets/logo.svg\" alt=\"Logo\">\n\n<!-- Relativa à raiz do site -->\n<img src=\"/img/hero.webp\" alt=\"Imagem de destaque\">\n\nUso comum: Em projetos reais, imagens ficam em pastas como /img, /assets ou /public e são referenciadas com caminhos relativos à raiz.\n\nDica prática: Use imagens modernas no formato WebP — são 25–35% menores que JPG mantendo a mesma qualidade. Ferramentas como Squoosh (squoosh.app) convertem e comprimem imagens diretamente no browser, de graça.",
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
      "content": "Objetivo: Forneça texto alternativo acessível para imagens com alt.\n\nFato-chave: O atributo alt fornece uma descrição textual da imagem. É lido por leitores de tela para usuários com deficiência visual, exibido quando a imagem falha ao carregar e indexado por motores de busca para SEO de imagens.\n\nExemplo de uso:\n<!-- Imagem informativa: descreva o conteúdo -->\n<img src=\"grafico.png\" alt=\"Gráfico de barras mostrando crescimento de 40% em 2024\">\n\n<!-- Imagem decorativa: alt vazio (não omita o atributo) -->\n<img src=\"divisor.svg\" alt=\"\">\n\n<!-- Logo: nome da empresa/marca -->\n<img src=\"logo.png\" alt=\"CodeLearn — plataforma de ensino de programação\">\n\nUso comum: Toda imagem precisa de alt. O WCAG 2.1 exige alt descritivo em imagens informativas e alt=\"\" em imagens puramente decorativas.\n\nDica prática: Nunca use alt=\"imagem\" ou alt=\"foto\" — isso não ajuda ninguém. Descreva o que a imagem comunica, não o que ela é. Ferramentas de acessibilidade como axe DevTools verificam automaticamente a qualidade dos textos alt.",
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
      "content": "Objetivo: Defina dimensões de imagens para evitar layout shift.\n\nFato-chave: Os atributos width e height reservam o espaço da imagem enquanto ela carrega, evitando que o conteúdo \"pule\" na página — fenômeno chamado Cumulative Layout Shift (CLS), que prejudica a experiência e o ranking no Google.\n\nExemplo de uso:\n<!-- Sempre defina width e height originais da imagem -->\n<img src=\"foto.jpg\" alt=\"Descrição\" width=\"800\" height=\"600\">\n\n<!-- O CSS pode redimensionar sem causar layout shift -->\n<style>\n  img { max-width: 100%; height: auto; }\n</style>\n\n<!-- Imagem responsiva: deixe height automático no CSS -->\n<img src=\"banner.jpg\" alt=\"Banner\" width=\"1200\" height=\"400\"\n     style=\"width: 100%; height: auto;\">\n\nUso comum: Importantíssimo para Core Web Vitals — principais métricas de performance do Google que afetam o rankeamento de busca.\n\nDica prática: Defina sempre as dimensões originais (reais) da imagem em width e height. Depois use CSS para torná-la responsiva: img { max-width: 100%; height: auto; }. O navegador calculará o aspect-ratio correto automaticamente.",
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
      "content": "Objetivo: Escolha o formato de imagem certo para cada situação.\n\nFato-chave: Cada formato tem seu caso de uso ideal. JPG é melhor para fotografias. PNG para imagens com transparência. GIF para animações simples (mas prefira CSS). WebP para tudo — é moderno e mais eficiente. SVG para ícones e logos escaláveis.\n\nExemplo de uso:\n<!-- Fotografia: use WebP (ou JPG como fallback) -->\n<img src=\"produto.webp\" alt=\"Foto do produto\">\n\n<!-- Logo vetorial escalável: use SVG -->\n<img src=\"logo.svg\" alt=\"Logo da empresa\">\n\n<!-- Ícone pequeno: use SVG inline ou PNG -->\n<img src=\"icone-busca.svg\" alt=\"\" width=\"24\" height=\"24\">\n\n<!-- Animação simples: prefira CSS, mas GIF funciona -->\n<img src=\"loading.gif\" alt=\"Carregando...\">\n\nUso comum: Sites modernos usam WebP para fotos, SVG para ícones e logos, PNG para imagens com transparência em contextos específicos.\n\nDica prática: Use a tag <picture> para oferecer formatos modernos com fallback: <picture><source srcset=\"img.webp\" type=\"image/webp\"><img src=\"img.jpg\" alt=\"...\"></picture>. Isso garante WebP para browsers modernos e JPG para os antigos.",
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
      "content": "Objetivo: Agrupe imagens com its legenda usando elementos semânticos.\n\nFato-chave: O elemento <figure> é um container semântico para conteúdo autônomo — imagens, gráficos, trechos de código ou citações. Combinado com <figcaption>, cria uma unidade semântica de figura + legenda, usada por leitores de tela e motores de busca.\n\nExemplo de uso:\n<figure>\n  <img src=\"grafico-vendas.png\" alt=\"Gráfico de vendas do 1º trimestre de 2024\">\n  <figcaption>\n    Figura 1 — Crescimento de 32% nas vendas entre janeiro e março de 2024.\n  </figcaption>\n</figure>\n\n<!-- Figure também funciona para código: -->\n<figure>\n  <pre><code>const soma = (a, b) => a + b;</code></pre>\n  <figcaption>Exemplo de arrow function em JavaScript.</figcaption>\n</figure>\n\nUso comum: Artigos técnicos, relatórios, documentações, blogs com imagens ou gráficos comentados.\n\nDica prática: O <figure> pode ser movido para outra posição no documento sem afetar o fluxo do texto principal — isso é o que o define semanticamente. Use quando a imagem e sua legenda formam uma unidade independente do texto ao redor.",
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
      "content": "Objetivo: Associe legendas descritivas a imagens com figcaption.\n\nFato-chave: O elemento <figcaption> deve ser o primeiro ou último filho do <figure>. Ele fornece contexto adicional que o alt não precisa repetir — alt descreve a imagem para quem não pode vê-la; figcaption complementa com informações para todos os leitores.\n\nExemplo de uso:\n<figure>\n  <img src=\"mapa-brasil.svg\" alt=\"Mapa político do Brasil com estados demarcados\">\n  <figcaption>\n    Mapa do Brasil dividido por estados e regiões.\n    Fonte: IBGE, 2023.\n  </figcaption>\n</figure>\n\n<!-- figcaption pode conter HTML -->\n<figure>\n  <img src=\"screenshot.png\" alt=\"Tela do dashboard com gráfico de barras\">\n  <figcaption>Dashboard de <strong>análise de vendas</strong> — versão 3.0</figcaption>\n</figure>\n\nUso comum: Gráficos com fonte de dados, screenshots com explicações, fotos de produtos com descrições, diagramas técnicos.\n\nDica prática: Não repita no figcaption o que já está no alt. Use alt para descrever o conteúdo visual e figcaption para adicionar contexto, fonte, interpretação ou informação complementar.",
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
      "content": "Objetivo: Incorpore áudio em páginas web de forma nativa.\n\nFato-chave: O elemento <audio> permite reproduzir arquivos de áudio diretamente no browser sem plugins. O atributo controls exibe os controles nativos do navegador (play, pause, volume). Suporte a múltiplos formatos garante compatibilidade cross-browser.\n\nExemplo de uso:\n<!-- Com controles visíveis -->\n<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  <source src=\"podcast.ogg\" type=\"audio/ogg\">\n  <p>Seu navegador não suporta áudio HTML5.\n     <a href=\"podcast.mp3\">Baixe o arquivo</a>.\n  </p>\n</audio>\n\n<!-- Reprodução automática (use com moderação) -->\n<audio controls autoplay muted loop>\n  <source src=\"musica-fundo.mp3\" type=\"audio/mpeg\">\n</audio>\n\nUso comum: Podcasts, players de música, efeitos sonoros em jogos, áudio de leitura (acessibilidade), anúncios de voz.\n\nDica prática: Nunca use autoplay sem muted — navegadores modernos bloqueiam reprodução automática com som. Para música de fundo, use autoplay muted e deixe o usuário ativar o som explicitamente.",
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
      "content": "Objetivo: Incorpore vídeo nativo em páginas web com <video>.\n\nFato-chave: O elemento <video> funciona de forma similar ao <audio> — exibe controles nativos, suporta múltiplos formatos e é reproduzido diretamente no browser sem Flash ou plugins. Adicione poster para exibir uma imagem de capa antes de o vídeo iniciar.\n\nExemplo de uso:\n<video controls width=\"800\" height=\"450\" poster=\"capa-video.jpg\">\n  <source src=\"tutorial.mp4\" type=\"video/mp4\">\n  <source src=\"tutorial.webm\" type=\"video/webm\">\n  <p>Seu navegador não suporta vídeo HTML5.\n     <a href=\"tutorial.mp4\">Baixe o vídeo</a>.\n  </p>\n</video>\n\n<!-- Vídeo de fundo (sem controles) -->\n<video autoplay muted loop playsinline>\n  <source src=\"hero-bg.mp4\" type=\"video/mp4\">\n</video>\n\nUso comum: Demonstrações de produtos, tutoriais, apresentações, vídeos de fundo em seções hero, conteúdo educacional.\n\nDica prática: Para vídeos externos (YouTube, Vimeo), use <iframe> de embed em vez de <video>. Para vídeos próprios, MP4 (H.264) tem o maior suporte de navegadores. Use WebM como formato alternativo para browsers que o suportam com melhor compressão.",
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
      "concept": "listas-lista-não-ordenada-ul",
      "title": "Lista não ordenada <ul>",
      "content": "Objetivo: Crie listas de itens sem ordem definida com <ul>.\n\nFato-chave: <ul> (unordered list) cria listas com marcadores (•) onde a ordem dos itens não importa. Cada item da lista é um <li>. O estilo do marcador pode ser alterado com CSS (list-style-type).\n\nExemplo de uso:\n<ul>\n  <li>HTML — estrutura</li>\n  <li>CSS — aparência</li>\n  <li>JavaScript — comportamento</li>\n</ul>\n\n<!-- Lista de ingredientes (ordem não importa) -->\n<ul>\n  <li>2 ovos</li>\n  <li>200g de farinha</li>\n  <li>1 xícara de leite</li>\n</ul>\n\n<!-- Remover marcadores com CSS -->\n<ul style=\"list-style: none; padding: 0;\">...</ul>\n\nUso comum: Menus de navegação, listas de recursos, ingredientes, características de produtos, tags, qualquer agrupamento onde a ordem é irrelevante.\n\nDica prática: Menus de navegação HTML usam <ul> e <li> por boas práticas de acessibilidade: <nav><ul><li><a href=\"/\">Início</a></li></ul></nav>. Leitores de tela anunciam o número de itens da lista.",
      "order": 44,
      "tags": [
        "listas",
        "lista",
        "não",
        "ordenada"
      ]
    },
    {
      "id": "legacy-html-u6-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-lista-ordenada-ol",
      "title": "Lista ordenada <ol>",
      "content": "Objetivo: Crie listas numeradas onde a ordem importa com <ol>.\n\nFato-chave: <ol> (ordered list) cria listas numeradas onde a sequência dos itens tem significado (1, 2, 3...). Aceita atributos start (número inicial) e reversed (contagem regressiva). O tipo de numeração é controlado pelo atributo type ou CSS.\n\nExemplo de uso:\n<!-- Receita: a ordem dos passos importa -->\n<ol>\n  <li>Pré-aqueça o forno a 180°C.</li>\n  <li>Misture os ingredientes secos.</li>\n  <li>Adicione os líquidos e mexa.</li>\n  <li>Asse por 35 minutos.</li>\n</ol>\n\n<!-- Começando em número diferente -->\n<ol start=\"5\">\n  <li>Quinto passo</li>\n  <li>Sexto passo</li>\n</ol>\n\n<!-- Contagem regressiva -->\n<ol reversed start=\"3\">\n  <li>Bronze</li>\n  <li>Prata</li>\n  <li>Ouro</li>\n</ol>\n\nUso comum: Tutoriais passo a passo, rankings, instruções sequenciais, processos, checklists ordenados.\n\nDica prática: Use <ol> sempre que a ordem importar semanticamente, mesmo que queira exibir a lista de outra forma visualmente. O CSS pode mudar totalmente o estilo (list-style: upper-alpha para A, B, C...) sem perder a semântica.",
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
      "content": "Objetivo: Marque cada item de uma lista com <li>.\n\nFato-chave: <li> (list item) é o único filho válido direto de <ul> e <ol>. Pode conter qualquer tipo de conteúdo: texto, imagens, links, outras listas. Em <ol>, o atributo value define o número de um item específico, afetando a numeração dos seguintes.\n\nExemplo de uso:\n<ul>\n  <li>Item simples</li>\n  <li><strong>Item em negrito</strong></li>\n  <li><a href=\"/artigo\">Link dentro de item</a></li>\n  <li>\n    Item com sublista:\n    <ul>\n      <li>Subitem A</li>\n      <li>Subitem B</li>\n    </ul>\n  </li>\n</ul>\n\n<!-- Em ol, value define numeração customizada -->\n<ol>\n  <li value=\"10\">Décimo item</li>\n  <li>Décimo primeiro (automático)</li>\n</ol>\n\nUso comum: Todo item de qualquer lista HTML. Pode conter div, p, img, a, ul, ol — qualquer elemento.\n\nDica prática: Nunca coloque <li> fora de <ul> ou <ol>. Navegadores tentam corrigir isso, mas o comportamento é imprevisível. Valide seu HTML no validator.w3.org para detectar esses erros estruturais.",
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
      "content": "Objetivo: Crie hierarquias de informação com listas dentro de listas.\n\nFato-chave: Listas podem ser aninhadas — um <li> pode conter outra <ul> ou <ol> como filho. Isso cria hierarquias visuais com indentação. A lista interna fica dentro do <li>, não fora dele.\n\nExemplo de uso:\n<!-- Menu de navegação com submenus -->\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ul>\n  </li>\n</ul>\n\n<!-- Misturando tipos -->\n<ol>\n  <li>Fase 1: Fundamentos\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n  <li>Fase 2: JavaScript</li>\n</ol>\n\nUso comum: Sitemap, menus dropdown, sumários de documentos, categorias e subcategorias, árvores de arquivos.\n\nDica prática: Não aninhe listas só por decoração visual. O aninhamento deve refletir uma hierarquia semântica real. Para dropdown menus com CSS ou JS, o aninhamento de listas é o padrão da web moderna.",
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
      "content": "Objetivo: Crie glossários e pares termo-definição com <dl>.\n\nFato-chave: <dl> (description list) cria uma lista de termos (<dt>) e suas definições (<dd>). Diferente de <ul>/<ol>, é usada para pares chave-valor semânticos — como um dicionário, glossário, metadados ou FAQ.\n\nExemplo de uso:\n<!-- Glossário técnico -->\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language — linguagem de marcação que estrutura páginas web.</dd>\n\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets — linguagem que define a aparência de elementos HTML.</dd>\n\n  <dt>API</dt>\n  <dd>Application Programming Interface — interface para comunicação entre sistemas.</dd>\n</dl>\n\n<!-- Metadados de produto -->\n<dl>\n  <dt>Marca</dt>  <dd>TechBrand</dd>\n  <dt>Modelo</dt> <dd>X-2000</dd>\n  <dt>Peso</dt>   <dd>350g</dd>\n</dl>\n\nUso comum: Glossários, FAQs, especificações de produtos, metadados, dicionários e listas de propriedades.\n\nDica prática: Um <dt> pode ter vários <dd> (múltiplas definições) e vários <dt> podem compartilhar um <dd> (sinônimos). Use CSS para estilizar: dt { font-weight: bold; } dd { margin-left: 1.5rem; margin-bottom: 0.5rem; }",
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
      "content": "Objetivo: Organize dados em linhas e colunas com tabelas HTML.\n\nFato-chave: A tag <table> cria uma tabela de dados. Tabelas HTML são para dados tabulares — não para layout de página (isso era prática antiga, abandonada em favor do CSS Grid e Flexbox). Uma tabela bem estruturada é acessível a leitores de tela.\n\nExemplo de uso:\n<table>\n  <thead>\n    <tr>\n      <th>Linguagem</th>\n      <th>Tipo</th>\n      <th>Criada em</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>JavaScript</td>\n      <td>Interpretada</td>\n      <td>1995</td>\n    </tr>\n    <tr>\n      <td>Python</td>\n      <td>Interpretada</td>\n      <td>1991</td>\n    </tr>\n  </tbody>\n</table>\n\nUso comum: Preços e planos, horários, comparativos de produtos, relatórios financeiros, rankings, dados científicos.\n\nDica prática: NUNCA use tabelas para layout de página — use CSS Grid ou Flexbox. Tabelas para layout são inacessíveis, lentas e difíceis de manter. Tabelas são apenas para dados tabulares que fazem sentido em grade de linhas e colunas.",
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
      "content": "Objetivo: Adicione linhas à tabela com <tr>.\n\nFato-chave: <tr> (table row) define uma linha horizontal na tabela. Cada <tr> contém células (<td> para dados ou <th> para cabeçalhos). Todas as linhas de uma coluna ficam alinhadas automaticamente pelo navegador.\n\nExemplo de uso:\n<table>\n  <tr>\n    <th>Nome</th>\n    <th>Nota</th>\n    <th>Situação</th>\n  </tr>\n  <tr>           <!-- Primeira linha de dados -->\n    <td>Ana</td>\n    <td>9.5</td>\n    <td>Aprovada</td>\n  </tr>\n  <tr>           <!-- Segunda linha de dados -->\n    <td>Bruno</td>\n    <td>7.0</td>\n    <td>Aprovado</td>\n  </tr>\n</table>\n\nUso comum: Cada registro de dado em uma tabela = uma <tr>. Use quantas <tr> precisar dentro de <thead>, <tbody> e <tfoot>.\n\nDica prática: Para estilizar linhas alternadas (zebra striping), use CSS: tr:nth-child(even) { background-color: #f2f2f2; }. Isso melhora a legibilidade de tabelas longas sem precisar adicionar classes em cada linha.",
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
      "content": "Objetivo: Defina células de dados em tabelas com <td>.\n\nFato-chave: <td> (table data) cria uma célula com conteúdo de dado. Pode conter qualquer elemento HTML — texto, imagens, links, botões. Os atributos colspan e rowspan permitem mesclar células horizontal e verticalmente.\n\nExemplo de uso:\n<table>\n  <tr>\n    <td>Produto A</td>\n    <td>R$ 49,90</td>\n    <td><a href=\"/comprar\">Comprar</a></td>\n  </tr>\n  <tr>\n    <!-- colspan: ocupa 2 colunas -->\n    <td colspan=\"2\">Total do pedido</td>\n    <td>R$ 49,90</td>\n  </tr>\n</table>\n\n<!-- rowspan: célula que ocupa 3 linhas -->\n<td rowspan=\"3\">Categoria A</td>\n\nUso comum: Qualquer célula de dado em tabelas — preços, nomes, datas, valores numéricos, ações (botões/links).\n\nDica prática: Estilize células com CSS para melhor legibilidade: td { padding: 8px 12px; border-bottom: 1px solid #ddd; } table { border-collapse: collapse; width: 100%; }. border-collapse: collapse elimina espaço duplo entre bordas.",
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
      "content": "Objetivo: Crie células de cabeçalho acessíveis com <th>.\n\nFato-chave: <th> (table header) define uma célula de cabeçalho. Por padrão, o conteúdo fica em negrito e centralizado. O atributo scope (col, row, colgroup, rowgroup) especifica para qual direção o cabeçalho se aplica — essencial para acessibilidade em leitores de tela.\n\nExemplo de uso:\n<table>\n  <tr>\n    <th scope=\"col\">Produto</th>\n    <th scope=\"col\">Preço</th>\n    <th scope=\"col\">Estoque</th>\n  </tr>\n  <tr>\n    <th scope=\"row\">Teclado Mecânico</th>\n    <td>R$ 299</td>\n    <td>15 unidades</td>\n  </tr>\n</table>\n\nUso comum: Linha de cabeçalho das colunas (dentro de <thead>), cabeçalhos de linhas para tabelas com dados bidirecionais.\n\nDica prática: Sempre use scope=\"col\" em <th> de colunas e scope=\"row\" em <th> de linhas. Isso permite que leitores de tela JAWS e NVDA anunciem o cabeçalho relevante a cada célula lida, tornando a tabela acessível.",
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
      "content": "Objetivo: Separe o cabeçalho da tabela com <thead>.\n\nFato-chave: <thead> agrupa as linhas de cabeçalho da tabela. Junto com <tbody> e <tfoot>, define a estrutura semântica da tabela. Em tabelas muito longas com scroll, o navegador pode repetir o <thead> automaticamente ao imprimir a página.\n\nExemplo de uso:\n<table>\n  <thead>\n    <tr>\n      <th scope=\"col\">Mês</th>\n      <th scope=\"col\">Receita</th>\n      <th scope=\"col\">Despesa</th>\n      <th scope=\"col\">Saldo</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Janeiro</td>\n      <td>R$ 10.000</td>\n      <td>R$ 7.500</td>\n      <td>R$ 2.500</td>\n    </tr>\n    <!-- mais linhas... -->\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\">Total</th>\n      <td>R$ 120.000</td>\n      <td>R$ 90.000</td>\n      <td>R$ 30.000</td>\n    </tr>\n  </tfoot>\n</table>\n\nUso comum: Toda tabela bem estruturada tem thead + tbody. O tfoot é opcional mas útil para totais e resumos.\n\nDica prática: Estilize thead separadamente do tbody: thead { background-color: #2d3748; color: white; }. Isso cria uma hierarquia visual clara e melhora a leitura de tabelas com muitos dados.",
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
      "content": "Objetivo: Corpo da tabela. agrupa as linhas de dados principais da tabela. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Rodape da tabela. agrupa linhas de rodape, como totais ou resumos. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Mesclando celulas. colspan mescla colunas horizontalmente. rowspan mescla linhas verticalmente. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Título da tabela. adiciona um título a tabela. Deve ser o primeiro elemento dentro de . Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Criando formularios. Formularios coletam dados com inputs, labels e botoes. Exemplo de uso: cadastro e login. Uso comum: pesquisas, contato e pagamento. Dica prática: sempre associe label ao input.",
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
      "content": "Objetivo: Destino do formulario. action define a URL para onde os dados serao enviados quando o form for submetido. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Como enviar dados. method define como os dados são enviados. GET na URL, POST no corpo da requisicao. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Campo de texto. cria um campo para texto simples de uma linha. Exemplo de uso: Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Campo de email. type=\"email\" valida automaticamente se o texto e um email valido. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Campo de senha. type=\"password\" oculta os caracteres digitados, mostrando apenas pontos. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Caixa de seleção. type=\"checkbox\" cria uma caixa que pode ser marcada ou desmarcada. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Botoes de opção. type=\"radio\" cria botoes onde apenas uma opção pode ser selecionada por grupo. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Area de texto. cria uma area para texto longo com múltiplas linhas. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Lista suspensa. cria uma lista dropdown. Opcoes ficam dentro com . Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Opcoes do select. define cada opção dentro de . O atributo value e o que e enviado. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Botoes de acao. cria um botao clicavel. Por padrão, type=\"submit\" envia o formulario. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Campo obrigatorio. O atributo required torna o campo obrigatorio. O formulario não envia se estiver vazio. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Texto de dica. placeholder mostra um texto de dica dentro do campo, que desaparece quando você digita. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Nome do campo. name identifica o campo quando os dados são enviados. E a chave no par chave=valor. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Significado no codigo. HTML semantico usa tags que descrevem o conteúdo. Exemplo de uso: organizar página em areas claras. Uso comum: melhorar acessibilidade e SEO. Dica prática: evite excesso de div sem significado.",
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
      "content": "Objetivo: Cabecalho da página. representa o cabecalho de uma página ou seção. Geralmente contem logo, título e navegação. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Navegação principal. representa uma seção de navegação com links para outras páginas ou partes do site. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Conteúdo principal. contem o conteúdo principal da página. Deve haver apenas um por página. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Secoes tematicas. representa uma seção tematica de conteúdo. Geralmente tem seu próprio título. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Conteúdo independente. representa conteúdo autocontido que faz sentido sozinho: post, noticia, comentario. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Conteúdo relacionado. contem conteúdo relacionado mas separado: sidebars, caixas de destaque, anuncios. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Rodape. representa o rodape de uma página ou seção. Contem copyright, links, contato. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: O papel da div generica. e um container generico sem significado semantico. Use quando nenhuma tag semântica se aplica. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Identificador unico. id e um identificador unico na página. Cada id so pode aparecer uma vez. Exemplo de uso: ... Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Classes de estilo. class define uma ou mais classes CSS. Diferente de id, classes podem ser repetidas. Exemplo de uso: Conteúdo Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: CSS inline. style aplica CSS diretamente no elemento. Util para estilos unicos e rapidos. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Dica ao passar o mouse. title mostra uma tooltip quando o usuario passa o mouse sobre o elemento. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Idioma do conteúdo. lang define o idioma do conteúdo. Importante para acessibilidade e SEO. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Dados personalizados. data- permite armazenar dados personalizados nos elementos. Util para JavaScript. Exemplo de uso: p { data-: valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Ocultar elementos. hidden oculta o elemento da página. Ele ainda existe no codigo, mas não e exibido. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Ordem de tabulacao. tabindex controla se e em que ordem o elemento recebe foco ao pressionar Tab. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Web para todos. Acessibilidade garante que todos consigam usar o site. Exemplo de uso: leitores de tela dependem do alt e aria. Uso comum: formularios, botoes e menus. Dica prática: teste com teclado e leitor de tela.",
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
      "content": "Objetivo: Descrevendo imagens. O atributo alt e lido por leitores de tela. Descreva o conteúdo e função da imagem. Exemplo de uso: Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Rotulos acessiveis. associa texto a um campo de formulario. Essencial para leitores de tela. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Navegação por teclado. Muitos usuarios navegam com Tab. A ordem deve fazer sentido logico. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Atributos de acessibilidade. ARIA (Accessible Rich Internet Applications) são atributos que melhoram a acessibilidade de conteúdo dinâmico. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Rotulos invisiveis. aria-label fornece um rotulo acessivel quando não ha texto visivel. Exemplo de uso: p { aria-label: valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Ocultando de leitores de tela. aria-hidden=\"true\" esconde o elemento de tecnologias assistivas, mas mantem visivel. Exemplo de uso: p { aria-hidden=\"true\": valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "concept": "seo-com-html-títulos-hierarquicos",
      "title": "Titulos hierarquicos",
      "content": "Objetivo: Estrutura para buscadores. Buscadores usam h1-h6 para entender a estrutura. Use apenas um h1, depois h2, h3 em ordem. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 97,
      "tags": [
        "seo",
        "com",
        "html",
        "títulos",
        "hierarquicos"
      ]
    },
    {
      "id": "legacy-html-u12-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-estrutura-semântica",
      "title": "Estrutura semântica",
      "content": "Objetivo: HTML que buscadores entendem. Tags semanticas (header, main, article) ajudam buscadores a entender a estrutura do conteúdo. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 98,
      "tags": [
        "seo",
        "com",
        "html",
        "estrutura",
        "semântica"
      ]
    },
    {
      "id": "legacy-html-u12-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "seo-com-html-meta-description",
      "title": "Meta description",
      "content": "Objetivo: Descricao nos resultados. A meta description aparece nos resultados de busca abaixo do título. Deve ser atraente e ter ate 160 caracteres. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Conectando páginas. Links entre páginas do seu site ajudam buscadores a descobrir e indexar conteúdo. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: SEO para imagens. O atributo alt ajuda buscadores a entender o conteúdo da imagem. Pode aparecer em buscas de imagens. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "concept": "integração-com-css-e-js-link",
      "title": "<link>",
      "content": "Objetivo: Conectando CSS externo. conecta arquivos CSS externos. Vai dentro do . Exemplo de uso: Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 102,
      "tags": [
        "integração",
        "com",
        "css",
        "link"
      ]
    },
    {
      "id": "legacy-html-u13-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integração-com-css-e-js-style",
      "title": "<style>",
      "content": "Objetivo: CSS interno. permite escrever CSS diretamente no HTML, dentro do . Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 103,
      "tags": [
        "integração",
        "com",
        "css",
        "style"
      ]
    },
    {
      "id": "legacy-html-u13-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integração-com-css-e-js-script",
      "title": "<script>",
      "content": "Objetivo: Adicionando JavaScript. adiciona JavaScript. Pode ser codigo inline ou arquivo externo. Exemplo de uso: veja a sintaxe na documentação oficial do MDN Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 104,
      "tags": [
        "integração",
        "com",
        "css",
        "script"
      ]
    },
    {
      "id": "legacy-html-u13-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integração-com-css-e-js-defer",
      "title": "defer",
      "content": "Objetivo: Carregamento adiado. defer faz o script baixar em paralelo e executar apos o HTML ser completamente parseado. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 105,
      "tags": [
        "integração",
        "com",
        "css",
        "defer"
      ]
    },
    {
      "id": "legacy-html-u13-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integração-com-css-e-js-async",
      "title": "async",
      "content": "Objetivo: Carregamento assincrono. async baixa em paralelo e executa imediatamente apos baixar, sem esperar o HTML. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 106,
      "tags": [
        "integração",
        "com",
        "css",
        "async"
      ]
    },
    {
      "id": "legacy-html-u14-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-práticas-codigo-limpo",
      "title": "Codigo limpo",
      "content": "Objetivo: HTML organizado. HTML limpo e fácil de ler, manter e colaborar. Use indentação consistente e nomes claros. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 107,
      "tags": [
        "boas",
        "práticas",
        "codigo",
        "limpo"
      ]
    },
    {
      "id": "legacy-html-u14-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-práticas-comentarios-úteis",
      "title": "Comentarios úteis",
      "content": "Objetivo: Documentando o codigo. Comente o porque, não o que. Bom: \" \". Ruim: \" \". Exemplo de uso: p { : valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 108,
      "tags": [
        "boas",
        "práticas",
        "comentarios",
        "úteis"
      ]
    },
    {
      "id": "legacy-html-u14-l3",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-práticas-validação-html",
      "title": "Validação HTML",
      "content": "Objetivo: Verificando erros. Validadores verificam se seu HTML segue os padrões. Erros podem causar problemas de renderizacao. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 109,
      "tags": [
        "boas",
        "práticas",
        "validação",
        "html"
      ]
    },
    {
      "id": "legacy-html-u14-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-práticas-performance-básica",
      "title": "Performance básica",
      "content": "Objetivo: Sites mais rapidos. HTML leve carrega mais rápido. Evite codigo desnecessario e otimize recursos. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 110,
      "tags": [
        "boas",
        "práticas",
        "performance",
        "básica"
      ]
    },
    {
      "id": "legacy-html-u14-l5",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-práticas-compatibilidade",
      "title": "Compatibilidade",
      "content": "Objetivo: Funcionando em todos navegadores. Nem todos navegadores interpretam HTML igualmente. Teste em Chrome, Firefox, Safari, Edge. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 111,
      "tags": [
        "boas",
        "práticas",
        "compatibilidade"
      ]
    },
    {
      "id": "legacy-html-u15-l1",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-página-pessoal",
      "title": "Página pessoal",
      "content": "Objetivo: Seu primeiro site. Vamos criar uma página simples com seu nome, foto, bio e links para redes sociais. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 112,
      "tags": [
        "projetos",
        "praticos",
        "página",
        "pessoal"
      ]
    },
    {
      "id": "legacy-html-u15-l2",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-landing-page-simples",
      "title": "Landing page simples",
      "content": "Objetivo: Página de conversao. Uma landing page tem: título chamativo, proposta de valor, beneficios e call-to-action. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "concept": "projetos-praticos-página-de-contato",
      "title": "Página de contato",
      "content": "Objetivo: Formulario de contato. Inclua informacoes de contato (email, telefone, endereco) e um formulario para mensagens. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 114,
      "tags": [
        "projetos",
        "praticos",
        "página",
        "contato"
      ]
    },
    {
      "id": "legacy-html-u15-l4",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "projetos-praticos-formulario-funcional",
      "title": "Formulario funcional",
      "content": "Objetivo: Formulario completo. Pratique todos os tipos de input: text, email, password, checkbox, radio, select, textarea. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Site de empresa. Site com múltiplas páginas: Home, Sobre, Servicos, Contato. Navegação entre elas. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: HTML puro e bibliotecas. Frameworks como React, Vue, Angular usam HTML dentro de JavaScript. A base ainda e HTML. Exemplo de uso: Título Texto base Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Componentes nativos. Web Components permitem criar elementos HTML customizados e reutilizaveis, nativamente no navegador. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Apps progressivos. PWAs são sites que funcionam como apps. Podem ser instalados e funcionar offline. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Estilos para a web. CSS define a aparencia dos elementos HTML. Exemplo de uso: mudar cores, tamanhos e espacamentos. Uso comum: criar identidade visual. Dica prática: comece pelo layout geral e refine depois.",
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
      "content": "Objetivo: Como escolher elementos. Seletores escolhem quais elementos receberao estilo. Exemplo de uso: aplicar estilos pontuais. Uso comum: diferenciar componentes. Dica prática: prefira classes para reutilizacao.",
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
      "content": "Objetivo: Deixando o texto legivel. Use color, font-size, font-family e font-weight para estilizar textos. Exemplo de uso: p { color: #1f2937; } Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "content": "Objetivo: Espacamento e tamanho. Todo elemento tem conteúdo, padding, border e margin. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "content": "Objetivo: Quem vence?. Se dois estilos se aplicam, vence o mais específico ou o que esta por último. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "content": "Objetivo: Alinhamento flexivel. Box model define como tamanho e espacamento funcionam. Exemplo de uso: criar cartoes com respiro. Uso comum: ajustar layout sem quebrar o conteúdo. Dica prática: use DevTools para visualizar o box model.",
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
      "content": "Objetivo: Layout em grade. Flexbox alinha itens em uma linha ou coluna. Exemplo de uso: barras de navegação e cards. Uso comum: alinhar botoes e menus. Dica prática: combine com gap para espacamento.",
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
      "content": "Objetivo: Controle de posicionamento. relative mantem espaco, absolute remove do fluxo e posiciona no ancestral. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Layouts para todas telas. Media queries aplicam estilos em condições, como largura da tela. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Estados interativos. Pseudo-classes como :hover, :focus e :active controlam estados. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Animacoes suaves. Transicoes criam animações suaves entre estados. Exemplo de uso: feedback visual em botoes. Uso comum: melhorar a sensacao de interação. Dica prática: transicoes curtas são mais naturais.",
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
      "content": "Objetivo: Keyframes no CSS. Crie animações com @keyframes e aplique com animation. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "concept": "css-avancado-variáveis-css",
      "title": "Variaveis CSS",
      "content": "Objetivo: Custom properties. Variaveis CSS comecam com -- e são usadas com var(). Exemplo de uso: p { --: valor; } Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
      "order": 13,
      "tags": [
        "css",
        "avancado",
        "variáveis"
      ]
    },
    {
      "id": "legacy-css-u19-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "css-avancado-pseudo-elementos",
      "title": "Pseudo-elementos",
      "content": "Objetivo: Detalhes com ::before/::after. Use ::before e ::after para inserir conteúdo decorativo. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "content": "Objetivo: Profundidade visual. Use box-shadow para criar profundidade em cartoes e botoes. Exemplo de uso: p { box-shadow: valor; } Uso comum: estilizar elementos e ajustar o layout. Dica prática: altere valores e observe as mudancas visuais.",
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
      "content": "Objetivo: Elementos, classes e IDs. Seletores permitem escolher quais elementos receberao estilos. Exemplo de uso: .card { padding: 16px; border-radius: 12px; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Descendentes e filhos. Eles definem relacoes entre elementos: descendente, filho e irmao. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Estados dos elementos. Use :hover, :focus e :nth-child() para estados e posição. Exemplo de uso: p { :nth-child(): valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Quem vence no CSS. Quando regras entram em conflito, a mais específica vence. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Eixos e alinhamento. Ative com display: flex para distribuir itens em um eixo. Exemplo de uso: Consulte a documentação MDN para exemplos aplicados a este conceito. Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "content": "Objetivo: Crescimento e espaco. Use flex para controlar crescimento, reducao e tamanho base. Exemplo de uso: container { display: flex; gap: 12px; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "concept": "flexbox-e-grid-grid-básico",
      "title": "Grid básico",
      "content": "Objetivo: Colunas e linhas. Use display: grid para layouts bidimensionais. Exemplo de uso: .card { padding: 16px; border-radius: 12px; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
      "order": 22,
      "tags": [
        "flexbox",
        "grid",
        "básico"
      ]
    },
    {
      "id": "legacy-css-u23-l4",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "flexbox-e-grid-layout-responsivo",
      "title": "Layout responsivo",
      "content": "Objetivo: Grid fluido. Combine auto-fit e minmax() para grades adaptaveis. Exemplo de uso: p { auto-fit: valor; } Uso comum: presente em praticamente todas as páginas web modernas. Dica prática: use o DevTools (F12) → aba Elements para inspecionar como o navegador interpreta este elemento.",
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
      "concept": "variáveis",
      "title": "Variaveis e constantes",
      "content": "Objetivo: guardar dados com clareza. Regra prática: use const por padrão e let quando o valor precisar mudar. Exemplo: const nome = \"Ana\"; let pontos = 0; pontos += 5;. Erro comum: usar nomes vagos como x ou dado; prefira nomes que expliquem a intencao, como totalCarrinho ou usuarioAtual.",
      "order": 1,
      "tags": [
        "js",
        "variáveis",
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
      "content": "Objetivo: tomar decisoes no codigo. Use if/else para escolher entre caminhos: if (idade >= 18) { ... } else { ... }. Compare valores com operadores claros (===, !==, >, >=) e combine regras com && (e) e || (ou). Erro comum: usar = dentro de condição; lembre que = atribui e === compara.",
      "order": 2,
      "tags": [
        "js",
        "if",
        "else",
        "comparação"
      ]
    },
    {
      "id": "lesson-js-functions",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "funções",
      "title": "Funcoes",
      "content": "Objetivo: reutilizar logica sem repetir codigo. Pense em função como maquina: entrada (parametros), processamento e saida (return). Exemplo: function soma(a, b) { return a + b; }. Para casos curtos, use arrow function: const dobro = (n) => n * 2;. Erro comum: esquecer o return quando a função precisa devolver valor.",
      "order": 3,
      "tags": [
        "js",
        "funções",
        "parametros",
        "return"
      ]
    },
    {
      "id": "lesson-js-loops",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "repetição",
      "title": "Lacos de repetição",
      "content": "Objetivo: repetir instruções sem copiar e colar codigo. Use for quando souber quantas repeticoes deseja, e while quando depender de uma condição. Exemplo for: for (let i = 0; i < 3; i++) { ... }. Erro comum: esquecer de atualizar o contador e criar loop infinito.",
      "order": 4,
      "tags": [
        "js",
        "for",
        "while",
        "repetição"
      ]
    },
    {
      "id": "lesson-js-arrays",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "arrays",
      "title": "Arrays",
      "content": "Objetivo: armazenar colecoes de dados na ordem. Acesso por indice comeca em 0: lista[0] e o primeiro item. Propriedade util: lista.length mostra quantidade. Operacao comum: lista.push(novoItem) para adicionar no final. Erro comum: tentar acessar indice que não existe e receber undefined.",
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
      "content": "Objetivo: escrever regras corretas usando true e false. Use comparacoes estritas (===, !==) e operadores logicos: && exige todas as condições; || aceita pelo menos uma. Erro comum: confundir = (atribui) com === (compara). Outra boa prática: quebrar condições complexas em variáveis booleanas com nomes claros.",
      "order": 8,
      "tags": [
        "js",
        "boolean",
        "comparação",
        "logica"
      ]
    },
    {
      "id": "lesson-js-array-methods",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "metodos-array",
      "title": "Metodos de array: map, filter e reduce",
      "content": "Objetivo: transformar listas sem loops manuais. map cria nova lista transformada, filter seleciona itens por condição e reduce acumula um resultado unico. Exemplo: precos.reduce((total, p) => total + p, 0). Erro comum: esquecer o valor inicial do reduce e gerar comportamento inesperado em listas vazias.",
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
      "content": "Objetivo: conectar JavaScript com a interface. Use document.querySelector para selecionar elementos e addEventListener para reagir a acoes do usuario. Padrão util: selecione, valide se o elemento existe e depois atualize textContent ou classes. Erro comum: tentar manipular elemento nulo sem verificar.",
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
      "content": "Objetivo: lidar com operações que demoram, como chamadas de API. async transforma a função para trabalhar com Promises e await pausa ate o resultado chegar. Fluxo básico: await fetch(...), await resposta.json() e retorno final. Erro comum: esquecer await e tentar usar dados antes da resposta estar pronta.",
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
      "content": "Objetivo: evitar que seu programa quebre quando algo inesperado acontece. Use try para executar o codigo que pode falhar e catch para tratar o erro com seguranca. Regra prática: trate erro perto da origem e devolva um resultado previsivel (null, false ou mensagem). Erro comum: capturar erro e ignorar completamente sem retornar nada util.",
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
      "title": "Promises na prática",
      "content": "Objetivo: controlar operações assincronas com sucesso e falha. Promise.resolve entrega um valor com sucesso e Promise.reject representa erro. Com then você trata sucesso; com catch trata falha. Em codigo moderno, async/await torna esse fluxo mais legivel. Erro comum: esquecer o catch e deixar erro sem tratamento.",
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
      "title": "Classes e objetos na prática",
      "content": "Objetivo: organizar dados e comportamentos relacionados. Com class você define um molde e com new cria objetos. O constructor recebe os dados iniciais e metodos ficam no corpo da classe. Erro comum: esquecer this ao acessar propriedades da instancia.",
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
      "content": "Objetivo: dividir o codigo em partes pequenas e reutilizaveis. Um módulo deve ter responsabilidade clara, com funções de entrada e saida bem definidas. Em projetos reais usamos export/import para ligar módulos. Erro comum: criar módulo gigante com regras de varios assuntos misturados.",
      "order": 15,
      "tags": [
        "js",
        "módulo",
        "organização",
        "reuso"
      ]
    },
    {
      "id": "lesson-js-testing",
      "module_id": "module-js-basics",
      "language": "javascript",
      "concept": "testes",
      "title": "Testes unitarios para iniciantes",
      "content": "Objetivo: garantir que funções continuem corretas ao evoluir o codigo. Um teste unitario valida uma regra pequena, com entrada previsivel e saida esperada. Padrão util: organize por cenarios de sucesso, limite e erro. Erro comum: testar varias responsabilidades ao mesmo tempo e não saber onde o bug aconteceu.",
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
          "text": "Pense no conceito central da lição: O que e a Web."
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
          "text": "Revise o ponto principal da lição: O que e a Web."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e a Web."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: O que e HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "HTML é uma linguagem de: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e HTML."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: HTML vs CSS vs JavaScript."
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
          "text": "Pense no conceito central da lição: HTML vs CSS vs JavaScript."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: HTML vs CSS vs JavaScript."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Como o navegador interpreta HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Como o navegador interpreta HTML."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Como o navegador interpreta HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: O que são tags."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "starter_code": "<h1>Título<{{blank1}}h1>",
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
          "text": "Revise o ponto principal da lição: O que são tags."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: /"
        }
      ],
      "solution": "<h1>Título</h1>",
      "difficulty": "easy",
      "estimated_time": 40
    },
    {
      "id": "legacy-html-u1-l5-practice",
      "lesson_id": "legacy-html-u1-l5",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que são tags",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: O que são tags."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que são tags"
        }
      ],
      "solution": "O que são tags",
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
          "text": "Revise o ponto principal da lição: O que são atributos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: O que são atributos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "O que são atributos",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: O que são atributos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: O que são atributos"
        }
      ],
      "solution": "O que são atributos",
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
              "answer": "Não",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: HTML não e linguagem de programacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não"
        }
      ],
      "solution": "Não",
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
          "text": "Pense no conceito central da lição: HTML não e linguagem de programacao."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "HTML não e linguagem de programacao",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: HTML não e linguagem de programacao."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: HTML não e linguagem de programacao"
        }
      ],
      "solution": "HTML não e linguagem de programacao",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l1-3",
      "lesson_id": "legacy-html-u2-l1",
      "type": "blank",
      "prompt": "Complete a declaração:",
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
          "text": "Revise o ponto principal da lição: <!DOCTYPE html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <!DOCTYPE html>."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da lição",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: <!DOCTYPE html>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da lição"
        }
      ],
      "solution": "Tema da lição",
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
          "text": "Revise o ponto principal da lição: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Crie um elemento html com classe:",
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
          "text": "Revise o ponto principal da lição: Tag <html>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tag <head>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "O conteúdo do <head> aparece na página? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Não diretamente",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Tag <head>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, sempre / As vezes."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não diretamente"
        }
      ],
      "solution": "Não diretamente",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l3-practice",
      "lesson_id": "legacy-html-u2-l3",
      "type": "blank",
      "prompt": "Prática guiada: Crie um elemento head com classe:",
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
          "text": "Revise o ponto principal da lição: Tag <head>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Onde vai o conteúdo visivel?",
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
          "text": "Revise o ponto principal da lição: Tag <body>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Tag <body>."
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
      "prompt": "Prática guiada: Crie um elemento body com classe:",
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
          "text": "Revise o ponto principal da lição: Tag <body>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Adicione um título:",
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
          "text": "Revise o ponto principal da lição: <title>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <title>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: No corpo da página / No rodape."
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
      "prompt": "Prática guiada: Crie um elemento title com classe:",
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
          "text": "Revise o ponto principal da lição: <title>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Defina a codificação:",
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
          "text": "Revise o ponto principal da lição: <meta charset>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Qual codificação suporta acentos? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <meta charset>."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da lição",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: <meta charset>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da lição"
        }
      ],
      "solution": "Tema da lição",
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
          "text": "Revise o ponto principal da lição: <meta name=\"viewport\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "A meta viewport é importante para: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <meta name=\"viewport\">."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Tema da lição",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: <meta name=\"viewport\">."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Tema da lição"
        }
      ],
      "solution": "Tema da lição",
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
          "text": "Revise o ponto principal da lição: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Comentarios aparecem na página? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Não",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não"
        }
      ],
      "solution": "Não",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l8-practice",
      "lesson_id": "legacy-html-u2-l8",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Comentarios HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: Indentação e organização."
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
      "prompt": "Indentação afeta o funcionamento? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Não, so melhora a leitura",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Indentação e organização."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, e obrigatoria."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não, so melhora a leitura"
        }
      ],
      "solution": "Não, so melhora a leitura",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u2-l9-practice",
      "lesson_id": "legacy-html-u2-l9",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Indentação e organização",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Indentação e organização."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Indentação e organização"
        }
      ],
      "solution": "Indentação e organização",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l1-2",
      "lesson_id": "legacy-html-u3-l1",
      "type": "blank",
      "prompt": "Crie o título principal:",
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
          "text": "Revise o ponto principal da lição: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Qual e o maior título? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Titulos <h1> a <h6>."
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
      "prompt": "Crie um subtitulo (nível 2):",
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
          "text": "Revise o ponto principal da lição: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Crie um elemento h1 com classe:",
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
          "text": "Revise o ponto principal da lição: Titulos <h1> a <h6>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Paragrafos <p>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Paragrafos são elementos: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Paragrafos <p>."
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
      "prompt": "Prática guiada: Crie um elemento p com classe:",
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
          "text": "Revise o ponto principal da lição: Paragrafos <p>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Quebra de linha <br>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Não",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Quebra de linha <br>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não"
        }
      ],
      "solution": "Não",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u3-l3-practice",
      "lesson_id": "legacy-html-u3-l3",
      "type": "blank",
      "prompt": "Prática guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Quebra de linha <br>."
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
      "starter_code": "<p>Seção 1</p>\n<{{blank1}}>\n<p>Seção 2</p>",
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
          "text": "Revise o ponto principal da lição: Linha horizontal <hr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: hr"
        }
      ],
      "solution": "<p>Seção 1</p>\n<hr>\n<p>Seção 2</p>",
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
          "text": "Pense no conceito central da lição: Linha horizontal <hr>."
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
      "prompt": "Prática guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Linha horizontal <hr>."
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
      "prompt": "Deixe \"atenção\" em negrito:",
      "starter_code": "<p><{{blank1}}>Atenção</{{blank2}}>: leia com cuidado.</p>",
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
          "text": "Revise o ponto principal da lição: Negrito <strong>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: strong"
        }
      ],
      "solution": "<p><strong>Atenção</strong>: leia com cuidado.</p>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u3-l5-4",
      "lesson_id": "legacy-html-u3-l5",
      "type": "blank",
      "prompt": "Qual tag indica importancia semântica? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Negrito <strong>."
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
      "prompt": "Prática guiada: Crie um elemento strong com classe:",
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
          "text": "Revise o ponto principal da lição: Negrito <strong>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Italico <em>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Italico <em>."
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
      "prompt": "Prática guiada: Crie um elemento em com classe:",
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
          "text": "Revise o ponto principal da lição: Italico <em>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Texto pre-formatado <pre>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Texto pre-formatado <pre>."
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
      "prompt": "Prática guiada: Crie um elemento pre com classe:",
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
          "text": "Revise o ponto principal da lição: Texto pre-formatado <pre>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Codigo <code>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Codigo <code>."
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
      "prompt": "Prática guiada: Crie um elemento code com classe:",
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
          "text": "Revise o ponto principal da lição: Codigo <code>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Citacoes <blockquote>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Citacoes <blockquote>."
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
      "prompt": "Prática guiada: Crie um elemento blockquote com classe:",
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
          "text": "Revise o ponto principal da lição: Citacoes <blockquote>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tag <a>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Tag <a>."
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
      "prompt": "Prática guiada: Complete o link com href:",
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
          "text": "Revise o ponto principal da lição: Tag <a>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Atributo href."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Atributo href."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Atributo href."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Links externos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Links externos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Links externos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Link para página local:",
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
          "text": "Revise o ponto principal da lição: Links internos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Links internos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Link para seção com id \"contato\":",
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
          "text": "Revise o ponto principal da lição: Ancoras."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Ancoras."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Outro site / Outra página."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Ancoras."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Atributo target."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Atributo target."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Atributo target."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Atributo rel."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Indicar ao Google para não seguir",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Atributo rel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Abrir nova aba / Seguranca."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Indicar ao Google para não seguir"
        }
      ],
      "solution": "Indicar ao Google para não seguir",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u4-l7-practice",
      "lesson_id": "legacy-html-u4-l7",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Atributo rel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Links mailto."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Links mailto."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Links mailto."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Links tel."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Links tel."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Links tel."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Tag <img>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Não",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Tag <img>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não"
        }
      ],
      "solution": "Não",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u5-l1-practice",
      "lesson_id": "legacy-html-u5-l1",
      "type": "blank",
      "prompt": "Prática guiada: Complete a tag de imagem com src:",
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
          "text": "Revise o ponto principal da lição: Tag <img>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Atributo src."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Atributo src."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Atributo src."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Atributo alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Atributo alt."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Atributo alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Tamanho de imagens."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: Formatos de imagem."
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
          "text": "Pense no conceito central da lição: Formatos de imagem."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Formatos de imagem."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: <figure>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <figure>."
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
      "prompt": "Prática guiada: Crie um elemento figure com classe:",
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
          "text": "Revise o ponto principal da lição: <figure>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <figcaption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <figcaption>."
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
      "prompt": "Prática guiada: Crie um elemento figcaption com classe:",
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
          "text": "Revise o ponto principal da lição: <figcaption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <audio>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <audio>."
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
      "prompt": "Prática guiada: Crie um elemento audio com classe:",
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
          "text": "Revise o ponto principal da lição: <audio>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <video>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <video>."
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
      "prompt": "Prática guiada: Crie um elemento video com classe:",
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
          "text": "Revise o ponto principal da lição: <video>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Crie uma lista não ordenada:",
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
          "text": "Revise o ponto principal da lição: Lista não ordenada <ul>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Lista não ordenada <ul>."
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
      "prompt": "Prática guiada: Crie um elemento ul com classe:",
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
          "text": "Revise o ponto principal da lição: Lista não ordenada <ul>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Lista ordenada <ol>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Lista ordenada <ol>."
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
      "prompt": "Prática guiada: Crie um elemento ol com classe:",
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
          "text": "Revise o ponto principal da lição: Lista ordenada <ol>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Itens <li>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Não",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Itens <li>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não"
        }
      ],
      "solution": "Não",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u6-l3-practice",
      "lesson_id": "legacy-html-u6-l3",
      "type": "blank",
      "prompt": "Prática guiada: Crie um elemento li com classe:",
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
          "text": "Revise o ponto principal da lição: Itens <li>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Listas aninhadas."
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
      "prompt": "Prática guiada: Crie uma lista não ordenada:",
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
          "text": "Revise o ponto principal da lição: Listas aninhadas."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Lista de definicao <dl>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Lista de definicao <dl>."
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
      "prompt": "Prática guiada: Crie um elemento dl com classe:",
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
          "text": "Revise o ponto principal da lição: Lista de definicao <dl>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tag <table>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Tabelas são para: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Tag <table>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Layout de página."
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
      "prompt": "Prática guiada: Crie um elemento table com classe:",
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
          "text": "Revise o ponto principal da lição: Tag <table>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <tr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <tr>."
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
      "prompt": "Prática guiada: Crie um elemento tr com classe:",
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
          "text": "Revise o ponto principal da lição: <tr>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <td>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <td>."
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
      "prompt": "Prática guiada: Crie um elemento td com classe:",
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
          "text": "Revise o ponto principal da lição: <td>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <th>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <th>."
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
      "prompt": "Prática guiada: Crie um elemento th com classe:",
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
          "text": "Revise o ponto principal da lição: <th>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <thead>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <thead>."
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
      "prompt": "Prática guiada: Crie um elemento thead com classe:",
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
          "text": "Revise o ponto principal da lição: <thead>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <tbody>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <tbody>."
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
      "prompt": "Prática guiada: Crie um elemento tbody com classe:",
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
          "text": "Revise o ponto principal da lição: <tbody>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <tfoot>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <tfoot>."
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
      "prompt": "Prática guiada: Crie um elemento tfoot com classe:",
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
          "text": "Revise o ponto principal da lição: <tfoot>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: colspan e rowspan."
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
      "prompt": "Prática guiada: Complete a estrutura da tabela:",
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
          "text": "Revise o ponto principal da lição: colspan e rowspan."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Adicione um título:",
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
          "text": "Revise o ponto principal da lição: <caption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <caption>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Último elemento."
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
      "prompt": "Prática guiada: Crie um elemento caption com classe:",
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
          "text": "Revise o ponto principal da lição: <caption>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Tag <form>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Tag <form>."
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
      "prompt": "Prática guiada: Crie um elemento form com classe:",
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
          "text": "Revise o ponto principal da lição: Tag <form>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: action."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: action."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: action."
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
          "text": "Revise o ponto principal da lição: method."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: method."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: method."
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
          "text": "Revise o ponto principal da lição: <input type=\"text\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <input type=\"text\">."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"text\">."
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
          "text": "Revise o ponto principal da lição: <input type=\"email\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "type=\"email\" faz validação: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"email\">."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"email\">."
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
          "text": "Revise o ponto principal da lição: <input type=\"password\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <input type=\"password\">."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"password\">."
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
          "text": "Revise o ponto principal da lição: <input type=\"checkbox\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <input type=\"checkbox\">."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"checkbox\">."
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
          "text": "Revise o ponto principal da lição: <input type=\"radio\">."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <input type=\"radio\">."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <input type=\"radio\">."
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
          "text": "Revise o ponto principal da lição: <textarea>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <textarea>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Não."
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
      "prompt": "Prática guiada: Crie um elemento textarea com classe:",
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
          "text": "Revise o ponto principal da lição: <textarea>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <select>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <select>."
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
      "prompt": "Prática guiada: Crie um elemento select com classe:",
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
          "text": "Revise o ponto principal da lição: <select>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Crie uma opção:",
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
          "text": "Revise o ponto principal da lição: <option>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <option>."
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
      "prompt": "Prática guiada: Crie um elemento option com classe:",
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
          "text": "Revise o ponto principal da lição: <option>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <button>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <button>."
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
      "prompt": "Prática guiada: Crie um elemento button com classe:",
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
          "text": "Revise o ponto principal da lição: <button>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: required."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: required."
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
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: required."
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
          "text": "Revise o ponto principal da lição: placeholder."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Você digita",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: placeholder."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: A página carrega."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Você digita"
        }
      ],
      "solution": "Você digita",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l14-practice",
      "lesson_id": "legacy-html-u8-l14",
      "type": "blank",
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: placeholder."
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
          "text": "Revise o ponto principal da lição: name."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Não e enviado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: name."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: E enviado normalmente."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não e enviado"
        }
      ],
      "solution": "Não e enviado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u8-l15-practice",
      "lesson_id": "legacy-html-u8-l15",
      "type": "blank",
      "prompt": "Prática guiada: Qual atributo define o tipo do input? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: name."
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
          "text": "Pense no conceito central da lição: O que e HTML semantico."
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
          "text": "Pense no conceito central da lição: O que e HTML semantico."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e HTML semantico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: <header>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <header>."
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
      "prompt": "Prática guiada: Crie um elemento header com classe:",
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
          "text": "Revise o ponto principal da lição: <header>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Crie navegação:",
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
          "text": "Revise o ponto principal da lição: <nav>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <nav>."
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
      "prompt": "Prática guiada: Crie um elemento nav com classe:",
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
          "text": "Revise o ponto principal da lição: <nav>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "starter_code": "<{{blank1}}>\n <h1>Bem-vindo</h1>\n <p>Conteúdo principal aqui.</p>\n</{{blank2}}>",
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
          "text": "Revise o ponto principal da lição: <main>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: main"
        }
      ],
      "solution": "<main>\n <h1>Bem-vindo</h1>\n <p>Conteúdo principal aqui.</p>\n</main>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l4-3",
      "lesson_id": "legacy-html-u9-l4",
      "type": "blank",
      "prompt": "Quantos <main> por página? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <main>."
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
      "prompt": "Prática guiada: Crie um elemento main com classe:",
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
          "text": "Revise o ponto principal da lição: <main>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Crie uma seção:",
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
          "text": "Revise o ponto principal da lição: <section>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Conteúdo tematicamente relacionado",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: <section>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Qualquer conteúdo."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Conteúdo tematicamente relacionado"
        }
      ],
      "solution": "Conteúdo tematicamente relacionado",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u9-l5-practice",
      "lesson_id": "legacy-html-u9-l5",
      "type": "blank",
      "prompt": "Prática guiada: Crie um elemento section com classe:",
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
          "text": "Revise o ponto principal da lição: <section>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "starter_code": "<{{blank1}}>\n <h2>Título do Post</h2>\n <p>Conteúdo do post...</p>\n</{{blank2}}>",
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
          "text": "Revise o ponto principal da lição: <article>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: article"
        }
      ],
      "solution": "<article>\n <h2>Título do Post</h2>\n <p>Conteúdo do post...</p>\n</article>",
      "difficulty": "medium",
      "estimated_time": 55
    },
    {
      "id": "legacy-html-u9-l6-4",
      "lesson_id": "legacy-html-u9-l6",
      "type": "blank",
      "prompt": "<article> e para conteúdo: Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <article>."
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
      "prompt": "Prática guiada: Crie um elemento article com classe:",
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
          "text": "Revise o ponto principal da lição: <article>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <aside>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <aside>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Conteúdo principal."
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
      "prompt": "Prática guiada: Crie um elemento aside com classe:",
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
          "text": "Revise o ponto principal da lição: <aside>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <footer>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <footer>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Navegação principal."
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
      "prompt": "Prática guiada: Crie um elemento footer com classe:",
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
          "text": "Revise o ponto principal da lição: <footer>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Quando usar div."
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
          "text": "Pense no conceito central da lição: Quando usar div."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Semântica."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Quando usar div."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: id."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
              "answer": "Unico na página",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: id."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Repetido quando necessario."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Unico na página"
        }
      ],
      "solution": "Unico na página",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l1-practice",
      "lesson_id": "legacy-html-u10-l1",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: id."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: class."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: class."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: class."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: style."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: style."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: style."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: title."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: title."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: title."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: lang."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: lang."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: lang."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: data-*."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: data-*."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: data-*."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "starter_code": "<div {{blank1}}>Conteúdo oculto</div>",
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
          "text": "Revise o ponto principal da lição: hidden."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
        },
        {
          "level": 3,
          "text": "Resposta esperada: hidden"
        }
      ],
      "solution": "<div hidden>Conteúdo oculto</div>",
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
              "answer": "Existe mas não aparece",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: E removido do DOM."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Existe mas não aparece"
        }
      ],
      "solution": "Existe mas não aparece",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u10-l7-practice",
      "lesson_id": "legacy-html-u10-l7",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: hidden."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: tabindex."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: tabindex."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: tabindex."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: O que e acessibilidade."
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
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e acessibilidade."
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
          "text": "Pense no conceito central da lição: Uso correto de alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Não colocar alt."
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
          "text": "Revise o ponto principal da lição: Uso correto de alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Uso correto de alt."
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
          "text": "Revise o ponto principal da lição: <label> e formularios."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <label> e formularios."
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
      "prompt": "Prática guiada: Crie um elemento label com classe:",
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
          "text": "Revise o ponto principal da lição: <label> e formularios."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Ordem de tabulacao."
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
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Ordem de tabulacao."
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
              "answer": "Quando HTML nativo não basta",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Introducao a ARIA."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Em todos os elementos."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Quando HTML nativo não basta"
        }
      ],
      "solution": "Quando HTML nativo não basta",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u11-l5-practice",
      "lesson_id": "legacy-html-u11-l5",
      "type": "blank",
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Introducao a ARIA."
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
          "text": "Revise o ponto principal da lição: aria-label."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: aria-label."
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
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: aria-label."
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
          "text": "Revise o ponto principal da lição: aria-hidden."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: aria-hidden."
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
      "prompt": "Prática guiada: Qual atributo descreve uma imagem? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: aria-hidden."
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
      "prompt": "Quantos h1 por página? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Titulos hierarquicos."
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
          "text": "Pense no conceito central da lição: Titulos hierarquicos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Titulos hierarquicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: Estrutura semântica."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Estrutura semântica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Estrutura semântica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Estrutura semântica"
        }
      ],
      "solution": "Estrutura semântica",
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
          "text": "Revise o ponto principal da lição: Meta description."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Meta description."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Meta description."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: Links internos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Links internos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: Imagens com alt."
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
          "text": "Revise o ponto principal da lição: Imagens com alt."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Imagens com alt."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: <link>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <link>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Qual dessas tags e auto-fechada? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: <link>."
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
          "text": "Revise o ponto principal da lição: <style>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <style>."
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
      "prompt": "Prática guiada: Crie um elemento style com classe:",
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
          "text": "Revise o ponto principal da lição: <style>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: <script>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: <script>."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Não."
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
      "prompt": "Prática guiada: Crie um elemento script com classe:",
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
          "text": "Revise o ponto principal da lição: <script>."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: defer."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: defer."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: defer."
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
          "text": "Revise o ponto principal da lição: async."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: async."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: async."
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
          "text": "Pense no conceito central da lição: Codigo limpo."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Codigo limpo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
              "answer": "<!-- Formulario de contato - requer validação JS -->",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Comentarios úteis."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: <!-- paragrafo -->."
        },
        {
          "level": 3,
          "text": "Resposta esperada: <!-- Formulario de contato - requer validação JS -->"
        }
      ],
      "solution": "<!-- Formulario de contato - requer validação JS -->",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u14-l2-practice",
      "lesson_id": "legacy-html-u14-l2",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Comentarios úteis",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Comentarios úteis."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Comentarios úteis"
        }
      ],
      "solution": "Comentarios úteis",
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
          "text": "Pense no conceito central da lição: Validação HTML."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Validação HTML",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Validação HTML."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Validação HTML"
        }
      ],
      "solution": "Validação HTML",
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
          "text": "Pense no conceito central da lição: Performance básica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Não faz diferenca."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Performance básica",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Performance básica."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Performance básica"
        }
      ],
      "solution": "Performance básica",
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
          "text": "Pense no conceito central da lição: Compatibilidade."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Compatibilidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Página pessoal."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Página pessoal",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Página pessoal."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Página pessoal"
        }
      ],
      "solution": "Página pessoal",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u15-l2-3",
      "lesson_id": "legacy-html-u15-l2",
      "type": "blank",
      "prompt": "Crie a seção hero:",
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
          "text": "Revise o ponto principal da lição: Landing page simples."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Landing page simples."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Página de contato."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Página de contato",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Página de contato."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Página de contato"
        }
      ],
      "solution": "Página de contato",
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
          "text": "Revise o ponto principal da lição: Formulario funcional."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Formulario funcional."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Crie a navegação:",
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
          "text": "Revise o ponto principal da lição: Mini site institucional."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Mini site institucional."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
              "answer": "Não, usam HTML por baixo",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: HTML vs frameworks."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Sim, completamente."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Não, usam HTML por baixo"
        }
      ],
      "solution": "Não, usam HTML por baixo",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l1-practice",
      "lesson_id": "legacy-html-u16-l1",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: HTML vs frameworks."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Web Components são: Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Padrão nativo dos navegadores",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Introducao a Web Components."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Um framework específico."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Padrão nativo dos navegadores"
        }
      ],
      "solution": "Padrão nativo dos navegadores",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "legacy-html-u16-l2-practice",
      "lesson_id": "legacy-html-u16-l2",
      "type": "blank",
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Introducao a Web Components."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: HTML em PWAs."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: HTML em PWAs."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: HTML em PWAs."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Pense no conceito central da lição: O que e CSS."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura do conteúdo / Logica e interatividade."
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
          "text": "Revise o ponto principal da lição: O que e CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: O que e CSS."
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
          "text": "Revise o ponto principal da lição: Seletores."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Seletores."
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
      "prompt": "Prática guiada: Qual seletor aplica em classe? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Seletores."
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
          "text": "Revise o ponto principal da lição: Cores e tipografia."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Cores e tipografia."
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
      "prompt": "Prática guiada: Defina a cor do texto:",
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
          "text": "Revise o ponto principal da lição: Cores e tipografia."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Box model."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Box model."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Box model."
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
          "text": "Pense no conceito central da lição: Cascata e especificidade."
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
          "text": "Revise o ponto principal da lição: Cascata e especificidade."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Cascata e especificidade."
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
          "text": "Revise o ponto principal da lição: Flexbox."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Flexbox."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Flexbox."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Grid."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Grid."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Grid."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Position."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Position."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Position."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Responsividade."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Responsividade."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Responsividade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Pseudo-classes."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Transitions."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Transitions."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Transitions."
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
      "prompt": "Defina uma animação:",
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
          "text": "Revise o ponto principal da lição: Animations."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Animations."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Animations."
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
      "prompt": "Defina uma variável:",
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
          "text": "Revise o ponto principal da lição: Variaveis CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Use a variável:",
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
          "text": "Revise o ponto principal da lição: Variaveis CSS."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Variaveis CSS."
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
          "text": "Revise o ponto principal da lição: Pseudo-elementos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Pseudo-elementos."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Pseudo-elementos."
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
          "text": "Revise o ponto principal da lição: Sombras e fundos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Sombras e fundos."
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
      "prompt": "Prática guiada: Qual propriedade controla tamanho da fonte? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Sombras e fundos."
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
          "text": "Revise o ponto principal da lição: Seletores basicos."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Seletores basicos."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Seletores basicos."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Combinadores."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Revise o ponto principal da lição: Combinadores."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Combinadores."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Combinadores."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Pseudo-classes."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Pseudo-classes."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Qual seletor e mais específico? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Especificidade."
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
          "text": "Revise o ponto principal da lição: Especificidade."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Especificidade."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Flex container."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Flex container."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Flex container."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Flex items."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Flex items."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Flex items."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
          "text": "Revise o ponto principal da lição: Grid básico."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Grid básico."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
      "starter_code": "{{blank1}}",
      "validations": [
        {
          "type": "blank",
          "blanks": [
            {
              "id": "blank1",
              "answer": "Grid básico",
              "placeholder": "resposta"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Pense no conceito central da lição: Grid básico."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
        },
        {
          "level": 3,
          "text": "Resposta esperada: Grid básico"
        }
      ],
      "solution": "Grid básico",
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
          "text": "Revise o ponto principal da lição: Layout responsivo."
        },
        {
          "level": 2,
          "text": "Compare com o padrão de sintaxe apresentado no enunciado."
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
          "text": "Pense no conceito central da lição: Layout responsivo."
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
      "prompt": "Prática guiada: Com base no que você acabou de estudar, qual e o tema principal desta lição? Digite a resposta correta.",
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
          "text": "Pense no conceito central da lição: Layout responsivo."
        },
        {
          "level": 2,
          "text": "Evite estas alternativas: Estrutura básica de HTML / Estilizacao com CSS."
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
      "prompt": "Complete o nome da variável para guardar o nome da pessoa.",
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
          "text": "Use um nome de variável que descreva o valor guardado."
        },
        {
          "level": 2,
          "text": "O valor é o nome de uma pessoa."
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
      "prompt": "Crie uma variável let chamada contador iniciando em 0.",
      "starter_code": "// escreva seu codigo abaixo",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "contador deve ser número",
              "code": "assert(typeof contador === 'number', 'contador deve ser número');"
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
      "prompt": "Corrija o bug: a função monta a mensagem, mas não devolve o resultado.",
      "starter_code": "function criarMensagem(nome) {\n  const mensagem = \"Ola, \" + nome;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "função retorna mensagem",
              "code": "assert(criarMensagem('Ada') === 'Ola, Ada', 'A função deve retornar a mensagem');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A variável mensagem esta correta. Falta devolver o valor."
        },
        {
          "level": 2,
          "text": "Use return no final da função."
        },
        {
          "level": 3,
          "text": "Return mensagem no final da função."
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
      "prompt": "Complete a condição com a variável correta.",
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
          "text": "A variável representa a idade da pessoa."
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
      "prompt": "Implemente a função isPar que retorna true para números pares.",
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
          "text": "Número par deixa resto 0 ao dividir por 2."
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
      "prompt": "Corrija a comparação para que 18 anos também seja permitido.",
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
      "prompt": "Complete o nome da função de soma.",
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
          "text": "A função adiciona dois números."
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
              "name": "dobro e função",
              "code": "assert(typeof dobro === 'function', 'dobro deve ser função');"
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
          "text": "Use const para armazenar a função."
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
      "prompt": "Implemente a função saudacao que retorna 'Ola, <nome>'.",
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
          "text": "Você pode usar concatenacao ou template string."
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
      "prompt": "Corrija a função para usar largura e altura no calculo da area.",
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
          "text": "Para executar 5 vezes, o último valor de i deve ser 4."
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
      "prompt": "Crie a função somaAte(n) que soma todos os números de 1 ate n.",
      "starter_code": "function somaAte(n) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "função existe",
              "code": "assert(typeof somaAte === 'function', 'somaAte deve ser função');"
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
          "text": "Crie uma variável acumuladora com valor inicial 0."
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
      "starter_code": "function contarAteTres() {\n  let número = 0;\n  while (número < 3) {\n    número = número + 0;\n  }\n  return número;\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "deve retornar 3",
              "code": "assert(contarAteTres() === 3, 'função deve retornar 3');"
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
          "text": "Some 1 em número a cada iteração."
        },
        {
          "level": 3,
          "text": "número = número + 1;"
        }
      ],
      "solution": "function contarAteTres() {\n  let número = 0;\n  while (número < 3) {\n    número = número + 1;\n  }\n  return número;\n}",
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
              "name": "retorna primeiro número",
              "code": "assert(primeiroItem([10, 20]) === 10, 'deve funcionar com números');"
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
      "prompt": "Corrija a função para adicionar tarefa no final da lista.",
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
              "name": "último item deve ser tarefa nova",
              "code": "const tarefas = ['estudar']; const resultado = adicionarTarefa(tarefas, 'praticar'); assert(resultado[1] === 'praticar', 'deve adicionar no final');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "pop remove item; aqui você precisa adicionar."
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
          "text": "A propriedade é a mesma definida no objeto literal."
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
      "prompt": "Crie a função criarProduto(nome, preco) que retorna um objeto com essas propriedades.",
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
          "text": "Percentual não e valor fixo. Você precisa calcular uma parte do preco."
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
          "text": "Você pode usar split(' ') e join('-')."
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
      "prompt": "Corrija a função para retornar o texto com primeira letra maiuscula.",
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
          "text": "Evite comparação solta para reduzir bugs."
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
      "prompt": "Implemente podeAcessarAreaPremium(logado, assinaturaAtiva). Deve retornar true somente quando as duas condições forem verdadeiras.",
      "starter_code": "function podeAcessarAreaPremium(logado, assinaturaAtiva) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "duas condições verdadeiras",
              "code": "assert(podeAcessarAreaPremium(true, true) === true, \"deve liberar quando ambos forem true\");"
            },
            {
              "name": "não logado",
              "code": "assert(podeAcessarAreaPremium(false, true) === false, \"deve negar se não estiver logado\");"
            },
            {
              "name": "sem assinatura",
              "code": "assert(podeAcessarAreaPremium(true, false) === false, \"deve negar se não tiver assinatura\");"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use operador && para combinar as condições."
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
          "text": "A comparação deve incluir o 7."
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
      "starter_code": "const números = [1, 2, 3];\nconst dobrados = números.{{blank1}}((n) => n * 2);",
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
      "solution": "const números = [1, 2, 3];\nconst dobrados = números.map((n) => n * 2);",
      "difficulty": "easy",
      "estimated_time": 35
    },
    {
      "id": "ex-js-arrm-2",
      "lesson_id": "lesson-js-array-methods",
      "type": "code",
      "prompt": "Implemente filtrarPares(lista) usando filter para retornar somente números pares.",
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
              "code": "const resultado = filtrarPares([1, 3, 5]); assert(JSON.stringify(resultado) === JSON.stringify([]), 'deve retornar array vazio quando não houver pares');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Use lista.filter(...) com uma condição booleana."
        },
        {
          "level": 2,
          "text": "Número par: n % 2 === 0."
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
      "prompt": "Corrija a função para somar os precos corretamente com reduce.",
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
          "text": "A operação atual esta subtraindo em vez de somar."
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
      "prompt": "Implemente atualizarTexto(doc, seletor, texto): selecione o elemento, atualize textContent e retorne true. Se não existir, retorne false.",
      "starter_code": "function atualizarTexto(doc, seletor, texto) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "atualiza quando encontra elemento",
              "code": "const elemento = { textContent: 'antigo' }; const doc = { querySelector: (sel) => (sel === '.título' ? elemento : null) }; const ok = atualizarTexto(doc, '.título', 'Novo título'); assert(ok === true, 'deve retornar true quando atualizar'); assert(elemento.textContent === 'Novo título', 'deve atualizar textContent');"
            },
            {
              "name": "retorna false quando seletor não existe",
              "code": "const doc = { querySelector: () => null }; const ok = atualizarTexto(doc, '.inexistente', 'Novo'); assert(ok === false, 'deve retornar false quando não encontrar elemento');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Guarde o resultado de doc.querySelector(seletor) em uma variável."
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
      "prompt": "Corrija a função para registrar o evento correto de clique.",
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
          "text": "A função esta ouvindo o evento errado."
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
      "prompt": "Implemente a função async buscarNomeUsuario(fetchFn, url) que faz a requisicao e retorna dados.nome.",
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
      "prompt": "Corrija a função para aguardar a resposta e retornar dados.total.",
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
          "text": "Quando não usa await, resposta e dados viram Promise, não valor final."
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
      "prompt": "Corrija a função para retornar null quando houver divisao por zero.",
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
          "text": "Dividir por zero não gera excecao automaticamente em JS."
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
          "text": "Esse tipo representa resultado futuro de operação assincrona."
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
      "prompt": "Implemente esperarValor(valor) como função async que aguarda uma Promise e retorna o valor final.",
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
      "prompt": "Corrija a função para usar fallback quando a promessa principal falhar.",
      "starter_code": "function buscarComFallback(buscarPrimario, buscarSecundario) {\n  return buscarPrimario().then((dados) => dados);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "usa primario quando funciona",
              "code": "const resultado = await buscarComFallback(() => Promise.resolve('primario'), () => Promise.resolve('secundario')); assert(resultado === 'primario', 'deve manter resultado primario quando não falhar');"
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
          "text": "A função não trata erro do primario."
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
          "text": "Classes em JavaScript usam uma palavra reservada específica."
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
      "prompt": "Complete o nome do objeto que representa um módulo de calculo.",
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
          "text": "Comeca com módulo e termina com Calculo."
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
      "prompt": "Crie a função criarModuloUsuario() que retorna um objeto com dois metodos: normalizarNome(nome) e gerarSlug(nome).",
      "starter_code": "function criarModuloUsuario() {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna metodos esperados",
              "code": "const módulo = criarModuloUsuario(); assert(typeof módulo.normalizarNome === 'function', 'deve ter normalizarNome'); assert(typeof módulo.gerarSlug === 'function', 'deve ter gerarSlug');"
            },
            {
              "name": "normaliza nome",
              "code": "const módulo = criarModuloUsuario(); assert(módulo.normalizarNome('  liA  ') === 'Lia', 'normalizarNome deve ajustar espacos e capitalizacao');"
            },
            {
              "name": "gera slug",
              "code": "const módulo = criarModuloUsuario(); assert(módulo.gerarSlug('  Curso JS Básico  ') === 'curso-js-básico', 'gerarSlug deve criar slug valido');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "Retorne um objeto com as duas funções dentro."
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
      "prompt": "Corrija a função para delegar validação ao módulo recebido por parametro.",
      "starter_code": "function validarComModulo(módulo, email) {\n  return validarEmail(email);\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "usa metodo do módulo",
              "code": "let chamado = 0; const módulo = { validarEmail(valor) { chamado += 1; return valor.includes('@'); } }; const ok = validarComModulo(módulo, 'lia@email.com'); assert(ok === true, 'deve validar email correto'); assert(chamado === 1, 'deve chamar metodo do módulo uma vez');"
            },
            {
              "name": "retorna false para email invalido",
              "code": "const módulo = { validarEmail(valor) { return valor.includes('@'); } }; const ok = validarComModulo(módulo, 'email-invalido'); assert(ok === false, 'deve retornar false para email sem @');"
            }
          ]
        }
      ],
      "hints": [
        {
          "level": 1,
          "text": "A função precisa usar o parametro módulo."
        },
        {
          "level": 2,
          "text": "Chame módulo.validarEmail(email)."
        },
        {
          "level": 3,
          "text": "return módulo.validarEmail(email);"
        }
      ],
      "solution": "function validarComModulo(módulo, email) {\n  return módulo.validarEmail(email);\n}",
      "difficulty": "easy",
      "estimated_time": 45
    },
    {
      "id": "ex-js-test-1",
      "lesson_id": "lesson-js-testing",
      "type": "blank",
      "prompt": "Complete com o nome da função usada para validar condições em testes.",
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
          "text": "Essa função ja aparece nos testes autom?ticos dos exercicios."
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
      "prompt": "Implemente a função verificarParidade(fnIsPar) que retorna true somente se a função passar nos testes basicos de paridade.",
      "starter_code": "function verificarParidade(fnIsPar) {\n  // seu codigo\n}",
      "validations": [
        {
          "type": "js-tests",
          "tests": [
            {
              "name": "retorna true para implementação correta",
              "code": "const ok = verificarParidade((n) => n % 2 === 0); assert(ok === true, \"deve retornar true para função correta\");"
            },
            {
              "name": "retorna false para implementação incorreta",
              "code": "const ok = verificarParidade(() => true); assert(ok === false, \"deve retornar false para função incorreta\");"
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
      "prompt": "Corrija a função para validar todos os cenarios de teste e retornar false se qualquer um falhar.",
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

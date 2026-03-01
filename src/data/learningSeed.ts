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
      "id": "html-01-fundamentos-da-web",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "fundamentos-da-web",
      "title": "Fundamentos da Web",
      "content": "Objetivo: Entenda o que é a Web, o papel do HTML e como o navegador interpreta páginas.\n\nFato-chave: A internet é a infraestrutura física; a Web é um serviço sobre ela — páginas HTML acessadas via HTTP/HTTPS. HTML (HyperText Markup Language) define a ESTRUTURA e o significado semântico do conteúdo. CSS define a APARÊNCIA e JavaScript define o COMPORTAMENTO. Juntos formam os três pilares da web.\n\nComo o navegador funciona: Ao receber um HTML, o navegador lê de cima para baixo e constrói a árvore DOM (Document Object Model). Em seguida combina com o CSSOM (regras CSS) para gerar a Render Tree e exibir a página.\n\nO que são tags: Tags são delimitadas por < e >. A maioria vem em pares: <p>abre</p> fecha. Algumas são void elements (auto-fechantes): <br>, <img>, <input>. Atributos ficam dentro da tag de abertura: <a href=\"url\" target=\"_blank\">.\n\nExemplo de uso:\n<!-- O navegador lê HTML de cima para baixo -->\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head><title>Meu Site</title></head>\n  <body>\n    <h1>Olá, Mundo!</h1>        <!-- HTML: estrutura -->\n    <p id=\"intro\">Bem-vindo.</p> <!-- id conecta ao CSS/JS -->\n  </body>\n</html>\n\nUso comum: Todo site começa com HTML. É o esqueleto sobre o qual CSS e JS constroem a experiência completa.\n\nDica prática: Abra o DevTools (F12) → aba Elements para ver a árvore DOM em tempo real. Edite elementos diretamente no navegador para experimentar sem alterar o arquivo.",
      "order": 1,
      "tags": []
    },
    {
      "id": "html-02-estrutura-do-documento",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "estrutura-do-documento-html",
      "title": "Estrutura do Documento HTML",
      "content": "Objetivo: Construa a estrutura completa e correta de um documento HTML5.\n\nFato-chave: Todo documento HTML válido segue esta estrutura obrigatória — cada parte tem um papel específico:\n\n<!DOCTYPE html>          → informa ao navegador: padrão HTML5 (evita Quirks Mode)\n<html lang=\"pt-BR\">      → raiz da árvore DOM; lang melhora acessibilidade e SEO\n  <head>                 → metadados: charset, viewport, title, CSS, meta SEO\n    <meta charset=\"UTF-8\">           → suporta acentos, emojis e todos os idiomas\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">  → responsividade mobile\n    <title>Título da Página</title>  → aparece na aba e nos resultados do Google (50-60 chars ideal)\n    <link rel=\"stylesheet\" href=\"estilos.css\">\n  </head>\n  <body>                 → todo conteúdo visível: textos, imagens, botões, links\n    <!-- Comentários são ignorados pelo navegador — não coloque dados sensíveis! -->\n    <h1>Conteúdo Principal</h1>\n  </body>\n</html>\n\nIndentação: Use 2 espaços por nível para visualizar a hierarquia. VS Code: Shift+Alt+F formata o arquivo inteiro.\n\nExemplo de uso:\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"Aprenda HTML do zero com exemplos práticos.\">\n    <title>Curso de HTML | Plataforma</title>\n    <link rel=\"stylesheet\" href=\"estilo.css\">\n  </head>\n  <body>\n    <h1>Bem-vindo ao Curso de HTML</h1>\n    <p>Comece pelo módulo de fundamentos.</p>\n  </body>\n</html>\n\nDica prática: Confirme o modo de renderização no Console: document.compatMode. \"CSS1Compat\" = correto. \"BackCompat\" = está em Quirks Mode (falta o DOCTYPE).",
      "order": 2,
      "tags": []
    },
    {
      "id": "html-03-texto-e-formatacao",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "texto-e-formatacao",
      "title": "Texto e Formatação",
      "content": "Objetivo: Estruture e formate textos com semântica correta — não apenas aparência visual.\n\nFato-chave: Em HTML, formatação semântica importa mais que a visual. A aparência é trabalho do CSS.\n\nHierarquia de títulos: h1 (único por página) a h6. Nunca pule níveis. Use para estrutura, não para tamanho.\n<h1>Título Principal</h1>\n  <h2>Seção</h2>\n    <h3>Subseção</h3>\n\nParágrafos e quebras:\n<p>Bloco de texto independente — tem margem automática acima e abaixo.</p>\n<address>Rua das Flores, 123<br>São Paulo — SP</address>   <!-- br: parte do conteúdo, não layout -->\n<hr>  <!-- separador temático entre seções -->\n\nÊnfase semântica:\n<strong>Importância alta</strong>  → negrito + impacto em leitores de tela\n<em>Ênfase que muda o sentido</em> → itálico + entonação em leitores de tela\n<b>Negrito visual</b> / <i>Itálico visual</i>  → sem semântica, apenas aparência\n\nCódigo e citações:\n<code>display: flex</code>          → código inline dentro de texto\n<pre><code>function soma(a, b) {\n  return a + b;\n}</code></pre>                       → bloco de código com formatação preservada\n<blockquote cite=\"https://w3.org\">\n  <p>A Web é para todos.</p>\n  <footer>— <cite>Tim Berners-Lee</cite></footer>\n</blockquote>\n<q>Citação curta inline</q>         → navegador adiciona aspas automáticas\n\nDica prática: Nunca use <br><br> para criar espaço entre parágrafos — use margin CSS. Use a extensão HeadingsMap no Chrome para visualizar a hierarquia de títulos de qualquer página.",
      "order": 3,
      "tags": []
    },
    {
      "id": "html-04-links-e-navegacao",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "links-e-navegacao",
      "title": "Links e Navegação",
      "content": "Objetivo: Crie links de todos os tipos com segurança e boas práticas de UX e SEO.\n\nFato-chave: A tag <a> (anchor) é a base da Web — sem ela não existe navegação entre páginas. O atributo href define o destino.\n\nTipos de href:\n<a href=\"https://exemplo.com\">URL absoluta — outro site</a>\n<a href=\"sobre.html\">URL relativa — mesma pasta</a>\n<a href=\"../index.html\">Pasta acima</a>\n<a href=\"/produtos\">Raiz do site</a>\n<a href=\"#contato\">Âncora — mesma página</a>\n<a href=\"mailto:email@ex.com?subject=Oi\">E-mail</a>\n<a href=\"tel:+5511999999999\">(11) 99999-9999</a>\n\nSegurança com target=\"_blank\":\n<!-- SEMPRE adicione rel=\"noopener noreferrer\" com _blank — evita reverse tabnapping -->\n<a href=\"https://externo.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Abre em nova aba com segurança\n</a>\n\nÂncoras (navegação interna):\n<nav>\n  <a href=\"#sobre\">Sobre</a>\n  <a href=\"#contato\">Contato</a>\n</nav>\n<section id=\"sobre\">...</section>\n<section id=\"contato\">...</section>\n/* CSS para rolagem suave: html { scroll-behavior: smooth; } */\n\nAtributo rel para SEO:\nrel=\"nofollow\"   → Google não segue o link (links pagos, UGC)\nrel=\"sponsored\"  → links patrocinados/afiliados\nrel=\"ugc\"        → conteúdo gerado por usuários (comentários)\n\nDica prática: Use sempre texto descritivo no link — nunca \"clique aqui\". Leitores de tela anunciam apenas o texto do link para navegar pela página; \"clique aqui\" não diz nada ao usuário.",
      "order": 4,
      "tags": []
    },
    {
      "id": "html-05-imagens-e-midia",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "imagens-e-midia",
      "title": "Imagens e Mídia",
      "content": "Objetivo: Incorpore imagens, áudio e vídeo com acessibilidade e performance otimizadas.\n\nFato-chave: Imagens mal otimizadas são a principal causa de páginas lentas. Sempre defina width, height e alt.\n\nImagens corretas:\n<!-- Sempre: src, alt descritivo, width e height (evita layout shift / CLS) -->\n<img src=\"produto.webp\" alt=\"Camiseta azul com estampa de astronauta, tamanho M\" width=\"400\" height=\"400\">\n<!-- Imagem decorativa: alt=\"\" (não omita o atributo!) -->\n<img src=\"divisor.svg\" alt=\"\" width=\"100\" height=\"2\">\n\nFormatos: WebP → fotos modernas (25% menor que JPG) | SVG → logos e ícones | PNG → transparência | JPG → fotos legadas\n\nResponsive image com fallback:\n<picture>\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <img src=\"hero.jpg\" alt=\"Imagem de destaque\" width=\"1200\" height=\"600\">\n</picture>\n\nFigura com legenda:\n<figure>\n  <img src=\"grafico.png\" alt=\"Gráfico de barras: crescimento de 40% em 2024\">\n  <figcaption>Figura 1 — Crescimento anual de 2024. Fonte: IBGE.</figcaption>\n</figure>\n\nÁudio e vídeo nativos:\n<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  <a href=\"podcast.mp3\">Baixar áudio</a>\n</audio>\n\n<video controls width=\"800\" height=\"450\" poster=\"capa.jpg\">\n  <source src=\"aula.mp4\" type=\"video/mp4\">\n  <source src=\"aula.webm\" type=\"video/webm\">\n</video>\n<!-- Vídeo de fundo: autoplay muted loop playsinline (sem controls) -->\n\nDica prática: Use Squoosh (squoosh.app) para converter e comprimir imagens gratuitamente no browser. Defina width e height sempre — reserva espaço antes do carregamento e melhora o Core Web Vitals (CLS).",
      "order": 5,
      "tags": []
    },
    {
      "id": "html-06-listas",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "listas-html",
      "title": "Listas",
      "content": "Objetivo: Organize informações em listas semânticas de três tipos.\n\nFato-chave: Escolha o tipo de lista correto pelo significado — não pela aparência visual (isso é CSS).\n\nLista não ordenada — ordem não importa:\n<ul>\n  <li>HTML — estrutura</li>\n  <li>CSS — aparência</li>\n  <li>JavaScript — comportamento</li>\n</ul>\n\nLista ordenada — a sequência importa:\n<ol>\n  <li>Pré-aqueça o forno a 180°C</li>\n  <li>Misture ingredientes secos</li>\n  <li>Adicione líquidos e mexa</li>\n</ol>\n<!-- Atributos: start=\"5\" (começo), reversed (regressiva), type=\"A\" (A B C...) -->\n\nLista de definição — pares termo/definição:\n<dl>\n  <dt>HTML</dt>\n  <dd>Linguagem de marcação que estrutura páginas web.</dd>\n  <dt>CSS</dt>\n  <dd>Define a aparência visual dos elementos HTML.</dd>\n</dl>\n\nListas aninhadas:\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ol>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ol>\n  </li>\n</ul>\n\nMenus de navegação (padrão da web):\n<nav>\n  <ul style=\"list-style:none; padding:0\">\n    <li><a href=\"/\">Início</a></li>\n    <li><a href=\"/blog\">Blog</a></li>\n  </ul>\n</nav>\n\nDica prática: Leitores de tela anunciam o tipo e a quantidade de itens (\"lista com 3 itens\"). Use <ul> para menus de navegação — é o padrão semântico esperado por tecnologias assistivas.",
      "order": 6,
      "tags": []
    },
    {
      "id": "html-07-tabelas",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "tabelas-html",
      "title": "Tabelas",
      "content": "Objetivo: Crie tabelas acessíveis para dados tabulares — nunca para layout de página.\n\nFato-chave: Tabelas HTML são para dados que fazem sentido em grade de linhas e colunas. Para layout de páginas, use CSS Grid ou Flexbox.\n\nEstrutura semântica completa:\n<table>\n  <caption>Resultados do 1º Trimestre de 2024</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Mês</th>\n      <th scope=\"col\">Receita</th>\n      <th scope=\"col\">Despesa</th>\n      <th scope=\"col\">Saldo</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Janeiro</th>\n      <td>R$ 10.000</td>\n      <td>R$ 7.500</td>\n      <td>R$ 2.500</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Fevereiro</th>\n      <td>R$ 12.000</td>\n      <td>R$ 8.000</td>\n      <td>R$ 4.000</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <th scope=\"row\">Total</th>\n      <td>R$ 22.000</td>\n      <td>R$ 15.500</td>\n      <td>R$ 6.500</td>\n    </tr>\n  </tfoot>\n</table>\n\nMescla de células:\n<td colspan=\"2\">Ocupa 2 colunas</td>\n<td rowspan=\"3\">Ocupa 3 linhas</td>\n\nCSS básico para tabelas:\ntable { border-collapse: collapse; width: 100%; }\nth, td { padding: 8px 12px; border-bottom: 1px solid #ddd; text-align: left; }\nthead { background: #2d3748; color: white; }\ntr:nth-child(even) { background: #f5f5f5; }  /* zebra striping */\n\nDica prática: Use scope=\"col\" em <th> de colunas e scope=\"row\" em <th> de linhas. Isso permite que leitores de tela JAWS e NVDA anunciem o cabeçalho correto para cada célula, tornando a tabela acessível.",
      "order": 7,
      "tags": []
    },
    {
      "id": "html-08-formularios",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "formularios-html",
      "title": "Formulários HTML",
      "content": "Objetivo: Crie formulários acessíveis e funcionais com validação nativa do navegador.\n\nFato-chave: O atributo name de cada campo define a chave dos dados enviados ao servidor. Sem name, o campo não é enviado.\n\nEstrutura do formulário:\n<form action=\"/cadastro\" method=\"POST\" novalidate>\n  <!-- action: onde enviar | method: GET (URL) ou POST (corpo HTTP) -->\n\n  <label for=\"nome\">Nome completo *</label>\n  <input type=\"text\" id=\"nome\" name=\"nome\" required placeholder=\"João Silva\">\n\n  <label for=\"email\">E-mail *</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n\n  <label for=\"senha\">Senha *</label>\n  <input type=\"password\" id=\"senha\" name=\"senha\" minlength=\"8\" required>\n\n  <label for=\"telefone\">Telefone</label>\n  <input type=\"tel\" id=\"telefone\" name=\"telefone\" pattern=\"[0-9]{10,11}\">\n\n  <label for=\"nascimento\">Data de nascimento</label>\n  <input type=\"date\" id=\"nascimento\" name=\"nascimento\">\n\n  <label for=\"bio\">Biografia</label>\n  <textarea id=\"bio\" name=\"bio\" rows=\"4\" maxlength=\"500\"\n            placeholder=\"Conte um pouco sobre você...\"></textarea>\n\n  <label for=\"estado\">Estado</label>\n  <select id=\"estado\" name=\"estado\">\n    <option value=\"\">-- Selecione --</option>\n    <option value=\"SP\">São Paulo</option>\n    <option value=\"RJ\">Rio de Janeiro</option>\n  </select>\n\n  <label>\n    <input type=\"checkbox\" name=\"termos\" required>\n    Aceito os <a href=\"/termos\">Termos de Uso</a>\n  </label>\n\n  <button type=\"submit\">Cadastrar</button>\n  <button type=\"reset\">Limpar</button>\n</form>\n\nTipos de input essenciais: text | email | password | number | tel | date | checkbox | radio | file | range | color | hidden | submit\n\nValidação nativa (sem JavaScript):\nrequired          → campo obrigatório\nminlength=\"8\"     → mínimo de caracteres\nmaxlength=\"100\"   → máximo de caracteres\nmin=\"0\" max=\"120\" → para numbers e dates\npattern=\"regex\"   → validação por expressão regular\ntype=\"email\"      → valida formato de e-mail automaticamente\n\nDica prática: SEMPRE use <label for=\"id\"> associado ao campo pelo id. Isso amplia a área clicável (UX) e permite que leitores de tela identifiquem o campo corretamente (acessibilidade). Nunca use placeholder como substituto do label — ele desaparece ao digitar.",
      "order": 8,
      "tags": []
    },
    {
      "id": "html-09-html-semantico",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "html-semantico",
      "title": "HTML Semântico",
      "content": "Objetivo: Use elementos semânticos do HTML5 para estruturar páginas de forma significativa.\n\nFato-chave: HTML semântico significa usar a tag correta para cada tipo de conteúdo. Isso melhora acessibilidade, SEO e manutenção — o código \"descreve\" o que é, não só como parece.\n\nEstrutura semântica de uma página típica:\n<header>        → cabeçalho do site ou de uma seção (logo, nav principal)\n  <nav>         → navegação principal — links para outras áreas do site\n    <ul>...</ul>\n  </nav>\n</header>\n\n<main>          → conteúdo principal ÚNICO da página (apenas um por documento)\n  <article>     → conteúdo autônomo que faz sentido fora do contexto (post, notícia)\n    <h1>Título do Artigo</h1>\n    <p>Texto...</p>\n\n    <section>   → agrupamento temático dentro de um article ou main\n      <h2>Subtópico</h2>\n    </section>\n  </article>\n\n  <aside>       → conteúdo complementar, lateralmente relacionado (sidebar, anúncio)\n</main>\n\n<footer>        → rodapé do site (contatos, links legais, copyright)\n\nQuando usar <div>: Quando NENHUM elemento semântico se aplica. Use para agrupamentos puramente estruturais/visuais sem significado de conteúdo.\n\nRegra prática:\nheader → cabeçalho\nnav    → navegação\nmain   → conteúdo principal (único!)\narticle→ conteúdo independente (blog post, produto, comentário)\nsection→ agrupamento temático com heading próprio\naside  → conteúdo secundário/complementar\nfooter → rodapé\n\nDica prática: Instale a extensão \"Web Developer\" no Chrome → Information → View Document Outline. Ela mostra a hierarquia semântica da sua página. Se tudo estiver em <div>, você precisa revisar a semântica.",
      "order": 9,
      "tags": []
    },
    {
      "id": "html-10-atributos-globais",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "atributos-globais-html",
      "title": "Atributos Globais",
      "content": "Objetivo: Domine os atributos disponíveis em qualquer elemento HTML.\n\nFato-chave: Atributos globais podem ser usados em qualquer tag HTML. São fundamentais para conectar HTML ao CSS e JavaScript.\n\nAtributos globais essenciais:\nid=\"identificador-unico\"      → único por página; usado por CSS (#id) e JS (getElementById)\nclass=\"classe1 classe2\"       → pode repetir; usado por CSS (.classe) e JS\nstyle=\"color: red;\"           → CSS inline — evite; prefira arquivos .css externos\ntitle=\"Dica ao passar o mouse\" → tooltip nativo do navegador\nlang=\"pt-BR\"                  → idioma do conteúdo (pode sobrescrever o lang do <html>)\nhidden                        → oculta o elemento (como display:none mas semântico)\ntabindex=\"0\"                  → inclui na ordem de tabulação (Tab); -1 remove do Tab\ndata-*=\"valor\"                → dados customizados para JS sem poluir atributos nativos\n\nExemplos práticos:\n<!-- id para JS e ancoragem -->\n<section id=\"sobre-nos\">...</section>\n\n<!-- class para estilos CSS -->\n<button class=\"btn btn-primary\">Salvar</button>\n\n<!-- data-* para passar dados ao JavaScript -->\n<button data-produto-id=\"42\" data-preco=\"99.90\" class=\"btn-comprar\">\n  Comprar\n</button>\n<script>\n  document.querySelector('.btn-comprar').addEventListener('click', function() {\n    const id = this.dataset.produtoId;   // \"42\"\n    const preco = this.dataset.preco;    // \"99.90\"\n  });\n</script>\n\n<!-- tabindex para acessibilidade de elementos não interativos -->\n<div tabindex=\"0\" role=\"button\" onclick=\"ação()\">Elemento clicável</div>\n\nDica prática: Nunca use id com espaços (inválido) ou começando com número. IDs devem ser únicos na página — se precisar reutilizar, use class. Atributos data-* são a forma correta de embutir dados para JavaScript sem usar variáveis globais ou atributos inválidos.",
      "order": 10,
      "tags": []
    },
    {
      "id": "html-11-acessibilidade-e-seo",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "acessibilidade-e-seo-html",
      "title": "Acessibilidade e SEO",
      "content": "Objetivo: Torne suas páginas acessíveis para todos e bem posicionadas nos motores de busca.\n\nFato-chave: Acessibilidade e SEO compartilham muitas práticas. Um HTML semântico e bem estruturado beneficia ambos simultaneamente.\n\nAcessibilidade (a11y):\n1. Sempre use alt descritivo em imagens (ou alt=\"\" para decorativas)\n2. Associe labels a inputs com for=\"id\" — nunca omita o <label>\n3. Garanta ordem de tabulação lógica (tabindex mínimo; use HTML na ordem correta)\n4. Contraste de cores: mínimo 4.5:1 para texto normal (verifique em webaim.org/contrast)\n5. ARIA somente quando HTML nativo não resolve:\n   role=\"alert\" → anuncia mudanças dinâmicas\n   aria-label=\"Fechar\" → rótulo para elementos sem texto visível\n   aria-hidden=\"true\" → oculta elemento de leitores de tela (ícones decorativos)\n   aria-expanded=\"false\" → estado de menus/accordions\n\nSEO On-page:\n<head>\n  <title>Palavra-chave Principal | Nome do Site</title>           <!-- 50-60 chars -->\n  <meta name=\"description\" content=\"Resumo atraente com a palavra-chave \n    principal. Ideal entre 150-160 caracteres.\">\n  <link rel=\"canonical\" href=\"https://seusite.com/pagina\">       <!-- evita conteúdo duplicado -->\n  <meta property=\"og:title\" content=\"Título para redes sociais\"> <!-- Open Graph -->\n  <meta property=\"og:image\" content=\"https://.../imagem.jpg\">\n</head>\n\nPilares de SEO com HTML:\n- Um único <h1> por página com a palavra-chave principal\n- Hierarquia de títulos lógica (h1 → h2 → h3)\n- Alt em imagens (o Google indexa imagens pelo alt)\n- URLs descritivas e amigáveis (use <link rel=\"canonical\">)\n- Velocidade de carregamento (imagens em WebP, scripts com defer)\n- Dados estruturados (Schema.org via JSON-LD no <script type=\"application/ld+json\">)\n\nFerramentas: Google Search Console, Lighthouse (DevTools → aba Lighthouse), axe DevTools (extensão para acessibilidade).\n\nDica prática: Execute Lighthouse (DevTools → Lighthouse → Analisar) para obter uma pontuação de acessibilidade e SEO com sugestões específicas. Tente atingir 90+ em todas as categorias.",
      "order": 11,
      "tags": []
    },
    {
      "id": "html-12-integrando-css-e-js",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "integrando-css-js-html",
      "title": "Integrando CSS e JavaScript",
      "content": "Objetivo: Conecte CSS e JavaScript ao HTML da forma correta e com melhor performance.\n\nFato-chave: A posição e os atributos dos elementos <link> e <script> afetam drasticamente o desempenho de carregamento da página.\n\nCSS — sempre no <head>:\n<!-- Arquivo externo (recomendado) -->\n<link rel=\"stylesheet\" href=\"estilos.css\">\n\n<!-- CSS inline na tag (apenas exceções — evite) -->\n<p style=\"color: red; font-weight: bold;\">Evite esto</p>\n\n<!-- Bloco de CSS (para Critical CSS ou componentes isolados) -->\n<style>\n  body { font-family: 'Inter', sans-serif; }\n</style>\n\nJavaScript — com defer ou async:\n<!-- defer: baixa em paralelo, executa APÓS o HTML ser parseado (ordem garantida) -->\n<script src=\"app.js\" defer></script>\n\n<!-- async: baixa em paralelo, executa assim que estiver pronto (ordem NÃO garantida) -->\n<script src=\"analytics.js\" async></script>\n\n<!-- Inline (para scripts pequenos e críticos) -->\n<script>\n  document.querySelector('#btn').addEventListener('click', () => alert('Clicado!'));\n</script>\n\nQuando usar cada um:\ndefer  → scripts que dependem do DOM ou da ordem (app.js, framework.js)\nasync  → scripts independentes (analytics, chat widgets, A/B testing)\nnormal → scripts que devem bloquear — raramente necessário\n\nValidação e boas práticas:\n- Valide HTML: validator.w3.org\n- Verifique compatibilidade: caniuse.com\n- Performance: DevTools → aba Lighthouse → gera relatório completo\n- Minifique CSS/JS em produção (Vite, Webpack e Parcel fazem isso automaticamente)\n\nDica prática: O DevTools → aba Network → filtre por \"Doc\" para ver o HTML inicial. Filtre por \"CSS\" e \"JS\" para ver quanto tempo cada arquivo leva para carregar. Tamanhos acima de 200KB para JS merecem atenção.",
      "order": 12,
      "tags": []
    },
    {
      "id": "html-13-boas-praticas-e-projetos",
      "module_id": "module-html-basics",
      "language": "html",
      "concept": "boas-praticas-projetos-html",
      "title": "Boas Práticas e Projetos",
      "content": "Objetivo: Aplique boas práticas em projetos HTML reais e entenda o ecossistema moderno.\n\nChecklist de HTML de qualidade:\n✅ DOCTYPE correto na primeira linha\n✅ lang=\"pt-BR\" no <html>\n✅ meta charset UTF-8 como primeiro elemento do <head>\n✅ meta viewport para responsividade mobile\n✅ title único e descritivo (50-60 chars)\n✅ meta description (150-160 chars)\n✅ Um único <h1> por página\n✅ alt em todas as imagens (descritivo ou \"\" para decorativas)\n✅ labels associados a todos os inputs\n✅ CSS em arquivo externo com <link> no <head>\n✅ JS com defer antes de </body> ou no <head>\n✅ Código indentado e organizado (Prettier / EditorConfig)\n✅ HTML válido (validator.w3.org)\n\nProjetos práticos para fixar o aprendizado:\n1. Página pessoal — header com foto e bio, seções de habilidades e projetos, formulário de contato, footer\n2. Landing page — hero section, benefícios, depoimentos, CTA (call-to-action), footer\n3. Blog simples — lista de artigos com <article>, página de post individual com <time> e <address>\n4. Formulário de cadastro — ao menos 8 tipos de input, validação nativa, fieldset/legend para grupos\n\nHTML moderno e ecossistema:\n- Web Components: elementos HTML customizados (<my-button>) com Shadow DOM\n- Frameworks (React, Vue, Angular): geram HTML dinâmico, mas o HTML de saída ainda segue os mesmos princípios\n- PWA (Progressive Web App): usa <link rel=\"manifest\"> e Service Workers — HTML como base\n\nDica prática: Todo projeto hospedado no GitHub Pages é publicado gratuitamente. Crie um repositório, ative GitHub Pages nas configurações e seu portfólio estará online em minutos em username.github.io/projeto.",
      "order": 13,
      "tags": []
    },
    {
      "id": "css-01-fundamentos-css",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "fundamentos-css",
      "title": "Fundamentos do CSS",
      "content": "Objetivo: Entenda como o CSS funciona — seletores, cascata, especificidade e o box model.\n\nFato-chave: CSS (Cascading Style Sheets) define a aparência dos elementos HTML. \"Cascading\" significa que regras podem se sobrepor — a especificidade e a ordem determinam qual vence.\n\nAnatomia de uma regra CSS:\nseletor { propriedade: valor; }\nh1      { color: #1a1a2e; font-size: 2rem; }\n\nTipos de seletores:\n*           → universal (todos os elementos)\np           → tipo (tag)\n.classe     → classe (pode repetir)\n#id         → ID (único por página — alta especificidade)\n[attr]      → atributo: input[type=\"email\"]\na:hover     → pseudo-classe (estado)\np::first-line → pseudo-elemento (parte do contenúdo)\n\nCombinadores:\ndiv p       → descend ente (p dentro de qualquer div)\ndiv > p     → filho direto\nh2 + p      → imediato seguinte\nh2 ~ p      → todos os seguintes\n\nEspecificidade (maior número = mais forte):\n0-0-1  tipo/pseudo-elemento (p, h1, ::before)\n0-1-0  classe/pseudo-classe (.card, :hover)\n1-0-0  ID (#header)\ninline → style=\"\" (mais forte ainda — evite)\n!important → força bruta (usar só em últimas situações)\n\nBox Model — todo elemento é uma caixa:\ncontent → o conteúdo real (text, image)\npadding → espaço interno (entre content e border)\nborder  → borda\nmargin  → espaço externo (entre este e outros elementos)\n\n/* box-sizing: border-box faz width incluir padding+border (recomendado sempre) */\n*, *::before, *::after { box-sizing: border-box; }\n\n.card {\n  width: 300px;        /* largura total incluindo padding+border */\n  padding: 20px;\n  border: 2px solid #ccc;\n  margin: 16px auto;   /* centraliza horizontalmente */\n}\n\nExemplo de uso:\n/* Reset básico recomendado */\n*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n\nbody {\n  font-family: 'Inter', system-ui, sans-serif;\n  line-height: 1.6;\n  color: #1a1a2e;\n  background: #f8fafc;\n}\n\nh1 { font-size: clamp(1.8rem, 4vw, 3rem); }   /* responsivo sem media query */\n\nDica prática: Prefira unidades relativas: rem (relativo ao root, bom para fontes), em (relativo ao pai), % (relativo ao container), vh/vw (relativo à viewport). Evite px para fontes — prejudica usuários que aumentam o tamanho padrão do navegador.",
      "order": 1,
      "tags": []
    },
    {
      "id": "css-02-layout-moderno",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "layout-css-flexbox-grid",
      "title": "Layout Moderno: Flexbox e Grid",
      "content": "Objetivo: Domine Flexbox e Grid para criar qualquer layout responsivo sem hacks.\n\nFato-chave: Flexbox é para layouts em UMA dimensão (linha ou coluna). Grid é para layouts em DUAS dimensões (linhas e colunas). Use o certo para cada caso.\n\nFLEXBOX — uma dimensão:\n.container {\n  display: flex;\n  flex-direction: row;           /* row (padrão) | column | row-reverse | column-reverse */\n  justify-content: space-between; /* alinhamento no eixo principal */\n  align-items: center;            /* alinhamento no eixo cruzado */\n  flex-wrap: wrap;                /* permite quebrar linha */\n  gap: 16px;                      /* espaço entre itens */\n}\n.item {\n  flex: 1;          /* cresce igualmente */\n  flex: 0 0 200px;  /* fixo em 200px */\n  flex: 1 1 300px;  /* base 300px, pode crescer e encolher */\n}\n\nCasos de uso Flexbox: menu, barra de navegação, card row, botões lado a lado, centralizar um elemento.\n\nGRID — duas dimensões:\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);      /* 3 colunas iguais */\n  grid-template-columns: 250px 1fr 1fr;       /* sidebar fixa + 2 colunas */\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* responsivo automático */\n  gap: 24px;\n}\n.destaque {\n  grid-column: 1 / 3;   /* ocupa colunas 1 e 2 */\n  grid-row: 1 / 3;      /* ocupa linhas 1 e 2 */\n}\n\nCasos de uso Grid: layout de página completa, galeria de cards, formulários complexos.\n\nPosition:\nstatic    → padrão (fluxo normal)\nrelative  → offset sem sair do fluxo (base para absolute filhos)\nabsolute  → remove do fluxo, posiciona relativo ao pai position:relative\nfixed     → relativo à viewport (navbar fixa, chat button)\nsticky    → misto: fluxo normal até rolar para além do threshold\n\nResponsividade com Mobile First:\n/* Base: mobile */\n.grid { display: grid; grid-template-columns: 1fr; gap: 16px; }\n\n/* Tablet */\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}\n\nPseudo-classes de interação:\n:hover  → cursor sobre o elemento\n:focus  → elemento com foco (Tab)\n:active → durante o clique\n:visited → link já visitado\n:nth-child(2n) → elementos pares\n\nDica prática: Use grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) para criar grids responsivas que ajustam o número de colunas automaticamente sem media queries. É a técnica mais elegante para cards e galerias.",
      "order": 2,
      "tags": []
    },
    {
      "id": "css-03-animacoes-e-avancado",
      "module_id": "module-css-basics",
      "language": "css",
      "concept": "animacoes-transicoes-css-avancado",
      "title": "Animações, Transições e CSS Avançado",
      "content": "Objetivo: Crie animações fluidas, pseudo-elementos e domine técnicas avançadas de CSS.\n\nFato-chave: Anime preferencialmente transform e opacity — essas propriedades são executadas na GPU e não causam reflow (mais performáticas que animar width, height ou top).\n\nTransitions — para mudanças de estado (hover, focus):\n.btn {\n  background: #4f46e5;\n  transform: translateY(0);\n  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n}\n.btn:hover {\n  background: #4338ca;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);\n}\n\nAnimations — para animações contínuas ou complexas:\n/* Definição com @keyframes */\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50%       { transform: scale(1.05); }\n}\n\n/* Aplicação */\n.elemento {\n  animation: fadeInUp 0.6s ease forwards;\n  animation: pulse 2s ease-in-out infinite;\n}\n/* Propriedades: name | duration | timing-function | delay | iteration-count | direction | fill-mode */\n\nPseudo-elementos — conteúdo decorativo sem HTML extra:\n.card::before {\n  content: '';          /* obrigatório (pode ser texto ou '') */\n  display: block;\n  width: 4px;\n  height: 100%;\n  background: #4f46e5;\n  position: absolute;\n  left: 0; top: 0;\n}\n.required::after { content: ' *'; color: red; }\n\nCombinadores avançados:\nnav > ul > li > a          → filho direto em cadeia\ninput:checked + label      → label APÓS input marcado (customizar checkboxes)\n.card:not(:last-child)     → todos exceto o último\nli:nth-child(3n+1)         → 1º, 4º, 7º...\n\nEspecificidade detalhada:\nID (1,0,0) > Classe/atrib/pseudo-class (0,1,0) > Tipo/pseudo-elem (0,0,1)\n.btn.primary { color: blue; }   /* 0,2,0 */\n#header .btn { color: red; }    /* 1,1,0 — vence */\n\nCSS Custom Properties (variáveis):\n:root {\n  --color-primary: #4f46e5;\n  --spacing-md: 1rem;\n  --radius: 8px;\n}\n.btn { background: var(--color-primary); padding: var(--spacing-md); border-radius: var(--radius); }\n\nDica prática: Use prefers-reduced-motion para respeitar usuários sensíveis a animações:\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }\n}",
      "order": 3,
      "tags": []
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
      "content": "Objetivo: Declare e use variáveis para armazenar e manipular dados em JavaScript.\n\nFato-chave: JavaScript tem três formas de declarar variáveis. Use const por padrão, let quando precisar reatribuir, e nunca use var em código moderno.\n\nconst → valor não reatribuível (use sempre que possível)\nlet   → valor reatribuível (loops, acumuladores)\nvar   → escopo de função, içamento (hoisting) — evite em código moderno\n\nTipos de dados primitivos:\nconst nome = \"Ana\";           // string\nconst idade = 28;             // number\nconst preco = 19.99;          // number (sem distinção int/float)\nconst ativo = true;           // boolean\nconst nulo = null;            // null (ausência intencional de valor)\nlet indefinido;               // undefined (variável declarada sem valor)\nconst id = Symbol(\"único\");   // symbol (identificador único)\n\nOperadores:\nconst soma = 10 + 3;         // 13\nconst texto = \"Olá\" + \" Mundo\"; // concatenação: \"Olá Mundo\"\nconst concatenação = `Olá ${nome}, você tem ${idade} anos.`; // template string\n\nEscopo:\n{\n  const local = \"apenas aqui\";  // só existe dentro do bloco {}\n  let tambémLocal = \"idem\";\n}\n// console.log(local); → ReferenceError\n\nConvenções de nomenclatura:\ncamelCase para variáveis e funções: nomeCompleto, calcularTotal\nPascalCase para classes: ContaCorrente, UsuarioAdmin\nSCREAMING_SNAKE_CASE para constantes globais: MAX_TENTATIVAS, API_URL\n\nDica prática: Use typeof para verificar o tipo de uma variável: typeof \"texto\" → \"string\", typeof 42 → \"number\", typeof null → \"object\" (bug histórico do JS). Para verificar null especificamente, use valor === null.",
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
      "content": "Objetivo: Controle o fluxo de execução do programa com condicionais.\n\nFato-chave: Condicionais executam blocos de código apenas quando uma condição é verdadeira. JavaScript usa igualdade estrita (===) que compara tipo E valor — sempre prefira === ao == para evitar coerções inesperadas.\n\nif / else if / else:\nconst hora = new Date().getHours();\n\nif (hora < 12) {\n  console.log(\"Bom dia!\");\n} else if (hora < 18) {\n  console.log(\"Boa tarde!\");\n} else {\n  console.log(\"Boa noite!\");\n}\n\nOperadores de comparação:\n===  → igual (valor E tipo): \"5\" === 5  → false\n!==  → diferente (valor E tipo)\n>  >= < <=  → numéricos\n&&  → E lógico (ambos verdadeiros)\n||  → OU lógico (pelo menos um verdadeiro)\n!   → NÃO (inverte booleano)\n\nOperador ternário — para condicionais simples:\nconst status = idade >= 18 ? \"adulto\" : \"menor\";\nconst msg = estoque > 0 ? \"Em estoque\" : \"Esgotado\";\n\nSwitch — para múltiplos valores exatos:\nswitch (diaDaSemana) {\n  case \"sábado\":\n  case \"domingo\":\n    console.log(\"Fim de semana!\");\n    break;\n  case \"segunda\":\n    console.log(\"Início da semana\");\n    break;\n  default:\n    console.log(\"Dia útil\");\n}\n\nValores falsy (tratados como false em condicionais):\nfalse, 0, \"\", null, undefined, NaN\n\nNullish coalescing (??):\nconst nome = usuario.nome ?? \"Visitante\";  // usa \"Visitante\" apenas se for null/undefined\n// diferente de || que também substitui 0, \"\" e false\n\nOptional chaining (?.) — acesso seguro a propriedades:\nconst cidade = usuario?.endereco?.cidade;  // undefined se qualquer nível for null/undefined\n\nDica prática: Cuidado com == (igualdade frouxa): 0 == false → true, \"\" == false → true, null == undefined → true. Esses comportamentos são bug-prone. SEMPRE use === e !== em código de produção.",
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
      "content": "Objetivo: Crie funções reutilizáveis com as diferentes sintaxes do JavaScript.\n\nFato-chave: Funções são \"cidadãs de primeira classe\" em JavaScript — podem ser armazenadas em variáveis, passadas como argumentos e retornadas por outras funções. Isso viabiliza programação funcional e callbacks.\n\nDeclaração de função (pode ser chamada antes de definida — hoisting):\nfunction saudar(nome) {\n  return `Olá, ${nome}!`;\n}\nconsole.log(saudar(\"Ana\")); // \"Olá, Ana!\"\n\nFunção expression (variável recebe função):\nconst calcularArea = function(largura, altura) {\n  return largura * altura;\n};\n\nArrow function — sintaxe moderna e concisa:\nconst somar = (a, b) => a + b;                    // retorno implícito\nconst quadrado = x => x * x;                      // um parâmetro: sem parênteses\nconst saudar = (nome) => { return `Olá, ${nome}!`; }; // bloco: precisa de return\n\nParâmetros com defaults:\nfunction conectar(host = \"localhost\", porta = 3000) {\n  return `Conectando em ${host}:${porta}`;\n}\nconectar();             // \"Conectando em localhost:3000\"\nconectar(\"api.com\", 80); // \"Conectando em api.com:80\"\n\nRest parameters — recebe N argumentos como array:\nfunction somar(...numeros) {\n  return numeros.reduce((acc, n) => acc + n, 0);\n}\nsomar(1, 2, 3, 4); // 10\n\nFunções como argument (callbacks):\nsetTimeout(() => console.log(\"3 segundos!\"), 3000);\n[1, 2, 3].forEach(n => console.log(n * 2));\nconst pares = [1, 2, 3, 4, 5].filter(n => n % 2 === 0); // [2, 4]\n\nClosures — função \"lembra\" do escopo onde foi criada:\nfunction contador() {\n  let count = 0;\n  return () => ++count;  // arrow function captura 'count'\n}\nconst incrementar = contador();\nincrementar(); // 1\nincrementar(); // 2\nincrementar(); // 3\n\nDica prática: Use arrow functions para callbacks e funções pequenas. Use function declaration para funções nomeadas no escopo do módulo — o hoisting permite organizar código com a função sendo chamada antes de definida. Evite funções com mais de 20 linhas — refatore em subfunções.",
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
      "content": "Objetivo: Repita operações eficientemente com os diferentes tipos de laços.\n\nFato-chave: JavaScript tem múltiplos tipos de loop — cada um tem um caso de uso ideal. Prefira métodos funcionais (forEach, map, filter) para arrays por serem mais legíveis e funcionais.\n\nfor — quando sabe quantas iterações:\nfor (let i = 0; i < 5; i++) {\n  console.log(i);  // 0, 1, 2, 3, 4\n}\n\n// Iteração reversa\nfor (let i = arr.length - 1; i >= 0; i--) {\n  console.log(arr[i]);\n}\n\nwhile — enquanto condição for verdadeira:\nlet tentativas = 0;\nwhile (tentativas < 3) {\n  tentativas++;\n  const resposta = pedirSenha();\n  if (resposta === senhaCorreta) break;\n}\n\ndo...while — executa pelo menos uma vez:\nlet input;\ndo {\n  input = prompt(\"Digite um número positivo:\");\n} while (isNaN(input) || input <= 0);\n\nfor...of — percorre valores de iteráveis (arrays, strings, Sets, Maps):\nconst frutas = [\"maçã\", \"banana\", \"laranja\"];\nfor (const fruta of frutas) {\n  console.log(fruta);\n}\n\nfor...in — percorre chaves de objetos:\nconst pessoa = { nome: \"Ana\", idade: 28, cidade: \"SP\" };\nfor (const chave in pessoa) {\n  console.log(`${chave}: ${pessoa[chave]}`);\n}\n\nbreak e continue:\nfor (let i = 0; i < 10; i++) {\n  if (i === 3) continue;  // pula o 3\n  if (i === 7) break;     // para no 7\n  console.log(i);         // 0, 1, 2, 4, 5, 6\n}\n\nDica prática: Para arrays, prefira métodos funcionais: arr.forEach() para efeitos colaterais, arr.map() para transformar, arr.filter() para filtrar, arr.reduce() para acumular. Eles são mais legíveis, não modificam o array original e funcionam bem com encadeamento.",
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
      "content": "Objetivo: Manipule coleções de dados com arrays e seus poderosos métodos.\n\nFato-chave: Arrays em JavaScript são dinâmicos (crescem/encolhem), podem conter qualquer tipo de dado e têm dezenas de métodos nativos. Os métodos funcionais (map, filter, reduce) são a forma moderna e elegante de trabalhar com arrays.\n\nCriação e acesso:\nconst frutas = [\"maçã\", \"banana\", \"laranja\"];\nfrutas[0]          // \"maçã\" (índice começa em 0)\nfrutas.length      // 3\nfrutas.at(-1)      // \"laranja\" (índice negativo — último elemento)\n\nAdição e remoção:\nfrutas.push(\"uva\");       // adiciona no final → retorna novo length\nfrutas.pop();             // remove do final → retorna o elemento removido\nfrutas.unshift(\"kiwi\");   // adiciona no início\nfrutas.shift();           // remove do início\n\nBusca:\nfrutas.indexOf(\"banana\")  // 1 (ou -1 se não encontrar)\nfrutas.includes(\"uva\")    // true/false\nfrutas.find(f => f.startsWith(\"b\"))      // \"banana\" (primeiro que satisfaz)\nfrutas.findIndex(f => f.length > 5)     // índice do primeiro que satisfaz\n\nTransformação (não modificam o original):\nconst numeros = [1, 2, 3, 4, 5];\n\nnumeros.map(n => n * 2)        // [2, 4, 6, 8, 10] — transforma cada item\nnumeros.filter(n => n % 2 === 0) // [2, 4] — mantém quem satisfaz\nnumeros.reduce((acc, n) => acc + n, 0) // 15 — acumula em um valor\nnumeros.slice(1, 3)            // [2, 3] — extrai sem modificar\nnumeros.every(n => n > 0)     // true — todos satisfazem?\nnumeros.some(n => n > 4)      // true — algum satisfaz?\n\nOrdenação (modifica o original):\nconst notas = [7, 3, 9, 1, 5];\nnotas.sort((a, b) => a - b);  // [1, 3, 5, 7, 9] crescente\nnotas.sort((a, b) => b - a);  // [9, 7, 5, 3, 1] decrescente\nnotas.reverse();               // inverte a ordem\n\nSpread e desestruturação:\nconst cópia = [...numeros];               // cópia rasa\nconst combinado = [...numeros, ...notas]; // concatena\nconst [primeiro, segundo, ...resto] = numeros; // desestruturação\n\nEncadeamento (fluent API):\nconst resultado = [1, 2, 3, 4, 5, 6]\n  .filter(n => n % 2 === 0)   // [2, 4, 6]\n  .map(n => n * n)             // [4, 16, 36]\n  .reduce((acc, n) => acc + n, 0); // 56\n\nDica prática: flat() e flatMap() são úteis para arrays de arrays: [[1,2],[3,4]].flat() → [1,2,3,4]. Array.from() cria arrays a partir de iteráveis: Array.from({length: 5}, (_, i) => i) → [0,1,2,3,4].",
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
      "content": "Objetivo: Trabalhe com objetos para modelar dados estruturados do mundo real.\n\nFato-chave: Objetos em JavaScript são coleções de pares chave-valor. São fundamentais para modelar entidades do domínio (usuário, produto, pedido). Quase tudo em JavaScript é um objeto.\n\nCriação e acesso:\nconst usuario = {\n  nome: \"Ana Silva\",\n  idade: 28,\n  email: \"ana@email.com\",\n  endereço: {\n    cidade: \"São Paulo\",\n    estado: \"SP\"\n  },\n  ativo: true\n};\n\nusuario.nome             // \"Ana Silva\" (dot notation)\nusuario[\"email\"]         // \"ana@email.com\" (bracket — útil com variáveis)\nusuario.endereço.cidade  // \"São Paulo\" (encadeamento)\nusuario.telefone         // undefined (chave inexistente)\n\nModificação:\nusuario.telefone = \"(11) 99999-9999\";  // adiciona nova propriedade\nusuario.nome = \"Ana Souza\";            // atualiza\ndelete usuario.ativo;                  // remove\n\nDesestruturação (extrair propriedades em variáveis):\nconst { nome, email, endereço: { cidade } } = usuario;\nconsole.log(nome, email, cidade); // \"Ana Souza\" \"ana@email.com\" \"São Paulo\"\n\n// Com renomeação e default:\nconst { nome: nomeUsuario = \"Anônimo\", telefone = \"s/n\" } = usuario;\n\nSpread — copiar e mesclar objetos:\nconst atualizado = { ...usuario, nome: \"Ana Oliveira\", ultimoLogin: new Date() };\nconst mesclado = { ...config, ...userConfig }; // userConfig sobrescreve config\n\nMétodos de Object:\nObject.keys(usuario)    // [\"nome\", \"idade\", \"email\", \"endereço\"]\nObject.values(usuario)  // [\"Ana Souza\", 28, \"ana@email.com\", {...}]\nObject.entries(usuario) // [[\"nome\", \"Ana Souza\"], [\"idade\", 28], ...]\n\n// Iterar sobre o objeto:\nfor (const [chave, valor] of Object.entries(usuario)) {\n  console.log(`${chave}: ${valor}`);\n}\n\nShorthand properties e computed keys:\nconst nome = \"Carlos\";\nconst nota = 9.5;\nconst aluno = { nome, nota };           // equivale a { nome: nome, nota: nota }\nconst chave = \"dinamica\";\nconst obj = { [chave]: \"valor\" };       // { dinamica: \"valor\" }\n\nOptional chaining:\nconst fone = usuario?.contato?.telefone; // undefined (sem erro se contato não existe)\n\nDica prática: Objetos são passados por referência. Ao fazer const b = a, b e a apontam para o mesmo objeto — alterar b altera a. Para cópia independente: const b = { ...a } (cópia rasa) ou structuredClone(a) (cópia profunda, modern API).",
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
      "content": "Objetivo: Manipule texto com os métodos nativos de string do JavaScript.\n\nFato-chave: Strings em JavaScript são imutáveis — todo método retorna uma nova string sem modificar a original. Template literals (``) são a forma moderna de criar strings com expressões incorporadas.\n\nCriação:\nconst simples = \"Olá, Mundo\";\nconst aspasSimples = 'também funciona';\nconst template = `Olá, ${nome}! Hoje é ${new Date().toLocaleDateString('pt-BR')}.`;\nconst multilinha = `\n  Primeira linha\n  Segunda linha\n  Terceira linha\n`;\n\nTamanho e acesso:\n\"JavaScript\".length       // 10\n\"JavaScript\"[0]           // \"J\"\n\"JavaScript\".at(-1)       // \"t\" (último caractere)\n\"JavaScript\".charAt(4)    // \"S\"\n\nBusca:\n\"Olá Mundo\".indexOf(\"Mundo\")      // 4 (posição, ou -1 se não encontrar)\n\"Olá Mundo\".includes(\"Mundo\")     // true\n\"arquivo.ts\".startsWith(\"arquivo\") // true\n\"arquivo.ts\".endsWith(\".ts\")      // true\n\"olá olá olá\".match(/olá/g)       // [\"olá\", \"olá\", \"olá\"]\n\nTransformação:\n\"olá mundo\".toUpperCase()         // \"OLÁ MUNDO\"\n\"OLÁ MUNDO\".toLowerCase()         // \"olá mundo\"\n\"  espaço  \".trim()               // \"espaço\" (remove espaços nas bordas)\n\"  espaço  \".trimStart()          // \"espaço  \"\n\"  espaço  \".trimEnd()            // \"  espaço\"\n\"a-b-c\".split(\"-\")                // [\"a\", \"b\", \"c\"]\n[\"a\", \"b\", \"c\"].join(\" | \")       // \"a | b | c\"\n\nExtração:\n\"JavaScript\".slice(0, 4)          // \"Java\" (start, end — aceita negativo)\n\"JavaScript\".slice(-6)            // \"Script\"\n\"JavaScript\".substring(4, 10)     // \"Script\"\n\nSubstituição:\n\"olá olá\".replace(\"olá\", \"oi\")   // \"oi olá\" (apenas primeira ocorrência)\n\"olá olá\".replaceAll(\"olá\", \"oi\") // \"oi oi\"\n\"preço: 100\".replace(/d+/, n => n * 2) // \"preço: 200\" (com função)\n\nPadding e repetição:\n\"5\".padStart(3, \"0\")              // \"005\" (útil para formatar números)\n\"5\".padEnd(5, \"*\")               // \"5****\"\n\"ha\".repeat(3)                    // \"hahaha\"\n\nDica prática: Para validação com regex, use test(): /^[a-z]+$/.test(\"abc\") → true. Para extrair grupos: \"2024-03-15\".match(/(d{4})-(d{2})-(d{2})/) retorna array com grupos capturados. Tagged templates permitem sanitizar HTML: html`<p>${userInput}</p>`.",
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
      "content": "Objetivo: Entenda e use JavaScript assíncrono com Promises e async/await.\n\nFato-chave: JavaScript é single-threaded — executa uma tarefa por vez. Para operações demoradas (chamadas de API, leitura de arquivos), usa-se código assíncrono: o JS \"programa para depois\" e continua executando. O loop de eventos gerencia essa fila.\n\nCallbacks — o começo (problemas: callback hell):\nsetTimeout(() => console.log(\"2 segundos\"), 2000);\nbuscarDados(url, (dados) => {\n  processarDados(dados, (resultado) => {  // callback hell começa aqui\n    salvarResultado(resultado, () => { ... });\n  });\n});\n\nPromises — encadeia operações assíncronas:\nconst promessa = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(\"Dados carregados!\"), 2000);\n  // ou: reject(new Error(\"Falha!\"));\n});\n\npromessa\n  .then(dados => console.log(dados))  // \"Dados carregados!\"\n  .catch(erro => console.error(erro))\n  .finally(() => console.log(\"Sempre executa\"));\n\nPromise.all — aguarda várias promises em paralelo:\nconst [usuarios, produtos] = await Promise.all([\n  fetch(\"/api/usuarios\").then(r => r.json()),\n  fetch(\"/api/produtos\").then(r => r.json())\n]);\n\nasync/await — forma mais legível de trabalhar com Promises:\nasync function buscarUsuario(id) {\n  try {\n    const resposta = await fetch(`https://api.exemplo.com/usuarios/${id}`);\n\n    if (!resposta.ok) {\n      throw new Error(`Erro HTTP: ${resposta.status}`);\n    }\n\n    const usuario = await resposta.json();\n    return usuario;\n\n  } catch (erro) {\n    console.error(\"Falha ao buscar usuário:\", erro);\n    throw erro; // re-throw para o chamador tratar também\n  }\n}\n\n// Chamada:\nconst usuario = await buscarUsuario(42);\nconsole.log(usuario.nome);\n\nfetch API — requisições HTTP:\n// GET\nconst res = await fetch(\"https://viacep.com.br/ws/01310100/json/\");\nconst cep = await res.json();\n\n// POST com JSON\nconst novoUsuario = await fetch(\"/api/usuarios\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ nome: \"Ana\", email: \"ana@email.com\" })\n}).then(r => r.json());\n\nDica prática: Async functions SEMPRE retornam uma Promise, mesmo que retornem um valor primitivo. Para executar múltiplas promises em paralelo, use Promise.all em vez de vários await sequenciais — é muito mais rápido quando as operações são independentes.",
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
      "content": "Objetivo: Trate erros de forma robusta para criar aplicações confiáveis.\n\nFato-chave: Erros não tratados crasham a aplicação. Um bom tratamento de erros diz ao usuário o que aconteceu, registra informações para debugging e permite que o programa continue funcionando.\n\ntry / catch / finally:\ntry {\n  const dados = JSON.parse(textoInvalido);  // pode lançar SyntaxError\n  const resultado = processarDados(dados);\n  return resultado;\n} catch (erro) {\n  // Tipos de erro nativos:\n  // Error, SyntaxError, TypeError, RangeError, ReferenceError, URIError\n  if (erro instanceof SyntaxError) {\n    console.error(\"JSON inválido:\", erro.message);\n  } else {\n    console.error(\"Erro inesperado:\", erro);\n    throw erro;  // re-lança erros que não sabemos tratar\n  }\n} finally {\n  // Executa SEMPRE (erro ou não) — ideal para limpeza:\n  carregamento.style.display = \"none\";\n  conexao.fechar();\n}\n\nErros customizados:\nclass ApiError extends Error {\n  constructor(message, statusCode, endpoint) {\n    super(message);\n    this.name = \"ApiError\";\n    this.statusCode = statusCode;\n    this.endpoint = endpoint;\n  }\n}\n\nasync function chamarApi(url) {\n  const res = await fetch(url);\n  if (!res.ok) {\n    throw new ApiError(\n      `Falha na requisição`,\n      res.status,\n      url\n    );\n  }\n  return res.json();\n}\n\n// Uso:\ntry {\n  const dados = await chamarApi(\"/api/usuarios\");\n} catch (erro) {\n  if (erro instanceof ApiError) {\n    if (erro.statusCode === 401) redirecionarLogin();\n    if (erro.statusCode === 404) mostrarMensagem(\"Não encontrado\");\n    if (erro.statusCode >= 500) mostrarMensagem(\"Erro no servidor\");\n  }\n}\n\nValidação defensiva:\nfunction dividir(a, b) {\n  if (typeof a !== \"number\" || typeof b !== \"number\") {\n    throw new TypeError(\"Ambos os argumentos devem ser números\");\n  }\n  if (b === 0) {\n    throw new RangeError(\"Divisão por zero não é permitida\");\n  }\n  return a / b;\n}\n\nErro global não tratado:\nwindow.addEventListener(\"unhandledrejection\", (event) => {\n  console.error(\"Promise rejeitada sem tratamento:\", event.reason);\n  // Enviar para serviço de monitoramento (Sentry, Datadog)\n});\n\nDica prática: Em aplicações de produção, use serviços como Sentry (sentry.io) para capturar erros automaticamente. Eles fornecem stack trace, contexto do usuário, frequência e muito mais — essenciais para debuggar problemas em produção.",
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
      "content": "Objetivo: Organize código com classes orientadas a objetos em JavaScript.\n\nFato-chave: Classes em JavaScript são \"açúcar sintático\" sobre o sistema de protótipos. Elas fornecem uma sintaxe familiar para POO, mas internamente ainda usam protótipos. Entender isso ajuda a evitar armadilhas do this.\n\nDeclaração de classe:\nclass Animal {\n  // Propriedades privadas (ES2022+)\n  #nome;\n  #energia = 100;\n\n  static contagem = 0;  // propriedade estática (da classe, não da instância)\n\n  constructor(nome, tipo) {\n    this.#nome = nome;\n    this.tipo = tipo;\n    Animal.contagem++;\n  }\n\n  // Getter\n  get nome() { return this.#nome; }\n\n  // Método de instância\n  comer(quantidade) {\n    this.#energia = Math.min(100, this.#energia + quantidade);\n    return this;  // permite encadeamento: animal.comer(20).dormir(8)\n  }\n\n  // Método estático (chamado na classe, não na instância)\n  static criarGato(nome) {\n    return new Animal(nome, \"gato\");\n  }\n\n  toString() {\n    return `${this.tipo} ${this.#nome} (energia: ${this.#energia}%)`;\n  }\n}\n\nHerança:\nclass Cachorro extends Animal {\n  #raça;\n\n  constructor(nome, raça) {\n    super(nome, \"cachorro\");  // OBRIGATÓRIO: chama o constructor da classe pai\n    this.#raça = raça;\n  }\n\n  latir() {\n    console.log(\"Au au!\");\n    return this;\n  }\n\n  toString() {\n    return `${super.toString()} — Raça: ${this.#raça}`;\n  }\n}\n\nUso:\nconst rex = new Cachorro(\"Rex\", \"Labrador\");\nrex.comer(20).latir();\nconsole.log(rex.toString());\nconsole.log(Animal.contagem); // 1\n\nconst gato = Animal.criarGato(\"Mimi\");\n\ninstanceof e verificação de tipo:\nrex instanceof Cachorro  // true\nrex instanceof Animal    // true\ntypeof rex               // \"object\" — classes retornam object\n\nDica prática: O contexto do this em Arrow functions vs function declaration é diferente. Arrow functions herdam o this do escopo onde foram definidas — útil em callbacks de classe. Ao passar métodos como callbacks (onClick={this.handleClick}), use arrow functions ou bind: this.handleClick = this.handleClick.bind(this) no constructor.",
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
      "content": "Objetivo: Escreva testes automatizados para garantir que seu código funciona corretamente.\n\nFato-chave: Testes automatizados documentam o comportamento esperado, detectam regressões e dão confiança para refatorar. Um projeto sem testes vira uma \"caixa preta\" que ninguém quer tocar.\n\nTipos de testes:\nUnitário   → testa uma função/classe isoladamente (rápido, muitos)\nIntegração → testa a interação entre partes do sistema\nE2E (ponta a ponta) → testa o fluxo completo pelo browser (lento, alguns)\n\nVitest — framework moderno de testes (recomendado para projetos Vite):\n// utils.test.js\nimport { describe, it, expect, vi, beforeEach } from \"vitest\";\nimport { formatarMoeda, calcularDesconto } from \"./utils\";\n\ndescribe(\"formatarMoeda\", () => {\n  it(\"formata valores positivos corretamente\", () => {\n    expect(formatarMoeda(1234.56)).toBe(\"R$ 1.234,56\");\n  });\n\n  it(\"formata zero\", () => {\n    expect(formatarMoeda(0)).toBe(\"R$ 0,00\");\n  });\n\n  it(\"lança erro para valores não numéricos\", () => {\n    expect(() => formatarMoeda(\"texto\")).toThrow(TypeError);\n  });\n});\n\ndescribe(\"calcularDesconto\", () => {\n  it(\"calcula 10% de desconto\", () => {\n    expect(calcularDesconto(100, 10)).toBe(90);\n  });\n\n  it(\"não permite desconto maior que 100%\", () => {\n    expect(() => calcularDesconto(100, 110)).toThrow(RangeError);\n  });\n});\n\nMatchers principais do expect():\nexpect(valor).toBe(exato)              // igualdade estrita (===)\nexpect(valor).toEqual({ obj: \"completo\" }) // igualdade profunda (objetos)\nexpect(fn).toThrow(Error)             // deve lançar erro\nexpect(arr).toContain(\"item\")          // array contém\nexpect(str).toMatch(/regex/)          // string bate com regex\nexpect(fn).toHaveBeenCalled()         // foi chiamada (mock)\nexpect(fn).toHaveBeenCalledWith(args) // chamada com argumentos específicos\nexpect(valor).toBeTruthy()            // verdadeiro\nexpect(valor).toBeFalsy()             // falso\n\nMocks — simular dependências externas:\nconst buscarDados = vi.fn().mockResolvedValue({ nome: \"Ana\" });\n// ou:\nvi.mock(\"./api\", () => ({\n  buscarUsuario: vi.fn().mockResolvedValue({ id: 1, nome: \"Ana\" })\n}));\n\nExecutar testes:\nnpx vitest run          // executa uma vez\nnpx vitest              // modo watch (reexecuta ao salvar)\nnpx vitest --coverage   // relatório de cobertura\n\nTDD — Test Driven Development (escreva o teste ANTES do código):\n1. Escreva o teste (vai falhar — RED)\n2. Escreva o mínimo de código para passar (GREEN)\n3. Refatore mantendo testes verdes (REFACTOR)\n\nDica prática: Mire em 70-80% de cobertura de código para funções de lógica de negócio. Não tente cobrir 100% — arquivos de configuração, UI simples e boilerplate não precisam de teste. Use coverage para identificar lógica crítica não testada.",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-01-fundamentos-da-web",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-02-estrutura-do-documento",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-03-texto-e-formatacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-04-links-e-navegacao",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-05-imagens-e-midia",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-06-listas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-07-tabelas",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-08-formularios",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-09-html-semantico",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-10-atributos-globais",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-11-acessibilidade-e-seo",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-12-integrando-css-e-js",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "html-13-boas-praticas-e-projetos",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-01-fundamentos-css",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-02-layout-moderno",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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
      "lesson_id": "css-03-animacoes-e-avancado",
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

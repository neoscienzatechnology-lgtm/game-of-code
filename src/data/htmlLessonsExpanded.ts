import { htmlUnitsEnriched } from './htmlLessonsEnriched';
import type { Exercise, Lesson, Unit } from './htmlLessons';

const normalize = (value: string) => value.toLowerCase();

const DETAILED_EXPLANATIONS: Record<string, string> = {
  'u1-l1-1': [
    'A Web e um conjunto de documentos ligados por links e acessados via navegador.',
    'Ela usa a internet (a rede fisica) para transportar dados, enquanto a Web define como o conteudo e publicado.',
    '',
    '```txt',
    'Navegador -> Requisicao HTTP -> Servidor -> HTML/CSS/JS -> Pagina renderizada',
    '```',
    '',
    'Exemplo de uso: ao digitar um endereco, o navegador baixa arquivos HTML, CSS e JS.',
    'Uso comum: sites, dashboards e aplicativos web.',
    'Dica pratica: use o DevTools (F12) para ver o HTML recebido.',
  ].join('\n'),
  'u1-l2-1': [
    'HTML define a estrutura do conteudo. Pense nele como o esqueleto da pagina.',
    'Cada elemento e criado com tags e pode ter atributos.',
    '',
    '```html',
    '<h1>Meu titulo</h1>',
    '<p>Um paragrafo simples.</p>',
    '```',
    '',
    'Exemplo de uso: paginas, artigos e blogs sempre tem HTML por tras.',
    'Uso comum: organizar titulos, textos, listas e imagens.',
    'Dica pratica: comece simples e va adicionando tags aos poucos.',
  ].join('\n'),
  'u1-l3-1': [
    'HTML, CSS e JavaScript trabalham juntos.',
    'HTML define estrutura, CSS define aparencia e JS adiciona comportamento.',
    '',
    '```html',
    '<button class="btn">Comprar</button>',
    '```',
    '```css',
    '.btn { background: #22c55e; color: white; padding: 8px 12px; }',
    '```',
    '```js',
    'document.querySelector(".btn").addEventListener("click", () => alert("Ok"));',
    '```',
    '',
    'Exemplo de uso: botao estilizado que responde a clique.',
    'Uso comum: interfaces completas e responsivas.',
    'Dica pratica: teste cada camada separadamente.',
  ].join('\n'),
  'u2-l1-1': [
    'O DOCTYPE informa ao navegador que o documento segue o padrao HTML5.',
    'Sem ele, alguns navegadores entram em modo de compatibilidade.',
    '',
    '```html',
    '<!DOCTYPE html>',
    '<html lang="pt-BR">',
    '  <head>...</head>',
    '  <body>...</body>',
    '</html>',
    '```',
    '',
    'Exemplo de uso: todo arquivo HTML deve iniciar com o DOCTYPE.',
    'Uso comum: padronizar renderizacao entre navegadores.',
    'Dica pratica: deixe o DOCTYPE sempre na primeira linha.',
  ].join('\n'),
  'u2-l2-1': [
    'A tag <html> envolve todo o documento e define o idioma com lang.',
    '',
    '```html',
    '<html lang="pt-BR">',
    '  <head>...</head>',
    '  <body>...</body>',
    '</html>',
    '```',
    '',
    'Exemplo de uso: `lang="pt-BR"` ajuda leitores de tela e SEO.',
    'Uso comum: definir idioma e agrupar head/body.',
    'Dica pratica: sempre configure o lang correto.',
  ].join('\n'),
  'u2-l3-1': [
    'O head guarda metadados e links para recursos externos.',
    '',
    '```html',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>Meu site</title>',
    '  <link rel="stylesheet" href="style.css">',
    '</head>',
    '```',
    '',
    'Exemplo de uso: carregar CSS e definir o titulo da pagina.',
    'Uso comum: incluir fontes, meta tags e scripts.',
    'Dica pratica: mantenha o head organizado e limpo.',
  ].join('\n'),
  'u2-l4-1': [
    'O body contem tudo que aparece na pagina: textos, imagens, botoes.',
    '',
    '```html',
    '<body>',
    '  <h1>Bem-vindo</h1>',
    '  <p>Texto principal</p>',
    '</body>',
    '```',
    '',
    'Exemplo de uso: todo conteudo visivel vai no body.',
    'Uso comum: organizar a interface da pagina.',
    'Dica pratica: separe o conteudo em secoes.',
  ].join('\n'),
  'u3-l1-1': [
    'Titulos criam hierarquia de leitura. Use h1 apenas uma vez por pagina.',
    '',
    '```html',
    '<h1>Titulo principal</h1>',
    '<h2>Subtitulo</h2>',
    '<h3>Detalhe</h3>',
    '```',
    '',
    'Exemplo de uso: organizar secao de conteudo.',
    'Uso comum: melhorar SEO e acessibilidade.',
    'Dica pratica: nao pule niveis de titulo.',
  ].join('\n'),
  'u3-l2-1': [
    'Paragrafos agrupam texto e criam espacamento automatico.',
    '',
    '```html',
    '<p>Primeiro paragrafo.</p>',
    '<p>Segundo paragrafo.</p>',
    '```',
    '',
    'Exemplo de uso: textos longos em artigos.',
    'Uso comum: separar ideias em blocos.',
    'Dica pratica: evite usar <br> para blocos de texto.',
  ].join('\n'),
  'u4-l1-1': [
    'Links conectam paginas e recursos com a tag <a>.',
    '',
    '```html',
    '<a href="https://exemplo.com">Visitar site</a>',
    '```',
    '',
    'Exemplo de uso: navegar para outra pagina ou abrir um email.',
    'Uso comum: menus e chamadas para acao.',
    'Dica pratica: sempre use texto descritivo no link.',
  ].join('\n'),
  'u5-l1-1': [
    'Imagens usam a tag <img> com src e alt.',
    '',
    '```html',
    '<img src="foto.jpg" alt="Foto do produto">',
    '```',
    '',
    'Exemplo de uso: ilustrar produtos e conteudos.',
    'Uso comum: banners, galerias e perfis.',
    'Dica pratica: o alt ajuda acessibilidade e SEO.',
  ].join('\n'),
  'u8-l1-1': [
    'Formularios coletam dados com inputs, labels e botoes.',
    '',
    '```html',
    '<form>',
    '  <label for="email">Email</label>',
    '  <input id="email" type="email">',
    '  <button>Enviar</button>',
    '</form>',
    '```',
    '',
    'Exemplo de uso: cadastro e login.',
    'Uso comum: pesquisas, contato e pagamento.',
    'Dica pratica: sempre associe label ao input.',
  ].join('\n'),
  'u9-l1-1': [
    'HTML semantico usa tags que descrevem o conteudo.',
    '',
    '```html',
    '<header>...</header>',
    '<main>...</main>',
    '<footer>...</footer>',
    '```',
    '',
    'Exemplo de uso: organizar pagina em areas claras.',
    'Uso comum: melhorar acessibilidade e SEO.',
    'Dica pratica: evite excesso de div sem significado.',
  ].join('\n'),
  'u11-l1-1': [
    'Acessibilidade garante que todos consigam usar o site.',
    '',
    '```html',
    '<img src="grafico.png" alt="Grafico de vendas">',
    '<button aria-label="Fechar">X</button>',
    '```',
    '',
    'Exemplo de uso: leitores de tela dependem do alt e aria.',
    'Uso comum: formularios, botoes e menus.',
    'Dica pratica: teste com teclado e leitor de tela.',
  ].join('\n'),
  'u17-l1-1': [
    'CSS define a aparencia dos elementos HTML.',
    '',
    '```css',
    'body {',
    '  font-family: Arial, sans-serif;',
    '  color: #0f172a;',
    '}',
    '```',
    '',
    'Exemplo de uso: mudar cores, tamanhos e espacamentos.',
    'Uso comum: criar identidade visual.',
    'Dica pratica: comece pelo layout geral e refine depois.',
  ].join('\n'),
  'u17-l2-1': [
    'Seletores escolhem quais elementos receberao estilo.',
    '',
    '```css',
    'h1 { color: #22c55e; }',
    '.card { padding: 16px; }',
    '#menu { background: #0f172a; }',
    '```',
    '',
    'Exemplo de uso: aplicar estilos pontuais.',
    'Uso comum: diferenciar componentes.',
    'Dica pratica: prefira classes para reutilizacao.',
  ].join('\n'),
  'u18-l1-1': [
    'Box model define como tamanho e espacamento funcionam.',
    '',
    '```css',
    '.card {',
    '  margin: 12px;',
    '  padding: 16px;',
    '  border: 2px solid #94a3b8;',
    '}',
    '```',
    '',
    'Exemplo de uso: criar cartoes com respiro.',
    'Uso comum: ajustar layout sem quebrar o conteudo.',
    'Dica pratica: use DevTools para visualizar o box model.',
  ].join('\n'),
  'u18-l2-1': [
    'Flexbox alinha itens em uma linha ou coluna.',
    '',
    '```css',
    '.linha {',
    '  display: flex;',
    '  gap: 12px;',
    '  justify-content: space-between;',
    '}',
    '```',
    '',
    'Exemplo de uso: barras de navegacao e cards.',
    'Uso comum: alinhar botoes e menus.',
    'Dica pratica: combine com gap para espacamento.',
  ].join('\n'),
  'u19-l1-1': [
    'Transicoes criam animacoes suaves entre estados.',
    '',
    '```css',
    'button {',
    '  transition: transform 0.2s ease;',
    '}',
    'button:hover {',
    '  transform: scale(1.03);',
    '}',
    '```',
    '',
    'Exemplo de uso: feedback visual em botoes.',
    'Uso comum: melhorar a sensacao de interacao.',
    'Dica pratica: transicoes curtas sao mais naturais.',
  ].join('\n'),
  'u20-l1-1': [
    'JavaScript adiciona comportamento e logica ao HTML.',
    '',
    '```js',
    'document.querySelector("button").addEventListener("click", () => {',
    '  alert("Clique!");',
    '});',
    '```',
    '',
    'Exemplo de uso: validar formularios e reagir a eventos.',
    'Uso comum: criar interacoes e consumir APIs.',
    'Dica pratica: organize o codigo em funcoes pequenas.',
  ].join('\n'),
  'u20-l2-1': [
    'Variaveis guardam valores que serao usados depois.',
    '',
    '```js',
    'const nome = "Ana";',
    'let pontos = 0;',
    'pontos += 10;',
    '```',
    '',
    'Exemplo de uso: guardar estado e resultados.',
    'Uso comum: counters, formularios e listas.',
    'Dica pratica: use const sempre que possivel.',
  ].join('\n'),
  'u20-l5-1': [
    'Funcoes agrupam passos e facilitam reutilizacao.',
    '',
    '```js',
    'function soma(a, b) {',
    '  return a + b;',
    '}',
    'const total = soma(2, 3);',
    '```',
    '',
    'Exemplo de uso: calculos e transformacoes.',
    'Uso comum: organizar regras de negocio.',
    'Dica pratica: nomeie funcoes com verbos claros.',
  ].join('\n'),
  'u21-l2-1': [
    'Eventos permitem reagir a cliques, teclado e scroll.',
    '',
    '```js',
    'const botao = document.querySelector("#enviar");',
    'botao.addEventListener("click", () => {',
    '  console.log("enviado");',
    '});',
    '```',
    '',
    'Exemplo de uso: validar formulario no clique.',
    'Uso comum: interacoes do usuario.',
    'Dica pratica: sempre verifique se o elemento existe.',
  ].join('\n'),
};

const VISUAL_EXAMPLES_BY_LESSON: Record<string, string> = {
  'u1-l2': [
    '```html',
    '<!DOCTYPE html>',
    '<html lang="pt-BR">',
    '  <head>',
    '    <meta charset="UTF-8">',
    '    <title>Minha pagina</title>',
    '  </head>',
    '  <body>',
    '    <h1>Bem-vindo</h1>',
    '    <p>Esse e um exemplo simples.</p>',
    '  </body>',
    '</html>',
    '```',
  ].join('\n'),
  'u3-l2': [
    '```html',
    '<p>Primeiro paragrafo com uma ideia.</p>',
    '<p>Segundo paragrafo reforcando o ponto.</p>',
    '```',
  ].join('\n'),
  'u4-l1': [
    '```html',
    '<nav>',
    '  <a href="/inicio">Inicio</a>',
    '  <a href="/sobre">Sobre</a>',
    '</nav>',
    '```',
  ].join('\n'),
  'u5-l1': [
    '```html',
    '<figure>',
    '  <img src="produto.jpg" alt="Foto do produto">',
    '  <figcaption>Produto em destaque</figcaption>',
    '</figure>',
    '```',
  ].join('\n'),
  'u8-l1': [
    '```html',
    '<form>',
    '  <label for="nome">Nome</label>',
    '  <input id="nome" type="text">',
    '  <button>Enviar</button>',
    '</form>',
    '```',
  ].join('\n'),
  'u17-l1': [
    '```css',
    'body {',
    '  background: #0f172a;',
    '  color: #e2e8f0;',
    '  font-family: Arial, sans-serif;',
    '}',
    '```',
  ].join('\n'),
  'u18-l1': [
    '```css',
    '.card {',
    '  margin: 16px;',
    '  padding: 20px;',
    '  border: 1px solid #94a3b8;',
    '  border-radius: 12px;',
    '}',
    '```',
  ].join('\n'),
  'u20-l2': [
    '```js',
    'const nome = "Ana";',
    'let pontos = 0;',
    'pontos += 5;',
    'console.log(nome, pontos);',
    '```',
  ].join('\n'),
};

const SELF_CLOSING_TAGS = new Set([
  'br',
  'hr',
  'img',
  'input',
  'meta',
  'link',
  'base',
  'area',
  'col',
  'embed',
  'param',
  'source',
  'track',
  'wbr',
]);

const EXAMPLE_BY_TOKEN: Record<string, string> = {
  '<!doctype html>': '`<!DOCTYPE html>`',
  '<html>': '`<html lang="pt-BR">...</html>`',
  '<head>': '`<head>...</head>`',
  '<body>': '`<body>...</body>`',
  '<p>': '`<p>Texto do paragrafo</p>`',
  '<h1>': '`<h1>Titulo principal</h1>`',
  '<a>': '`<a href=\"https://exemplo.com\">Link</a>`',
  '<img>': '`<img src=\"foto.jpg\" alt=\"Foto\">`',
  'href': '`<a href=\"https://exemplo.com\">Link</a>`',
  'src': '`<img src=\"foto.jpg\" alt=\"Foto\">`',
  'alt': '`<img src=\"foto.jpg\" alt=\"Descricao\">`',
  'class': '`<div class=\"card\">Conteudo</div>`',
  'id': '`<section id=\"sobre\">...</section>`',
  'color': '`p { color: #1f2937; }`',
  'background': '`body { background: #0f172a; }`',
  'display': '`section { display: flex; gap: 12px; }`',
  'flex': '`container { display: flex; gap: 12px; }`',
  'grid': '`layout { display: grid; grid-template-columns: repeat(3, 1fr); }`',
  'margin': '`h1 { margin-bottom: 16px; }`',
  'padding': '`button { padding: 10px 16px; }`',
  'font-size': '`p { font-size: 16px; }`',
  'const': '`const nome = \"Ana\";`',
  'let': '`let contador = 0;`',
  'function': '`function soma(a, b) { return a + b; }`',
  'if': '`if (idade >= 18) { console.log(\"ok\"); }`',
  'else': '`if (ok) { ... } else { ... }`',
  'for': '`for (let i = 0; i < 3; i++) { ... }`',
  'while': '`while (saldo > 0) { ... }`',
  'array': '`const cores = [\"azul\", \"verde\"];`',
  'console.log': '`console.log(\"Debug\");`',
};

const extractTokens = (text: string) => {
  const tokens: string[] = [];
  const backtickMatches = text.match(/`([^`]+)`/g) ?? [];
  for (const match of backtickMatches) {
    tokens.push(match.replace(/`/g, ''));
  }

  const tagMatches = text.match(/<[^>]+>/g) ?? [];
  for (const match of tagMatches) {
    if (!tokens.includes(match)) tokens.push(match);
  }

  return tokens;
};

const buildHtmlExample = (token: string) => {
  const match = token.match(/<\\/?([a-z0-9-]+)/i);
  if (!match) return null;
  const tag = match[1].toLowerCase();

  if (tag === 'a') return '`<a href=\"https://exemplo.com\">Link</a>`';
  if (tag === 'img') return '`<img src=\"foto.jpg\" alt=\"Foto\">`';
  if (tag === 'input') return '`<input type=\"text\" placeholder=\"Seu nome\">`';
  if (SELF_CLOSING_TAGS.has(tag)) return `\`<${tag}>\``;
  return `\`<${tag}>Texto aqui</${tag}>\``;
};

const buildExample = (exercise: Exercise) => {
  const baseText = `${exercise.instruction ?? ''} ${exercise.explanation ?? ''}`.trim();
  const tokens = extractTokens(baseText);

  for (const token of tokens) {
    const normalized = normalize(token);
    if (EXAMPLE_BY_TOKEN[normalized]) return EXAMPLE_BY_TOKEN[normalized];

    if (token.startsWith('<')) {
      const htmlExample = buildHtmlExample(token);
      if (htmlExample) return htmlExample;
    }

    if (normalized.startsWith('.') || normalized.startsWith('#')) {
      return `\`${token} { /* estilos */ }\``;
    }

    if (normalized.includes('-')) {
      return `\`p { ${token}: valor; }\``;
    }
  }

  return '`Exemplo rapido aplicado em um arquivo real.`';
};

const buildVisualExample = (lesson: Lesson) => {
  if (lesson.id && VISUAL_EXAMPLES_BY_LESSON[lesson.id]) {
    return VISUAL_EXAMPLES_BY_LESSON[lesson.id];
  }

  const unit = normalize(lesson.unitTitle ?? '');
  if (unit.includes('css')) {
    return [
      '```html',
      '<div class="card">',
      '  <h3>Plano Pro</h3>',
      '  <p>Melhore seu layout.</p>',
      '  <button>Assinar</button>',
      '</div>',
      '```',
      '```css',
      '.card {',
      '  background: #0f172a;',
      '  color: #e2e8f0;',
      '  padding: 16px;',
      '  border-radius: 12px;',
      '  display: grid;',
      '  gap: 8px;',
      '}',
      '.card button {',
      '  background: #22c55e;',
      '  color: #0f172a;',
      '  padding: 8px 12px;',
      '  border-radius: 999px;',
      '}',
      '```',
    ].join('\n');
  }
  if (unit.includes('javascript') || unit.includes('dom')) {
    return [
      '```html',
      '<button id="contador">Clique 0</button>',
      '```',
      '```js',
      'const botao = document.querySelector("#contador");',
      'let clicks = 0;',
      'botao.addEventListener("click", () => {',
      '  clicks += 1;',
      '  botao.textContent = `Clique ${clicks}`;',
      '});',
      '```',
    ].join('\n');
  }

  const titleMatch = lesson.title?.match(/<([a-z0-9-]+)>/i);
  if (titleMatch) {
    const tag = titleMatch[1].toLowerCase();
    if (SELF_CLOSING_TAGS.has(tag)) {
      return [
        '```html',
        `<${tag}>`,
        '```',
      ].join('\n');
    }
    return [
      '```html',
      `<${tag}>Texto de exemplo</${tag}>`,
      '```',
    ].join('\n');
  }

  return [
    '```html',
    '<header>',
    '  <h1>Pagina exemplo</h1>',
    '  <nav>',
    '    <a href="#sobre">Sobre</a>',
    '    <a href="#contato">Contato</a>',
    '  </nav>',
    '</header>',
    '<main id="sobre">',
    '  <section>',
    '    <h2>Sobre</h2>',
    '    <p>Conteudo introdutorio.</p>',
    '  </section>',
    '</main>',
    '```',
  ].join('\n');
};

const buildUsage = (lesson: Lesson) => {
  const unit = normalize(lesson.unitTitle ?? '');
  if (unit.includes('css')) return 'Uso comum: estilizar elementos e ajustar o layout.';
  if (unit.includes('javascript') || unit.includes('dom')) {
    return 'Uso comum: adicionar interatividade e validar dados.';
  }
  return 'Uso comum: estruturar conteudo de paginas web.';
};

const buildTip = (lesson: Lesson) => {
  const unit = normalize(lesson.unitTitle ?? '');
  if (unit.includes('css')) {
    return 'Dica pratica: altere valores e observe as mudancas visuais.';
  }
  if (unit.includes('javascript') || unit.includes('dom')) {
    return 'Dica pratica: teste o codigo no console do navegador.';
  }
  return 'Dica pratica: visualize no navegador e inspecione o elemento.';
};

const createFillBlank = (params: {
  id: string;
  instruction: string;
  template: string;
  answers: { id: string; answer: string; placeholder?: string }[];
  xp?: number;
}): Exercise => ({
  id: params.id,
  type: 'fill-blank',
  instruction: params.instruction,
  codeTemplate: params.template,
  blanks: params.answers,
  xp: params.xp ?? 10,
});

const createMultipleChoice = (params: {
  id: string;
  instruction: string;
  correct: string;
  wrong: string[];
  xp?: number;
}): Exercise => {
  const options = [
    { id: 'a', text: params.correct, correct: true },
    { id: 'b', text: params.wrong[0] ?? 'Opcao B', correct: false },
    { id: 'c', text: params.wrong[1] ?? 'Opcao C', correct: false },
  ];

  return {
    id: params.id,
    type: 'multiple-choice',
    instruction: params.instruction,
    options,
    xp: params.xp ?? 10,
  };
};

const buildUniquePracticeExercise = (lesson: Lesson): Exercise | null => {
  const id = `${lesson.id}-challenge`;
  if (lesson.exercises.some(exercise => exercise.id === id)) {
    return null;
  }

  const title = normalize(lesson.title ?? '');
  const unit = normalize(lesson.unitTitle ?? '');

  const tagMatch = lesson.title?.match(/<([a-z0-9-]+)>/i);
  if (tagMatch) {
    const tag = tagMatch[1].toLowerCase();
    if (tag === 'img') {
      return createFillBlank({
        id,
        instruction: 'Complete a tag de imagem com src:',
        template: '<img {{blank1}}="foto.jpg" alt="Perfil">',
        answers: [{ id: 'blank1', answer: 'src', placeholder: '___' }],
        xp: 10,
      });
    }

    if (tag === 'a') {
      return createFillBlank({
        id,
        instruction: 'Complete o link com href:',
        template: '<a {{blank1}}="https://exemplo.com">Site</a>',
        answers: [{ id: 'blank1', answer: 'href', placeholder: '____' }],
        xp: 10,
      });
    }

    if (SELF_CLOSING_TAGS.has(tag)) {
      return createMultipleChoice({
        id,
        instruction: 'Qual dessas tags e auto-fechada?',
        correct: `<${tag}>`,
        wrong: ['<div>', '<section>'],
        xp: 10,
      });
    }

    return createFillBlank({
      id,
      instruction: `Crie um elemento ${tag} com classe:`,
      template: `<{{blank1}} class="destaque">Texto</{{blank2}}>`,
      answers: [
        { id: 'blank1', answer: tag, placeholder: '____' },
        { id: 'blank2', answer: tag, placeholder: '____' },
      ],
      xp: 10,
    });
  }

  if (unit.includes('listas')) {
    return createFillBlank({
      id,
      instruction: 'Crie uma lista nao ordenada:',
      template: '<{{blank1}}>\n  <li>Item</li>\n</{{blank2}}>',
      answers: [
        { id: 'blank1', answer: 'ul', placeholder: '__' },
        { id: 'blank2', answer: 'ul', placeholder: '__' },
      ],
    });
  }

  if (unit.includes('tabelas')) {
    return createFillBlank({
      id,
      instruction: 'Complete a estrutura da tabela:',
      template: '<table>\n  <{{blank1}}>\n    <td>Celula</td>\n  </{{blank2}}>\n</table>',
      answers: [
        { id: 'blank1', answer: 'tr', placeholder: '__' },
        { id: 'blank2', answer: 'tr', placeholder: '__' },
      ],
    });
  }

  if (unit.includes('formul')) {
    return createMultipleChoice({
      id,
      instruction: 'Qual atributo define o tipo do input?',
      correct: 'type',
      wrong: ['name', 'value'],
    });
  }

  if (unit.includes('acessibilidade')) {
    return createMultipleChoice({
      id,
      instruction: 'Qual atributo descreve uma imagem?',
      correct: 'alt',
      wrong: ['src', 'title'],
    });
  }

  if (unit.includes('css')) {
    if (title.includes('seletor')) {
      return createMultipleChoice({
        id,
        instruction: 'Qual seletor aplica em classe?',
        correct: '.card',
        wrong: ['#card', 'card'],
      });
    }

    if (title.includes('flex')) {
      return createFillBlank({
        id,
        instruction: 'Ative o flexbox:',
        template: '.linha { display: {{blank1}}; }',
        answers: [{ id: 'blank1', answer: 'flex', placeholder: '____' }],
      });
    }

    if (title.includes('grid')) {
      return createFillBlank({
        id,
        instruction: 'Defina duas colunas:',
        template: '.grid { grid-template-columns: repeat(2, {{blank1}}); }',
        answers: [{ id: 'blank1', answer: '1fr', placeholder: '___' }],
      });
    }

    if (title.includes('cor') || title.includes('cores')) {
      return createFillBlank({
        id,
        instruction: 'Defina a cor do texto:',
        template: 'p { {{blank1}}: #0f172a; }',
        answers: [{ id: 'blank1', answer: 'color', placeholder: '_____' }],
      });
    }

    if (title.includes('padding') || title.includes('espac')) {
      return createFillBlank({
        id,
        instruction: 'Adicione espacamento interno:',
        template: '.card { {{blank1}}: 16px; }',
        answers: [{ id: 'blank1', answer: 'padding', placeholder: '_______' }],
      });
    }

    return createMultipleChoice({
      id,
      instruction: 'Qual propriedade controla tamanho da fonte?',
      correct: 'font-size',
      wrong: ['font-weight', 'line-height'],
    });
  }

  if (unit.includes('javascript') || unit.includes('dom')) {
    if (title.includes('vari')) {
      return createFillBlank({
        id,
        instruction: 'Crie uma constante:',
        template: '{{blank1}} nome = "Ana";',
        answers: [{ id: 'blank1', answer: 'const', placeholder: '_____' }],
      });
    }

    if (title.includes('operador')) {
      return createMultipleChoice({
        id,
        instruction: 'Qual operador compara com tipo?',
        correct: '===',
        wrong: ['==', '!='],
      });
    }

    if (title.includes('func')) {
      return createFillBlank({
        id,
        instruction: 'Complete o retorno:',
        template: 'function soma(a, b) { {{blank1}} a + b; }',
        answers: [{ id: 'blank1', answer: 'return', placeholder: '______' }],
      });
    }

    if (title.includes('event') || unit.includes('eventos')) {
      return createFillBlank({
        id,
        instruction: 'Adicione evento de clique:',
        template: 'botao.{{blank1}}("click", () => {});',
        answers: [{ id: 'blank1', answer: 'addEventListener', placeholder: '______________' }],
      });
    }

    return createMultipleChoice({
      id,
      instruction: 'Qual metodo seleciona um elemento?',
      correct: 'querySelector',
      wrong: ['selectElement', 'getElement'],
    });
  }

  return createMultipleChoice({
    id,
    instruction: 'Qual tecnologia define a estrutura da pagina?',
    correct: 'HTML',
    wrong: ['CSS', 'JavaScript'],
  });
};

const shouldExpand = (exercise: Exercise) => {
  if (exercise.type !== 'info') return false;
  const text = exercise.explanation ?? '';
  if (!text) return true;
  if (text.includes('Exemplo de uso') || text.includes('Uso comum') || text.includes('Dica pratica')) {
    return false;
  }
  return true;
};

const expandInfoExercise = (exercise: Exercise, lesson: Lesson): Exercise => {
  if (exercise.type !== 'info') return exercise;

  const override = DETAILED_EXPLANATIONS[exercise.id];
  const baseExercise = override ? { ...exercise, explanation: override } : exercise;
  if (!shouldExpand(baseExercise)) return baseExercise;

  const base = baseExercise.explanation ?? baseExercise.instruction ?? '';
  const example = buildExample(baseExercise);
  const usage = buildUsage(lesson);
  const tip = buildTip(lesson);

  return {
    ...baseExercise,
    explanation: `${base}\n\nExemplo de uso: ${example}\nUso comum: ${usage}\nDica pratica: ${tip}`,
  };
};

const buildPracticeExercise = (lesson: Lesson): Exercise | null => {
  const practiceId = `${lesson.id}-practice`;
  if (lesson.exercises.some(exercise => exercise.id === practiceId)) {
    return null;
  }

  const challenge = buildUniquePracticeExercise(lesson);
  if (!challenge) return null;

  return {
    ...challenge,
    id: practiceId,
    instruction: `Pratica guiada: ${challenge.instruction}`,
    xp: Math.max(8, challenge.xp),
  };
};

const buildVisualExercise = (lesson: Lesson): Exercise => ({
  id: `${lesson.id}-visual`,
  type: 'info',
  instruction: 'Exemplo visual',
  explanation: [
    'Veja um exemplo completo aplicado:',
    '',
    buildVisualExample(lesson),
    '',
    'O que observar: estrutura, nomes claros e boas praticas.',
  ].join('\n'),
  xp: 0,
});

const expandLesson = (lesson: Lesson): Lesson => {
  const expandedExercises = lesson.exercises.map(exercise =>
    expandInfoExercise(exercise, lesson)
  );

  const hasVisual = expandedExercises.some(ex => ex.id === `${lesson.id}-visual`);
  const visualExercise = hasVisual ? [] : [buildVisualExercise(lesson)];

  const practiceExercise = buildPracticeExercise({
    ...lesson,
    exercises: expandedExercises,
  });

  return {
    ...lesson,
    exercises: [
      expandedExercises[0],
      ...visualExercise,
      ...expandedExercises.slice(1),
      ...(practiceExercise ? [practiceExercise] : []),
    ].filter(Boolean) as Exercise[],
  };
};

export const htmlUnitsExpanded: Unit[] = htmlUnitsEnriched.map(unit => ({
  ...unit,
  lessons: unit.lessons.map(expandLesson),
}));

export const htmlLessonsExpanded: Lesson[] = htmlUnitsExpanded.flatMap(unit => unit.lessons);

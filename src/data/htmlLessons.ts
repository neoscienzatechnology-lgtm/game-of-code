export interface Exercise {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'info';
  instruction: string;
  explanation?: string;
  codeTemplate?: string;
  blanks?: { id: string; answer: string; placeholder?: string }[];
  options?: { id: string; text: string; correct: boolean }[];
  xp: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  exercises: Exercise[];
  unlocked: boolean;
}

export const htmlLessons: Lesson[] = [
  {
    id: 'intro',
    title: 'O que é HTML?',
    description: 'Descubra a linguagem que constrói a web',
    icon: '🌐',
    unlocked: true,
    exercises: [
      {
        id: 'intro-1',
        type: 'info',
        instruction: 'Bem-vindo ao mundo do HTML!',
        explanation: 'HTML significa **HyperText Markup Language**. É a linguagem usada para criar todas as páginas da web que você visita.',
        xp: 5
      },
      {
        id: 'intro-2',
        type: 'info',
        instruction: 'Como funciona?',
        explanation: 'O HTML usa **tags** para estruturar o conteúdo. Uma tag é como uma instrução para o navegador sobre como exibir algo.',
        xp: 5
      },
      {
        id: 'intro-3',
        type: 'fill-blank',
        instruction: 'Complete a sigla HTML:',
        codeTemplate: '{{blank1}} Markup Language',
        blanks: [{ id: 'blank1', answer: 'HyperText', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'intro-4',
        type: 'multiple-choice',
        instruction: 'Para que serve o HTML?',
        options: [
          { id: 'a', text: 'Criar estilos visuais', correct: false },
          { id: 'b', text: 'Estruturar conteúdo de páginas web', correct: true },
          { id: 'c', text: 'Fazer animações', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'tags-basics',
    title: 'Tags Básicas',
    description: 'Aprenda a sintaxe das tags HTML',
    icon: '🏷️',
    unlocked: true,
    exercises: [
      {
        id: 'tags-1',
        type: 'info',
        instruction: 'Anatomia de uma tag',
        explanation: 'Tags HTML têm uma abertura `<tag>` e um fechamento `</tag>`. O conteúdo fica entre elas.',
        xp: 5
      },
      {
        id: 'tags-2',
        type: 'fill-blank',
        instruction: 'Complete a tag de parágrafo:',
        codeTemplate: '<{{blank1}}>Olá, mundo!</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'p', placeholder: '_' },
          { id: 'blank2', answer: 'p', placeholder: '_' }
        ],
        xp: 10
      },
      {
        id: 'tags-3',
        type: 'info',
        instruction: 'Tags de fechamento',
        explanation: 'O símbolo `/` indica que a tag está **fechando**. Sem ele, a tag está abrindo.',
        xp: 5
      },
      {
        id: 'tags-4',
        type: 'fill-blank',
        instruction: 'Feche a tag corretamente:',
        codeTemplate: '<h1>Título<{{blank1}}h1>',
        blanks: [{ id: 'blank1', answer: '/', placeholder: '_' }],
        xp: 10
      },
      {
        id: 'tags-5',
        type: 'multiple-choice',
        instruction: 'Qual tag está escrita corretamente?',
        options: [
          { id: 'a', text: '<p>texto<p>', correct: false },
          { id: 'b', text: '<p>texto</p>', correct: true },
          { id: 'c', text: 'p>texto</p>', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'structure',
    title: 'Estrutura HTML',
    description: 'Monte a estrutura básica de uma página',
    icon: '🏗️',
    unlocked: true,
    exercises: [
      {
        id: 'structure-1',
        type: 'info',
        instruction: 'Estrutura de uma página',
        explanation: 'Todo documento HTML começa com `<!DOCTYPE html>` e tem as tags `<html>`, `<head>` e `<body>`.',
        xp: 5
      },
      {
        id: 'structure-2',
        type: 'fill-blank',
        instruction: 'Complete a declaração do documento:',
        codeTemplate: '<!{{blank1}} html>',
        blanks: [{ id: 'blank1', answer: 'DOCTYPE', placeholder: '_______' }],
        xp: 10
      },
      {
        id: 'structure-3',
        type: 'info',
        instruction: 'A tag <head>',
        explanation: 'O `<head>` contém metadados como título da página e links para CSS. Não é visível na página.',
        xp: 5
      },
      {
        id: 'structure-4',
        type: 'info',
        instruction: 'A tag <body>',
        explanation: 'O `<body>` contém todo o conteúdo visível da página: textos, imagens, links, etc.',
        xp: 5
      },
      {
        id: 'structure-5',
        type: 'fill-blank',
        instruction: 'Onde vai o conteúdo visível?',
        codeTemplate: '<html>\n  <head></head>\n  <{{blank1}}>\n    Conteúdo aqui\n  </{{blank2}}>\n</html>',
        blanks: [
          { id: 'blank1', answer: 'body', placeholder: '____' },
          { id: 'blank2', answer: 'body', placeholder: '____' }
        ],
        xp: 15
      }
    ]
  },
  {
    id: 'headings',
    title: 'Títulos',
    description: 'Use headings para organizar conteúdo',
    icon: '📰',
    unlocked: true,
    exercises: [
      {
        id: 'headings-1',
        type: 'info',
        instruction: 'Hierarquia de títulos',
        explanation: 'HTML tem 6 níveis de títulos: `<h1>` (maior) até `<h6>` (menor). Use-os para organizar seu conteúdo.',
        xp: 5
      },
      {
        id: 'headings-2',
        type: 'fill-blank',
        instruction: 'Crie o título principal:',
        codeTemplate: '<{{blank1}}>Meu Site</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'h1', placeholder: '__' },
          { id: 'blank2', answer: 'h1', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'headings-3',
        type: 'multiple-choice',
        instruction: 'Qual é o maior título?',
        options: [
          { id: 'a', text: '<h6>', correct: false },
          { id: 'b', text: '<h3>', correct: false },
          { id: 'c', text: '<h1>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'headings-4',
        type: 'fill-blank',
        instruction: 'Crie um subtítulo (nível 2):',
        codeTemplate: '<{{blank1}}>Sobre Nós</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'h2', placeholder: '__' },
          { id: 'blank2', answer: 'h2', placeholder: '__' }
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'paragraphs',
    title: 'Parágrafos e Texto',
    description: 'Adicione textos às suas páginas',
    icon: '📝',
    unlocked: true,
    exercises: [
      {
        id: 'paragraphs-1',
        type: 'info',
        instruction: 'Tag de parágrafo',
        explanation: 'A tag `<p>` é usada para criar parágrafos de texto. Cada `<p>` começa em uma nova linha.',
        xp: 5
      },
      {
        id: 'paragraphs-2',
        type: 'fill-blank',
        instruction: 'Crie um parágrafo:',
        codeTemplate: '<{{blank1}}>Este é meu primeiro parágrafo.</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'p', placeholder: '_' },
          { id: 'blank2', answer: 'p', placeholder: '_' }
        ],
        xp: 10
      },
      {
        id: 'paragraphs-3',
        type: 'info',
        instruction: 'Texto em negrito',
        explanation: 'Use `<strong>` ou `<b>` para deixar texto em **negrito**.',
        xp: 5
      },
      {
        id: 'paragraphs-4',
        type: 'fill-blank',
        instruction: 'Deixe "importante" em negrito:',
        codeTemplate: '<p>Isso é <{{blank1}}>importante</{{blank2}}>!</p>',
        blanks: [
          { id: 'blank1', answer: 'strong', placeholder: '______' },
          { id: 'blank2', answer: 'strong', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'paragraphs-5',
        type: 'info',
        instruction: 'Texto em itálico',
        explanation: 'Use `<em>` ou `<i>` para deixar texto em *itálico*.',
        xp: 5
      },
      {
        id: 'paragraphs-6',
        type: 'fill-blank',
        instruction: 'Deixe "especial" em itálico:',
        codeTemplate: '<p>Um momento <{{blank1}}>especial</{{blank2}}>.</p>',
        blanks: [
          { id: 'blank1', answer: 'em', placeholder: '__' },
          { id: 'blank2', answer: 'em', placeholder: '__' }
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'links',
    title: 'Links',
    description: 'Conecte páginas com hyperlinks',
    icon: '🔗',
    unlocked: true,
    exercises: [
      {
        id: 'links-1',
        type: 'info',
        instruction: 'A tag <a>',
        explanation: 'Links são criados com a tag `<a>`. O atributo `href` define o destino do link.',
        xp: 5
      },
      {
        id: 'links-2',
        type: 'fill-blank',
        instruction: 'Complete a tag de link:',
        codeTemplate: '<{{blank1}} href="https://google.com">Google</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'a', placeholder: '_' },
          { id: 'blank2', answer: 'a', placeholder: '_' }
        ],
        xp: 10
      },
      {
        id: 'links-3',
        type: 'info',
        instruction: 'O atributo href',
        explanation: 'O `href` (hypertext reference) contém a URL de destino. Pode ser uma página externa ou um arquivo local.',
        xp: 5
      },
      {
        id: 'links-4',
        type: 'fill-blank',
        instruction: 'Adicione o atributo de URL:',
        codeTemplate: '<a {{blank1}}="https://github.com">GitHub</a>',
        blanks: [{ id: 'blank1', answer: 'href', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'links-5',
        type: 'multiple-choice',
        instruction: 'Qual atributo define o destino do link?',
        options: [
          { id: 'a', text: 'src', correct: false },
          { id: 'b', text: 'href', correct: true },
          { id: 'c', text: 'link', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'images',
    title: 'Imagens',
    description: 'Adicione imagens às suas páginas',
    icon: '🖼️',
    unlocked: true,
    exercises: [
      {
        id: 'images-1',
        type: 'info',
        instruction: 'A tag <img>',
        explanation: 'Imagens usam a tag `<img>`. Ela é uma tag **auto-fechante** (não precisa de `</img>`).',
        xp: 5
      },
      {
        id: 'images-2',
        type: 'fill-blank',
        instruction: 'Complete a tag de imagem:',
        codeTemplate: '<{{blank1}} src="foto.jpg" alt="Minha foto">',
        blanks: [{ id: 'blank1', answer: 'img', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'images-3',
        type: 'info',
        instruction: 'O atributo src',
        explanation: 'O atributo `src` (source) define o caminho ou URL da imagem.',
        xp: 5
      },
      {
        id: 'images-4',
        type: 'fill-blank',
        instruction: 'Adicione o caminho da imagem:',
        codeTemplate: '<img {{blank1}}="logo.png" alt="Logo">',
        blanks: [{ id: 'blank1', answer: 'src', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'images-5',
        type: 'info',
        instruction: 'O atributo alt',
        explanation: 'O `alt` fornece texto alternativo se a imagem não carregar. É importante para acessibilidade!',
        xp: 5
      },
      {
        id: 'images-6',
        type: 'fill-blank',
        instruction: 'Adicione descrição alternativa:',
        codeTemplate: '<img src="gato.jpg" {{blank1}}="Um gato dormindo">',
        blanks: [{ id: 'blank1', answer: 'alt', placeholder: '___' }],
        xp: 10
      }
    ]
  },
  {
    id: 'lists',
    title: 'Listas',
    description: 'Organize itens em listas',
    icon: '📋',
    unlocked: true,
    exercises: [
      {
        id: 'lists-1',
        type: 'info',
        instruction: 'Tipos de listas',
        explanation: 'HTML tem listas **ordenadas** `<ol>` (1, 2, 3...) e **não ordenadas** `<ul>` (•, •, •...).',
        xp: 5
      },
      {
        id: 'lists-2',
        type: 'info',
        instruction: 'Itens de lista',
        explanation: 'Cada item dentro de uma lista usa a tag `<li>` (list item).',
        xp: 5
      },
      {
        id: 'lists-3',
        type: 'fill-blank',
        instruction: 'Crie uma lista não ordenada:',
        codeTemplate: '<{{blank1}}>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'ul', placeholder: '__' },
          { id: 'blank2', answer: 'ul', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'lists-4',
        type: 'fill-blank',
        instruction: 'Crie uma lista ordenada:',
        codeTemplate: '<{{blank1}}>\n  <li>Primeiro</li>\n  <li>Segundo</li>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'ol', placeholder: '__' },
          { id: 'blank2', answer: 'ol', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'lists-5',
        type: 'fill-blank',
        instruction: 'Adicione um item à lista:',
        codeTemplate: '<ul>\n  <{{blank1}}>Maçã</{{blank2}}>\n</ul>',
        blanks: [
          { id: 'blank1', answer: 'li', placeholder: '__' },
          { id: 'blank2', answer: 'li', placeholder: '__' }
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'divs',
    title: 'Div e Span',
    description: 'Agrupe elementos com containers',
    icon: '📦',
    unlocked: true,
    exercises: [
      {
        id: 'divs-1',
        type: 'info',
        instruction: 'A tag <div>',
        explanation: 'A `<div>` é um container **block** (bloco). Usamos para agrupar elementos e aplicar estilos.',
        xp: 5
      },
      {
        id: 'divs-2',
        type: 'fill-blank',
        instruction: 'Crie uma div:',
        codeTemplate: '<{{blank1}}>\n  <h1>Título</h1>\n  <p>Texto</p>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'div', placeholder: '___' },
          { id: 'blank2', answer: 'div', placeholder: '___' }
        ],
        xp: 10
      },
      {
        id: 'divs-3',
        type: 'info',
        instruction: 'A tag <span>',
        explanation: 'O `<span>` é um container **inline**. Usado para estilizar partes de texto sem quebrar linha.',
        xp: 5
      },
      {
        id: 'divs-4',
        type: 'fill-blank',
        instruction: 'Destaque uma palavra:',
        codeTemplate: '<p>Isso é <{{blank1}}>especial</{{blank2}}>!</p>',
        blanks: [
          { id: 'blank1', answer: 'span', placeholder: '____' },
          { id: 'blank2', answer: 'span', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'divs-5',
        type: 'multiple-choice',
        instruction: 'Qual é um elemento block?',
        options: [
          { id: 'a', text: '<span>', correct: false },
          { id: 'b', text: '<div>', correct: true },
          { id: 'c', text: '<a>', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'attributes',
    title: 'Atributos',
    description: 'Adicione propriedades às tags',
    icon: '⚙️',
    unlocked: true,
    exercises: [
      {
        id: 'attr-1',
        type: 'info',
        instruction: 'O que são atributos?',
        explanation: 'Atributos adicionam informações extras às tags. Ficam dentro da tag de abertura: `<tag atributo="valor">`.',
        xp: 5
      },
      {
        id: 'attr-2',
        type: 'info',
        instruction: 'O atributo id',
        explanation: 'O `id` identifica **unicamente** um elemento. Cada id deve ser único na página.',
        xp: 5
      },
      {
        id: 'attr-3',
        type: 'fill-blank',
        instruction: 'Adicione um id:',
        codeTemplate: '<div {{blank1}}="header">Cabeçalho</div>',
        blanks: [{ id: 'blank1', answer: 'id', placeholder: '__' }],
        xp: 10
      },
      {
        id: 'attr-4',
        type: 'info',
        instruction: 'O atributo class',
        explanation: 'A `class` agrupa elementos com estilos similares. Diferente do id, pode se repetir.',
        xp: 5
      },
      {
        id: 'attr-5',
        type: 'fill-blank',
        instruction: 'Adicione uma classe:',
        codeTemplate: '<p {{blank1}}="destaque">Texto importante</p>',
        blanks: [{ id: 'blank1', answer: 'class', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'attr-6',
        type: 'multiple-choice',
        instruction: 'Qual atributo deve ser único?',
        options: [
          { id: 'a', text: 'class', correct: false },
          { id: 'b', text: 'id', correct: true },
          { id: 'c', text: 'href', correct: false },
        ],
        xp: 10
      }
    ]
  }
];

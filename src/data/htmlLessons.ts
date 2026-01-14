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
  unitId: string;
  unitTitle: string;
}

export interface Unit {
  id: string;
  title: string;
  icon: string;
  lessons: Lesson[];
}

// ============================================
// UNIDADE 1 — INTRODUÇÃO À WEB
// ============================================

const unit1Lessons: Lesson[] = [
  {
    id: 'u1-l1',
    title: 'O que é a Web',
    description: 'Entenda como a internet funciona',
    icon: '🌐',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l1-1',
        type: 'info',
        instruction: 'Bem-vindo à Web!',
        explanation: 'A **World Wide Web** (WWW) é um sistema de documentos interligados acessados pela internet. Foi criada em 1989 por Tim Berners-Lee.',
        xp: 5
      },
      {
        id: 'u1-l1-2',
        type: 'info',
        instruction: 'Como funciona?',
        explanation: 'Quando você digita um endereço no navegador, ele envia uma requisição para um **servidor**. O servidor responde com arquivos HTML, CSS e JavaScript.',
        xp: 5
      },
      {
        id: 'u1-l1-3',
        type: 'multiple-choice',
        instruction: 'Quem criou a World Wide Web?',
        options: [
          { id: 'a', text: 'Bill Gates', correct: false },
          { id: 'b', text: 'Tim Berners-Lee', correct: true },
          { id: 'c', text: 'Steve Jobs', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u1-l1-4',
        type: 'fill-blank',
        instruction: 'Complete: A Web usa a sigla...',
        codeTemplate: '{{blank1}}',
        blanks: [{ id: 'blank1', answer: 'WWW', placeholder: '___' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l2',
    title: 'O que é HTML',
    description: 'Descubra a linguagem da web',
    icon: '📄',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l2-1',
        type: 'info',
        instruction: 'HTML é a base!',
        explanation: 'HTML significa **HyperText Markup Language**. É a linguagem de marcação usada para criar a estrutura de todas as páginas web.',
        xp: 5
      },
      {
        id: 'u1-l2-2',
        type: 'info',
        instruction: 'Linguagem de marcação',
        explanation: 'HTML usa **tags** para marcar e estruturar conteúdo. Não é uma linguagem de programação, pois não faz cálculos nem lógica.',
        xp: 5
      },
      {
        id: 'u1-l2-3',
        type: 'fill-blank',
        instruction: 'Complete a sigla HTML:',
        codeTemplate: '{{blank1}} Markup Language',
        blanks: [{ id: 'blank1', answer: 'HyperText', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u1-l2-4',
        type: 'multiple-choice',
        instruction: 'HTML é uma linguagem de:',
        options: [
          { id: 'a', text: 'Programação', correct: false },
          { id: 'b', text: 'Marcação', correct: true },
          { id: 'c', text: 'Estilo', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l3',
    title: 'HTML vs CSS vs JavaScript',
    description: 'Entenda o papel de cada tecnologia',
    icon: '🔄',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l3-1',
        type: 'info',
        instruction: 'As três tecnologias da web',
        explanation: '**HTML** = estrutura (esqueleto)\n**CSS** = estilo (aparência)\n**JavaScript** = comportamento (interatividade)',
        xp: 5
      },
      {
        id: 'u1-l3-2',
        type: 'info',
        instruction: 'Uma analogia',
        explanation: 'Pense em uma casa: HTML são as paredes e estrutura, CSS é a pintura e decoração, JavaScript são os sistemas elétricos e automação.',
        xp: 5
      },
      {
        id: 'u1-l3-3',
        type: 'multiple-choice',
        instruction: 'Qual tecnologia define cores e fontes?',
        options: [
          { id: 'a', text: 'HTML', correct: false },
          { id: 'b', text: 'CSS', correct: true },
          { id: 'c', text: 'JavaScript', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u1-l3-4',
        type: 'multiple-choice',
        instruction: 'Qual tecnologia adiciona interatividade?',
        options: [
          { id: 'a', text: 'HTML', correct: false },
          { id: 'b', text: 'CSS', correct: false },
          { id: 'c', text: 'JavaScript', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l4',
    title: 'Como o navegador interpreta HTML',
    description: 'Veja como sua página ganha vida',
    icon: '🖥️',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l4-1',
        type: 'info',
        instruction: 'O trabalho do navegador',
        explanation: 'O navegador lê o código HTML de cima para baixo e constrói uma árvore de elementos chamada **DOM** (Document Object Model).',
        xp: 5
      },
      {
        id: 'u1-l4-2',
        type: 'info',
        instruction: 'Renderização',
        explanation: 'Após construir o DOM, o navegador aplica os estilos CSS e exibe a página na tela. Esse processo chama-se **renderização**.',
        xp: 5
      },
      {
        id: 'u1-l4-3',
        type: 'fill-blank',
        instruction: 'A árvore de elementos se chama:',
        codeTemplate: '{{blank1}}',
        blanks: [{ id: 'blank1', answer: 'DOM', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u1-l4-4',
        type: 'multiple-choice',
        instruction: 'O navegador lê o HTML em qual ordem?',
        options: [
          { id: 'a', text: 'De baixo para cima', correct: false },
          { id: 'b', text: 'De cima para baixo', correct: true },
          { id: 'c', text: 'Aleatoriamente', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l5',
    title: 'O que são tags',
    description: 'Aprenda a sintaxe básica do HTML',
    icon: '🏷️',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l5-1',
        type: 'info',
        instruction: 'Tags HTML',
        explanation: 'Tags são comandos entre sinais de `<` e `>`. A maioria tem abertura `<tag>` e fechamento `</tag>`.',
        xp: 5
      },
      {
        id: 'u1-l5-2',
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
        id: 'u1-l5-3',
        type: 'info',
        instruction: 'Tag de fechamento',
        explanation: 'O símbolo `/` indica fechamento. Sem ele, a tag está abrindo.',
        xp: 5
      },
      {
        id: 'u1-l5-4',
        type: 'fill-blank',
        instruction: 'Feche a tag corretamente:',
        codeTemplate: '<h1>Título<{{blank1}}h1>',
        blanks: [{ id: 'blank1', answer: '/', placeholder: '_' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l6',
    title: 'O que são atributos',
    description: 'Adicione informações extras às tags',
    icon: '🔧',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l6-1',
        type: 'info',
        instruction: 'Atributos HTML',
        explanation: 'Atributos fornecem informações extras sobre um elemento. Ficam dentro da tag de abertura: `<tag atributo="valor">`.',
        xp: 5
      },
      {
        id: 'u1-l6-2',
        type: 'info',
        instruction: 'Sintaxe',
        explanation: 'Atributos seguem o formato `nome="valor"`. O valor sempre fica entre aspas.',
        xp: 5
      },
      {
        id: 'u1-l6-3',
        type: 'fill-blank',
        instruction: 'Adicione o atributo href:',
        codeTemplate: '<a {{blank1}}="https://google.com">Link</a>',
        blanks: [{ id: 'blank1', answer: 'href', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u1-l6-4',
        type: 'multiple-choice',
        instruction: 'Onde ficam os atributos?',
        options: [
          { id: 'a', text: 'Dentro da tag de abertura', correct: true },
          { id: 'b', text: 'Na tag de fechamento', correct: false },
          { id: 'c', text: 'Fora das tags', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u1-l7',
    title: 'HTML não é linguagem de programação',
    description: 'Entenda a diferença importante',
    icon: '❌',
    unlocked: true,
    unitId: 'unit-1',
    unitTitle: 'Introdução à Web',
    exercises: [
      {
        id: 'u1-l7-1',
        type: 'info',
        instruction: 'Uma distinção importante',
        explanation: 'HTML é uma linguagem de **marcação**, não de programação. Ela não faz cálculos, loops ou decisões lógicas.',
        xp: 5
      },
      {
        id: 'u1-l7-2',
        type: 'info',
        instruction: 'O papel do HTML',
        explanation: 'HTML apenas **descreve** a estrutura do conteúdo. Para lógica e interatividade, usamos JavaScript.',
        xp: 5
      },
      {
        id: 'u1-l7-3',
        type: 'multiple-choice',
        instruction: 'HTML pode fazer cálculos matemáticos?',
        options: [
          { id: 'a', text: 'Sim', correct: false },
          { id: 'b', text: 'Não', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u1-l7-4',
        type: 'multiple-choice',
        instruction: 'Para lógica e interatividade, usamos:',
        options: [
          { id: 'a', text: 'HTML', correct: false },
          { id: 'b', text: 'CSS', correct: false },
          { id: 'c', text: 'JavaScript', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 2 — ESTRUTURA DO HTML
// ============================================

const unit2Lessons: Lesson[] = [
  {
    id: 'u2-l1',
    title: '<!DOCTYPE html>',
    description: 'A primeira linha de todo documento',
    icon: '📋',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l1-1',
        type: 'info',
        instruction: 'Declaração DOCTYPE',
        explanation: 'Todo documento HTML começa com `<!DOCTYPE html>`. Isso diz ao navegador que o documento usa HTML5.',
        xp: 5
      },
      {
        id: 'u2-l1-2',
        type: 'info',
        instruction: 'Não é uma tag',
        explanation: 'DOCTYPE não é uma tag HTML, é uma **declaração**. Ela deve ser a primeira linha do arquivo.',
        xp: 5
      },
      {
        id: 'u2-l1-3',
        type: 'fill-blank',
        instruction: 'Complete a declaração:',
        codeTemplate: '<!{{blank1}} html>',
        blanks: [{ id: 'blank1', answer: 'DOCTYPE', placeholder: '_______' }],
        xp: 10
      },
      {
        id: 'u2-l1-4',
        type: 'multiple-choice',
        instruction: 'Onde fica o DOCTYPE?',
        options: [
          { id: 'a', text: 'No final do documento', correct: false },
          { id: 'b', text: 'Dentro do <body>', correct: false },
          { id: 'c', text: 'Na primeira linha', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l2',
    title: 'Tag <html>',
    description: 'O elemento raiz do documento',
    icon: '🌳',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l2-1',
        type: 'info',
        instruction: 'Elemento raiz',
        explanation: 'A tag `<html>` envolve todo o conteúdo da página. É o elemento **raiz** do documento.',
        xp: 5
      },
      {
        id: 'u2-l2-2',
        type: 'info',
        instruction: 'Atributo lang',
        explanation: 'Use o atributo `lang` para definir o idioma: `<html lang="pt-BR">` para português do Brasil.',
        xp: 5
      },
      {
        id: 'u2-l2-3',
        type: 'fill-blank',
        instruction: 'Complete a estrutura:',
        codeTemplate: '<!DOCTYPE html>\n<{{blank1}} lang="pt-BR">\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'html', placeholder: '____' },
          { id: 'blank2', answer: 'html', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u2-l2-4',
        type: 'fill-blank',
        instruction: 'Defina o idioma como português:',
        codeTemplate: '<html {{blank1}}="pt-BR">',
        blanks: [{ id: 'blank1', answer: 'lang', placeholder: '____' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l3',
    title: 'Tag <head>',
    description: 'Metadados e configurações',
    icon: '🧠',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l3-1',
        type: 'info',
        instruction: 'O que é o <head>?',
        explanation: 'O `<head>` contém **metadados**: informações sobre a página que não aparecem diretamente na tela.',
        xp: 5
      },
      {
        id: 'u2-l3-2',
        type: 'info',
        instruction: 'O que vai no head?',
        explanation: 'Dentro do head colocamos: título, links para CSS, meta tags, scripts e outros recursos.',
        xp: 5
      },
      {
        id: 'u2-l3-3',
        type: 'fill-blank',
        instruction: 'Complete a estrutura:',
        codeTemplate: '<html>\n  <{{blank1}}>\n    <!-- metadados aqui -->\n  </{{blank2}}>\n</html>',
        blanks: [
          { id: 'blank1', answer: 'head', placeholder: '____' },
          { id: 'blank2', answer: 'head', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u2-l3-4',
        type: 'multiple-choice',
        instruction: 'O conteúdo do <head> aparece na página?',
        options: [
          { id: 'a', text: 'Sim, sempre', correct: false },
          { id: 'b', text: 'Não diretamente', correct: true },
          { id: 'c', text: 'Às vezes', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l4',
    title: 'Tag <body>',
    description: 'O conteúdo visível da página',
    icon: '👁️',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l4-1',
        type: 'info',
        instruction: 'Conteúdo visível',
        explanation: 'O `<body>` contém todo o conteúdo **visível** da página: textos, imagens, links, vídeos, etc.',
        xp: 5
      },
      {
        id: 'u2-l4-2',
        type: 'info',
        instruction: 'Apenas um body',
        explanation: 'Cada documento HTML pode ter apenas **um** elemento `<body>`.',
        xp: 5
      },
      {
        id: 'u2-l4-3',
        type: 'fill-blank',
        instruction: 'Onde vai o conteúdo visível?',
        codeTemplate: '<html>\n  <head></head>\n  <{{blank1}}>\n    <h1>Olá!</h1>\n  </{{blank2}}>\n</html>',
        blanks: [
          { id: 'blank1', answer: 'body', placeholder: '____' },
          { id: 'blank2', answer: 'body', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u2-l4-4',
        type: 'multiple-choice',
        instruction: 'Quantos <body> pode ter um documento?',
        options: [
          { id: 'a', text: 'Quantos quiser', correct: false },
          { id: 'b', text: 'Apenas um', correct: true },
          { id: 'c', text: 'Dois', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l5',
    title: '<title>',
    description: 'O título na aba do navegador',
    icon: '📑',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l5-1',
        type: 'info',
        instruction: 'Título da página',
        explanation: 'A tag `<title>` define o título que aparece na aba do navegador e nos resultados de busca.',
        xp: 5
      },
      {
        id: 'u2-l5-2',
        type: 'info',
        instruction: 'Onde colocar?',
        explanation: 'O `<title>` deve ficar dentro do `<head>`, nunca no `<body>`.',
        xp: 5
      },
      {
        id: 'u2-l5-3',
        type: 'fill-blank',
        instruction: 'Adicione um título:',
        codeTemplate: '<head>\n  <{{blank1}}>Meu Site</{{blank2}}>\n</head>',
        blanks: [
          { id: 'blank1', answer: 'title', placeholder: '_____' },
          { id: 'blank2', answer: 'title', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u2-l5-4',
        type: 'multiple-choice',
        instruction: 'Onde aparece o <title>?',
        options: [
          { id: 'a', text: 'No corpo da página', correct: false },
          { id: 'b', text: 'Na aba do navegador', correct: true },
          { id: 'c', text: 'No rodapé', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l6',
    title: '<meta charset>',
    description: 'Codificação de caracteres',
    icon: '🔤',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l6-1',
        type: 'info',
        instruction: 'Codificação de caracteres',
        explanation: 'O `<meta charset="UTF-8">` define a codificação de caracteres. UTF-8 suporta acentos e caracteres especiais.',
        xp: 5
      },
      {
        id: 'u2-l6-2',
        type: 'info',
        instruction: 'Por que usar?',
        explanation: 'Sem charset correto, acentos como "é", "ã", "ç" podem aparecer quebrados na página.',
        xp: 5
      },
      {
        id: 'u2-l6-3',
        type: 'fill-blank',
        instruction: 'Defina a codificação:',
        codeTemplate: '<meta {{blank1}}="UTF-8">',
        blanks: [{ id: 'blank1', answer: 'charset', placeholder: '_______' }],
        xp: 10
      },
      {
        id: 'u2-l6-4',
        type: 'multiple-choice',
        instruction: 'Qual codificação suporta acentos?',
        options: [
          { id: 'a', text: 'ASCII', correct: false },
          { id: 'b', text: 'UTF-8', correct: true },
          { id: 'c', text: 'Binary', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l7',
    title: '<meta name="viewport">',
    description: 'Responsividade em dispositivos',
    icon: '📱',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l7-1',
        type: 'info',
        instruction: 'Viewport',
        explanation: 'O viewport é a área visível da página. A meta viewport ajusta o site para diferentes tamanhos de tela.',
        xp: 5
      },
      {
        id: 'u2-l7-2',
        type: 'info',
        instruction: 'Configuração comum',
        explanation: '`<meta name="viewport" content="width=device-width, initial-scale=1.0">` faz o site se adaptar ao dispositivo.',
        xp: 5
      },
      {
        id: 'u2-l7-3',
        type: 'fill-blank',
        instruction: 'Complete a meta viewport:',
        codeTemplate: '<meta name="{{blank1}}" content="width=device-width">',
        blanks: [{ id: 'blank1', answer: 'viewport', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u2-l7-4',
        type: 'multiple-choice',
        instruction: 'A meta viewport é importante para:',
        options: [
          { id: 'a', text: 'SEO', correct: false },
          { id: 'b', text: 'Dispositivos móveis', correct: true },
          { id: 'c', text: 'Velocidade', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l8',
    title: 'Comentários HTML',
    description: 'Anotações no código',
    icon: '💬',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l8-1',
        type: 'info',
        instruction: 'O que são comentários?',
        explanation: 'Comentários são anotações no código que o navegador **ignora**. Usamos para documentar e explicar o código.',
        xp: 5
      },
      {
        id: 'u2-l8-2',
        type: 'info',
        instruction: 'Sintaxe',
        explanation: 'Comentários HTML usam `<!-- texto -->`. Tudo entre `<!--` e `-->` é ignorado.',
        xp: 5
      },
      {
        id: 'u2-l8-3',
        type: 'fill-blank',
        instruction: 'Crie um comentário:',
        codeTemplate: '{{blank1}}-- Este é um comentário --{{blank2}}',
        blanks: [
          { id: 'blank1', answer: '<!', placeholder: '__' },
          { id: 'blank2', answer: '>', placeholder: '_' }
        ],
        xp: 10
      },
      {
        id: 'u2-l8-4',
        type: 'multiple-choice',
        instruction: 'Comentários aparecem na página?',
        options: [
          { id: 'a', text: 'Sim', correct: false },
          { id: 'b', text: 'Não', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u2-l9',
    title: 'Indentação e organização',
    description: 'Código limpo e legível',
    icon: '📐',
    unlocked: true,
    unitId: 'unit-2',
    unitTitle: 'Estrutura do HTML',
    exercises: [
      {
        id: 'u2-l9-1',
        type: 'info',
        instruction: 'Por que indentar?',
        explanation: 'A **indentação** (espaços no início da linha) torna o código mais fácil de ler e entender a hierarquia.',
        xp: 5
      },
      {
        id: 'u2-l9-2',
        type: 'info',
        instruction: 'Boas práticas',
        explanation: 'Use 2 ou 4 espaços para cada nível. Elementos filhos devem estar mais à direita que os pais.',
        xp: 5
      },
      {
        id: 'u2-l9-3',
        type: 'multiple-choice',
        instruction: 'Qual código está bem indentado?',
        options: [
          { id: 'a', text: '<div><p>Texto</p></div>', correct: false },
          { id: 'b', text: '<div>\\n  <p>Texto</p>\\n</div>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u2-l9-4',
        type: 'multiple-choice',
        instruction: 'Indentação afeta o funcionamento?',
        options: [
          { id: 'a', text: 'Sim, é obrigatória', correct: false },
          { id: 'b', text: 'Não, só melhora a leitura', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 3 — TEXTO E CONTEÚDO
// ============================================

const unit3Lessons: Lesson[] = [
  {
    id: 'u3-l1',
    title: 'Títulos <h1> a <h6>',
    description: 'Hierarquia de títulos',
    icon: '📰',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l1-1',
        type: 'info',
        instruction: 'Níveis de título',
        explanation: 'HTML tem 6 níveis de títulos: `<h1>` (maior e mais importante) até `<h6>` (menor). Use para organizar conteúdo.',
        xp: 5
      },
      {
        id: 'u3-l1-2',
        type: 'fill-blank',
        instruction: 'Crie o título principal:',
        codeTemplate: '<{{blank1}}>Bem-vindo ao meu site</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'h1', placeholder: '__' },
          { id: 'blank2', answer: 'h1', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u3-l1-3',
        type: 'multiple-choice',
        instruction: 'Qual é o maior título?',
        options: [
          { id: 'a', text: '<h6>', correct: false },
          { id: 'b', text: '<h1>', correct: true },
          { id: 'c', text: '<h3>', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u3-l1-4',
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
    id: 'u3-l2',
    title: 'Parágrafos <p>',
    description: 'Blocos de texto',
    icon: '📝',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l2-1',
        type: 'info',
        instruction: 'Tag de parágrafo',
        explanation: 'A tag `<p>` cria um parágrafo. Cada parágrafo começa em uma nova linha com espaço antes e depois.',
        xp: 5
      },
      {
        id: 'u3-l2-2',
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
        id: 'u3-l2-3',
        type: 'multiple-choice',
        instruction: 'Parágrafos são elementos:',
        options: [
          { id: 'a', text: 'Inline', correct: false },
          { id: 'b', text: 'Block', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u3-l2-4',
        type: 'info',
        instruction: 'Múltiplos parágrafos',
        explanation: 'Use várias tags `<p>` para criar múltiplos parágrafos. O navegador adiciona espaço entre eles.',
        xp: 5
      }
    ]
  },
  {
    id: 'u3-l3',
    title: 'Quebra de linha <br>',
    description: 'Pular para próxima linha',
    icon: '↩️',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l3-1',
        type: 'info',
        instruction: 'Quebra de linha',
        explanation: 'A tag `<br>` força uma quebra de linha. É uma tag **auto-fechante** (não precisa de `</br>`).',
        xp: 5
      },
      {
        id: 'u3-l3-2',
        type: 'fill-blank',
        instruction: 'Quebre a linha:',
        codeTemplate: '<p>Linha 1<{{blank1}}>Linha 2</p>',
        blanks: [{ id: 'blank1', answer: 'br', placeholder: '__' }],
        xp: 10
      },
      {
        id: 'u3-l3-3',
        type: 'multiple-choice',
        instruction: '<br> precisa de tag de fechamento?',
        options: [
          { id: 'a', text: 'Sim', correct: false },
          { id: 'b', text: 'Não', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u3-l3-4',
        type: 'info',
        instruction: 'Quando usar?',
        explanation: 'Use `<br>` para quebras simples, como em endereços ou poemas. Para separar blocos, use `<p>`.',
        xp: 5
      }
    ]
  },
  {
    id: 'u3-l4',
    title: 'Linha horizontal <hr>',
    description: 'Separador visual',
    icon: '➖',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l4-1',
        type: 'info',
        instruction: 'Linha horizontal',
        explanation: 'A tag `<hr>` cria uma linha horizontal para separar seções. Também é auto-fechante.',
        xp: 5
      },
      {
        id: 'u3-l4-2',
        type: 'fill-blank',
        instruction: 'Adicione uma linha separadora:',
        codeTemplate: '<p>Seção 1</p>\n<{{blank1}}>\n<p>Seção 2</p>',
        blanks: [{ id: 'blank1', answer: 'hr', placeholder: '__' }],
        xp: 10
      },
      {
        id: 'u3-l4-3',
        type: 'multiple-choice',
        instruction: '<hr> significa:',
        options: [
          { id: 'a', text: 'Header Rule', correct: false },
          { id: 'b', text: 'Horizontal Rule', correct: true },
          { id: 'c', text: 'Hard Return', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u3-l4-4',
        type: 'info',
        instruction: 'Uso semântico',
        explanation: 'Use `<hr>` para indicar mudança de tema ou quebra temática no conteúdo.',
        xp: 5
      }
    ]
  },
  {
    id: 'u3-l5',
    title: 'Negrito <strong>',
    description: 'Destaque importante',
    icon: '💪',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l5-1',
        type: 'info',
        instruction: 'Texto em negrito',
        explanation: 'Use `<strong>` para texto com **importância forte**. O navegador exibe em negrito.',
        xp: 5
      },
      {
        id: 'u3-l5-2',
        type: 'fill-blank',
        instruction: 'Deixe "atenção" em negrito:',
        codeTemplate: '<p><{{blank1}}>Atenção</{{blank2}}>: leia com cuidado.</p>',
        blanks: [
          { id: 'blank1', answer: 'strong', placeholder: '______' },
          { id: 'blank2', answer: 'strong', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u3-l5-3',
        type: 'info',
        instruction: '<strong> vs <b>',
        explanation: '`<strong>` indica importância semântica. `<b>` é apenas visual. Prefira `<strong>` para acessibilidade.',
        xp: 5
      },
      {
        id: 'u3-l5-4',
        type: 'multiple-choice',
        instruction: 'Qual tag indica importância semântica?',
        options: [
          { id: 'a', text: '<b>', correct: false },
          { id: 'b', text: '<strong>', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u3-l6',
    title: 'Itálico <em>',
    description: 'Ênfase no texto',
    icon: '✨',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l6-1',
        type: 'info',
        instruction: 'Texto em itálico',
        explanation: 'Use `<em>` para dar **ênfase** ao texto. O navegador exibe em itálico.',
        xp: 5
      },
      {
        id: 'u3-l6-2',
        type: 'fill-blank',
        instruction: 'Enfatize "muito":',
        codeTemplate: '<p>Estou <{{blank1}}>muito</{{blank2}}> feliz!</p>',
        blanks: [
          { id: 'blank1', answer: 'em', placeholder: '__' },
          { id: 'blank2', answer: 'em', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u3-l6-3',
        type: 'info',
        instruction: '<em> vs <i>',
        explanation: '`<em>` indica ênfase semântica. `<i>` é apenas visual. Prefira `<em>` para melhor acessibilidade.',
        xp: 5
      },
      {
        id: 'u3-l6-4',
        type: 'multiple-choice',
        instruction: 'Qual tag indica ênfase?',
        options: [
          { id: 'a', text: '<i>', correct: false },
          { id: 'b', text: '<em>', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u3-l7',
    title: 'Texto pré-formatado <pre>',
    description: 'Preservar espaços e quebras',
    icon: '📋',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l7-1',
        type: 'info',
        instruction: 'Texto pré-formatado',
        explanation: '`<pre>` preserva espaços e quebras de linha exatamente como você escreveu. Usa fonte monoespaçada.',
        xp: 5
      },
      {
        id: 'u3-l7-2',
        type: 'fill-blank',
        instruction: 'Crie texto pré-formatado:',
        codeTemplate: '<{{blank1}}>\n  Linha 1\n  Linha 2\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'pre', placeholder: '___' },
          { id: 'blank2', answer: 'pre', placeholder: '___' }
        ],
        xp: 10
      },
      {
        id: 'u3-l7-3',
        type: 'multiple-choice',
        instruction: '<pre> preserva:',
        options: [
          { id: 'a', text: 'Apenas cores', correct: false },
          { id: 'b', text: 'Espaços e quebras de linha', correct: true },
          { id: 'c', text: 'Apenas links', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u3-l7-4',
        type: 'info',
        instruction: 'Quando usar?',
        explanation: 'Ideal para código, poesia, ou qualquer texto onde a formatação original é importante.',
        xp: 5
      }
    ]
  },
  {
    id: 'u3-l8',
    title: 'Código <code>',
    description: 'Exibir código no texto',
    icon: '💻',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l8-1',
        type: 'info',
        instruction: 'Marcando código',
        explanation: '`<code>` é usado para marcar trechos de código no texto. Exibe em fonte monoespaçada.',
        xp: 5
      },
      {
        id: 'u3-l8-2',
        type: 'fill-blank',
        instruction: 'Marque como código:',
        codeTemplate: '<p>Use <{{blank1}}>console.log()</{{blank2}}> para debug.</p>',
        blanks: [
          { id: 'blank1', answer: 'code', placeholder: '____' },
          { id: 'blank2', answer: 'code', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u3-l8-3',
        type: 'info',
        instruction: '<code> + <pre>',
        explanation: 'Para blocos de código, combine: `<pre><code>seu código aqui</code></pre>`.',
        xp: 5
      },
      {
        id: 'u3-l8-4',
        type: 'multiple-choice',
        instruction: '<code> é usado para:',
        options: [
          { id: 'a', text: 'Citações', correct: false },
          { id: 'b', text: 'Trechos de código', correct: true },
          { id: 'c', text: 'Links', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u3-l9',
    title: 'Citações <blockquote>',
    description: 'Blocos de citação',
    icon: '💬',
    unlocked: true,
    unitId: 'unit-3',
    unitTitle: 'Texto e Conteúdo',
    exercises: [
      {
        id: 'u3-l9-1',
        type: 'info',
        instruction: 'Citações em bloco',
        explanation: '`<blockquote>` é usado para citações longas. O navegador geralmente adiciona recuo.',
        xp: 5
      },
      {
        id: 'u3-l9-2',
        type: 'fill-blank',
        instruction: 'Crie uma citação:',
        codeTemplate: '<{{blank1}}>\n  "A simplicidade é a sofisticação suprema."\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'blockquote', placeholder: '__________' },
          { id: 'blank2', answer: 'blockquote', placeholder: '__________' }
        ],
        xp: 10
      },
      {
        id: 'u3-l9-3',
        type: 'info',
        instruction: 'Atributo cite',
        explanation: 'Use o atributo `cite` para indicar a fonte: `<blockquote cite="url">`.',
        xp: 5
      },
      {
        id: 'u3-l9-4',
        type: 'multiple-choice',
        instruction: '<blockquote> é para:',
        options: [
          { id: 'a', text: 'Código', correct: false },
          { id: 'b', text: 'Citações longas', correct: true },
          { id: 'c', text: 'Listas', correct: false },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 4 — LINKS E NAVEGAÇÃO
// ============================================

const unit4Lessons: Lesson[] = [
  {
    id: 'u4-l1',
    title: 'Tag <a>',
    description: 'Criando links',
    icon: '🔗',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l1-1',
        type: 'info',
        instruction: 'A tag de âncora',
        explanation: 'Links são criados com `<a>` (âncora). O texto entre as tags é clicável.',
        xp: 5
      },
      {
        id: 'u4-l1-2',
        type: 'fill-blank',
        instruction: 'Crie um link:',
        codeTemplate: '<{{blank1}} href="https://google.com">Google</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'a', placeholder: '_' },
          { id: 'blank2', answer: 'a', placeholder: '_' }
        ],
        xp: 10
      },
      {
        id: 'u4-l1-3',
        type: 'multiple-choice',
        instruction: 'A tag para links é:',
        options: [
          { id: 'a', text: '<link>', correct: false },
          { id: 'b', text: '<a>', correct: true },
          { id: 'c', text: '<href>', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u4-l1-4',
        type: 'info',
        instruction: 'Conteúdo clicável',
        explanation: 'Você pode colocar texto ou até imagens dentro de `<a>` para torná-los clicáveis.',
        xp: 5
      }
    ]
  },
  {
    id: 'u4-l2',
    title: 'Atributo href',
    description: 'Definindo o destino',
    icon: '🎯',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l2-1',
        type: 'info',
        instruction: 'O atributo href',
        explanation: '`href` (Hypertext Reference) define para onde o link leva. Pode ser uma URL, arquivo ou seção da página.',
        xp: 5
      },
      {
        id: 'u4-l2-2',
        type: 'fill-blank',
        instruction: 'Adicione o atributo:',
        codeTemplate: '<a {{blank1}}="https://github.com">GitHub</a>',
        blanks: [{ id: 'blank1', answer: 'href', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u4-l2-3',
        type: 'multiple-choice',
        instruction: 'O que href significa?',
        options: [
          { id: 'a', text: 'Hypertext Reference', correct: true },
          { id: 'b', text: 'HTML Reference', correct: false },
          { id: 'c', text: 'Header Reference', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u4-l2-4',
        type: 'info',
        instruction: 'URL completa',
        explanation: 'Para sites externos, use URL completa: `https://www.exemplo.com`.',
        xp: 5
      }
    ]
  },
  {
    id: 'u4-l3',
    title: 'Links externos',
    description: 'Links para outros sites',
    icon: '🌍',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l3-1',
        type: 'info',
        instruction: 'Links externos',
        explanation: 'Links externos apontam para outros sites. Use a URL completa começando com `https://`.',
        xp: 5
      },
      {
        id: 'u4-l3-2',
        type: 'fill-blank',
        instruction: 'Link para site externo:',
        codeTemplate: '<a href="{{blank1}}://twitter.com">Twitter</a>',
        blanks: [{ id: 'blank1', answer: 'https', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u4-l3-3',
        type: 'multiple-choice',
        instruction: 'Links externos usam:',
        options: [
          { id: 'a', text: 'Caminho relativo', correct: false },
          { id: 'b', text: 'URL completa', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u4-l3-4',
        type: 'info',
        instruction: 'Protocolo seguro',
        explanation: 'Sempre prefira `https://` ao invés de `http://` para segurança.',
        xp: 5
      }
    ]
  },
  {
    id: 'u4-l4',
    title: 'Links internos',
    description: 'Links dentro do site',
    icon: '📁',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l4-1',
        type: 'info',
        instruction: 'Links internos',
        explanation: 'Links internos apontam para outras páginas do mesmo site. Use caminhos relativos.',
        xp: 5
      },
      {
        id: 'u4-l4-2',
        type: 'fill-blank',
        instruction: 'Link para página local:',
        codeTemplate: '<a href="{{blank1}}">Sobre</a>',
        blanks: [{ id: 'blank1', answer: 'sobre.html', placeholder: '_________' }],
        xp: 10
      },
      {
        id: 'u4-l4-3',
        type: 'info',
        instruction: 'Caminhos relativos',
        explanation: '`./` = pasta atual, `../` = pasta pai. Ex: `../contato.html` sobe um nível.',
        xp: 5
      },
      {
        id: 'u4-l4-4',
        type: 'multiple-choice',
        instruction: '../ significa:',
        options: [
          { id: 'a', text: 'Pasta atual', correct: false },
          { id: 'b', text: 'Pasta pai', correct: true },
          { id: 'c', text: 'Pasta raiz', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u4-l5',
    title: 'Âncoras',
    description: 'Links para seções da página',
    icon: '⚓',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l5-1',
        type: 'info',
        instruction: 'Links internos da página',
        explanation: 'Use `#id` para linkar a uma seção da mesma página. O elemento de destino precisa ter o `id` correspondente.',
        xp: 5
      },
      {
        id: 'u4-l5-2',
        type: 'fill-blank',
        instruction: 'Link para seção com id "contato":',
        codeTemplate: '<a href="{{blank1}}contato">Ir para Contato</a>',
        blanks: [{ id: 'blank1', answer: '#', placeholder: '_' }],
        xp: 10
      },
      {
        id: 'u4-l5-3',
        type: 'info',
        instruction: 'Destino da âncora',
        explanation: 'O elemento de destino deve ter `id`: `<section id="contato">Contato</section>`.',
        xp: 5
      },
      {
        id: 'u4-l5-4',
        type: 'multiple-choice',
        instruction: 'href="#topo" leva para:',
        options: [
          { id: 'a', text: 'Outro site', correct: false },
          { id: 'b', text: 'Elemento com id="topo"', correct: true },
          { id: 'c', text: 'Outra página', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u4-l6',
    title: 'Atributo target',
    description: 'Onde abrir o link',
    icon: '🎯',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l6-1',
        type: 'info',
        instruction: 'O atributo target',
        explanation: '`target` define onde o link abre. `_blank` abre em nova aba, `_self` na mesma (padrão).',
        xp: 5
      },
      {
        id: 'u4-l6-2',
        type: 'fill-blank',
        instruction: 'Abra em nova aba:',
        codeTemplate: '<a href="https://google.com" {{blank1}}="_blank">Google</a>',
        blanks: [{ id: 'blank1', answer: 'target', placeholder: '______' }],
        xp: 10
      },
      {
        id: 'u4-l6-3',
        type: 'multiple-choice',
        instruction: 'target="_blank" faz o quê?',
        options: [
          { id: 'a', text: 'Abre na mesma aba', correct: false },
          { id: 'b', text: 'Abre em nova aba', correct: true },
          { id: 'c', text: 'Fecha a aba', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u4-l6-4',
        type: 'info',
        instruction: 'Boas práticas',
        explanation: 'Use `_blank` com moderação. Muitos usuários preferem controlar onde links abrem.',
        xp: 5
      }
    ]
  },
  {
    id: 'u4-l7',
    title: 'Atributo rel',
    description: 'Relação do link',
    icon: '🔒',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l7-1',
        type: 'info',
        instruction: 'O atributo rel',
        explanation: '`rel` define a relação entre a página atual e o destino. Importante para segurança e SEO.',
        xp: 5
      },
      {
        id: 'u4-l7-2',
        type: 'info',
        instruction: 'noopener noreferrer',
        explanation: 'Com `target="_blank"`, use `rel="noopener noreferrer"` para segurança.',
        xp: 5
      },
      {
        id: 'u4-l7-3',
        type: 'fill-blank',
        instruction: 'Adicione segurança ao link:',
        codeTemplate: '<a href="..." target="_blank" {{blank1}}="noopener noreferrer">Link</a>',
        blanks: [{ id: 'blank1', answer: 'rel', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u4-l7-4',
        type: 'multiple-choice',
        instruction: 'rel="nofollow" é usado para:',
        options: [
          { id: 'a', text: 'Abrir nova aba', correct: false },
          { id: 'b', text: 'Indicar ao Google para não seguir', correct: true },
          { id: 'c', text: 'Segurança', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u4-l8',
    title: 'Links mailto',
    description: 'Links para email',
    icon: '📧',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l8-1',
        type: 'info',
        instruction: 'Links de email',
        explanation: 'Use `mailto:` para criar links que abrem o cliente de email do usuário.',
        xp: 5
      },
      {
        id: 'u4-l8-2',
        type: 'fill-blank',
        instruction: 'Crie link de email:',
        codeTemplate: '<a href="{{blank1}}:contato@site.com">Envie um email</a>',
        blanks: [{ id: 'blank1', answer: 'mailto', placeholder: '______' }],
        xp: 10
      },
      {
        id: 'u4-l8-3',
        type: 'info',
        instruction: 'Parâmetros opcionais',
        explanation: 'Adicione assunto: `mailto:email@site.com?subject=Olá`.',
        xp: 5
      },
      {
        id: 'u4-l8-4',
        type: 'multiple-choice',
        instruction: 'mailto: abre:',
        options: [
          { id: 'a', text: 'Nova aba', correct: false },
          { id: 'b', text: 'Cliente de email', correct: true },
          { id: 'c', text: 'Formulário', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u4-l9',
    title: 'Links tel',
    description: 'Links para telefone',
    icon: '📞',
    unlocked: true,
    unitId: 'unit-4',
    unitTitle: 'Links e Navegação',
    exercises: [
      {
        id: 'u4-l9-1',
        type: 'info',
        instruction: 'Links de telefone',
        explanation: 'Use `tel:` para criar links que iniciam chamadas em dispositivos móveis.',
        xp: 5
      },
      {
        id: 'u4-l9-2',
        type: 'fill-blank',
        instruction: 'Crie link de telefone:',
        codeTemplate: '<a href="{{blank1}}:+5511999999999">Ligar</a>',
        blanks: [{ id: 'blank1', answer: 'tel', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u4-l9-3',
        type: 'info',
        instruction: 'Formato internacional',
        explanation: 'Use formato internacional com código do país: `+55` para Brasil.',
        xp: 5
      },
      {
        id: 'u4-l9-4',
        type: 'multiple-choice',
        instruction: 'tel: é mais útil em:',
        options: [
          { id: 'a', text: 'Desktop', correct: false },
          { id: 'b', text: 'Dispositivos móveis', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 5 — IMAGENS E MÍDIA
// ============================================

const unit5Lessons: Lesson[] = [
  {
    id: 'u5-l1',
    title: 'Tag <img>',
    description: 'Inserindo imagens',
    icon: '🖼️',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l1-1',
        type: 'info',
        instruction: 'A tag de imagem',
        explanation: 'Imagens são inseridas com `<img>`. É uma tag **auto-fechante** (não tem `</img>`).',
        xp: 5
      },
      {
        id: 'u5-l1-2',
        type: 'fill-blank',
        instruction: 'Complete a tag:',
        codeTemplate: '<{{blank1}} src="foto.jpg" alt="Descrição">',
        blanks: [{ id: 'blank1', answer: 'img', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u5-l1-3',
        type: 'multiple-choice',
        instruction: '<img> precisa de fechamento?',
        options: [
          { id: 'a', text: 'Sim', correct: false },
          { id: 'b', text: 'Não', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u5-l1-4',
        type: 'info',
        instruction: 'Atributos essenciais',
        explanation: 'Toda imagem precisa de `src` (caminho) e `alt` (descrição).',
        xp: 5
      }
    ]
  },
  {
    id: 'u5-l2',
    title: 'Atributo src',
    description: 'Caminho da imagem',
    icon: '📍',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l2-1',
        type: 'info',
        instruction: 'O atributo src',
        explanation: '`src` (source) define o caminho ou URL da imagem. Pode ser relativo ou absoluto.',
        xp: 5
      },
      {
        id: 'u5-l2-2',
        type: 'fill-blank',
        instruction: 'Adicione o caminho:',
        codeTemplate: '<img {{blank1}}="images/logo.png" alt="Logo">',
        blanks: [{ id: 'blank1', answer: 'src', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u5-l2-3',
        type: 'info',
        instruction: 'Caminho absoluto',
        explanation: 'URLs completas funcionam: `src="https://site.com/imagem.jpg"`.',
        xp: 5
      },
      {
        id: 'u5-l2-4',
        type: 'multiple-choice',
        instruction: 'src significa:',
        options: [
          { id: 'a', text: 'Source', correct: true },
          { id: 'b', text: 'Script', correct: false },
          { id: 'c', text: 'Screen', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u5-l3',
    title: 'Atributo alt',
    description: 'Texto alternativo',
    icon: '📝',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l3-1',
        type: 'info',
        instruction: 'O atributo alt',
        explanation: '`alt` fornece texto alternativo se a imagem não carregar. **Essencial** para acessibilidade.',
        xp: 5
      },
      {
        id: 'u5-l3-2',
        type: 'fill-blank',
        instruction: 'Adicione descrição:',
        codeTemplate: '<img src="cachorro.jpg" {{blank1}}="Um cachorro correndo no parque">',
        blanks: [{ id: 'blank1', answer: 'alt', placeholder: '___' }],
        xp: 10
      },
      {
        id: 'u5-l3-3',
        type: 'info',
        instruction: 'Boas práticas',
        explanation: 'Descreva o conteúdo da imagem. Leitores de tela usam o alt para descrever a imagem.',
        xp: 5
      },
      {
        id: 'u5-l3-4',
        type: 'multiple-choice',
        instruction: 'alt é importante para:',
        options: [
          { id: 'a', text: 'Velocidade', correct: false },
          { id: 'b', text: 'Acessibilidade', correct: true },
          { id: 'c', text: 'Estilo', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u5-l4',
    title: 'Tamanho de imagens',
    description: 'width e height',
    icon: '📐',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l4-1',
        type: 'info',
        instruction: 'Definindo tamanho',
        explanation: 'Use `width` e `height` para definir dimensões em pixels. Ajuda o layout carregar corretamente.',
        xp: 5
      },
      {
        id: 'u5-l4-2',
        type: 'fill-blank',
        instruction: 'Defina largura de 300px:',
        codeTemplate: '<img src="foto.jpg" {{blank1}}="300" alt="Foto">',
        blanks: [{ id: 'blank1', answer: 'width', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u5-l4-3',
        type: 'info',
        instruction: 'Proporção',
        explanation: 'Defina apenas um (width ou height) para manter a proporção original.',
        xp: 5
      },
      {
        id: 'u5-l4-4',
        type: 'fill-blank',
        instruction: 'Defina altura de 200px:',
        codeTemplate: '<img src="foto.jpg" {{blank1}}="200" alt="Foto">',
        blanks: [{ id: 'blank1', answer: 'height', placeholder: '______' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u5-l5',
    title: 'Formatos de imagem',
    description: 'JPG, PNG, GIF, WebP, SVG',
    icon: '🎨',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l5-1',
        type: 'info',
        instruction: 'Formatos comuns',
        explanation: '**JPG**: fotos. **PNG**: transparência. **GIF**: animações simples. **WebP**: moderno, menor tamanho. **SVG**: vetores.',
        xp: 5
      },
      {
        id: 'u5-l5-2',
        type: 'multiple-choice',
        instruction: 'Qual formato suporta transparência?',
        options: [
          { id: 'a', text: 'JPG', correct: false },
          { id: 'b', text: 'PNG', correct: true },
          { id: 'c', text: 'GIF', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u5-l5-3',
        type: 'multiple-choice',
        instruction: 'Qual formato é melhor para fotos?',
        options: [
          { id: 'a', text: 'PNG', correct: false },
          { id: 'b', text: 'SVG', correct: false },
          { id: 'c', text: 'JPG', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u5-l5-4',
        type: 'info',
        instruction: 'WebP moderno',
        explanation: 'WebP combina qualidade de JPG com transparência de PNG e menor tamanho de arquivo.',
        xp: 5
      }
    ]
  },
  {
    id: 'u5-l6',
    title: '<figure>',
    description: 'Container para mídia',
    icon: '🖼️',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l6-1',
        type: 'info',
        instruction: 'Elemento figure',
        explanation: '`<figure>` é um container semântico para imagens, diagramas ou ilustrações com legendas.',
        xp: 5
      },
      {
        id: 'u5-l6-2',
        type: 'fill-blank',
        instruction: 'Crie um figure:',
        codeTemplate: '<{{blank1}}>\n  <img src="foto.jpg" alt="Foto">\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'figure', placeholder: '______' },
          { id: 'blank2', answer: 'figure', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u5-l6-3',
        type: 'multiple-choice',
        instruction: '<figure> é usado para:',
        options: [
          { id: 'a', text: 'Links', correct: false },
          { id: 'b', text: 'Imagens com legendas', correct: true },
          { id: 'c', text: 'Formulários', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u5-l6-4',
        type: 'info',
        instruction: 'Conteúdo autocontido',
        explanation: 'Use figure para conteúdo que pode ser movido sem afetar o fluxo do documento.',
        xp: 5
      }
    ]
  },
  {
    id: 'u5-l7',
    title: '<figcaption>',
    description: 'Legendas para figuras',
    icon: '📋',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l7-1',
        type: 'info',
        instruction: 'Legendas de figura',
        explanation: '`<figcaption>` adiciona uma legenda ao `<figure>`. Fica dentro do figure.',
        xp: 5
      },
      {
        id: 'u5-l7-2',
        type: 'fill-blank',
        instruction: 'Adicione legenda:',
        codeTemplate: '<figure>\n  <img src="foto.jpg" alt="Montanha">\n  <{{blank1}}>Vista das montanhas</{{blank2}}>\n</figure>',
        blanks: [
          { id: 'blank1', answer: 'figcaption', placeholder: '__________' },
          { id: 'blank2', answer: 'figcaption', placeholder: '__________' }
        ],
        xp: 10
      },
      {
        id: 'u5-l7-3',
        type: 'multiple-choice',
        instruction: '<figcaption> deve ficar:',
        options: [
          { id: 'a', text: 'Fora do figure', correct: false },
          { id: 'b', text: 'Dentro do figure', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u5-l7-4',
        type: 'info',
        instruction: 'Posição',
        explanation: 'figcaption pode ficar no início ou no final do figure.',
        xp: 5
      }
    ]
  },
  {
    id: 'u5-l8',
    title: '<audio>',
    description: 'Inserindo áudio',
    icon: '🔊',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l8-1',
        type: 'info',
        instruction: 'Tag de áudio',
        explanation: '`<audio>` incorpora arquivos de áudio. Use o atributo `controls` para mostrar controles de reprodução.',
        xp: 5
      },
      {
        id: 'u5-l8-2',
        type: 'fill-blank',
        instruction: 'Crie um player de áudio:',
        codeTemplate: '<{{blank1}} src="musica.mp3" controls></{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'audio', placeholder: '_____' },
          { id: 'blank2', answer: 'audio', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u5-l8-3',
        type: 'info',
        instruction: 'Atributos úteis',
        explanation: '`autoplay` toca automaticamente. `loop` repete. `muted` inicia mudo.',
        xp: 5
      },
      {
        id: 'u5-l8-4',
        type: 'multiple-choice',
        instruction: 'controls mostra:',
        options: [
          { id: 'a', text: 'Nada', correct: false },
          { id: 'b', text: 'Botões de play/pause', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u5-l9',
    title: '<video>',
    description: 'Inserindo vídeo',
    icon: '🎬',
    unlocked: true,
    unitId: 'unit-5',
    unitTitle: 'Imagens e Mídia',
    exercises: [
      {
        id: 'u5-l9-1',
        type: 'info',
        instruction: 'Tag de vídeo',
        explanation: '`<video>` incorpora arquivos de vídeo. Funciona similar ao audio, com `controls` e outros atributos.',
        xp: 5
      },
      {
        id: 'u5-l9-2',
        type: 'fill-blank',
        instruction: 'Crie um player de vídeo:',
        codeTemplate: '<{{blank1}} src="video.mp4" controls width="640"></{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'video', placeholder: '_____' },
          { id: 'blank2', answer: 'video', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u5-l9-3',
        type: 'info',
        instruction: 'Poster',
        explanation: 'Use `poster="imagem.jpg"` para mostrar uma imagem antes do vídeo começar.',
        xp: 5
      },
      {
        id: 'u5-l9-4',
        type: 'multiple-choice',
        instruction: 'poster define:',
        options: [
          { id: 'a', text: 'Velocidade', correct: false },
          { id: 'b', text: 'Imagem de prévia', correct: true },
          { id: 'c', text: 'Tamanho', correct: false },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 6 — LISTAS
// ============================================

const unit6Lessons: Lesson[] = [
  {
    id: 'u6-l1',
    title: 'Lista não ordenada <ul>',
    description: 'Listas com marcadores',
    icon: '•',
    unlocked: true,
    unitId: 'unit-6',
    unitTitle: 'Listas',
    exercises: [
      {
        id: 'u6-l1-1',
        type: 'info',
        instruction: 'Lista não ordenada',
        explanation: '`<ul>` (unordered list) cria listas com marcadores (•). A ordem não importa.',
        xp: 5
      },
      {
        id: 'u6-l1-2',
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
        id: 'u6-l1-3',
        type: 'multiple-choice',
        instruction: 'ul significa:',
        options: [
          { id: 'a', text: 'Ordered List', correct: false },
          { id: 'b', text: 'Unordered List', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u6-l1-4',
        type: 'info',
        instruction: 'Quando usar?',
        explanation: 'Use `<ul>` quando a ordem dos itens não importa: ingredientes, funcionalidades, etc.',
        xp: 5
      }
    ]
  },
  {
    id: 'u6-l2',
    title: 'Lista ordenada <ol>',
    description: 'Listas numeradas',
    icon: '1️⃣',
    unlocked: true,
    unitId: 'unit-6',
    unitTitle: 'Listas',
    exercises: [
      {
        id: 'u6-l2-1',
        type: 'info',
        instruction: 'Lista ordenada',
        explanation: '`<ol>` (ordered list) cria listas numeradas (1, 2, 3...). Use quando a ordem importa.',
        xp: 5
      },
      {
        id: 'u6-l2-2',
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
        id: 'u6-l2-3',
        type: 'multiple-choice',
        instruction: 'ol significa:',
        options: [
          { id: 'a', text: 'Ordered List', correct: true },
          { id: 'b', text: 'Outer List', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u6-l2-4',
        type: 'info',
        instruction: 'Quando usar?',
        explanation: 'Use `<ol>` para passos, rankings, instruções sequenciais.',
        xp: 5
      }
    ]
  },
  {
    id: 'u6-l3',
    title: 'Itens <li>',
    description: 'Itens de lista',
    icon: '📌',
    unlocked: true,
    unitId: 'unit-6',
    unitTitle: 'Listas',
    exercises: [
      {
        id: 'u6-l3-1',
        type: 'info',
        instruction: 'Item de lista',
        explanation: '`<li>` (list item) representa cada item dentro de `<ul>` ou `<ol>`.',
        xp: 5
      },
      {
        id: 'u6-l3-2',
        type: 'fill-blank',
        instruction: 'Adicione um item:',
        codeTemplate: '<ul>\n  <{{blank1}}>Maçã</{{blank2}}>\n  <li>Banana</li>\n</ul>',
        blanks: [
          { id: 'blank1', answer: 'li', placeholder: '__' },
          { id: 'blank2', answer: 'li', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u6-l3-3',
        type: 'multiple-choice',
        instruction: '<li> pode ficar fora de <ul> ou <ol>?',
        options: [
          { id: 'a', text: 'Sim', correct: false },
          { id: 'b', text: 'Não', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u6-l3-4',
        type: 'info',
        instruction: 'Conteúdo variado',
        explanation: 'Dentro de `<li>` você pode ter textos, links, imagens e até outras listas.',
        xp: 5
      }
    ]
  },
  {
    id: 'u6-l4',
    title: 'Listas aninhadas',
    description: 'Listas dentro de listas',
    icon: '📂',
    unlocked: true,
    unitId: 'unit-6',
    unitTitle: 'Listas',
    exercises: [
      {
        id: 'u6-l4-1',
        type: 'info',
        instruction: 'Aninhando listas',
        explanation: 'Você pode colocar uma lista dentro de outra, criando sublistas. A lista interna fica dentro de um `<li>`.',
        xp: 5
      },
      {
        id: 'u6-l4-2',
        type: 'info',
        instruction: 'Exemplo',
        explanation: '```html\n<ul>\n  <li>Frutas\n    <ul>\n      <li>Maçã</li>\n    </ul>\n  </li>\n</ul>\n```',
        xp: 5
      },
      {
        id: 'u6-l4-3',
        type: 'multiple-choice',
        instruction: 'A lista interna deve estar dentro de:',
        options: [
          { id: 'a', text: '<ul>', correct: false },
          { id: 'b', text: '<li>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u6-l4-4',
        type: 'info',
        instruction: 'Níveis',
        explanation: 'Você pode criar quantos níveis quiser, mas evite exageros para manter a legibilidade.',
        xp: 5
      }
    ]
  },
  {
    id: 'u6-l5',
    title: 'Lista de definição <dl>',
    description: 'Termos e definições',
    icon: '📖',
    unlocked: true,
    unitId: 'unit-6',
    unitTitle: 'Listas',
    exercises: [
      {
        id: 'u6-l5-1',
        type: 'info',
        instruction: 'Lista de definição',
        explanation: '`<dl>` (definition list) é usada para termos e suas definições, como um glossário.',
        xp: 5
      },
      {
        id: 'u6-l5-2',
        type: 'info',
        instruction: 'Estrutura',
        explanation: '`<dt>` = termo (definition term). `<dd>` = definição (definition description).',
        xp: 5
      },
      {
        id: 'u6-l5-3',
        type: 'fill-blank',
        instruction: 'Crie uma lista de definição:',
        codeTemplate: '<{{blank1}}>\n  <dt>HTML</dt>\n  <dd>Linguagem de marcação</dd>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'dl', placeholder: '__' },
          { id: 'blank2', answer: 'dl', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u6-l5-4',
        type: 'multiple-choice',
        instruction: '<dt> representa:',
        options: [
          { id: 'a', text: 'Definição', correct: false },
          { id: 'b', text: 'Termo', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 7 — TABELAS
// ============================================

const unit7Lessons: Lesson[] = [
  {
    id: 'u7-l1',
    title: 'Tag <table>',
    description: 'Criando tabelas',
    icon: '📊',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l1-1',
        type: 'info',
        instruction: 'Tabelas HTML',
        explanation: '`<table>` cria uma tabela. Tabelas organizam dados em linhas e colunas.',
        xp: 5
      },
      {
        id: 'u7-l1-2',
        type: 'fill-blank',
        instruction: 'Inicie uma tabela:',
        codeTemplate: '<{{blank1}}>\n  <!-- linhas aqui -->\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'table', placeholder: '_____' },
          { id: 'blank2', answer: 'table', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u7-l1-3',
        type: 'info',
        instruction: 'Quando usar tabelas',
        explanation: 'Use tabelas para **dados tabulares** (planilhas, estatísticas). Nunca para layout!',
        xp: 5
      },
      {
        id: 'u7-l1-4',
        type: 'multiple-choice',
        instruction: 'Tabelas são para:',
        options: [
          { id: 'a', text: 'Layout de página', correct: false },
          { id: 'b', text: 'Dados tabulares', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u7-l2',
    title: '<tr>',
    description: 'Linhas da tabela',
    icon: '➡️',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l2-1',
        type: 'info',
        instruction: 'Linhas de tabela',
        explanation: '`<tr>` (table row) cria uma linha na tabela. Células ficam dentro de cada linha.',
        xp: 5
      },
      {
        id: 'u7-l2-2',
        type: 'fill-blank',
        instruction: 'Adicione uma linha:',
        codeTemplate: '<table>\n  <{{blank1}}>\n    <td>Célula</td>\n  </{{blank2}}>\n</table>',
        blanks: [
          { id: 'blank1', answer: 'tr', placeholder: '__' },
          { id: 'blank2', answer: 'tr', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u7-l2-3',
        type: 'multiple-choice',
        instruction: 'tr significa:',
        options: [
          { id: 'a', text: 'Table Row', correct: true },
          { id: 'b', text: 'Table Rule', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u7-l2-4',
        type: 'info',
        instruction: 'Múltiplas linhas',
        explanation: 'Cada `<tr>` é uma linha horizontal. Use várias para criar mais linhas.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l3',
    title: '<td>',
    description: 'Células de dados',
    icon: '🔲',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l3-1',
        type: 'info',
        instruction: 'Células de dados',
        explanation: '`<td>` (table data) cria uma célula com dados. Fica dentro de `<tr>`.',
        xp: 5
      },
      {
        id: 'u7-l3-2',
        type: 'fill-blank',
        instruction: 'Adicione uma célula:',
        codeTemplate: '<tr>\n  <{{blank1}}>João</{{blank2}}>\n  <td>25</td>\n</tr>',
        blanks: [
          { id: 'blank1', answer: 'td', placeholder: '__' },
          { id: 'blank2', answer: 'td', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u7-l3-3',
        type: 'multiple-choice',
        instruction: 'td significa:',
        options: [
          { id: 'a', text: 'Table Data', correct: true },
          { id: 'b', text: 'Table Division', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u7-l3-4',
        type: 'info',
        instruction: 'Colunas',
        explanation: 'Cada `<td>` em uma linha representa uma coluna. Todas as linhas devem ter o mesmo número de células.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l4',
    title: '<th>',
    description: 'Células de cabeçalho',
    icon: '📋',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l4-1',
        type: 'info',
        instruction: 'Cabeçalho de tabela',
        explanation: '`<th>` (table header) cria uma célula de cabeçalho. Aparece em negrito e centralizada.',
        xp: 5
      },
      {
        id: 'u7-l4-2',
        type: 'fill-blank',
        instruction: 'Crie um cabeçalho:',
        codeTemplate: '<tr>\n  <{{blank1}}>Nome</{{blank2}}>\n  <th>Idade</th>\n</tr>',
        blanks: [
          { id: 'blank1', answer: 'th', placeholder: '__' },
          { id: 'blank2', answer: 'th', placeholder: '__' }
        ],
        xp: 10
      },
      {
        id: 'u7-l4-3',
        type: 'multiple-choice',
        instruction: '<th> é usado para:',
        options: [
          { id: 'a', text: 'Dados normais', correct: false },
          { id: 'b', text: 'Cabeçalhos', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u7-l4-4',
        type: 'info',
        instruction: 'Acessibilidade',
        explanation: '`<th>` melhora a acessibilidade, pois indica que a célula é um rótulo.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l5',
    title: '<thead>',
    description: 'Grupo de cabeçalho',
    icon: '⬆️',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l5-1',
        type: 'info',
        instruction: 'Agrupando cabeçalhos',
        explanation: '`<thead>` agrupa as linhas de cabeçalho. Melhora a semântica e facilita estilização.',
        xp: 5
      },
      {
        id: 'u7-l5-2',
        type: 'fill-blank',
        instruction: 'Agrupe o cabeçalho:',
        codeTemplate: '<table>\n  <{{blank1}}>\n    <tr><th>Nome</th></tr>\n  </{{blank2}}>\n</table>',
        blanks: [
          { id: 'blank1', answer: 'thead', placeholder: '_____' },
          { id: 'blank2', answer: 'thead', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u7-l5-3',
        type: 'multiple-choice',
        instruction: '<thead> deve vir:',
        options: [
          { id: 'a', text: 'Antes de <tbody>', correct: true },
          { id: 'b', text: 'Depois de <tbody>', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u7-l5-4',
        type: 'info',
        instruction: 'Impressão',
        explanation: 'Em tabelas longas, thead pode ser repetido no topo de cada página impressa.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l6',
    title: '<tbody>',
    description: 'Corpo da tabela',
    icon: '📄',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l6-1',
        type: 'info',
        instruction: 'Corpo da tabela',
        explanation: '`<tbody>` agrupa as linhas de dados principais da tabela.',
        xp: 5
      },
      {
        id: 'u7-l6-2',
        type: 'fill-blank',
        instruction: 'Agrupe os dados:',
        codeTemplate: '<table>\n  <thead>...</thead>\n  <{{blank1}}>\n    <tr><td>Dado</td></tr>\n  </{{blank2}}>\n</table>',
        blanks: [
          { id: 'blank1', answer: 'tbody', placeholder: '_____' },
          { id: 'blank2', answer: 'tbody', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u7-l6-3',
        type: 'multiple-choice',
        instruction: '<tbody> contém:',
        options: [
          { id: 'a', text: 'Cabeçalhos', correct: false },
          { id: 'b', text: 'Dados principais', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u7-l6-4',
        type: 'info',
        instruction: 'Opcional mas recomendado',
        explanation: 'O navegador adiciona tbody automaticamente, mas é boa prática declarar explicitamente.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l7',
    title: '<tfoot>',
    description: 'Rodapé da tabela',
    icon: '⬇️',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l7-1',
        type: 'info',
        instruction: 'Rodapé da tabela',
        explanation: '`<tfoot>` agrupa linhas de rodapé, como totais ou resumos.',
        xp: 5
      },
      {
        id: 'u7-l7-2',
        type: 'fill-blank',
        instruction: 'Adicione um rodapé:',
        codeTemplate: '<table>\n  <tbody>...</tbody>\n  <{{blank1}}>\n    <tr><td>Total: 100</td></tr>\n  </{{blank2}}>\n</table>',
        blanks: [
          { id: 'blank1', answer: 'tfoot', placeholder: '_____' },
          { id: 'blank2', answer: 'tfoot', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u7-l7-3',
        type: 'multiple-choice',
        instruction: '<tfoot> é usado para:',
        options: [
          { id: 'a', text: 'Títulos', correct: false },
          { id: 'b', text: 'Totais e resumos', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u7-l7-4',
        type: 'info',
        instruction: 'Posição no código',
        explanation: 'Embora apareça no final, tfoot pode ser declarado antes de tbody no código.',
        xp: 5
      }
    ]
  },
  {
    id: 'u7-l8',
    title: 'colspan e rowspan',
    description: 'Mesclando células',
    icon: '🔀',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l8-1',
        type: 'info',
        instruction: 'Mesclando células',
        explanation: '`colspan` mescla colunas horizontalmente. `rowspan` mescla linhas verticalmente.',
        xp: 5
      },
      {
        id: 'u7-l8-2',
        type: 'fill-blank',
        instruction: 'Mescle 2 colunas:',
        codeTemplate: '<td {{blank1}}="2">Ocupa 2 colunas</td>',
        blanks: [{ id: 'blank1', answer: 'colspan', placeholder: '_______' }],
        xp: 10
      },
      {
        id: 'u7-l8-3',
        type: 'fill-blank',
        instruction: 'Mescle 3 linhas:',
        codeTemplate: '<td {{blank1}}="3">Ocupa 3 linhas</td>',
        blanks: [{ id: 'blank1', answer: 'rowspan', placeholder: '_______' }],
        xp: 10
      },
      {
        id: 'u7-l8-4',
        type: 'multiple-choice',
        instruction: 'colspan mescla:',
        options: [
          { id: 'a', text: 'Linhas', correct: false },
          { id: 'b', text: 'Colunas', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u7-l9',
    title: '<caption>',
    description: 'Título da tabela',
    icon: '🏷️',
    unlocked: true,
    unitId: 'unit-7',
    unitTitle: 'Tabelas',
    exercises: [
      {
        id: 'u7-l9-1',
        type: 'info',
        instruction: 'Legenda da tabela',
        explanation: '`<caption>` adiciona um título à tabela. Deve ser o primeiro elemento dentro de `<table>`.',
        xp: 5
      },
      {
        id: 'u7-l9-2',
        type: 'fill-blank',
        instruction: 'Adicione um título:',
        codeTemplate: '<table>\n  <{{blank1}}>Vendas 2024</{{blank2}}>\n  <thead>...</thead>\n</table>',
        blanks: [
          { id: 'blank1', answer: 'caption', placeholder: '_______' },
          { id: 'blank2', answer: 'caption', placeholder: '_______' }
        ],
        xp: 10
      },
      {
        id: 'u7-l9-3',
        type: 'multiple-choice',
        instruction: '<caption> deve ser:',
        options: [
          { id: 'a', text: 'Último elemento', correct: false },
          { id: 'b', text: 'Primeiro elemento', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u7-l9-4',
        type: 'info',
        instruction: 'Acessibilidade',
        explanation: 'caption ajuda leitores de tela a entender o propósito da tabela.',
        xp: 5
      }
    ]
  }
];

// ============================================
// UNIDADE 8 — FORMULÁRIOS
// ============================================

const unit8Lessons: Lesson[] = [
  {
    id: 'u8-l1',
    title: 'Tag <form>',
    description: 'Criando formulários',
    icon: '📝',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l1-1',
        type: 'info',
        instruction: 'Formulários HTML',
        explanation: '`<form>` cria um formulário para coletar dados do usuário. Campos vão dentro dele.',
        xp: 5
      },
      {
        id: 'u8-l1-2',
        type: 'fill-blank',
        instruction: 'Crie um formulário:',
        codeTemplate: '<{{blank1}}>\n  <!-- campos aqui -->\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'form', placeholder: '____' },
          { id: 'blank2', answer: 'form', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u8-l1-3',
        type: 'info',
        instruction: 'Envio de dados',
        explanation: 'Quando o formulário é enviado, os dados são mandados para um servidor processar.',
        xp: 5
      },
      {
        id: 'u8-l1-4',
        type: 'multiple-choice',
        instruction: '<form> é usado para:',
        options: [
          { id: 'a', text: 'Exibir tabelas', correct: false },
          { id: 'b', text: 'Coletar dados', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l2',
    title: 'action',
    description: 'Destino do formulário',
    icon: '🎯',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l2-1',
        type: 'info',
        instruction: 'Atributo action',
        explanation: '`action` define a URL para onde os dados serão enviados quando o form for submetido.',
        xp: 5
      },
      {
        id: 'u8-l2-2',
        type: 'fill-blank',
        instruction: 'Defina o destino:',
        codeTemplate: '<form {{blank1}}="/processar">',
        blanks: [{ id: 'blank1', answer: 'action', placeholder: '______' }],
        xp: 10
      },
      {
        id: 'u8-l2-3',
        type: 'info',
        instruction: 'Sem action',
        explanation: 'Se omitido, o formulário é enviado para a mesma página.',
        xp: 5
      },
      {
        id: 'u8-l2-4',
        type: 'multiple-choice',
        instruction: 'action define:',
        options: [
          { id: 'a', text: 'O estilo do form', correct: false },
          { id: 'b', text: 'Para onde os dados vão', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l3',
    title: 'method',
    description: 'Como enviar dados',
    icon: '📤',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l3-1',
        type: 'info',
        instruction: 'Atributo method',
        explanation: '`method` define como os dados são enviados. **GET** na URL, **POST** no corpo da requisição.',
        xp: 5
      },
      {
        id: 'u8-l3-2',
        type: 'fill-blank',
        instruction: 'Use POST para enviar:',
        codeTemplate: '<form action="/login" {{blank1}}="POST">',
        blanks: [{ id: 'blank1', answer: 'method', placeholder: '______' }],
        xp: 10
      },
      {
        id: 'u8-l3-3',
        type: 'multiple-choice',
        instruction: 'Para senhas, use:',
        options: [
          { id: 'a', text: 'GET', correct: false },
          { id: 'b', text: 'POST', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u8-l3-4',
        type: 'info',
        instruction: 'Quando usar cada um',
        explanation: 'GET para buscas (dados na URL). POST para login, cadastros (dados ocultos).',
        xp: 5
      }
    ]
  },
  {
    id: 'u8-l4',
    title: '<input type="text">',
    description: 'Campo de texto',
    icon: '✏️',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l4-1',
        type: 'info',
        instruction: 'Campo de texto',
        explanation: '`<input type="text">` cria um campo para texto simples de uma linha.',
        xp: 5
      },
      {
        id: 'u8-l4-2',
        type: 'fill-blank',
        instruction: 'Crie um campo de texto:',
        codeTemplate: '<input {{blank1}}="text" name="nome">',
        blanks: [{ id: 'blank1', answer: 'type', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u8-l4-3',
        type: 'info',
        instruction: 'Auto-fechante',
        explanation: '`<input>` é auto-fechante, não precisa de tag de fechamento.',
        xp: 5
      },
      {
        id: 'u8-l4-4',
        type: 'multiple-choice',
        instruction: 'type="text" é para:',
        options: [
          { id: 'a', text: 'Senhas', correct: false },
          { id: 'b', text: 'Texto simples', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l5',
    title: '<input type="email">',
    description: 'Campo de email',
    icon: '📧',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l5-1',
        type: 'info',
        instruction: 'Campo de email',
        explanation: '`type="email"` valida automaticamente se o texto é um email válido.',
        xp: 5
      },
      {
        id: 'u8-l5-2',
        type: 'fill-blank',
        instruction: 'Crie campo de email:',
        codeTemplate: '<input type="{{blank1}}" name="email">',
        blanks: [{ id: 'blank1', answer: 'email', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u8-l5-3',
        type: 'info',
        instruction: 'Vantagens',
        explanation: 'Em celulares, mostra teclado com @ e .com. Valida formato automaticamente.',
        xp: 5
      },
      {
        id: 'u8-l5-4',
        type: 'multiple-choice',
        instruction: 'type="email" faz validação:',
        options: [
          { id: 'a', text: 'Manual', correct: false },
          { id: 'b', text: 'Automática', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l6',
    title: '<input type="password">',
    description: 'Campo de senha',
    icon: '🔒',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l6-1',
        type: 'info',
        instruction: 'Campo de senha',
        explanation: '`type="password"` oculta os caracteres digitados, mostrando apenas pontos.',
        xp: 5
      },
      {
        id: 'u8-l6-2',
        type: 'fill-blank',
        instruction: 'Crie campo de senha:',
        codeTemplate: '<input type="{{blank1}}" name="senha">',
        blanks: [{ id: 'blank1', answer: 'password', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u8-l6-3',
        type: 'info',
        instruction: 'Segurança',
        explanation: 'O campo só oculta visualmente. Use HTTPS e POST para segurança real.',
        xp: 5
      },
      {
        id: 'u8-l6-4',
        type: 'multiple-choice',
        instruction: 'type="password" exibe:',
        options: [
          { id: 'a', text: 'Texto claro', correct: false },
          { id: 'b', text: 'Pontos/asteriscos', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l7',
    title: '<input type="checkbox">',
    description: 'Caixa de seleção',
    icon: '☑️',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l7-1',
        type: 'info',
        instruction: 'Checkbox',
        explanation: '`type="checkbox"` cria uma caixa que pode ser marcada ou desmarcada.',
        xp: 5
      },
      {
        id: 'u8-l7-2',
        type: 'fill-blank',
        instruction: 'Crie um checkbox:',
        codeTemplate: '<input type="{{blank1}}" name="aceito"> Li os termos',
        blanks: [{ id: 'blank1', answer: 'checkbox', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u8-l7-3',
        type: 'info',
        instruction: 'Múltiplas opções',
        explanation: 'Checkboxes permitem selecionar várias opções ao mesmo tempo.',
        xp: 5
      },
      {
        id: 'u8-l7-4',
        type: 'multiple-choice',
        instruction: 'Checkbox permite:',
        options: [
          { id: 'a', text: 'Apenas uma escolha', correct: false },
          { id: 'b', text: 'Múltiplas escolhas', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l8',
    title: '<input type="radio">',
    description: 'Botões de opção',
    icon: '🔘',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l8-1',
        type: 'info',
        instruction: 'Radio buttons',
        explanation: '`type="radio"` cria botões onde apenas uma opção pode ser selecionada por grupo.',
        xp: 5
      },
      {
        id: 'u8-l8-2',
        type: 'fill-blank',
        instruction: 'Crie um radio:',
        codeTemplate: '<input type="{{blank1}}" name="genero" value="m"> Masculino',
        blanks: [{ id: 'blank1', answer: 'radio', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u8-l8-3',
        type: 'info',
        instruction: 'Agrupamento',
        explanation: 'Radios com o mesmo `name` formam um grupo exclusivo.',
        xp: 5
      },
      {
        id: 'u8-l8-4',
        type: 'multiple-choice',
        instruction: 'Radio permite:',
        options: [
          { id: 'a', text: 'Apenas uma escolha', correct: true },
          { id: 'b', text: 'Múltiplas escolhas', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l9',
    title: '<textarea>',
    description: 'Área de texto',
    icon: '📄',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l9-1',
        type: 'info',
        instruction: 'Área de texto',
        explanation: '`<textarea>` cria uma área para texto longo com múltiplas linhas.',
        xp: 5
      },
      {
        id: 'u8-l9-2',
        type: 'fill-blank',
        instruction: 'Crie uma área de texto:',
        codeTemplate: '<{{blank1}} name="mensagem"></{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'textarea', placeholder: '________' },
          { id: 'blank2', answer: 'textarea', placeholder: '________' }
        ],
        xp: 10
      },
      {
        id: 'u8-l9-3',
        type: 'info',
        instruction: 'rows e cols',
        explanation: 'Use `rows` e `cols` para definir o tamanho visível.',
        xp: 5
      },
      {
        id: 'u8-l9-4',
        type: 'multiple-choice',
        instruction: '<textarea> precisa de fechamento?',
        options: [
          { id: 'a', text: 'Sim', correct: true },
          { id: 'b', text: 'Não', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l10',
    title: '<select>',
    description: 'Lista suspensa',
    icon: '📋',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l10-1',
        type: 'info',
        instruction: 'Lista suspensa',
        explanation: '`<select>` cria uma lista dropdown. Opções ficam dentro com `<option>`.',
        xp: 5
      },
      {
        id: 'u8-l10-2',
        type: 'fill-blank',
        instruction: 'Crie um select:',
        codeTemplate: '<{{blank1}} name="pais">\n  <option>Brasil</option>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'select', placeholder: '______' },
          { id: 'blank2', answer: 'select', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u8-l10-3',
        type: 'info',
        instruction: 'Múltipla seleção',
        explanation: 'Adicione `multiple` para permitir várias escolhas.',
        xp: 5
      },
      {
        id: 'u8-l10-4',
        type: 'multiple-choice',
        instruction: '<select> cria:',
        options: [
          { id: 'a', text: 'Campo de texto', correct: false },
          { id: 'b', text: 'Lista dropdown', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l11',
    title: '<option>',
    description: 'Opções do select',
    icon: '📌',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l11-1',
        type: 'info',
        instruction: 'Opções',
        explanation: '`<option>` define cada opção dentro de `<select>`. O atributo `value` é o que é enviado.',
        xp: 5
      },
      {
        id: 'u8-l11-2',
        type: 'fill-blank',
        instruction: 'Crie uma opção:',
        codeTemplate: '<select>\n  <{{blank1}} value="br">Brasil</{{blank2}}>\n</select>',
        blanks: [
          { id: 'blank1', answer: 'option', placeholder: '______' },
          { id: 'blank2', answer: 'option', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u8-l11-3',
        type: 'info',
        instruction: 'selected',
        explanation: 'Use `selected` para pré-selecionar uma opção.',
        xp: 5
      },
      {
        id: 'u8-l11-4',
        type: 'multiple-choice',
        instruction: 'O que é enviado ao servidor?',
        options: [
          { id: 'a', text: 'O texto visível', correct: false },
          { id: 'b', text: 'O value', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l12',
    title: '<button>',
    description: 'Botões de ação',
    icon: '🔘',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l12-1',
        type: 'info',
        instruction: 'Botões',
        explanation: '`<button>` cria um botão clicável. Por padrão, type="submit" envia o formulário.',
        xp: 5
      },
      {
        id: 'u8-l12-2',
        type: 'fill-blank',
        instruction: 'Crie um botão:',
        codeTemplate: '<{{blank1}}>Enviar</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'button', placeholder: '______' },
          { id: 'blank2', answer: 'button', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u8-l12-3',
        type: 'info',
        instruction: 'Tipos de botão',
        explanation: '`type="submit"` envia. `type="reset"` limpa. `type="button"` ação JavaScript.',
        xp: 5
      },
      {
        id: 'u8-l12-4',
        type: 'multiple-choice',
        instruction: 'type="submit" faz o quê?',
        options: [
          { id: 'a', text: 'Limpa o formulário', correct: false },
          { id: 'b', text: 'Envia o formulário', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l13',
    title: 'required',
    description: 'Campo obrigatório',
    icon: '⚠️',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l13-1',
        type: 'info',
        instruction: 'Campos obrigatórios',
        explanation: 'O atributo `required` torna o campo obrigatório. O formulário não envia se estiver vazio.',
        xp: 5
      },
      {
        id: 'u8-l13-2',
        type: 'fill-blank',
        instruction: 'Torne o campo obrigatório:',
        codeTemplate: '<input type="email" {{blank1}}>',
        blanks: [{ id: 'blank1', answer: 'required', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u8-l13-3',
        type: 'info',
        instruction: 'Validação nativa',
        explanation: 'O navegador mostra mensagem de erro automaticamente se campo required estiver vazio.',
        xp: 5
      },
      {
        id: 'u8-l13-4',
        type: 'multiple-choice',
        instruction: 'required é um atributo:',
        options: [
          { id: 'a', text: 'Com valor', correct: false },
          { id: 'b', text: 'Booleano (sem valor)', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l14',
    title: 'placeholder',
    description: 'Texto de dica',
    icon: '💭',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l14-1',
        type: 'info',
        instruction: 'Placeholder',
        explanation: '`placeholder` mostra um texto de dica dentro do campo, que desaparece quando você digita.',
        xp: 5
      },
      {
        id: 'u8-l14-2',
        type: 'fill-blank',
        instruction: 'Adicione uma dica:',
        codeTemplate: '<input type="text" {{blank1}}="Digite seu nome">',
        blanks: [{ id: 'blank1', answer: 'placeholder', placeholder: '___________' }],
        xp: 10
      },
      {
        id: 'u8-l14-3',
        type: 'info',
        instruction: 'Não substitui label',
        explanation: 'Placeholder é uma dica, não um rótulo. Sempre use `<label>` também.',
        xp: 5
      },
      {
        id: 'u8-l14-4',
        type: 'multiple-choice',
        instruction: 'Placeholder some quando:',
        options: [
          { id: 'a', text: 'A página carrega', correct: false },
          { id: 'b', text: 'Você digita', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u8-l15',
    title: 'name',
    description: 'Nome do campo',
    icon: '🏷️',
    unlocked: true,
    unitId: 'unit-8',
    unitTitle: 'Formulários',
    exercises: [
      {
        id: 'u8-l15-1',
        type: 'info',
        instruction: 'Atributo name',
        explanation: '`name` identifica o campo quando os dados são enviados. É a chave no par chave=valor.',
        xp: 5
      },
      {
        id: 'u8-l15-2',
        type: 'fill-blank',
        instruction: 'Nomeie o campo:',
        codeTemplate: '<input type="text" {{blank1}}="usuario">',
        blanks: [{ id: 'blank1', answer: 'name', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u8-l15-3',
        type: 'info',
        instruction: 'Essencial',
        explanation: 'Sem `name`, o campo não é incluído quando o formulário é enviado.',
        xp: 5
      },
      {
        id: 'u8-l15-4',
        type: 'multiple-choice',
        instruction: 'Campo sem name:',
        options: [
          { id: 'a', text: 'É enviado normalmente', correct: false },
          { id: 'b', text: 'Não é enviado', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 9 — HTML SEMÂNTICO
// ============================================

const unit9Lessons: Lesson[] = [
  {
    id: 'u9-l1',
    title: 'O que é HTML semântico',
    description: 'Significado no código',
    icon: '🎯',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l1-1',
        type: 'info',
        instruction: 'HTML Semântico',
        explanation: 'HTML semântico usa tags que descrevem o **significado** do conteúdo, não apenas a aparência.',
        xp: 5
      },
      {
        id: 'u9-l1-2',
        type: 'info',
        instruction: 'Por que importa?',
        explanation: 'Melhora acessibilidade, SEO e manutenção do código. Leitores de tela entendem melhor.',
        xp: 5
      },
      {
        id: 'u9-l1-3',
        type: 'multiple-choice',
        instruction: 'Qual é mais semântico?',
        options: [
          { id: 'a', text: '<div class="nav">', correct: false },
          { id: 'b', text: '<nav>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u9-l1-4',
        type: 'multiple-choice',
        instruction: 'HTML semântico ajuda:',
        options: [
          { id: 'a', text: 'Apenas desenvolvedores', correct: false },
          { id: 'b', text: 'Todos: devs, usuários, buscadores', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l2',
    title: '<header>',
    description: 'Cabeçalho da página',
    icon: '🔝',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l2-1',
        type: 'info',
        instruction: 'Elemento header',
        explanation: '`<header>` representa o cabeçalho de uma página ou seção. Geralmente contém logo, título e navegação.',
        xp: 5
      },
      {
        id: 'u9-l2-2',
        type: 'fill-blank',
        instruction: 'Crie um header:',
        codeTemplate: '<{{blank1}}>\n  <h1>Meu Site</h1>\n  <nav>...</nav>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'header', placeholder: '______' },
          { id: 'blank2', answer: 'header', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u9-l2-3',
        type: 'multiple-choice',
        instruction: '<header> é para:',
        options: [
          { id: 'a', text: 'Rodapé', correct: false },
          { id: 'b', text: 'Cabeçalho', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u9-l2-4',
        type: 'info',
        instruction: 'Múltiplos headers',
        explanation: 'Você pode ter vários headers: um para a página e outros para seções/artigos.',
        xp: 5
      }
    ]
  },
  {
    id: 'u9-l3',
    title: '<nav>',
    description: 'Navegação principal',
    icon: '🧭',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l3-1',
        type: 'info',
        instruction: 'Elemento nav',
        explanation: '`<nav>` representa uma seção de navegação com links para outras páginas ou partes do site.',
        xp: 5
      },
      {
        id: 'u9-l3-2',
        type: 'fill-blank',
        instruction: 'Crie navegação:',
        codeTemplate: '<{{blank1}}>\n  <a href="/">Home</a>\n  <a href="/sobre">Sobre</a>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'nav', placeholder: '___' },
          { id: 'blank2', answer: 'nav', placeholder: '___' }
        ],
        xp: 10
      },
      {
        id: 'u9-l3-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Use para navegação principal. Nem todo grupo de links precisa de `<nav>`.',
        xp: 5
      },
      {
        id: 'u9-l3-4',
        type: 'multiple-choice',
        instruction: '<nav> é ideal para:',
        options: [
          { id: 'a', text: 'Links de rodapé simples', correct: false },
          { id: 'b', text: 'Menu principal', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l4',
    title: '<main>',
    description: 'Conteúdo principal',
    icon: '📌',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l4-1',
        type: 'info',
        instruction: 'Elemento main',
        explanation: '`<main>` contém o conteúdo principal da página. Deve haver apenas **um** por página.',
        xp: 5
      },
      {
        id: 'u9-l4-2',
        type: 'fill-blank',
        instruction: 'Crie o main:',
        codeTemplate: '<{{blank1}}>\n  <h1>Bem-vindo</h1>\n  <p>Conteúdo principal aqui.</p>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'main', placeholder: '____' },
          { id: 'blank2', answer: 'main', placeholder: '____' }
        ],
        xp: 10
      },
      {
        id: 'u9-l4-3',
        type: 'multiple-choice',
        instruction: 'Quantos <main> por página?',
        options: [
          { id: 'a', text: 'Quantos quiser', correct: false },
          { id: 'b', text: 'Apenas um', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u9-l4-4',
        type: 'info',
        instruction: 'O que não vai no main',
        explanation: 'Não inclua header, footer ou nav principais dentro de `<main>`.',
        xp: 5
      }
    ]
  },
  {
    id: 'u9-l5',
    title: '<section>',
    description: 'Seções temáticas',
    icon: '📑',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l5-1',
        type: 'info',
        instruction: 'Elemento section',
        explanation: '`<section>` representa uma seção temática de conteúdo. Geralmente tem seu próprio título.',
        xp: 5
      },
      {
        id: 'u9-l5-2',
        type: 'fill-blank',
        instruction: 'Crie uma seção:',
        codeTemplate: '<{{blank1}}>\n  <h2>Nossos Serviços</h2>\n  <p>...</p>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'section', placeholder: '_______' },
          { id: 'blank2', answer: 'section', placeholder: '_______' }
        ],
        xp: 10
      },
      {
        id: 'u9-l5-3',
        type: 'info',
        instruction: 'Regra do título',
        explanation: 'Se a seção não tem título, talvez `<div>` seja mais apropriado.',
        xp: 5
      },
      {
        id: 'u9-l5-4',
        type: 'multiple-choice',
        instruction: '<section> agrupa:',
        options: [
          { id: 'a', text: 'Qualquer conteúdo', correct: false },
          { id: 'b', text: 'Conteúdo tematicamente relacionado', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l6',
    title: '<article>',
    description: 'Conteúdo independente',
    icon: '📰',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l6-1',
        type: 'info',
        instruction: 'Elemento article',
        explanation: '`<article>` representa conteúdo **autocontido** que faz sentido sozinho: post, notícia, comentário.',
        xp: 5
      },
      {
        id: 'u9-l6-2',
        type: 'fill-blank',
        instruction: 'Crie um artigo:',
        codeTemplate: '<{{blank1}}>\n  <h2>Título do Post</h2>\n  <p>Conteúdo do post...</p>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'article', placeholder: '_______' },
          { id: 'blank2', answer: 'article', placeholder: '_______' }
        ],
        xp: 10
      },
      {
        id: 'u9-l6-3',
        type: 'info',
        instruction: 'Teste do article',
        explanation: 'Pergunte: "Este conteúdo faria sentido se publicado separadamente?" Se sim, use article.',
        xp: 5
      },
      {
        id: 'u9-l6-4',
        type: 'multiple-choice',
        instruction: '<article> é para conteúdo:',
        options: [
          { id: 'a', text: 'Que depende do contexto', correct: false },
          { id: 'b', text: 'Independente e autocontido', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l7',
    title: '<aside>',
    description: 'Conteúdo relacionado',
    icon: '📎',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l7-1',
        type: 'info',
        instruction: 'Elemento aside',
        explanation: '`<aside>` contém conteúdo relacionado mas separado: sidebars, caixas de destaque, anúncios.',
        xp: 5
      },
      {
        id: 'u9-l7-2',
        type: 'fill-blank',
        instruction: 'Crie um aside:',
        codeTemplate: '<{{blank1}}>\n  <h3>Posts Relacionados</h3>\n  <ul>...</ul>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'aside', placeholder: '_____' },
          { id: 'blank2', answer: 'aside', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u9-l7-3',
        type: 'info',
        instruction: 'Posição visual',
        explanation: 'Aside não significa "ao lado" visualmente. É sobre o papel semântico do conteúdo.',
        xp: 5
      },
      {
        id: 'u9-l7-4',
        type: 'multiple-choice',
        instruction: '<aside> é ideal para:',
        options: [
          { id: 'a', text: 'Conteúdo principal', correct: false },
          { id: 'b', text: 'Sidebar ou informações extras', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l8',
    title: '<footer>',
    description: 'Rodapé',
    icon: '⬇️',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l8-1',
        type: 'info',
        instruction: 'Elemento footer',
        explanation: '`<footer>` representa o rodapé de uma página ou seção. Contém copyright, links, contato.',
        xp: 5
      },
      {
        id: 'u9-l8-2',
        type: 'fill-blank',
        instruction: 'Crie um footer:',
        codeTemplate: '<{{blank1}}>\n  <p>&copy; 2024 Meu Site</p>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'footer', placeholder: '______' },
          { id: 'blank2', answer: 'footer', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u9-l8-3',
        type: 'info',
        instruction: 'Múltiplos footers',
        explanation: 'Como header, você pode ter footers em diferentes seções ou artigos.',
        xp: 5
      },
      {
        id: 'u9-l8-4',
        type: 'multiple-choice',
        instruction: '<footer> geralmente contém:',
        options: [
          { id: 'a', text: 'Navegação principal', correct: false },
          { id: 'b', text: 'Copyright e links de contato', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u9-l9',
    title: 'Quando usar div',
    description: 'O papel da div genérica',
    icon: '📦',
    unlocked: true,
    unitId: 'unit-9',
    unitTitle: 'HTML Semântico',
    exercises: [
      {
        id: 'u9-l9-1',
        type: 'info',
        instruction: 'A tag div',
        explanation: '`<div>` é um container genérico sem significado semântico. Use quando nenhuma tag semântica se aplica.',
        xp: 5
      },
      {
        id: 'u9-l9-2',
        type: 'info',
        instruction: 'Quando usar div',
        explanation: 'Use para agrupamento puramente visual ou estrutural, sem significado de conteúdo.',
        xp: 5
      },
      {
        id: 'u9-l9-3',
        type: 'multiple-choice',
        instruction: 'Para uma sidebar, prefira:',
        options: [
          { id: 'a', text: '<div class="sidebar">', correct: false },
          { id: 'b', text: '<aside>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u9-l9-4',
        type: 'multiple-choice',
        instruction: 'div é:',
        options: [
          { id: 'a', text: 'Semântica', correct: false },
          { id: 'b', text: 'Genérica', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 10 — ATRIBUTOS GLOBAIS
// ============================================

const unit10Lessons: Lesson[] = [
  {
    id: 'u10-l1',
    title: 'id',
    description: 'Identificador único',
    icon: '🆔',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l1-1',
        type: 'info',
        instruction: 'O atributo id',
        explanation: '`id` é um identificador **único** na página. Cada id só pode aparecer uma vez.',
        xp: 5
      },
      {
        id: 'u10-l1-2',
        type: 'fill-blank',
        instruction: 'Adicione um id:',
        codeTemplate: '<div {{blank1}}="cabecalho">Meu Header</div>',
        blanks: [{ id: 'blank1', answer: 'id', placeholder: '__' }],
        xp: 10
      },
      {
        id: 'u10-l1-3',
        type: 'info',
        instruction: 'Usos do id',
        explanation: 'Para CSS (#id), JavaScript (getElementById), e âncoras (#id nos links).',
        xp: 5
      },
      {
        id: 'u10-l1-4',
        type: 'multiple-choice',
        instruction: 'Cada id deve ser:',
        options: [
          { id: 'a', text: 'Repetido quando necessário', correct: false },
          { id: 'b', text: 'Único na página', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l2',
    title: 'class',
    description: 'Classes de estilo',
    icon: '🎨',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l2-1',
        type: 'info',
        instruction: 'O atributo class',
        explanation: '`class` define uma ou mais classes CSS. Diferente de id, classes podem ser repetidas.',
        xp: 5
      },
      {
        id: 'u10-l2-2',
        type: 'fill-blank',
        instruction: 'Adicione uma classe:',
        codeTemplate: '<button {{blank1}}="btn-primary">Clique</button>',
        blanks: [{ id: 'blank1', answer: 'class', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u10-l2-3',
        type: 'info',
        instruction: 'Múltiplas classes',
        explanation: 'Separe classes com espaços: `class="btn btn-large active"`.',
        xp: 5
      },
      {
        id: 'u10-l2-4',
        type: 'multiple-choice',
        instruction: 'Classes podem ser:',
        options: [
          { id: 'a', text: 'Apenas uma por elemento', correct: false },
          { id: 'b', text: 'Múltiplas por elemento', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l3',
    title: 'style',
    description: 'CSS inline',
    icon: '✨',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l3-1',
        type: 'info',
        instruction: 'O atributo style',
        explanation: '`style` aplica CSS diretamente no elemento. Útil para estilos únicos e rápidos.',
        xp: 5
      },
      {
        id: 'u10-l3-2',
        type: 'fill-blank',
        instruction: 'Adicione estilo inline:',
        codeTemplate: '<p {{blank1}}="color: red;">Texto vermelho</p>',
        blanks: [{ id: 'blank1', answer: 'style', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u10-l3-3',
        type: 'info',
        instruction: 'Evite quando possível',
        explanation: 'CSS externo ou interno é preferível para manutenção. Use style apenas para casos específicos.',
        xp: 5
      },
      {
        id: 'u10-l3-4',
        type: 'multiple-choice',
        instruction: 'Para projetos grandes, prefira:',
        options: [
          { id: 'a', text: 'style inline', correct: false },
          { id: 'b', text: 'CSS externo', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l4',
    title: 'title',
    description: 'Dica ao passar o mouse',
    icon: '💬',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l4-1',
        type: 'info',
        instruction: 'O atributo title',
        explanation: '`title` mostra uma tooltip quando o usuário passa o mouse sobre o elemento.',
        xp: 5
      },
      {
        id: 'u10-l4-2',
        type: 'fill-blank',
        instruction: 'Adicione uma dica:',
        codeTemplate: '<abbr {{blank1}}="HyperText Markup Language">HTML</abbr>',
        blanks: [{ id: 'blank1', answer: 'title', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u10-l4-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Ótimo para abreviações, dicas extras, ou explicar ícones.',
        xp: 5
      },
      {
        id: 'u10-l4-4',
        type: 'multiple-choice',
        instruction: 'title aparece ao:',
        options: [
          { id: 'a', text: 'Clicar', correct: false },
          { id: 'b', text: 'Passar o mouse', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l5',
    title: 'lang',
    description: 'Idioma do conteúdo',
    icon: '🌍',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l5-1',
        type: 'info',
        instruction: 'O atributo lang',
        explanation: '`lang` define o idioma do conteúdo. Importante para acessibilidade e SEO.',
        xp: 5
      },
      {
        id: 'u10-l5-2',
        type: 'fill-blank',
        instruction: 'Defina português brasileiro:',
        codeTemplate: '<html {{blank1}}="pt-BR">',
        blanks: [{ id: 'blank1', answer: 'lang', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u10-l5-3',
        type: 'info',
        instruction: 'Códigos de idioma',
        explanation: 'pt-BR = português Brasil. en-US = inglês EUA. es = espanhol.',
        xp: 5
      },
      {
        id: 'u10-l5-4',
        type: 'multiple-choice',
        instruction: 'lang ajuda:',
        options: [
          { id: 'a', text: 'Apenas o estilo', correct: false },
          { id: 'b', text: 'Leitores de tela e buscadores', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l6',
    title: 'data-*',
    description: 'Dados personalizados',
    icon: '📊',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l6-1',
        type: 'info',
        instruction: 'Atributos data',
        explanation: '`data-*` permite armazenar dados personalizados nos elementos. Útil para JavaScript.',
        xp: 5
      },
      {
        id: 'u10-l6-2',
        type: 'fill-blank',
        instruction: 'Adicione um dado personalizado:',
        codeTemplate: '<div {{blank1}}-produto-id="123">Produto</div>',
        blanks: [{ id: 'blank1', answer: 'data', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u10-l6-3',
        type: 'info',
        instruction: 'Acessando com JS',
        explanation: 'Use `element.dataset.produtoId` para acessar `data-produto-id`.',
        xp: 5
      },
      {
        id: 'u10-l6-4',
        type: 'multiple-choice',
        instruction: 'data-* é válido para:',
        options: [
          { id: 'a', text: 'Apenas alguns elementos', correct: false },
          { id: 'b', text: 'Qualquer elemento', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l7',
    title: 'hidden',
    description: 'Ocultar elementos',
    icon: '👁️',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l7-1',
        type: 'info',
        instruction: 'O atributo hidden',
        explanation: '`hidden` oculta o elemento da página. Ele ainda existe no código, mas não é exibido.',
        xp: 5
      },
      {
        id: 'u10-l7-2',
        type: 'fill-blank',
        instruction: 'Oculte o elemento:',
        codeTemplate: '<div {{blank1}}>Conteúdo oculto</div>',
        blanks: [{ id: 'blank1', answer: 'hidden', placeholder: '______' }],
        xp: 10
      },
      {
        id: 'u10-l7-3',
        type: 'info',
        instruction: 'Com JavaScript',
        explanation: 'JavaScript pode remover ou adicionar hidden para mostrar/esconder dinamicamente.',
        xp: 5
      },
      {
        id: 'u10-l7-4',
        type: 'multiple-choice',
        instruction: 'Elemento com hidden:',
        options: [
          { id: 'a', text: 'É removido do DOM', correct: false },
          { id: 'b', text: 'Existe mas não aparece', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u10-l8',
    title: 'tabindex',
    description: 'Ordem de tabulação',
    icon: '⌨️',
    unlocked: true,
    unitId: 'unit-10',
    unitTitle: 'Atributos Globais',
    exercises: [
      {
        id: 'u10-l8-1',
        type: 'info',
        instruction: 'O atributo tabindex',
        explanation: '`tabindex` controla se e em que ordem o elemento recebe foco ao pressionar Tab.',
        xp: 5
      },
      {
        id: 'u10-l8-2',
        type: 'info',
        instruction: 'Valores',
        explanation: '`tabindex="0"` = ordem natural. `tabindex="-1"` = focável por JS. Números positivos = ordem específica.',
        xp: 5
      },
      {
        id: 'u10-l8-3',
        type: 'fill-blank',
        instruction: 'Torne focável via Tab:',
        codeTemplate: '<div {{blank1}}="0">Clique ou Tab</div>',
        blanks: [{ id: 'blank1', answer: 'tabindex', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u10-l8-4',
        type: 'multiple-choice',
        instruction: 'tabindex é importante para:',
        options: [
          { id: 'a', text: 'Estilo', correct: false },
          { id: 'b', text: 'Acessibilidade via teclado', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 11 — ACESSIBILIDADE
// ============================================

const unit11Lessons: Lesson[] = [
  {
    id: 'u11-l1',
    title: 'O que é acessibilidade',
    description: 'Web para todos',
    icon: '♿',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l1-1',
        type: 'info',
        instruction: 'Acessibilidade web',
        explanation: 'Acessibilidade (a11y) significa criar sites que qualquer pessoa pode usar, incluindo pessoas com deficiências.',
        xp: 5
      },
      {
        id: 'u11-l1-2',
        type: 'info',
        instruction: 'Por que importa',
        explanation: '15% da população mundial tem alguma deficiência. Sites acessíveis beneficiam a todos.',
        xp: 5
      },
      {
        id: 'u11-l1-3',
        type: 'multiple-choice',
        instruction: 'Acessibilidade beneficia:',
        options: [
          { id: 'a', text: 'Apenas pessoas com deficiência', correct: false },
          { id: 'b', text: 'Todos os usuários', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u11-l1-4',
        type: 'info',
        instruction: 'Ferramentas',
        explanation: 'Leitores de tela, ampliadores, navegação por teclado são usados por milhões.',
        xp: 5
      }
    ]
  },
  {
    id: 'u11-l2',
    title: 'Uso correto de alt',
    description: 'Descrevendo imagens',
    icon: '🖼️',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l2-1',
        type: 'info',
        instruction: 'Alt em imagens',
        explanation: 'O atributo `alt` é lido por leitores de tela. Descreva o conteúdo e função da imagem.',
        xp: 5
      },
      {
        id: 'u11-l2-2',
        type: 'info',
        instruction: 'Boas descrições',
        explanation: 'Seja conciso e preciso. "Logo da empresa XYZ" é melhor que "logo" ou "imagem".',
        xp: 5
      },
      {
        id: 'u11-l2-3',
        type: 'multiple-choice',
        instruction: 'Para imagem decorativa, use:',
        options: [
          { id: 'a', text: 'alt=""', correct: true },
          { id: 'b', text: 'Não colocar alt', correct: false },
        ],
        xp: 10
      },
      {
        id: 'u11-l2-4',
        type: 'fill-blank',
        instruction: 'Descreva a imagem:',
        codeTemplate: '<img src="cachorro.jpg" {{blank1}}="Cachorro golden retriever brincando no parque">',
        blanks: [{ id: 'blank1', answer: 'alt', placeholder: '___' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u11-l3',
    title: '<label> e formulários',
    description: 'Rótulos acessíveis',
    icon: '🏷️',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l3-1',
        type: 'info',
        instruction: 'A tag label',
        explanation: '`<label>` associa texto a um campo de formulário. Essencial para leitores de tela.',
        xp: 5
      },
      {
        id: 'u11-l3-2',
        type: 'fill-blank',
        instruction: 'Associe label ao input:',
        codeTemplate: '<{{blank1}} for="email">Email:</{{blank2}}>\n<input id="email" type="email">',
        blanks: [
          { id: 'blank1', answer: 'label', placeholder: '_____' },
          { id: 'blank2', answer: 'label', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u11-l3-3',
        type: 'info',
        instruction: 'Benefícios',
        explanation: 'Clicar no label foca o campo. Leitores de tela anunciam corretamente.',
        xp: 5
      },
      {
        id: 'u11-l3-4',
        type: 'multiple-choice',
        instruction: 'for do label deve corresponder a:',
        options: [
          { id: 'a', text: 'class do input', correct: false },
          { id: 'b', text: 'id do input', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u11-l4',
    title: 'Ordem de tabulação',
    description: 'Navegação por teclado',
    icon: '⌨️',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l4-1',
        type: 'info',
        instruction: 'Navegação por teclado',
        explanation: 'Muitos usuários navegam com Tab. A ordem deve fazer sentido lógico.',
        xp: 5
      },
      {
        id: 'u11-l4-2',
        type: 'info',
        instruction: 'Ordem natural',
        explanation: 'Por padrão, a ordem segue o código HTML. Mantenha uma estrutura lógica.',
        xp: 5
      },
      {
        id: 'u11-l4-3',
        type: 'multiple-choice',
        instruction: 'tabindex positivo alto é:',
        options: [
          { id: 'a', text: 'Recomendado', correct: false },
          { id: 'b', text: 'Geralmente evitado', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u11-l4-4',
        type: 'info',
        instruction: 'Elementos focáveis',
        explanation: 'Links, botões e campos são focáveis por padrão. Use tabindex para outros.',
        xp: 5
      }
    ]
  },
  {
    id: 'u11-l5',
    title: 'Introdução a ARIA',
    description: 'Atributos de acessibilidade',
    icon: '🔊',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l5-1',
        type: 'info',
        instruction: 'O que é ARIA?',
        explanation: 'ARIA (Accessible Rich Internet Applications) são atributos que melhoram a acessibilidade de conteúdo dinâmico.',
        xp: 5
      },
      {
        id: 'u11-l5-2',
        type: 'info',
        instruction: 'Primeira regra',
        explanation: 'Use HTML semântico primeiro. ARIA só quando não há elemento HTML nativo adequado.',
        xp: 5
      },
      {
        id: 'u11-l5-3',
        type: 'multiple-choice',
        instruction: 'ARIA deve ser usado:',
        options: [
          { id: 'a', text: 'Em todos os elementos', correct: false },
          { id: 'b', text: 'Quando HTML nativo não basta', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u11-l5-4',
        type: 'info',
        instruction: 'Tipos de ARIA',
        explanation: 'Roles, states e properties. Ex: role="button", aria-expanded="true".',
        xp: 5
      }
    ]
  },
  {
    id: 'u11-l6',
    title: 'aria-label',
    description: 'Rótulos invisíveis',
    icon: '🏷️',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l6-1',
        type: 'info',
        instruction: 'aria-label',
        explanation: '`aria-label` fornece um rótulo acessível quando não há texto visível.',
        xp: 5
      },
      {
        id: 'u11-l6-2',
        type: 'fill-blank',
        instruction: 'Rotule o botão de ícone:',
        codeTemplate: '<button {{blank1}}="Fechar menu">✕</button>',
        blanks: [{ id: 'blank1', answer: 'aria-label', placeholder: '__________' }],
        xp: 10
      },
      {
        id: 'u11-l6-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Botões com apenas ícones, campos sem label visível, links genéricos.',
        xp: 5
      },
      {
        id: 'u11-l6-4',
        type: 'multiple-choice',
        instruction: 'aria-label é anunciado por:',
        options: [
          { id: 'a', text: 'Navegadores visuais', correct: false },
          { id: 'b', text: 'Leitores de tela', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u11-l7',
    title: 'aria-hidden',
    description: 'Ocultando de leitores de tela',
    icon: '🙈',
    unlocked: true,
    unitId: 'unit-11',
    unitTitle: 'Acessibilidade',
    exercises: [
      {
        id: 'u11-l7-1',
        type: 'info',
        instruction: 'aria-hidden',
        explanation: '`aria-hidden="true"` esconde o elemento de tecnologias assistivas, mas mantém visível.',
        xp: 5
      },
      {
        id: 'u11-l7-2',
        type: 'fill-blank',
        instruction: 'Esconda o ícone decorativo:',
        codeTemplate: '<span {{blank1}}="true">🎨</span>',
        blanks: [{ id: 'blank1', answer: 'aria-hidden', placeholder: '___________' }],
        xp: 10
      },
      {
        id: 'u11-l7-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Ícones decorativos, elementos redundantes, conteúdo puramente visual.',
        xp: 5
      },
      {
        id: 'u11-l7-4',
        type: 'multiple-choice',
        instruction: 'aria-hidden="true" torna invisível para:',
        options: [
          { id: 'a', text: 'Usuários visuais', correct: false },
          { id: 'b', text: 'Leitores de tela', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 12 — SEO COM HTML
// ============================================

const unit12Lessons: Lesson[] = [
  {
    id: 'u12-l1',
    title: 'Títulos hierárquicos',
    description: 'Estrutura para buscadores',
    icon: '📊',
    unlocked: true,
    unitId: 'unit-12',
    unitTitle: 'SEO com HTML',
    exercises: [
      {
        id: 'u12-l1-1',
        type: 'info',
        instruction: 'Hierarquia de títulos',
        explanation: 'Buscadores usam h1-h6 para entender a estrutura. Use apenas um h1, depois h2, h3 em ordem.',
        xp: 5
      },
      {
        id: 'u12-l1-2',
        type: 'info',
        instruction: 'O h1 principal',
        explanation: 'O h1 deve conter a palavra-chave principal e descrever o conteúdo da página.',
        xp: 5
      },
      {
        id: 'u12-l1-3',
        type: 'multiple-choice',
        instruction: 'Quantos h1 por página?',
        options: [
          { id: 'a', text: 'Quantos quiser', correct: false },
          { id: 'b', text: 'Apenas um', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u12-l1-4',
        type: 'multiple-choice',
        instruction: 'Qual ordem está correta?',
        options: [
          { id: 'a', text: 'h1, h3, h2, h4', correct: false },
          { id: 'b', text: 'h1, h2, h3, h4', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u12-l2',
    title: 'Estrutura semântica',
    description: 'HTML que buscadores entendem',
    icon: '🏗️',
    unlocked: true,
    unitId: 'unit-12',
    unitTitle: 'SEO com HTML',
    exercises: [
      {
        id: 'u12-l2-1',
        type: 'info',
        instruction: 'Semântica e SEO',
        explanation: 'Tags semânticas (header, main, article) ajudam buscadores a entender a estrutura do conteúdo.',
        xp: 5
      },
      {
        id: 'u12-l2-2',
        type: 'info',
        instruction: 'Destaque o conteúdo',
        explanation: 'Use article para conteúdo principal que você quer indexar. main indica o foco da página.',
        xp: 5
      },
      {
        id: 'u12-l2-3',
        type: 'multiple-choice',
        instruction: 'Buscadores preferem:',
        options: [
          { id: 'a', text: 'Muitas divs genéricas', correct: false },
          { id: 'b', text: 'Tags semânticas', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u12-l2-4',
        type: 'info',
        instruction: 'Rich snippets',
        explanation: 'Estrutura semântica pode melhorar como sua página aparece nos resultados de busca.',
        xp: 5
      }
    ]
  },
  {
    id: 'u12-l3',
    title: 'Meta description',
    description: 'Descrição nos resultados',
    icon: '📝',
    unlocked: true,
    unitId: 'unit-12',
    unitTitle: 'SEO com HTML',
    exercises: [
      {
        id: 'u12-l3-1',
        type: 'info',
        instruction: 'Meta description',
        explanation: 'A meta description aparece nos resultados de busca abaixo do título. Deve ser atraente e ter até 160 caracteres.',
        xp: 5
      },
      {
        id: 'u12-l3-2',
        type: 'fill-blank',
        instruction: 'Crie uma meta description:',
        codeTemplate: '<meta name="{{blank1}}" content="Aprenda HTML do zero...">',
        blanks: [{ id: 'blank1', answer: 'description', placeholder: '___________' }],
        xp: 10
      },
      {
        id: 'u12-l3-3',
        type: 'info',
        instruction: 'Dicas',
        explanation: 'Inclua palavras-chave naturalmente. Faça uma chamada para ação. Seja específico.',
        xp: 5
      },
      {
        id: 'u12-l3-4',
        type: 'multiple-choice',
        instruction: 'Meta description deve ter:',
        options: [
          { id: 'a', text: 'Até 500 caracteres', correct: false },
          { id: 'b', text: 'Até 160 caracteres', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u12-l4',
    title: 'Links internos',
    description: 'Conectando páginas',
    icon: '🔗',
    unlocked: true,
    unitId: 'unit-12',
    unitTitle: 'SEO com HTML',
    exercises: [
      {
        id: 'u12-l4-1',
        type: 'info',
        instruction: 'Links internos',
        explanation: 'Links entre páginas do seu site ajudam buscadores a descobrir e indexar conteúdo.',
        xp: 5
      },
      {
        id: 'u12-l4-2',
        type: 'info',
        instruction: 'Texto âncora',
        explanation: 'Use texto descritivo nos links. "Leia sobre SEO" é melhor que "clique aqui".',
        xp: 5
      },
      {
        id: 'u12-l4-3',
        type: 'multiple-choice',
        instruction: 'Qual texto âncora é melhor?',
        options: [
          { id: 'a', text: 'Clique aqui', correct: false },
          { id: 'b', text: 'Guia completo de HTML', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u12-l4-4',
        type: 'info',
        instruction: 'Navegação clara',
        explanation: 'Uma boa estrutura de links internos distribui "autoridade" entre suas páginas.',
        xp: 5
      }
    ]
  },
  {
    id: 'u12-l5',
    title: 'Imagens com alt',
    description: 'SEO para imagens',
    icon: '🖼️',
    unlocked: true,
    unitId: 'unit-12',
    unitTitle: 'SEO com HTML',
    exercises: [
      {
        id: 'u12-l5-1',
        type: 'info',
        instruction: 'Alt e SEO',
        explanation: 'O atributo alt ajuda buscadores a entender o conteúdo da imagem. Pode aparecer em buscas de imagens.',
        xp: 5
      },
      {
        id: 'u12-l5-2',
        type: 'info',
        instruction: 'Boas práticas',
        explanation: 'Descreva o conteúdo. Inclua palavras-chave quando natural. Evite encher de keywords.',
        xp: 5
      },
      {
        id: 'u12-l5-3',
        type: 'multiple-choice',
        instruction: 'Para SEO, alt deve ser:',
        options: [
          { id: 'a', text: 'Cheio de palavras-chave', correct: false },
          { id: 'b', text: 'Descritivo e natural', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u12-l5-4',
        type: 'fill-blank',
        instruction: 'Alt otimizado:',
        codeTemplate: '<img src="bolo.jpg" {{blank1}}="Bolo de chocolate decorado para festa de aniversário">',
        blanks: [{ id: 'blank1', answer: 'alt', placeholder: '___' }],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 13 — INTEGRAÇÃO COM CSS E JS
// ============================================

const unit13Lessons: Lesson[] = [
  {
    id: 'u13-l1',
    title: '<link>',
    description: 'Conectando CSS externo',
    icon: '🔗',
    unlocked: true,
    unitId: 'unit-13',
    unitTitle: 'Integração com CSS e JS',
    exercises: [
      {
        id: 'u13-l1-1',
        type: 'info',
        instruction: 'CSS externo',
        explanation: '`<link>` conecta arquivos CSS externos. Vai dentro do `<head>`.',
        xp: 5
      },
      {
        id: 'u13-l1-2',
        type: 'fill-blank',
        instruction: 'Conecte um arquivo CSS:',
        codeTemplate: '<{{blank1}} rel="stylesheet" href="estilos.css">',
        blanks: [{ id: 'blank1', answer: 'link', placeholder: '____' }],
        xp: 10
      },
      {
        id: 'u13-l1-3',
        type: 'info',
        instruction: 'Atributos essenciais',
        explanation: '`rel="stylesheet"` indica que é CSS. `href` é o caminho do arquivo.',
        xp: 5
      },
      {
        id: 'u13-l1-4',
        type: 'fill-blank',
        instruction: 'Complete o link:',
        codeTemplate: '<link {{blank1}}="stylesheet" href="style.css">',
        blanks: [{ id: 'blank1', answer: 'rel', placeholder: '___' }],
        xp: 10
      }
    ]
  },
  {
    id: 'u13-l2',
    title: '<style>',
    description: 'CSS interno',
    icon: '🎨',
    unlocked: true,
    unitId: 'unit-13',
    unitTitle: 'Integração com CSS e JS',
    exercises: [
      {
        id: 'u13-l2-1',
        type: 'info',
        instruction: 'CSS interno',
        explanation: '`<style>` permite escrever CSS diretamente no HTML, dentro do `<head>`.',
        xp: 5
      },
      {
        id: 'u13-l2-2',
        type: 'fill-blank',
        instruction: 'Crie um bloco de estilos:',
        codeTemplate: '<{{blank1}}>\n  body { background: blue; }\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'style', placeholder: '_____' },
          { id: 'blank2', answer: 'style', placeholder: '_____' }
        ],
        xp: 10
      },
      {
        id: 'u13-l2-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Para estilos específicos de uma página ou protótipos rápidos. Prefira CSS externo para projetos.',
        xp: 5
      },
      {
        id: 'u13-l2-4',
        type: 'multiple-choice',
        instruction: '<style> deve ficar no:',
        options: [
          { id: 'a', text: '<body>', correct: false },
          { id: 'b', text: '<head>', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u13-l3',
    title: '<script>',
    description: 'Adicionando JavaScript',
    icon: '📜',
    unlocked: true,
    unitId: 'unit-13',
    unitTitle: 'Integração com CSS e JS',
    exercises: [
      {
        id: 'u13-l3-1',
        type: 'info',
        instruction: 'JavaScript com script',
        explanation: '`<script>` adiciona JavaScript. Pode ser código inline ou arquivo externo.',
        xp: 5
      },
      {
        id: 'u13-l3-2',
        type: 'fill-blank',
        instruction: 'Conecte um arquivo JS:',
        codeTemplate: '<{{blank1}} src="app.js"></{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'script', placeholder: '______' },
          { id: 'blank2', answer: 'script', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u13-l3-3',
        type: 'info',
        instruction: 'Posição',
        explanation: 'Coloque scripts antes do `</body>` ou use defer/async no head.',
        xp: 5
      },
      {
        id: 'u13-l3-4',
        type: 'multiple-choice',
        instruction: '<script> precisa de fechamento?',
        options: [
          { id: 'a', text: 'Sim', correct: true },
          { id: 'b', text: 'Não', correct: false },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u13-l4',
    title: 'defer',
    description: 'Carregamento adiado',
    icon: '⏳',
    unlocked: true,
    unitId: 'unit-13',
    unitTitle: 'Integração com CSS e JS',
    exercises: [
      {
        id: 'u13-l4-1',
        type: 'info',
        instruction: 'O atributo defer',
        explanation: '`defer` faz o script baixar em paralelo e executar após o HTML ser completamente parseado.',
        xp: 5
      },
      {
        id: 'u13-l4-2',
        type: 'fill-blank',
        instruction: 'Adicione defer:',
        codeTemplate: '<script src="app.js" {{blank1}}></script>',
        blanks: [{ id: 'blank1', answer: 'defer', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u13-l4-3',
        type: 'info',
        instruction: 'Benefícios',
        explanation: 'Não bloqueia a renderização. Scripts executam na ordem do HTML. Ideal para a maioria dos casos.',
        xp: 5
      },
      {
        id: 'u13-l4-4',
        type: 'multiple-choice',
        instruction: 'defer executa após:',
        options: [
          { id: 'a', text: 'Baixar o arquivo', correct: false },
          { id: 'b', text: 'Parsear todo o HTML', correct: true },
        ],
        xp: 10
      }
    ]
  },
  {
    id: 'u13-l5',
    title: 'async',
    description: 'Carregamento assíncrono',
    icon: '⚡',
    unlocked: true,
    unitId: 'unit-13',
    unitTitle: 'Integração com CSS e JS',
    exercises: [
      {
        id: 'u13-l5-1',
        type: 'info',
        instruction: 'O atributo async',
        explanation: '`async` baixa em paralelo e executa **imediatamente** após baixar, sem esperar o HTML.',
        xp: 5
      },
      {
        id: 'u13-l5-2',
        type: 'fill-blank',
        instruction: 'Adicione async:',
        codeTemplate: '<script src="analytics.js" {{blank1}}></script>',
        blanks: [{ id: 'blank1', answer: 'async', placeholder: '_____' }],
        xp: 10
      },
      {
        id: 'u13-l5-3',
        type: 'info',
        instruction: 'Quando usar',
        explanation: 'Scripts independentes como analytics, ads. Não garante ordem de execução.',
        xp: 5
      },
      {
        id: 'u13-l5-4',
        type: 'multiple-choice',
        instruction: 'async é ideal para:',
        options: [
          { id: 'a', text: 'Scripts que dependem de outros', correct: false },
          { id: 'b', text: 'Scripts independentes', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// UNIDADE 14 — BOAS PRÁTICAS
// ============================================

const unit14Lessons: Lesson[] = [
  {
    id: 'u14-l1',
    title: 'Código limpo',
    description: 'HTML organizado',
    icon: '✨',
    unlocked: true,
    unitId: 'unit-14',
    unitTitle: 'Boas Práticas',
    exercises: [
      {
        id: 'u14-l1-1',
        type: 'info',
        instruction: 'Código limpo',
        explanation: 'HTML limpo é fácil de ler, manter e colaborar. Use indentação consistente e nomes claros.',
        xp: 5
      },
      {
        id: 'u14-l1-2',
        type: 'info',
        instruction: 'Boas práticas',
        explanation: 'Feche todas as tags. Use minúsculas. Aspas duplas em atributos. Indente corretamente.',
        xp: 5
      },
      {
        id: 'u14-l1-3',
        type: 'multiple-choice',
        instruction: 'Qual está mais limpo?',
        options: [
          { id: 'a', text: '<DIV CLASS=box><P>texto</DIV>', correct: false },
          { id: 'b', text: '<div class="box">\\n  <p>texto</p>\\n</div>', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u14-l1-4',
        type: 'info',
        instruction: 'Consistência',
        explanation: 'Siga um padrão em todo o projeto. Use ferramentas como Prettier para formatar.',
        xp: 5
      }
    ]
  },
  {
    id: 'u14-l2',
    title: 'Comentários úteis',
    description: 'Documentando o código',
    icon: '💬',
    unlocked: true,
    unitId: 'unit-14',
    unitTitle: 'Boas Práticas',
    exercises: [
      {
        id: 'u14-l2-1',
        type: 'info',
        instruction: 'Comentários úteis',
        explanation: 'Comente o porquê, não o quê. Bom: "<!-- Banner para campanha de Natal -->". Ruim: "<!-- div -->".',
        xp: 5
      },
      {
        id: 'u14-l2-2',
        type: 'info',
        instruction: 'Não exagere',
        explanation: 'Código autoexplicativo não precisa de comentário. Use para seções grandes ou lógica complexa.',
        xp: 5
      },
      {
        id: 'u14-l2-3',
        type: 'multiple-choice',
        instruction: 'Qual comentário é mais útil?',
        options: [
          { id: 'a', text: '<!-- parágrafo -->', correct: false },
          { id: 'b', text: '<!-- Formulário de contato - requer validação JS -->', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u14-l2-4',
        type: 'info',
        instruction: 'Comentários de seção',
        explanation: 'Use para marcar início/fim de seções grandes: `<!-- HEADER -->` ... `<!-- /HEADER -->`.',
        xp: 5
      }
    ]
  },
  {
    id: 'u14-l3',
    title: 'Validação HTML',
    description: 'Verificando erros',
    icon: '✅',
    unlocked: true,
    unitId: 'unit-14',
    unitTitle: 'Boas Práticas',
    exercises: [
      {
        id: 'u14-l3-1',
        type: 'info',
        instruction: 'Validação',
        explanation: 'Validadores verificam se seu HTML segue os padrões. Erros podem causar problemas de renderização.',
        xp: 5
      },
      {
        id: 'u14-l3-2',
        type: 'info',
        instruction: 'Ferramenta W3C',
        explanation: 'O validador oficial é validator.w3.org. Cole seu código e veja os erros.',
        xp: 5
      },
      {
        id: 'u14-l3-3',
        type: 'multiple-choice',
        instruction: 'Validar HTML ajuda a:',
        options: [
          { id: 'a', text: 'Deixar mais bonito', correct: false },
          { id: 'b', text: 'Encontrar erros e melhorar compatibilidade', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u14-l3-4',
        type: 'info',
        instruction: 'Erros comuns',
        explanation: 'Tags não fechadas, atributos duplicados, elementos em posição errada.',
        xp: 5
      }
    ]
  },
  {
    id: 'u14-l4',
    title: 'Performance básica',
    description: 'Sites mais rápidos',
    icon: '🚀',
    unlocked: true,
    unitId: 'unit-14',
    unitTitle: 'Boas Práticas',
    exercises: [
      {
        id: 'u14-l4-1',
        type: 'info',
        instruction: 'Performance',
        explanation: 'HTML leve carrega mais rápido. Evite código desnecessário e otimize recursos.',
        xp: 5
      },
      {
        id: 'u14-l4-2',
        type: 'info',
        instruction: 'Dicas de HTML',
        explanation: 'Use defer/async em scripts. Especifique width/height em imagens. Minimize HTML.',
        xp: 5
      },
      {
        id: 'u14-l4-3',
        type: 'multiple-choice',
        instruction: 'Especificar dimensões de imagem:',
        options: [
          { id: 'a', text: 'Não faz diferença', correct: false },
          { id: 'b', text: 'Evita layout shift', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u14-l4-4',
        type: 'info',
        instruction: 'Lazy loading',
        explanation: 'Use `loading="lazy"` em imagens para carregar apenas quando visíveis.',
        xp: 5
      }
    ]
  },
  {
    id: 'u14-l5',
    title: 'Compatibilidade',
    description: 'Funcionando em todos navegadores',
    icon: '🌐',
    unlocked: true,
    unitId: 'unit-14',
    unitTitle: 'Boas Práticas',
    exercises: [
      {
        id: 'u14-l5-1',
        type: 'info',
        instruction: 'Cross-browser',
        explanation: 'Nem todos navegadores interpretam HTML igualmente. Teste em Chrome, Firefox, Safari, Edge.',
        xp: 5
      },
      {
        id: 'u14-l5-2',
        type: 'info',
        instruction: 'HTML válido ajuda',
        explanation: 'Código válido tem menos chances de renderizar diferente entre navegadores.',
        xp: 5
      },
      {
        id: 'u14-l5-3',
        type: 'multiple-choice',
        instruction: 'Para compatibilidade, devemos:',
        options: [
          { id: 'a', text: 'Testar só em um navegador', correct: false },
          { id: 'b', text: 'Testar em vários navegadores', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u14-l5-4',
        type: 'info',
        instruction: 'Recursos modernos',
        explanation: 'Verifique suporte em caniuse.com antes de usar recursos novos de HTML.',
        xp: 5
      }
    ]
  }
];

// ============================================
// UNIDADE 15 — PROJETOS PRÁTICOS
// ============================================

const unit15Lessons: Lesson[] = [
  {
    id: 'u15-l1',
    title: 'Página pessoal',
    description: 'Seu primeiro site',
    icon: '👤',
    unlocked: true,
    unitId: 'unit-15',
    unitTitle: 'Projetos Práticos',
    exercises: [
      {
        id: 'u15-l1-1',
        type: 'info',
        instruction: 'Projeto: Página pessoal',
        explanation: 'Vamos criar uma página simples com seu nome, foto, bio e links para redes sociais.',
        xp: 5
      },
      {
        id: 'u15-l1-2',
        type: 'info',
        instruction: 'Estrutura básica',
        explanation: 'Use header para nome/título, main para conteúdo principal, footer para contatos.',
        xp: 5
      },
      {
        id: 'u15-l1-3',
        type: 'fill-blank',
        instruction: 'Crie a estrutura:',
        codeTemplate: '<{{blank1}}>\n  <h1>Seu Nome</h1>\n</{{blank2}}>\n<main>\n  <img src="foto.jpg" alt="Minha foto">\n  <p>Sobre mim...</p>\n</main>',
        blanks: [
          { id: 'blank1', answer: 'header', placeholder: '______' },
          { id: 'blank2', answer: 'header', placeholder: '______' }
        ],
        xp: 10
      },
      {
        id: 'u15-l1-4',
        type: 'info',
        instruction: 'Elementos essenciais',
        explanation: 'h1 com nome, img com foto, p com bio, nav com links para redes.',
        xp: 5
      }
    ]
  },
  {
    id: 'u15-l2',
    title: 'Landing page simples',
    description: 'Página de conversão',
    icon: '🎯',
    unlocked: true,
    unitId: 'unit-15',
    unitTitle: 'Projetos Práticos',
    exercises: [
      {
        id: 'u15-l2-1',
        type: 'info',
        instruction: 'Projeto: Landing page',
        explanation: 'Uma landing page tem: título chamativo, proposta de valor, benefícios e call-to-action.',
        xp: 5
      },
      {
        id: 'u15-l2-2',
        type: 'info',
        instruction: 'Seções típicas',
        explanation: 'Hero (título + CTA), Features (benefícios), Testimonials (depoimentos), CTA final.',
        xp: 5
      },
      {
        id: 'u15-l2-3',
        type: 'fill-blank',
        instruction: 'Crie a seção hero:',
        codeTemplate: '<{{blank1}}>\n  <h1>Aprenda HTML em 30 dias</h1>\n  <p>Do zero ao profissional</p>\n  <button>Comece agora</button>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'section', placeholder: '_______' },
          { id: 'blank2', answer: 'section', placeholder: '_______' }
        ],
        xp: 10
      },
      {
        id: 'u15-l2-4',
        type: 'info',
        instruction: 'CTA claro',
        explanation: 'O botão de ação deve ser visível e dizer claramente o que acontece ao clicar.',
        xp: 5
      }
    ]
  },
  {
    id: 'u15-l3',
    title: 'Página de contato',
    description: 'Formulário de contato',
    icon: '📧',
    unlocked: true,
    unitId: 'unit-15',
    unitTitle: 'Projetos Práticos',
    exercises: [
      {
        id: 'u15-l3-1',
        type: 'info',
        instruction: 'Projeto: Página de contato',
        explanation: 'Inclua informações de contato (email, telefone, endereço) e um formulário para mensagens.',
        xp: 5
      },
      {
        id: 'u15-l3-2',
        type: 'info',
        instruction: 'Formulário básico',
        explanation: 'Campos: nome, email, assunto, mensagem. Botão de enviar.',
        xp: 5
      },
      {
        id: 'u15-l3-3',
        type: 'fill-blank',
        instruction: 'Crie o form de contato:',
        codeTemplate: '<form action="/contato" method="POST">\n  <label for="nome">Nome:</label>\n  <input type="text" id="nome" name="nome" {{blank1}}>\n  <button type="submit">Enviar</button>\n</form>',
        blanks: [{ id: 'blank1', answer: 'required', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u15-l3-4',
        type: 'info',
        instruction: 'Informações extras',
        explanation: 'Adicione um aside com horário de atendimento, mapa ou FAQs.',
        xp: 5
      }
    ]
  },
  {
    id: 'u15-l4',
    title: 'Formulário funcional',
    description: 'Formulário completo',
    icon: '📝',
    unlocked: true,
    unitId: 'unit-15',
    unitTitle: 'Projetos Práticos',
    exercises: [
      {
        id: 'u15-l4-1',
        type: 'info',
        instruction: 'Projeto: Formulário completo',
        explanation: 'Pratique todos os tipos de input: text, email, password, checkbox, radio, select, textarea.',
        xp: 5
      },
      {
        id: 'u15-l4-2',
        type: 'info',
        instruction: 'Organização',
        explanation: 'Agrupe campos relacionados com fieldset e legend. Use labels em todos.',
        xp: 5
      },
      {
        id: 'u15-l4-3',
        type: 'fill-blank',
        instruction: 'Agrupe campos:',
        codeTemplate: '<{{blank1}}>\n  <legend>Dados pessoais</legend>\n  <label>Nome: <input type="text"></label>\n</{{blank2}}>',
        blanks: [
          { id: 'blank1', answer: 'fieldset', placeholder: '________' },
          { id: 'blank2', answer: 'fieldset', placeholder: '________' }
        ],
        xp: 10
      },
      {
        id: 'u15-l4-4',
        type: 'info',
        instruction: 'Validação',
        explanation: 'Use required, type="email", min, max, pattern para validar dados.',
        xp: 5
      }
    ]
  },
  {
    id: 'u15-l5',
    title: 'Mini site institucional',
    description: 'Site de empresa',
    icon: '🏢',
    unlocked: true,
    unitId: 'unit-15',
    unitTitle: 'Projetos Práticos',
    exercises: [
      {
        id: 'u15-l5-1',
        type: 'info',
        instruction: 'Projeto: Site institucional',
        explanation: 'Site com múltiplas páginas: Home, Sobre, Serviços, Contato. Navegação entre elas.',
        xp: 5
      },
      {
        id: 'u15-l5-2',
        type: 'info',
        instruction: 'Navegação consistente',
        explanation: 'Use o mesmo header/nav/footer em todas as páginas para consistência.',
        xp: 5
      },
      {
        id: 'u15-l5-3',
        type: 'fill-blank',
        instruction: 'Crie a navegação:',
        codeTemplate: '<nav>\n  <a href="index.html">Home</a>\n  <a href="{{blank1}}">Sobre</a>\n  <a href="servicos.html">Serviços</a>\n  <a href="contato.html">Contato</a>\n</nav>',
        blanks: [{ id: 'blank1', answer: 'sobre.html', placeholder: '__________' }],
        xp: 10
      },
      {
        id: 'u15-l5-4',
        type: 'info',
        instruction: 'Conteúdo de cada página',
        explanation: 'Home: visão geral. Sobre: história/equipe. Serviços: o que oferece. Contato: formulário.',
        xp: 5
      }
    ]
  }
];

// ============================================
// UNIDADE 16 — COMPLEMENTAR
// ============================================

const unit16Lessons: Lesson[] = [
  {
    id: 'u16-l1',
    title: 'HTML vs frameworks',
    description: 'HTML puro e bibliotecas',
    icon: '⚖️',
    unlocked: true,
    unitId: 'unit-16',
    unitTitle: 'Complementar',
    exercises: [
      {
        id: 'u16-l1-1',
        type: 'info',
        instruction: 'HTML puro vs frameworks',
        explanation: 'Frameworks como React, Vue, Angular usam HTML dentro de JavaScript. A base ainda é HTML.',
        xp: 5
      },
      {
        id: 'u16-l1-2',
        type: 'info',
        instruction: 'Quando usar HTML puro',
        explanation: 'Sites simples, páginas estáticas, prototipagem rápida. Menos complexidade.',
        xp: 5
      },
      {
        id: 'u16-l1-3',
        type: 'multiple-choice',
        instruction: 'Frameworks substituem HTML?',
        options: [
          { id: 'a', text: 'Sim, completamente', correct: false },
          { id: 'b', text: 'Não, usam HTML por baixo', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u16-l1-4',
        type: 'info',
        instruction: 'Saber HTML é essencial',
        explanation: 'Mesmo usando frameworks, entender HTML é fundamental para ser um bom desenvolvedor.',
        xp: 5
      }
    ]
  },
  {
    id: 'u16-l2',
    title: 'Introdução a Web Components',
    description: 'Componentes nativos',
    icon: '🧩',
    unlocked: true,
    unitId: 'unit-16',
    unitTitle: 'Complementar',
    exercises: [
      {
        id: 'u16-l2-1',
        type: 'info',
        instruction: 'Web Components',
        explanation: 'Web Components permitem criar elementos HTML customizados e reutilizáveis, nativamente no navegador.',
        xp: 5
      },
      {
        id: 'u16-l2-2',
        type: 'info',
        instruction: 'Três tecnologias',
        explanation: 'Custom Elements: criar tags. Shadow DOM: encapsular estilos. Templates: definir estrutura.',
        xp: 5
      },
      {
        id: 'u16-l2-3',
        type: 'multiple-choice',
        instruction: 'Web Components são:',
        options: [
          { id: 'a', text: 'Um framework específico', correct: false },
          { id: 'b', text: 'Padrão nativo dos navegadores', correct: true },
        ],
        xp: 10
      },
      {
        id: 'u16-l2-4',
        type: 'info',
        instruction: 'Exemplo de uso',
        explanation: 'Você pode criar `<meu-botao>` com comportamento e estilo próprios.',
        xp: 5
      }
    ]
  },
  {
    id: 'u16-l3',
    title: 'HTML em PWAs',
    description: 'Apps progressivos',
    icon: '📱',
    unlocked: true,
    unitId: 'unit-16',
    unitTitle: 'Complementar',
    exercises: [
      {
        id: 'u16-l3-1',
        type: 'info',
        instruction: 'Progressive Web Apps',
        explanation: 'PWAs são sites que funcionam como apps. Podem ser instalados e funcionar offline.',
        xp: 5
      },
      {
        id: 'u16-l3-2',
        type: 'info',
        instruction: 'HTML em PWAs',
        explanation: 'A estrutura HTML é a mesma. Adicionamos manifest.json e service worker para funcionalidades de app.',
        xp: 5
      },
      {
        id: 'u16-l3-3',
        type: 'fill-blank',
        instruction: 'Link para o manifest:',
        codeTemplate: '<link rel="{{blank1}}" href="manifest.json">',
        blanks: [{ id: 'blank1', answer: 'manifest', placeholder: '________' }],
        xp: 10
      },
      {
        id: 'u16-l3-4',
        type: 'multiple-choice',
        instruction: 'PWAs podem:',
        options: [
          { id: 'a', text: 'Apenas funcionar online', correct: false },
          { id: 'b', text: 'Funcionar offline e ser instalados', correct: true },
        ],
        xp: 10
      }
    ]
  }
];

// ============================================
// EXPORTAÇÃO DE UNIDADES
// ============================================

export const htmlUnits: Unit[] = [
  {
    id: 'unit-1',
    title: 'Introdução à Web',
    icon: '🌐',
    lessons: unit1Lessons
  },
  {
    id: 'unit-2',
    title: 'Estrutura do HTML',
    icon: '🏗️',
    lessons: unit2Lessons
  },
  {
    id: 'unit-3',
    title: 'Texto e Conteúdo',
    icon: '📝',
    lessons: unit3Lessons
  },
  {
    id: 'unit-4',
    title: 'Links e Navegação',
    icon: '🔗',
    lessons: unit4Lessons
  },
  {
    id: 'unit-5',
    title: 'Imagens e Mídia',
    icon: '🖼️',
    lessons: unit5Lessons
  },
  {
    id: 'unit-6',
    title: 'Listas',
    icon: '📋',
    lessons: unit6Lessons
  },
  {
    id: 'unit-7',
    title: 'Tabelas',
    icon: '📊',
    lessons: unit7Lessons
  },
  {
    id: 'unit-8',
    title: 'Formulários',
    icon: '📝',
    lessons: unit8Lessons
  },
  {
    id: 'unit-9',
    title: 'HTML Semântico',
    icon: '🎯',
    lessons: unit9Lessons
  },
  {
    id: 'unit-10',
    title: 'Atributos Globais',
    icon: '🔧',
    lessons: unit10Lessons
  },
  {
    id: 'unit-11',
    title: 'Acessibilidade',
    icon: '♿',
    lessons: unit11Lessons
  },
  {
    id: 'unit-12',
    title: 'SEO com HTML',
    icon: '🔍',
    lessons: unit12Lessons
  },
  {
    id: 'unit-13',
    title: 'Integração com CSS e JS',
    icon: '🔌',
    lessons: unit13Lessons
  },
  {
    id: 'unit-14',
    title: 'Boas Práticas',
    icon: '✅',
    lessons: unit14Lessons
  },
  {
    id: 'unit-15',
    title: 'Projetos Práticos',
    icon: '🚀',
    lessons: unit15Lessons
  },
  {
    id: 'unit-16',
    title: 'Complementar',
    icon: '📚',
    lessons: unit16Lessons
  }
];

// Export flat lessons array for backward compatibility
export const htmlLessons: Lesson[] = htmlUnits.flatMap(unit => unit.lessons);

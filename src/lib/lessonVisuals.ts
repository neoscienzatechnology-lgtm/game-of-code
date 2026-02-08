import type { LessonData } from '@/types/learning';

type LessonVisual = {
  src: string;
  alt: string;
  caption: string;
};

type VisualRule = {
  file: string;
  alt: string;
  caption: string;
  keywords: string[];
  language?: string;
};

const BASE_PATH = `${import.meta.env.BASE_URL}illustrations/`;

const VISUAL_RULES: VisualRule[] = [
  {
    file: 'web-basics.svg',
    alt: 'Fluxo basico da web entre navegador e servidor',
    caption: 'Mapa visual do fluxo web: navegador, servidor e resposta.',
    keywords: ['introducao', 'web', 'navegador', 'internet'],
  },
  {
    file: 'html-structure.svg',
    alt: 'Estrutura base de um documento HTML',
    caption: 'Guia rapido da estrutura principal de um arquivo HTML.',
    keywords: ['estrutura', 'doctype', 'head', 'body', 'tag', 'atribut', 'meta', 'titulo'],
    language: 'html',
  },
  {
    file: 'html-semantics.svg',
    alt: 'Exemplo de semantica com header, main, section e footer',
    caption: 'Distribuicao semantica para melhorar organizacao e acessibilidade.',
    keywords: ['semant', 'acess', 'seo', 'header', 'footer', 'article', 'section', 'nav'],
    language: 'html',
  },
  {
    file: 'css-selectors.svg',
    alt: 'Comparacao de seletores CSS por tag, classe e id',
    caption: 'Visao didatica de como cada tipo de seletor encontra elementos.',
    keywords: ['seletores', 'selector', 'classe', 'id', 'especificidade', 'pseudo'],
    language: 'css',
  },
  {
    file: 'css-layout.svg',
    alt: 'Comparacao visual entre flexbox e grid',
    caption: 'Resumo visual para decidir entre Flexbox e Grid no layout.',
    keywords: ['layout', 'flex', 'grid', 'box-model', 'alinhamento', 'posicionamento'],
    language: 'css',
  },
  {
    file: 'css-responsive.svg',
    alt: 'Breakpoints e comportamento responsivo em multiplas telas',
    caption: 'Exemplo de responsividade com breakpoints para mobile e desktop.',
    keywords: ['responsiv', 'media', 'breakpoint', 'mobile', 'viewport'],
    language: 'css',
  },
  {
    file: 'js-fundamentals.svg',
    alt: 'Blocos de variaveis, tipos e operadores em JavaScript',
    caption: 'Fundamentos de JavaScript: variaveis, tipos e operadores.',
    keywords: ['variavel', 'tipos', 'operador', 'const', 'let', 'boolean'],
    language: 'javascript',
  },
  {
    file: 'js-functions.svg',
    alt: 'Fluxo de entrada e saida em funcoes JavaScript',
    caption: 'Como funcoes recebem parametros e retornam resultados.',
    keywords: ['func', 'param', 'retorn', 'escopo', 'modulo', 'class'],
    language: 'javascript',
  },
  {
    file: 'js-arrays.svg',
    alt: 'Operacoes em arrays e objetos com metodos comuns',
    caption: 'Colecoes em JavaScript: arrays, objetos e transformacoes.',
    keywords: ['array', 'objeto', 'map', 'filter', 'reduce', 'loop'],
    language: 'javascript',
  },
  {
    file: 'js-async.svg',
    alt: 'Linha do tempo de promises e async await',
    caption: 'Assincronismo simplificado: Promise, async/await e tratamento de erro.',
    keywords: ['async', 'await', 'promise', 'assincron', 'fetch', 'erro', 'try', 'catch'],
    language: 'javascript',
  },
];

const LANGUAGE_FALLBACK: Record<string, Omit<LessonVisual, 'src'> & { file: string }> = {
  html: {
    file: 'html-structure.svg',
    alt: 'Estrutura de pagina HTML',
    caption: 'Diagrama base para acompanhar a explicacao da licao.',
  },
  css: {
    file: 'css-layout.svg',
    alt: 'Layout e estilos em CSS',
    caption: 'Esquema visual para apoiar os conceitos de estilo e layout.',
  },
  javascript: {
    file: 'js-fundamentals.svg',
    alt: 'Fundamentos de JavaScript',
    caption: 'Referencia visual para acompanhar os conceitos de JavaScript.',
  },
};

const includesAny = (value: string, keywords: string[]) =>
  keywords.some(keyword => value.includes(keyword));

const normalize = (value: string) => (value || '').toLowerCase();

export const getLessonVisual = (
  lesson: Pick<LessonData, 'language' | 'concept' | 'title'>
): LessonVisual => {
  const language = normalize(lesson.language);
  const searchable = [lesson.concept, lesson.title].map(normalize).join(' ');

  const matchedRule = VISUAL_RULES.find(rule => {
    if (rule.language && rule.language !== language) return false;
    return includesAny(searchable, rule.keywords);
  });

  if (matchedRule) {
    return {
      src: `${BASE_PATH}${matchedRule.file}`,
      alt: matchedRule.alt,
      caption: matchedRule.caption,
    };
  }

  const fallback = LANGUAGE_FALLBACK[language] ?? {
    file: 'web-basics.svg',
    alt: 'Ilustracao didatica de programacao web',
    caption: 'Visual de apoio para reforcar o conceito da licao.',
  };

  return {
    src: `${BASE_PATH}${fallback.file}`,
    alt: fallback.alt,
    caption: fallback.caption,
  };
};

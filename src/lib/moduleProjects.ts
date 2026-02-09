export interface ModuleProjectChecklistItem {
  id: string;
  label: string;
  description: string;
  weight: number;
}

export interface ModuleProjectTemplate {
  moduleId: string;
  title: string;
  summary: string;
  deliverable: string;
  checklist: ModuleProjectChecklistItem[];
}

export const moduleProjectTemplates: ModuleProjectTemplate[] = [
  {
    moduleId: 'module-html-basics',
    title: 'Projeto final de HTML',
    summary: 'Monte uma pagina institucional semantica com estrutura clara e acessivel.',
    deliverable: 'Arquivo index.html com seções semânticas e conteúdo completo.',
    checklist: [
      {
        id: 'semantic-structure',
        label: 'Estrutura semântica',
        description: 'Usa header, nav, main, section/article e footer com hierarquia correta.',
        weight: 25,
      },
      {
        id: 'forms-accessibility',
        label: 'Formulário acessível',
        description: 'Campos com label, required quando necessário e atributos de apoio.',
        weight: 20,
      },
      {
        id: 'media-and-links',
        label: 'Mídia e navegação',
        description: 'Inclui links úteis, imagem com alt e navegação funcional.',
        weight: 20,
      },
      {
        id: 'seo-basics',
        label: 'Boas práticas de SEO',
        description: 'Define title, meta charset e meta viewport corretamente.',
        weight: 20,
      },
      {
        id: 'code-quality',
        label: 'Qualidade do código',
        description: 'Indentação consistente, comentários úteis e organização legível.',
        weight: 15,
      },
    ],
  },
  {
    moduleId: 'module-css-basics',
    title: 'Projeto final de CSS',
    summary: 'Estilize uma landing page responsiva com foco em legibilidade e consistência.',
    deliverable: 'Arquivo CSS aplicado em layout responsivo para desktop e mobile.',
    checklist: [
      {
        id: 'visual-consistency',
        label: 'Consistência visual',
        description: 'Paleta, tipografia e espaçamentos coerentes em toda a página.',
        weight: 20,
      },
      {
        id: 'layout-system',
        label: 'Layout com Flex/Grid',
        description: 'Organiza seções com Flexbox ou Grid de forma previsível.',
        weight: 25,
      },
      {
        id: 'responsive-design',
        label: 'Responsividade',
        description: 'Adapta o conteúdo para telas menores com media queries.',
        weight: 25,
      },
      {
        id: 'interactions',
        label: 'Interações visuais',
        description: 'Aplica transitions/animations sem prejudicar usabilidade.',
        weight: 15,
      },
      {
        id: 'advanced-styles',
        label: 'Recursos avançados',
        description: 'Usa variáveis CSS, pseudo-elementos e sombras/fundos com intenção.',
        weight: 15,
      },
    ],
  },
  {
    moduleId: 'module-js-basics',
    title: 'Projeto final de JavaScript',
    summary: 'Crie uma aplicação interativa simples com lógica, estado e manipulação de DOM.',
    deliverable: 'Projeto funcional com interação real e tratamento básico de erros.',
    checklist: [
      {
        id: 'core-logic',
        label: 'Lógica correta',
        description: 'Utiliza variáveis, condicionais, funções e loops com clareza.',
        weight: 25,
      },
      {
        id: 'dom-events',
        label: 'Eventos e DOM',
        description: 'Manipula DOM e eventos para atualizar a interface em tempo real.',
        weight: 25,
      },
      {
        id: 'data-structures',
        label: 'Estruturas de dados',
        description: 'Usa arrays/objetos e métodos para processar dados.',
        weight: 20,
      },
      {
        id: 'async-and-errors',
        label: 'Assíncrono e erros',
        description: 'Inclui Promise/async e tratamento de erros básico.',
        weight: 15,
      },
      {
        id: 'code-organization',
        label: 'Organização',
        description: 'Código modular, legível e com nomes claros.',
        weight: 15,
      },
    ],
  },
];

export const getModuleProjectTemplate = (moduleId: string) =>
  moduleProjectTemplates.find(template => template.moduleId === moduleId) ?? null;


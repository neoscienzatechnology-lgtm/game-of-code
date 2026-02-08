import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const seedPath = path.join(root, 'public', 'seed', 'learning.json');

const seed = JSON.parse(readFileSync(seedPath, 'utf8'));

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const toTitleCase = value => value.charAt(0).toUpperCase() + value.slice(1);

const replacements = [
  ['nao', 'não'],
  ['voce', 'você'],
  ['licao', 'lição'],
  ['licoes', 'lições'],
  ['modulo', 'módulo'],
  ['modulos', 'módulos'],
  ['pratica', 'prática'],
  ['praticas', 'práticas'],
  ['conteudo', 'conteúdo'],
  ['conteudos', 'conteúdos'],
  ['pagina', 'página'],
  ['paginas', 'páginas'],
  ['secao', 'seção'],
  ['secoes', 'seções'],
  ['programacao', 'programação'],
  ['logica', 'lógica'],
  ['marcacao', 'marcação'],
  ['diferenca', 'diferença'],
  ['calculos', 'cálculos'],
  ['matematicos', 'matemáticos'],
  ['basica', 'básica'],
  ['decisoes', 'decisões'],
  ['logicas', 'lógicas'],
  ['padrao', 'padrão'],
  ['renderizacao', 'renderização'],
  ['configuracoes', 'configurações'],
  ['titulo', 'título'],
  ['titulos', 'títulos'],
  ['visivel', 'visível'],
  ['contem', 'contém'],
  ['codificacao', 'codificação'],
  ['area', 'área'],
  ['anotacoes', 'anotações'],
  ['comentarios', 'comentários'],
  ['endereco', 'endereço'],
  ['indentacao', 'indentação'],
  ['espacos', 'espaços'],
  ['facil', 'fácil'],
  ['proxima', 'próxima'],
  ['forca', 'força'],
  ['tambem', 'também'],
  ['importancia', 'importância'],
  ['enfase', 'ênfase'],
  ['italico', 'itálico'],
  ['citacao', 'citação'],
  ['citacoes', 'citações'],
  ['acao', 'ação'],
  ['relacao', 'relação'],
  ['seguranca', 'segurança'],
  ['usuario', 'usuário'],
  ['moveis', 'móveis'],
  ['dimensoes', 'dimensões'],
  ['transparencia', 'transparência'],
  ['animacoes', 'animações'],
  ['semantico', 'semântico'],
  ['midia', 'mídia'],
  ['reproducao', 'reprodução'],
  ['basico', 'básico'],
  ['operacoes', 'operações'],
  ['funcao', 'função'],
  ['funcoes', 'funções'],
  ['variavel', 'variável'],
  ['variaveis', 'variáveis'],
  ['colecoes', 'coleções'],
  ['indice', 'índice'],
  ['comeca', 'começa'],
  ['util', 'útil'],
  ['condicoes', 'condições'],
  ['intencao', 'intenção'],
  ['instancia', 'instância'],
  ['unitario', 'unitário'],
  ['saida', 'saída'],
  ['cenarios', 'cenários'],
  ['rapido', 'rápido'],
  ['rapidos', 'rápidos'],
  ['exercicios', 'exercícios'],
  ['explicacoes', 'explicações'],
  ['fisica', 'física'],
  ['aparencia', 'aparência'],
  ['arvore', 'árvore'],
  ['sao', 'são'],
  ['botoes', 'botões'],
  ['beneficios', 'benefícios'],
  ['navegacao', 'navegação'],
  ['codigo', 'código'],
  ['codigos', 'códigos'],
  ['legivel', 'legível'],
  ['multiplas', 'múltiplas'],
  ['constroi', 'constrói'],
  ['tras', 'trás'],
  ['le', 'lê'],
  ['va', 'vá'],
  ['assincronas', 'assíncronas'],
  ['metodos', 'métodos'],
  ['revisao', 'revisão'],
  ['concluida', 'concluída'],
  ['concluido', 'concluído'],
  ['concluidas', 'concluídas'],
  ['concluidos', 'concluídos'],
  ['disponivel', 'disponível'],
  ['protecao', 'proteção'],
  ['reforcar', 'reforçar'],
];

const regexReplacements = [];
for (const [from, to] of replacements) {
  regexReplacements.push([new RegExp(`\\b${escapeRegExp(from)}\\b`, 'g'), to]);

  const titledFrom = toTitleCase(from);
  const titledTo = toTitleCase(to);
  if (titledFrom !== from) {
    regexReplacements.push([new RegExp(`\\b${escapeRegExp(titledFrom)}\\b`, 'g'), titledTo]);
  }
}

const phraseReplacements = [
  [/\bO que e\b/g, 'O que é'],
  [/\bo que e\b/g, 'o que é'],
  [/\bQual e\b/g, 'Qual é'],
  [/\bqual e\b/g, 'qual é'],
  [/\bComo e\b/g, 'Como é'],
  [/\bcomo e\b/g, 'como é'],
  [/\bTema da licao\b/g, 'Tema da lição'],
  [/\btema da licao\b/g, 'tema da lição'],
  [/\bA Web e um conjunto\b/g, 'A Web é um conjunto'],
  [/\bA Web e publicada\b/g, 'A Web é publicada'],
  [/\bHTML e uma linguagem\b/g, 'HTML é uma linguagem'],
  [/\bEla nao faz\b/g, 'Ela não faz'],
  [/\bA tag e\b/g, 'A tag é'],
  [/\bO viewport e\b/g, 'O viewport é'],
  [/\bA ordem nao importa\b/g, 'A ordem não importa'],
  [/\bO head contem\b/g, 'O head contém'],
  [/\bO body contem\b/g, 'O body contém'],
];

const normalizeText = value => {
  if (!value) return value;
  let next = value;

  for (const [pattern, replacement] of phraseReplacements) {
    next = next.replace(pattern, replacement);
  }

  for (const [pattern, replacement] of regexReplacements) {
    next = next.replace(pattern, replacement);
  }

  return next;
};

seed.modules = seed.modules.map(module => ({
  ...module,
  title: normalizeText(module.title),
  description: normalizeText(module.description),
}));

seed.lessons = seed.lessons.map(lesson => ({
  ...lesson,
  title: normalizeText(lesson.title),
  content: normalizeText(lesson.content),
}));

seed.exercises = seed.exercises.map(exercise => {
  const normalized = {
    ...exercise,
    prompt: normalizeText(exercise.prompt),
    hints: (exercise.hints ?? []).map(hint => ({
      ...hint,
      text: normalizeText(hint.text),
    })),
  };

  if (exercise.type === 'blank') {
    normalized.solution = normalizeText(exercise.solution);
    normalized.validations = (exercise.validations ?? []).map(validation => {
      if (validation.type !== 'blank') return validation;

      return {
        ...validation,
        blanks: validation.blanks.map(blank => ({
          ...blank,
          answer: normalizeText(blank.answer),
          placeholder: blank.placeholder ? normalizeText(blank.placeholder) : blank.placeholder,
        })),
      };
    });
  }

  return normalized;
});

writeFileSync(seedPath, `${JSON.stringify(seed, null, 2)}\n`);
console.log('Portuguese normalization complete.');

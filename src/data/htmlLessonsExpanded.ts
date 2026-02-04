import { htmlUnitsEnriched } from './htmlLessonsEnriched';
import type { Exercise, Lesson, Unit } from './htmlLessons';

const normalize = (value: string) => value.toLowerCase();

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
  if (!shouldExpand(exercise)) return exercise;

  const base = exercise.explanation ?? exercise.instruction ?? '';
  const example = buildExample(exercise);
  const usage = buildUsage(lesson);
  const tip = buildTip(lesson);

  return {
    ...exercise,
    explanation: `${base}\n\nExemplo de uso: ${example}\nUso comum: ${usage}\nDica pratica: ${tip}`,
  };
};

const expandLesson = (lesson: Lesson): Lesson => ({
  ...lesson,
  exercises: lesson.exercises.map(exercise => expandInfoExercise(exercise, lesson)),
});

export const htmlUnitsExpanded: Unit[] = htmlUnitsEnriched.map(unit => ({
  ...unit,
  lessons: unit.lessons.map(expandLesson),
}));

export const htmlLessonsExpanded: Lesson[] = htmlUnitsExpanded.flatMap(unit => unit.lessons);

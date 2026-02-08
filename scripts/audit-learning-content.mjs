import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const seedPath = path.join(root, 'public', 'seed', 'learning.json');
const seed = JSON.parse(readFileSync(seedPath, 'utf8'));

const report = {
  summary: {
    modules: seed.modules.length,
    lessons: seed.lessons.length,
    exercises: seed.exercises.length,
  },
  findings: {
    duplicateLessonTitles: [],
    duplicatePrompts: [],
    genericPhrases: [],
    unresolvedPlaceholders: [],
    shortContent: [],
  },
};

const titleMap = new Map();
for (const lesson of seed.lessons) {
  const key = `${lesson.module_id}::${(lesson.title || '').trim().toLowerCase()}`;
  if (!titleMap.has(key)) titleMap.set(key, []);
  titleMap.get(key).push(lesson.id);

  if ((lesson.content || '').trim().length < 80) {
    report.findings.shortContent.push({ lesson_id: lesson.id, title: lesson.title });
  }

  const badPhrases = [
    'exemplo rapido aplicado em um arquivo real',
    'uso comum: uso comum',
    'dica pratica: dica pratica',
  ];

  const normalizedContent = (lesson.content || '').toLowerCase();
  for (const phrase of badPhrases) {
    if (normalizedContent.includes(phrase)) {
      report.findings.genericPhrases.push({
        source: 'lesson',
        id: lesson.id,
        phrase,
      });
    }
  }

  if (/\{\{blank\d+\}\}/.test(lesson.content || '')) {
    report.findings.unresolvedPlaceholders.push({
      source: 'lesson',
      id: lesson.id,
      field: 'content',
    });
  }
}

for (const [key, ids] of titleMap.entries()) {
  if (ids.length > 1) {
    report.findings.duplicateLessonTitles.push({ key, lesson_ids: ids });
  }
}

const promptMap = new Map();
for (const exercise of seed.exercises) {
  const key = `${exercise.lesson_id}::${(exercise.prompt || '').trim().toLowerCase()}`;
  if (!promptMap.has(key)) promptMap.set(key, []);
  promptMap.get(key).push(exercise.id);

  const textFields = [exercise.prompt, exercise.starter_code, exercise.solution]
    .map(value => value || '')
    .join('\n')
    .toLowerCase();

  const badPhrases = [
    'exemplo rapido aplicado em um arquivo real',
    'uso comum: uso comum',
    'dica pratica: dica pratica',
  ];

  for (const phrase of badPhrases) {
    if (textFields.includes(phrase)) {
      report.findings.genericPhrases.push({
        source: 'exercise',
        id: exercise.id,
        phrase,
      });
    }
  }

  if (/\{\{blank\d+\}\}/.test(exercise.solution || '')) {
    report.findings.unresolvedPlaceholders.push({
      source: 'exercise',
      id: exercise.id,
      field: 'solution',
    });
  }
}

for (const [key, ids] of promptMap.entries()) {
  if (ids.length > 1) {
    report.findings.duplicatePrompts.push({ key, exercise_ids: ids });
  }
}

const totalIssues =
  report.findings.duplicateLessonTitles.length +
  report.findings.duplicatePrompts.length +
  report.findings.genericPhrases.length +
  report.findings.unresolvedPlaceholders.length +
  report.findings.shortContent.length;

const criticalIssues =
  report.findings.genericPhrases.length +
  report.findings.unresolvedPlaceholders.length;

console.log(JSON.stringify(report, null, 2));
console.log(`Total issues found: ${totalIssues}`);
console.log(`Critical issues found: ${criticalIssues}`);

if (criticalIssues > 0) {
  process.exitCode = 1;
}

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const seedPath = path.join(root, 'public', 'seed', 'learning.json');
const moduleDir = path.join(root, 'public', 'seed', 'modules');
const manifestPath = path.join(root, 'public', 'seed', 'modules.json');

const seed = JSON.parse(readFileSync(seedPath, 'utf8'));
mkdirSync(moduleDir, { recursive: true });

const moduleFiles = {};

for (const module of seed.modules) {
  const moduleLessons = seed.lessons.filter(lesson => lesson.module_id === module.id);
  const lessonIds = new Set(moduleLessons.map(lesson => lesson.id));
  const moduleExercises = seed.exercises.filter(exercise => lessonIds.has(exercise.lesson_id));

  const fileName = `${module.id}.json`;
  const filePath = path.join(moduleDir, fileName);
  moduleFiles[module.id] = `modules/${fileName}`;

  const payload = {
    module,
    lessons: moduleLessons,
    exercises: moduleExercises,
  };

  writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
}

const manifest = {
  modules: seed.modules,
  moduleFiles,
};

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `Split complete: ${seed.modules.length} modules -> ${Object.keys(moduleFiles).length} files.`
);

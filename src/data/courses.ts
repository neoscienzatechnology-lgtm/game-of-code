import { htmlUnitsExpanded } from './htmlLessonsExpanded';
import type { Unit } from './htmlLessons';

export type CourseId = 'html' | 'css' | 'js';

export interface Course {
  id: CourseId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  units: Unit[];
}

const htmlUnitIds = Array.from({ length: 16 }, (_, index) => `unit-${index + 1}`);
const cssUnitIds = ['unit-17', 'unit-18', 'unit-19', 'unit-22', 'unit-23'];
const jsUnitIds = ['unit-20', 'unit-21', 'unit-24', 'unit-25'];

const pickUnits = (ids: string[]) => htmlUnitsExpanded.filter((unit) => ids.includes(unit.id));

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML5',
    subtitle: 'Estrutura e semântica',
    description: 'Construa páginas sólidas do básico ao avançado.',
    icon: '🌐',
    units: pickUnits(htmlUnitIds),
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: 'Estilo e layout',
    description: 'Destaque suas páginas com design moderno e responsivo.',
    icon: '🎨',
    units: pickUnits(cssUnitIds),
  },
  {
    id: 'js',
    title: 'JavaScript',
    subtitle: 'Lógica e interatividade',
    description: 'Adicione comportamento e torne a web dinâmica.',
    icon: '⚙️',
    units: pickUnits(jsUnitIds),
  },
];

export const getCourseById = (courseId: CourseId) =>
  courses.find((course) => course.id === courseId) ?? courses[0];

import { useEffect, useState } from 'react';
import { BookOpen, Target, Flame } from 'lucide-react';
import type { Course } from '@/data/courses';
import { Unit, Lesson } from '@/data/htmlLessons';
import { UnitAccordion } from './UnitAccordion';
import { LearningPanel } from './LearningPanel';

interface HomeScreenProps {
  courses: Course[];
  activeCourseId: Course['id'];
  onCourseChange: (courseId: Course['id']) => void;
  units: Unit[];
  lessons: Lesson[];
  completedLessons: string[];
  getLessonProgress: (lessonId: string) => number;
  onStartLesson: (lessonId: string) => void;
  totalXp: number;
  streak: number;
}

export function HomeScreen({
  courses,
  activeCourseId,
  onCourseChange,
  units,
  lessons,
  completedLessons,
  getLessonProgress,
  onStartLesson,
  totalXp,
  streak,
}: HomeScreenProps) {
  const [openUnitId, setOpenUnitId] = useState<string | null>(units[0]?.id || null);

  const activeCourse = courses.find(course => course.id === activeCourseId) ?? courses[0];
  const lessonIds = new Set(lessons.map(lesson => lesson.id));
  const completedCount = completedLessons.filter(id => lessonIds.has(id)).length;
  const totalLessons = lessons.length;
  const overallProgress = totalLessons > 0
    ? Math.round((completedCount / totalLessons) * 100)
    : 0;

  // Calculate completed units
  const completedUnits = units.filter(unit => 
    unit.lessons.every(lesson => completedLessons.includes(lesson.id))
  ).length;

  // Determine if a unit is locked (all previous units must have at least 1 completed lesson)
  const isUnitLocked = (unitIndex: number): boolean => {
    if (unitIndex === 0) return false;
    const previousUnit = units[unitIndex - 1];
    if (!previousUnit) return false;

    return !previousUnit.lessons.some(lesson => completedLessons.includes(lesson.id));
  };

  const handleToggleUnit = (unitId: string) => {
    setOpenUnitId(prev => prev === unitId ? null : unitId);
  };

  useEffect(() => {
    setOpenUnitId(units[0]?.id || null);
  }, [activeCourseId, units]);

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Course Selector */}
        <div className="glass-card p-2 mb-5">
          <div className="grid grid-cols-3 gap-2">
            {courses.map(course => {
              const isActive = course.id === activeCourseId;

              return (
                <button
                  key={course.id}
                  onClick={() => onCourseChange(course.id)}
                  className={`flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? 'gradient-primary text-primary-foreground shadow-lg'
                      : 'bg-muted/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-lg">{course.icon}</span>
                  <span>{course.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-2xl">{activeCourse?.icon ?? '💡'}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{activeCourse?.title ?? 'Curso'}</h1>
                <p className="text-muted-foreground text-sm">{activeCourse?.subtitle ?? 'Sua trilha completa'}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {activeCourse?.description ?? 'Escolha uma trilha e avance nas unidades.'}
            </p>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Seu progresso</span>
                <span className="font-medium text-primary">{overallProgress}%</span>
              </div>
              <div className="progress-bar h-3">
                <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <BookOpen className="w-4 h-4 text-primary mb-1" />
                <span className="text-lg font-bold">{completedCount}</span>
                <span className="text-xs text-muted-foreground">Lições</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <Target className="w-4 h-4 text-xp mb-1" />
                <span className="text-lg font-bold">{totalXp}</span>
                <span className="text-xs text-muted-foreground">XP Total</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <Flame className="w-4 h-4 text-streak mb-1" />
                <span className="text-lg font-bold">{streak}</span>
                <span className="text-xs text-muted-foreground">Streak</span>
              </div>
            </div>
          </div>
        </div>

        <LearningPanel />

        {/* Course Overview */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Unidades</h2>
          <span className="text-sm text-muted-foreground">
            {completedUnits}/{units.length} completas
          </span>
        </div>

        {/* Units List */}
        <div className="space-y-3">
          {units.map((unit, index) => (
            <UnitAccordion
              key={unit.id}
              unit={unit}
              isOpen={openUnitId === unit.id}
              onToggle={() => handleToggleUnit(unit.id)}
              completedLessons={completedLessons}
              getLessonProgress={getLessonProgress}
              onStartLesson={onStartLesson}
              isLocked={isUnitLocked(index)}
            />
          ))}
        </div>

        {/* Footer hint */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          {totalLessons} lições em {units.length} unidades • Domine {activeCourse?.title ?? 'sua trilha'}! 🚀
        </p>
      </div>
    </div>
  );
}



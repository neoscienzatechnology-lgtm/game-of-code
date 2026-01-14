import { Code2, BookOpen, Target } from 'lucide-react';
import { LessonCard } from './LessonCard';
import { Lesson } from '@/data/htmlLessons';

interface HomeScreenProps {
  lessons: Lesson[];
  completedLessons: string[];
  getLessonProgress: (lessonId: string) => number;
  onStartLesson: (lessonId: string) => void;
  totalXp: number;
}

export function HomeScreen({
  lessons,
  completedLessons,
  getLessonProgress,
  onStartLesson,
  totalXp,
}: HomeScreenProps) {
  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;
  const overallProgress = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Hero Section */}
        <div className="glass-card p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">HTML Básico</h1>
                <p className="text-muted-foreground text-sm">Fundamentos da Web</p>
              </div>
            </div>

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
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span><strong>{completedCount}</strong>/{totalLessons} lições</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span><strong>{totalXp}</strong> XP total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold">Lições</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              progress={getLessonProgress(lesson.id)}
              isCompleted={completedLessons.includes(lesson.id)}
              onClick={() => onStartLesson(lesson.id)}
            />
          ))}
        </div>

        {/* Footer hint */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Complete todas as lições para dominar HTML! 🚀
        </p>
      </div>
    </div>
  );
}

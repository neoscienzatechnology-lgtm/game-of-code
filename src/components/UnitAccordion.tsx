import { ChevronDown, CheckCircle, Lock, Trophy } from 'lucide-react';
import { Unit, Lesson } from '@/data/htmlLessons';
import { LessonCard } from './LessonCard';

interface UnitAccordionProps {
  unit: Unit;
  isOpen: boolean;
  onToggle: () => void;
  completedLessons: string[];
  getLessonProgress: (lessonId: string) => number;
  onStartLesson: (lessonId: string) => void;
  isLocked: boolean;
}

export function UnitAccordion({
  unit,
  isOpen,
  onToggle,
  completedLessons,
  getLessonProgress,
  onStartLesson,
  isLocked,
}: UnitAccordionProps) {
  const completedCount = unit.lessons.filter(l => completedLessons.includes(l.id)).length;
  const totalLessons = unit.lessons.length;
  const progress = Math.round((completedCount / totalLessons) * 100);
  const isComplete = completedCount === totalLessons;

  return (
    <div className={`glass-card overflow-hidden transition-all ${
      isLocked ? 'opacity-50' : ''
    } ${isComplete ? 'ring-2 ring-success/30' : ''}`}>
      {/* Unit Header */}
      <button
        onClick={onToggle}
        disabled={isLocked}
        className={`w-full p-4 flex items-center gap-4 transition-colors ${
          isLocked ? 'cursor-not-allowed' : 'hover:bg-muted/50'
        }`}
      >
        {/* Unit Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
          isComplete 
            ? 'bg-success/20 ring-2 ring-success/50' 
            : isLocked
              ? 'bg-muted'
              : 'bg-primary/20 ring-2 ring-primary/30'
        }`}>
          {isLocked ? (
            <Lock className="w-6 h-6 text-muted-foreground" />
          ) : isComplete ? (
            <Trophy className="w-6 h-6 text-success" />
          ) : (
            <span>{unit.icon}</span>
          )}
        </div>

        {/* Unit Info */}
        <div className="flex-1 text-left">
          <h3 className="font-bold text-foreground">{unit.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{completedCount}/{totalLessons} lições</span>
            {isComplete && (
              <CheckCircle className="w-4 h-4 text-success" />
            )}
          </div>
          
          {/* Progress bar */}
          {!isLocked && progress > 0 && (
            <div className="mt-2 progress-bar h-1.5">
              <div 
                className={`h-full rounded-full transition-all ${
                  isComplete ? 'bg-success' : 'progress-fill'
                }`}
                style={{ width: `${progress}%` }} 
              />
            </div>
          )}
        </div>

        {/* Chevron */}
        {!isLocked && (
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        )}
      </button>

      {/* Lessons List */}
      {isOpen && !isLocked && (
        <div className="px-4 pb-4 space-y-2 animate-accordion-down">
          {unit.lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              progress={getLessonProgress(lesson.id)}
              isCompleted={completedLessons.includes(lesson.id)}
              onClick={() => onStartLesson(lesson.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

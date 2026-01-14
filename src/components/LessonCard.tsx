import { Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { Lesson } from '@/data/htmlLessons';

interface LessonCardProps {
  lesson: Lesson;
  progress: number;
  isCompleted: boolean;
  onClick: () => void;
}

export function LessonCard({ lesson, progress, isCompleted, onClick }: LessonCardProps) {
  const isLocked = !lesson.unlocked;

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`lesson-card w-full text-left relative overflow-hidden group ${
        isLocked ? 'opacity-50 cursor-not-allowed' : ''
      } ${isCompleted ? 'border-success/30' : ''}`}
    >
      {/* Background glow effect */}
      {!isLocked && !isCompleted && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      
      {isCompleted && (
        <div className="absolute inset-0 bg-gradient-to-r from-success/5 to-transparent" />
      )}

      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
          isCompleted 
            ? 'bg-success/20 ring-2 ring-success/50' 
            : isLocked 
              ? 'bg-muted' 
              : 'bg-primary/20 ring-2 ring-primary/30'
        }`}>
          {isLocked ? (
            <Lock className="w-6 h-6 text-muted-foreground" />
          ) : isCompleted ? (
            <CheckCircle className="w-7 h-7 text-success" />
          ) : (
            <span>{lesson.icon}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{lesson.title}</h3>
          <p className="text-sm text-muted-foreground truncate">{lesson.description}</p>
          
          {/* Progress bar */}
          {!isLocked && progress > 0 && !isCompleted && (
            <div className="mt-2 progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          )}
        </div>

        {/* Arrow */}
        {!isLocked && (
          <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
            isCompleted ? 'text-success' : 'text-muted-foreground'
          }`} />
        )}
      </div>
    </button>
  );
}

import { useState, useEffect } from 'react';
import { Trophy, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Lesson } from '@/data/htmlLessons';

interface LessonCompleteProps {
  lesson: Lesson;
  xpEarned: number;
  onContinue: () => void;
}

export function LessonComplete({ lesson, xpEarned, onContinue }: LessonCompleteProps) {
  const [showContent, setShowContent] = useState(false);
  const [showStars, setShowStars] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowStars([true, false, false]), 600);
    setTimeout(() => setShowStars([true, true, false]), 800);
    setTimeout(() => setShowStars([true, true, true]), 1000);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-xp rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center transition-all duration-500 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Trophy */}
        <div className="mb-6 animate-celebrate">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-xp/20 ring-4 ring-xp/30 animate-pulse-glow">
            <Trophy className="w-12 h-12 text-xp" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-3 mb-6">
          {showStars.map((show, i) => (
            <Star
              key={i}
              className={`w-10 h-10 transition-all duration-300 ${
                show 
                  ? 'text-xp fill-xp scale-100 opacity-100' 
                  : 'text-muted scale-50 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Lição Concluída!</h1>
        <p className="text-muted-foreground text-lg mb-8">{lesson.title}</p>

        {/* XP earned */}
        <div className="glass-card p-6 mb-8 inline-block">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">XP Conquistado</p>
              <p className="text-2xl font-bold text-gradient">+{xpEarned}</p>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <Button
          onClick={onContinue}
          className="w-full max-w-xs h-14 text-lg font-bold gradient-primary glow-primary rounded-xl hover:opacity-90 transition-all"
        >
          Continuar Aprendendo
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

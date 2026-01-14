import { Heart, Zap, Flame } from 'lucide-react';

interface HeaderProps {
  hearts: number;
  maxHearts: number;
  xp: number;
  streak: number;
}

export function Header({ hearts, maxHearts, xp, streak }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0 px-4 py-3">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">{'</>'}</span>
          <span className="font-bold text-lg text-foreground">CodePlay</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Streak */}
          {streak > 0 && (
            <div className="flex items-center gap-1 text-warning">
              <Flame className="w-5 h-5 fill-warning" />
              <span className="font-bold text-sm">{streak}</span>
            </div>
          )}
          
          {/* XP */}
          <div className="xp-badge flex items-center gap-1">
            <Zap className="w-4 h-4" />
            <span>{xp}</span>
          </div>
          
          {/* Hearts */}
          <div className="flex items-center gap-1">
            {Array.from({ length: maxHearts }).map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 transition-all ${
                  i < hearts
                    ? 'heart-icon fill-heart'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

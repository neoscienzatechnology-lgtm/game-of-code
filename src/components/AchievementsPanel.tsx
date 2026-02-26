import { ACHIEVEMENTS } from '@/lib/achievements';
import { UserAchievement } from '@/types/achievements';
import { Sparkles, Flame, CheckCircle2, Moon, Sun, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Flame,
    CheckCircle2,
    Moon,
    Sun,
};

interface AchievementsPanelProps {
    unlocked: UserAchievement[];
}

export function AchievementsPanel({ unlocked }: AchievementsPanelProps) {
    const unlockedIds = new Set(unlocked.map((a) => a.achievement_id));

    return (
        <div className="glass-card flex flex-col p-6 h-full">
            <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-bold">Conquistas</h2>
                <span className="ml-auto text-sm font-medium text-muted-foreground">
                    {unlocked.length}/{ACHIEVEMENTS.length}
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((achievement) => {
                    const isUnlocked = unlockedIds.has(achievement.id);
                    const IconStyle = iconMap[achievement.icon] || Sparkles;

                    return (
                        <div
                            key={achievement.id}
                            className={cn(
                                'flex items-center gap-4 rounded-xl border p-4 transition-all',
                                isUnlocked
                                    ? 'bg-card border-border/50'
                                    : 'bg-muted/30 border-dashed opacity-60 grayscale'
                            )}
                        >
                            <div
                                className={cn(
                                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border',
                                    isUnlocked ? achievement.color : 'bg-muted border-border'
                                )}
                            >
                                {isUnlocked ? (
                                    <IconStyle className="h-6 w-6" />
                                ) : (
                                    <Lock className="h-5 w-5 text-muted-foreground" />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm">{achievement.title}</span>
                                <span className="text-xs text-muted-foreground">
                                    {achievement.description}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

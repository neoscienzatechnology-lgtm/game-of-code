import React from 'react';
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

const formatUnlockedAt = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

interface AchievementsPanelProps {
    unlocked: UserAchievement[];
}

export function AchievementsPanel({ unlocked }: AchievementsPanelProps) {
    const unlockedMap = new Map(unlocked.map((a) => [a.achievement_id, a]));

    return (
        <div className="flex h-full flex-col rounded-xl border border-border/40 bg-card/30 p-5">
            <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <h2 className="text-base font-bold text-foreground">Conquistas</h2>
                <span className="ml-auto text-xs font-medium text-muted-foreground">
                    {unlocked.length}/{ACHIEVEMENTS.length}
                </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {ACHIEVEMENTS.map((achievement) => {
                    const unlockedEntry = unlockedMap.get(achievement.id);
                    const isUnlocked = Boolean(unlockedEntry);
                    const IconStyle = iconMap[achievement.icon] || Sparkles;

                    return (
                        <div
                            key={achievement.id}
                            className={cn(
                                'flex items-center gap-3 rounded-lg border p-2.5 transition-all',
                                isUnlocked
                                    ? 'border-border/50 bg-card/60'
                                    : 'border-dashed border-border/40 bg-muted/20 opacity-60 grayscale'
                            )}
                        >
                            <div
                                className={cn(
                                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border',
                                    isUnlocked ? achievement.color : 'border-border bg-muted'
                                )}
                            >
                                {isUnlocked ? (
                                    <IconStyle className="h-4 w-4" />
                                ) : (
                                    <Lock className="h-4 w-4 text-muted-foreground" />
                                )}
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="truncate text-sm font-semibold">{achievement.title}</span>
                                <span className="text-[10px] leading-tight text-muted-foreground">
                                    {achievement.description}
                                </span>
                                {isUnlocked && unlockedEntry?.unlocked_at && (
                                    <span className="mt-0.5 text-[9px] text-muted-foreground/70">
                                        Desbloqueado em {formatUnlockedAt(unlockedEntry.unlocked_at)}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

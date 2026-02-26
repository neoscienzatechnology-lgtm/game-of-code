import { AchievementDefinition } from '../types/achievements';
import { UserStats, UserProgress, AttemptLogEntry } from '../types/learning';

export const ACHIEVEMENTS: AchievementDefinition[] = [
    {
        id: 'first_blood',
        title: 'Primeiro Passo',
        description: 'Complete seu primeiro exercício.',
        icon: 'Sparkles',
        color: 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/40',
        condition: (_, __, attemptLog) => attemptLog.some(log => log.correct),
    },
    {
        id: 'streak_3',
        title: 'Em Chamas',
        description: 'Alcance 3 dias de ofensiva.',
        icon: 'Flame',
        color: 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/40',
        condition: (userStats) => (userStats?.streak_days || 0) >= 3,
    },
    {
        id: 'perfect_review',
        title: 'Revisão Perfeita',
        description: 'Acerte 5 exercícios seguidos sem errar.',
        icon: 'CheckCircle2',
        color: 'bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/40',
        condition: (_, __, attemptLog) => {
            let streak = 0;
            for (const log of attemptLog) {
                if (log.correct) {
                    streak++;
                    if (streak >= 5) return true;
                } else {
                    streak = 0;
                }
            }
            return false;
        },
    },
    {
        id: 'night_owl',
        title: 'Coruja',
        description: 'Complete uma lição entre meia-noite e 4h da manhã.',
        icon: 'Moon',
        color: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/40',
        condition: (_, __, attemptLog) => attemptLog.some(log => {
            if (!log.correct) return false;
            const hour = new Date(log.created_at).getHours();
            return hour >= 0 && hour < 4;
        }),
    },
    {
        id: 'early_bird',
        title: 'Madrugador',
        description: 'Complete uma lição entre 5h e 8h da manhã.',
        icon: 'Sun',
        color: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40',
        condition: (_, __, attemptLog) => attemptLog.some(log => {
            if (!log.correct) return false;
            const hour = new Date(log.created_at).getHours();
            return hour >= 5 && hour < 8;
        }),
    },
];

export function checkAchievements(
    userId: string,
    userStats: UserStats | undefined,
    userProgress: UserProgress[],
    attemptLog: AttemptLogEntry[],
    currentAchievements: import('../types/achievements').UserAchievement[] = []
): import('../types/achievements').UserAchievement[] {
    const newAchievements = [...currentAchievements];
    let changed = false;

    for (const achievement of ACHIEVEMENTS) {
        const alreadyUnlocked = newAchievements.some(a => a.achievement_id === achievement.id);
        if (!alreadyUnlocked) {
            if (achievement.condition(userStats, userProgress, attemptLog)) {
                newAchievements.push({
                    achievement_id: achievement.id,
                    unlocked_at: new Date().toISOString(),
                });
                changed = true;
            }
        }
    }

    return changed ? newAchievements : currentAchievements;
}

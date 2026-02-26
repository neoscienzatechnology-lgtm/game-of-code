export interface AchievementDefinition {
    id: string;
    title: string;
    description: string;
    icon: string; // The lucide-react icon name or a custom identifier
    color: string; // Tailwind color class or hex
    condition: (userStats: any, userProgress: any[], attemptLog: any[]) => boolean;
}

export interface UserAchievement {
    achievement_id: string;
    unlocked_at: string;
}

import { AlertTriangle, BarChart3, GraduationCap, ShieldCheck, Trophy, Users } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

const ADMIN_MODE_KEY = 'teacher-mode-enabled';

export default function Admin() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loading,
    lessons,
    exercises,
    progressByExercise,
    conceptProgress,
    leaderboard,
    ensureAllModulesLoaded,
  } = useLearningData(user?.id);

  const [teacherMode, setTeacherMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(ADMIN_MODE_KEY) === '1';
  });

  useEffect(() => {
    void ensureAllModulesLoaded();
  }, [ensureAllModulesLoaded]);

  const isAdminByEmail = Boolean(
    user?.email && /@neoscienzatechnology|@admin/i.test(user.email)
  );
  const canAccess = teacherMode || isAdminByEmail;

  const lessonsAtRisk = useMemo(() => {
    const lessonById = new Map(lessons.map(lesson => [lesson.id, lesson]));
    const rows = lessons.map(lesson => {
      const lessonExercises = exercises.filter(exercise => exercise.lesson_id === lesson.id);
      let correct = 0;
      let wrong = 0;
      for (const exercise of lessonExercises) {
        const progress = progressByExercise[exercise.id];
        if (!progress) continue;
        correct += progress.total_correct;
        wrong += progress.total_wrong ?? (progress.last_result === 'wrong' ? 1 : 0);
      }
      const attempts = correct + wrong;
      const errorRate = attempts > 0 ? wrong / attempts : 0;
      return {
        lessonId: lesson.id,
        lessonTitle: lessonById.get(lesson.id)?.title ?? lesson.id,
        attempts,
        errorRate,
      };
    });

    return rows
      .filter(item => item.attempts > 0)
      .sort((a, b) => {
        if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
        return b.attempts - a.attempts;
      })
      .slice(0, 10);
  }, [exercises, lessons, progressByExercise]);

  const lowConceptAccuracy = useMemo(
    () =>
      [...conceptProgress]
        .filter(item => item.total > 0)
        .sort((a, b) => a.accuracy - b.accuracy)
        .slice(0, 10),
    [conceptProgress]
  );

  if (loading) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card p-6 text-muted-foreground">Carregando painel do professor...</div>
      </div>
    );
  }

  if (!canAccess) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-xl space-y-4 p-8 text-center">
          <div className="hero-kicker mx-auto w-fit">
            <ShieldCheck className="mr-2 h-3.5 w-3.5" />
            Modo professor
          </div>
          <h1 className="text-2xl font-bold">Acesso ao painel pedagógico</h1>
          <p className="text-muted-foreground">
            Ative o modo professor local para revisar erros, precisão por conceito e evolução semanal.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              className="gradient-primary text-primary-foreground"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.setItem(ADMIN_MODE_KEY, '1');
                }
                setTeacherMode(true);
              }}
            >
              Ativar modo professor
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')}>
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <main className="page-content max-w-5xl">
        <section className="glass-card space-y-5 p-8">
          <div className="hero-kicker w-fit">
            <GraduationCap className="mr-2 h-3.5 w-3.5" />
            Painel do professor
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">Diagnóstico pedagógico da turma local</h1>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="stat-tile">
              <Users className="mx-auto mb-1 h-4 w-4 text-primary" />
              <span className="stat-value">{leaderboard.length}</span>
              <span className="block text-[11px] text-muted-foreground">Alunos ativos (semana)</span>
            </div>
            <div className="stat-tile">
              <AlertTriangle className="mx-auto mb-1 h-4 w-4 text-warning" />
              <span className="stat-value">{lessonsAtRisk.length}</span>
              <span className="block text-[11px] text-muted-foreground">Lições críticas</span>
            </div>
            <div className="stat-tile">
              <BarChart3 className="mx-auto mb-1 h-4 w-4 text-success" />
              <span className="stat-value">{lowConceptAccuracy.length}</span>
              <span className="block text-[11px] text-muted-foreground">Conceitos monitorados</span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <h2 className="mb-3 text-sm font-semibold">Lições com maior taxa de erro</h2>
              <div className="space-y-2">
                {lessonsAtRisk.map(item => (
                  <div
                    key={item.lessonId}
                    className="rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-xs"
                  >
                    <p className="font-semibold text-foreground">{item.lessonTitle}</p>
                    <p className="text-muted-foreground">
                      Taxa de erro: {Math.round(item.errorRate * 100)}% | Tentativas: {item.attempts}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <h2 className="mb-3 text-sm font-semibold">Conceitos com menor acerto</h2>
              <div className="space-y-2">
                {lowConceptAccuracy.map(item => (
                  <div
                    key={item.concept}
                    className="rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-xs"
                  >
                    <p className="font-semibold text-foreground">{item.concept}</p>
                    <p className="text-muted-foreground">
                      Acurácia: {Math.round(item.accuracy * 100)}% | Devidos: {item.due}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Trophy className="h-4 w-4 text-xp" />
              Ranking semanal
            </h2>
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div
                  key={`${entry.userId}-${index}`}
                  className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-sm"
                >
                  <span className="font-semibold">
                    #{index + 1} {entry.label}
                  </span>
                  <span className="text-xp">{entry.xp} XP</span>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end">
            <Button variant="secondary" onClick={() => navigate('/')}>
              Voltar ao início
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

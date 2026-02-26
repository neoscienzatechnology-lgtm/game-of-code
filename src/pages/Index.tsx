import { BrainCircuit, Clock3, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LearningPanel } from '@/components/LearningPanel';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AchievementsPanel } from '@/components/AchievementsPanel';

const highlights = [
  {
    icon: Target,
    title: 'Trilhas objetivas',
    description: 'Lições curtas para manter ritmo diário sem sobrecarga.',
  },
  {
    icon: BrainCircuit,
    title: 'Repetição inteligente',
    description: 'Revisões automáticas para fixar o que já foi estudado.',
  },
  {
    icon: Clock3,
    title: 'Sessões rápidas',
    description: 'Aprenda em blocos de 15 a 60 segundos no celular ou desktop.',
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { dueExercises, achievements, progressByExercise } = useLearningData(user?.id);
  const isNewUser = achievements.length === 0 && Object.keys(progressByExercise).length === 0;

  return (
    <div className="page-shell">
      <header className="flex w-full justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="page-content">
        <div className="relative mb-8 w-full overflow-hidden rounded-2xl border border-border/40 bg-black/50 h-32 sm:h-48">
          <img
            src="/images/dashboard_hero_3d.png"
            alt="Dashboard"
            className="h-full w-full object-cover opacity-75 mix-blend-screen transition-opacity duration-700 hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 pointer-events-none">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Sua Jornada</h1>
            <p className="text-xs sm:text-sm text-foreground/80">Continue dominando código de forma inteligente.</p>
          </div>
        </div>

        {dueExercises.length > 0 && (
          <section className="glass-card mb-6 animate-slide-up p-5 md:p-6">
            <div className="hero-kicker">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Revisão diária automática
            </div>
            <h2 className="text-xl font-bold md:text-2xl">
              Você tem {dueExercises.length} questões para revisar hoje
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A fila diária (3 a 5 questões) foi montada automaticamente para reforçar os pontos
              mais fracos e manter retenção alta.
            </p>
            <Button
              className="gradient-primary mt-4 text-primary-foreground"
              onClick={() => navigate('/review')}
            >
              Iniciar revisão do dia
            </Button>
          </section>
        )}

        {isNewUser && (
          <section className="hero-card animate-slide-up">
            <div className="hero-kicker">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Game of Code
            </div>
            <h1 className="hero-title">Aprenda HTML, CSS e JavaScript com clareza e prática diária</h1>
            <p className="hero-description">
              Seu painel de estudo agora está mais visual, com foco em progresso real: lições desbloqueáveis,
              exercícios guiados e revisão contínua dos pontos fracos.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {highlights.map(item => (
                <article key={item.title} className="feature-chip">
                  <item.icon className="mb-2 h-4 w-4 text-primary" />
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mx-auto max-w-5xl mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 w-full">
            <LearningPanel />
          </div>
          <div className="lg:col-span-1 w-full">
            <AchievementsPanel unlocked={achievements} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

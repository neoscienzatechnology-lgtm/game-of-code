import { BrainCircuit, Clock3, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LearningPanel } from '@/components/LearningPanel';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

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
  const { dueExercises } = useLearningData(user?.id);

  return (
    <div className="page-shell">
      <main className="page-content">
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

      <div className="mx-auto max-w-3xl">
        <LearningPanel />
      </div>
      </main>
    </div>
  );
};

export default Index;

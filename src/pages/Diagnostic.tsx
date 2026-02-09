import { CheckCircle2, ClipboardList, Gauge, RotateCcw, Target } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';

const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function Diagnostic() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loading,
    modules,
    moduleDiagnostics,
    ensureModuleLoaded,
    getDiagnosticQuestions,
    saveDiagnostic,
  } = useLearningData(user?.id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [retakeMode, setRetakeMode] = useState(false);

  useEffect(() => {
    if (!moduleId) return;
    void ensureModuleLoaded(moduleId);
  }, [ensureModuleLoaded, moduleId]);

  const module = useMemo(
    () => modules.find(item => item.id === moduleId) ?? null,
    [moduleId, modules]
  );

  const questions = useMemo(
    () => (moduleId ? getDiagnosticQuestions(moduleId, 5) : []),
    [getDiagnosticQuestions, moduleId]
  );

  const diagnostic = moduleId ? moduleDiagnostics[moduleId] : null;
  const question = questions[currentIndex];
  const selected = question ? answers[question.id] : '';

  const results = useMemo(() => {
    if (!questions.length) {
      return {
        correct: 0,
        total: 0,
        score: 0,
        masteredLessonIds: [] as string[],
      };
    }

    const masteredLessonIds: string[] = [];
    let correct = 0;

    for (const item of questions) {
      const answer = answers[item.id];
      const isCorrect = normalize(answer || '') === normalize(item.answer);
      if (isCorrect) {
        correct += 1;
        masteredLessonIds.push(item.lesson_id);
      }
    }

    return {
      correct,
      total: questions.length,
      score: correct / questions.length,
      masteredLessonIds: Array.from(new Set(masteredLessonIds)),
    };
  }, [answers, questions]);

  const finalizeDiagnostic = () => {
    if (!moduleId || !questions.length) return;

    saveDiagnostic({
      moduleId,
      score: results.score,
      questionCount: questions.length,
      masteredLessonIds: results.masteredLessonIds,
    });
    setRetakeMode(false);
    setFinished(true);
  };

  if (loading) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card p-6 text-muted-foreground">Preparando seu diagnóstico...</div>
      </div>
    );
  }

  if (!moduleId || !module) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-lg space-y-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Módulo não encontrado</h1>
          <Button onClick={() => navigate('/')}>Voltar para a trilha</Button>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-xl space-y-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Diagnóstico indisponível</h1>
          <p className="text-muted-foreground">
            Este módulo ainda não possui perguntas teóricas suficientes para gerar um diagnóstico
            confiável.
          </p>
          <Button onClick={() => navigate('/')}>Voltar para a trilha</Button>
        </div>
      </div>
    );
  }

  if (finished || (!retakeMode && diagnostic)) {
    const currentResult = finished
      ? {
          score: results.score,
          question_count: results.total,
          recommended_lesson_id: moduleDiagnostics[moduleId ?? '']?.recommended_lesson_id ?? null,
        }
      : diagnostic;

    const scorePercent = Math.round((currentResult?.score ?? 0) * 100);
    const recommendedLesson = currentResult?.recommended_lesson_id;

    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-2xl space-y-5 p-8">
          <div className="hero-kicker w-fit">
            <CheckCircle2 className="mr-2 h-3.5 w-3.5" />
            Diagnóstico concluído
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Seu ponto de partida no módulo {module.title}
          </h1>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="stat-tile">
              <Gauge className="mx-auto mb-1 h-4 w-4 text-primary" />
              <span className="stat-value">{scorePercent}%</span>
              <span className="block text-[11px] text-muted-foreground">Acertos</span>
            </div>
            <div className="stat-tile">
              <ClipboardList className="mx-auto mb-1 h-4 w-4 text-primary" />
              <span className="stat-value">{currentResult?.question_count ?? 0}</span>
              <span className="block text-[11px] text-muted-foreground">Questões</span>
            </div>
            <div className="stat-tile">
              <Target className="mx-auto mb-1 h-4 w-4 text-primary" />
              <span className="stat-value">
                {recommendedLesson ? 'Definido' : 'Revisar base'}
              </span>
              <span className="block text-[11px] text-muted-foreground">Recomendação</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Seu resultado foi salvo. A trilha será ajustada para reforçar lacunas sem pular
            fundamentos. Você pode refazer este diagnóstico quando quiser.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {recommendedLesson ? (
              <Button
                onClick={() => navigate(`/lesson/${recommendedLesson}`)}
                className="gradient-primary text-primary-foreground"
              >
                Abrir lição recomendada
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/')}
                className="gradient-primary text-primary-foreground"
              >
                Voltar para a trilha
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={() => {
                setRetakeMode(true);
                setFinished(false);
                setCurrentIndex(0);
                setAnswers({});
              }}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Refazer diagnóstico
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell flex items-center justify-center">
      <div className="glass-card max-w-2xl space-y-5 p-8">
        <div className="hero-kicker w-fit">
          <ClipboardList className="mr-2 h-3.5 w-3.5" />
          Diagnóstico inicial
        </div>
        <h1 className="text-2xl font-bold md:text-3xl">{module.title}</h1>
        <p className="text-sm text-muted-foreground">
          Responda {questions.length} questões de múltipla escolha. Elas medem o que você já domina
          para priorizar lacunas sem comprometer a base.
        </p>

        <div className="glass-card p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Questão {currentIndex + 1} de {questions.length}
          </p>
          <h2 className="text-lg font-semibold">{question.prompt}</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Conceito avaliado: {question.lesson_title}
          </p>

          <div className="mt-4 grid gap-2">
            {question.options.map(option => {
              const isSelected = normalize(selected || '') === normalize(option);
              return (
                <Button
                  key={option}
                  variant={isSelected ? 'default' : 'secondary'}
                  className="h-auto justify-start whitespace-normal px-4 py-3 text-left"
                  onClick={() =>
                    setAnswers(prev => ({
                      ...prev,
                      [question.id]: option,
                    }))
                  }
                >
                  {option}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            variant="secondary"
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
          >
            Anterior
          </Button>
          <Button
            onClick={() => {
              if (currentIndex === questions.length - 1) {
                finalizeDiagnostic();
              } else {
                setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
              }
            }}
            className="gradient-primary text-primary-foreground"
            disabled={!selected}
          >
            {currentIndex === questions.length - 1 ? 'Concluir diagnóstico' : 'Próxima questão'}
          </Button>
        </div>
      </div>
    </div>
  );
}

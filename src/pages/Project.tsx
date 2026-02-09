import { CheckSquare, ClipboardCheck, ExternalLink, GraduationCap, Save } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLearningData } from '@/hooks/useLearningData';
import { getModuleProject } from '@/lib/learningDb';
import { getModuleProjectTemplate } from '@/lib/moduleProjects';

export default function Project() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loading, modules, ensureModuleLoaded, saveProject } = useLearningData(user?.id);

  const template = useMemo(
    () => (moduleId ? getModuleProjectTemplate(moduleId) : null),
    [moduleId]
  );

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    if (!moduleId) return;
    void ensureModuleLoaded(moduleId);
  }, [ensureModuleLoaded, moduleId]);

  useEffect(() => {
    if (!moduleId || !template) return;
    const existing = getModuleProject(moduleId, user?.id);
    if (!existing) {
      const initialChecked = template.checklist.reduce<Record<string, boolean>>((acc, item) => {
        acc[item.id] = false;
        return acc;
      }, {});
      setChecked(initialChecked);
      setNotes('');
      setProjectUrl('');
      setSavedAt(null);
      return;
    }

    const existingChecked = template.checklist.reduce<Record<string, boolean>>((acc, item) => {
      const match = existing.checklist.find(entry => entry.id === item.id);
      acc[item.id] = Boolean(match?.checked);
      return acc;
    }, {});
    setChecked(existingChecked);
    setNotes(existing.notes ?? '');
    setProjectUrl(existing.project_url ?? '');
    setSavedAt(existing.submitted_at);
  }, [moduleId, template, user?.id]);

  const module = useMemo(
    () => modules.find(item => item.id === moduleId) ?? null,
    [moduleId, modules]
  );

  const score = useMemo(() => {
    if (!template) return 0;
    return template.checklist.reduce((sum, item) => {
      if (checked[item.id]) return sum + item.weight;
      return sum;
    }, 0);
  }, [checked, template]);

  if (loading) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card p-6 text-muted-foreground">Carregando projeto...</div>
      </div>
    );
  }

  if (!moduleId || !module || !template) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="glass-card max-w-lg space-y-4 p-8 text-center">
          <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
          <Button onClick={() => navigate('/')}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <main className="page-content max-w-4xl">
        <section className="glass-card space-y-5 p-8">
          <div className="hero-kicker w-fit">
            <GraduationCap className="mr-2 h-3.5 w-3.5" />
            Projeto final
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">{template.title}</h1>
          <p className="text-muted-foreground">{template.summary}</p>

          <div className="rounded-xl border border-border/60 bg-muted/25 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Entregável
            </p>
            <p className="text-sm">{template.deliverable}</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {template.checklist.map(item => (
              <label
                key={item.id}
                className="flex cursor-pointer gap-3 rounded-xl border border-border/60 bg-card/45 p-3 transition-all hover:border-primary/45"
              >
                <input
                  type="checkbox"
                  checked={Boolean(checked[item.id])}
                  onChange={event =>
                    setChecked(prev => ({
                      ...prev,
                      [item.id]: event.target.checked,
                    }))
                  }
                  className="mt-1 h-4 w-4 rounded border-border text-primary"
                />
                <div>
                  <p className="font-semibold">
                    {item.label} <span className="text-xs text-primary">({item.weight} pts)</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                URL do projeto (opcional)
              </label>
              <input
                value={projectUrl}
                onChange={event => setProjectUrl(event.target.value)}
                className="w-full rounded-xl border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="https://..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Notas de implementação
              </label>
              <textarea
                value={notes}
                onChange={event => setNotes(event.target.value)}
                className="min-h-[84px] w-full rounded-xl border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="Explique decisões, melhorias e pontos pendentes."
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="stat-tile">
              <ClipboardCheck className="mx-auto mb-1 h-4 w-4 text-primary" />
              <span className="stat-value">{score}</span>
              <span className="block text-[11px] text-muted-foreground">Pontuação</span>
            </div>
            <div className="stat-tile">
              <CheckSquare className="mx-auto mb-1 h-4 w-4 text-success" />
              <span className="stat-value">
                {template.checklist.filter(item => checked[item.id]).length}/{template.checklist.length}
              </span>
              <span className="block text-[11px] text-muted-foreground">Itens marcados</span>
            </div>
            <div className="stat-tile">
              <ExternalLink className="mx-auto mb-1 h-4 w-4 text-primary-alt" />
              <span className="text-xs font-semibold text-foreground">
                {savedAt ? 'Salvo' : 'Pendente'}
              </span>
              <span className="block text-[11px] text-muted-foreground">
                {savedAt ? new Date(savedAt).toLocaleDateString('pt-BR') : 'Sem envio'}
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              className="gradient-primary text-primary-foreground"
              onClick={() => {
                saveProject({
                  moduleId,
                  score,
                  checklist: template.checklist.map(item => ({
                    id: item.id,
                    checked: Boolean(checked[item.id]),
                  })),
                  notes,
                  projectUrl,
                });
                setSavedAt(new Date().toISOString());
              }}
            >
              <Save className="mr-2 h-4 w-4" />
              Salvar avaliação
            </Button>
            <Button variant="secondary" onClick={() => navigate('/')}>
              Voltar ao início
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}


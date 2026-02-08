import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';

const points = [
  'Seu progresso fica salvo automaticamente.',
  'XP e streak sincronizados na sua conta.',
  'Revisões inteligentes por conceito.',
];

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error ?? 'Falha no login.');
      return;
    }
    navigate('/');
  };

  return (
    <div className="page-shell">
      <main className="page-content flex min-h-[82vh] items-center justify-center">
        <div className="grid w-full max-w-4xl gap-4 md:grid-cols-[1fr_420px]">
          <section className="glass-card hidden p-7 md:block">
            <div className="hero-kicker mb-3 w-fit">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Área do aluno
            </div>
            <h1 className="text-3xl font-bold leading-tight">
              Continue sua trilha sem perder progresso
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Entre para retomar suas lições de onde parou e manter o ritmo de estudos todos os dias.
            </p>

            <div className="mt-6 space-y-3">
              {points.map(point => (
                <div key={point} className="feature-chip flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-7">
            <div className="mb-6">
              <div className="hero-kicker mb-3 w-fit">
                <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                Login seguro
              </div>
              <h2 className="text-2xl font-bold">Entrar</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Acesse sua conta para salvar o progresso.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  placeholder="********"
                  required
                />
              </div>

              {error && <p className="rounded-lg bg-error/15 px-3 py-2 text-sm text-error">{error}</p>}

              <Button
                type="submit"
                className="gradient-primary h-12 w-full font-semibold text-primary-foreground glow-primary"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <p className="mt-5 text-center text-sm text-muted-foreground">
              Ainda não tem conta?{' '}
              <Link to="/signup" className="font-semibold text-primary hover:underline">
                Criar conta
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

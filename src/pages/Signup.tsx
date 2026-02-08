import { CheckCircle2, Sparkles, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';

const benefits = [
  'Acompanhamento de progresso por módulo.',
  'Sequência de estudos com proteção semanal.',
  'Plano de revisão focado no que você erra mais.',
];

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    const result = await signup(name, email, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error ?? 'Falha no cadastro.');
      return;
    }
    if (result.needsEmailConfirmation) {
      setNotice(result.message ?? 'Conta criada. Verifique seu e-mail para confirmar o acesso.');
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
              Comece agora
            </div>
            <h1 className="text-3xl font-bold leading-tight">
              Crie sua conta e desbloqueie sua trilha completa
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Em poucos passos você já entra no ambiente de estudo, com progresso salvo e rotina
              de revisão automática.
            </p>

            <div className="mt-6 space-y-3">
              {benefits.map(item => (
                <div key={item} className="feature-chip flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-7">
            <div className="mb-6">
              <div className="hero-kicker mb-3 w-fit">
                <UserPlus className="mr-2 h-3.5 w-3.5" />
                Novo cadastro
              </div>
              <h2 className="text-2xl font-bold">Criar conta</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Cadastre-se para salvar seu progresso.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>

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
                  placeholder="Crie uma senha"
                  required
                />
              </div>

              {error && <p className="rounded-lg bg-error/15 px-3 py-2 text-sm text-error">{error}</p>}
              {notice && <p className="rounded-lg bg-success/15 px-3 py-2 text-sm text-success">{notice}</p>}

              <Button
                type="submit"
                className="gradient-primary h-12 w-full font-semibold text-primary-foreground glow-primary"
                disabled={loading}
              >
                {loading ? 'Criando...' : 'Criar conta'}
              </Button>
            </form>

            <p className="mt-5 text-center text-sm text-muted-foreground">
              Já possui conta?{' '}
              <Link to="/login" className="font-semibold text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

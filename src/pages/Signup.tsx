import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-8 max-w-md w-full space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Criar conta</h1>
          <p className="text-sm text-muted-foreground">
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

          {error && <p className="text-sm text-error">{error}</p>}
          {notice && <p className="text-sm text-success">{notice}</p>}

          <Button
            type="submit"
            className="w-full h-12 gradient-primary glow-primary font-semibold"
            disabled={loading}
          >
            {loading ? 'Criando...' : 'Criar conta'}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center">
          Já possui conta?{' '}
          <Link to="/login" className="text-primary font-semibold">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}

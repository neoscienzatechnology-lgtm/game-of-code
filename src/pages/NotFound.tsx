import { Compass } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="page-shell flex items-center justify-center">
      <div className="glass-card w-full max-w-lg p-8 text-center">
        <div className="hero-kicker mx-auto w-fit">
          <Compass className="mr-2 h-3.5 w-3.5" />
          Rota inválida
        </div>
        <h1 className="mt-2 text-5xl font-extrabold text-gradient">404</h1>
        <p className="mt-2 text-lg font-semibold">Página não encontrada</p>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço <code>{location.pathname}</code> não existe neste projeto.
        </p>
        <Link to="/" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

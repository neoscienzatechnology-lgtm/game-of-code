import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { hasSupabaseEnv, supabase } from '@/lib/supabaseClient';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface AuthResult {
  ok: boolean;
  error?: string;
  message?: string;
  needsEmailConfirmation?: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  signup: (name: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const displayNameForUser = (user: User) => {
  const metadata = user.user_metadata ?? {};
  const rawName =
    (typeof metadata.name === 'string' && metadata.name) ||
    (typeof metadata.full_name === 'string' && metadata.full_name) ||
    '';
  if (rawName.trim()) return rawName.trim();
  const email = user.email ?? '';
  if (email) return email.split('@')[0];
  return 'Usuario';
};

const mapAuthUser = (user: User | null): AuthUser | null => {
  if (!user) return null;
  return {
    id: user.id,
    name: displayNameForUser(user),
    email: user.email ?? '',
    createdAt: user.created_at ?? new Date().toISOString(),
  };
};

const formatAuthError = (message?: string) => {
  const normalized = (message ?? '').toLowerCase();
  if (normalized.includes('invalid login credentials')) {
    return 'Email ou senha incorretos.';
  }
  if (normalized.includes('email not confirmed')) {
    return 'Confirme seu email antes de entrar.';
  }
  if (normalized.includes('already registered') || normalized.includes('user already')) {
    return 'Email ja cadastrado.';
  }
  if (normalized.includes('signup') && normalized.includes('not allowed')) {
    return 'Cadastro desativado no momento.';
  }
  if (normalized.includes('password')) {
    return 'Senha invalida.';
  }
  if (normalized.includes('email')) {
    return 'Email invalido.';
  }
  return 'Falha na autenticacao.';
};

const ensureSupabase = (): AuthResult | null => {
  if (!hasSupabaseEnv || !supabase) {
    return {
      ok: false,
      error: 'Supabase não configurado. Informe as chaves do projeto Lovable.',
    };
  }
  return null;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadSession = async () => {
      if (!supabase) {
        if (active) setLoading(false);
        return;
      }
      const { data, error } = await supabase.auth.getSession();
      if (!active) return;
      if (error) {
        console.warn('Supabase session error:', error.message);
      }
      setUser(mapAuthUser(data.session?.user ?? null));
      setLoading(false);
    };

    loadSession();

    if (!supabase) {
      return () => {
        active = false;
      };
    }

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(mapAuthUser(session?.user ?? null));
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const missing = ensureSupabase();
    if (missing) return missing;

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      return { ok: false, error: 'Informe um email valido.' };
    }
    if (!password) {
      return { ok: false, error: 'Informe sua senha.' };
    }

    try {
      const { data, error } = await supabase!.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });
      if (error) {
        return { ok: false, error: formatAuthError(error.message) };
      }
      setUser(mapAuthUser(data.user ?? null));
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: formatAuthError(error instanceof Error ? error.message : undefined),
      };
    }
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    const missing = ensureSupabase();
    if (missing) return missing;

    const normalizedEmail = email.trim().toLowerCase();
    if (!name.trim()) {
      return { ok: false, error: 'Informe seu nome.' };
    }
    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      return { ok: false, error: 'Informe um email valido.' };
    }
    if (password.length < 6) {
      return { ok: false, error: 'A senha deve ter pelo menos 6 caracteres.' };
    }

    try {
      const { data, error } = await supabase!.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          data: {
            name: name.trim(),
          },
        },
      });

      if (error) {
        return { ok: false, error: formatAuthError(error.message) };
      }

      if (!data.session) {
        return {
          ok: true,
          needsEmailConfirmation: true,
          message: 'Conta criada. Verifique seu email para confirmar o acesso.',
        };
      }

      setUser(mapAuthUser(data.user ?? null));
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: formatAuthError(error instanceof Error ? error.message : undefined),
      };
    }
  }, []);

  const logout = useCallback(() => {
    if (supabase) {
      void supabase.auth.signOut();
    }
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      signup,
      logout,
    }),
    [user, loading, login, signup, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

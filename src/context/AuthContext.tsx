import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface StoredUser extends AuthUser {
  passwordHash: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const USERS_KEY = 'auth-users';
const SESSION_KEY = 'auth-session';

const loadUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
};

const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const saveSession = (user: AuthUser | null) => {
  if (!user) {
    localStorage.removeItem(SESSION_KEY);
    return;
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

const loadSession = (): AuthUser | null => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
};

const hashPassword = async (password: string) => {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    return btoa(password);
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(loadSession());
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = loadUsers();
    const found = users.find(item => item.email === normalizedEmail);
    if (!found) {
      return { ok: false, error: 'Usuario nao encontrado.' };
    }

    const passwordHash = await hashPassword(password);
    if (passwordHash !== found.passwordHash) {
      return { ok: false, error: 'Senha incorreta.' };
    }

    const sessionUser: AuthUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      createdAt: found.createdAt,
    };
    setUser(sessionUser);
    saveSession(sessionUser);
    return { ok: true };
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
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

    const users = loadUsers();
    if (users.some(item => item.email === normalizedEmail)) {
      return { ok: false, error: 'Email ja cadastrado.' };
    }

    const passwordHash = await hashPassword(password);
    const now = new Date().toISOString();
    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      createdAt: now,
    };

    const nextUsers = [...users, newUser];
    saveUsers(nextUsers);

    const sessionUser: AuthUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    setUser(sessionUser);
    saveSession(sessionUser);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    saveSession(null);
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

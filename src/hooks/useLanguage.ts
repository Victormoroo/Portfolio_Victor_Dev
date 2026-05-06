import { createContext, useContext, useEffect, useState, useCallback, type ReactNode, createElement } from 'react';
import type { Language } from '@/data/content';

interface LanguageContextValue {
  lang: Language;
  toggle: () => void;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = 'vm-lang';

function readInitial(): Language {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === 'pt' || stored === 'en') return stored;
  return 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readInitial);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Language) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === 'pt' ? 'en' : 'pt')), []);

  return createElement(LanguageContext.Provider, { value: { lang, toggle, setLang } }, children);
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

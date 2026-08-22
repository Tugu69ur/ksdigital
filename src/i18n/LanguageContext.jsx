import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries } from '../data/content';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'ksdigital-lang';

function readStoredLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'mn' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale);

  const setLocale = (next) => {
    if (next !== 'en' && next !== 'mn') return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const dict = dictionaries[locale] || dictionaries.en;
    document.documentElement.lang = locale;
    document.title = dict.meta.title;
    const titleMeta = document.querySelector('meta[name="title"]');
    if (titleMeta) titleMeta.setAttribute('content', dict.meta.title);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dict.meta.description);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale] || dictionaries.en,
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

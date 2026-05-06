import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import I18N from './i18n';

const LangContext = createContext({ lang: 'ES', setLang: () => {}, t: I18N.ES });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('ES');

  useEffect(() => {
    const saved = localStorage.getItem('xona-lang');
    if (saved && I18N[saved]) {
      setLangState(saved);
      document.documentElement.lang = saved.toLowerCase();
    }
  }, []);

  const setLang = useCallback((l) => {
    if (!I18N[l]) return;
    setLangState(l);
    localStorage.setItem('xona-lang', l);
    document.documentElement.lang = l.toLowerCase();
  }, []);

  const t = I18N[lang] || I18N.ES;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

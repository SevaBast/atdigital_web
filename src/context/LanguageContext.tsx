import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { locales, type Lang, LANGUAGES } from "@/content/locales";
import type { SiteContent } from "@/content/types";

const STORAGE_KEY = "atdigital-lang";
const DEFAULT_LANG: Lang = "sk";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: SiteContent;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored in locales) return stored as Lang;
    return DEFAULT_LANG;
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  // Also persist on first render
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const content = locales[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, content, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

/** Returns the current language, setter, and the full content object */
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <LanguageProvider>");
  return ctx;
};

/** Shortcut — returns just the content for the active language */
export const useContent = (): SiteContent => {
  return useLanguage().content;
};

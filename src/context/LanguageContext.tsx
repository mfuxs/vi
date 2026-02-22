import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../data/translations.json';

type Language = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationMap = Record<string, string>;

const getTranslationByLanguage = (
  translations: TranslationMap,
  language: string,
): string | undefined => {
  // Primary lookup for exact language key.
  if (translations[language]) {
    return translations[language];
  }

  // Defensive fallback: some imported translation columns contain trailing
  // spaces (e.g. "de "), so we normalize lookup keys before giving up.
  const normalizedEntries = Object.entries(translations).map(([lang, value]) => [lang.trim(), value] as const);
  const normalized = Object.fromEntries(normalizedEntries) as TranslationMap;

  return normalized[language] || normalized.de;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialisiere mit 'de' oder gespeicherter Sprache
  const [language, setLanguage] = useState<Language>(localStorage.getItem('preferred_language') || 'de');

  useEffect(() => {
    localStorage.setItem('preferred_language', language);
  }, [language]);

  const t = (key: string): string => {
    const translations = (translationsData as Record<string, TranslationMap>)[key];
    if (!translations) {
      console.warn(`Translation key missing: ${key}`);
      return key;
    }

    return getTranslationByLanguage(translations, language) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../data/translations.json';

type Language = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialisiere mit 'de' oder gespeicherter Sprache
  const [language, setLanguage] = useState<Language>(localStorage.getItem('preferred_language') || 'de');

  useEffect(() => {
    localStorage.setItem('preferred_language', language);
  }, [language]);

  const t = (key: string): string => {
    const translations = (translationsData as any)[key];
    if (!translations) {
      console.warn(`Translation key missing: ${key}`);
      return key;
    }
    return translations[language] || translations['de'] || key;
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

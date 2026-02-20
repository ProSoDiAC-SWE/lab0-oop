import React, { createContext, useContext } from 'react';
import { translations } from '../locales/translations';

type Translations = typeof translations.it;

interface LanguageContextType {
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  t: translations.it,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageContext.Provider value={{ t: translations.it }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

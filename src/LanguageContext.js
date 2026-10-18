import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {}
});

export function LanguageProvider({ children }) {
  // Default to pure English ('en') as requested by the user
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (lang === 'en') {
      document.title = 'MSZ Construction | Bay Area Vertically Integrated Design, Factory & Build';
      document.documentElement.lang = 'en';
    } else {
      document.title = 'MSZ Construction | 深耕湾区20余年 · 设计、工厂、施工全自营建筑总包';
      document.documentElement.lang = 'zh-CN';
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

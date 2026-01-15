"use client";

import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { Language } from "../lib/translations";

interface LanguageContextProps {
  lang: Language;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("VI");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLang") as Language;
    if (savedLang && (savedLang === "VI" || savedLang === "EN"))
      setLang(savedLang);
  }, []);

  const toggleLang = () => {
    setLang((prevLang) => {
      const newLang = prevLang === "VI" ? "EN" : "VI";
      localStorage.setItem("preferredLang", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};



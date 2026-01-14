"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const HomeNote = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex items-start gap-2 px-2 opacity-80 max-w-3xl mx-auto md:mx-0">
      <i className="fa-solid fa-circle-info text-[#e63c1e] text-xs mt-0.5"></i>
      <p className="text-[11px] md:text-xs text-gray-500 leading-tight">
        <span className="font-bold text-gray-700">{t.disclaimer_title}:</span>{" "}
        {t.disclaimer_text}
      </p>
    </div>
  );
};

export default HomeNote;

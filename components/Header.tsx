"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="flex-shrink-0 bg-white h-14 md:h-16 border-b border-b-gray-200 flex items-center justify-between px-4 lg:px-8 z-30 shadow-sm relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleLang}
      >
        <img
          src="https://myspace.3khome.vn/logo/logo-3k-home-warehouse-stock.png"
          alt="Logo"
          className="h-6 md:h-8 w-auto object-contain"
        />
        <h1 className="text-base md:text-lg font-bold text-gray-800 hidden sm:block">
          {t.mainTitle}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {/* {viewMode === "visualizer" && ( */}
        <button
          // onClick={handleBackToLanding}
          className="text-xs md:text-sm font-medium text-gray-600 hover:text-[#e63c1e] mr-1 px-3 py-1.5 rounded-full border border-gray-300 hover:border-[#e63c1e] transition bg-white shadow-sm"
        >
          <i className="fa-solid fa-camera md:mr-1"></i>{" "}
          <span className="hidden md:inline">{t.back}</span>
        </button>
        {/* )} */}
        <button
          onClick={toggleLang}
          className="bg-gray-100 px-3 py-1.5 rounded text-xs font-bold text-[#e63c1e] border hover:bg-gray-200 transition"
        >
          {lang}
        </button>
      </div>
    </header>
  );
};

export default Header;

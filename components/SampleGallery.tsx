"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useEffect } from "react";

const SampleGallery = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h3 className="text-lg font-bold text-gray-800">{t.tab_all}</h3>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        Sample pics are displayed here.
        {/* {ALL_PRESET_IMAGES.map((imgSrc, idx) => (
          <button
            key={idx}
            onClick={() => handlePresetSelect(imgSrc)}
            className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 hover:border-[#e63c1e] shadow-sm transition-all relative bg-gray-100 group"
          >
            <img
              src={imgSrc}
              alt={`Demo ${idx}`}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default SampleGallery;

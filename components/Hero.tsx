"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      {/* Uploader */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-md p-6 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {t.upload_title}
          </h2>
          <p className="text-gray-300 text-sm mb-0">{t.upload_subtitle}</p>
        </div>

        {/* Split Buttons: Camera (Mobile Only) & Library */}
        <div className="relative z-10 w-full md:w-auto flex gap-3 justify-center md:justify-start">
          {/* Camera Button - Mobile Only (Hidden on Desktop 'md:hidden') - Compact Size */}
          <label className="md:hidden flex items-center justify-center gap-2 bg-[#e63c1e] text-white py-2.5 px-4 rounded-xl shadow-lg cursor-pointer hover:bg-red-600 transition transform active:scale-95 flex-1 min-w-[110px]">
            <input
              type="file"
              // onChange={handleFileChange}
              className="hidden"
              accept="image/*"
              capture="environment"
            />
            <i className="fa-solid fa-camera text-base"></i>
            <span className="font-bold text-xs">{t.btn_camera}</span>
          </label>

          {/* Library Button - Compact on Mobile, Main CTA on Desktop */}
          <label className="flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 py-2.5 px-4 rounded-xl shadow-lg cursor-pointer hover:bg-gray-50 transition transform active:scale-95 flex-1 md:flex-none md:bg-[#e63c1e] md:text-white md:border-[#e63c1e] md:hover:bg-red-600 md:py-3 md:px-6 min-w-[110px]">
            <input
              type="file"
              // onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <i className="fa-regular fa-images text-base"></i>
            <span className="font-bold text-xs md:text-sm">
              {t.btn_library}
            </span>
          </label>
        </div>
      </div>

      {/* Note */}
      <div className="flex items-start gap-2 px-2 opacity-80 max-w-3xl mx-auto md:mx-0">
        <i className="fa-solid fa-circle-info text-[#e63c1e] text-xs mt-0.5"></i>
        <p className="text-[11px] md:text-xs text-gray-500 leading-tight">
          <span className="font-bold text-gray-700">{t.disclaimer_title}:</span>{" "}
          {t.disclaimer_text}
        </p>
      </div>
    </>
  );
};

export default Hero;

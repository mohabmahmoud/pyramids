// src/components/LanguageSwitcher.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { FiGlobe } from 'react-icons/fi';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'fr', name: 'Français', dir: 'ltr' },
  ];

  const changeLanguage = (langCode: string) => {
    const currentPath = pathname;
    // إزالة البادئة الحالية للغة
    const pathWithoutLocale = currentPath.replace(/^\/(ar|en|fr)/, '');
    const newPath = `/${langCode}${pathWithoutLocale}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <FiGlobe />
        <span className="font-semibold">
          {languages.find(lang => lang.code === i18n.language)?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg border border-gray-200 min-w-[160px] z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full px-4 py-3 text-right hover:bg-gray-50 transition-colors ${
                i18n.language === language.code 
                  ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                  : 'text-gray-700'
              }`}
              dir={language.dir}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
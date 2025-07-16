import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'rs', name: 'Српски', flag: '🇷🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-white/20 transition-colors"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elegant z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground transition-colors ${
                  language.code === currentLanguage ? 'bg-accent text-accent-foreground' : 'text-popover-foreground'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
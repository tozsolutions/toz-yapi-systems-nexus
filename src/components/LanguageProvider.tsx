import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'ru' | 'pl' | 'es' | 'ar' | 'ko';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'cta.quote': 'Teklif Al',
    'cta.contact': 'İletişim',
    'hero.description': '2008 yılından beri sektörde öncü, kaliteli ve yenilikçi çözümlerle projelerinize değer katıyoruz.',
    'hero.cta1': 'Ürünleri Keşfet',
    'luna.greeting': 'Merhaba! Günümüzün daha güzel geçmesini dilerim. Size bugün nasıl yardımcı olabilirim?',
    'luna.subtitle': 'Yapı Sistemleri Uzmanınız',
    'luna.placeholder': 'Mesajınızı yazın...'
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.quote': 'Get Quote',
    'cta.contact': 'Contact',
    'hero.description': 'Pioneer in the industry since 2008, adding value to your projects with quality and innovative solutions.',
    'hero.cta1': 'Explore Products',
    'luna.greeting': 'Hello! I hope your day goes more beautifully. How can I help you today?',
    'luna.subtitle': 'Your Building Systems Expert',
    'luna.placeholder': 'Type your message...'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('tr');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string) => {
    return (translations[currentLanguage] as any)?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
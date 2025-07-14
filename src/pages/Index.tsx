import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { LunaAI } from '../components/LunaAI';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <LunaAI />
        
        {/* Footer placeholder */}
        <footer className="bg-primary text-primary-foreground py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">T</span>
              </div>
              <span className="font-semibold">Toz Yapı Sistemleri</span>
            </div>
            <p className="text-sm opacity-80">© 2024 Toz Yapı Sistemleri. Tüm hakları saklıdır.</p>
            <div className="mt-4 text-xs opacity-60">
              <span>Designed by </span>
              <span className="font-medium">[Designer Logo Placeholder]</span>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;

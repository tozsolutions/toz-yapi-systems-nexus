import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { LunaAI } from '../components/LunaAI';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <LunaAI />
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

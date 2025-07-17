import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';

const AboutContent = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    tr: {
      title: 'Biz Kimiz',
      description: `2008 yılında adım attığımız sektörde, günümüzde hemen hemen herkesin kullandığı veya projesinde tercih ettiği birçok yenilikçi ve teknolojik ürünü tanıtılmasını, yaygınlaştırılmasını başardık. O zamandan beri birçok projeyi başarıyla tamamladık.`,
      motto: `"MUTLU MÜŞTERİ" mottosuyla ilerlediğimiz bu yolda, 2024 yılında kararlarımızı daha özgür ifade edebilmek için daha güçlü ve tecrübeli yenilikçi çözümler sunmayı hedefliyoruz.`,
      mission: `"İnşaat sektöründe sürdürülebilir, yenilikçi ve kaliteli çözümler sunarak, sektördeki liderliğimizi pekiştirmek ve yaşam alanlarına değer katmak."`,
      goals: `"Her projede mükemmeliyet ve müşteri memnuniyeti hedefleyerek, deneyimli ekibimizle yenilikçi tasarımlar geliştirmek; güvenilir üyelerle iş birliği yaparak inşaat alanında fark yaratan projelere imza atmak."`
    },
    en: {
      title: 'Who We Are',
      description: 'Since we entered the sector in 2008, we have successfully introduced and popularized many innovative and technological products that almost everyone uses or prefers in their projects today. We have successfully completed many projects since then.',
      motto: 'On this path we have been following with our "HAPPY CUSTOMER" motto, we aim to offer stronger and more experienced innovative solutions to express our decisions more freely in 2024.',
      mission: 'To strengthen our leadership in the sector and add value to living spaces by providing sustainable, innovative and quality solutions in the construction sector.',
      goals: 'To develop innovative designs with our experienced team, aiming for excellence and customer satisfaction in every project; to sign projects that make a difference in the construction field by collaborating with reliable members.'
    }
  };

  const currentContent = content[currentLanguage] || content.tr;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            {currentContent.title}
          </h1>
          
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {currentContent.description}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {currentContent.motto}
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Amacımız</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.mission}
                </p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Hedeflerimiz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.goals}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

export default About;
import React from 'react';
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '15+', label: 'Yıllık Deneyim' },
    { icon: Award, value: '500+', label: 'Tamamlanan Proje' },
    { icon: Shield, value: '2 Yıl', label: 'Garanti Süresi' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 animate-bounce-in">
              <Shield className="w-4 h-4 mr-2" />
              <span>2008'den Beri Güvenilir Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="block text-white">Yenilikçi</span>
              <span className="block gradient-text bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                Yapı Sistemleri
              </span>
            </h1>
            
            <p className="text-xl text-primary mb-8 leading-relaxed animate-slide-up font-medium">
              2008 yılından beri sektörde öncü, kaliteli ve yenilikçi çözümlerle projelerinize değer katıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button className="group flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105">
                <span>{t('hero.cta1')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Tanıtım Videosu</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* Placeholder for hero image/animation */}
              <div className="aspect-square bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">T</span>
                  </div>
                  <p className="text-lg font-medium">Toz Yapı Teknolojileri</p>
                  <p className="text-sm opacity-80 mt-2">Modern Yapı Çözümleri</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Home, Sun, Lock, Wrench, Umbrella, Waves, Fence } from 'lucide-react';

const ProductsContent = () => {
  const { currentLanguage } = useLanguage();

  const products = [
    {
      icon: Shield,
      title: { tr: 'PANJUR Sistemleri', en: 'SHUTTER Systems' },
      description: { tr: 'Monoblok-Dıştan Takma-Lento-Gizli-Ahşap-Menteşeli-Yalıtımlı', en: 'Monoblock-External Mount-Lento-Hidden-Wood-Hinged-Insulated' },
      items: ['Monoblok Panjur', 'Dıştan Takma Panjur', 'Lento Panjur', 'Gizli Panjur', 'Ahşap Panjur', 'Menteşeli Panjur', 'Yalıtımlı Panjur']
    },
    {
      icon: Lock,
      title: { tr: 'KEPENK Sistemleri', en: 'ROLLING SHUTTER Systems' },
      description: { tr: 'Çelik-Alüminyum-Poliüretanlı-Şeffaf-Kayar Katlanır-Yangına Dayanımlı', en: 'Steel-Aluminum-Polyurethane-Transparent-Sliding Folding-Fire Resistant' },
      items: ['Çelik Kepenk', 'Alüminyum Kepenk', 'Poliüretanlı Kepenk', 'Şeffaf Kepenk', 'Kayar Katlanır Kepenk', 'Yangına Dayanımlı Kepenk']
    },
    {
      icon: Sun,
      title: { tr: 'PERGOLA, Rolling Roof, Bio-Climatic, Tente', en: 'PERGOLA, Rolling Roof, Bio-Climatic, Awning' },
      description: { tr: 'Modern pergola sistemleri ve çözümleri', en: 'Modern pergola systems and solutions' },
      items: ['Pergola Sistemleri', 'Rolling Roof', 'Bio-Climatic Sistemler', 'Tente Sistemleri']
    },
    {
      icon: Waves,
      title: { tr: 'Zip Perde ve Giyotin-Sürme-Rüzgar Kırıcı-Dış Cephe Jaluzileri', en: 'Zip Curtain and Guillotine-Sliding-Wind Breaker-Exterior Blinds' },
      description: { tr: 'Çeşitli perde ve jaluz sistemleri', en: 'Various curtain and blind systems' },
      items: ['Zip Perde', 'Giyotin Perde', 'Sürme Perde', 'Rüzgar Kırıcı', 'Dış Cephe Jaluzileri']
    },
    {
      icon: Home,
      title: { tr: 'Otomatik Kapı Sistemleri', en: 'Automatic Door Systems' },
      description: { tr: 'Fotoselli Kapı-Döner Kapı, 90° Kapı-Hermetik Kapı, Akustik Kapı, Yangın Kapısı, Endüstriyel-Seksiyonel-Garaj Kapıları', en: 'Photocell Door-Revolving Door, 90° Door-Hermetic Door, Acoustic Door, Fire Door, Industrial-Sectional-Garage Doors' },
      items: ['Fotoselli Kapı', 'Döner Kapı', '90° Kapı', 'Hermetik Kapı', 'Akustik Kapı', 'Yangın Kapısı', 'Endüstriyel Kapı', 'Seksiyonel Kapı', 'Garaj Kapıları']
    },
    {
      icon: Umbrella,
      title: { tr: 'Sundurma ve Carport Sistemleri', en: 'Canopy and Carport Systems' },
      description: { tr: 'Koruma ve barınma çözümleri', en: 'Protection and shelter solutions' },
      items: ['Sundurma Sistemleri', 'Carport Sistemleri']
    },
    {
      icon: Waves,
      title: { tr: 'Havuz Kapama Çözümleri', en: 'Pool Enclosure Solutions' },
      description: { tr: 'Havuz koruma sistemleri', en: 'Pool protection systems' },
      items: ['Havuz Kapama Sistemleri']
    },
    {
      icon: Fence,
      title: { tr: 'Bahçe ve Çit Sistemleri', en: 'Garden and Fence Systems' },
      description: { tr: 'Bahçe düzenleme ve güvenlik sistemleri', en: 'Garden arrangement and security systems' },
      items: ['Bahçe Sistemleri', 'Çit Sistemleri']
    }
  ];

  const currentLang = currentLanguage || 'tr';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            {currentLang === 'tr' ? 'Ürün Gruplarımız' : 'Our Product Groups'}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="card-elegant hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {product.title[currentLang]}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {product.description[currentLang]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Products = () => {
  return (
    <LanguageProvider>
      <ProductsContent />
    </LanguageProvider>
  );
};

export default Products;
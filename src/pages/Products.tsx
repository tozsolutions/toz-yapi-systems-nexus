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
      items: [
        { name: 'Monoblok Panjur', description: 'Duvar içine gömülü sistem' },
        { name: 'Dıştan Takma Panjur', description: 'Dış yüzeye montaj sistemi' },
        { name: 'Lento Panjur', description: 'Görünür kutu sistemi' },
        { name: 'Gizli Panjur', description: 'Estetik gizli montaj' },
        { name: 'Ahşap Panjur', description: 'Doğal ahşap malzeme' },
        { name: 'Menteşeli Panjur', description: 'Klasik açılım sistemi' },
        { name: 'Yalıtımlı Panjur', description: 'Termal yalıtım sistemi' }
      ]
    },
    {
      icon: Lock,
      title: { tr: 'KEPENK Sistemleri', en: 'ROLLING SHUTTER Systems' },
      description: { tr: 'Çelik-Alüminyum-Poliüretanlı-Şeffaf-Kayar Katlanır-Yangına Dayanımlı', en: 'Steel-Aluminum-Polyurethane-Transparent-Sliding Folding-Fire Resistant' },
      items: [
        { name: 'Çelik Kepenk', description: 'Yüksek güvenlik sistemi' },
        { name: 'Alüminyum Kepenk', description: 'Hafif ve dayanıklı sistem' },
        { name: 'Poliüretanlı Kepenk', description: 'Yalıtımlı güvenlik sistemi' },
        { name: 'Şeffaf Kepenk', description: 'Görünürlük sağlayan sistem' },
        { name: 'Kayar Katlanır Kepenk', description: 'Kompakt açılım sistemi' },
        { name: 'Yangına Dayanımlı Kepenk', description: 'Yangın güvenlik sistemi' }
      ]
    },
    {
      icon: Sun,
      title: { tr: 'PERGOLA & TENTE Sistemleri', en: 'PERGOLA & AWNING Systems' },
      description: { tr: 'Modern pergola, rolling roof, bio-climatic ve tente sistemleri', en: 'Modern pergola, rolling roof, bio-climatic and awning systems' },
      items: [
        { name: 'Pergola Sistemleri', description: 'Açık alan gölgelendirme' },
        { name: 'Rolling Roof', description: 'Hareketli çatı sistemi' },
        { name: 'Bio-Climatic Sistemler', description: 'İklim kontrol sistemi' },
        { name: 'Tente Sistemleri', description: 'Kumaş gölgelendirme' },
        { name: 'Açılır Kapanır Pergola', description: 'Elektrikli kontrol sistemi' },
        { name: 'Cam Pergola', description: 'Şeffaf çatı sistemi' }
      ]
    },
    {
      icon: Waves,
      title: { tr: 'ZIP PERDE Sistemleri', en: 'ZIP CURTAIN Systems' },
      description: { tr: 'Zip perde, giyotin, sürme, rüzgar kırıcı ve dış cephe jaluzileri', en: 'Zip curtain, guillotine, sliding, wind breaker and exterior blinds' },
      items: [
        { name: 'Zip Perde', description: 'Rüzgar dayanımlı perde sistemi' },
        { name: 'Giyotin Perde', description: 'Dikey hareket sistemi' },
        { name: 'Sürme Perde', description: 'Yatay hareket sistemi' },
        { name: 'Rüzgar Kırıcı', description: 'Cam balkon sistemi' },
        { name: 'Dış Cephe Jaluzileri', description: 'Mimari gölgelendirme' },
        { name: 'Cam Balkon Sistemleri', description: 'Katlanabilir cam sistem' }
      ]
    },
    {
      icon: Home,
      title: { tr: 'OTOMATIK KAPI Sistemleri', en: 'AUTOMATIC DOOR Systems' },
      description: { tr: 'Fotoselli, döner, hermetik, akustik, yangın ve endüstriyel kapı sistemleri', en: 'Photocell, revolving, hermetic, acoustic, fire and industrial door systems' },
      items: [
        { name: 'Fotoselli Kapı', description: 'Sensör kontrollü otomatik kapı' },
        { name: 'Döner Kapı', description: 'Revolving door sistemi' },
        { name: '90° Otomatik Kapı', description: 'Tek kanat otomatik sistem' },
        { name: 'Hermetik Kapı', description: 'Hava sızdırmazlık sistemi' },
        { name: 'Akustik Kapı', description: 'Ses yalıtım sistemi' },
        { name: 'Yangın Kapısı', description: 'Yangın güvenlik sistemi' },
        { name: 'Endüstriyel Kapı', description: 'Ağır hizmet tipi kapı' },
        { name: 'Seksiyonel Kapı', description: 'Bölümlenmiş açılım sistemi' },
        { name: 'Garaj Kapıları', description: 'Otomatik garaj sistemi' }
      ]
    },
    {
      icon: Umbrella,
      title: { tr: 'SUNDURMA & CARPORT', en: 'CANOPY & CARPORT' },
      description: { tr: 'Koruma ve barınma çözümleri', en: 'Protection and shelter solutions' },
      items: [
        { name: 'Sundurma Sistemleri', description: 'Giriş koruma sistemi' },
        { name: 'Carport Sistemleri', description: 'Araç koruma sistemi' },
        { name: 'Kanopi Sistemleri', description: 'Büyük alan koruma' },
        { name: 'Polikarbon Sundurma', description: 'Şeffaf koruma sistemi' }
      ]
    },
    {
      icon: Waves,
      title: { tr: 'HAVUZ KAPAMA Çözümleri', en: 'POOL ENCLOSURE Solutions' },
      description: { tr: 'Havuz koruma ve kapatma sistemleri', en: 'Pool protection and enclosure systems' },
      items: [
        { name: 'Havuz Kapama Sistemleri', description: 'Sezonsal koruma sistemi' },
        { name: 'Havuz Örtü Sistemleri', description: 'Güvenlik örtü sistemi' },
        { name: 'Havuz Bariyeri', description: 'Güvenlik koruma sistemi' }
      ]
    },
    {
      icon: Fence,
      title: { tr: 'BAHÇE & ÇİT Sistemleri', en: 'GARDEN & FENCE Systems' },
      description: { tr: 'Bahçe düzenleme ve güvenlik sistemleri', en: 'Garden arrangement and security systems' },
      items: [
        { name: 'Bahçe Sistemleri', description: 'Peyzaj düzenleme' },
        { name: 'Çit Sistemleri', description: 'Sınır belirleme sistemi' },
        { name: 'Güvenlik Çitleri', description: 'Yüksek güvenlik sistemi' },
        { name: 'Dekoratif Çitler', description: 'Estetik sınırlama sistemi' }
      ]
    },
    {
      icon: Wrench,
      title: { tr: 'CAM & ALÜMİNYUM Sistemleri', en: 'GLASS & ALUMINUM Systems' },
      description: { tr: 'Cam ve alüminyum doğrama sistemleri', en: 'Glass and aluminum joinery systems' },
      items: [
        { name: 'Cam Balkon', description: 'Katlanabilir cam sistem' },
        { name: 'Kış Bahçesi', description: 'Cam kapalı alan sistemi' },
        { name: 'Cam Çatı', description: 'Şeffaf çatı sistemi' },
        { name: 'Alüminyum Doğrama', description: 'Pencere ve kapı sistemleri' }
      ]
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
                    <ul className="space-y-3">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer group">
                          <div className="flex flex-col">
                            <span className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                              {typeof item === 'string' ? item : item.name}
                            </span>
                            {typeof item === 'object' && item.description && (
                              <span className="text-xs text-muted-foreground mt-1">
                                {item.description}
                              </span>
                            )}
                          </div>
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
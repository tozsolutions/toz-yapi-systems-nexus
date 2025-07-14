import { useState, useCallback, createContext, useContext } from 'react';

// Translation keys and text
const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.products': 'Ürünler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.panjur': 'Panjur Sistemleri',
    'nav.kepenk': 'Kepenk Sistemleri',
    'nav.pergola': 'Pergola & Tente',
    'nav.zipPerde': 'Zip Perde',
    'nav.otomatikKapi': 'Otomatik Kapı',
    'nav.sundurma': 'Sundurma',
    'nav.havuzKapama': 'Havuz Kapama',
    'nav.bahceCit': 'Bahçe & Çit',
    
    // CTA Buttons
    'cta.quote': 'Teklif Al',
    'cta.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Yenilikçi Yapı Sistemleri',
    'hero.subtitle': 'KEŞFEDİN ! Belkide İhtiyacınız olan ürün burada',
    'hero.description': '2008 yılından beri sektörde öncü, kaliteli ve yenilikçi çözümlerle projelerinize değer katıyoruz.',
    'hero.cta1': 'Ürünleri Keşfet',
    'hero.cta2': 'Teklif Al',
    
    // Luna AI
    'luna.greeting': 'Merhaba! Günümüzün daha güzel geçmesini dilerim. Size bugün nasıl yardımcı olabilirim?',
    'luna.subtitle': 'Yapı Sistemleri Uzmanınız',
    'luna.placeholder': 'Mesajınızı yazın...',
    'luna.responses.panjur': 'Panjur sistemlerimiz hakkında bilgi verebilirim. Monoblok, dıştan takma, lento, gizli, ahşap, menteşeli ve yalıtımlı seçeneklerimiz bulunmakta. Hangi tipte panjur arıyorsunuz?',
    'luna.responses.kepenk': 'Kepenk sistemlerimizde çelik, alüminyum, poliüretanlı, şeffaf, kayar katlanır ve yangına dayanımlı seçenekler mevcut. Size hangi özellik öncelikli?',
    'luna.responses.pergola': 'Pergola sistemlerimiz; RollingRoof, Bio-Climatic ve tente çözümleri ile dış mekânlarınızı konforlu yaşam alanlarına dönüştürür. Detaylı bilgi için teklif alabilirsiniz.',
    'luna.responses.door': 'Otomatik kapı sistemlerimizde fotoselli, döner, 90°, hermetik, akustik, yangın, endüstriyel, seksiyonel ve garaj kapıları bulunmakta. Hangi alanda kullanım planlıyorsunuz?',
    'luna.responses.price': 'Fiyat bilgisi için ürün detaylarını belirtmeniz gerekiyor. Hangi ürün grubu için fiyat öğrenmek istiyorsunuz? Size özel teklif hazırlayabilirim.',
    'luna.responses.installation': 'Uzman ekibimiz tüm ürünlerimizin kurulumunu gerçekleştirmektedir. Kurulum öncesi teknik keşif yapılarak en uygun çözüm sunulmaktadır.',
    'luna.responses.warranty': 'Tüm ürünlerimizde 2 yıl garanti ve satış sonrası destek hizmeti vermekteyiz. Kaliteli malzeme ve işçilik garantimiz bulunmakta.',
    'luna.responses.default1': 'Size nasıl yardımcı olabilirim? Ürünlerimiz hakkında detaylı bilgi verebilirim.',
    'luna.responses.default2': 'Yapı sistemleri konusunda uzmanım. Hangi konuda bilgi almak istiyorsunuz?',
    'luna.responses.default3': 'Projeleriniz için en uygun çözümü bulalım. Hangi alanda destek gerekiyor?',
    
    // Product Categories
    'products.title': 'Ürün Kategorilerimiz',
    'products.subtitle': 'Geniş ürün yelpazemizle tüm yapı sistemleri ihtiyaçlarınıza çözüm sunuyoruz',
    
    // Company Info
    'company.about': 'Hakkımızda',
    'company.history': '2008 yılında adım attığımız sektörde, günümüzde hemen hemen herkesin kullandığı veya projesinde tercih ettiği birçok yenilikçi ve teknolojik ürünün tanıtılmasını, yaygınlaştırılmasını başardık.',
    'company.mission': 'İnşaat sektöründe sürdürülebilir, yenilikçi ve kaliteli çözümler sunarak, sektördeki liderliğimizi pekiştirmek ve yaşam alanlarına değer katmak.',
    'company.vision': 'Her projede mükemmeliyet ve müşteri memnuniyeti hedefleyerek, deneyimli ekibimizle yenilikçi tasarımlar geliştirmek.',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.panjur': 'Shutter Systems',
    'nav.kepenk': 'Rolling Shutters',
    'nav.pergola': 'Pergola & Awnings',
    'nav.zipPerde': 'Zip Blinds',
    'nav.otomatikKapi': 'Automatic Doors',
    'nav.sundurma': 'Canopies',
    'nav.havuzKapama': 'Pool Enclosures',
    'nav.bahceCit': 'Garden & Fencing',
    
    // CTA Buttons
    'cta.quote': 'Get Quote',
    'cta.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Innovative Building Systems',
    'hero.subtitle': 'DISCOVER! Maybe the product you need is here',
    'hero.description': 'Pioneer in the industry since 2008, adding value to your projects with quality and innovative solutions.',
    'hero.cta1': 'Explore Products',
    'hero.cta2': 'Get Quote',
    
    // Luna AI
    'luna.greeting': 'Hello! I hope your day goes more beautifully. How can I help you today?',
    'luna.subtitle': 'Your Building Systems Expert',
    'luna.placeholder': 'Type your message...',
    'luna.responses.panjur': 'I can provide information about our shutter systems. We have monoblock, external mounting, lento, hidden, wooden, hinged and insulated options. What type of shutter are you looking for?',
    'luna.responses.kepenk': 'Our rolling shutter systems include steel, aluminum, polyurethane, transparent, sliding folding and fire-resistant options. Which feature is priority for you?',
    'luna.responses.pergola': 'Our pergola systems; RollingRoof, Bio-Climatic and awning solutions transform your outdoor spaces into comfortable living areas. You can get a quote for detailed information.',
    'luna.responses.door': 'Our automatic door systems include photocell, revolving, 90°, hermetic, acoustic, fire, industrial, sectional and garage doors. In which area are you planning to use?',
    'luna.responses.price': 'For price information, you need to specify product details. Which product group do you want to learn the price for? I can prepare a special offer for you.',
    'luna.responses.installation': 'Our expert team performs the installation of all our products. Technical survey is carried out before installation and the most suitable solution is offered.',
    'luna.responses.warranty': 'We provide 2 years warranty and after-sales support service for all our products. We have quality material and workmanship guarantee.',
    'luna.responses.default1': 'How can I help you? I can provide detailed information about our products.',
    'luna.responses.default2': 'I am an expert in building systems. What subject would you like to get information about?',
    'luna.responses.default3': 'Let\'s find the most suitable solution for your projects. Which area needs support?',
    
    // Product Categories
    'products.title': 'Our Product Categories',
    'products.subtitle': 'We provide solutions to all your building system needs with our wide product range',
    
    // Company Info
    'company.about': 'About Us',
    'company.history': 'We have succeeded in introducing and popularizing many innovative and technological products that almost everyone uses or prefers in their projects today in the sector we stepped into in 2008.',
    'company.mission': 'To strengthen our leadership in the sector and add value to living spaces by providing sustainable, innovative and quality solutions in the construction sector.',
    'company.vision': 'To develop innovative designs with our experienced team by targeting excellence and customer satisfaction in every project.',
  }
  
  // Note: Other languages (ru, pl, es, ar, ko) would be added here with similar structure
};

type Language = 'tr' | 'en' | 'ru' | 'pl' | 'es' | 'ar' | 'ko';
type TranslationKey = keyof typeof translations.tr;

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default implementation if context is not available
    const [currentLanguage] = useState<Language>('tr');
    
    const t = useCallback((key: TranslationKey) => {
      return translations[currentLanguage as keyof typeof translations]?.[key] || key;
    }, [currentLanguage]);
    
    const setLanguage = useCallback((lang: Language) => {
      // Default implementation - would need to be implemented with context
    }, []);
    
    return { currentLanguage, setLanguage, t };
  }
  return context;
};
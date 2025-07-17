import React, { useState } from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calculator, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const QuoteContent = () => {
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const content = {
    tr: {
      title: 'Teklif Al',
      subtitle: 'Projeleriniz için özel fiyat teklifi alın',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      product: 'Ürün Kategorisi',
      message: 'Proje Detayları',
      messagePlaceholder: 'Projenizi detaylı olarak açıklayın...',
      send: 'Teklif Talebini Gönder',
      selectProduct: 'Ürün seçiniz',
      success: 'Teklif talebiniz başarıyla gönderildi!',
      fillAll: 'Lütfen tüm alanları doldurun.'
    },
    en: {
      title: 'Get Quote',
      subtitle: 'Get a special price quote for your projects',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      product: 'Product Category',
      message: 'Project Details',
      messagePlaceholder: 'Describe your project in detail...',
      send: 'Send Quote Request',
      selectProduct: 'Select Product',
      success: 'Your quote request has been sent successfully!',
      fillAll: 'Please fill in all fields.'
    }
  };

  const products = [
    'PANJUR Sistemleri',
    'KEPENK Sistemleri', 
    'PERGOLA, Rolling Roof, Bio-Climatic',
    'Zip Perde ve Jaluziler',
    'Otomatik Kapı Sistemleri',
    'Sundurma ve Carport',
    'Havuz Kapama Çözümleri',
    'Bahçe ve Çit Sistemleri'
  ];

  const currentContent = content[currentLanguage] || content.tr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.product || !formData.message) {
      toast({
        title: "Hata",
        description: currentContent.fillAll,
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Başarılı",
      description: currentContent.success,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calculator className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">
                {currentContent.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              {currentContent.subtitle}
            </p>
          </div>
          
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                {currentContent.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.name}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.email}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.product}
                    </label>
                    <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={currentContent.selectProduct} />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product, index) => (
                          <SelectItem key={index} value={product}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {currentContent.message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={currentContent.messagePlaceholder}
                    className="w-full h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {currentContent.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Quote = () => {
  return (
    <LanguageProvider>
      <QuoteContent />
    </LanguageProvider>
  );
};

export default Quote;
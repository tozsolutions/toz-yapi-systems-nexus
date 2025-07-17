import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react';

const ContactContent = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    tr: {
      title: 'İletişim',
      whyUs: 'Neden Biz?',
      whyUsDescription: 'Uzman ekibimiz, yurtdışındaki zengin deneyimleriyle projeleri etkin bir şekilde yönetmektedir. Satış, saha ve satış sonrası hizmetleri en iyi şekilde bir araya getirerek, müşteri memnuniyetini önceliğimiz haline getiriyoruz. Elde ettiğimiz tecrübeleri, teknik altyapımızı güçlendirmek için kullanıyor ve bu sayede sektördeki rekabeti artırıyoruz. Sizlere en iyi hizmeti sunarak, sektörün öncülerinden biri olmayı hedefliyoruz.',
      contactInfo: 'İletişim Bilgileri',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      workingHours: 'Çalışma Saatleri',
      hours: 'Pazartesi - Cuma: 08:00 - 18:00\nCumartesi: 09:00 - 17:00'
    },
    en: {
      title: 'Contact',
      whyUs: 'Why Us?',
      whyUsDescription: 'Our expert team effectively manages projects with their rich experience abroad. We prioritize customer satisfaction by bringing together sales, field and after-sales services in the best way. We use our experience to strengthen our technical infrastructure and thus increase competition in the sector. We aim to be one of the pioneers of the sector by providing you with the best service.',
      contactInfo: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      workingHours: 'Working Hours',
      hours: 'Monday - Friday: 08:00 - 18:00\nSaturday: 09:00 - 17:00'
    }
  };

  const currentContent = content[currentLanguage] || content.tr;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            {currentContent.title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Us Section */}
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {currentContent.whyUs}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {currentContent.whyUsDescription}
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-6">
                  {currentContent.contactInfo}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{currentContent.address}</h3>
                    <p className="text-muted-foreground">
                      Üniversiteler Mah. 1597. Cad Bilkent Center AVM No:3 Bilkent Çankaya ANKARA
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{currentContent.phone}</h3>
                    <p className="text-muted-foreground">+90 536 773 14 04</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{currentContent.email}</h3>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">merhaba@tozyapi.com.tr</p>
                      <p className="text-muted-foreground">ozkan@tozyapi.com.tr</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{currentContent.workingHours}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {currentContent.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
};

export default Contact;
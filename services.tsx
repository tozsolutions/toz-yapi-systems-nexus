import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Settings, Headphones, GraduationCap, Wrench, Shield } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t("projectConsultancy"),
      description: "Uzman ekibimizle ücretsiz proje danışmanlığı",
      color: "bg-rolex-green",
    },
    {
      icon: Settings,
      title: t("installation"),
      description: "Profesyonel ekiple güvenli kurulum",
      color: "bg-glow-yellow",
    },
    {
      icon: Headphones,
      title: t("technicalSupport"),
      description: "7/24 uzaktan ve yerinde teknik destek",
      color: "bg-rolex-green",
    },
    {
      icon: GraduationCap,
      title: t("training"),
      description: "Sistem kullanımı ve bakım eğitimleri",
      color: "bg-glow-yellow",
    },
    {
      icon: Wrench,
      title: "Bakım & Onarım",
      description: "Periyodik bakım ve acil onarım hizmetleri",
      color: "bg-rolex-green",
    },
    {
      icon: Shield,
      title: "Garanti & Güvence",
      description: "5 yıl garanti ve sigorta kapsamı",
      color: "bg-glow-yellow",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {t("professionalServices")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Danışmanlıktan kuruluma, bakımdan eğitime kadar tam kapsamlı hizmet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow card-hover">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.color === 'bg-glow-yellow' ? 'text-dark-gray' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-dark-gray">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

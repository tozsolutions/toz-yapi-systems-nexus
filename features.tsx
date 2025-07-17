import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cog, Shield, Clock, Award, Users } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bot,
      title: t("aiTechnology"),
      description: t("aiTechnologyDesc"),
      color: "bg-rolex-green",
    },
    {
      icon: Cog,
      title: t("customSolutions"),
      description: t("customSolutionsDesc"),
      color: "bg-glow-yellow",
    },
    {
      icon: Shield,
      title: t("reliableService"),
      description: t("reliableServiceDesc"),
      color: "bg-rolex-green",
    },
    {
      icon: Clock,
      title: "7/24 Hizmet",
      description: "Kesintisiz teknik destek ve acil durum müdahale hizmeti sunuyoruz.",
      color: "bg-glow-yellow",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "Uluslararası standartlarda kalite ve 5 yıl garanti sunuyoruz.",
      color: "bg-rolex-green",
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Alanında uzman mühendis ve teknisyenlerden oluşan ekibimiz.",
      color: "bg-glow-yellow",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {t("whyChoose")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sektörde öncü teknolojiler ve yenilikçi çözümlerle fark yaratıyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow card-hover">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color === 'bg-glow-yellow' ? 'text-dark-gray' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-dark-gray">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

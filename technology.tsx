import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Cloud, 
  Network, 
  Database, 
  Smartphone, 
  Shield, 
  Cpu, 
  Zap 
} from "lucide-react";

export default function Technology() {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: Brain,
      title: "AI/ML",
      description: "TensorFlow, PyTorch",
      color: "text-glow-yellow",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "AWS, Azure",
      color: "text-glow-yellow",
    },
    {
      icon: Network,
      title: "IoT",
      description: "ESP32, Arduino",
      color: "text-glow-yellow",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB",
      color: "text-glow-yellow",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "React Native, Flutter",
      color: "text-glow-yellow",
    },
    {
      icon: Shield,
      title: "Security",
      description: "SSL, Encryption",
      color: "text-glow-yellow",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Raspberry Pi, NVIDIA Jetson",
      color: "text-glow-yellow",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "PLC, SCADA",
      color: "text-glow-yellow",
    },
  ];

  return (
    <section className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("technologiesWeUse")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("advancedTech")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className={`${tech.color} text-4xl mb-4 flex justify-center`}>
                  <tech.icon className="w-10 h-10" />
                </div>
                <h4 className="text-white font-semibold mb-2">{tech.title}</h4>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-glow-yellow mb-2">15+</h3>
              <p className="text-gray-300">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-glow-yellow mb-2">200+</h3>
              <p className="text-gray-300">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-glow-yellow mb-2">99%</h3>
              <p className="text-gray-300">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

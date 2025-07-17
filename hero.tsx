import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const handleConsultation = () => {
    window.open("https://wa.me/905367731404", "_blank");
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-glow-yellow text-dark-gray hover:bg-yellow-300 glow-effect"
                onClick={handleConsultation}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t("requestQuote")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rolex-green"
              >
                {t("exploreProducts")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square relative">
              <img
                src="/api/placeholder/600/600"
                alt="AI-powered building automation system"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rolex-green/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

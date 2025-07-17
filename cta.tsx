import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function CTA() {
  const { t } = useLanguage();

  const handleCall = () => {
    window.open("tel:+905367731404", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:merhaba@tozsolutions.com.tr", "_self");
  };

  return (
    <section className="py-20 bg-rolex-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("readyToStart")}
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
          {t("ctaDescription")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-glow-yellow text-dark-gray hover:bg-yellow-300 glow-effect"
            onClick={handleCall}
          >
            <Phone className="w-5 h-5 mr-2" />
            {t("callNow")}: +90 536 773 1404
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-rolex-green"
            onClick={handleEmail}
          >
            <Mail className="w-5 h-5 mr-2" />
            {t("sendEmail")}
          </Button>
        </div>
      </div>
    </section>
  );
}

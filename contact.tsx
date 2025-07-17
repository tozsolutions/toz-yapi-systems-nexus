import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/leads", {
        ...data,
        source: "contact_form",
      });
    },
    onSuccess: () => {
      toast({
        title: "Mesajınız alındı!",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLeadMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("address"),
      content: "Eryaman, Ankara, Türkiye",
      color: "bg-rolex-green",
    },
    {
      icon: Phone,
      title: t("phone"),
      content: "+90 536 773 1404",
      link: "tel:+905367731404",
      color: "bg-glow-yellow",
    },
    {
      icon: Mail,
      title: t("email"),
      content: "merhaba@tozsolutions.com.tr",
      link: "mailto:merhaba@tozsolutions.com.tr",
      color: "bg-rolex-green",
    },
    {
      icon: Globe,
      title: t("website"),
      content: "www.tozyapi.com.tr",
      link: "https://www.tozyapi.com.tr",
      color: "bg-glow-yellow",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {t("contactUs")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz hakkında konuşmak ve size en uygun çözümleri sunmak için buradayız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                  <info.icon className={`w-6 h-6 ${info.color === 'bg-glow-yellow' ? 'text-dark-gray' : 'text-white'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-rolex-green transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-dark-gray">
                {t("quickContact")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t("name")}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı giriniz"
                    required
                    className="focus:ring-rolex-green focus:border-rolex-green"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t("email")}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta adresinizi giriniz"
                    required
                    className="focus:ring-rolex-green focus:border-rolex-green"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t("phone")}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon numaranızı giriniz"
                    className="focus:ring-rolex-green focus:border-rolex-green"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t("message")}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Mesajınızı yazınız"
                    required
                    className="focus:ring-rolex-green focus:border-rolex-green"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-rolex-green text-white hover:bg-green-700"
                  disabled={createLeadMutation.isPending}
                >
                  {createLeadMutation.isPending ? "Gönderiliyor..." : t("sendMessage")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

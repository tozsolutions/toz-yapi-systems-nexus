import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@shared/schema";
import { Link } from "wouter";

export default function Products() {
  const { t, language } = useLanguage();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    queryFn: async () => {
      const response = await fetch("/api/products?featured=true&limit=6");
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });

  const formatPrice = (price: string, priceMax?: string) => {
    const formatted = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    }).format(Number(price));

    if (priceMax) {
      const formattedMax = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 0,
      }).format(Number(priceMax));
      return `${formatted} - ${formattedMax}`;
    }

    return formatted;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {t("productCategories")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern yapı teknolojilerinden AI tabanlı otomasyon sistemlerine kadar geniş ürün yelpazesi
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-full mb-4" />
                  <Skeleton className="h-8 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={language === "tr" ? product.name : product.nameEn}
                    className="w-full h-48 object-cover"
                  />
                  {product.featured && (
                    <Badge className="absolute top-3 left-3 bg-glow-yellow text-dark-gray">
                      Öne Çıkan
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === "tr" ? product.name : product.nameEn}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {language === "tr" ? product.category : product.categoryEn}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    {language === "tr" ? product.description : product.descriptionEn}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-rolex-green font-bold text-lg">
                      {formatPrice(product.price, product.priceMax || undefined)}
                    </span>
                    <Button className="bg-glow-yellow text-dark-gray hover:bg-yellow-300">
                      {t("explore")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="bg-rolex-green text-white hover:bg-green-700">
              {t("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

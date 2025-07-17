import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@shared/schema";
import { ShoppingCart, Eye, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (productId: number) => void;
  onAddToCart?: (productId: number) => void;
  showAddToCart?: boolean;
}

export default function ProductCard({ 
  product, 
  onViewDetails, 
  onAddToCart, 
  showAddToCart = true 
}: ProductCardProps) {
  const { language } = useLanguage();

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

  const handleViewDetails = () => {
    onViewDetails?.(product.id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product.id);
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={language === "tr" ? product.name : product.nameEn}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-glow-yellow text-dark-gray font-semibold">
              <Star className="w-3 h-3 mr-1" />
              Öne Çıkan
            </Badge>
          )}
          {product.inStock ? (
            <Badge className="bg-rolex-green text-white">
              Stokta
            </Badge>
          ) : (
            <Badge className="bg-red-500 text-white">
              Tükendi
            </Badge>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-dark-gray"
            onClick={handleViewDetails}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold text-dark-gray line-clamp-2">
            {language === "tr" ? product.name : product.nameEn}
          </CardTitle>
        </div>
        <p className="text-sm text-gray-600 font-medium">
          {language === "tr" ? product.category : product.categoryEn}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-3">
          {language === "tr" ? product.description : product.descriptionEn}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-rolex-green font-bold text-lg">
              {formatPrice(product.price, product.priceMax || undefined)}
            </span>
            {product.priceMax && (
              <span className="text-xs text-gray-500">
                Fiyat aralığı
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            className="flex-1 border-rolex-green text-rolex-green hover:bg-rolex-green hover:text-white"
            onClick={handleViewDetails}
          >
            <Eye className="w-4 h-4 mr-2" />
            Detaylar
          </Button>
          
          {showAddToCart && (
            <Button
              className="flex-1 bg-glow-yellow text-dark-gray hover:bg-yellow-300"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? "Sepete Ekle" : "Tükendi"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-card rounded flex items-center justify-center">
                <span className="text-sm font-bold text-secondary">TYS</span>
              </div>
              <span className="font-bold text-lg">Toz Yapı Teknolojileri</span>
            </div>
            <p className="text-sm opacity-90">
              KEŞFEDİN! Belki de ihtiyacınız olan ürün burada
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">İletişim</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Üniversiteler Mah. 1597. Cad Bilkent Center AVM No:3 Bilkent Çankaya ANKARA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+90536 773 14 04</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>merhaba@tozyapi.com.tr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>ozkan@tozyapi.com.tr</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ürün Grupları</h3>
            <div className="space-y-1 text-sm">
              <div>Panjur Sistemleri</div>
              <div>Kepenk Sistemleri</div>
              <div>Pergola & Rolling Roof</div>
              <div>Otomatik Kapı Sistemleri</div>
              <div>Zip Perde & Jaluziler</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hızlı Linkler</h3>
            <div className="space-y-1 text-sm">
              <div><a href="/" className="hover:text-accent transition-colors">Ana Sayfa</a></div>
              <div><a href="/products" className="hover:text-accent transition-colors">Ürünler</a></div>
              <div><a href="/about" className="hover:text-accent transition-colors">Hakkımızda</a></div>
              <div><a href="/contact" className="hover:text-accent transition-colors">İletişim</a></div>
              <div><a href="/quote" className="hover:text-accent transition-colors">Teklif Al</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-75">
            © 2024 Toz Yapı Teknolojileri. Tüm hakları saklıdır.
          </div>
          
          {/* Designer Logo Placeholder */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm opacity-75">Designed by</span>
            <div className="w-6 h-6 bg-card rounded flex items-center justify-center">
              <span className="text-xs font-bold text-secondary">DL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.products'), href: '#products', 
      children: [
        { name: t('nav.panjur'), href: '#panjur' },
        { name: t('nav.kepenk'), href: '#kepenk' },
        { name: t('nav.pergola'), href: '#pergola' },
        { name: t('nav.zipPerde'), href: '#zip-perde' },
        { name: t('nav.otomatikKapi'), href: '#otomatik-kapi' },
        { name: t('nav.sundurma'), href: '#sundurma' },
        { name: t('nav.havuzKapama'), href: '#havuz-kapama' },
        { name: t('nav.bahceCit'), href: '#bahce-cit' },
      ]
    },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+90 536 773 14 04</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>merhaba@tozyapi.com.tr</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden md:inline">Üniversiteler Mah. Bilkent Center AVM, Çankaya/ANKARA</span>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Toz Yapı Sistemleri</h1>
                <p className="text-xs text-muted-foreground">KEŞFEDİN ! Belkide İhtiyacınız olan ürün burada</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="nav-link px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="absolute top-full left-0 w-56 bg-popover border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn-outline-hero">
                {t('cta.quote')}
              </button>
              <button className="btn-hero">
                {t('cta.contact')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-popover border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full btn-outline-hero">
                  {t('cta.quote')}
                </button>
                <button className="w-full btn-hero">
                  {t('cta.contact')}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
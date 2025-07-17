import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const LunaAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting message
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting: Message = {
          id: Date.now().toString(),
          text: "Merhaba! Gününüz daha güzel geçmesini dilerim. Size bugün nasıl yardımcı olabilirim? Toz Yapı Teknolojileri ürünleri hakkında sorularınızı yanıtlayabilirim.",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages([greeting]);
      }, 500);
    }
  }, [isOpen, messages.length, t]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Contact preference detection
    if (input.includes('whatsapp') || input.includes('wp')) {
      return "WhatsApp üzerinden iletişim kurmak istediğinizi anlıyorum. Telefon numaranızı paylaşabilir misiniz? +90536 773 14 04 üzerinden size ulaşabilirim.";
    }
    if (input.includes('mail') || input.includes('email') || input.includes('e-mail')) {
      return "E-mail ile iletişim kurmayı tercih ediyorsunuz. merhaba@tozyapi.com.tr veya ozkan@tozyapi.com.tr adreslerine yazabilirsiniz.";
    }
    if (input.includes('telefon') || input.includes('phone') || input.includes('ara')) {
      return "Telefon ile görüşmeyi tercih ediyorsunuz. +90536 773 14 04 numarasından bize ulaşabilirsiniz.";
    }
    if (input.includes('instagram') || input.includes('insta')) {
      return "Instagram üzerinden takip etmek istiyorsunuz. Sosyal medya hesaplarımızdan bizi takip edebilirsiniz.";
    }
    
    // Product recommendations based on keywords
    if (input.includes('panjur') || input.includes('shutter')) {
      return "Panjur sistemlerimizde monoblok, dıştan takma, lento, gizli, ahşap, menteşeli ve yalıtımlı seçenekler bulunmaktadır. Hangi tür panjur sistemi için bilgi istiyorsunuz?";
    }
    if (input.includes('kepenk') || input.includes('rolling')) {
      return "Kepenk sistemlerimizde çelik, alüminyum, poliüretanlı, şeffaf, kayar katlanır ve yangına dayanımlı modeller mevcuttur. Size hangi kepenk türü uygun olabilir?";
    }
    if (input.includes('pergola') || input.includes('pergole')) {
      return "Pergola, rolling roof ve bio-climatic sistemlerimiz mevcuttur. Dış mekan yaşam alanlarınız için ideal çözümler sunuyoruz. Detaylı bilgi için iletişime geçelim.";
    }
    if (input.includes('kapı') || input.includes('door') || input.includes('gate')) {
      return "Otomatik kapı sistemlerimizde fotoselli, döner, 90°, hermetik, akustik, yangın, endüstriyel, seksiyonel ve garaj kapıları bulunur. Hangi kapı sistemi için bilgi istiyorsunuz?";
    }
    if (input.includes('fiyat') || input.includes('price') || input.includes('cost')) {
      return "Fiyat bilgisi için ürün detaylarına ihtiyacımız var. Hangi ürün grubu için fiyat öğrenmek istiyorsunuz? Size özel teklif hazırlayabiliriz.";
    }
    if (input.includes('kurulum') || input.includes('install') || input.includes('montaj')) {
      return "Tüm ürünlerimizde profesyonel kurulum hizmeti veriyoruz. Uzman ekibimiz ile güvenli montaj garantisi sağlıyoruz.";
    }
    if (input.includes('garanti') || input.includes('warranty')) {
      return "Ürünlerimizde 2-5 yıl arası garanti sürelerimiz mevcuttur. Garanti koşulları ürüne göre değişiklik göstermektedir.";
    }
    
    // Default responses
    const defaultResponses = [
      "Merhaba! Size nasıl yardımcı olabilirim? Ürün gruplarımız hakkında bilgi verebilir, iletişim tercihinizi öğrenebilirim.",
      "Panjur, kepenk, pergola, kapı sistemleri ve daha fazlası için buradayım. Neyi merak ediyorsunuz?",
      "Size en uygun çözümü bulabilmem için ihtiyacınızı öğrenebilir miyim? Hangi konuda yardım istiyorsunuz?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full shadow-elegant flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 animate-bounce-in"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-card border border-border rounded-2xl shadow-elegant z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary text-secondary-foreground rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/Luna-AI.jpg" 
                alt="Luna AI"
                className="w-10 h-10 rounded-full object-cover border-2 border-accent"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-10 h-10 bg-accent rounded-full items-center justify-center hidden">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Luna AI</h3>
                <p className="text-xs opacity-90">Müşteri Danışmanınız</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-secondary/80 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'chat-bubble'
                      : 'chat-bubble-user'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString('tr-TR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="chat-bubble">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('luna.placeholder')}
                className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
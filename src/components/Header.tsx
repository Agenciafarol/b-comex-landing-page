
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547991679196', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/33742b3a-3712-4162-b9bc-31d9c6619ae8.png" 
            alt="2B COMEX" 
            className="h-12 w-auto"
          />
        </div>

        {/* Navegação de idiomas e WhatsApp */}
        <div className="flex items-center gap-6">
          {/* Seletor de idiomas */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === 'pt' 
                  ? 'bg-2b-blue text-white' 
                  : 'text-gray-600 hover:text-2b-blue'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === 'en' 
                  ? 'bg-2b-blue text-white' 
                  : 'text-gray-600 hover:text-2b-blue'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === 'es' 
                  ? 'bg-2b-blue text-white' 
                  : 'text-gray-600 hover:text-2b-blue'
              }`}
            >
              ES
            </button>
          </div>

          {/* Botão WhatsApp */}
          <Button
            onClick={handleWhatsAppClick}
            className="bg-2b-orange hover:bg-orange-600 text-white font-medium px-6 py-2 hover-scale"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

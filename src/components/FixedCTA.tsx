
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FixedCTA = () => {
  const { t } = useLanguage();
  
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed-cta">
      <Button 
        onClick={handleCTAClick}
        size="lg" 
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-grow flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        {t('fixedCta.text')}
      </Button>
    </div>
  );
};

export default FixedCTA;

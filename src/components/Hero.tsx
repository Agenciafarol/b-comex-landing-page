
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-2b-blue mb-8 leading-tight animate-fade-in">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        
        <Button 
          onClick={handleCTAClick}
          className="bg-2b-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-scale animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;

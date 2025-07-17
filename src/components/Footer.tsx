
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-2b-blue py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src="/lovable-uploads/86d802ff-a307-491b-8cde-27c8490ce490.png" 
            alt="2B COMEX" 
            className="h-12 w-auto mb-8 filter brightness-0 invert"
          />
          
          {/* Navegação */}
          <div className="flex gap-8 mb-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {t('footer.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {t('footer.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {t('footer.contact')}
            </button>
          </div>
          
          {/* Copyright */}
          <p className="text-blue-200 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

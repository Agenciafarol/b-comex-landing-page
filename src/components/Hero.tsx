
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d2d72] via-[#3a3a85] to-[#2d2d72]">
      {/* Background elements with 2B COMEX colors */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ec652a]/10 rounded-full blur-3xl animate-pulse-grow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2d2d72]/20 rounded-full blur-3xl animate-pulse-grow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ec652a]/5 rounded-full blur-2xl animate-pulse-grow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/86d802ff-a307-491b-8cde-27c8490ce490.png" 
            alt="2B COMEX Logo" 
            className="h-16 md:h-20 mx-auto mb-6"
          />
          <span className="inline-flex items-center bg-gradient-to-r from-[#ec652a]/20 to-[#ec652a]/30 text-[#ec652a] px-6 py-3 rounded-full text-sm font-medium border border-[#ec652a]/30 backdrop-blur-xl shadow-2xl">
            <span className="w-2 h-2 bg-[#ec652a] rounded-full mr-3 animate-pulse"></span>
            {t('hero.badge')}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-right bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
          {t('hero.title')}{' '}
          <span className="text-transparent bg-gradient-to-r from-[#ec652a] via-[#ff7a3d] to-[#ec652a] bg-clip-text animate-pulse">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="bg-gradient-to-r from-[#ec652a] to-[#ff7a3d] hover:from-[#d55a24] hover:to-[#ec652a] text-white font-semibold rounded-2xl shadow-2xl hover:shadow-[#ec652a]/25 hover:scale-105 transition-all duration-300 border border-[#ec652a]/20 px-8 py-4 text-lg"
          >
            {t('hero.cta')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
        
        {/* Stats - Simplified */}
        <div style={{ animationDelay: '1.2s' }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ec652a] mb-2">20+</div>
            <div className="text-slate-400 text-sm">{t('hero.stats.experience')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ec652a] mb-2">500+</div>
            <div className="text-slate-400 text-sm">{t('hero.stats.companies')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ec652a] mb-2">50+</div>
            <div className="text-slate-400 text-sm">{t('hero.stats.countries')}</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl bg-white/5">
          <div className="w-1.5 h-4 bg-gradient-to-b from-[#ec652a] to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

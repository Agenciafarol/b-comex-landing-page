
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Shield } from 'lucide-react';
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
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-2b-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-2b-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-2b-blue/10 to-2b-orange/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-pulse-grow">
        <div className="w-12 h-12 bg-2b-blue/10 rounded-lg flex items-center justify-center">
          <Globe className="w-6 h-6 text-2b-blue" />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse-grow" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-2b-orange/10 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-2b-orange" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-pulse-grow" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-2b-blue/10 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-2b-blue" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-2b-blue/10 text-2b-blue px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-2b-blue rounded-full animate-pulse"></div>
              Especialistas em Comércio Exterior
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-2b-blue mb-6 leading-tight animate-fade-in">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            {/* Features highlights */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-2b-orange rounded-full"></div>
                <span className="text-sm font-medium">Consultoria Especializada</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-2b-orange rounded-full"></div>
                <span className="text-sm font-medium">Processos Ágeis</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-2b-orange rounded-full"></div>
                <span className="text-sm font-medium">Resultados Garantidos</span>
              </div>
            </div>
            
            <Button 
              onClick={handleCTAClick} 
              className="bg-2b-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-scale animate-fade-in group" 
              style={{ animationDelay: '0.4s' }}
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

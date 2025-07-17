
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
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-2b-blue/10 text-2b-blue px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-2b-blue rounded-full animate-pulse"></div>
              Especialista em Comércio Exterior
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-2b-blue mb-6 leading-tight animate-fade-in">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            {/* Features highlights */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-2b-blue to-2b-orange rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2b-blue">2B COMEX</h3>
                    <p className="text-sm text-gray-600">Comércio Exterior</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Exportações</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-2b-blue to-2b-orange rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-2b-blue">+75%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Importações</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-2b-orange to-2b-blue rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-2b-orange">+80%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Consultoria</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-2b-blue to-2b-orange rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-2b-blue">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -top-4 -right-4 bg-2b-orange text-white p-3 rounded-xl shadow-lg animate-pulse-grow">
                <TrendingUp className="w-5 h-5" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-2b-blue text-white p-3 rounded-xl shadow-lg animate-pulse-grow" style={{ animationDelay: '1s' }}>
                <Shield className="w-5 h-5" />
              </div>

              {/* Background decorative shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-2b-blue/5 to-2b-orange/5 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 px-6 py-3 rounded-full text-sm font-medium border border-orange-500/30 backdrop-blur-xl shadow-2xl">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></span>
            25+ anos transformando negócios globalmente
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-right bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
          Expanda sua empresa para o{' '}
          <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text animate-pulse">
            mundo
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Conectamos sua empresa a oportunidades globais com 
          <span className="text-orange-400 font-semibold"> segurança, estratégia e excelência</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border border-orange-400/20"
          >
            Começar agora
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl backdrop-blur-xl"
          >
            Saiba mais
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">25+</div>
            <div className="text-slate-400 text-sm">Anos de experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-slate-400 text-sm">Empresas atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Países alcançados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">98%</div>
            <div className="text-slate-400 text-sm">Satisfação dos clientes</div>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl bg-white/5">
          <div className="w-1.5 h-4 bg-gradient-to-b from-orange-400 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

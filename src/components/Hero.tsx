
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Navigation with Logo */}
      <nav className="relative z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1ca0dc9c-48b1-4065-85f1-843ece309d19.png" 
              alt="2B COMEX Logo" 
              className="h-12 w-auto bg-white rounded-lg px-2 py-1"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="nav-link text-white font-opensans font-medium hover:text-orange-500 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={scrollToServices}
              className="nav-link text-white font-opensans font-medium hover:text-orange-500 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={scrollToContact}
              className="nav-link text-white font-opensans font-medium hover:text-orange-500 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-orange-500 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 scroll-animate">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold leading-tight">
              Expanda sua empresa para o{' '}
              <span className="gradient-text">mundo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-opensans leading-relaxed">
              25+ anos conectando empresas brasileiras a oportunidades globais com estratégia, segurança e resultados comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift flex items-center gap-3"
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 hover-lift flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Conhecer serviços
              </Button>
            </div>
          </div>
          
          <div className="relative scroll-animate" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-orange-500/20 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-orange-500/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-opensans">25+ anos de experiência</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-opensans">+500 empresas atendidas</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-opensans">Presença em 40+ países</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

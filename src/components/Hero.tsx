
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')",
          }}
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 video-overlay"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white animate-fade-in">
          <div className="mb-8 animate-slide-in-left">
            <span className="inline-flex items-center bg-orange-500/20 text-orange-400 px-6 py-3 rounded-full text-sm font-medium border border-orange-500/30 backdrop-blur-sm">
              ✨ 25+ anos de experiência internacional
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Expanda sua empresa para o mundo com{' '}
            <span className="text-orange-500 gradient-text">segurança e estratégia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-slate-300 leading-relaxed font-opensans animate-fade-up" style={{ animationDelay: '0.6s' }}>
            A 2B COMEX é referência em comércio exterior há mais de 25 anos, 
            conectando empresas a oportunidades globais com eficiência, agilidade e conformidade.
          </p>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 text-xl font-montserrat font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Falar com um especialista
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-slate-900/20 rounded-2xl blur-xl"></div>
            
            {/* Main image */}
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop" 
              alt="Comércio Internacional - Importação e Exportação"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/10"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold">Import</div>
                <div className="text-sm font-opensans">Export</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-orange-500/30">
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold text-orange-500">25+</div>
                <div className="text-sm font-opensans">Anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

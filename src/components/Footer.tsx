
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-orange-500 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/1ca0dc9c-48b1-4065-85f1-843ece309d19.png" 
                alt="2B COMEX Logo" 
                className="h-16 w-auto bg-white rounded-lg px-3 py-2"
              />
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-opensans leading-relaxed">
              Quer importar, exportar ou internacionalizar sua empresa com estratégia e segurança? 
              Fale com a 2B COMEX.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="mb-12">
            <nav className="flex justify-center space-x-12">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="nav-link text-slate-300 font-opensans font-medium text-lg"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="nav-link text-slate-300 font-opensans font-medium text-lg"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link text-slate-300 font-opensans font-medium text-lg"
              >
                Contato
              </button>
            </nav>
          </div>
          
          {/* Compliance badges */}
          <div className="mb-12 flex justify-center space-x-8">
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm font-opensans">ISO 9001</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm font-opensans">Compliance</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm font-opensans">25+ Anos</span>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 font-opensans">
              © 2025 2B COMEX – Especialista em Comércio Exterior
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

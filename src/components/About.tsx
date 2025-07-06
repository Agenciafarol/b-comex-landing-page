
import React from 'react';

const About = () => {
  return (
    <>
      <div className="section-separator"></div>
      <section className="py-24 bg-white textured-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-8">
                Especialistas em soluções globais
              </h2>
              
              <div className="space-y-8 text-lg text-slate-700 font-opensans">
                <p className="leading-relaxed">
                  Com mais de 25 anos de atuação, a 2B COMEX oferece soluções completas 
                  em importação, exportação e internacionalização de empresas. Atendemos 
                  organizações brasileiras e estrangeiras que buscam expandir sua atuação 
                  com agilidade, economia e total conformidade legal.
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-orange-50 p-8 rounded-xl border-l-4 border-orange-500 shadow-lg">
                  <p className="text-2xl font-montserrat font-semibold text-slate-900 italic leading-relaxed">
                    "Conectamos empresas ao mundo, com estratégia, ética e excelência."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                    <span className="ml-4 text-sm font-medium text-slate-600 uppercase tracking-wide">Nosso compromisso</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-slate-900/20 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                  alt="Equipe 2B COMEX"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold">25+</div>
                    <div className="text-sm font-opensans">Anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>
    </>
  );
};

export default About;

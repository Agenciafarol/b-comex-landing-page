
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Especialistas em soluções globais
            </h2>
            
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                Com mais de 25 anos de atuação, a 2B COMEX oferece soluções completas 
                em importação, exportação e internacionalização de empresas. Atendemos 
                organizações brasileiras e estrangeiras que buscam expandir sua atuação 
                com agilidade, economia e total conformidade legal.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-xl font-semibold text-slate-900 italic">
                  "Conectamos empresas ao mundo, com estratégia, ética e excelência."
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                alt="Equipe 2B COMEX"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

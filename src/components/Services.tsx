
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Indústrias Brasileiras",
      description: "Estratégias para levar seus produtos ao mercado internacional"
    },
    {
      icon: <ArrowDown className="w-8 h-8" />,
      title: "Empresas Estrangeiras", 
      description: "Navegação completa pelas regulamentações e oportunidades locais"
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Importação Ágil",
      description: "Importação otimizada, econômica e segura"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Como podemos ajudar sua empresa
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
          >
            Quero saber mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Container, Plane, Map } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Container className="w-10 h-10" />,
      title: "Indústrias Brasileiras",
      description: "Estratégias para levar seus produtos ao mercado internacional",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Empresas Estrangeiras", 
      description: "Navegação completa pelas regulamentações e oportunidades locais",
      bgColor: "bg-green-500"
    },
    {
      icon: <Map className="w-10 h-10" />,
      title: "Importação Ágil",
      description: "Importação otimizada, econômica e segura",
      bgColor: "bg-orange-500"
    }
  ];

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
            Como podemos ajudar sua empresa
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover-lift text-center scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 ${service.bgColor} text-white rounded-2xl flex items-center justify-center mx-auto mb-8`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-700 font-opensans leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center scroll-animate" style={{ animationDelay: '0.8s' }}>
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-montserrat font-semibold hover:scale-105 transition-all duration-300"
          >
            Quero saber mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

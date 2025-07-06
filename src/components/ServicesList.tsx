
import React from 'react';

const ServicesList = () => {
  const services = [
    {
      title: "Internacionalização de Empresas",
      description: "Estratégias completas para expansão internacional"
    },
    {
      title: "Inteligência de Mercado", 
      description: "Análises detalhadas de oportunidades globais"
    },
    {
      title: "Treinamento de Equipes",
      description: "Capacitação especializada em comércio exterior"
    },
    {
      title: "Regimes Especiais",
      description: "Aproveitamento de benefícios fiscais e tributários"
    },
    {
      title: "Logística Internacional",
      description: "Gestão completa da cadeia de suprimentos global"
    },
    {
      title: "Consultoria Documental",
      description: "Elaboração e revisão de documentos comerciais"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Soluções completas para todas as suas necessidades em comércio exterior
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-lg hover:bg-slate-100 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-3 h-16 bg-orange-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

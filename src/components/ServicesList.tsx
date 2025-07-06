
import React from 'react';
import { Globe, BarChart3, GraduationCap, FileText, Truck, ClipboardList } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      title: "Internacionalização de Empresas",
      description: "Estratégias completas para expansão internacional",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Inteligência de Mercado", 
      description: "Análises detalhadas de oportunidades globais",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Treinamento de Equipes",
      description: "Capacitação especializada em comércio exterior",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "Regimes Especiais",
      description: "Aproveitamento de benefícios fiscais e tributários",  
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      title: "Logística Internacional",
      description: "Gestão completa da cadeia de suprimentos global",
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Consultoria Documental",
      description: "Elaboração e revisão de documentos comerciais",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-opensans leading-relaxed">
            Soluções completas para todas as suas necessidades em comércio exterior
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover-lift scroll-animate border-2 border-transparent hover:border-orange-500/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-orange-500 mb-6">{service.icon}</div>
              <div className="w-4 h-20 bg-gradient-to-b from-orange-500 to-transparent rounded-full mb-6"></div>
              <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-700 font-opensans leading-relaxed">
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

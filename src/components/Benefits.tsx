
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Agilidade e Economia Real",
      description: "Processos otimizados que reduzem custos e tempo"
    },
    {
      title: "Atendimento Direto e Transparente", 
      description: "Comunicação clara em todas as etapas"
    },
    {
      title: "Estratégia Sob Medida",
      description: "Soluções personalizadas para seu negócio"
    },
    {
      title: "Segurança Jurídica e Operacional",
      description: "Total conformidade legal e redução de riscos"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que escolher a 2B COMEX?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center text-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

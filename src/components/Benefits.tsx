
import React from 'react';
import { Zap, MessageCircle, Target, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Agilidade e Economia Real",
      description: "Processos otimizados que reduzem custos e tempo",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Atendimento Direto e Transparente", 
      description: "Comunicação clara em todas as etapas",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Estratégia Sob Medida",
      description: "Soluções personalizadas para seu negócio",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Segurança Jurídica e Operacional",
      description: "Total conformidade legal e redução de riscos",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Por que escolher a 2B COMEX?
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center text-white hover-lift scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 font-opensans leading-relaxed">
                  {benefit.description}
                </p>
                <div className="mt-6 h-px w-12 bg-gradient-to-r from-orange-500 to-transparent mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-separator"></div>
    </>
  );
};

export default Benefits;

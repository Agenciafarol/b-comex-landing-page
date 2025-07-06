import React from 'react';
import { Zap, MessageCircle, Target, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [{
    title: "Agilidade e Economia Real",
    description: "Processos otimizados que reduzem custos e tempo",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500"
  }, {
    title: "Atendimento Direto e Transparente", 
    description: "Comunicação clara em todas as etapas",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500"
  }, {
    title: "Estratégia Sob Medida",
    description: "Soluções personalizadas para seu negócio",
    icon: <Target className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  }, {
    title: "Segurança Jurídica e Operacional",
    description: "Total conformidade legal e redução de riscos",
    icon: <Shield className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500"
  }];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-grow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-grow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse-grow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 left-3/4 w-1.5 h-1.5 bg-orange-300/40 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-slide-x" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-20 scroll-animate">
          <span className="inline-flex items-center bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/30 backdrop-blur-xl">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            Por que nos escolher
          </span>
          <h2 className="text-4xl md:text-6xl text-white mb-6 leading-tight font-extrabold lg:text-5xl">
            Por que escolher a{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-5xl">2BCOMEX?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center text-white hover:-translate-y-4 scroll-animate transition-all duration-500" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-orange-500/25 group-hover:scale-110 transition-all duration-300`}>
                  {benefit.icon}
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl mx-auto opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                {benefit.description}
              </p>
              
              <div className={`mt-6 h-px w-16 bg-gradient-to-r ${benefit.color} mx-auto rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

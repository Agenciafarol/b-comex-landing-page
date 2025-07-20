
import React from 'react';
import { Container, Building2, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatWeDo = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Package className="w-8 h-8 text-2b-orange" />,
      title: t('services.export'),
      description: t('services.export.desc')
    },
    {
      icon: <Building2 className="w-8 h-8 text-2b-orange" />,
      title: t('services.foreign'),
      description: t('services.foreign.desc')
    },
    {
      icon: <Container className="w-8 h-8 text-2b-orange" />,
      title: t('services.import'),
      description: t('services.import.desc')
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/f293a357-f9c1-499e-b767-569a25023a09.png')`,
          filter: 'brightness(0.7) contrast(1.2)'
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex justify-center mb-16">
          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-white/20">
            <h2 className="text-3xl font-semibold text-2b-blue text-center">
              {t('services.title')}
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 p-8 rounded-lg shadow-sm hover-scale border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-2b-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

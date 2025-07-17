
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
    <section className="relative min-h-[600px]">
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/8064952f-0977-4878-ba58-fbdd2a71934e.png')`,
          opacity: 0.3
        }}
      />

      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-gray-50/80 z-5" />

      {/* Services content section */}
      <div className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="text-3xl font-semibold text-2b-blue text-center mb-16">
            {t('services.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/95 p-8 rounded-lg shadow-sm hover-scale border border-gray-100 backdrop-blur-sm"
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
      </div>

      {/* Fade effect to blue section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2d2d72] to-transparent z-20" />
    </section>
  );
};

export default WhatWeDo;

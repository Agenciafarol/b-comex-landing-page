
import React from 'react';
import { Award, Target, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: t('why.experience')
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: t('why.consulting')
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: t('why.service')
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: t('why.compliance')
    }
  ];

  return (
    <section className="py-20 bg-2b-blue">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-white text-center mb-16">
          {t('why.title')}
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium text-white leading-tight">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

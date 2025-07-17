import React from 'react';
import { Award, Target, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const WhyChooseUs = () => {
  const {
    t
  } = useLanguage();
  const benefits = [{
    icon: <Award className="w-8 h-8 text-white" />,
    title: t('why.experience')
  }, {
    icon: <Target className="w-8 h-8 text-white" />,
    title: t('why.consulting')
  }, {
    icon: <Users className="w-8 h-8 text-white" />,
    title: t('why.service')
  }, {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: t('why.compliance')
  }];
  return <section className="py-20 bg-2b-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4 animate-fade-in">
            {t('why.title')}
          </h2>
          <div className="w-20 h-1 bg-2b-orange mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="group text-center animate-fade-in hover-scale" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:border-2b-orange/50">
                <div className="flex justify-center mb-6">
                  <div className="bg-2b-orange p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white leading-tight group-hover:text-gray-100 transition-colors">
                  {benefit.title}
                </h3>
              </div>
            </div>)}
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;
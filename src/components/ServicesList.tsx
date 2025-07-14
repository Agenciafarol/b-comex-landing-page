
import React from 'react';
import { Globe, BarChart3, GraduationCap, FileText, Truck, ClipboardList } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesList = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('servicesList.internationalization'),
      description: t('servicesList.internationalization.desc'),
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t('servicesList.intelligence'), 
      description: t('servicesList.intelligence.desc'),
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: t('servicesList.training'),
      description: t('servicesList.training.desc'),
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: t('servicesList.regimes'),
      description: t('servicesList.regimes.desc'),  
      icon: <ClipboardList className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: t('servicesList.logistics'),
      description: t('servicesList.logistics.desc'),
      icon: <Truck className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: t('servicesList.consulting'),
      description: t('servicesList.consulting.desc'),
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-20 scroll-animate">
          <span className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {t('servicesList.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t('servicesList.title')}{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
              {t('servicesList.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('servicesList.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl hover:shadow-2xl hover:shadow-slate-900/10 scroll-animate border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className={`w-20 h-1 bg-gradient-to-r ${service.color} rounded-full ml-4 opacity-60`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.description}
                </p>
                
                {/* Arrow icon */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

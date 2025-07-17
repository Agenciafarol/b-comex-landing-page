
import React from 'react';
import { 
  Globe, 
  BarChart3, 
  GraduationCap, 
  FileText, 
  Truck, 
  ClipboardCheck 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MainServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.internationalization')
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.intelligence')
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.training')
    },
    {
      icon: <FileText className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.regimes')
    },
    {
      icon: <Truck className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.logistics')
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-2b-orange" />,
      title: t('mainServices.consulting')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-2b-blue text-center mb-16">
          {t('mainServices.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover-scale border border-gray-100"
            >
              <div className="flex items-center gap-4">
                {service.icon}
                <h3 className="text-lg font-medium text-2b-blue">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;

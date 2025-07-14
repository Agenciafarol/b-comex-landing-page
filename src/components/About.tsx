
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="scroll-animate order-2 lg:order-1">
            <div className="mb-8">
              <span className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                {t('about.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                {t('about.title')}{' '}
                <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                  {t('about.titleHighlight')}
                </span>
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-slate-700">
              <p className="leading-relaxed text-xl">
                {t('about.description')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{t('about.compliance.title')}</h4>
                    <p className="text-slate-600">{t('about.compliance.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{t('about.agility.title')}</h4>
                    <p className="text-slate-600">{t('about.agility.description')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 via-orange-25 to-yellow-50 p-8 rounded-2xl border border-orange-100 shadow-lg">
                <blockquote className="text-2xl font-semibold text-slate-900 italic leading-relaxed mb-4">
                  "{t('about.quote')}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium text-slate-600 uppercase tracking-wide">{t('about.commitment')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-animate order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-slate-900/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=500&fit=crop" 
                  alt="Equipe 2B COMEX"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Modern floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm opacity-90">{t('hero.stats.experience')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

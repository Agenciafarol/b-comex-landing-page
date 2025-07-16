import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !bg1Ref.current || !bg2Ref.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalize coordinates to -1 to 1 range
      const normalizedX = (x / rect.width - 0.5) * 2;
      const normalizedY = (y / rect.height - 0.5) * 2;
      
      // Apply subtle movement to background elements
      const moveX1 = normalizedX * 20;
      const moveY1 = normalizedY * 20;
      const moveX2 = normalizedX * -15;
      const moveY2 = normalizedY * -15;
      
      bg1Ref.current.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
      bg2Ref.current.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
      
      // Move floating elements
      floatingElements.current.forEach((element, index) => {
        if (element) {
          const multiplier = (index + 1) * 8;
          const moveX = normalizedX * multiplier * (index % 2 === 0 ? 1 : -1);
          const moveY = normalizedY * multiplier * (index % 2 === 0 ? -1 : 1);
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Modern background elements with mouse movement */}
      <div className="absolute inset-0">
        <div 
          ref={bg1Ref}
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full opacity-50 blur-3xl transition-transform duration-300 ease-out"
        ></div>
        <div 
          ref={bg2Ref}
          className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full opacity-30 blur-3xl transition-transform duration-300 ease-out"
        ></div>
        
        {/* Floating geometric elements */}
        <div 
          ref={el => floatingElements.current[0] = el}
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-orange-200/30 rounded-lg rotate-45 transition-transform duration-500 ease-out"
        ></div>
        <div 
          ref={el => floatingElements.current[1] = el}
          className="absolute top-1/2 right-1/4 w-6 h-6 bg-slate-200/40 rounded-full transition-transform duration-500 ease-out"
        ></div>
        <div 
          ref={el => floatingElements.current[2] = el}
          className="absolute bottom-1/3 left-1/4 w-4 h-16 bg-orange-100/20 rounded-full transition-transform duration-500 ease-out"
        ></div>
        <div 
          ref={el => floatingElements.current[3] = el}
          className="absolute top-3/4 right-1/3 w-12 h-2 bg-slate-100/50 rounded-full transition-transform duration-500 ease-out"
        ></div>
        <div 
          ref={el => floatingElements.current[4] = el}
          className="absolute top-1/3 right-1/2 w-3 h-3 bg-orange-300/25 rounded-full transition-transform duration-500 ease-out"
        ></div>
        <div 
          ref={el => floatingElements.current[5] = el}
          className="absolute bottom-1/4 left-1/2 w-10 h-1 bg-slate-200/30 rounded-full rotate-12 transition-transform duration-500 ease-out"
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate text-center">
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
              
              {/* Container box for compliance and agility */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
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
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 via-orange-25 to-yellow-50 p-8 rounded-2xl border border-orange-100 shadow-lg max-w-3xl mx-auto">
                <blockquote className="text-2xl font-semibold text-slate-900 italic leading-relaxed mb-4">
                  "{t('about.quote')}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium text-slate-600 uppercase tracking-wide">{t('about.commitment')}</span>
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

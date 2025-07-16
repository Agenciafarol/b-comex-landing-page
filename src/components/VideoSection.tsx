
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="section-separator"></div>
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-grow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-grow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-grow" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-orange-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-60 left-3/4 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Moving gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-slide-x" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              {t('video.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-16 font-opensans">{t('video.subtitle')}</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-16"></div>
            
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative inline-block cursor-pointer group scroll-animate" style={{
                  animationDelay: '0.3s'
                }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://img.youtube.com/vi/-RraTIBN8GE/maxresdefault.jpg" 
                      alt="Vídeo institucional 2B COMEX" 
                      className="rounded-2xl shadow-2xl w-full max-w-3xl transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-slate-900/40 transition-all duration-300">
                      <div className="relative">
                        <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-400 transition-all duration-300 shadow-2xl">
                          <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full animate-float" style={{
                    animationDelay: '1s'
                  }}></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/-RraTIBN8GE?autoplay=1" 
                    title="Vídeo Institucional 2B COMEX" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="rounded-lg"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>
    </>
  );
};

export default VideoSection;

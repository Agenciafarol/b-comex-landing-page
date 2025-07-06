
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VideoSection = () => {
  return (
    <>
      <div className="section-separator"></div>
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Veja como ajudamos empresas a conquistar o mercado global
            </h2>
            <p className="text-xl text-slate-300 mb-16 font-opensans">
              Assista à nossa apresentação institucional
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-16"></div>
            
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative inline-block cursor-pointer group scroll-animate" style={{ animationDelay: '0.3s' }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop" 
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
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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

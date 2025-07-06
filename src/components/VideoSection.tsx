
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VideoSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Veja como ajudamos empresas a conquistar o mercado global
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Assista à nossa apresentação institucional
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative inline-block cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop" 
                    alt="Vídeo institucional 2B COMEX"
                    className="rounded-lg shadow-2xl w-full max-w-2xl"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 rounded-lg flex items-center justify-center group-hover:bg-slate-900/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
  );
};

export default VideoSection;

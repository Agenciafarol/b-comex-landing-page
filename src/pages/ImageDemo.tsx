
import React from 'react';
import ImageGenerator from '../components/ImageGenerator';

const ImageDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Gerador de Imagens de Navios
          </h1>
          <p className="text-lg text-slate-600">
            Use IA para gerar imagens realistas de navios navegando no mar
          </p>
        </div>
        
        <div className="flex justify-center">
          <ImageGenerator />
        </div>
      </div>
    </div>
  );
};

export default ImageDemo;

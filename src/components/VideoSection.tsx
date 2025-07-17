
import React from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-2b-blue mb-12">
          {t('video.title')}
        </h2>
        
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
          <div className="aspect-video bg-gradient-to-br from-2b-blue to-blue-600 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play className="w-8 h-8 text-2b-blue ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

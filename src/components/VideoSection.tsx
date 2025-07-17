
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-2b-blue mb-12">
          {t('video.title')}
        </h2>
        
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
          <div className="aspect-video relative">
            {!isVideoPlaying ? (
              // Preview/Thumbnail
              <div className="relative w-full h-full">
                <img 
                  src="https://img.youtube.com/vi/-RraTIBN8GE/maxresdefault.jpg"
                  alt="Video Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button 
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-8 h-8 text-2b-blue ml-1" />
                  </button>
                </div>
              </div>
            ) : (
              // YouTube Video Embed
              <iframe
                src="https://www.youtube.com/embed/-RraTIBN8GE?autoplay=1"
                title="2B COMEX - Vídeo Institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

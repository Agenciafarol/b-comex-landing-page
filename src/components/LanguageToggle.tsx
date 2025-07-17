
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex gap-1 bg-white/10 backdrop-blur-xl rounded-lg p-1 border border-white/20">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'pt' | 'en' | 'es')}
            variant="ghost"
            size="sm"
            className={`
              px-3 py-1 text-sm font-medium rounded-md transition-all duration-200
              ${language === lang.code 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;

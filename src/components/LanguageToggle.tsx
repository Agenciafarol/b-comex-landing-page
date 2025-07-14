
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language === 'pt' ? 'EN' : 'PT'}
      </Button>
    </div>
  );
};

export default LanguageToggle;

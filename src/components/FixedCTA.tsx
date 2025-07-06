
import React from 'react';
import { Button } from '@/components/ui/button';

const FixedCTA = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed-cta">
      <Button 
        onClick={handleCTAClick}
        size="lg" 
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-grow"
      >
        💬 Falar com especialista
      </Button>
    </div>
  );
};

export default FixedCTA;

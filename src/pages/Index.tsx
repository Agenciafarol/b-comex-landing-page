import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import ServicesList from '../components/ServicesList';
import VideoSection from '../components/VideoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FixedCTA from '../components/FixedCTA';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <About />
      <div id="services">
        <Services />
      </div>
      <Benefits />
      <ServicesList />
      <VideoSection />
      <Contact />
      <Footer />
      <FixedCTA />
    </div>
  );
};

export default Index;

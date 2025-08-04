
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import MainServices from '../components/MainServices';
import VideoSection from '../components/VideoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <MainServices />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

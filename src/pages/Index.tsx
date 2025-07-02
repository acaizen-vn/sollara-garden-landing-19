
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import SportsSection from '@/components/SportsSection';
import ImageCarousel from '@/components/ImageCarousel';
import ContactForm from '@/components/ContactForm';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/effects/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <SportsSection />
      <ImageCarousel />
      <ContactForm />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;

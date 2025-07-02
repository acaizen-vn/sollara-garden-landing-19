
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import LeisureSection from '@/components/LeisureSection';
import SportsSection from '@/components/SportsSection';
import ImageCarousel from '@/components/ImageCarousel';
import RealizeSection from '@/components/RealizeSection';
import CompanySection from '@/components/CompanySection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/effects/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <LeisureSection />
      <SportsSection />
      <ImageCarousel />
      <RealizeSection />
      <CompanySection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

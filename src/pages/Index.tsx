
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImageCarousel from '@/components/ImageCarousel';
import DifferentialsSection from '@/components/DifferentialsSection';
import CompanySection from '@/components/CompanySection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ImageCarousel />
      <DifferentialsSection />
      <CompanySection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

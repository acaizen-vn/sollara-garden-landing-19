
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 44, 35, 0.7), rgba(42, 27, 20, 0.8)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 uppercase tracking-wider text-shadow">
            SOLLARA GARDEN
          </h1>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-medium text-luxury-gold-light mb-8 uppercase tracking-wide text-shadow">
            BARRA MANSA
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 font-inter uppercase tracking-wider text-shadow">
            NOVIDADE NA REGIÃO SUL FLUMINENSE
          </p>
          
          {/* CTA Button */}
          <div className="animate-scale-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="btn-primary text-lg px-12 py-6 mb-12"
            >
              QUERO SABER MAIS
            </Button>
          </div>
          
          {/* Video Preview */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
            <p className="text-white/80 mt-4 text-sm uppercase tracking-wide">
              ASSISTA O VÍDEO INSTITUCIONAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

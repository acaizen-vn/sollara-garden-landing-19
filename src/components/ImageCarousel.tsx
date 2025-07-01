
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Placeholder images - will be replaced with admin uploaded images
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Fachada do Sollara Garden'
    },
    {
      url: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Interior moderno'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Área de lazer'
    },
    {
      url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Paisagem natural'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            GALERIA DE FOTOS
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="section-subtitle">
            Conheça cada detalhe do seu futuro lar
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-scale-in">
            <div className="aspect-[16/9] relative">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-luxury-gold shadow-lg scale-110'
                    : 'border-transparent hover:border-luxury-gold/50 hover:scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-luxury-gold scale-125'
                    : 'bg-luxury-gold/30 hover:bg-luxury-gold/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

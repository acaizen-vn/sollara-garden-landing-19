
import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const ImageCarousel = () => {
  const { carouselImages } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  }, [carouselImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  if (!carouselImages || carouselImages.length === 0) return null;

  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title text-luxury-brown">
              GALERIA SOLLARA GARDEN
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="section-subtitle text-luxury-brown-light">
              Conheça os ambientes e diferenciais do empreendimento
            </p>
          </div>

          <div className="relative">
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-luxury-beige">
              <div className="aspect-video relative">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {/* Lazy loading skeleton */}
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={image.url}
                      alt={image.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={index <= 2 ? 'eager' : 'lazy'}
                      onLoad={() => handleImageLoad(index)}
                    />
                    
                    {/* Image overlay with title - melhorado para mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 drop-shadow-lg">
                        {image.title}
                      </h3>
                      {image.description && (
                        <p className="text-sm sm:text-base md:text-lg opacity-90 drop-shadow-md">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows - melhorados para mobile */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-2 md:p-3 text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-2 md:p-3 text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-luxury-gold scale-125'
                      : 'bg-luxury-gold/40 hover:bg-luxury-gold/60'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

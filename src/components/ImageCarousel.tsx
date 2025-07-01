
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';

// Imagens padrão do Sollara Garden
const defaultImages = [
  {
    id: 'default-1',
    url: '/lovable-uploads/3e057a4c-5472-43d1-9559-aed684c23b2b.png',
    alt: 'Casas modernas do Sollara Garden - Vista frontal das residências'
  },
  {
    id: 'default-2',
    url: '/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png',
    alt: 'Vista aérea do condomínio com área de lazer completa'
  },
  {
    id: 'default-3',
    url: '/lovable-uploads/bd930467-f1c2-43e3-a9dd-356103dc95df.png',
    alt: 'Área esportiva com quadra poliesportiva e piscina'
  },
  {
    id: 'default-4',
    url: '/lovable-uploads/de85cc7c-baa4-4c09-a3f4-be28b3ded2d2.png',
    alt: 'Portaria moderna e elegante do condomínio'
  },
  {
    id: 'default-5',
    url: '/lovable-uploads/01ff5adb-8b94-4939-9f7e-69e308a4e950.png',
    alt: 'Fachadas das casas com design contemporâneo'
  },
  {
    id: 'default-6',
    url: '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png',
    alt: 'Área de piscina adulto com deck e lounges'
  },
  {
    id: 'default-7',
    url: '/lovable-uploads/ab0c69b5-1548-40f5-9283-148fe297f7f6.png',
    alt: 'Vista panorâmica do condomínio com paisagismo'
  },
  {
    id: 'default-8',
    url: '/lovable-uploads/ef880c3a-6fab-4c98-8178-ef3430ef5ea9.png',
    alt: 'Playground infantil com equipamentos modernos'
  },
  {
    id: 'default-9',
    url: '/lovable-uploads/a0a122bb-6eaf-478d-a962-39e8f03201eb.png',
    alt: 'Área de lazer com piscina e espaço gourmet'
  },
  {
    id: 'default-10',
    url: '/lovable-uploads/7e70fce2-fd47-4b88-937f-99b337b7e622.png',
    alt: 'Vista completa da área de lazer do condomínio'
  }
];

const ImageCarousel = () => {
  const { carouselImages } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Combinar imagens padrão com as imagens do admin
  const allImages = [...defaultImages, ...carouselImages];

  // Preload imagens adjacentes para melhor UX
  useEffect(() => {
    if (allImages.length === 0) return;

    const preloadImage = (url: string) => {
      if (loadedImages.has(url) || imageErrors.has(url)) return;
      
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, url]));
      };
      img.onerror = () => {
        setImageErrors(prev => new Set([...prev, url]));
      };
      img.src = url;
    };

    // Preload imagem atual e adjacentes
    const currentImage = allImages[currentIndex];
    const nextImage = allImages[(currentIndex + 1) % allImages.length];
    const prevImage = allImages[currentIndex === 0 ? allImages.length - 1 : currentIndex - 1];

    if (currentImage) preloadImage(currentImage.url);
    if (nextImage && nextImage !== currentImage) preloadImage(nextImage.url);
    if (prevImage && prevImage !== currentImage && prevImage !== nextImage) preloadImage(prevImage.url);
  }, [currentIndex, allImages, loadedImages, imageErrors]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageError = (url: string) => {
    setImageErrors(prev => new Set([...prev, url]));
  };

  const ImageWithFallback = ({ 
    src, 
    alt, 
    className, 
    onClick 
  }: { 
    src: string; 
    alt: string; 
    className?: string; 
    onClick?: () => void;
  }) => {
    const [isLoading, setIsLoading] = useState(!loadedImages.has(src));
    const hasError = imageErrors.has(src);

    if (hasError) {
      return (
        <div className={`${className} bg-gray-200 flex items-center justify-center`} onClick={onClick}>
          <div className="text-center text-gray-500">
            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Imagem não disponível</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        {isLoading && (
          <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center absolute inset-0`}>
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          onClick={onClick}
          loading="lazy"
          onLoad={() => {
            setIsLoading(false);
            setLoadedImages(prev => new Set([...prev, src]));
          }}
          onError={() => handleImageError(src)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title-modern text-4xl md:text-5xl font-bold bg-gradient-to-r from-luxury-red to-luxury-gold bg-clip-text text-transparent">
            GALERIA SOLLARA GARDEN
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-luxury-red to-luxury-gold mx-auto mb-8"></div>
          <p className="section-subtitle-modern text-xl">
            Conheça cada detalhe do seu futuro lar de luxo
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Imagem Principal com design inovador */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-luxury-gold/20">
            <div className="aspect-[16/9] relative group">
              <ImageWithFallback
                src={allImages[currentIndex]?.url}
                alt={allImages[currentIndex]?.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Overlay inovador com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Info overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-lg">{allImages[currentIndex]?.alt}</p>
              </div>
              
              {/* Botões de navegação inovadores */}
              {allImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-luxury-gold/90 backdrop-blur-sm border border-luxury-gold/30 hover:bg-luxury-gold text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-luxury-gold/90 backdrop-blur-sm border border-luxury-gold/30 hover:bg-luxury-gold text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails inovadores */}
          {allImages.length > 1 && (
            <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
              {allImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-24 h-20 md:w-28 md:h-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 hover:scale-105 ${
                    index === currentIndex
                      ? 'border-luxury-gold shadow-xl shadow-luxury-gold/30 scale-105'
                      : 'border-gray-200 hover:border-luxury-gold/50'
                  }`}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Indicadores inovadores */}
          {allImages.length > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-luxury-gold shadow-lg shadow-luxury-gold/50'
                      : 'w-3 bg-gray-300 hover:bg-luxury-gold/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

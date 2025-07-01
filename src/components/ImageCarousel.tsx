
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';

const ImageCarousel = () => {
  const { carouselImages } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Preload imagens adjacentes para melhor UX
  useEffect(() => {
    if (carouselImages.length === 0) return;

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
    const currentImage = carouselImages[currentIndex];
    const nextImage = carouselImages[(currentIndex + 1) % carouselImages.length];
    const prevImage = carouselImages[currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1];

    if (currentImage) preloadImage(currentImage.url);
    if (nextImage && nextImage !== currentImage) preloadImage(nextImage.url);
    if (prevImage && prevImage !== currentImage && prevImage !== nextImage) preloadImage(prevImage.url);
  }, [currentIndex, carouselImages, loadedImages, imageErrors]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
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

  if (carouselImages.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="section-title-modern">GALERIA DE FOTOS</h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-gray-500">Nenhuma imagem adicionada ainda</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title-modern">
            GALERIA DE FOTOS
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="section-subtitle-modern">
            Conheça cada detalhe do seu futuro lar
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Imagem Principal */}
          <div className="relative overflow-hidden rounded-2xl shadow-modern">
            <div className="aspect-[16/9] relative">
              <ImageWithFallback
                src={carouselImages[currentIndex]?.url}
                alt={carouselImages[currentIndex]?.alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              
              {/* Botões de navegação */}
              {carouselImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-white/20 hover:bg-white transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails otimizados */}
          {carouselImages.length > 1 && (
            <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
              {carouselImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-luxury-gold shadow-md scale-105'
                      : 'border-gray-200 hover:border-luxury-gold/50 hover:scale-102'
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

          {/* Indicadores de pontos */}
          {carouselImages.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-luxury-gold scale-125'
                      : 'bg-gray-300 hover:bg-luxury-gold/60'
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


import React, { createContext, useContext, useState, useEffect } from 'react';

interface CarouselImage {
  id: string;
  url: string;
  alt: string;
  file?: File;
}

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  creci: string;
  cnpj: string;
}

interface AdminContextType {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroVideoUrl: string;
  heroVideoType: 'file' | 'youtube';
  heroBackgroundImage: string;
  setHeroTitle: (title: string) => void;
  setHeroSubtitle: (subtitle: string) => void;
  setHeroDescription: (description: string) => void;
  setHeroVideoUrl: (url: string) => void;
  setHeroVideoType: (type: 'file' | 'youtube') => void;
  setHeroBackgroundImage: (url: string) => void;

  // Carousel
  carouselImages: CarouselImage[];
  addCarouselImage: (image: CarouselImage) => void;
  removeCarouselImage: (id: string) => void;
  updateCarouselImage: (id: string, image: Partial<CarouselImage>) => void;

  // Form Submissions
  formSubmissions: FormSubmission[];
  addFormSubmission: (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => void;

  // Footer
  footerContent: FooterContent;
  setFooterContent: (content: FooterContent) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hero Section State
  const [heroTitle, setHeroTitle] = useState('SOLLARA GARDEN');
  const [heroSubtitle, setHeroSubtitle] = useState('BARRA MANSA');
  const [heroDescription, setHeroDescription] = useState('NOVIDADE NA REGIÃO SUL FLUMINENSE');
  const [heroVideoUrl, setHeroVideoUrl] = useState('https://youtube.com/shorts/5yVlGgId68A?si=OtBBLC3zousFbFgs');
  const [heroVideoType, setHeroVideoType] = useState<'file' | 'youtube'>('youtube');
  const [heroBackgroundImage, setHeroBackgroundImage] = useState('');

  // Footer State
  const [footerContent, setFooterContent] = useState<FooterContent>({
    companyName: 'SOLLARA GARDEN BARRA MANSA',
    tagline: 'Grupo Salha Empreendimentos',
    description: 'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
    creci: '00000-J',
    cnpj: '00.000.000/0001-00'
  });

  // Carousel State - Apenas as 10 primeiras imagens
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([
    {
      id: '1',
      url: '/lovable-uploads/3e057a4c-5472-43d1-9559-aed684c23b2b.png',
      alt: 'Casas modernas do Sollara Garden - Vista frontal das residências'
    },
    {
      id: '2',
      url: '/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png',
      alt: 'Vista aérea do condomínio com área de lazer completa'
    },
    {
      id: '3',
      url: '/lovable-uploads/bd930467-f1c2-43e3-a9dd-356103dc95df.png',
      alt: 'Área esportiva com quadra poliesportiva e piscina'
    },
    {
      id: '4',
      url: '/lovable-uploads/de85cc7c-baa4-4c09-a3f4-be28b3ded2d2.png',
      alt: 'Portaria moderna e elegante do condomínio'
    },
    {
      id: '5',
      url: '/lovable-uploads/01ff5adb-8b94-4939-9f7e-69e308a4e950.png',
      alt: 'Fachadas das casas com design contemporâneo'
    },
    {
      id: '6',
      url: '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png',
      alt: 'Área de piscina adulto com deck e lounges'
    },
    {
      id: '7',
      url: '/lovable-uploads/ab0c69b5-1548-40f5-9283-148fe297f7f6.png',
      alt: 'Vista panorâmica do condomínio com paisagismo'
    },
    {
      id: '8',
      url: '/lovable-uploads/ef880c3a-6fab-4c98-8178-ef3430ef5ea9.png',
      alt: 'Playground infantil com equipamentos modernos'
    },
    {
      id: '9',
      url: '/lovable-uploads/a0a122bb-6eaf-478d-a962-39e8f03201eb.png',
      alt: 'Área de lazer com piscina e espaço gourmet'
    },
    {
      id: '10',
      url: '/lovable-uploads/7e70fce2-fd47-4b88-937f-99b337b7e622.png',
      alt: 'Vista completa da área de lazer do condomínio'
    }
  ]);

  // Form Submissions State
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('adminData');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.heroTitle) setHeroTitle(data.heroTitle);
        if (data.heroSubtitle) setHeroSubtitle(data.heroSubtitle);
        if (data.heroDescription) setHeroDescription(data.heroDescription);
        if (data.heroVideoUrl) setHeroVideoUrl(data.heroVideoUrl);
        if (data.heroVideoType) setHeroVideoType(data.heroVideoType);
        if (data.heroBackgroundImage) setHeroBackgroundImage(data.heroBackgroundImage);
        if (data.carouselImages) setCarouselImages(data.carouselImages);
        if (data.formSubmissions) setFormSubmissions(data.formSubmissions);
        if (data.footerContent) setFooterContent(data.footerContent);
      } catch (error) {
        console.error('Error loading admin data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    const adminData = {
      heroTitle,
      heroSubtitle,
      heroDescription,
      heroVideoUrl,
      heroVideoType,
      heroBackgroundImage,
      carouselImages,
      formSubmissions,
      footerContent
    };
    localStorage.setItem('adminData', JSON.stringify(adminData));
  }, [heroTitle, heroSubtitle, heroDescription, heroVideoUrl, heroVideoType, heroBackgroundImage, carouselImages, formSubmissions, footerContent]);

  const addCarouselImage = (image: CarouselImage) => {
    setCarouselImages(prev => [...prev, image]);
  };

  const removeCarouselImage = (id: string) => {
    setCarouselImages(prev => prev.filter(img => img.id !== id));
  };

  const updateCarouselImage = (id: string, updates: Partial<CarouselImage>) => {
    setCarouselImages(prev => prev.map(img => 
      img.id === id ? { ...img, ...updates } : img
    ));
  };

  const addFormSubmission = (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => {
    const newSubmission: FormSubmission = {
      ...submission,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    setFormSubmissions(prev => [newSubmission, ...prev]);
  };

  return (
    <AdminContext.Provider value={{
      heroTitle,
      heroSubtitle,
      heroDescription,
      heroVideoUrl,
      heroVideoType,
      heroBackgroundImage,
      setHeroTitle,
      setHeroSubtitle,
      setHeroDescription,
      setHeroVideoUrl,
      setHeroVideoType,
      setHeroBackgroundImage,
      carouselImages,
      addCarouselImage,
      removeCarouselImage,
      updateCarouselImage,
      formSubmissions,
      addFormSubmission,
      footerContent,
      setFooterContent
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};


import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminContextType, CarouselImage, FormSubmission, FooterContent } from '@/types/admin';
import { defaultCarouselImages, defaultFooterContent, defaultHeroData } from '@/data/defaultData';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hero Section State
  const [heroTitle, setHeroTitle] = useState(defaultHeroData.title);
  const [heroSubtitle, setHeroSubtitle] = useState(defaultHeroData.subtitle);
  const [heroDescription, setHeroDescription] = useState(defaultHeroData.description);
  const [heroVideoUrl, setHeroVideoUrl] = useState(defaultHeroData.videoUrl);
  const [heroVideoType, setHeroVideoType] = useState<'file' | 'youtube'>(defaultHeroData.videoType);
  const [heroBackgroundImage, setHeroBackgroundImage] = useState(defaultHeroData.backgroundImage);

  // Footer State
  const [footerContent, setFooterContent] = useState<FooterContent>(defaultFooterContent);

  // Carousel State
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>(defaultCarouselImages);

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

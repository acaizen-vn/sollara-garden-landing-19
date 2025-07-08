
import React, { createContext, useContext } from 'react';
import { AdminContextType } from '@/types/admin';
import { useSupabaseData } from '@/hooks/useSupabaseData';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    loading,
    heroContent,
    footerContent,
    carouselImages,
    formSubmissions,
    updateHeroContent,
    updateFooterContent,
    addFormSubmission,
    uploadFile
  } = useSupabaseData();

  // Hero section methods
  const setHeroTitle = (title: string) => {
    updateHeroContent({ title });
  };

  const setHeroSubtitle = (subtitle: string) => {
    updateHeroContent({ subtitle });
  };

  const setHeroDescription = (description: string) => {
    updateHeroContent({ description });
  };

  const setHeroVideoUrl = (video_url: string) => {
    updateHeroContent({ video_url });
  };

  const setHeroVideoType = (video_type: 'file' | 'youtube') => {
    updateHeroContent({ video_type });
  };

  const setHeroBackgroundImage = (background_image: string) => {
    updateHeroContent({ background_image });
  };

  // Carousel methods (placeholder - will be implemented with real Supabase integration)
  const addCarouselImage = (image: any) => {
    console.log('Adding carousel image:', image);
  };

  const removeCarouselImage = (id: string) => {
    console.log('Removing carousel image:', id);
  };

  const updateCarouselImage = (id: string, updates: any) => {
    console.log('Updating carousel image:', id, updates);
  };

  return (
    <AdminContext.Provider value={{
      heroTitle: heroContent.title,
      heroSubtitle: heroContent.subtitle,
      heroDescription: heroContent.description,
      heroVideoUrl: heroContent.video_url,
      heroVideoType: heroContent.video_type,
      heroBackgroundImage: heroContent.background_image,
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
      setFooterContent: updateFooterContent,
      uploadFile,
      loading
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

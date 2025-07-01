
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
  heroBackgroundImage: string;
  setHeroTitle: (title: string) => void;
  setHeroSubtitle: (subtitle: string) => void;
  setHeroDescription: (description: string) => void;
  setHeroVideoUrl: (url: string) => void;
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
  const [heroVideoUrl, setHeroVideoUrl] = useState('');
  const [heroBackgroundImage, setHeroBackgroundImage] = useState('');

  // Footer State
  const [footerContent, setFooterContent] = useState<FooterContent>({
    companyName: 'SOLLARA GARDEN BARRA MANSA',
    tagline: 'Grupo Salha Empreendimentos',
    description: 'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
    creci: '00000-J',
    cnpj: '00.000.000/0001-00'
  });

  // Carousel State
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Fachada do Sollara Garden'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Interior moderno'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Área de lazer'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Paisagem natural'
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
      heroBackgroundImage,
      carouselImages,
      formSubmissions,
      footerContent
    };
    localStorage.setItem('adminData', JSON.stringify(adminData));
  }, [heroTitle, heroSubtitle, heroDescription, heroVideoUrl, heroBackgroundImage, carouselImages, formSubmissions, footerContent]);

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
      heroBackgroundImage,
      setHeroTitle,
      setHeroSubtitle,
      setHeroDescription,
      setHeroVideoUrl,
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

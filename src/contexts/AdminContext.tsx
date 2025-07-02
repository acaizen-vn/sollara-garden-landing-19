
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CarouselImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
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

  // Carousel State - Updated with title and description
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([
    {
      id: '1',
      url: '/lovable-uploads/076d0f9c-cbe0-478a-a8e0-82a18c4be423.png',
      alt: 'Vista aérea do condomínio Sollara Garden com área de lazer completa',
      title: 'Vista Aérea',
      description: 'Condomínio com área de lazer completa'
    },
    {
      id: '2',
      url: '/lovable-uploads/daec1aa2-95fd-4ad7-ad79-83d3e641f7f2.png',
      alt: 'Fachadas modernas das casas do Sollara Garden',
      title: 'Fachadas Modernas',
      description: 'Design contemporâneo e elegante'
    },
    {
      id: '3',
      url: '/lovable-uploads/40772c9a-33d3-43d2-bc8a-b4cd636f28ae.png',
      alt: 'Portaria moderna e elegante do condomínio Sollara Garden',
      title: 'Portaria Elegante',
      description: 'Entrada com segurança e sofisticação'
    },
    {
      id: '4',
      url: '/lovable-uploads/d912767b-33c2-4fda-bc3a-e1a7d4c736f8.png',
      alt: 'Área esportiva com quadra poliesportiva e piscina',
      title: 'Área Esportiva',
      description: 'Quadras e piscina para toda família'
    },
    {
      id: '5',
      url: '/lovable-uploads/6f379a2e-244d-4691-8766-fc92f3f7e0ad.png',
      alt: 'Casas modernas com design contemporâneo e garagem',
      title: 'Residências Modernas',
      description: 'Casas com garagem e acabamento premium'
    },
    {
      id: '6',
      url: '/lovable-uploads/2c409d17-a74d-46d6-9e9d-6a235b388423.png',
      alt: 'Vista das residências do condomínio com paisagismo',
      title: 'Paisagismo Exclusivo',
      description: 'Ambiente harmonioso com a natureza'
    },
    {
      id: '7',
      url: '/lovable-uploads/e56958fd-6361-49ff-85dc-d56fe92fb9fb.png',
      alt: 'Área de lazer com piscina e deck para relaxamento',
      title: 'Área de Lazer',
      description: 'Piscina e deck para momentos de relaxamento'
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
        // Não carregar carouselImages do localStorage para usar as novas imagens
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


export interface CarouselImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
  file?: File;
}

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

export interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  creci: string;
  cnpj: string;
}

export interface AdminContextType {
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
  addFormSubmission: (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => Promise<{ error: any }>;

  // Footer
  footerContent: FooterContent;
  setFooterContent: (content: FooterContent) => Promise<{ error: any }>;

  // File Upload
  uploadFile: (file: File, bucket: string, path?: string) => Promise<{ data: any; error: any }>;
  
  // Loading state
  loading: boolean;
}

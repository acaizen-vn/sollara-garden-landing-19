import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CarouselImage, FormSubmission, FooterContent } from '@/types/admin';

// Temporary type workaround until Supabase types are updated
const supabaseAny = supabase as any;

export const useSupabaseData = () => {
  const [loading, setLoading] = useState(true);

  // Hero Content
  const [heroContent, setHeroContent] = useState({
    title: 'SOLLARA GARDEN',
    subtitle: 'BARRA MANSA',
    description: 'NOVIDADE NA REGIÃO SUL FLUMINENSE',
    video_url: '',
    video_type: 'file' as 'file' | 'youtube',
    background_image: ''
  });

  // Footer Content
  const [footerContent, setFooterContent] = useState<FooterContent>({
    companyName: 'SOLLARA GARDEN BARRA MANSA',
    tagline: 'Grupo Salha Empreendimentos',
    description: 'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
    creci: '00000-J',
    cnpj: '00.000.000/0001-00'
  });

  // Carousel Images
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);

  // Form Submissions
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);

  // Load data from Supabase
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      // Load hero content
      const { data: heroData } = await supabaseAny
        .from('hero_content')
        .select('*')
        .single();

      if (heroData) {
        setHeroContent({
          title: heroData.title || '',
          subtitle: heroData.subtitle || '',
          description: heroData.description || '',
          video_url: heroData.video_url || '',
          video_type: heroData.video_type || 'file',
          background_image: heroData.background_image || ''
        });
      }

      // Load footer content
      const { data: footerData } = await supabaseAny
        .from('footer_content')
        .select('*')
        .single();

      if (footerData) {
        setFooterContent({
          companyName: footerData.company_name || '',
          tagline: footerData.tagline || '',
          description: footerData.description || '',
          creci: footerData.creci || '',
          cnpj: footerData.cnpj || ''
        });
      }

      // Load carousel images
      const { data: carouselData } = await supabaseAny
        .from('carousel_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (carouselData) {
        setCarouselImages(carouselData.map(img => ({
          id: img.id,
          url: img.image_url,
          alt: img.alt_text || '',
          title: img.title || '',
          description: img.description || ''
        })));
      }

      // Load form submissions
      const { data: submissionsData } = await supabaseAny
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (submissionsData) {
        setFormSubmissions(submissionsData.map(sub => ({
          id: sub.id,
          name: sub.name,
          email: sub.email,
          phone: sub.phone,
          timestamp: sub.created_at
        })));
      }

    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateHeroContent = async (updates: Partial<typeof heroContent>) => {
    try {
      const { error } = await supabaseAny
        .from('hero_content')
        .upsert({
          id: 1,
          title: updates.title ?? heroContent.title,
          subtitle: updates.subtitle ?? heroContent.subtitle,
          description: updates.description ?? heroContent.description,
          video_url: updates.video_url ?? heroContent.video_url,
          video_type: updates.video_type ?? heroContent.video_type,
          background_image: updates.background_image ?? heroContent.background_image
        });

      if (!error) {
        setHeroContent(prev => ({ ...prev, ...updates }));
      }
      return { error };
    } catch (error) {
      return { error };
    }
  };

  const updateFooterContent = async (newFooterContent: FooterContent) => {
    try {
      const { error } = await supabaseAny
        .from('footer_content')
        .upsert({
          id: 1,
          company_name: newFooterContent.companyName,
          tagline: newFooterContent.tagline,
          description: newFooterContent.description,
          creci: newFooterContent.creci,
          cnpj: newFooterContent.cnpj
        });

      if (!error) {
        setFooterContent(newFooterContent);
      }
      return { error };
    } catch (error) {
      return { error };
    }
  };

  const addFormSubmission = async (submission: Omit<FormSubmission, 'id' | 'timestamp'>) => {
    try {
      const { data, error } = await supabaseAny
        .from('form_submissions')
        .insert({
          name: submission.name,
          email: submission.email,
          phone: submission.phone
        })
        .select()
        .single();

      if (!error && data) {
        const newSubmission: FormSubmission = {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          timestamp: data.created_at
        };
        setFormSubmissions(prev => [newSubmission, ...prev]);
      }
      return { error };
    } catch (error) {
      return { error };
    }
  };

  const uploadFile = async (file: File, bucket: string, path?: string) => {
    try {
      const fileName = path || `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      return { data: { path: fileName, publicUrl }, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  return {
    loading,
    heroContent,
    footerContent,
    carouselImages,
    formSubmissions,
    updateHeroContent,
    updateFooterContent,
    addFormSubmission,
    uploadFile,
    refetch: loadData
  };
};
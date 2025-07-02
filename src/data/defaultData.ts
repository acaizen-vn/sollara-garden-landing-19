
import { CarouselImage, FooterContent } from '@/types/admin';

export const defaultCarouselImages: CarouselImage[] = [
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
];

export const defaultFooterContent: FooterContent = {
  companyName: 'SOLLARA GARDEN BARRA MANSA',
  tagline: 'Grupo Salha Empreendimentos',
  description: 'Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba',
  creci: '00000-J',
  cnpj: '00.000.000/0001-00'
};

export const defaultHeroData = {
  title: 'SOLLARA GARDEN',
  subtitle: 'BARRA MANSA',
  description: 'NOVIDADE NA REGIÃO SUL FLUMINENSE',
  videoUrl: 'https://youtube.com/shorts/5yVlGgId68A?si=OtBBLC3zousFbFgs',
  videoType: 'youtube' as const,
  backgroundImage: ''
};

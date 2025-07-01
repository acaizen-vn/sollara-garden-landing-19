
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const HeroEditor = () => {
  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroVideoUrl,
    setHeroTitle,
    setHeroSubtitle,
    setHeroDescription,
    setHeroVideoUrl
  } = useAdmin();
  
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Configurações salvas!",
      description: "As alterações da seção principal foram salvas com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="hero-title">Título Principal</Label>
          <Input
            id="hero-title"
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            placeholder="Ex: SOLLARA GARDEN"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="hero-subtitle">Subtítulo</Label>
          <Input
            id="hero-subtitle"
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
            placeholder="Ex: BARRA MANSA"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="hero-description">Descrição</Label>
          <Input
            id="hero-description"
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            placeholder="Ex: NOVIDADE NA REGIÃO SUL FLUMINENSE"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="hero-video">URL do Vídeo (opcional)</Label>
          <Input
            id="hero-video"
            value={heroVideoUrl}
            onChange={(e) => setHeroVideoUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="mt-1"
          />
          <p className="text-sm text-gray-500 mt-1">
            Cole o link do YouTube ou outro serviço de vídeo
          </p>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Button onClick={handleSave} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Salvar Alterações</span>
        </Button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Prévia:</h3>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-gray-900">{heroTitle || 'Título Principal'}</p>
          <p className="text-xl text-amber-600">{heroSubtitle || 'Subtítulo'}</p>
          <p className="text-gray-600">{heroDescription || 'Descrição'}</p>
          {heroVideoUrl && (
            <p className="text-sm text-blue-600">Vídeo configurado: {heroVideoUrl}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;

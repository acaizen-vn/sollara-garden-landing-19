
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { Save, Upload, X } from 'lucide-react';

const HeroEditor = () => {
  const {
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
    setHeroBackgroundImage
  } = useAdmin();
  
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    toast({
      title: "Configurações salvas!",
      description: "As alterações da seção principal foram salvas com sucesso.",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setHeroBackgroundImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHeroVideoUrl(url);
      setHeroVideoType('file');
    }
  };

  const handleYouTubeUrlChange = (url: string) => {
    setHeroVideoUrl(url);
    setHeroVideoType('youtube');
  };

  const removeBackgroundImage = () => {
    setHeroBackgroundImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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

        <div className="space-y-4">
          <Label>Tipo de Vídeo</Label>
          <Select value={heroVideoType} onValueChange={setHeroVideoType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo de vídeo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="file">Arquivo de Vídeo</SelectItem>
              <SelectItem value="youtube">Link do YouTube</SelectItem>
            </SelectContent>
          </Select>

          {heroVideoType === 'youtube' ? (
            <div>
              <Label htmlFor="youtube-url">Link do YouTube</Label>
              <Input
                id="youtube-url"
                value={heroVideoUrl}
                onChange={(e) => handleYouTubeUrlChange(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="mt-1"
              />
            </div>
          ) : (
            <div>
              <Label htmlFor="hero-video">Arquivo de Vídeo</Label>
              <Input
                id="hero-video"
                type="file"
                accept="video/*"
                onChange={handleVideoFileUpload}
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Selecione um arquivo de vídeo do seu computador
              </p>
            </div>
          )}

          {heroVideoUrl && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-sm text-green-600">
                {heroVideoType === 'youtube' ? 'YouTube configurado' : 'Vídeo carregado'}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setHeroVideoUrl('')}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="hero-background">Imagem de Fundo do Cabeçalho</Label>
          <div className="mt-1 space-y-2">
            <Input
              ref={fileInputRef}
              id="hero-background"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <p className="text-sm text-gray-500">
              Selecione uma imagem para o fundo do cabeçalho
            </p>
            {heroBackgroundImage && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600">Imagem carregada</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={removeBackgroundImage}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
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
            <p className="text-sm text-blue-600">
              {heroVideoType === 'youtube' ? 'YouTube configurado' : 'Vídeo configurado'}
            </p>
          )}
          {heroBackgroundImage && (
            <div className="mt-2">
              <p className="text-sm text-green-600 mb-2">Imagem de fundo:</p>
              <img 
                src={heroBackgroundImage} 
                alt="Background preview" 
                className="w-32 h-20 object-cover rounded"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react';

const CarouselEditor = () => {
  const { carouselImages, addCarouselImage, removeCarouselImage, updateCarouselImage } = useAdmin();
  const { toast } = useToast();
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newImage, setNewImage] = useState({ url: '', alt: '' });

  const handleAddImage = () => {
    if (!newImage.url.trim() || !newImage.alt.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    addCarouselImage({
      id: Date.now().toString(),
      url: newImage.url,
      alt: newImage.alt
    });

    setNewImage({ url: '', alt: '' });
    setIsAdding(false);
    
    toast({
      title: "Imagem adicionada!",
      description: "A nova imagem foi adicionada à galeria.",
    });
  };

  const handleUpdateImage = (id: string, url: string, alt: string) => {
    if (!url.trim() || !alt.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    updateCarouselImage(id, { url, alt });
    setEditingId(null);
    
    toast({
      title: "Imagem atualizada!",
      description: "As informações da imagem foram atualizadas.",
    });
  };

  const handleRemoveImage = (id: string) => {
    removeCarouselImage(id);
    toast({
      title: "Imagem removida!",
      description: "A imagem foi removida da galeria.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Imagens da Galeria ({carouselImages.length})</h3>
        <Button onClick={() => setIsAdding(true)} disabled={isAdding}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Imagem
        </Button>
      </div>

      {isAdding && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Imagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="new-url">URL da Imagem</Label>
              <Input
                id="new-url"
                value={newImage.url}
                onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                placeholder="https://..."
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="new-alt">Descrição da Imagem</Label>
              <Input
                id="new-alt"
                value={newImage.alt}
                onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                placeholder="Descrição da imagem"
                className="mt-1"
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleAddImage}>
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {carouselImages.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            isEditing={editingId === image.id}
            onEdit={() => setEditingId(image.id)}
            onSave={handleUpdateImage}
            onCancel={() => setEditingId(null)}
            onRemove={() => handleRemoveImage(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface ImageCardProps {
  image: { id: string; url: string; alt: string };
  isEditing: boolean;
  onEdit: () => void;
  onSave: (id: string, url: string, alt: string) => void;
  onCancel: () => void;
  onRemove: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onRemove
}) => {
  const [editUrl, setEditUrl] = useState(image.url);
  const [editAlt, setEditAlt] = useState(image.alt);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <Label>URL da Imagem</Label>
              <Input
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Descrição</Label>
              <Input
                value={editAlt}
                onChange={(e) => setEditAlt(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex space-x-2">
              <Button size="sm" onClick={() => onSave(image.id, editUrl, editAlt)}>
                <Save className="w-3 h-3 mr-1" />
                Salvar
              </Button>
              <Button size="sm" variant="outline" onClick={onCancel}>
                <X className="w-3 h-3 mr-1" />
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-600 mb-3">{image.alt}</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={onEdit}>
                <Edit2 className="w-3 h-3 mr-1" />
                Editar
              </Button>
              <Button size="sm" variant="destructive" onClick={onRemove}>
                <Trash2 className="w-3 h-3 mr-1" />
                Remover
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CarouselEditor;

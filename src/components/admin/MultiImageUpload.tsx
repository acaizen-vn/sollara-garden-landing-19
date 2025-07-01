
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, Image, Plus } from 'lucide-react';

interface ImageWithCaption {
  file: File;
  url: string;
  caption: string;
  id: string;
}

interface MultiImageUploadProps {
  onImagesAdd: (images: { url: string; alt: string }[]) => void;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({ onImagesAdd }) => {
  const [selectedImages, setSelectedImages] = useState<ImageWithCaption[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (files: FileList) => {
    const newImages: ImageWithCaption[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        const url = URL.createObjectURL(file);
        
        newImages.push({
          file,
          url,
          caption: '',
          id
        });
      }
    });

    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const updateCaption = (id: string, caption: string) => {
    setSelectedImages(prev => 
      prev.map(img => img.id === id ? { ...img, caption } : img)
    );
  };

  const removeImage = (id: string) => {
    setSelectedImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      // Clean up object URLs
      const removed = prev.find(img => img.id === id);
      if (removed) {
        URL.revokeObjectURL(removed.url);
      }
      return updated;
    });
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      toast({
        title: "Nenhuma imagem selecionada",
        description: "Por favor, selecione pelo menos uma imagem.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate upload process - in real app, upload to server/cloud
      const uploadedImages = selectedImages.map(img => ({
        url: img.url, // In real app, this would be the uploaded URL
        alt: img.caption || `Imagem ${img.id}`
      }));

      onImagesAdd(uploadedImages);
      
      toast({
        title: "Imagens adicionadas!",
        description: `${selectedImages.length} imagem(ns) foram adicionadas à galeria.`,
      });

      // Clean up
      selectedImages.forEach(img => URL.revokeObjectURL(img.url));
      setSelectedImages([]);
      
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: "Ocorreu um erro ao adicionar as imagens.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <Card 
        className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Adicionar Múltiplas Imagens
          </h3>
          <p className="text-gray-500 mb-4">
            Arraste e solte imagens aqui ou clique para selecionar
          </p>
          <Button variant="outline" type="button">
            <Plus className="w-4 h-4 mr-2" />
            Selecionar Imagens
          </Button>
        </CardContent>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
      />

      {/* Selected Images Grid */}
      {selectedImages.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Imagens Selecionadas ({selectedImages.length})
          </h3>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedImages.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={image.url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(image.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <div>
                    <Label htmlFor={`caption-${image.id}`} className="text-sm font-medium">
                      Legenda (opcional)
                    </Label>
                    <Input
                      id={`caption-${image.id}`}
                      value={image.caption}
                      onChange={(e) => updateCaption(image.id, e.target.value)}
                      placeholder="Digite uma legenda para esta imagem..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex space-x-3 pt-4 border-t">
            <Button 
              onClick={handleUpload} 
              disabled={isUploading}
              className="flex-1"
            >
              {isUploading ? 'Adicionando...' : `Adicionar ${selectedImages.length} Imagem(ns)`}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                selectedImages.forEach(img => URL.revokeObjectURL(img.url));
                setSelectedImages([]);
              }}
              disabled={isUploading}
            >
              Limpar Tudo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiImageUpload;

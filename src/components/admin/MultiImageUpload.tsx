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

  // Função para converter arquivo para base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Função para comprimir imagem
  const compressImage = (file: File, quality: number = 0.8): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = document.createElement('img');
      
      img.onload = () => {
        // Calcular dimensões mantendo aspect ratio
        const maxWidth = 1200;
        const maxHeight = 800;
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (files: FileList) => {
    const newImages: ImageWithCaption[] = [];
    
    for (const file of Array.from(files)) {
      if (file.type.startsWith('image/')) {
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        
        try {
          // Comprimir imagem para melhor performance
          const compressedUrl = await compressImage(file);
          
          newImages.push({
            file,
            url: compressedUrl,
            caption: '',
            id
          });
        } catch (error) {
          console.error('Erro ao processar imagem:', error);
          toast({
            title: "Erro ao processar imagem",
            description: `Não foi possível processar ${file.name}`,
            variant: "destructive"
          });
        }
      }
    }

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
    setSelectedImages(prev => prev.filter(img => img.id !== id));
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
      // Converter todas as imagens para formato persistente
      const uploadedImages = selectedImages.map(img => ({
        url: img.url, // Usando a URL comprimida em base64
        alt: img.caption || `Imagem ${img.id}`
      }));

      onImagesAdd(uploadedImages);
      
      toast({
        title: "Imagens adicionadas!",
        description: `${selectedImages.length} imagem(ns) foram adicionadas à galeria.`,
      });

      // Limpar estado
      setSelectedImages([]);
      
    } catch (error) {
      console.error('Erro no upload:', error);
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
      {/* Drop Zone com design moderno */}
      <Card 
        className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer bg-gray-50/50"
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
          <p className="text-sm text-gray-400 mb-4">
            Formatos aceitos: JPG, PNG, WebP (máx. 10MB cada)
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

      {/* Preview das imagens selecionadas */}
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
                    loading="lazy"
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
              onClick={() => setSelectedImages([])}
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

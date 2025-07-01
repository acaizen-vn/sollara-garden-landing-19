
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const FooterEditor = () => {
  const { footerContent, setFooterContent } = useAdmin();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Rodapé atualizado!",
      description: "As alterações do rodapé foram salvas com sucesso.",
    });
  };

  const updateFooterField = (field: keyof typeof footerContent, value: string) => {
    setFooterContent({
      ...footerContent,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <Label htmlFor="company-name">Nome da Empresa</Label>
          <Input
            id="company-name"
            value={footerContent.companyName}
            onChange={(e) => updateFooterField('companyName', e.target.value)}
            placeholder="Ex: SOLLARA GARDEN BARRA MANSA"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="tagline">Slogan/Tagline</Label>
          <Input
            id="tagline"
            value={footerContent.tagline}
            onChange={(e) => updateFooterField('tagline', e.target.value)}
            placeholder="Ex: Grupo Salha Empreendimentos"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            value={footerContent.description}
            onChange={(e) => updateFooterField('description', e.target.value)}
            placeholder="Ex: Transformando sonhos em realidade há mais de 30 anos..."
            className="mt-1"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="creci">CRECI</Label>
            <Input
              id="creci"
              value={footerContent.creci}
              onChange={(e) => updateFooterField('creci', e.target.value)}
              placeholder="Ex: 00000-J"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              value={footerContent.cnpj}
              onChange={(e) => updateFooterField('cnpj', e.target.value)}
              placeholder="Ex: 00.000.000/0001-00"
              className="mt-1"
            />
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
        <h3 className="font-medium text-gray-900 mb-2">Prévia do Rodapé:</h3>
        <div className="space-y-2 text-sm">
          <p className="font-bold text-lg">{footerContent.companyName}</p>
          <p className="text-amber-600">{footerContent.tagline}</p>
          <p className="text-gray-600">{footerContent.description}</p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <span>CRECI: {footerContent.creci}</span>
            <span>CNPJ: {footerContent.cnpj}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEditor;


import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const FooterEditor = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Rodapé atualizado!",
      description: "As alterações do rodapé foram salvas com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-4">Configuração do Rodapé</h3>
        <p className="text-gray-600 mb-4">
          O rodapé foi otimizado para um design minimalista, exibindo apenas:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Logotipo da Sollara Garden</li>
          <li>Copyright básico</li>
          <li>Link para o painel administrativo</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Prévia do Rodapé:</h3>
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
              alt="Sollara Garden Logo"
              className="h-24 w-auto"
            />
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sollara Garden. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Button onClick={handleSave} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Confirmar Configuração</span>
        </Button>
      </div>
    </div>
  );
};

export default FooterEditor;

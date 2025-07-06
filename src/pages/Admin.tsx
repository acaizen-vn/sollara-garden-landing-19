
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Settings, Image, MessageSquare, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroEditor from '@/components/admin/HeroEditor';
import CarouselEditor from '@/components/admin/CarouselEditor';
import FormSubmissions from '@/components/admin/FormSubmissions';
import FooterEditor from '@/components/admin/FooterEditor';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
                <p className="text-gray-600">Sollara Garden Barra Mansa</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hero" className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Seção Principal</span>
            </TabsTrigger>
            <TabsTrigger value="carousel" className="flex items-center space-x-2">
              <Image className="w-4 h-4" />
              <span>Galeria</span>
            </TabsTrigger>
            <TabsTrigger value="footer" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Rodapé</span>
            </TabsTrigger>
            <TabsTrigger value="leads" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Leads</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Editar Seção Principal</CardTitle>
                <CardDescription>
                  Configure os textos, vídeo e imagem de fundo da seção principal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HeroEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="carousel">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Galeria de Imagens</CardTitle>
                <CardDescription>
                  Adicione, edite ou remova imagens da galeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CarouselEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="footer">
            <Card>
              <CardHeader>
                <CardTitle>Editar Rodapé</CardTitle>
                <CardDescription>
                  Configure as informações do rodapé da página
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FooterEditor />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads">
            <Card>
              <CardHeader>
                <CardTitle>Leads Capturados</CardTitle>
                <CardDescription>
                  Visualize e exporte todos os contatos enviados pelo formulário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormSubmissions />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;

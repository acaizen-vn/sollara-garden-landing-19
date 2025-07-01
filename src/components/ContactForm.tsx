
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAdmin } from '@/contexts/AdminContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const { addFormSubmission } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Save to admin context
    addFormSubmission({
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });

    toast({
      title: "Interesse registrado com sucesso!",
      description: "Em breve nossa equipe entrará em contato com você.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);

    console.log('Lead captured:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-20">
      {/* Family image section */}
      <div className="relative h-96 mb-20 overflow-hidden">
        <img 
          src="/lovable-uploads/d67a1c57-1d4c-4edd-8dc6-4e624a75f761.png"
          alt="Família feliz no Sollara Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SEU LAR IDEAL</h2>
            <p className="text-xl md:text-2xl font-light">Onde sua família encontra felicidade</p>
          </div>
        </div>
      </div>

      <div className="luxury-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                QUERO SABER MAIS
              </h2>
              <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
              <p className="text-xl text-luxury-gold-light max-w-3xl mx-auto">
                Preencha o formulário e receba todas as informações sobre o SOLLARA GARDEN
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-scale-in">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white text-lg font-medium mb-2 block">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-14 text-lg rounded-xl focus:bg-white/30 focus:border-luxury-gold"
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white text-lg font-medium mb-2 block">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-14 text-lg rounded-xl focus:bg-white/30 focus:border-luxury-gold"
                        placeholder="Digite seu e-mail"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white text-lg font-medium mb-2 block">
                        WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        maxLength={15}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-14 text-lg rounded-xl focus:bg-white/30 focus:border-luxury-gold"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary h-16 text-xl"
                    >
                      {isSubmitting ? 'ENVIANDO...' : 'QUERO SABER MAIS'}
                    </Button>

                    <p className="text-white/80 text-sm text-center">
                      Ao enviar seus dados, você concorda em receber contato da nossa equipe de vendas.
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="animate-slide-in-right">
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                    <h3 className="font-playfair text-2xl font-bold text-white mb-6 uppercase">
                      Entre em Contato
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Vendas</p>
                          <p className="text-luxury-gold-light">(24) 99999-9999</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-medium">E-mail</p>
                          <p className="text-luxury-gold-light">vendas@gruposalha.com.br</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Localização</p>
                          <p className="text-luxury-gold-light">Barra Mansa - RJ</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info - Updated hours */}
                  <div className="bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-3xl p-8">
                    <h4 className="font-playfair text-xl font-bold text-white mb-4 uppercase">
                      Horário de Atendimento
                    </h4>
                    <div className="space-y-2 text-luxury-gold-light">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 16h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAdmin } from '@/contexts/AdminContext';

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

    try {
      // Save to Supabase
      const { error } = await addFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Em breve nossa equipe entrará em contato com você.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar cadastro",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-luxury-beige to-luxury-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-sf-pro text-4xl md:text-5xl font-bold text-luxury-brown mb-6 uppercase tracking-wide">
              CADASTRE
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-luxury-brown-light max-w-3xl mx-auto font-light leading-relaxed">
              Preencha o formulário e receba todas as informações sobre o <span className="text-luxury-gold font-semibold">SOLLARA GARDEN</span>
            </p>
          </div>

          {/* Formulário simplificado */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-luxury-brown text-lg font-semibold mb-3 block">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-luxury-beige/30 border-luxury-gold/30 text-luxury-brown placeholder:text-luxury-brown/60 h-14 text-lg rounded-2xl focus:bg-luxury-beige/50 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-luxury-brown text-lg font-semibold mb-3 block">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-luxury-beige/30 border-luxury-gold/30 text-luxury-brown placeholder:text-luxury-brown/60 h-14 text-lg rounded-2xl focus:bg-luxury-beige/50 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-luxury-brown text-lg font-semibold mb-3 block">
                    Whatsapp - Telefone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={15}
                    className="bg-luxury-beige/30 border-luxury-gold/30 text-luxury-brown placeholder:text-luxury-brown/60 h-14 text-lg rounded-2xl focus:bg-luxury-beige/50 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-brown font-bold h-16 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'CADASTRAR'}
                </Button>

                <p className="text-luxury-brown/80 text-sm text-center leading-relaxed">
                  Ao enviar seus dados, você concorda em receber contato da nossa equipe de vendas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

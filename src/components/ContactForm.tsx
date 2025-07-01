
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
    <section id="contact" className="py-0 bg-gradient-to-b from-luxury-beige to-luxury-cream">
      {/* Seção principal do formulário com design impactante */}
      <div className="relative overflow-hidden">
        {/* Fundo com efeito geométrico */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-brown via-luxury-brown-dark to-luxury-red opacity-95"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-luxury-gold/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Título principal com animação */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-sf-pro text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-wide drop-shadow-2xl">
                QUERO SABER MAIS
              </h2>
              <div className="w-40 h-1.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl md:text-3xl text-luxury-gold-light max-w-4xl mx-auto font-light leading-relaxed">
                Preencha o formulário e receba todas as informações sobre o <span className="text-luxury-gold font-semibold">SOLLARA GARDEN</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Formulário principal com glassmorphism */}
              <div className="animate-scale-in order-2 lg:order-1">
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {/* Borda decorativa */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-transparent to-luxury-gold/20 rounded-3xl blur-sm"></div>
                  
                  <div className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white text-xl font-semibold mb-3 block">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-16 text-xl rounded-2xl focus:bg-white/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                          placeholder="Digite seu nome completo"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white text-xl font-semibold mb-3 block">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-16 text-xl rounded-2xl focus:bg-white/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                          placeholder="Digite seu e-mail"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white text-xl font-semibold mb-3 block">
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
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 h-16 text-xl rounded-2xl focus:bg-white/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/50 transition-all duration-300"
                          placeholder="(00) 00000-0000"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-brown font-bold h-18 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? 'ENVIANDO...' : 'QUERO SABER MAIS'}
                      </Button>

                      <p className="text-white/80 text-lg text-center leading-relaxed">
                        Ao enviar seus dados, você concorda em receber contato da nossa equipe de vendas.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Informações de contato */}
              <div className="animate-slide-in-right order-1 lg:order-2">
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
                    <h3 className="font-sf-pro text-3xl font-bold text-white mb-8 uppercase tracking-wide">
                      Entre em Contato
                    </h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-2xl flex items-center justify-center shadow-lg">
                          <Phone className="w-8 h-8 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-xl">Vendas</p>
                          <p className="text-luxury-gold-light text-lg">(24) 99999-9999</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-2xl flex items-center justify-center shadow-lg">
                          <Mail className="w-8 h-8 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-xl">E-mail</p>
                          <p className="text-luxury-gold-light text-lg">vendas@gruposalha.com.br</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark rounded-2xl flex items-center justify-center shadow-lg">
                          <MapPin className="w-8 h-8 text-luxury-brown" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-xl">Localização</p>
                          <p className="text-luxury-gold-light text-lg">Barra Mansa - RJ</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horário de atendimento */}
                  <div className="bg-gradient-to-br from-luxury-gold/30 to-luxury-gold/20 backdrop-blur-2xl border border-luxury-gold/30 rounded-3xl p-8 shadow-xl">
                    <h4 className="font-sf-pro text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                      Horário de Atendimento
                    </h4>
                    <div className="space-y-3 text-luxury-gold-light text-lg">
                      <p className="flex justify-between">
                        <span>Segunda a Sexta:</span>
                        <span className="font-semibold">8h às 18h</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="font-semibold">8h às 16h</span>
                      </p>
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

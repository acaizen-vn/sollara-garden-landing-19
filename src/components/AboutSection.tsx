
import React from 'react';
import { Check, Home, Car, Shield, TreePine, Dumbbell, Users, Star } from 'lucide-react';

const AboutSection = () => {
  const propertyHighlights = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Casas de 2 e 3 Quartos",
      features: [
        "Sala e cozinha conjugadas",
        "Lavabo no 1º andar",
        "2 quartos e banheiro no 2º andar",
        "Arquitetura moderna e funcional"
      ]
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "Quintal Privativo 30m²",
      features: [
        "Espaço exclusivo para cada família",
        "Área para churrascos e reuniões",
        "Jardim personalizado",
        "Momentos ao ar livre"
      ]
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Vaga de Garagem Exclusiva",
      features: [
        "Uma vaga por residência",
        "Comodidade e praticidade",
        "Segurança para seu veículo",
        "Portão automático"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Segurança 24 Horas",
      features: [
        "Condomínio fechado",
        "Portaria com controle de acesso",
        "Tranquilidade para sua família",
        "Monitoramento constante"
      ]
    }
  ];

  const leisureAmenities = [
    { icon: <Dumbbell className="w-8 h-8" />, name: "Academia Completa", description: "Equipamentos modernos" },
    { icon: <Users className="w-8 h-8" />, name: "Salão de Festas", description: "Para suas celebrações" },
    { icon: <TreePine className="w-8 h-8" />, name: "Playground", description: "Diversão para as crianças" },
    { icon: <Shield className="w-8 h-8" />, name: "Piscina", description: "Relaxamento e lazer" }
  ];

  const sportsAmenities = [
    { name: "Beach Tênis", icon: "🏸" },
    { name: "Futsal", icon: "⚽" }, 
    { name: "Basquete", icon: "🏀" },
    { name: "Tênis", icon: "🎾" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-luxury-cream/30 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gold/10 rounded-full mb-6">
            <Star className="w-10 h-10 text-luxury-gold" />
          </div>
          <h2 className="section-title mb-6">
            SOBRE O EMPREENDIMENTO
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-luxury-gold mb-4">
              SOLLARA GARDEN BARRA MANSA
            </h3>
            <p className="text-lg text-luxury-brown-light leading-relaxed">
              Condomínio de casas não geminadas desenvolvido pelo renomado 
              <span className="font-semibold text-luxury-brown ml-2">Grupo Salha Empreendimentos</span>
            </p>
          </div>
        </div>

        {/* Property Highlights Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {propertyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-luxury-gold/10 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-luxury-gold">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="font-playfair font-bold text-luxury-brown text-xl">
                      {highlight.title}
                    </h4>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {highlight.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full mr-4 flex-shrink-0"></div>
                        <p className="text-luxury-brown-light">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leisure Area */}
        <div className="bg-gradient-to-r from-white to-luxury-cream/30 rounded-3xl p-12 shadow-xl mb-16 border border-luxury-gold/10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/20 rounded-full mb-6">
              <Users className="w-8 h-8 text-luxury-gold" />
            </div>
            <h3 className="font-playfair text-4xl font-bold text-luxury-brown mb-4 uppercase">
              Área de Lazer Completa
            </h3>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-luxury-brown-light max-w-2xl mx-auto">
              Desfrute de momentos únicos em família com nossa infraestrutura completa de lazer e bem-estar
            </p>
          </div>
          
          {/* Leisure Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {leisureAmenities.map((item, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl hover:bg-luxury-gold/5 transition-all duration-300 hover-lift shadow-md">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-luxury-gold">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-luxury-brown font-bold text-lg mb-2">{item.name}</h4>
                <p className="text-luxury-brown-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Sports Courts */}
          <div className="bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-2xl p-8">
            <h4 className="text-2xl font-playfair font-bold text-luxury-brown text-center mb-8 uppercase">
              Quadras Poliesportivas
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sportsAmenities.map((sport, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-3">{sport.icon}</div>
                  <span className="text-luxury-brown font-semibold">{sport.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="bg-gradient-to-r from-luxury-gold via-luxury-gold to-luxury-gold-dark rounded-3xl p-12 text-center shadow-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Condições Especiais de Pagamento
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h5 className="text-white text-2xl font-bold mb-4 uppercase tracking-wide">
                Entrada Parcelada
              </h5>
              <p className="text-white text-lg">
                Prestações mensais que cabem no seu bolso
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h5 className="text-white text-2xl font-bold mb-4 uppercase tracking-wide">
                Financiamento CEF
              </h5>
              <p className="text-white text-lg">
                Caixa Econômica Federal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

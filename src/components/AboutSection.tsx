
import React from 'react';
import { Check, Home, Car, Shield, TreePine, Dumbbell, Users } from 'lucide-react';

const AboutSection = () => {
  const propertyFeatures = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Casas de 2 Quartos",
      description: "Sala e cozinha conjugadas + lavabo no 1º andar",
      detail: "2 quartos e banheiro no 2º andar"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Casas de 3 Quartos", 
      description: "Sala e cozinha conjugadas + lavabo e 1 quarto no 1º andar",
      detail: "2 quartos e banheiro no 2º andar"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Quintal Privativo",
      description: "30m² para curtir momentos ao ar livre",
      detail: "Espaço exclusivo para cada família"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vaga de Garagem",
      description: "Exclusiva para cada residência",
      detail: "Comodidade e segurança para seu veículo"
    }
  ];

  const leisureAmenities = [
    { icon: <Dumbbell className="w-6 h-6" />, name: "Academia Completa" },
    { icon: <Users className="w-6 h-6" />, name: "Salão de Festas" },
    { icon: <TreePine className="w-6 h-6" />, name: "Playground" },
    { icon: <Shield className="w-6 h-6" />, name: "Piscina" }
  ];

  const sportsAmenities = [
    "Beach Tênis",
    "Futsal", 
    "Basquete",
    "Tênis"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-cream to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-4">
            SOBRE O EMPREENDIMENTO
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-luxury-brown font-light leading-relaxed mb-4">
              <span className="font-bold text-luxury-gold">SOLLARA GARDEN BARRA MANSA</span>
            </p>
            <p className="text-lg text-luxury-brown-light leading-relaxed">
              Condomínio de casas não geminadas com arquitetura moderna e funcional, 
              desenvolvido pelo renomado <span className="font-semibold text-luxury-gold">Grupo Salha Empreendimentos</span>.
            </p>
          </div>
        </div>

        {/* Property Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-luxury-brown text-center mb-12 uppercase">
            Características das Residências
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {propertyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift border border-luxury-gold/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <div className="text-luxury-gold">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-brown text-xl mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-luxury-brown-light leading-relaxed mb-2">
                      {feature.description}
                    </p>
                    <p className="text-luxury-gold font-medium text-sm">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Feature */}
        <div className="mb-20">
          <div className="bg-luxury-brown text-white rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-luxury-gold" />
            </div>
            <h3 className="text-3xl font-playfair font-bold mb-4 uppercase">
              Segurança 24 Horas
            </h3>
            <p className="text-xl text-luxury-gold font-light">
              Condomínio fechado com portaria para total tranquilidade da sua família
            </p>
          </div>
        </div>

        {/* Leisure Area */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl animate-fade-in border border-luxury-gold/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-4xl font-bold text-luxury-brown mb-4 uppercase">
              Área de Lazer Completa
            </h3>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-luxury-brown-light">
              Desfrute de momentos únicos em família com nossa infraestrutura completa
            </p>
          </div>
          
          {/* Leisure Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {leisureAmenities.map((item, index) => (
              <div key={index} className="text-center p-6 bg-luxury-cream rounded-2xl hover:bg-luxury-gold/10 transition-colors">
                <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-luxury-gold">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-luxury-brown font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>

          {/* Sports Courts */}
          <div className="bg-luxury-gold/10 rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-playfair font-bold text-luxury-brown text-center mb-6 uppercase">
              Quadras Poliesportivas
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sportsAmenities.map((sport, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl">
                  <Check className="w-6 h-6 text-luxury-gold mx-auto mb-2" />
                  <span className="text-luxury-brown font-medium text-sm">{sport}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark rounded-3xl p-12 text-center shadow-2xl">
          <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
            Condições Especiais de Pagamento
          </h4>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">
                Entrada Parcelada
              </p>
              <p className="text-white text-lg mb-4">
                Prestações mensais que cabem no seu bolso
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white font-bold text-2xl uppercase tracking-wide">
                Financiamento
              </p>
              <p className="text-white text-lg font-light">
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


import React from 'react';
import { Check, Home, Car, Shield, TreePine } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Casas de 2 quartos",
      description: "Sala e cozinha conjugadas + lavabo no 1º andar; 2 quartos e banheiro no 2º andar"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Casas de 3 quartos", 
      description: "Sala e cozinha conjugadas + lavabo e 1 quarto no 1º andar; 2 quartos e banheiro no 2º andar"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Quintal privativo",
      description: "30m² para curtir momentos ao ar livre"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vaga de garagem",
      description: "Exclusiva para cada residência"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança 24h",
      description: "Condomínio fechado com portaria"
    }
  ];

  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            SOBRE O EMPREENDIMENTO
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="section-subtitle max-w-4xl mx-auto text-center leading-relaxed">
            SOLLARA GARDEN BARRA MANSA é um condomínio de casas não geminadas com arquitetura moderna e funcional,
            desenvolvido pelo renomado <span className="font-semibold text-luxury-gold">Grupo Salha Empreendimentos</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mr-4">
                  <div className="text-luxury-gold">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-luxury-brown text-lg">
                  {feature.title}
                </h3>
              </div>
              <p className="text-luxury-brown-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leisure Area */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-luxury-brown mb-4 uppercase">
              ÁREA DE LAZER COMPLETA
            </h3>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              "Academia",
              "Quadras (Beach Tênis, Futsal, Basquete e Tênis)",
              "Piscina",
              "Salão de Festas",
              "Playground"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                <span className="text-luxury-brown font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Financing */}
          <div className="bg-luxury-gold/10 rounded-2xl p-8 text-center">
            <h4 className="font-playfair text-2xl md:text-3xl font-bold text-luxury-brown mb-4 uppercase">
              CONDIÇÕES ESPECIAIS
            </h4>
            <p className="text-luxury-brown text-lg md:text-xl font-semibold uppercase tracking-wide">
              ENTRADA PARCELADA E PRESTAÇÕES MENSAIS QUE CABEM NO SEU BOLSO
            </p>
            <p className="text-luxury-gold font-bold text-xl mt-2 uppercase">
              FINANCIAMENTO CAIXA ECONÔMICA FEDERAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

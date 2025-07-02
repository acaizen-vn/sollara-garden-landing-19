
import React from 'react';
import { Trophy, Activity } from 'lucide-react';

const SportsSection = () => {
  const sports = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "QUADRA DE BEACH TÊNIS",
      description: "Quadra oficial de beach tênis com piso adequado e iluminação noturna para partidas em qualquer horário."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "QUADRA POLIESPORTIVA",
      description: "Espaço versátil para futebol society, vôlei, basquete e outras modalidades esportivas."
    }
  ];

  return (
    <section className="py-12 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-brown mb-4 font-playfair">
              QUADRAS ESPORTIVAS
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-luxury-brown-light">
              Espaços dedicados ao esporte e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sports.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luxury-gold rounded-xl flex items-center justify-center text-luxury-brown">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-luxury-brown mb-3 font-playfair">
                      {item.title}
                    </h3>
                    <p className="text-luxury-brown-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;

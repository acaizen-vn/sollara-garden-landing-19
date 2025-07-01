
import React from 'react';
import { Home, MapPin, TreePine, CreditCard } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "PLANTAS DISPONÍVEIS",
      description: "Opções de 2 e 3 quartos com arquitetura moderna e funcional"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "ÁREA DE LAZER",
      description: "Academia, quadras, piscina, salão de festas e playground completos"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "LOCALIZAÇÃO PRIVILEGIADA",
      description: "A apenas 300m da Rodovia Presidente Dutra, saída do bairro Nova Esperança. Rodeado por área verde, com fácil acesso às principais vias da região."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "CONDIÇÕES ESPECIAIS",
      description: "Entrada parcelada e prestações mensais que cabem no seu bolso. Financiamento Caixa Econômica Federal."
    }
  ];

  return (
    <section className="py-20 luxury-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            NOSSOS DIFERENCIAIS
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-gold-light max-w-3xl mx-auto">
            Descubra o que torna o SOLLARA GARDEN único na região
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center text-luxury-brown group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-luxury-gold-light leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              REALIZE SEU SONHO
            </h3>
            <p className="text-luxury-gold-light text-lg md:text-xl mb-8">
              Não perca a oportunidade de morar no empreendimento mais desejado da região
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-brown"
            >
              QUERO MAIS INFORMAÇÕES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

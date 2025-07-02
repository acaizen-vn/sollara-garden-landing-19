
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              SOBRE O EMPREENDIMENTO
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                O <strong>Sollara Garden</strong> é um empreendimento residencial que oferece o equilíbrio perfeito entre 
                conforto, segurança e qualidade de vida. Localizado em uma das regiões mais promissoras de 
                Barra Mansa, o condomínio foi projetado para atender às necessidades de famílias modernas.
              </p>
              
              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                Com <strong>320 casas</strong> disponíveis em plantas de 2 e 3 quartos, cada unidade foi cuidadosamente 
                planejada para maximizar o espaço e proporcionar funcionalidade em todos os ambientes. 
                A arquitetura moderna combina com acabamentos de primeira qualidade.
              </p>

              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                A <strong>localização privilegiada</strong> oferece fácil acesso às principais vias da região, 
                estando a apenas 300 metros da Rodovia Presidente Dutra, saída do bairro Nova Esperança. 
                Isso garante comodidade para o trabalho e lazer, sem abrir mão da tranquilidade.
              </p>

              <p className="text-lg text-luxury-brown leading-relaxed">
                O empreendimento conta com uma <strong>completa área de lazer</strong> com mais de 1000m², 
                incluindo piscina, academia, quadras esportivas, salão de festas e playground, 
                proporcionando momentos únicos de diversão e relaxamento para toda a família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';

const LeisureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title text-luxury-brown">
              ÁREA DE LAZER
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="section-subtitle text-luxury-brown-light">
              Mais de 1000m² dedicados ao seu bem-estar e diversão
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="bg-luxury-beige rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                A área de lazer do <strong>Sollara Garden</strong> foi projetada para proporcionar momentos 
                inesquecíveis para toda a família. Com mais de 1000m² de espaço dedicado ao entretenimento 
                e relaxamento, oferecemos uma infraestrutura completa e moderna.
              </p>
              
              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                Nossa <strong>piscina</strong> é o centro das atividades aquáticas, com área para adultos e crianças, 
                proporcionando segurança e diversão. O espaço ao redor da piscina conta com deck para 
                relaxamento e área de descanso com espreguiçadeiras.
              </p>

              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                A <strong>academia completa</strong> está equipada com aparelhos modernos para exercícios 
                cardiovasculares e musculação, permitindo que você mantenha sua rotina de exercícios 
                sem sair do condomínio. O ambiente é climatizado e conta com vestiários.
              </p>

              <p className="text-lg text-luxury-brown leading-relaxed mb-6">
                O <strong>salão de festas</strong> é ideal para comemorações especiais, com capacidade 
                para eventos familiares e sociais. O espaço conta com cozinha de apoio e área gourmet 
                integrada, facilitando a organização de confraternizações.
              </p>

              <p className="text-lg text-luxury-brown leading-relaxed">
                Para as crianças, oferecemos um <strong>playground seguro e divertido</strong>, com 
                brinquedos adequados para diferentes idades. A área é cercada e conta com piso 
                emborrachado para maior segurança dos pequenos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeisureSection;

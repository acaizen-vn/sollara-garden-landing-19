
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Seção do Empreendimento */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              SOBRE O EMPREENDIMENTO
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-8 text-lg text-luxury-brown leading-relaxed">
                
                {/* Condomínio Privado */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Condomínio Privado
                  </h3>
                </div> 
                {/* Casas não germinadas de 1, 2 e 3 Quartos */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Casas não germinadas de 1, 2 e 3 Quartos
                  </h3>
                </div>

                {/* Quintal Privativo */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Quintal Privativo 30m²
                  </h3>
                </div>

                {/* Vaga de Garagem */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Vaga de Garagem Exclusiva
                  </h3>
                </div>

                {/* Segurança */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Portaria Moderna & Segurança 24 Horas
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* Seção da Área de Lazer */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              ÁREA DE LAZER
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-8 text-lg text-luxury-brown leading-relaxed">
                
                {/* Academia Completa */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Academia Completa
                  </h3>
                </div>

                {/* Salão de Festas */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Salão de Festas
                  </h3>
                </div>

                {/* Playground */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Playground
                  </h3>
                </div>

                {/* Piscina */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Piscina
                  </h3>
                </div>

                {/* Quadras Esportivas */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Quadra de Beach Tênis
                  </h3>
                </div>

                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Quadra Poliesportiva
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

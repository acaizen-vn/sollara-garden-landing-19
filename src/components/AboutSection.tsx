
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              SOBRE O EMPREENDIMENTO E ÁREA DE LAZER
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-8 text-lg text-luxury-brown leading-relaxed">
                
                {/* Casas de 2 e 3 Quartos */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Casas de 2 e 3 Quartos
                  </h3>
                  <ul className="space-y-2 pl-4">
                    <li>• Sala e cozinha conjugadas</li>
                    <li>• Lavabo no 1º andar</li>
                    <li>• 2 quartos e banheiro no 2º andar</li>
                    <li>• Arquitetura moderna e funcional</li>
                  </ul>
                </div>

                {/* Quintal Privativo */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Quintal Privativo 30m²
                  </h3>
                  <ul className="space-y-2 pl-4">
                    <li>• Espaço exclusivo para cada família</li>
                    <li>• Área para churrascos e reuniões</li>
                    <li>• Jardim personalizado</li>
                    <li>• Momentos ao ar livre</li>
                  </ul>
                </div>

                {/* Vaga de Garagem */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Vaga de Garagem Exclusiva
                  </h3>
                  <ul className="space-y-2 pl-4">
                    <li>• Uma vaga por residência</li>
                    <li>• Comodidade e praticidade</li>
                    <li>• Segurança para seu veículo</li>
                    <li>• Portão automático</li>
                  </ul>
                </div>

                {/* Segurança */}
                <div>
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-4">
                    Segurança 24 Horas
                  </h3>
                  <ul className="space-y-2 pl-4">
                    <li>• Condomínio fechado</li>
                    <li>• Portaria com controle de acesso</li>
                    <li>• Tranquilidade para sua família</li>
                    <li>• Monitoramento constante</li>
                  </ul>
                </div>

                {/* Área de Lazer */}
                <div className="border-t border-luxury-gold/20 pt-8">
                  <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-6 text-center">
                    Desfrute de momentos únicos em família com nossa infraestrutura completa de lazer e bem-estar
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Academia Completa</h4>
                      <p className="text-luxury-brown-light">• Equipamentos modernos</p>
                    </div>

                    <div>
                      <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Salão de Festas</h4>
                      <p className="text-luxury-brown-light">• Para suas celebrações</p>
                    </div>

                    <div>
                      <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Playground</h4>
                      <p className="text-luxury-brown-light">• Diversão para as crianças</p>
                    </div>

                    <div>
                      <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Piscina</h4>
                      <p className="text-luxury-brown-light">• Relaxamento e lazer</p>
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

export default AboutSection;

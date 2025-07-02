
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

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
            {/* Casas de 2 e 3 Quartos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-6 text-center">
                Casas de 2 e 3 Quartos
              </h3>
              <ul className="space-y-4 text-lg text-luxury-brown">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Sala e cozinha conjugadas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Lavabo no 1º andar
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  2 quartos e banheiro no 2º andar
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Arquitetura moderna e funcional
                </li>
              </ul>
            </div>

            {/* Quintal Privativo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-6 text-center">
                Quintal Privativo 30m²
              </h3>
              <ul className="space-y-4 text-lg text-luxury-brown">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Espaço exclusivo para cada família
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Área para churrascos e reuniões
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Jardim personalizado
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Momentos ao ar livre
                </li>
              </ul>
            </div>

            {/* Vaga de Garagem */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-6 text-center">
                Vaga de Garagem Exclusiva
              </h3>
              <ul className="space-y-4 text-lg text-luxury-brown">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Uma vaga por residência
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Comodidade e praticidade
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Segurança para seu veículo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Portão automático
                </li>
              </ul>
            </div>

            {/* Segurança 24 Horas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-sf-pro text-2xl font-bold text-luxury-brown mb-6 text-center">
                Segurança 24 Horas
              </h3>
              <ul className="space-y-4 text-lg text-luxury-brown">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Condomínio fechado
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Portaria com controle de acesso
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Tranquilidade para sua família
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Monitoramento constante
                </li>
              </ul>
            </div>
          </div>

          {/* Área de Lazer */}
          <div className="bg-luxury-gold/10 rounded-3xl p-8 md:p-12 animate-fade-in">
            <h3 className="font-sf-pro text-3xl font-bold text-luxury-brown mb-8 text-center">
              Desfrute de momentos únicos em família com nossa infraestrutura completa de lazer e bem-estar
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-luxury-gold/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luxury-brown">🏋️</span>
                </div>
                <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Academia Completa</h4>
                <p className="text-luxury-brown-light">Equipamentos modernos</p>
              </div>

              <div className="text-center">
                <div className="bg-luxury-gold/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luxury-brown">🎉</span>
                </div>
                <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Salão de Festas</h4>
                <p className="text-luxury-brown-light">Para suas celebrações</p>
              </div>

              <div className="text-center">
                <div className="bg-luxury-gold/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luxury-brown">🎠</span>
                </div>
                <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Playground</h4>
                <p className="text-luxury-brown-light">Diversão para as crianças</p>
              </div>

              <div className="text-center">
                <div className="bg-luxury-gold/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luxury-brown">🏊</span>
                </div>
                <h4 className="font-sf-pro text-xl font-semibold text-luxury-brown mb-2">Piscina</h4>
                <p className="text-luxury-brown-light">Relaxamento e lazer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

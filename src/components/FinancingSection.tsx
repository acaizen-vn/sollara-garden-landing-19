
import React from 'react';

const FinancingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-luxury-gold/5 via-white to-luxury-gold/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-luxury-brown mb-4 tracking-tight font-playfair">
              ENTRADA PARCELADA
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-xl text-luxury-brown-light font-medium">
              Com prestações mensais que cabem no seu bolso
            </p>
          </div>

          <div className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              {/* Informações de Financiamento */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                
                {/* Financiamento Caixa */}
                <div className="mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-2">
                      Financiamento Caixa Econômica Federal
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      Condições especiais e taxas diferenciadas
                    </p>
                  </div>
                </div>

                {/* Separador */}
                <div className="border-t border-luxury-gold/20 my-8"></div>

                {/* FGTS */}
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-2">
                      Utilize seu FGTS
                    </h3>
                    <p className="text-lg text-green-600 font-semibold">
                      Oportunidade de usar seu fundo de garantia
                    </p>
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

export default FinancingSection;

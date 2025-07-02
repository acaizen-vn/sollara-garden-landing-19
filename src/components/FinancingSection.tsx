
import React from 'react';

const FinancingSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-luxury-gold/5 via-white to-luxury-gold/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-brown mb-4 tracking-tight font-playfair">
              ENTRADA PARCELADA
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-luxury-brown-light font-medium">
              Com prestações mensais que cabem no seu bolso
            </p>
          </div>

          <div className="animate-fade-in max-w-4xl mx-auto">
            {/* Financiamento Caixa */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-2">
                Financiamento Caixa Econômica Federal
              </h3>
              <p className="text-lg text-blue-600 font-semibold">
                Condições especiais e taxas diferenciadas
              </p>
            </div>

            {/* Separador */}
            <div className="flex justify-center my-6">
              <div className="w-16 h-0.5 bg-luxury-gold"></div>
            </div>

            {/* FGTS */}
            <div className="text-center">
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
    </section>
  );
};

export default FinancingSection;


import React from 'react';

const FinancingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-luxury-gold/5 via-white to-luxury-gold/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title text-luxury-brown">
              ENTRADA PARCELADA
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="section-subtitle text-luxury-brown-light">
              Com prestações mensais que cabem no seu bolso
            </p>
          </div>

          <div className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              {/* Card principal de destaque */}
              <div className="relative overflow-hidden bg-gradient-to-br from-luxury-gold via-yellow-500 to-yellow-600 rounded-3xl p-1 shadow-2xl mb-8">
                <div className="bg-white rounded-3xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-full mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-4">
                      Financiamento Facilitado
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {/* Caixa Econômica Federal */}
                      <div className="bg-gradient-to-br from-luxury-beige to-white rounded-2xl p-6 border-2 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xs">CAIXA</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-luxury-brown mb-3">
                          Financiamento
                        </h4>
                        <p className="text-lg font-semibold text-blue-600">
                          Caixa Econômica Federal
                        </p>
                        <div className="mt-4 pt-4 border-t border-luxury-gold/20">
                          <p className="text-sm text-luxury-brown-light">
                            Condições especiais e taxas diferenciadas
                          </p>
                        </div>
                      </div>

                      {/* FGTS */}
                      <div className="bg-gradient-to-br from-luxury-beige to-white rounded-2xl p-6 border-2 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xs">FGTS</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-luxury-brown mb-3">
                          Utilize seu
                        </h4>
                        <p className="text-lg font-semibold text-green-600">
                          FGTS
                        </p>
                        <div className="mt-4 pt-4 border-t border-luxury-gold/20">
                          <p className="text-sm text-luxury-brown-light">
                            Como entrada ou para amortizar o financiamento
                          </p>
                        </div>
                      </div>
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

export default FinancingSection;

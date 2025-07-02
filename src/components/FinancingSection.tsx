
import React from 'react';

const FinancingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-luxury-gold/5 via-white to-luxury-gold/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-brown mb-4 tracking-tight">
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
              <div className="bg-gradient-to-br from-luxury-gold via-yellow-500 to-yellow-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 md:p-12">
                  
                  {/* Financiamento Caixa */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mr-6">
                        <span className="text-white font-bold text-sm">CAIXA</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-2">
                          Financiamento Caixa Econômica Federal
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          Condições especiais e taxas diferenciadas
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-6">
                      <div className="grid md:grid-cols-2 gap-4 text-luxury-brown">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-medium">Financiamento até 100% do valor</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-medium">Prazo de até 35 anos para pagar</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-medium">Taxas de juros competitivas</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-medium">Processo simplificado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Separador */}
                  <div className="border-t border-luxury-gold/20 my-8"></div>

                  {/* FGTS */}
                  <div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mr-6">
                        <span className="text-white font-bold text-sm">FGTS</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-luxury-brown mb-2">
                          Utilize seu FGTS
                        </h3>
                        <p className="text-lg text-green-600 font-semibold">
                          Oportunidade de usar seu fundo de garantia
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                      <div className="grid md:grid-cols-2 gap-4 text-luxury-brown">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                          <span className="font-medium">Use como entrada do imóvel</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                          <span className="font-medium">Amortize o saldo devedor</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                          <span className="font-medium">Reduza as parcelas mensais</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                          <span className="font-medium">Aproveite seu dinheiro guardado</span>
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

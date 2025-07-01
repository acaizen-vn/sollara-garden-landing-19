
import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const CompanySection = () => {
  return (
    <section className="py-12 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              GRUPO SALHA EMPREENDIMENTOS
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="section-subtitle">
              Tradição, qualidade e confiança há mais de três décadas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Company Info */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-luxury-brown leading-relaxed mb-6">
                    Com mais de três décadas de experiência no mercado imobiliário, o Grupo Salha se consolidou 
                    como referência em projetos residenciais na região do Vale do Paraíba.
                  </p>
                  <p className="text-lg md:text-xl text-luxury-brown leading-relaxed mb-8">
                    Nossa missão é transformar sonhos em realidade, oferecendo empreendimentos com segurança, 
                    qualidade construtiva e localização privilegiada, sempre superando expectativas.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div className="font-playfair text-2xl font-bold text-luxury-brown">30+</div>
                    <div className="text-sm text-luxury-brown-light uppercase tracking-wide">Anos</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div className="font-playfair text-2xl font-bold text-luxury-brown">50+</div>
                    <div className="text-sm text-luxury-brown-light uppercase tracking-wide">Projetos</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div className="font-playfair text-2xl font-bold text-luxury-brown">1000+</div>
                    <div className="text-sm text-luxury-brown-light uppercase tracking-wide">Famílias</div>
                  </div>
                </div>

                {/* CEO Signature */}
                <div className="border-t border-luxury-gold/20 pt-6">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="font-playfair text-xl font-semibold text-luxury-brown mb-1">
                        Nithal Salha
                      </p>
                      <p className="text-luxury-gold font-medium uppercase tracking-wide">
                        CEO – Grupo Salha Empreendimentos
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <span className="font-playfair text-2xl font-bold text-luxury-gold">NS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element - Imagem da piscina com marca d'água da fachada */}
            <div className="animate-fade-in relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src="/lovable-uploads/73958ced-3768-4dc6-bf62-3959b12ebe83.png"
                    alt="Área de lazer com piscina - Sollara Garden"
                    className="w-full h-full object-cover"
                  />
                  {/* Marca d'água da fachada - translúcida */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <img
                      src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png"
                      alt="Fachada Sollara Garden"
                      className="w-full h-full object-contain mix-blend-overlay"
                    />
                  </div>
                  
                  {/* Overlay degradê sutil na paleta dourada/bege */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/25 via-amber-700/15 to-amber-500/5"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 via-amber-500/3 to-orange-400/8"></div>
                  
                  {/* Texto sobreposto com melhor visibilidade */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <h3 className="font-sf-pro text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                        SEU LAR
                      </h3>
                      <h3 className="font-sf-pro text-5xl md:text-6xl lg:text-7xl font-black text-luxury-gold mb-8 drop-shadow-2xl tracking-tight">
                        IDEAL
                      </h3>
                      <p className="text-white text-xl md:text-2xl font-bold drop-shadow-2xl max-w-sm mx-auto leading-relaxed bg-black/15 backdrop-blur-sm px-6 py-3 rounded-2xl">
                        O sonho da casa própria está mais próximo do que você imagina
                      </p>
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

export default CompanySection;

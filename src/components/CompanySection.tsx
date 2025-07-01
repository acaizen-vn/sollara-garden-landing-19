
import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const CompanySection = () => {
  return (
    <section className="py-20 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
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

            {/* Visual Element */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Grupo Salha Empreendimentos"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-luxury-brown/20"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-luxury-gold rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="font-playfair text-2xl font-bold text-luxury-brown">30+</div>
                    <div className="text-sm text-luxury-brown uppercase tracking-wide">Anos de</div>
                    <div className="text-sm text-luxury-brown uppercase tracking-wide">Experiência</div>
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

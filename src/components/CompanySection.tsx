
import React from 'react';

const CompanySection = () => {
  return (
    <section className="py-16 bg-luxury-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">
              GRUPO SALHA EMPREENDIMENTOS
            </h2>
            <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="section-subtitle">
              Tradição, qualidade e confiança há mais de duas décadas
            </p>
          </div>

          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="space-y-6 text-lg text-luxury-brown leading-relaxed">
                <p className="italic">
                  Com mais de <strong>duas décadas de experiência</strong> no mercado imobiliário, o Grupo Salha 
                  se consolidou como referência em projetos residenciais na região do Vale do Paraíba. 
                  Nossa trajetória é marcada pela dedicação em transformar sonhos em realidade.
                </p>
                
                <p className="italic">
                  Nossa missão é oferecer empreendimentos com <strong>segurança, qualidade construtiva e 
                  localização privilegiada</strong>, sempre superando as expectativas de nossos clientes. 
                  Cada projeto é desenvolvido com atenção aos detalhes e compromisso com a excelência.
                </p>

                <p className="italic">
                  Ao longo dos anos, já entregamos <strong>mais de 50 projetos</strong> e proporcionamos 
                  o sonho da casa própria para <strong>mais de 1000 famílias</strong>. Essa experiência 
                  nos permite compreender as necessidades reais de nossos clientes.
                </p>

                <p className="italic">
                  O <strong>Sollara Garden</strong> representa o que há de mais moderno em nossa linha de 
                  empreendimentos, combinando localização estratégica, arquitetura contemporânea e 
                  infraestrutura completa de lazer para proporcionar qualidade de vida excepcional.
                </p>
              </div>

              {/* CEO Signature */}
              <div className="border-t border-luxury-gold/20 pt-6 mt-8">
                <div className="flex items-center justify-between">
                  <div>
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
        </div>
      </div>
    </section>
  );
};

export default CompanySection;


import React from 'react';

const RealizeSection = () => {
  return (
    <section className="py-16 luxury-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center animate-fade-in">
          <div className="bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              REALIZE SEU SONHO
            </h3>
            <p className="text-luxury-gold-light text-lg md:text-xl mb-8">
              Não perca a oportunidade de morar no empreendimento mais desejado da região
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-brown"
            >
              QUERO MAIS INFORMAÇÕES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealizeSection;

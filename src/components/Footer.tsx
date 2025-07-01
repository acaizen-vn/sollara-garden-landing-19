
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-luxury-brown-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="font-playfair text-3xl font-bold mb-2 uppercase tracking-wide">
              SOLLARA GARDEN BARRA MANSA
            </h3>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-luxury-gold-light text-lg mb-6">
              Grupo Salha Empreendimentos
            </p>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Transformando sonhos em realidade há mais de 30 anos na região do Vale do Paraíba
            </p>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Grupo Salha Empreendimentos. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-sm mt-2">
                CRECI: 00000-J | CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

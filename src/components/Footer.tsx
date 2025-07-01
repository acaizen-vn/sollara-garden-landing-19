
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-luxury-brown-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                alt="Sollara Garden Logo"
                className="mx-auto h-32 md:h-40 w-auto"
              />
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Sollara Garden. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

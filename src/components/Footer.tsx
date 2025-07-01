
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const Footer = () => {
  const { footerContent } = useAdmin();

  return (
    <footer className="bg-luxury-brown-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="font-playfair text-3xl font-bold mb-2 uppercase tracking-wide">
              {footerContent.companyName}
            </h3>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-luxury-gold-light text-lg mb-6">
              {footerContent.tagline}
            </p>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              {footerContent.description}
            </p>
            
            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} {footerContent.tagline}. Todos os direitos reservados.
                </p>
                <Link 
                  to="/admin"
                  className="inline-flex items-center text-white/40 hover:text-white/60 text-sm transition-colors"
                  title="Painel Administrativo"
                >
                  <Settings className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-white/60 text-sm">
                CRECI: {footerContent.creci} | CNPJ: {footerContent.cnpj}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

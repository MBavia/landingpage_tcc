import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section - SUBSTITUÍDO O TEXTO PELA TAG DE IMAGEM */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* O nome da imagem é 'Gemini_Generated_Image_d2t4lsd2t4lsd2t4 (2).png', mas vou usar 'fewit-logo.png'
               para simplificar. Você deve renomear a imagem e colocá-la na pasta 'public/'. */}
            <img 
                src="/fewit-logo.png" // Clicar aqui deve mostrar a sua imagem estilizada
                alt="FEWIT Logo"
                className="h-16 w-auto" // Altura ajustada para 10 (h-10), ajuste se necessário
            />
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">SOBRE NÓS</a>
            <a href="#sesi-senai" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">SESI / SENAI</a>
            <a href="#team" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">EQUIPE</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-primary">Sobre Nós</a>
            <a href="#sesi-senai" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-primary">SESI / SENAI</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-primary">Equipe</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
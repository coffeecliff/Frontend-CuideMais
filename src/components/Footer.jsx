import React from "react";

export const Footer = () => {
    return (
      <footer className="w-full text-sm  text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-wrap justify-center md:justify-between items-center space-y-2 md:space-y-0">
          
          {/* Links */}
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:underline">Contrato do Usuário</a>
            <a href="#" className="hover:underline">Política de Privacidade do Cuide+</a>
            <a href="#" className="hover:underline">Diretrizes da Comunidade</a>
            <a href="#" className="hover:underline">Política dos Cookies</a>
            <a href="#" className="hover:underline">Enviar feedback</a>
          </div>
  
          {/* Idioma */}
          <div className="relative">
            <select className="bg-transparent border-none text-gray-700 focus:outline-none cursor-pointer">
              <option>Português</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </footer>
    );
  }
  
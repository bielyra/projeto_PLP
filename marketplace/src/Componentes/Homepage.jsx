import React from 'react';
import logo from '../logo.svg'; // Ajuste o caminho se necessário
import '../index.css'; // Se você quiser adicionar estilos específicos

const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>
        Mercado Mais Brabo Do Brasil
      </h1>
      <header className="Homepage-header">
        <img src={logo} className="Homepage-logo" alt="logo" />
        <p>
          Site de Serviços prestados por autônomos
        </p>
        <a
          className="Homepage-link"
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais 
        </a>
      </header>
    </div>
  );
};

export default Homepage;
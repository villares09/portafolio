import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Fernando Andres Villares Corbalan</h1>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#education">Educación</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
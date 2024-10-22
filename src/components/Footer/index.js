import React from 'react';
import './styles.css'; // Asegúrate de tener un archivo CSS para los estilos.

const Footer = () => {
  return (
    <footer id="directions" className="footer">
      <div className="footer-content">
        <p>Celular: +54 381 3000082</p>
        <p>Correo: <a href="mailto:villaresfernando91@gmail.com">villaresfernando91@gmail.com</a></p>
        <p>
          Sitio: 
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
        <p>Pais: Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;
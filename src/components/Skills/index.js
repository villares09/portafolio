import React from 'react';
import './styles.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-container">
        {/* Habilidades Técnicas */}
        <div className="skills-column">
          <h3>Habilidades Técnicas</h3>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS3, JavaScript, React, React Native, Redux, Expo, SASS, Material UI</li>
            <li><strong>Backend:</strong> Node.js, Express, GraphQL, SQL, postgreSQL, MySQL, MoongoDB, Sequelize</li>
            <li><strong>Otras herramientas:</strong> GitHub, TypeScript, Native-Base, Prop-Types, Vector-Icons, Circular-Progress-Indicator, Bitbucket, ClickUp, Android Studio, XCode</li>
            <li><strong>Idiomas:</strong> Inglés (Nivel B2)</li>
          </ul>
        </div>

        {/* Fortalezas Principales */}
        <div className="skills-column">
          <h3>Fortalezas Principales</h3>
          <ul>
            <li>Front End – React Native</li>
            <li>Back End – Node.js</li>
            <li>Resolución de Problemas</li>
            <li>Trabajo en Equipo</li>
            <li>Inteligencia Emocional y Empatía</li>
            <li>Dedicación y Colaboración</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

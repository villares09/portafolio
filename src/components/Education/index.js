import React from 'react';
import './styles.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>EDUCACIÓN</h2>
      <div className="education-item">
        <h3>Universidad Nacional de Tucumán</h3>
        <p>Ingeniería en Informática 2017 - 2024</p>
        <p>Estudiante Avanzado</p>
      </div>
      <div className="education-item">
        <h3>Instituto Técnico de la UNT</h3>
        <p>Técnico Mecánico Electricista</p>
        <p>Promoción 2016 – Promedio: 7</p>
        <p>Graduado</p>
        <p>Secretario Estudiantil</p>
        <p>Proyecto de fraccionadora para el Ingenio Azucarero de Aguilares-Tucumán</p>
      </div>
      <div className="education-item">
        <h3>Full Stack Developer</h3>
        <p>Henry 2021 – 2022</p>
        <p>Tecnologías: HTML, CSS, JavaScript, React, React Native, Redux, Node.js, Express, GitHub, PostgreSQL, MySQL, MongoDB</p>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import Slider from 'react-slick';
import './styles.css';

const Projects = () => {
  const settings = {
    dots: true,  // Para mostrar puntos de navegación
    infinite: true,  // Hacer que el carrusel sea infinito
    speed: 500,  // Velocidad del cambio entre proyectos
    slidesToShow: 3,  // Número de slides visibles a la vez
    slidesToScroll: 1,  // Número de slides a desplazar por scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      nameProject: " BANZA - 2023 - 2024",
      descriptionProject: "Empresa: Adcap finance, BANZA (Android e iOS): Implementación de gestión de acciones y validaciones de usuarios mediante biometría TypeScript.",
      technologyProject: " React Native, Redux-Tool-Kit, React-native-biometrics, TypeScript, Amplitud, React-Native-CLI, Android Studio, Jira, BitButcket, AWS, SASS, Hooks . BANZA en Google Play o App Store",
    },
    {
      nameProject: "Clinica Dani - 2023 - 2024",
      descriptionProject: "Freelance: Clinica Dani es una pagina de registro de turnos para consultas de pediatria, esta integrado con google services, tiene login de google",
      technologyProject: "React, Redux-Tool-Kit, google-maps, google-services, node.js, postgreSQL, google-calendar, componentes reutilizables, express, sequelize",
    },
    {
      nameProject: "BANZA - 2023 - 2024",
      descriptionProject: "Empresa: Adcap finance, Aplicación Web (BANZA): Desarrollo de componentes reutilizables y gestión del estado con Redux y react router-dom.",
      technologyProject: "React, TypeScript, Redux-Tool-Kit, react-router-dom, SASS, Hooks,",
    },
    {
      nameProject: " Proyecto MEDLOG 2022-2023",
      descriptionProject: "Empresa: Midas Consultores, Creación de una aplicación móvil para la distribución y posicionamiento de contenedores.",
      technologyProject: " React Native, Redux-Sagas, Expo, Styled-Components, GraphQL",
    },
    {
      nameProject: "Proyecto ALTA 2022-2023",
      descriptionProject: "Empresa: Midas Consultores, Desarrollo de una aplicación para la compra y venta de acciones, con integración de cuentas bancarias.",
      technologyProject: "React Native, Redux-Sagas, Expo, JavaScript, GraphQL",
    },
  ];

  return (
    <section id="projects" className="projects">
    <h2>Proyectos</h2>
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.nameProject}</h3>
          <p>{project.descriptionProject}</p>
          <p><strong>Tecnologías:</strong> {project.technologyProject}</p>
        </div>
      ))}
    </Slider>
  </section>
  );
};

export default Projects;
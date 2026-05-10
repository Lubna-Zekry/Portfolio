import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      title: "AI-Tools Powered Web Application",
      tech: "JavaScript / AI Models",
      description: "A comprehensive web application leveraging cutting-edge AI models to provide advanced capabilities in image classification, text analysis, and sentiment detection.",
      link: "#",
      type: "Public"
    },
    {
      title: "LifeCare Hospital System",
      tech: "MERN Stack / JavaScript",
      description: "A comprehensive private hospital management system with dedicated frontend and backend architectures to handle patient and medical data.",
      link: "#",
      type: "Private"
    },
    {
      title: "Product Display Webpage",
      tech: "HTML / CSS / JavaScript",
      description: "A dynamic frontend interface that fetches product data from a dummy API and dynamically generates a responsive grid of products.",
      link: "#",
      type: "Public"
    },
    {
      title: "Car Showroom Application",
      tech: "Java / OOP",
      description: "A robust Java-based console application utilizing OOP principles for managing car inventories, customers, and rental operations.",
      link: "#",
      type: "Public"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Notable Projects</h2>
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div className="project-card glass" key={index}>
              <div className="project-header">
                <h3 className="project-title text-neon">{project.title}</h3>
              </div>
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    "E-commerce Management",
    "Marketing Strategy",
    "Social Media",
    "Inventory Management",
    "Website Admin",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C#",
    ".NET",
    "Data Analysis",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Top Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card glass" key={index}>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Design"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      category: "E-commerce",
      icon: "🛒",
      skills: ["Shopify", "Product Listing", "Inventory Management", "Order Management"]
    },
    {
      category: "Digital Marketing",
      icon: "📢",
      skills: ["Marketing Strategy", "Meta Business Suite", "Google Analytics"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Microsoft Excel"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((cat, index) => (
            <div className="skill-category glass" key={index}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-name">{cat.category}</h3>
              </div>
              <div className="skills-tags">
                {cat.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-card glass animate-fade-in-up">
          <div className="edu-icon">
            🎓
          </div>
          <div className="edu-content">
            <h3 className="edu-degree text-neon">Bachelor of Computer Science (In Progress)</h3>
            <h4 className="edu-school">Cairo Higher Institute, Cairo, Egypt</h4>
            <div className="edu-details">
              <span className="edu-date">Expected Graduation: 2026</span>
              <span className="edu-grade">Grade: Very Good</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

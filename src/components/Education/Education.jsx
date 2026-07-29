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
            <h3 className="edu-degree text-neon">Bachelor of Computer Science</h3>
            <h4 className="edu-school">Cairo Higher Institute, Cairo, Egypt</h4>
            <div className="edu-details">
              <span className="edu-detail-item">
                <span className="edu-label">Graduation</span>
                <span className="edu-value">2026</span>
              </span>
              <span className="edu-detail-item">
                <span className="edu-label">Grade</span>
                <span className="edu-value">Very Good</span>
              </span>
              <span className="edu-detail-item">
                <span className="edu-label">GPA</span>
                <span className="edu-value">3.0</span>
              </span>
              <span className="edu-detail-item">
                <span className="edu-label">Graduation Project</span>
                <span className="edu-value text-neon">A+</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

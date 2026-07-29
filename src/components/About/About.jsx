import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper">
          <div className="about-avatar glass">
            <div className="avatar-placeholder">
              <span>LZ</span>
              <div className="avatar-glow"></div>
            </div>
          </div>
          <div className="about-content glass">
            <p className="about-text">
              I am a <span className="text-neon">Computer Science graduate</span> with hands-on experience managing
              e-commerce platforms, digital marketing campaigns, product catalogs, inventory, and website operations.
            </p>
            <p className="about-text">
              I enjoy improving <span className="text-neon">customer experience</span>, optimizing online sales,
              and building modern websites while continuously developing my technical skills.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number text-neon">3</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-neon">A+</span>
                <span className="stat-label">Graduation Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

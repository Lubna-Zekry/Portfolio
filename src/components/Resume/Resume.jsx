import React from 'react';
import './Resume.css';
import cvImage from '../../assets/LubnaCv_page-0001.jpg';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-wrapper">
          <div className="resume-preview glass">
            <div className="pdf-frame">
              <img src={cvImage} alt="Lubna Zekry CV" className="cv-preview-img" />
              <div className="cv-overlay">
                <span className="cv-overlay-text">📄 Lubna Zekry CV</span>
              </div>
            </div>
          </div>
          <div className="resume-actions glass">
            <h3 className="resume-heading">Get My CV</h3>
            <p className="resume-desc">
              Download or view my full CV to learn more about my professional background,
              skills, and education.
            </p>
            <div className="resume-buttons">
              <a
                href={cvImage}
                download="LubnaZekry_CV.jpg"
                className="btn btn-solid resume-btn"
              >
                ⬇ Download CV
              </a>
              <a
                href={cvImage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn resume-btn"
              >
                🔗 Open CV
              </a>
            </div>
            <div className="resume-info">
              <div className="resume-info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Lubna Zekry Hassan</span>
              </div>
              <div className="resume-info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Sc. Computer Science</span>
              </div>
              <div className="resume-info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Cairo, Egypt</span>
              </div>
              <div className="resume-info-item">
                <span className="info-label">Email</span>
                <span className="info-value">lubnazekry@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React, { useState } from 'react';
import './Certificates.css';

import ntiWebImg from '../../assets/nti-web.jpg';
import depiImg from '../../assets/depi.jpg';
import ntiImg from '../../assets/nti.jpg';

const certificatesData = [
  {
    id: 'web-design',
    title: "Web Design (HTML, CSS, Responsive Design)",
    issuer: "National Telecommunication Institute (NTI)",
    date: "Jan 2025",
    icon: "🎨",
    image: ntiWebImg
  },
  {
    id: 'react-dev',
    title: "React Web Development",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Oct 2024",
    icon: "⚛️",
    image: depiImg
  },
  {
    id: 'ai-ml',
    title: "AI Fundamentals & Machine Learning",
    issuer: "National Telecommunication Institute (NTI)",
    date: "Jul 2025",
    icon: "🤖",
    image: ntiImg
  },
  {
    id: 'ecommerce',
    title: "E-commerce Management",
    issuer: "Sugar Gift Shops",
    date: "2023",
    icon: "🛒",
    image: null
  },
];

const Certificates = () => {
  const [activeModalCert, setActiveModalCert] = useState(null);

  const openModal = (cert) => {
    if (cert.image) {
      setActiveModalCert(cert);
    }
  };

  const closeModal = () => {
    setActiveModalCert(null);
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div 
              className="cert-card glass" 
              key={cert.id}
              onClick={() => openModal(cert)}
            >
              <div className="cert-image-wrapper">
                {cert.image ? (
                  <>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="cert-image" 
                      loading="lazy"
                    />
                    <div className="cert-overlay">
                      <span className="view-cert-btn">View Certificate</span>
                    </div>
                  </>
                ) : (
                  <div className="cert-placeholder">
                    <span className="cert-placeholder-icon">{cert.icon}</span>
                    <span className="cert-placeholder-text">Certificate Completed</span>
                  </div>
                )}
              </div>
              <div className="cert-body">
                <div className="cert-header">
                  <div className="cert-icon">{cert.icon}</div>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <div className="cert-modal-img-container">
              <img 
                src={activeModalCert.image} 
                alt={activeModalCert.title} 
                className="cert-modal-img" 
              />
            </div>
            <div className="cert-modal-info">
              <div className="cert-modal-header">
                <span className="cert-modal-icon">{activeModalCert.icon}</span>
                <h3>{activeModalCert.title}</h3>
              </div>
              <p className="cert-modal-issuer">{activeModalCert.issuer}</p>
              <span className="cert-modal-date">Issued: {activeModalCert.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;


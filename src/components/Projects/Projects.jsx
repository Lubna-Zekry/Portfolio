import React, { useState } from 'react';
import './Projects.css';

import ai1Img from '../../assets/ai-1.png';
import ai2Img from '../../assets/ai-2.png';
import ai3Img from '../../assets/ai-3.png';
import ai4Img from '../../assets/ai-4.png';
import ai5Img from '../../assets/ai-5.png';

import heroHealthrootzVideo from '../../assets/hero-healthrootz.mp4';
import hr1Img from '../../assets/healthrootz-1.png';
import hr2Img from '../../assets/healthrootz-2.png';
import hr3Img from '../../assets/healthrootz-3.png';
import hr4Img from '../../assets/healthrootz-4.png';
import hr5Img from '../../assets/healthrootz-5.png';
import hr6Img from '../../assets/healthrootz-6.png';

import lc1Img from '../../assets/lifecare-1.png';
import lc2Img from '../../assets/lifecare-2.png';
import lc3Img from '../../assets/lifecare-3.png';
import lc4Img from '../../assets/lifecare-4.png';
import lc5Img from '../../assets/lifecare-5.png';
import lc6Img from '../../assets/lifecare-6.png';
import lc7Img from '../../assets/lifecare-7.png';
import lc8Img from '../../assets/lifecare-8.png';

import innovestHeroImg from '../../assets/innovest-hero.png';
import innovest1Img from '../../assets/innovest-1.png';
import innovest2Img from '../../assets/innovest-2.png';
import innovest3Img from '../../assets/innovest-3.png';

const projectsData = [
  {
    id: 1,
    title: "AI-Tools",
    description: "A comprehensive web application that leverages cutting-edge AI models to provide advanced capabilities in image classification, text analysis, and sentiment detection.",
    tech: ["React", "Bootstrap", "Python", "Flask", "Machine Learning"],
    features: [
      "Image classification using AI models",
      "Real-time text analysis & sentiment detection",
      "Flask backend REST API integration",
      "Sleek and responsive React & Bootstrap frontend"
    ],
    github: "#",
    overview: "AI-Tools is a comprehensive web application that leverages cutting-edge AI models to provide advanced capabilities in image classification, text analysis, and sentiment detection. The project is built using React and Bootstrap for a sleek and responsive frontend, while the backend is powered by Flask to seamlessly integrate and serve AI models.",
    challenges: "Connecting Python/Flask AI model microservices with a fast, responsive React frontend while maintaining low-latency data exchange.",
    lessons: "Deepened expertise in building machine learning web services with Flask and creating smooth interactive UI components in React.",
    image: ai5Img,
    screenshots: [ai1Img, ai2Img, ai3Img, ai4Img]
  },
  {
    id: 2,
    title: "HealthRootz",
    description: "A health-focused web application providing personalized wellness resources, nutrition guidance, and health tracking features.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    features: ["User authentication", "Health tracking dashboard", "Personalized recommendations", "Responsive design"],
    github: "#",
    overview: "HealthRootz is a comprehensive health and wellness platform that helps users track their health journey, access nutrition resources, and get personalized wellness guidance.",
    challenges: "Designing an intuitive UX for health data visualization while keeping the interface clean and accessible.",
    lessons: "Gained experience in building full-stack applications and working with health-related data models.",
    video: heroHealthrootzVideo,
    screenshots: [hr1Img, hr2Img, hr3Img, hr4Img, hr5Img, hr6Img]
  },
  {
    id: 3,
    title: "LifeCare",
    description: "A comprehensive healthcare & hospital management web application built with React, featuring online appointment booking, doctor profiles, department directory, and medical services.",
    tech: ["React", "JavaScript", "CSS3", "REST API", "Responsive Design"],
    features: [
      "Online appointment booking portal",
      "Doctor directory & specialization search",
      "Hospital departments & services showcase",
      "Interactive medical blog & contact interface"
    ],
    github: "#",
    overview: "LifeCare is a modern healthcare web application built with React designed to streamline patient care, online appointment scheduling, and exploration of medical departments and services with a responsive, user-friendly interface.",
    challenges: "Building a clean, accessible layout for medical services and doctor schedules while ensuring seamless navigation across all device viewports.",
    lessons: "Advanced React component design, modular CSS layout structure, and building intuitive user flows for healthcare applications.",
    image: lc2Img,
    screenshots: [lc1Img, lc3Img, lc4Img, lc5Img, lc6Img, lc7Img, lc8Img]
  },
  {
    id: 4,
    title: "Innovest",
    description: "A community-driven investment & startup platform offering secure transactions, expert mentorship, data-driven insights, and flexible investment options.",
    tech: ["React", "JavaScript", "CSS3", "REST API", "Responsive Design"],
    features: [
      "Secure Transactions: Protected with top-notch security protocols",
      "Community Driven: Network of like-minded investors & entrepreneurs",
      "Expert Guidance: Advice from experienced mentors in the field",
      "Data-Driven Insights: Analytics to make informed investment decisions",
      "Professional Network: Connect with industry leaders & partners",
      "Flexible Investments: Options tailored to individual financial goals"
    ],
    github: "#",
    overview: "Innovest is a comprehensive investment portal designed to connect entrepreneurs and investors. It provides data-driven financial analytics, expert mentorship channels, and high-security transaction workflows to empower smart, community-backed investments.",
    challenges: "Designing an intuitive, trust-building user interface for complex financial data visualization and mentor networking tools.",
    lessons: "Mastered building financial dashboard components, responsive data grids, and modern investment platform user flows.",
    image: innovestHeroImg,
    screenshots: [innovest1Img, innovest2Img, innovest3Img]
  }
];

const ProjectModal = ({ project, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        
        {project.video ? (
          <div className="modal-hero-container">
            <video 
              src={project.video} 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="modal-hero-video"
            />
          </div>
        ) : project.image ? (
          <div className="modal-hero-container">
            <img src={project.image} alt={project.title} className="modal-hero-img" onClick={() => setLightboxImg(project.image)} />
          </div>
        ) : (
          <div className="modal-image-placeholder">
            <span className="modal-img-text">📸 Project Screenshots</span>
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title text-neon">{project.title}</h2>

          <div className="modal-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>

          <div className="modal-section">
            <h3>Features</h3>
            <ul>
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Technologies</h3>
            <div className="modal-tech-tags">
              {project.tech.map((t, i) => <span key={i} className="modal-tag">{t}</span>)}
            </div>
          </div>

          <div className="modal-section">
            <h3>Challenges</h3>
            <p>{project.challenges}</p>
          </div>

          <div className="modal-section">
            <h3>Lessons Learned</h3>
            <p>{project.lessons}</p>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="modal-gallery">
              <h3>Screenshots Gallery</h3>
              <div className="gallery-grid">
                {project.screenshots.map((src, n) => (
                  <div className="gallery-item" key={n} onClick={() => setLightboxImg(src)}>
                    <img src={src} alt={`${project.title} screenshot ${n + 1}`} className="gallery-img" />
                    <div className="gallery-hover-overlay">
                      <span>🔍 Expand</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {lightboxImg && (
        <div className="screenshot-lightbox" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
            <img src={lightboxImg} alt="Enlarged screenshot" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card glass" key={project.id}>
              {project.video ? (
                <div className="project-image-wrapper">
                  <video 
                    src={project.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="project-card-video"
                  />
                  <div className="project-card-overlay">
                    <button className="btn project-quick-btn" onClick={() => setSelectedProject(project)}>
                      View Project Details
                    </button>
                  </div>
                </div>
              ) : project.image ? (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-card-img" />
                  <div className="project-card-overlay">
                    <button className="btn project-quick-btn" onClick={() => setSelectedProject(project)}>
                      View Project Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="project-image-placeholder">
                  <span className="project-img-icon">🖥️</span>
                  <span className="project-img-text">Image Placeholder</span>
                </div>
              )}

              <div className="project-body">
                <h3 className="project-title text-neon">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-tags">
                  {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-features">
                  <strong>Key Features:</strong>
                  <ul>
                    {project.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div className="project-actions">
                  <button className="btn project-btn" onClick={() => setSelectedProject(project)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;



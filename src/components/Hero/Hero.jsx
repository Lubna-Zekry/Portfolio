import React from 'react';
import './Hero.css';
import cvFile from '../../assets/LubnaCv_page-0001.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <p className="greeting text-neon">Hello, I'm</p>
          <h1 className="name">Lubna Zekry Hassan</h1>
          <h2 className="title">
            Computer Science Graduate<br />
            <span className="text-neon">E-commerce &amp; Digital Marketing Specialist</span>
          </h2>
          <p className="summary">
            Computer Science graduate with professional experience in E-commerce Management and Digital Marketing. Passionate about creating user-friendly digital experiences, optimizing online stores, and continuously learning modern web technologies.
          </p>

          <div className="contact-info">
            <p>📍 15th of May City Extension, Cairo</p>
            <p>📞 01274463276</p>
            <p>✉️ lubnazekry@gmail.com</p>
          </div>

          <div className="hero-buttons">
            <a href={cvFile} download="LubnaZekry_CV.jpg" className="btn btn-solid">
              ⬇ Download CV
            </a>
            <a href="#projects" className="btn">
              🚀 View Projects
            </a>
            <a href="#contact" className="btn">
              💬 Contact
            </a>
            <a href="https://github.com/Lubna-Zekry" target="_blank" rel="noopener noreferrer" className="btn">
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/in/lubna-zekry/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="btn">
              💼 LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-visual animate-float">
          <div className="glowing-orb"></div>
          <div className="glowing-orb orb-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

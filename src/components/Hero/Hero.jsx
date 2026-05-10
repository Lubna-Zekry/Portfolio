import React from 'react';
import './Hero.css';
import cvImage from '../../assets/LubnaZekryCV_page-0001.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <p className="greeting text-neon">Hello, I'm</p>
          <h1 className="name">Lubna Zekry Hassan</h1>
          <h2 className="title">E-commerce & Marketing Manager <br/><span className="text-neon">& Aspiring MERN Stack Developer</span></h2>
          <p className="summary">
            E-commerce & Marketing Manager with experience in managing online stores and executing data-driven marketing strategies. Currently expanding my technical skill set by learning and building with the MERN stack (MongoDB, Express, React, Node.js).
          </p>
          
          <div className="contact-info">
            <p>📍 15th of May City Extension, Cairo</p>
            <p>📞 01274463276</p>
            <p>✉️ lubnazekry@gmail.com</p>
          </div>

          <div className="hero-buttons">
            <a href="http://linkedin.com/in/lubna-zekry" target="_blank" rel="noopener noreferrer" className="btn btn-solid">LinkedIn</a>
            <a href={cvImage} target="_blank" rel="noopener noreferrer" className="btn">Preview CV</a>
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

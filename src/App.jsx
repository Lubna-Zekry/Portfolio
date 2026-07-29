import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Resume />
      <Contact />

      <footer style={{
        textAlign: 'center',
        padding: '2.5rem 0',
        color: 'var(--text-secondary)',
        borderTop: '1px solid rgba(255,16,122,0.2)',
        fontSize: '0.9rem'
      }}>
        <p>
          &copy; {new Date().getFullYear()} <span style={{ color: 'var(--neon-pink)' }}>Lubna Zekry Hassan</span>. All rights reserved.
        </p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.8rem' }}>
          Built with React · Designed with ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;

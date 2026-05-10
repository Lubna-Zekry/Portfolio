import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,16,122,0.2)' }}>
        <p>&copy; {new Date().getFullYear()} Lubna Zekry Hassan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

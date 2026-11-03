import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Process from './components/Process';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/modal.css';
import './script/global.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Expertise />
        <Projects />
        <TechStack />
        <Process />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

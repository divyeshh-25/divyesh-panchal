import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/modal.css';
import './script/global.js';
import Contact from './components/Contact.jsx';
// index.js

function App() {
  
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/global.css';
import './script/index.js';
import Contact from './components/Contact.jsx';



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

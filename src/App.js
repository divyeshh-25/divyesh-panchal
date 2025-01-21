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
       <Helmet>

      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Divyesh Panchal | DivyeshCodes | Fullstack Web Developer</title>

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="assets/favicon.ico" type="image/x-icon" />

      {/* Meta Description */}
      <meta
        name="description"
        content="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />

      {/* Author */}
      <meta name="author" content="Divyesh Panchal" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta
        property="og:title"
        content="Divyesh Panchal | DivyeshCodes | Fullstack Web Developer"
      />
      <meta property="og:site_name" content="Divyesh Panchal Portfolio Website" />
      <meta property="og:url" content="https://divyesh-panchal.vercel.app/" />
      <meta
        property="og:description"
        content="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="assets/png/divyesh-panchal.png"
      />
    </Helmet>
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

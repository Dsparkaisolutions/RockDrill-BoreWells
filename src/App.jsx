import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <div className="white-gradientl" />
      </div>
      <Companies />
      <div className="white-gradientrb" />
      <div id="residencies">
        <Residencies />
      </div>
      <div className="white-gradientlb" />
      <div id="our-values">
        <Value />
      </div>
      <div id="contact-us">
        <Contact />
      </div>
      <Footer />
      <div className="white-gradientfb white-gradientrb white-gradientlb white-gradientl " />
    </div>
  );
}

export default App;

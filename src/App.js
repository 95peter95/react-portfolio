import React, { Component } from 'react';
import './main.scss';
import './styles.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import { Link, Element } from 'react-scroll'

class App extends Component {
  render() {
  return (
    <>
    <div className="navbar">
        <a href="home"><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></a>
        <a href="about"><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About me</Link></a>
        <a href="skills"><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >Skills</Link></a>
        <a href="certificates"><Link activeClass="active" to="certificates" spy={true} smooth={true} duration={500}>Certificates</Link></a>     
    </div>
                    
    <Element name="home">
      <Header />
    </Element>
    
    <Element name="about">
      <About />
    </Element>
    
    <Element name="skills">
      <Skills />
    </Element>
    
    <Element name="certificates">
      <Certificates />
    </Element>
    
    <Footer />
    </>
  );
}
}

export default App;

// App.js

import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import AboutMe from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <AboutMe />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;

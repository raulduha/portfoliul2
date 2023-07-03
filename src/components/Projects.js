// Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <div>
          <h3>Project 1</h3>
          <p>Short description of the project.</p>
          <p>Technologies used: React, Node.js, Express.js</p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
        <div>
          <h3>Project 2</h3>
          <p>Short description of the project.</p>
          <p>Technologies used: HTML, CSS, JavaScript</p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
        <div>
          <h3>Project 3</h3>
          <p>Short description of the project.</p>
          <p>Technologies used: HTML, CSS, JavaScript</p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

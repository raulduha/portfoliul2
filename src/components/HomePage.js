import React from 'react';
import './HomePage.css';
import PresentationImage from '../images/raul.png';

const HomePage = () => {
  return (
    <section id="home">
      <div>
        <div className="profile-picture">
          <img src={PresentationImage} alt="Profile" />
        </div>
        <h1>Raul Duhalde E.</h1>
        <h2>Web/Mobile Developer</h2>
        <p>Hello, Im a Computer Science student at University, and i have some experience Programming web and mobile apps.</p>
        <div>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

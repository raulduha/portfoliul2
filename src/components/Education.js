// Education.js

import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <div className="education-heading">
        <h2>Education</h2>
      </div>
      <div className="education-cards">
        <div className="education-card">
          <div>
            <h3>University of Los Andes, Chile</h3>
            <p>Degree: Bachelor of Science in Computer Science</p>
          </div>
        </div>
        <div className="education-card">
          <div>
            <h3>Certifications</h3>
            <ul>
              <li>Certificate in Web Development</li>
              <li>Certificate in JavaScript Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

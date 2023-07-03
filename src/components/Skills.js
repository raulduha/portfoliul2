import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        <div className={expanded ? 'expanded' : ''}>
          <h3 onClick={handleExpand}>Programming Languages</h3>
          <ul>
            <li>
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </li>
            <li>
              <i className="fab fa-python"></i>
              <span>Python</span>
            </li>
            <li>
              <i className="fab fa-java"></i>
              <span>Java</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>
              <i className="fab fa-react"></i>
              <span>React</span>
            </li>
            <li>
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </li>
            <li>
              <i className="fab fa-node-js"></i>
              <span>Express.js</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Tools & Technologies</h3>
          <ul>
            <li>
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </li>
            <li>
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </li>
            <li>
              <i className="fab fa-git"></i>
              <span>Git</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

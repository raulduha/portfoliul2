// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>You can reach me at:</p>
        <ul>
          <li>Email: raulduhaldee@gmail.com</li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/raul-anibal-duhalde-errazuriz-255105257/" target="_blank" rel="noopener noreferrer">My LinkedIn profile</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/raulduha" target="_blank" rel="noopener noreferrer">My GitHub profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

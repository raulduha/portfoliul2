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
          <li>Email: yourname@example.com</li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">your LinkedIn profile</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">your GitHub profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

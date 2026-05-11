import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card glass-panel animate-fade-in delay-200">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> souvikbiswas806@gmail.com</p>
            <p><strong>Mobile:</strong> +91-8017218169</p>
            <p><strong>Location:</strong> Bengaluru, India</p>
          </div>
          <a href="mailto:souvikbiswas806@gmail.com" className="btn-primary" style={{marginTop: '2rem'}}>
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import SocialLinks from './SocialLinks';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content glass-panel animate-fade-in">
        <div className="hero-image-container">
          <img src="/profile.jpeg" alt="Souvik Biswas" className="profile-photo" />
        </div>
        <div className="hero-text">
          <h2 className="greeting">Hi there, I'm</h2>
          <h1 className="name">Souvik Biswas</h1>
          <p className="tagline" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            ML Engineer specialising in Generative AI, LLMOps, and applied machine learning.
          </p>
          <p className="bio" style={{ maxWidth: '800px', fontSize: '1.15rem', marginBottom: '1.5rem' }}>
            Proficient in architecting multi-agent systems, deploying cloud-native LLM/Vision endpoints, and fine-tuning models for edge inference. Skilled in LangGraph, LangChain, Hugging Face, and Vertex AI to deliver scalable AI solutions.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;

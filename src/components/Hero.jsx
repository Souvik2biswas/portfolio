import SocialLinks from './SocialLinks';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content glass-panel animate-fade-in">
        <div className="hero-image-container">
          <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt="Souvik Biswas" className="profile-photo" />
        </div>
        <div className="hero-text">
          <div className="hero-badge-container">
            <span className="hero-badge">🚀 AI Agent Engineer</span>
          </div>
          <h2 className="greeting">Hi there, I'm</h2>
          <h1 className="name">Souvik Biswas</h1>
          <p className="tagline" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            AI Agent Engineer specializing in Generative AI, RAG pipelines, and Autonomous Agent workflows.
          </p>
          <p className="bio" style={{ maxWidth: '800px', fontSize: '1.15rem', marginBottom: '1.8rem' }}>
            AI Agent Engineer with production experience building Generative AI applications using LLMs (Gemini, Llama-3, Claude), RAG pipelines, and autonomous multi-agent workflows. Proficient in LangGraph, LangChain, and cloud-native MLOps architectures.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Multi-Agent Research Workflow",
      description: "Architected an async multi-agent system with isolated Researcher, Analyst, and Reviewer nodes via LangGraph state graphs; Tavily API for AI-optimised web search; dramatically reduces hallucinations vs. single-agent baseline. Deployed on Hugging Face Spaces with Groq (Llama-3) backend for low-latency inference.",
      tech: ["LangGraph", "Groq API (Llama-3)", "Tavily", "Hugging Face Spaces", "Python"],
      link: "#"
    },
    {
      title: "Edge-Optimised Multilingual OCR (LoRA Fine-Tuned)",
      description: "Fine-tuned GOT-OCR 2.0 via LoRA on custom Hindi datasets, improving regional text recognition on complex spatial layouts and Indian vernacular scripts; published model at Solo448/GOT-2-hindi CPU. Engineered CPU-bound deployment bypassing GPU requirements; interactive Gradio UI on Hugging Face Spaces.",
      tech: ["GOT-OCR 2.0", "LoRA/PEFT", "Gradio", "Hugging Face Spaces"],
      link: "#"
    },
    {
      title: "Multilingual TTS Fine-Tuning (SpeechT5)",
      description: "Fine-tuned Microsoft SpeechT5 on technical interview transcripts and Hindi/Bengali corpora; achieved 44% validation loss reduction; deployed public inference API on Hugging Face Spaces.",
      tech: ["Hugging Face Transformers", "SpeechT5", "Python"],
      link: "#"
    },
    {
      title: "Solar Cycle 25 & 26 Prediction",
      description: "Forecast solar cycles on 149 years of Royal Observatory Greenwich SSA data using RF, XGBoost, LightGBM, and Ridge ensemble; outperformed individual regressors on held-out test set.",
      tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.link} className="btn-outline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Microservices-Based Autonomous Multi-Agent Research Workflow",
      description: [
        "Architected an async multi-agent system with 3 isolated microservice nodes (Researcher, Analyst, Reviewer) orchestrated via LangGraph state graphs, reducing hallucination rate vs. single-agent baseline.",
        "Integrated Tavily REST API for AI-optimised web search and Groq (Llama-3) as LLM backend, achieving sub-2s inference latency; deployed on Hugging Face Spaces with Git-based CI/CD pipeline."
      ],
      tech: ["LangGraph", "Groq API (Llama-3)", "Tavily REST API", "Agentic AI", "Docker", "Hugging Face Spaces", "CI/CD", "Python"],
      link: "https://huggingface.co/spaces/Solo448/Multi-Agent_Research_Assist"
    },
    {
      title: "Production RAG Pipeline with Semantic Search",
      description: [
        "Built an end-to-end RAG system with LangChain and ChromaDB vector store, supporting multi-document ingestion and dense semantic search retrieval for context-aware LLM responses.",
        "Implemented retrieval evaluation metrics (precision, answer faithfulness); achieved fully offline inference via Ollama with Llama 3.2 — zero external API dependency, zero data egress."
      ],
      tech: ["LangChain", "ChromaDB", "Qdrant-compatible", "Llama 3.2", "Gradio", "Ollama", "Semantic Search", "Python"],
      link: "https://huggingface.co/spaces/Solo448/RAG-with-LLAMA"
    },
    {
      title: "Highly Available AWS Cloud Infrastructure with Docker Deployment",
      description: [
        "Designed and deployed scalable AWS infrastructure using VPC, public/private subnets, and ALB supporting multi-AZ high availability with Docker-containerised application deployment.",
        "Configured Auto Scaling Groups with EC2/Nginx; integrated Amazon EFS for shared storage; deployed RDS MySQL in private subnets with IAM least-privilege security and automated scaling."
      ],
      tech: ["AWS EC2", "VPC", "ALB", "Auto Scaling", "EFS", "RDS MySQL", "IAM", "Docker", "Linux"],
      link: "#"
    },
    {
      title: "Edge-Optimised Multilingual OCR (LoRA Fine-Tuned)",
      description: [
        "Fine-tuned GOT-OCR 2.0 via LoRA on custom Hindi datasets across 5+ complex script layouts, improving regional text recognition accuracy on Indian vernacular scripts.",
        "Engineered CPU-only deployment at Solo448/GOT-2-hindi, eliminating GPU dependency and enabling $0 inference cost on Hugging Face Spaces with continuous Git-based deployment."
      ],
      tech: ["GOT-OCR 2.0", "LoRA/PEFT", "Gradio", "Hugging Face Spaces", "Git", "CI/CD", "Python"],
      link: "https://huggingface.co/spaces/Solo448/OCR_MULTILINGUAL-GOT"
    },
    {
      title: "Multilingual TTS Fine-Tuning (SpeechT5)",
      description: [
        "Fine-tuned Microsoft SpeechT5 on a custom corpus of technical interview transcripts and Hindi/Bengali audio, achieving a 44% reduction in validation loss over the base model.",
        "Deployed public inference API on Hugging Face Spaces via Git-based CI/CD, enabling zero-install multilingual speech synthesis for Hindi, Bengali, and technical English."
      ],
      tech: ["Hugging Face", "SpeechT5", "Python", "Git", "CI/CD"],
      link: "https://huggingface.co/spaces/Solo448/Unified_Multilingual-Text_Speech"
    },
    {
      title: "Solar Cycle 25 & 26 Prediction Using Machine Learning",
      description: [
        "Forecasted solar activity peaks and timings for Solar Cycles 25 and 26 using an ensemble of Ridge Regression, Random Forest, XGBoost, and LightGBM models.",
        "Validated time-series stationarity via the Augmented Dickey-Fuller test and implemented a rolling-window forecasting pipeline with cross-validation on 149 years of Sunspot Area (SSA) data."
      ],
      tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Time-Series", "Machine Learning"],
      link: "https://drive.google.com/file/d/1ttAiidX2UHUrHDFKYEi4ayAraIeO1_0o/view?usp=sharing",
      github: "https://github.com/Souvik2biswas/Solar-cycle-prediction"
    },
    {
      title: "Autonomous Financial Agent (Investment Planner)",
      description: [
        "Designed a privacy-first multi-agent application with local PII scrubbing, high-fidelity PDF statement parsing (LlamaParse), and structured transaction categorization.",
        "Architected a query-routing orchestrator via LangGraph connecting a conversational assistant, a text-to-SQL agent with database protection, and an Indian Income Tax Advisory RAG agent."
      ],
      tech: ["Next.js", "FastAPI", "LangGraph", "LlamaParse", "SQLAlchemy", "Docker", "PostgreSQL", "Python"],
      link: "#",
      github: "https://github.com/Souvik2biswas/AI_investment_planner"
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
                <ul className="project-desc-list">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.link && project.link !== "#" && (
                  <a href={project.link} className="btn-outline" target="_blank" rel="noopener noreferrer">
                    {project.title.includes("Prediction") ? "View Report" : "Live Demo"}
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="btn-outline github-btn" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {(!project.github && (!project.link || project.link === "#")) && (
                  <span className="btn-outline disabled">Details</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

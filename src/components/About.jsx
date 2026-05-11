import React from 'react';
import './About.css';

const About = () => {
  const skillCategories = [
    { title: "LLM & Agents", skills: "LangChain, LangGraph, LlamaIndex, Multi-Agent Systems, RAG, Prompt Engineering, RLHF, Fine-Tuning, LoRA/PEFT" },
    { title: "AI Frameworks", skills: "Hugging Face Transformers, TensorFlow, PyTorch, Gradio, Streamlit, Groq (Llama-3), Tavily, LangSmith" },
    { title: "Cloud & MLOps", skills: "Vertex AI (Gemini API), Google Cloud Platform, Hugging Face Spaces, MLflow, Docker" },
    { title: "Vector Databases", skills: "FAISS, ChromaDB, Pinecone, Oracle AI Vector Search" },
    { title: "Data & Analytics", skills: "Python, SQL, R, PySpark, Pandas, NumPy, Scikit-learn, Power BI, Advanced Excel, Matplotlib" }
  ];

  const experience = [
    {
      role: "AI Training Specialist – RLHF",
      company: "Outlier AI",
      duration: "Aug 2024 – Jun 2025",
      points: [
        "Completed 500+ RLHF annotation cycles for reasoning, code generation, and instruction-following; authored preference data pairs (chosen/rejected) for DPO/PPO pipelines of production LLMs; maintained ≥95% consistency as domain expert across STEM & code tasks.",
        "Red-teamed frontier LLMs to surface factuality and safety failure modes; findings directly incorporated into subsequent training iterations."
      ]
    },
    {
      role: "Junior ML Engineer & Literature Reviewer",
      company: "Omdena",
      duration: "Apr 2024 – Aug 2024",
      points: [
        "Built LSTM + XGBoost ensemble forecasting COVID-19 dynamics across Zambia (RMSE ~18%); deployed on Streamlit + DagsHub.",
        "Contributed geospatial ML for Cultivate urban gardening project using geolocation and environmental features."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Exposys Data Labs",
      duration: "Nov 2023 – Dec 2023",
      points: [
        "Delivered EDA, feature engineering, and supervised model training; produced benchmark report with Matplotlib/Seaborn visualisations for stakeholders."
      ]
    }
  ];

  const education = [
    {
      degree: "M.Sc. in Data Science",
      institution: "University of Kalyani",
      duration: "Jul 2022 – Jul 2024",
      score: "GPA: 7.66/10"
    },
    {
      degree: "B.Sc. in Mathematics (Hons.)",
      institution: "University of Burdwan",
      duration: "Jan 2019 – Jul 2022",
      score: "GPA: 8.83/10"
    }
  ];

  const certifications = [
    "Oracle AI Vector Search Certified Professional (Oracle, Aug 2025)",
    "Develop GenAI Apps with Gemini & Streamlit Skill Badge (Google, Aug 2025)",
    "Build Real World AI Apps with Gemini & Imagen Skill Badge (Google, Aug 2025)",
    "Inspect Rich Documents with Gemini Multimodal RAG Skill Badge (Google)",
    "Explore GenAI with Vertex AI Gemini API Skill Badge (Google)",
    "Prompt Design in Vertex AI Skill Badge (Google, Jul 2025)",
    "Machine Learning with Python – FreeCodeCamp",
    "Diploma in MS Excel – Alison (Oct 2025)",
    "Selected: Grow Tech AI Program – Dr. Reddy's Foundation (Apr 2026)",
    "Contributor, 3 Omdena projects"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Background & Skills</h2>
        
        <div className="about-content">
          <div className="about-main glass-panel animate-fade-in delay-100">
            <h3 className="subsection-title">Experience</h3>
            <div className="experience-list">
              {experience.map((exp, idx) => (
                <div key={idx} className="experience-item">
                  <h4>{exp.role} <span className="company">@ {exp.company}</span></h4>
                  <span className="duration">{exp.duration}</span>
                  <ul>
                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="subsection-title" style={{marginTop: '2rem'}}>Education</h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution} | {edu.duration} | {edu.score}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-sidebar">
            <div className="skills-container glass-panel animate-fade-in delay-200" style={{marginBottom: '2rem'}}>
              <h3 className="subsection-title">Skills</h3>
              <div className="skills-list">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="skill-category">
                    <strong>{cat.title}:</strong> {cat.skills}
                  </div>
                ))}
              </div>
            </div>

            <div className="certs-container glass-panel animate-fade-in delay-300">
              <h3 className="subsection-title">Certifications</h3>
              <ul className="certs-list">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

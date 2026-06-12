import './About.css';

const About = () => {
  const skillCategories = [
    { title: "Gen AI & LLMs", skills: "Gemini API, Groq (Llama-3), Claude API, OpenAI-compatible LLMs, RLHF, Prompt Engineering, Fine-Tuning, LoRA/PEFT, Model Evaluation, AI Workflow Design" },
    { title: "Agent & RAG", skills: "LangChain, LangGraph, LlamaIndex, Multi-Agent Systems, Agentic AI, Autonomous Agents, RAG Pipeline Design, Semantic Search" },
    { title: "Vector DBs", skills: "Pinecone, ChromaDB, Qdrant, FAISS, Oracle AI Vector Search" },
    { title: "Cloud & DevOps", skills: "AWS (EC2, VPC, S3, RDS MySQL, IAM, EFS), Vertex AI / GCP, Docker, CI/CD, Hugging Face Spaces, MLflow" },
    { title: "APIs & Tools", skills: "REST APIs, FastAPI, API Integration, Git, GitHub, JSON, Linux, Postman" },
    { title: "Data & ML", skills: "Python, SQL, PySpark, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Power BI, Advanced Excel, Matplotlib, Debugging" }
  ];

  const experience = [
    {
      role: "Data Science Intern",
      company: "Dr. Reddy’s Foundation (Grow Tech AI Program)",
      duration: "Bangalore, India | Apr 2026 – Present",
      points: [
        "Working with structured datasets; performing data extraction, transformation, and loading (ETL) operations to support analytical reporting requirements.",
        "Supporting data quality checks and troubleshooting."
      ]
    },
    {
      role: "AI Content Moderator",
      company: "Outlier AI",
      duration: "Remote | Aug 2024 – Jun 2025",
      points: [
        "Delivered RLHF annotation and model evaluation across 10+ task categories (reasoning, coding, instruction-following), providing structured human feedback used in iterative LLM fine-tuning pipelines.",
        "Reviewed and debugged 100+ model responses per week, identifying systematic failure patterns in agentic AI outputs and directly improving LLM alignment quality and workflow reliability."
      ]
    },
    {
      role: "Junior ML Engineer & Literature Reviewer",
      company: "Omdena",
      duration: "Remote | Apr 2024 – Aug 2024",
      points: [
        "Contributed to 3 international Omdena chapters (India & Zambia) spanning solar cycle forecasting, geospatial ML, and COVID-19 dynamics prediction; collaborated with 20+ engineers globally.",
        "Built a 4-model ensemble (RF, XGBoost, LightGBM, Ridge) for solar cycle 25 & 26 prediction on 149 years of SSA data, outperforming all individual baselines on held-out evaluation sets.",
        "Developed a geospatial ML pipeline for personalised urban gardening recommendations (Cultivate project), integrating location and environmental features via REST API data ingestion."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Exposys Data Labs",
      duration: "Remote | Nov 2023 – Dec 2023",
      points: [
        "Applied EDA and feature engineering on structured datasets; trained, evaluated, and debugged 3+ ML models under industry-standard workflows, delivering performance reports to senior mentors."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Kalyani, West Bengal, India",
      duration: "Jul 2022 – Jul 2024",
      score: "GPA: 7.66"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "University of Burdwan, West Bengal, India",
      duration: "Jan 2019 – Jul 2022",
      score: "GPA: 8.83"
    }
  ];

  const certifications = [
    { name: "Oracle AI Vector Search Certified Professional — Oracle (Aug 2025)", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1CAAE53CFEECAF92D6518163C11F408BEC4DA2B474D73B9D82E878737D869838" },
    { name: "Develop GenAI Apps with Gemini & Streamlit Skill Badge — Google (Aug 2025)" },
    { name: "Build Real World AI Apps with Gemini & Imagen Skill Badge — Google (Aug 2025)" },
    { name: "Inspect Rich Documents with Gemini Multimodal RAG Skill Badge — Google" },
    { name: "Explore GenAI with Vertex AI Gemini API Skill Badge — Google" },
    { name: "Prompt Design in Vertex AI Skill Badge — Google (Jul 2025)" },
    { name: "Machine Learning with Python — FreeCodeCamp" },
    { name: "Diploma in Microsoft Excel — Alison (Oct 2025)" },
    { name: "Selected: Grow Tech AI Program — Dr. Reddy's Foundation (Apr 2026)" },
    { name: "Contributor, 3 Omdena International AI Projects (India & Zambia Chapters)" }
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
                  <div className="timeline-dot"></div>
                  <h4>{exp.role} <span className="company">@ {exp.company}</span></h4>
                  <span className="duration">{exp.duration}</span>
                  <ul>
                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="subsection-title" style={{ marginTop: '3rem' }}>Education</h3>
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="details">{edu.duration} | <span className="score">{edu.score}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-sidebar">
            <div className="skills-container glass-panel animate-fade-in delay-200" style={{ marginBottom: '2rem' }}>
              <h3 className="subsection-title">Skills</h3>
              <div className="skills-list">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="skill-category">
                    <strong>{cat.title}</strong>
                    <div className="skill-tags">
                      {cat.skills.split(', ').map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certs-container glass-panel animate-fade-in delay-300">
              <h3 className="subsection-title">Certifications</h3>
              <ul className="certs-list">
                {certifications.map((cert, idx) => (
                  <li key={idx}>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                        {cert.name} ↗
                      </a>
                    ) : (
                      cert.name
                    )}
                  </li>
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

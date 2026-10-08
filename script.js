// ======================================================
// CONTENT
// ======================================================


// ==================== SKILLS ====================

const skills = [

  {
    category: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "NLP",
      "RAG / LLM Applications",
      "Computer Vision",
      "Speech Recognition",
      "Forecasting"
    ]
  },

  {
    category: "Data",
    items: [
      "Python",
      "Data Analysis",
      "ETL / Data Pipelines",
      "Data Visualization",
      "Customer Segmentation"
    ]
  },

  {
    category: "Tools & Technologies",
    items: [
      "ChromaDB",
      "Ollama",
      "Whisper",
      "Jupyter",
      "Git & GitHub",
      "Flask"
    ]
  }

];


// ==================== PROJECTS ====================

const projects = [

  // FEATURED PROJECT

  {
    featured: true,

    title: "Matine Mind",

    subtitle: "AI-Powered Knowledge Assistant",

    label: "PFE · MATINE CONSULTING",

    desc:
      "An internal AI assistant designed to help consultants retrieve " +
      "relevant past project references from natural-language queries " +
      "or uploaded Terms of Reference documents.",

    details:
      "I designed and implemented an end-to-end RAG pipeline combining " +
      "multilingual semantic search, BM25 lexical retrieval, Reciprocal " +
      "Rank Fusion and CrossEncoder reranking. The system analyzes " +
      "queries and TOR documents, extracts relevant criteria and returns " +
      "ranked project references with criterion-level matching scores.",

    results: [
      {
        value: "0.87",
        label: "Contextual relevance"
      },
      {
        value: "0.83",
        label: "Contextual precision"
      },
      {
        value: "0.91",
        label: "NDCG@5"
      }
    ],

    tags: [
      "RAG",
      "LLMs",
      "NLP",
      "Python",
      "ChromaDB",
      "BM25",
      "CrossEncoder",
      "Flask"
    ]
  },


  // OTHER PROJECTS

  {
    title: "Whisper Tunisian Eval",

    desc:
      "Evaluating Whisper models on Tunisian Arabic speech using " +
      "WER and CER.",

    tags: [
      "Speech",
      "Whisper",
      "NLP"
    ],

    url:
      "https://github.com/xay284/whisper-tunisian-eval"
  },


  {
    title: "Churn Prediction",

    desc:
      "Predicting customer churn with machine learning and evaluating " +
      "model performance using ROC-AUC and PR-AUC.",

    tags: [
      "Machine Learning",
      "Python"
    ],

    url:
      "https://github.com/xay284/churn-prediction"
  },


  {
    title: "Tomato Leaf Disease Classifier",

    desc:
      "Classifying six tomato leaf diseases using computer vision " +
      "and the PlantVillage dataset.",

    tags: [
      "Computer Vision",
      "Python"
    ],

    url:
      "https://github.com/xay284/tomato-leaf-disease-classifier"
  },


  {
    title: "Song Popularity",

    desc:
      "Exploring the relationship between audio features and " +
      "Spotify song popularity.",

    tags: [
      "Data Analysis",
      "Machine Learning"
    ],

    url:
      "https://github.com/xay284/song-popularity"
  },


  {
    title: "Weather ETL",

    desc:
      "A Python pipeline that extracts, transforms and loads " +
      "weather data for analysis.",

    tags: [
      "Data Engineering",
      "Python"
    ],

    url:
      "https://github.com/xay284/weather-etl"
  },


  {
    title: "Anomaly Detection",

    desc:
      "Using unsupervised machine learning to identify unusual " +
      "patterns in data.",

    tags: [
      "Machine Learning",
      "Python"
    ],

    url:
      "https://github.com/xay284/anomaly-detection"
  }

];


// ==================== EXPERIENCE ====================

const experience = [

  {
    role: "Final-year Project — Matine Mind",
    where: "Matine Consulting · Tunis",

    desc:
      "Built an internal RAG-based knowledge assistant for retrieving " +
      "relevant consulting projects. Worked across document understanding, " +
      "hybrid retrieval, reranking, scoring and the web interface."
  },


  {
    role: "Data Science engineering Intern",
    where: "LuxPlast",

    desc:
      "Worked with approximately 8,000 orders, 600 customers and " +
      "150 products on customer segmentation, sales forecasting and " +
      "recommendation, with results integrated into a Streamlit application."
  },


  {
    role: "Intern",
    where: "HyoTech · Sfax",

    desc:
      "Built an R Shiny dashboard visualizing green-hydrogen deficits " +
      "by country using energy data from the IEA and Oil & Gas Journal."
  },


  {
    role: "Engineering Degree — Statistics and Data Analysis",
    where: "ESSAI · Carthage University",

    desc:
      "National Engineering Degree in Data Science — Très Bien."
  },


  {
    role: "Dance Instructor",
    where: "Temps Danse · Jardins de Carthage",

    desc:
      "Teaching dance to children and teenagers, preparing choreography " +
      "and leading groups."
  },


  {
    role: "Social Media Moderator",
    where: "Online community page",

    desc:
      "Managing comments and messages, enforcing community rules and " +
      "maintaining respectful exchanges in a high-engagement environment."
  },
  
  {
    role: "Member — AIESEC Carthage",
    where: "AIESEC Carthage · Tunis",

    desc:
      "Contributed to the promotion of international opportunities, " +
      "connected with companies and participated in conferences and " +
      "events organized by AIESEC."
  }



];


// ======================================================
// RENDER SKILLS
// ======================================================

document.getElementById("skills-list").innerHTML =

  skills.map((group, index) => `

    <div class="skill-group">

      <div class="skill-number">
        0${index + 1}
      </div>

      <h3>
        ${group.category}
      </h3>

      <div class="skill-items">

        ${group.items
          .map(skill => `
            <span>${skill}</span>
          `)
          .join("")}

      </div>

    </div>

  `).join("");


// ======================================================
// RENDER PROJECTS
// ======================================================

document.getElementById("projects-grid").innerHTML =

  projects.map(project => {

    // FEATURED MATINE PROJECT

    if (project.featured) {

      return `

        <article class="project-featured">

          <div class="project-featured-top">

            <div>

              <span class="project-label">
                ${project.label}
              </span>

              <h3>
                ${project.title}
              </h3>

              <h4>
                ${project.subtitle}
              </h4>

            </div>

            <span class="project-index">
              01
            </span>

          </div>


          <p class="project-main-description">
            ${project.desc}
          </p>


          <p class="project-details">
            ${project.details}
          </p>


          <div class="project-results">

            ${project.results.map(result => `

              <div class="result">

                <strong>
                  ${result.value}
                </strong>

                <span>
                  ${result.label}
                </span>

              </div>

            `).join("")}

          </div>


          <div class="project-tags">

            ${project.tags.map(tag => `
              <span>${tag}</span>
            `).join("")}

          </div>

        </article>

      `;
    }


    // NORMAL PROJECTS

    return `

      <article class="project-card">

        <div class="project-card-top">

          <span class="project-small-label">
            PROJECT
          </span>

          <span class="arrow">
            ↗
          </span>

        </div>

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.desc}
        </p>

        <div class="project-tags">

          ${project.tags.map(tag => `
            <span>${tag}</span>
          `).join("")}

        </div>

        <a
          href="${project.url}"
          target="_blank"
          rel="noopener"
          class="project-link"
        >
          View project →
        </a>

      </article>

    `;

  }).join("");


// ======================================================
// RENDER EXPERIENCE
// ======================================================

document.getElementById("timeline").innerHTML =

  experience.map((item, index) => `

    <div class="experience-item">

      <div class="experience-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="experience-content">

        <h3>
          ${item.role}
        </h3>

        <div class="experience-meta">
          ${item.where}
        </div>

        <p>
          ${item.desc}
        </p>

      </div>

    </div>

  `).join("");


// ======================================================
// FOOTER
// ======================================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ======================================================
// DARK MODE
// ======================================================

const root = document.documentElement;

try {

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme) {
    root.dataset.theme = savedTheme;
  }

} catch (e) {}


document
  .getElementById("theme-toggle")
  .addEventListener("click", () => {

    const next =
      root.dataset.theme === "dark"
        ? "light"
        : "dark";

    root.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch (e) {}

  });
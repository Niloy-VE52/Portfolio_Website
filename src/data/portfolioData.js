export const personalInfo = {
  name: "Niloy Das",
  title: "AIML Engineer @ Virtual Employee",
  subtitle: "AIML Engineer at Virtual Employee specializing in production Generative AI, RAG document intelligence, computer vision systems, and full-stack LLM applications.",
  location: "Kolkata / Hyderabad, India",
  email: "niloydas.ai@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "AIML Engineer at Virtual Employee with hands-on experience developing enterprise AI models, computer vision systems, retrieval-augmented generation (RAG), vector databases, and full-stack LLM solutions. Former Summer Project Intern at Advanced Systems Laboratory (DRDO), Hyderabad.",
  metrics: [
    { label: "Current Role", value: "AIML Eng.", suffix: "", sub: "Virtual Employee" },
    { label: "Recognition Accuracy", value: "95%+", suffix: "", sub: "Face Identification Pipeline" },
    { label: "Time Reduction", value: "80%", suffix: "", sub: "Attendance Processing" },
    { label: "DRDO Intern Alum", value: "Offline LLMs", suffix: "", sub: "Secure Intelligence Systems" }
  ]
};

export const projects = [
  {
    id: "facial-attendance",
    title: "Digital Facial Recognition Attendance System",
    category: "Computer Vision",
    badge: "Computer Vision & Real-time AI",
    summary: "AI-powered real-time facial recognition attendance platform eliminating proxy attendance with automated reporting.",
    description: "Designed and implemented an enterprise-grade face identification pipeline delivering 95%+ recognition accuracy. Automated attendance logging for educational institutions and organizations, cutting total processing time by ~80%.",
    techStack: ["Python", "OpenCV", "MediaPipe", "Face Recognition", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Built real-time multi-face identification pipeline reaching 95%+ accuracy.",
      "Developed interactive admin web dashboard with student & staff management.",
      "Reduced attendance processing time by ~80% and eliminated proxy attendance.",
      "Generated automated daily, weekly, and monthly PDF & Excel reports."
    ],
    demoType: "face-scanner",
    color: "from-cyan-500 to-blue-600",
    glowColor: "cyan"
  },
  {
    id: "leadgen-pipeline",
    title: "LeadGen Pipeline — B2B Lead Gen & AI Scoring",
    category: "Full-Stack AI",
    badge: "FastAPI + React + LLM",
    summary: "End-to-end multi-stage pipeline scraping job postings, enriching company data, and scoring leads via custom LLM prompts.",
    description: "Architected a full-stack automated lead generation pipeline. Integrated LinkedIn job scraping via Apify, Glassdoor review analysis, Apollo funding lookup, and an LLM-powered lead decision engine with weighted decision logic.",
    techStack: ["Python", "FastAPI", "React", "Apify API", "OpenAI / Groq API", "Google Sheets API", "RapidFuzz"],
    highlights: [
      "Built multi-stage scraping & enrichment (LinkedIn, Glassdoor, Apollo funding lookup).",
      "Designed LLM lead scoring engine (KEEP / HOLD / REJECT) with rule-based fallback triggers.",
      "Implemented fuzzy string matching with RapidFuzz for duplicate detection.",
      "Created async background job runner with live WebSocket status polling and React dashboard."
    ],
    demoType: "lead-scorer",
    color: "from-purple-500 to-indigo-600",
    glowColor: "purple"
  },
  {
    id: "ai-data-analyst",
    title: "AI Data Analyst — Conversational CSV Assistant",
    category: "Data Analytics",
    badge: "Gemini API + Plotly Sandbox",
    summary: "Conversational CSV analytics assistant allowing users to upload datasets and generate instant Plotly charts via natural language.",
    description: "Engineered a full-stack AI analytics application powered by Google Gemini. Extracts dataset metadata, runs LLM-generated Python code in a safe sandboxed execution layer, and renders interactive Plotly visualizations dynamically.",
    techStack: ["Python", "Flask", "Google Gemini API", "Pandas", "Plotly", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Automated CSV metadata extraction (column dtypes, missing %, categorical distributions).",
      "Integrated Gemini API to auto-generate 4 recommended charts with analytical text insights.",
      "Sandboxed code execution layer safely converting Plotly charts into renderable JSON.",
      "Built multi-theme (Dark / Light / Midnight) interactive analytics workspace."
    ],
    demoType: "chart-sandbox",
    color: "from-emerald-500 to-teal-600",
    glowColor: "emerald"
  },
  {
    id: "magic-property",
    title: "MagicProperty Elite — AI Real Estate Search Platform",
    category: "RAG & AI Search",
    badge: "FastAPI + GPT-4o + Supabase",
    summary: "AI-powered real estate discovery platform with GPT-4o intent parsing chat assistant for Indian metro city listings.",
    description: "Built a modern full-stack real estate portal with a conversational AI assistant. Features JWT authentication, advanced query filtering, role-based access control, and seamless database property matching.",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "SQLAlchemy", "SQLite / PostgreSQL", "OpenAI API", "Supabase"],
    highlights: [
      "Developed multi-turn GPT-4o-mini AI chat assistant parsing complex natural language queries.",
      "Implemented JWT authentication with bcrypt password hashing and RBAC permissions.",
      "Integrated Supabase cloud storage for high-res property gallery uploads.",
      "Deployed full-stack app with Render backend and decoupled static frontend."
    ],
    demoType: "property-matcher",
    color: "from-amber-500 to-orange-600",
    glowColor: "amber"
  }
];

export const skillsCategories = [
  {
    name: "AI / ML & Frameworks",
    skills: [
      { name: "TensorFlow & PyTorch", level: 90 },
      { name: "OpenCV & MediaPipe", level: 92 },
      { name: "YOLOv8 Object Detection", level: 88 },
      { name: "LangChain & LlamaIndex", level: 90 },
      { name: "Scikit-learn", level: 92 }
    ]
  },
  {
    name: "Vector Storage & LLMs",
    skills: [
      { name: "Vector DBs (Qdrant, FAISS, ChromaDB)", level: 92 },
      { name: "RAG & Embeddings", level: 94 },
      { name: "LLM APIs (Gemini, OpenAI, Groq)", level: 95 },
      { name: "Semantic Search & Agents", level: 90 }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript / JavaScript", level: 88 },
      { name: "SQL", level: 90 },
      { name: "R, C, Java", level: 80 }
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "FastAPI & Flask", level: 94 },
      { name: "React & Tailwind CSS", level: 88 },
      { name: "MySQL & SQLite / Postgres", level: 88 },
      { name: "Azure & AWS Cloud Services", level: 82 }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Hugging Face", level: 88 },
      { name: "Power BI & Tableau", level: 85 },
      { name: "Postman & REST APIs", level: 90 }
    ]
  }
];

export const experience = [
  {
    role: "AIML Engineer",
    organization: "Virtual Employee",
    period: "Present",
    type: "Full-Time",
    description: "Developing and deploying production-grade AI/ML models, RAG architectures, and generative AI solutions for client enterprise applications.",
    achievements: [
      "Engineering end-to-end AI/ML pipelines, LLM-powered workflows, and intelligent decision engines.",
      "Building high-performance Retrieval-Augmented Generation (RAG) systems with vector databases (Qdrant, FAISS) and custom embeddings.",
      "Developing computer vision modules and high-throughput FastAPI backend services on cloud infrastructure.",
      "Collaborating with global cross-functional client teams to convert complex technical specs into reliable AI products."
    ]
  },
  {
    role: "Summer Project Intern",
    organization: "Advanced Systems Laboratory (DRDO), Hyderabad",
    period: "June 2025 – August 2025",
    type: "Internship",
    description: "Developed a private offline LLM-based secure document intelligence system for internal defense research use.",
    achievements: [
      "Built air-gapped, offline Retrieval-Augmented Generation (RAG) architecture.",
      "Processed high-volume technical PDFs with custom chunking & local vector embeddings.",
      "Ensured zero data leakage with local model inference and strict access bounds."
    ]
  },
  {
    role: "B.Tech in Artificial Intelligence and Machine Learning",
    organization: "MCKV Institute of Engineering, Liluah – Howrah, WB",
    period: "Undergraduate Program",
    type: "Education",
    description: "Specializing in Deep Learning, Computer Vision, Natural Language Processing, and Cloud Data Engineering.",
    achievements: [
      "Consistent academic record with focus on practical AI system implementations.",
      "Led technical project teams in AI hackathons and prototype showcases."
    ]
  }
];

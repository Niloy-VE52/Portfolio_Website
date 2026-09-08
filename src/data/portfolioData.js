export const personalInfo = {
  name: "Niloy Das",
  title: "AIML Engineer @ Virtual Employee",
  subtitle: "AIML Engineer at Virtual Employee specializing in production Generative AI, RAG document intelligence, computer vision systems, and full-stack LLM applications.",
  location: "Kolkata / Hyderabad, India",
  email: "niloydas@virtualemployee.com",
  github: "https://github.com/Niloy-VE52",
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
    id: "leadgen-pipeline",
    title: "LeadGen Pipeline — B2B Lead Generation & AI Scoring",
    category: "Full-Stack AI",
    badge: "FastAPI + GPT-5 + Apify",
    summary: "Production-grade 8-stage B2B lead engine — scrapes LinkedIn via Apify, enriches with Apollo & Glassdoor sentiment, scores with GPT-5 and a custom embedding classifier, and auto-exports qualified leads to Google Sheets.",
    description: "Architected a production-grade, 8-stage B2B lead generation engine on FastAPI. The pipeline runs: Apify LinkedIn job scraping → sector filtering → repeatability deduplication → Apollo.io funding enrichment → Glassdoor sentiment analysis → GPT-5 LLM scoring → KEEP/REJECT decision → LinkedIn & email contact discovery. Lead data is persisted to Google Sheets via gspread. A custom work_type_classifier.py uses OpenAI text-embedding-3-small with clause-level splitting and centroid-averaged multi-example anchors — replacing an earlier LLM-based classifier for speed and cost efficiency. Deployed end-to-end on Render.",
    techStack: [
      "Python", "FastAPI", "React",
      "Apify (LinkedIn Scraper)", "Apollo.io", "Glassdoor API",
      "GPT-5 (OpenAI)",
      "Google Sheets (gspread)", "RapidFuzz", "Render"
    ],
    highlights: [
      "8-stage pipeline: Apify scrape → sector check → dedup → Apollo funding → Glassdoor review → LLM scoring → KEEP/REJECT → contact discovery.",
      "Custom work_type_classifier.py using text-embedding-3-small with clause-level splitting and centroid-averaged multi-example anchors — replacing a slower LLM classifier.",
      "GPT-5 powered lead scoring engine with KEEP / HOLD / REJECT decisions and weighted rule-based fallback triggers.",
      "Google Sheets persistence via gspread; async FastAPI background tasks with live status polling and React dashboard.",
      "RapidFuzz fuzzy deduplication across Apify repeatability checks; full deployment on Render."
    ],
    diagramComponent: "LeadGenDiagram",
    demoType: "lead-scorer",
    liveUrl: "https://lead-gen-v01-frontend.onrender.com",
    thumbnail: "/project_thumbnail/Lead_gen.png",
    color: "from-purple-500 to-indigo-600",
    glowColor: "purple"
  },

  {
    id: "plant-disease-detection",
    title: "FloraVision AI — Plant Disease Detection",
    category: "Computer Vision",
    badge: "FastAPI + Gemini Vision + React",
    summary: "AI-powered plant diagnostics app — users upload a leaf photo and receive an instant, structured disease diagnosis powered by Google Gemini Vision.",
    description: "FloraVision AI is a full-stack plant diagnostics application that leverages Google Gemini Vision to identify diseases, stress patterns, and health issues from plant leaf images. A React frontend handles image capture and display, while a FastAPI backend orchestrates the vision analysis — parsing Gemini's output into a structured diagnosis including disease name, confidence level, and care recommendations. Designed to empower farmers and agronomists with instant AI-driven crop health insights.",
    techStack: ["Python", "FastAPI", "Google Gemini Vision", "React", "REST API"],
    highlights: [
      "React frontend with drag-and-drop image upload and real-time diagnosis display.",
      "FastAPI backend orchestrates image submission to Gemini Vision API and parses structured responses.",
      "Gemini Vision model identifies disease name, severity, and returns actionable care recommendations.",
      "3-stage pipeline: Upload → Analyze (Gemini Vision) → Diagnose & Respond."
    ],
    diagramComponent: "PlantDiseaseDiagram",
    demoType: "plant-scanner",
    liveUrl: "https://plant-disease-detection-eight-xi.vercel.app",
    thumbnail: "/project_thumbnail/floraVision_AI.png",
    color: "from-green-500 to-emerald-600",
    glowColor: "green"
  },
  {
    id: "attendance-data-analyst",
    title: "SarvaDaksh — Smart Attendance & Analytics System",
    category: "Full-Stack AI",
    badge: "Flask + OpenCV + LangChain + Gemini",
    summary: "Two-in-one Flask app: real-time facial recognition attendance (OpenCV + RandomForest) bundled with an AI Data Analyst module for natural-language CSV querying and Plotly visualization — powered by LangChain & Gemini 2.5 Flash.",
    description: "SarvaDaksh is a dual-module Flask application. The Attendance half uses OpenCV Haar Cascade for real-time face detection and a scikit-learn RandomForest classifier (trained on webcam-captured face photos, serialised to model.pkl) to auto-mark student attendance once per day with duplicate prevention — with SQLite storage and CSV export. The AI Data Analyst module (/analyst Blueprint) lets users upload any CSV, which is parsed into a SQLite table with metadata extraction and 4 auto-generated charts. A LangChain-powered chat UI translates natural-language questions into SQL queries, while a sandboxed Plotly code runner renders on-demand visualisations. The LLM provider is hot-swappable (Gemini 2.5 Flash Lite default, OpenAI, Anthropic Claude, or local Ollama) via a single config line.",
    techStack: [
      "Python 3.10+", "Flask", "LangChain",
      "Google Gemini 2.5 Flash", "OpenCV (Haar Cascade)",
      "scikit-learn (RandomForest)", "Plotly",
      "SQLite3", "HTML / CSS / Vanilla JS"
    ],
    highlights: [
      "Webcam face enrolment (5–10+ photos), RandomForest training → model.pkl, real-time Haar Cascade detection with 1× per-day duplicate-safe logging.",
      "AI Data Analyst Blueprint: CSV upload → SQLite table + metadata extraction + 4 auto-generated charts on load.",
      "LangChain NL→SQL chat: natural-language questions translated to SQL by Gemini 2.5 Flash Lite, results returned as tables or explanations.",
      "Sandboxed Plotly code runner for on-demand chart generation; 'Deep Dive' mode triggers detailed AI analysis of any selected chart.",
      "Hot-swappable LLM backend (Gemini / OpenAI / Claude / Ollama) via a single provider= config in analyst/llm.py."
    ],
    diagramComponent: "AttendanceDiagram",
    demoType: "attendance-analyst",
    liveUrl: "https://enterprise-management-system-opcs.onrender.com",
    thumbnail: "/project_thumbnail/servaDaksh.png",
    color: "from-cyan-500 to-blue-600",
    glowColor: "cyan"
  },

  {
    id: "nextquest-realestate",
    title: "NestQuest — AI Real Estate Assistant",
    category: "RAG & AI Search",
    badge: "FastAPI + OpenAI + Supabase + React",
    summary: "Full-stack Indian property search app for 4 metro cities — browse/filter listings, chat with an AI assistant that parses natural-language queries (\"2 BHK under 40k in Koramangala\") into DB filters, and manage listings with Supabase image storage.",
    description: "NestQuest is a property search platform for Bangalore, Mumbai, Chennai, and Hyderabad. The core innovation is a sandboxed two-step LLM chat search: the AI emits a structured `propertysearch` JSON block (city, type, BHK, price range) which the FastAPI backend extracts via regex and executes as a filtered SQLAlchemy query — the LLM never touches the database directly, keeping results predictable. The system includes JWT auth (pbkdf2_sha256 + python-jose), role-based access (user/admin), Supabase image storage via raw REST, ~80 seeded mock listings on first boot, and separate strict write / lenient read Pydantic schemas. Deployed on Render — FastAPI backend as a Web Service, React frontend as a Static Site, no Docker required.",
    techStack: [
      "Python", "FastAPI", "SQLAlchemy",
      "SQLite / PostgreSQL", "OpenAI API (GPT-4o-mini)",
      "React", "Supabase Storage",
      "JWT (python-jose)", "pbkdf2_sha256", "Render"
    ],
    highlights: [
      "Two-step LLM search: AI emits a `propertysearch` JSON block → regex-extracted by chat.py → SQLAlchemy DB query → clean reply + property cards returned. LLM never touches DB directly.",
      "JWT auth pipeline: register/login → pbkdf2_sha256 hash/verify → JWT issued → Bearer token on all protected routes via Depends(get_current_user).",
      "Supabase image storage via raw REST calls (no SDK) — upload returns a public URL stored on the Property model; size/type validated server-side.",
      "FastAPI startup seeds DB with default admin + ~80 mock listings across 4 cities if tables are empty; separate strict write vs. lenient read Pydantic schemas prevent legacy data 500s.",
      "Deployed on Render: FastAPI Web Service (uvicorn, no Docker) + React Static Site with REACT_APP_API_URL build-time env var."
    ],
    diagramComponent: "NestQuestDiagram",
    demoType: "property-matcher",
    liveUrl: "https://nest-quest-india.vercel.app",
    thumbnail: "/project_thumbnail/NestQuest.png",
    color: "from-amber-500 to-orange-600",
    glowColor: "amber"
  },
  {
    id: "vfs-visa-automation",
    title: "VFS Global Visa Booking Automation",
    category: "Full-Stack AI",
    badge: "FastAPI + React 19 + Neon PostgreSQL",
    summary: "Full-stack visa appointment booking simulator — users save VFS credentials, add applicants, and trigger a 6-stage automated booking flow (login → captcha → details → slot search → payment → confirmation) with real-time frontend polling.",
    description: "VFS AutoBooking is a full-stack demo simulating automated visa appointment booking on the VFS Global portal. Users register, save their VFS credentials and payment card once, then manage visa applicants via a full CRUD interface. Triggering a batch booking starts an asyncio.create_task background simulation that steps through 6 fixed stages — pausing twice for user interaction (mock CAPTCHA and mock payment) via a REST action endpoint. The React 19 frontend polls /batch-book/{id}/status every 800ms, driving a visual BookingStepper and popping CaptchaModal/PaymentModal when action_required is set. Completion assigns a random slot date/time and fake VFS-XXXXXXXX confirmation number. Built on Neon managed serverless PostgreSQL via SQLAlchemy, with passlib pbkdf2_sha256 auth. No Docker, no Celery — pure asyncio background tasks and in-memory job state.",
    techStack: [
      "Python", "FastAPI", "SQLAlchemy",
      "Neon (Serverless PostgreSQL)",
      "passlib (pbkdf2_sha256)",
      "React 19", "Vite 8 (Rolldown)",
      "Plain CSS (Glassmorphism)", "asyncio"
    ],
    highlights: [
      "6-stage booking state machine via asyncio.create_task — no Celery/queue. In-memory batch_progress dict tracks job state across stages.",
      "Two interactive pause points: CAPTCHA and Payment — frontend detects action_required flag via 800ms polling, pops modal, sends /batch-book/{id}/action to resume.",
      "React 19 + Vite 8 (rolldown-powered) frontend with no router — page switching via local state (currentPage) in App.jsx. Dark glassmorphism CSS with custom properties.",
      "Neon serverless PostgreSQL via SQLAlchemy ORM — users, vfs_credentials, applicants, and booking records persisted across sessions.",
      "Completion randomly assigns slot date/time and generates fake VFS-XXXXXXXX confirmation number; applicant marked Confirmed/Paid."
    ],
    diagramComponent: "VFSDiagram",
    demoType: "visa-bot",
    liveUrl: "https://auto-booking-ten.vercel.app",
    thumbnail: "/project_thumbnail/VFS_automation.png",
    color: "from-rose-500 to-pink-600",
    glowColor: "rose"
  },
  {
    id: "lead-outreach-n8n",
    title: "Automated Calling Outreach (Dograh)",
    category: "Voice AI & Automation",
    badge: "n8n + Dograh + Swappable SIP",
    summary: "Closed-loop automated outbound calling workflow: new phone-number entries in Google Sheets trigger an n8n workflow, handing off to Dograh AI voice agent to place live phone calls via Cloudonix/Telnyx, writing call outcomes back to the sheet.",
    description: "An automated outbound-calling system that transforms new phone number entries in Google Sheets into live AI phone calls, writing the complete call outcome and summary back to the sheet automatically. Google Sheets serves double duty as both the trigger source (new phone number row kicks off the flow) and the system of record (updated with call outcome and summary) — forming a robust closed-loop architecture with no external database. n8n serves purely as the orchestration glue between the Sheets trigger and Dograh's calling engine, keeping all conversational and dialing logic encapsulated inside Dograh. The telephony layer is provider-agnostic and swappable across Cloudonix, Telnyx, Vonage, and Plivo to seamlessly mitigate trial-tier limits and optimize call delivery.",
    techStack: [
      "Google Sheets (Data Source & Record)",
      "n8n (Workflow Orchestration)",
      "Dograh (AI Voice Agent Platform)",
      "Cloudonix", "Telnyx", "Vonage", "Plivo",
      "Webhooks", "REST API"
    ],
    highlights: [
      "Closed-loop zero-DB architecture: Google Sheets serves double duty as event trigger and system of record.",
      "n8n orchestration glue: Bridges Sheets triggers to Dograh's API without embedding complex calling logic.",
      "Dograh conversational voice agent: Conducts natural real-time phone dialogue with human prospects.",
      "Provider-agnostic telephony layer: Swappable carrier backend across Cloudonix, Telnyx, Vonage, and Plivo.",
      "Automated write-back: Call summary, duration, and disposition automatically saved back to the origin row."
    ],
    diagramComponent: "DograhOutreachDiagram",
    demoType: "outreach-flow",
    liveUrl: "https://app.dograh.com/workflow/10509",
    thumbnail: "/project_thumbnail/Outreach_automation.png",
    color: "from-violet-500 to-purple-600",
    glowColor: "violet"
  },
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

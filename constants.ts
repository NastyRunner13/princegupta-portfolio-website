import { Experience, Project, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Prince Gupta",
  tagline: "AI & ML Engineer | Data Scientist",
  aboutHeadline: "Building intelligent systems using LLMs, Computer Vision, and Scalable MLOps pipelines.",
  aboutStory: "I am a passionate Computer Science student specializing in AI and ML at VIT Bhopal. My journey involves deep diving into Large Language Models, computer vision, and building scalable MLOps pipelines. Currently interning at Tata Communications, I optimize LLM applications for real-world efficiency. I have a strong foundation in Python, deep learning frameworks, and cloud technologies, driven by a curiosity to solve complex problems through data.",
  email: "princegupta1586@gmail.com",
  phone: "+91 8743879616",
  location: "Bhopal, Madhya Pradesh",
};

export const EXPERIENCE: Experience[] = [
  {
    id: "tata-comm",
    role: "Data Science Intern",
    company: "Tata Communications",
    duration: "March 2025 – Present",
    location: "Bengaluru",
    mode: "Hybrid",
    description: [
      "Optimized LLM-based application responsiveness by integrating asynchronous programming with Python’s asyncio, improving processing speed by 35%.",
      "Engineered a Redis-backed caching layer for storing and retrieving LLM query results, significantly reducing inference latency and API load.",
      "Integrated persistent chat history functionality into the LLM interface, enabling context-aware conversations and enhancing user experience."
    ]
  },
  {
    id: "cdac",
    role: "Data Science Intern",
    company: "C-DAC",
    duration: "June 2024 – August 2024",
    location: "Pune",
    mode: "Remote",
    description: [
      "Developed “Transcripto”, a Streamlit-based web application for transcription, summarization, and question-answering using multimedia files like videos, PDFs, and images.",
      "Integrated Wav2Vec2 for accurate speech-to-text conversion and EasyOCR for text extraction from images, reducing manual data entry by 30%."
    ]
  },
  {
    id: "photon",
    role: "Video Production Manager",
    company: "Photon Ecademy",
    duration: "February 2023 – December 2023",
    location: "Remote",
    mode: "Remote",
    description: [
      "Managed a team of five in-house video editors, ensuring the production of high-quality educational content and adherence to tight deadlines.",
      "Generated over 50 engaging content pieces by reviewing scripts and collaborating with creators, significantly enhancing Photon Ecademy’s educational offerings."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cag-chatbot",
    title: "Cache Augmented Generation (CAG) Chatbot",
    date: "January 2025",
    techStack: ["Python", "Streamlit", "Hugging Face API", "Sentence Transformers"],
    description: [
      "Engineered a chatbot with a caching mechanism to enhance response times by intelligently storing and retrieving past query responses using semantic similarity matching.",
      "Leveraged Sentence Transformers and Scikit-learn for efficient embedding-based similarity search.",
      "Enhanced system efficiency by 40% through caching, minimizing LLM latency."
    ],
    link: "#"
  },
  {
    id: "kidney-disease",
    title: "Kidney Disease Classification",
    date: "Dec 2024 – Jan 2025",
    techStack: ["Python", "Tensorflow", "MLFlow", "DVC", "Flask", "Docker"],
    description: [
      "Built a medical imaging solution using VGG16-based transfer learning, achieving 86% tumor detection accuracy.",
      "Designed a complete MLOps pipeline with MLflow and Docker for experiment tracking, model registry, and real-time inference.",
      "Automated preprocessing and data augmentation for robust model training."
    ],
    link: "#"
  },
  {
    id: "medical-chatbot",
    title: "Medical Chatbot (GenAI Based)",
    date: "July 2024 – August 2024",
    techStack: ["Python", "LangChain", "Chainlit", "Llama 2", "NLP"],
    description: [
      "Built a medical chatbot utilizing a quantized Llama 2 model integrated with LangChain and Chainlit.",
      "Implemented natural language understanding to parse and comprehend user queries.",
      "Achieved 80% accuracy in responding to over 100 medical inquiries."
    ],
    link: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL"]
  },
  {
    title: "AI & ML",
    skills: ["Scikit-learn", "Tensorflow", "PyTorch", "Pandas", "NumPy", "Statistics", "NLP", "LLMs"]
  },
  {
    title: "Web & Frameworks",
    skills: ["Flask", "Streamlit", "Langchain", "Chainlit"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "MLFlow", "DVC", "MySQL", "Redis"]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "#", iconName: "Linkedin" },
  { platform: "GitHub", url: "#", iconName: "Github" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, iconName: "Mail" }
];
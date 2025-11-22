export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  mode: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string[];
  link?: string;
  date: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export type Section = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';
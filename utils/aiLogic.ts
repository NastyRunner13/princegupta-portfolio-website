import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from '../constants';

export const generateAIResponse = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return `Hello! I'm Prince's automated portfolio assistant. Ask me anything about his skills, experience, or projects.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return `You can reach Prince at ${PERSONAL_INFO.email}. Check the Contact.tsx file for more social links!`;
  }

  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    const skillList = SKILLS.flatMap(s => s.skills).slice(0, 5).join(', ');
    return `Prince is proficient in Python, AI & ML frameworks like TensorFlow & PyTorch, and tools like Docker. He knows: ${skillList} and more. Open skills.json to see the full list.`;
  }

  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('company')) {
    const current = EXPERIENCE[0];
    return `Prince is currently a ${current.role} at ${current.company} (${current.duration}). He's working on optimizing LLM applications. Previously, he interned at C-DAC.`;
  }

  if (q.includes('project') || q.includes('build') || q.includes('portfolio')) {
    return `One of his key projects is the "${PROJECTS[0].title}", where he enhanced system efficiency by 40% using caching. He also built a Kidney Disease Classification system. Check out the projects folder!`;
  }

  if (q.includes('who are you') || q.includes('who is prince')) {
    return PERSONAL_INFO.aboutStory;
  }

  return `I found some references to that in the codebase, but for a detailed answer, I recommend exploring the file explorer on the left. I'm specialized in Prince's professional background!`;
};
import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import { SignalOrb } from './3d/SceneElements';

export const Contact: React.FC = () => {
    
  const getIcon = (name: string) => {
      switch(name) {
          case 'Linkedin': return <Linkedin className="w-5 h-5" />;
          case 'Github': return <Github className="w-5 h-5" />;
          case 'Mail': return <Mail className="w-5 h-5" />;
          default: return <ExternalLink className="w-5 h-5" />;
      }
  }

  return (
    <section id="contact" className="py-12 px-6 relative overflow-hidden min-h-full flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        
        <div className="flex justify-center mb-6 scale-75">
            <SignalOrb />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Initialize Connection</h2>
        <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto font-mono text-sm">
            // Looking for opportunities in Data Science & AI. <br/>
            await contact.connect();
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 perspective-1000">
            <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group p-6 bg-dark-card border border-dark-border rounded-xl hover:border-primary-500/50 hover:bg-primary-900/5 transition-all flex flex-col items-center gap-3 hover:translate-z-10 preserve-3d hover:-translate-y-1"
            >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                    <Mail size={20} />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white mb-1">Email Me</h3>
                    <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.email}</p>
                </div>
            </a>

            <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-dark-card border border-dark-border rounded-xl hover:border-primary-500/50 hover:bg-primary-900/5 transition-all flex flex-col items-center gap-3 hover:translate-z-10 preserve-3d hover:-translate-y-1"
            >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                    <Linkedin size={20} />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white mb-1">LinkedIn</h3>
                    <p className="text-xs text-slate-400 font-mono">Connect professionally</p>
                </div>
            </a>
        </div>

        <div className="flex justify-center gap-6">
             {SOCIALS.map(social => (
                 <a 
                    key={social.platform} 
                    href={social.url} 
                    className="text-slate-500 hover:text-primary-400 transition-colors transform hover:-translate-y-1 hover:scale-110"
                    aria-label={social.platform}
                >
                     {getIcon(social.iconName)}
                 </a>
             ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-dark-border">
             <p className="text-slate-600 text-[10px] font-mono">© {new Date().getFullYear()} {PERSONAL_INFO.name}. git push origin main</p>
        </div>
      </div>

       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary-600/10 blur-[80px] rounded-full pointer-events-none"></div>
    </section>
  );
};
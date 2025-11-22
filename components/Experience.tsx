
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { DataPillar } from './3d/SceneElements';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="flex-1">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary-500 text-xl font-mono">03.</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Experience.tsx</span>
                </h2>
                <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
            </div>

            <div className="relative border-l border-dark-border ml-3 space-y-10">
                {EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="relative pl-8 group perspective-1000">
                        {/* Dot on timeline */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-dark-bg group-hover:ring-primary-900/30 transition-all shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                            <span className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1 sm:mt-0 bg-white/5 px-2 py-0.5 rounded">
                                <Calendar size={12} /> {exp.duration}
                            </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-400 font-mono">
                            <span className="flex items-center gap-1 font-semibold text-slate-300">
                                <Briefcase size={12} className="text-primary-500"/> {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin size={12} /> {exp.location} ({exp.mode})
                            </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary-500/20 transition-all backdrop-blur-sm">
                            <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-disc ml-4 marker:text-primary-500">
                                {exp.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 3D Sidebar Visual */}
        <div className="hidden md:flex flex-col items-center justify-start w-32 h-fit pt-20 opacity-50 hover:opacity-100 transition-opacity">
             <DataPillar />
        </div>

      </div>
    </section>
  );
};

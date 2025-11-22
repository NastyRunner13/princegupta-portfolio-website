
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <span className="text-primary-500 text-xl font-mono">04.</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Projects.tsx</span>
                </h2>
                <p className="text-slate-400 text-sm font-mono">// Applying AI innovations to solve real-world challenges.</p>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded border border-white/5">
                git checkout main
            </div>
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-2000">
            {PROJECTS.map((project, i) => (
                <div 
                    key={project.id} 
                    className="animate-fade-in-up" 
                    style={{ 
                        animationDelay: `${i * 0.15}s`,
                        animationFillMode: 'both'
                    }}
                >
                    <TiltCard className="h-full" perspective={1500}>
                        <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col group hover:border-primary-500/30 transition-colors transform preserve-3d bg-dark-panel">
                            
                            {/* 3D Floating Date Badge */}
                            <div className="absolute top-3 right-3 z-20 transform translate-z-10 group-hover:translate-z-20 transition-transform duration-300">
                                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-md text-[10px] font-mono text-primary-300 shadow-lg">
                                    {project.date}
                                </div>
                            </div>

                            {/* Abstract Header / Thumbnail */}
                            <div className="h-36 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden group-hover:from-slate-800 group-hover:to-primary-900/20 transition-colors duration-500 preserve-3d border-b border-white/5">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                
                                {/* Tech Icons Overlay (Abstract) */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent transform translate-z-10">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">{project.title}</h3>
                                </div>
                            </div>
                            
                            <div className="p-5 flex flex-col flex-grow relative preserve-3d">
                                <div className="flex flex-wrap gap-1.5 mb-4 transform translate-z-5">
                                    {project.techStack.slice(0, 4).map(tech => (
                                        <span key={tech} className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:border-primary-500/20 group-hover:text-primary-300 transition-colors font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-2 mb-6 flex-grow transform translate-z-2">
                                    {project.description.slice(0, 2).map((desc, i) => (
                                        <p key={i} className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{desc}</p>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between transform translate-z-5">
                                    <div className="flex gap-2">
                                        <a href={project.link} className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-md hover:scale-110">
                                            <Github size={16} />
                                        </a>
                                    </div>
                                    <a href={project.link} className="inline-flex items-center text-xs font-medium text-primary-400 hover:text-white transition-colors group/link">
                                        View Code <ArrowRight size={12} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Terminal, Cpu, Globe, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { TiltCard } from './TiltCard';
import { NeuralBlock } from './3d/SceneElements';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-6 relative max-w-7xl mx-auto min-h-full flex flex-col justify-center">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between border-b border-white/5 pb-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3 tracking-tight">
                   <span className="text-primary-500 font-mono text-xl">01.</span> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">About.tsx</span>
                </h2>
                <p className="text-slate-500 font-mono text-xs pl-11">// The story behind the code.</p>
            </div>
            {/* 3D Element positioned absolutely in desktop, hidden mobile */}
            <div className="hidden lg:block absolute top-0 right-0 opacity-40 scale-75 pointer-events-none">
                <NeuralBlock />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Code Editor Style Bio */}
            <div className="lg:col-span-7 relative">
                <TiltCard className="h-full" perspective={2000}>
                    <div className="h-full bg-[#09090b] border border-white/10 rounded-xl overflow-hidden relative shadow-2xl group">
                        
                        {/* Editor Window Header */}
                        <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">UserProfile.tsx</div>
                        </div>

                        <div className="p-6 md:p-8 flex gap-4 text-sm md:text-base font-mono leading-relaxed overflow-x-hidden">
                            {/* Line Numbers */}
                            <div className="flex flex-col text-right text-slate-700 select-none pr-4 border-r border-white/5 gap-0.5 text-xs md:text-sm">
                                {Array.from({length: 15}).map((_, i) => (
                                    <span key={i}>{i + 1}</span>
                                ))}
                            </div>

                            {/* Code Content */}
                            <div className="flex-1 text-slate-400">
                                <div>
                                    <span className="text-purple-400">class</span> <span className="text-yellow-300">Engineer</span> <span className="text-purple-400">extends</span> <span className="text-blue-300">Person</span> <span className="text-yellow-500">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-purple-400">constructor</span>() <span className="text-yellow-500">{'{'}</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-red-400">this</span>.name = <span className="text-green-400">"{PERSONAL_INFO.name}"</span>;
                                </div>
                                <div className="pl-8">
                                    <span className="text-red-400">this</span>.traits = [<span className="text-green-400">"Curious"</span>, <span className="text-green-400">"Analytical"</span>, <span className="text-green-400">"Driven"</span>];
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-500">{'}'}</span>
                                </div>
                                <br/>
                                <div className="pl-4">
                                    <span className="text-slate-500 italic">// {PERSONAL_INFO.aboutStory.split('.')[0]}.</span>
                                </div>
                                <div className="pl-4 text-slate-300">
                                    <span className="text-purple-400">async</span> <span className="text-blue-400">mission</span>() <span className="text-yellow-500">{'{'}</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-purple-400">return</span> <span className="text-green-400">"Building intelligent systems using LLMs & MLOps."</span>;
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-500">{'}'}</span>
                                </div>
                                <div className="text-yellow-500">{'}'}</div>
                                
                                <br />
                                <div className="bg-primary-900/10 border-l-2 border-primary-500 pl-3 py-2 my-2 text-xs md:text-sm font-sans text-slate-300 rounded-r">
                                    <p>
                                        I bridge the gap between complex AI research and scalable production systems. 
                                        Currently optimizing LLM efficiency at <span className="text-white font-semibold">Tata Communications</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-600/10 blur-[100px] rounded-full group-hover:bg-primary-600/20 transition-colors duration-500"></div>
                    </div>
                </TiltCard>
            </div>

            {/* Right Column: Stats & Highlights */}
            <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                     <TiltCard perspective={1000}>
                        <div className="bg-dark-card border border-white/5 p-5 rounded-xl group hover:border-primary-500/30 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={40} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors font-mono">3+</div>
                            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Years Coding</div>
                        </div>
                    </TiltCard>
                     <TiltCard perspective={1000}>
                        <div className="bg-dark-card border border-white/5 p-5 rounded-xl group hover:border-primary-500/30 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Cpu size={40} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors font-mono">5+</div>
                            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Major Projects</div>
                        </div>
                    </TiltCard>
                </div>

                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-300 font-mono flex items-center gap-2">
                        <Terminal size={14} className="text-primary-500"/> 
                        CURRENT_FOCUS
                    </h3>
                    <div className="bg-[#09090b] border border-white/5 rounded-xl p-4 space-y-3">
                        {[
                            { label: "Large Language Models", progress: "92%" },
                            { label: "Computer Vision", progress: "85%" },
                            { label: "MLOps Pipelines", progress: "88%" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-1.5 group cursor-default">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400 group-hover:text-white transition-colors">{item.label}</span>
                                    <span className="text-primary-500 font-mono">{item.progress}</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transform origin-left scale-x-0 animate-slide-in-right"
                                        style={{ width: item.progress, animationDelay: `${i * 0.2}s`, animationFillMode: 'forwards' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location / Availability */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-900/10 to-transparent border border-white/5">
                    <div className="p-3 rounded-full bg-primary-500/10 text-primary-400">
                        <Globe size={20} />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">Based in India</div>
                        <div className="text-xs text-slate-500 font-mono">Open to Remote Opportunities</div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

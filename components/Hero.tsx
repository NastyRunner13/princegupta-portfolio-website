import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { TiltCard } from './TiltCard';
import { AtomModel } from './3d/SceneElements';
import { Section } from '../types';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-full flex flex-col items-center justify-center py-12 lg:py-20 px-6 perspective-2000">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-start animate-fade-in-up order-2 lg:order-1">
          {/* Pre-heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary-500 to-transparent"></div>
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">const developer =</span>
          </div>

          {/* Main Headings with text shadow/glow */}
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-6 leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-8 leading-tight">
            <span className="text-primary-500">{PERSONAL_INFO.tagline.split('|')[0]}</span>
            <br />
            <span className="text-xl md:text-3xl opacity-80">{PERSONAL_INFO.tagline.split('|')[1]}</span>
          </h2>

          {/* Description */}
          <p className="text-base text-slate-400 mb-10 max-w-xl leading-relaxed border-l-2 border-primary-500/30 pl-6 font-mono">
            // {PERSONAL_INFO.aboutHeadline}
          </p>

          {/* 3D Buttons */}
          <div className="flex flex-wrap gap-5 perspective-1000">
            <button 
              onClick={() => onNavigate('projects')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl transition-all hover:translate-z-10 hover:-translate-y-1 shadow-[0_10px_20px_rgba(14,165,233,0.3),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-dark-card border border-white/10 text-slate-300 font-medium rounded-xl transition-all hover:text-white hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:-translate-y-1"
            >
              Resume
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3D Hero Visual */}
        <div className="relative order-1 lg:order-2 h-[300px] lg:h-[500px] flex items-center justify-center perspective-1000">
            
            {/* The Atom 3D Model in Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 opacity-80 pointer-events-none">
                <AtomModel />
            </div>

            {/* Abstract Stacked Cards / Code Window */}
            <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] animate-float z-10">
                
                {/* Middle Layer */}
                <div className="absolute inset-0 translate-x-5 translate-y-5 bg-dark-card/80 border border-white/10 rounded-2xl backdrop-blur-md transform -rotate-3 scale-95 shadow-2xl z-10 flex items-center justify-center group">
                   <div className="text-primary-900/20 font-mono text-8xl font-bold select-none group-hover:text-primary-500/20 transition-colors">AI</div>
                </div>

                {/* Front Interactive Layer */}
                <TiltCard className="absolute inset-0 bg-gradient-to-br from-dark-card to-black border border-primary-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 p-6 flex flex-col justify-between group">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                        </div>
                        <div className="text-xs font-mono text-slate-500">agent.py</div>
                    </div>
                    <div className="space-y-3 font-mono text-xs md:text-sm opacity-80">
                        <div className="flex">
                            <span className="text-primary-400 mr-2">def</span>
                            <span className="text-yellow-200">optimize_inference</span>(model):
                        </div>
                        <div className="pl-4 text-slate-400">
                            <span className="text-purple-400">async</span> with caching:
                        </div>
                        <div className="pl-8 text-slate-400">
                            latency = <span className="text-primary-400">await</span> model.reduce_load()
                        </div>
                        <div className="pl-8 text-slate-400">
                            <span className="text-primary-400">return</span> {"{"} efficiency: <span className="text-green-400">"35%"</span> {"}"}
                        </div>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                         <span>Processing...</span>
                         <span className="text-green-400">Done</span>
                    </div>
                </TiltCard>
            </div>
        </div>

      </div>
    </section>
  );
};
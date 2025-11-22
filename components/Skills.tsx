
import React from 'react';
import { SKILLS } from '../constants';
import { TiltCard } from './TiltCard';
import { TechOrbit } from './3d/SceneElements';
import { Braces, Hash, LayoutTemplate, Database } from 'lucide-react';

export const Skills: React.FC = () => {
  
  const getIcon = (index: number) => {
      if (index === 0) return <Hash size={16} className="text-blue-400" />;
      if (index === 1) return <Braces size={16} className="text-purple-400" />;
      if (index === 2) return <LayoutTemplate size={16} className="text-yellow-400" />;
      return <Database size={16} className="text-green-400" />;
  };

  const getBorderColor = (index: number) => {
      if (index === 0) return "group-hover:border-blue-500/30";
      if (index === 1) return "group-hover:border-purple-500/30";
      if (index === 2) return "group-hover:border-yellow-500/30";
      return "group-hover:border-green-500/30";
  };

  return (
    <section id="skills" className="py-12 px-6 relative min-h-full flex flex-col justify-center">
      {/* Background 3D Orbit - Positioned to not interfere with reading */}
      <div className="absolute bottom-[-10%] left-[-5%] z-0 opacity-30 scale-75 pointer-events-none">
          <TechOrbit />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3 tracking-tight">
                <span className="text-primary-500 text-xl font-mono">02.</span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Skills.tsx</span>
            </h2>
            <p className="text-slate-500 font-mono text-xs pl-11">
                // Technical proficiency & toolset configuration.
            </p>
        </div>

        {/* JSON Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-2000">
            {SKILLS.map((category, index) => (
                <TiltCard key={category.title} className="h-full" perspective={1500}>
                    <div className={`h-full bg-[#09090b] border border-white/5 p-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${getBorderColor(index)} hover:shadow-2xl`}>
                        
                        {/* Decorative Background Grid */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            {getIcon(index)}
                        </div>

                        {/* Header / Key */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {getIcon(index)}
                            </div>
                            <h3 className="text-sm font-mono font-bold text-slate-200 group-hover:text-white transition-colors">
                                <span className="text-purple-400">"</span>{category.title}<span className="text-purple-400">"</span>:
                            </h3>
                        </div>
                        
                        {/* Value / Array */}
                        <div className="font-mono text-xs md:text-sm pl-2 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                            <span className="text-yellow-500"> [</span>
                            <div className="flex flex-wrap gap-2 py-3 pl-3">
                                {category.skills.map((skill, i) => (
                                    <div 
                                        key={skill} 
                                        className="relative group/tag"
                                    >
                                        <span className="text-green-400 hover:text-green-300 transition-colors cursor-default">
                                            "{skill}"
                                        </span>
                                        {i < category.skills.length - 1 && <span className="text-slate-500">,</span>}
                                        
                                        {/* Tooltip Glow on Hover */}
                                        <div className="absolute inset-0 bg-green-400/10 blur-lg rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                            <span className="text-yellow-500">]</span>{index < SKILLS.length - 1 && <span className="text-slate-500">,</span>}
                        </div>

                    </div>
                </TiltCard>
            ))}
        </div>
        
        {/* Closing Brace */}
        <div className="mt-8 text-2xl text-yellow-500 font-mono opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {'}'}
        </div>

      </div>
    </section>
  );
};

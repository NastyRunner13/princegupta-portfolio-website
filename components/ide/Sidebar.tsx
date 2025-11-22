
import React, { useState } from 'react';
import { FolderOpen, FileCode, ChevronRight, ChevronDown, Settings, Search, GitBranch, User, X } from 'lucide-react';
import { Section } from '../../types';

interface SidebarProps {
  activeSection: Section;
  onSelect: (section: Section) => void;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelect, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeActivity, setActiveActivity] = useState('explorer');

  const files = [
    { id: 'home', name: 'Home.tsx', icon: <FileCode size={14} className="text-blue-400" />, section: 'home' as Section },
    { id: 'about', name: 'About.tsx', icon: <FileCode size={14} className="text-yellow-400" />, section: 'about' as Section },
    { id: 'skills', name: 'Skills.tsx', icon: <FileCode size={14} className="text-green-400" />, section: 'skills' as Section },
    { id: 'experience', name: 'Experience.tsx', icon: <FileCode size={14} className="text-blue-400" />, section: 'experience' as Section },
    { id: 'projects', name: 'Projects.tsx', icon: <FileCode size={14} className="text-purple-400" />, section: 'projects' as Section },
    { id: 'contact', name: 'Contact.tsx', icon: <FileCode size={14} className="text-slate-400" />, section: 'contact' as Section },
  ];

  return (
    <div className="flex h-full relative z-20 shadow-2xl bg-dark-card">
      
      {/* Activity Bar (Far Left Strip) */}
      <div className="w-12 bg-[#18181b] border-r border-white/[0.06] flex flex-col items-center py-3 gap-6 flex-shrink-0">
          <div 
            className={`p-2.5 rounded-md cursor-pointer transition-all duration-300 ${activeActivity === 'explorer' ? 'text-slate-100 border-l-2 border-primary-500 bg-white/5' : 'text-slate-500 hover:text-slate-300'}`}
            onClick={() => setActiveActivity('explorer')}
            title="Explorer"
          >
              <FolderOpen size={20} strokeWidth={1.5} />
          </div>
          <div className="p-2.5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" title="Search">
              <Search size={20} strokeWidth={1.5} />
          </div>
          <div className="p-2.5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" title="Source Control">
              <GitBranch size={20} strokeWidth={1.5} />
          </div>
          
          <div className="mt-auto flex flex-col gap-6 mb-2">
              <div className="p-2.5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" title="Account">
                  <User size={20} strokeWidth={1.5} />
              </div>
              <div className="p-2.5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" title="Manage">
                  <Settings size={20} strokeWidth={1.5} />
              </div>
          </div>
      </div>

      {/* File Tree Content */}
      {activeActivity === 'explorer' && (
        <div className="w-60 bg-dark-card border-r border-white/[0.06] flex flex-col animate-slide-in-right">
            <div className="h-9 flex items-center justify-between px-5 text-[10px] font-bold text-slate-400 tracking-widest border-b border-white/[0.06] bg-dark-card">
                <span>EXPLORER</span>
                <button 
                    className="cursor-pointer hover:text-white transition-colors bg-transparent border-none p-0 flex" 
                    onClick={onClose} 
                    title="Close Sidebar"
                >
                    <X size={14} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3">
                <div 
                    className="flex items-center gap-1 px-3 py-1 text-slate-300 cursor-pointer hover:bg-white/[0.04] transition-colors font-semibold text-xs"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span className="uppercase tracking-wide">Portfolio_v2</span>
                </div>

                {isOpen && (
                <div className="mt-1 flex flex-col gap-0.5">
                    {/* Folders */}
                    <div className="flex items-center gap-2 px-6 py-1 text-slate-500 hover:text-slate-300 cursor-pointer group transition-colors">
                        <ChevronRight size={12} className="group-hover:text-slate-300"/>
                        <FolderOpen size={14} className="text-primary-500/80" />
                        <span className="text-xs group-hover:text-slate-200">src</span>
                    </div>
                    <div className="flex items-center gap-2 px-9 py-1 text-slate-500 hover:text-slate-300 cursor-pointer group transition-colors">
                        <ChevronRight size={12} className="group-hover:text-slate-300"/>
                        <FolderOpen size={14} className="text-orange-400/80" />
                        <span className="text-xs group-hover:text-slate-200">components</span>
                    </div>
                    
                    {/* Files */}
                    <div className="mt-1">
                        {files.map((file) => (
                        <div
                            key={file.id}
                            onClick={() => onSelect(file.section)}
                            className={`flex items-center gap-2.5 px-9 py-1.5 cursor-pointer border-l-2 transition-all duration-200 ${
                            activeSection === file.section 
                                ? 'bg-primary-500/10 border-primary-500 text-white' 
                                : 'border-transparent text-slate-500 hover:bg-white/[0.04] hover:text-slate-300'
                            }`}
                        >
                            {file.icon}
                            <span className="text-xs font-mono">{file.name}</span>
                        </div>
                        ))}
                    </div>
                </div>
                )}
            </div>
            
            {/* Sidebar Footer */}
            <div className="p-0">
                 <div className="px-4 py-2 text-[10px] font-bold text-slate-500 border-t border-white/[0.06]">TIMELINE</div>
                 <div className="px-4 py-2 text-[10px] font-bold text-slate-500 border-t border-white/[0.06]">OUTLINE</div>
            </div>
        </div>
      )}
    </div>
  );
};

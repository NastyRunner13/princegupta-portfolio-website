
import React, { useState, useEffect, useRef } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Sidebar } from './components/ide/Sidebar';
import { ChatPanel } from './components/ide/ChatPanel';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Section } from './types';
import { X, Maximize2, Minus, Search, FileCode, Command, PanelLeft, PanelRight } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Responsive States
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const cmdInputRef = useRef<HTMLInputElement>(null);

  // Initialize Responsive State
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 1024;
      setIsMobile(mobile);
      
      // Only force state on initial load or drastic change to avoid overriding user preference during minor resizes
      // But for simplicity in this portfolio, we reset on breakpoint cross
      if (mobile) {
        setIsSidebarOpen(false);
        setIsChatOpen(false);
      } else {
        setIsSidebarOpen(true);
        setIsChatOpen(true);
      }
    };
    
    // Set initial
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        if (isMobile) {
            setIsSidebarOpen(false);
            setIsChatOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile]);

  // Focus input when CMD palette opens
  useEffect(() => {
    if (isCmdOpen && cmdInputRef.current) {
      setTimeout(() => cmdInputRef.current?.focus(), 50);
    }
    if (!isCmdOpen) {
        setSearchQuery('');
    }
  }, [isCmdOpen]);

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return <Hero onNavigate={setActiveSection} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={setActiveSection} />;
    }
  };

  const getFileName = (section: Section) => {
    const map: Record<Section, string> = {
        home: 'Home.tsx',
        about: 'About.tsx',
        skills: 'Skills.tsx',
        experience: 'Experience.tsx',
        projects: 'Projects.tsx',
        contact: 'Contact.tsx'
    };
    return map[section];
  };

  const fileList = [
    { name: 'Home.tsx', section: 'home', icon: <FileCode size={14} className="text-blue-400" /> },
    { name: 'About.tsx', section: 'about', icon: <FileCode size={14} className="text-yellow-400" /> },
    { name: 'Skills.tsx', section: 'skills', icon: <FileCode size={14} className="text-green-400" /> },
    { name: 'Experience.tsx', section: 'experience', icon: <FileCode size={14} className="text-blue-400" /> },
    { name: 'Projects.tsx', section: 'projects', icon: <FileCode size={14} className="text-purple-400" /> },
    { name: 'Contact.tsx', section: 'contact', icon: <FileCode size={14} className="text-slate-400" /> },
  ];

  const filteredFiles = fileList.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSectionSelect = (section: Section) => {
      setActiveSection(section);
      if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-dark-bg text-slate-400 overflow-hidden font-sans selection:bg-primary-500/20">
      
      {/* Command Palette Overlay */}
      {isCmdOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex justify-center pt-[10vh]" onClick={() => setIsCmdOpen(false)}>
            <div className="w-[600px] max-w-[90%] bg-[#1e1e1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[50vh] animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <div className="flex items-center px-4 py-3 border-b border-white/5 gap-3">
                    <Search size={16} className="text-slate-500" />
                    <input 
                        ref={cmdInputRef}
                        type="text" 
                        placeholder="Search files..." 
                        className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-slate-600 font-mono"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-slate-500">ESC</span>
                </div>
                <div className="overflow-y-auto py-2">
                    {filteredFiles.length > 0 ? (
                        filteredFiles.map((file, idx) => (
                            <div 
                                key={file.section} 
                                className={`px-4 py-2 flex items-center gap-3 hover:bg-primary-500/20 cursor-pointer group ${idx === 0 ? 'bg-white/5' : ''}`}
                                onClick={() => {
                                    setActiveSection(file.section as Section);
                                    setIsCmdOpen(false);
                                }}
                            >
                                {file.icon}
                                <span className="text-sm text-slate-300 group-hover:text-white">{file.name}</span>
                                <span className="ml-auto text-[10px] text-slate-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Go to section</span>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-8 text-center text-xs text-slate-600">No matching files found.</div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* IDE Top Bar */}
      <div className="h-12 md:h-10 bg-dark-card border-b border-white/[0.06] flex items-center justify-between px-4 select-none z-50 flex-shrink-0">
        <div className="flex items-center gap-3">
           
           {/* Sidebar Toggle (Works on Mobile & Desktop) */}
           <button 
             className={`text-slate-400 hover:text-white p-1 rounded transition-colors ${isSidebarOpen ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             title="Toggle Sidebar (Cmd+B)"
           >
             <PanelLeft size={18} />
           </button>

           <div className="hidden sm:flex gap-2 group ml-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-80 transition-opacity cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-80 transition-opacity cursor-pointer"></div>
           </div>
        </div>
        
        {/* Search Trigger */}
        <div 
            className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-black/20 border border-white/5 text-xs text-slate-500 font-mono w-[200px] md:w-[400px] justify-between hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer group mx-2"
            onClick={() => setIsCmdOpen(true)}
        >
            <div className="flex items-center gap-2 group-hover:text-slate-300 truncate">
                <Search size={12} />
                <span>Search...</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-[10px]">
                <Command size={10} />
                <span>P</span>
            </div>
        </div>

        <div className="flex items-center gap-3">
             {/* Chat Toggle (Works on Mobile & Desktop) */}
             <button 
                className={`text-slate-400 hover:text-white p-1 rounded transition-colors relative ${isChatOpen ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                onClick={() => setIsChatOpen(!isChatOpen)}
                title="Toggle AI Assistant"
             >
                <PanelRight size={18} />
                {!isChatOpen && <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-dark-card"></div>}
             </button>

             <div className="hidden md:flex items-center gap-4 text-slate-600 ml-2">
                <Minus size={14} className="hover:text-white cursor-pointer transition-colors"/>
                <Maximize2 size={12} className="hover:text-white cursor-pointer transition-colors"/>
                <X size={14} className="hover:text-red-400 cursor-pointer transition-colors"/>
             </div>
        </div>
      </div>

      {/* Main IDE Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Background Effects confined to this area */}
        <BackgroundGrid />

        {/* Mobile Backdrop */}
        {isMobile && (isSidebarOpen || isChatOpen) && (
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                onClick={() => {
                    setIsSidebarOpen(false);
                    setIsChatOpen(false);
                }}
            />
        )}

        {/* Left Sidebar */}
        <div className={`
            absolute lg:relative z-50 h-full transition-all duration-300 ease-in-out flex-shrink-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden'}
        `}>
            <div className="h-full flex bg-dark-card w-auto">
                <Sidebar 
                    activeSection={activeSection} 
                    onSelect={handleSectionSelect} 
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>
        </div>

        {/* Center Content Area */}
        <div className="flex-1 flex flex-col min-w-0 relative z-10 bg-dark-bg/50 backdrop-blur-sm transition-all">
            {/* Tab Bar */}
            <div className="h-9 bg-dark-card border-b border-white/[0.06] flex items-center overflow-x-auto no-scrollbar flex-shrink-0">
                <div className="flex items-center gap-2 px-4 py-2 bg-dark-bg/80 border-t-[2px] border-primary-500 text-xs text-slate-200 font-medium min-w-[140px] border-r border-white/[0.06] relative group cursor-pointer">
                    <span className={`
                        ${activeSection === 'skills' ? 'text-green-400' : 
                          activeSection === 'about' ? 'text-yellow-400' : 
                          activeSection === 'projects' ? 'text-purple-400' : 
                          activeSection === 'contact' ? 'text-slate-400' :
                          'text-blue-400'}
                    `}>
                        TSX
                    </span>
                    {getFileName(activeSection)}
                    <X size={12} className="ml-auto opacity-0 group-hover:opacity-100 hover:text-white cursor-pointer transition-all" />
                </div>
            </div>

            {/* Breadcrumbs / Path */}
            <div className="h-8 hidden md:flex items-center px-4 border-b border-white/[0.06] text-[10px] text-slate-500 gap-2 font-mono bg-dark-card/50 flex-shrink-0">
                <span className="hover:underline cursor-pointer">src</span>
                <span className="text-slate-700">/</span>
                <span className="hover:underline cursor-pointer">pages</span>
                <span className="text-slate-700">/</span>
                <span className="text-slate-300 font-medium">{getFileName(activeSection)}</span>
                <div className="ml-auto flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        Ln 42, Col 12
                    </span>
                </div>
            </div>

            {/* Rendered View (The "Website") */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scroll-smooth relative p-0 bg-[#050505]">
                <div className="min-h-full w-full relative">
                    {renderContent()}
                </div>
            </div>
        </div>

        {/* Right Chat Sidebar */}
        <div className={`
            absolute lg:relative right-0 z-50 h-full transition-all duration-300 ease-in-out flex-shrink-0
            ${isChatOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden'}
        `}>
             <div className="h-full flex bg-dark-card w-auto">
                <ChatPanel onClose={() => setIsChatOpen(false)} />
             </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-primary-700 flex items-center justify-between px-3 text-[10px] text-white font-medium select-none z-50 flex-shrink-0 border-t border-primary-600/50">
          <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                <span className="font-bold">main*</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 opacity-70 hover:opacity-100 cursor-pointer">
                <span>0 errors</span>
                <span>0 warnings</span>
              </div>
          </div>
          <div className="flex items-center gap-4 opacity-90">
              <span className="hover:text-white cursor-pointer transition-colors hidden sm:inline">UTF-8</span>
              <span className="hover:text-white cursor-pointer transition-colors">TypeScript React</span>
              <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Prettier
              </span>
          </div>
      </div>
    </div>
  );
};

export default App;

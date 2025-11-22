
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, MoreHorizontal, X, Loader2 } from 'lucide-react';
import { ChatMessage } from '../../types';
import { generateAIResponse } from '../../utils/aiLogic';

interface ChatPanelProps {
    onClose?: () => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      text: 'Hello! I\'m the portfolio agent. I have access to Prince\'s resume and project details. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Processing Delay
    setTimeout(() => {
      const responseText = generateAIResponse(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-[320px] bg-dark-card border-l border-white/[0.06] flex flex-col h-full flex-shrink-0 relative z-30 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
      {/* Header */}
      <div className="h-9 flex items-center justify-between px-4 text-xs font-medium text-slate-400 border-b border-white/[0.06] bg-dark-card">
        <span className="flex items-center gap-2 text-slate-200 tracking-wide">
            <Sparkles size={12} className="text-primary-400" />
            AI ASSISTANT
        </span>
        <div className="flex items-center gap-3">
             <div className="hidden sm:flex gap-1.5 items-center bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></div>
                <span className="text-[9px] text-green-400 font-mono uppercase tracking-wider">Online</span>
            </div>
            <MoreHorizontal size={14} className="cursor-pointer hover:text-white transition-colors hidden sm:block"/>
            <button 
                className="cursor-pointer hover:text-white transition-colors bg-transparent border-none p-0 flex" 
                onClick={onClose}
                title="Close Chat"
            >
                <X size={16} />
            </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin bg-[#0c0c0e]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-slide-in-right`}>
            
            {/* Avatar */}
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                msg.role === 'assistant' 
                ? 'bg-primary-500/10 border-primary-500/20 text-primary-400' 
                : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
               {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
            </div>

            {/* Bubble */}
            <div className={`text-xs leading-relaxed p-3 rounded-2xl max-w-[85%] shadow-sm backdrop-blur-sm ${
                msg.role === 'assistant' 
                ? 'bg-[#1c1c1f] text-slate-300 border border-white/5 rounded-tl-none' 
                : 'bg-primary-600 text-white border border-primary-500 rounded-tr-none'
            }`}>
               {msg.text}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
           <div className="flex gap-3 animate-fade-in-up">
             <div className="w-7 h-7 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary-400">
               <Bot size={14} />
             </div>
             <div className="bg-[#1c1c1f] border border-white/5 rounded-2xl rounded-tl-none p-3 flex items-center gap-1.5 min-w-[60px]">
               <span className="w-1 h-1 bg-primary-400/50 rounded-full animate-typing" style={{ animationDelay: '0s' }}></span>
               <span className="w-1 h-1 bg-primary-400/50 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></span>
               <span className="w-1 h-1 bg-primary-400/50 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-white/[0.06] bg-dark-card">
        <form onSubmit={handleSend} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about experience..."
            className="relative w-full bg-[#18181b] border border-white/10 rounded-lg pl-3 pr-10 py-3 text-xs text-white focus:outline-none focus:border-primary-500/40 focus:bg-[#202024] transition-all placeholder:text-slate-600 font-mono"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary-400 transition-colors p-1.5 hover:bg-white/5 rounded-md"
            disabled={!input.trim() || isTyping}
          >
            {isTyping ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
          </button>
        </form>
        <div className="flex justify-between items-center mt-2 px-1">
            <div className="text-[9px] text-slate-600 font-mono flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                Resume.pdf
            </div>
            <div className="text-[9px] text-slate-700 font-mono">v2.4.0</div>
        </div>
      </div>
    </div>
  );
};

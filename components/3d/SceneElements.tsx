import React, { useRef, useState, useEffect } from 'react';

// Helper to track mouse for parallax
const useMouseParallax = (strength: number = 10) => {
    const [style, setStyle] = useState({});
    
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / width;
        const y = (clientY - top - height / 2) / height;
        
        setStyle({
            transform: `rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`
        });
    };

    const handleMouseLeave = () => {
        setStyle({ transform: 'rotateY(0deg) rotateX(0deg)' });
    };

    return { style, handleMouseMove, handleMouseLeave };
};

export const AtomModel: React.FC = () => {
    const { style, handleMouseMove, handleMouseLeave } = useMouseParallax(20);

    return (
        <div 
            className="w-64 h-64 relative perspective-1000 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
             <div className="w-full h-full relative preserve-3d transition-transform duration-200 ease-out" style={style}>
                {/* Nucleus Cube */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 preserve-3d animate-spin-slow">
                    <div className="cube">
                        <div className="cube-face cube-face-front bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                        <div className="cube-face cube-face-back bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                        <div className="cube-face cube-face-right bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                        <div className="cube-face cube-face-left bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                        <div className="cube-face cube-face-top bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                        <div className="cube-face cube-face-bottom bg-primary-500/30 border-primary-400/50" style={{ '--tz': '32px' } as any}></div>
                    </div>
                </div>

                {/* Electron Rings */}
                <div className="absolute inset-0 border border-primary-500/30 rounded-full animate-spin-slower" style={{ transform: 'rotateX(70deg) rotateY(10deg)' }}></div>
                <div className="absolute inset-0 border border-primary-400/30 rounded-full animate-spin-reverse" style={{ transform: 'rotateX(70deg) rotateY(60deg)' }}></div>
                <div className="absolute inset-0 border border-white/20 rounded-full animate-spin-slow" style={{ transform: 'rotateX(70deg) rotateY(-60deg)' }}></div>
                
                {/* Electrons */}
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white] animate-spin-slow origin-center" style={{ transformOrigin: '50% 128px' }}></div>
             </div>
        </div>
    );
};

export const NeuralBlock: React.FC = () => {
    const { style, handleMouseMove, handleMouseLeave } = useMouseParallax(15);

    return (
        <div 
            className="w-48 h-48 relative perspective-1000 group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
             <div className="w-full h-full relative preserve-3d transition-transform duration-300 ease-out animate-float" style={style}>
                {/* Grid of small cubes */}
                {[...Array(8)].map((_, i) => {
                     const x = (i % 2) * 40 - 20;
                     const y = Math.floor(i / 2) * 40 - 20;
                     const z = (i % 3) * 30 - 30;
                     return (
                        <div key={i} className="absolute top-1/2 left-1/2 w-8 h-8 preserve-3d transition-all duration-500 group-hover:scale-125" 
                             style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}>
                             <div className="cube animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="cube-face cube-face-front border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                                <div className="cube-face cube-face-back border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                                <div className="cube-face cube-face-right border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                                <div className="cube-face cube-face-left border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                                <div className="cube-face cube-face-top border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                                <div className="cube-face cube-face-bottom border-white/10 bg-white/5" style={{ '--tz': '16px' } as any}></div>
                            </div>
                        </div>
                     )
                })}
             </div>
        </div>
    );
};

export const TechOrbit: React.FC = () => {
    return (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
             <div className="w-[600px] h-[600px] border border-primary-900/30 rounded-full absolute animate-spin-slow opacity-20" style={{ transform: 'rotateX(60deg)' }}></div>
             <div className="w-[400px] h-[400px] border border-primary-500/20 rounded-full absolute animate-spin-reverse opacity-30" style={{ transform: 'rotateY(60deg)' }}></div>
             <div className="w-[200px] h-[200px] border border-white/10 rounded-full absolute animate-pulse-slow opacity-40"></div>
        </div>
    )
}

export const DataPillar: React.FC = () => {
    const { style, handleMouseMove, handleMouseLeave } = useMouseParallax(10);

    return (
        <div className="h-[300px] w-20 perspective-1000 relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
             <div className="w-full h-full preserve-3d flex flex-col justify-between transition-transform duration-200" style={style}>
                 {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-20 h-20 preserve-3d relative hover:scale-110 transition-transform duration-300 group">
                         <div className="absolute inset-0 border-2 border-primary-500/20 bg-primary-900/10 rounded-lg transform rotate-x-12 rotate-y-12 group-hover:border-primary-400/60 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all"></div>
                         <div className="absolute inset-0 border border-white/5 translate-z-4 transform translate-x-2 -translate-y-2 rounded-lg"></div>
                     </div>
                 ))}
                 <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent -translate-x-1/2 -z-10 blur-[2px]"></div>
             </div>
        </div>
    )
}

export const SignalOrb: React.FC = () => {
    return (
        <div className="relative w-32 h-32 flex items-center justify-center perspective-1000">
            <div className="w-full h-full absolute animate-spin-slow preserve-3d">
                <div className="absolute inset-0 rounded-full border border-primary-400/30" style={{ transform: 'rotateX(0deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-primary-400/30" style={{ transform: 'rotateX(45deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-primary-400/30" style={{ transform: 'rotateX(90deg)' }}></div>
                <div className="absolute inset-0 rounded-full border border-primary-400/30" style={{ transform: 'rotateX(135deg)' }}></div>
            </div>
            <div className="w-8 h-8 bg-primary-500 rounded-full blur-[10px] animate-pulse"></div>
            <div className="absolute w-full h-full rounded-full bg-primary-500/5 animate-ping"></div>
        </div>
    )
}
import React from 'react';

// Simple CSS-only 3D Cube Component
const FloatingCube: React.FC<{ size: number; x: string; y: string; delay: string; duration: string; color?: string }> = ({ size, x, y, delay, duration, color = "border-primary-500/20" }) => {
  const halfSize = size / 2;
  const style = { '--tz': `${halfSize}px` } as React.CSSProperties;
  
  return (
    <div 
        className="absolute z-0"
        style={{ 
            left: x, 
            top: y, 
            width: size, 
            height: size,
            animation: `float ${duration} ease-in-out ${delay} infinite alternate`
        }}
    >
        <div className="cube animate-spin-slow">
            <div className="cube-face cube-face-front" style={style}></div>
            <div className="cube-face cube-face-back" style={style}></div>
            <div className="cube-face cube-face-right" style={style}></div>
            <div className="cube-face cube-face-left" style={style}></div>
            <div className="cube-face cube-face-top" style={style}></div>
            <div className="cube-face cube-face-bottom" style={style}></div>
        </div>
    </div>
  );
};

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-bg">
      {/* Radial Gradient Light Source */}
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-primary-900/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[100px] opacity-20" />
      
      {/* Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
            maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 90%, transparent)'
        }}
      />

      {/* Floating 3D Cubes */}
      <FloatingCube size={60} x="10%" y="20%" delay="0s" duration="8s" />
      <FloatingCube size={40} x="85%" y="15%" delay="1s" duration="6s" />
      <FloatingCube size={80} x="75%" y="60%" delay="2s" duration="10s" />
      <FloatingCube size={30} x="15%" y="70%" delay="3s" duration="7s" />
      
      {/* Background Noise Texture for grit */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
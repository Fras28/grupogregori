// components/effects/RollerBlind.tsx
import { useState, useEffect } from 'react';
import Logo from "../../assets/GregoriLogo.webp";


interface RollerBlindProps {
  isOpen: boolean;
  direction?: 'up' | 'down';
}

const RollerBlind = ({ isOpen, direction = 'up' }: RollerBlindProps): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setProgress(100), 50);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isOpen]);

  const transform = direction === 'up' 
    ? `translateY(-${progress}%)`
    : `translateY(${progress}%)`;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Main blind curtain */}
      <div
        className="absolute inset-0 bg-[#0a0a0a] transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform }}
      >
        {/* Horizontal slats pattern */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                #0a0a0a,
                #0a0a0a 20px,
                #141414 20px,
                #141414 22px
              )
            `,
          }}
        ></div>

        {/* Shadow gradient for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
          }}
        ></div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center transition-all duration-500 ${progress > 20 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="w-32 h-32 border-2 border-[#E30613] flex items-center justify-center mb-6 mx-auto relative">
              <div className="absolute inset-2 border border-[#E30613]/30"></div>
             <img src={Logo} alt="Grupo Gregori Logo" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">
              Grupo Gregori
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#E30613]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                Industrial
              </span>
              <div className="h-px w-12 bg-[#E30613]"></div>
            </div>
          </div>
        </div>

        {/* Bottom roller bar */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-[#E30613]/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#E30613]"></div>
        </div>
      </div>

      {/* Shadow that remains */}
      <div 
        className={`absolute left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-500 ${
          progress > 90 ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ top: 0 }}
      ></div>
    </div>
  );
};

export default RollerBlind;
// components/effects/BlindSlats.tsx
import { useState, useEffect } from 'react';

interface BlindSlatsProps {
  isOpen: boolean;
  duration?: number;
}

const BlindSlats = ({ 
  isOpen, 
  duration = 1800 
}: BlindSlatsProps): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setProgress(100);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isOpen]);

  // La persiana empieza en 90% y se reduce a 0%
  const blindHeight = 100 * (1 - progress / 100);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* La persiana enrollable - SOLO la parte superior */}
      <div
        className="absolute left-0 right-0 transition-all ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          top: 0,
          height: `${blindHeight}%`,
          transitionDuration: `${duration}ms`,
        }}
      >
        {/* CAPA 1: Base de lona */}
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>

        {/* CAPA 2: Microperforación */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0,0,0,0.9) 0.5px, transparent 0.5px),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.9) 0.5px, transparent 0.5px),
              radial-gradient(circle at 40% 80%, rgba(0,0,0,0.8) 0.5px, transparent 0.5px),
              radial-gradient(circle at 80% 20%, rgba(0,0,0,0.8) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '8px 8px, 12px 12px, 10px 10px, 6px 6px',
          }}
        ></div>

        {/* CAPA 3: Láminas horizontales con relieve */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 16px,
                rgba(0,0,0,0.6) 16px,
                rgba(0,0,0,0.8) 18px,
                rgba(20,20,20,0.4) 18px,
                rgba(20,20,20,0.4) 20px,
                transparent 20px,
                transparent 36px
              )
            `,
          }}
        ></div>

        {/* CAPA 4: Textura de tela/lona */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.02) 2px,
                rgba(255,255,255,0.02) 4px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 4px
              )
            `,
          }}
        ></div>

        {/* CAPA 5: Sombra de curvatura */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(0,0,0,0.7) 0%,
                rgba(0,0,0,0.2) 15%,
                rgba(255,255,255,0.03) 35%,
                rgba(255,255,255,0.05) 50%,
                rgba(255,255,255,0.03) 65%,
                rgba(0,0,0,0.2) 85%,
                rgba(0,0,0,0.7) 100%
              )
            `,
          }}
        ></div>

        {/* CAPA 6: Sombra superior */}
        <div 
          className="absolute top-0 left-0 right-0 h-24"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
          }}
        ></div>

        {/* CAPA 7: Sombra inferior de cada lámina */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 34px,
                rgba(0,0,0,0.5) 34px,
                rgba(0,0,0,0.5) 36px
              )
            `,
          }}
        ></div>

        {/* CAPA 8: Líneas de tensión vertical */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent 0%,
                transparent 10%,
                rgba(0,0,0,0.3) 10%,
                rgba(0,0,0,0.3) 10.5%,
                transparent 10.5%,
                transparent 20%
              )
            `,
          }}
        ></div>

        {/* Marco/perímetro */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1a1a1a]"></div>
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-r from-[#1a1a1a] to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-l from-[#1a1a1a] to-transparent"></div>

        {/* Líneas de acento rojo */}
        <div className="absolute top-6 left-0 right-0 h-px bg-[#E30613]/20"></div>
        <div className="absolute top-12 left-0 right-0 h-px bg-[#E30613]/10"></div>

        {/* Contenido centrado */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ 
            opacity: progress > 35 ? 0 : 1,
            transform: `scale(${progress > 15 ? 0.95 : 1})`,
          }}
        >
          <div className="text-center">
            <div className="absolute inset-0 bg-[#E30613]/5 blur-3xl rounded-full scale-150 pointer-events-none"></div>
            
            <div className="relative w-28 h-28 border border-[#E30613]/60 flex items-center justify-center mb-6 mx-auto bg-[#0a0a0a]/80 backdrop-blur-sm">
              <div className="absolute inset-1 border border-[#E30613]/25"></div>
              <div className="absolute -inset-2 border border-[#E30613]/10"></div>
              <span className="material-symbols-outlined text-6xl text-[#E30613]">
                warehouse
              </span>
            </div>
            
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-3 relative">
              Grupo Gregori
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E30613]"></div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">
                Industrial
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E30613]"></div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>

        {/* Barra inferior (tubo enrollador) */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#000]"
          style={{
            boxShadow: '0 8px 30px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E30613]"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-[#333]"></div>
          
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(255,255,255,0.1) 12px, rgba(255,255,255,0.1) 14px)',
            }}
          ></div>

          <div className="absolute top-1 left-1/4 right-1/4 h-1 bg-gradient-to-b from-[#E30613]/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/50"></div>
        </div>
      </div>

      {/* Sombra que se desvanece en la parte superior */}
      <div 
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none transition-opacity duration-500"
        style={{ 
          top: `${blindHeight}%`,
          opacity: progress > 80 ? 0 : 1,
        }}
      ></div>
    </div>
  );
};

export default BlindSlats;
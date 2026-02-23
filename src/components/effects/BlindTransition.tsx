// components/effects/BlindTransition.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../../assets/GregoriLogo.webp"

interface BlindTransitionProps {
  children: React.ReactNode;
}

const BlindTransition = ({ children }: BlindTransitionProps): JSX.Element => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reset states on route change
    setIsOpen(false);
    setShowContent(false);

    // Small delay to ensure DOM is ready
    const timer1 = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    // Show content after blind starts opening
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Content (behind the blind) */}
      <div 
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>

      {/* Blind Overlay */}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              #0a0a0a,
              #0a0a0a 8px,
              #141414 8px,
              #141414 16px
            )
          `,
        }}
      >
        {/* Blind slats effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 6px,
                rgba(227, 6, 19, 0.1) 6px,
                rgba(227, 6, 19, 0.1) 8px,
                transparent 8px,
                transparent 16px
              )
            `,
          }}
        ></div>

        {/* Brand logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center transition-all duration-500 ${
            isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}>
            <img 
              src={Logo}
              alt="Grupo Gregori"
              className="h-16 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                Cargando
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar (the blind bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E30613]"></div>
      </div>
    </div>
  );
};

export default BlindTransition;
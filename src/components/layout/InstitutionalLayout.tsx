// components/layout/InstitutionalLayout.tsx
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BlindSlats from '../effects/BlindSlats';

const InstitutionalLayout = (): JSX.Element => {
  const location = useLocation();
  const [blindOpen, setBlindOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset states on route change
    setBlindOpen(false);
    setShowContent(false);
    setIsLoading(true);

    // Pausa dramática antes de abrir
    const openTimer = setTimeout(() => {
      setBlindOpen(true);
    }, 400);

    // Mostrar contenido cuando la persiana está subiendo
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    // Terminar loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#E30613] selection:text-white">
      {/* Efecto de persiana microperforada */}
      {(isLoading || !blindOpen) && (
        <BlindSlats isOpen={blindOpen} duration={1600} />
      )}
      
      {/* Contenido de la página */}
      <div 
        className={`transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default InstitutionalLayout;
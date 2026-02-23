import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import VersionBadge from '../comon/VersionBadge';
import { VERSION_INFO } from '@/utils/version';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div 
      className="min-h-screen text-slate-200 p-3 sm:p-4 md:p-8 font-sans selection:bg-[#E30613]/30 bg-cover bg-no-repeat relative overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(/assets/Persiana.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 relative z-0">
        {/* Navbar del catálogo */}
        <nav className="flex justify-between items-center py-4 border-b border-slate-800">
          <Link to="/" className="text-xl font-black uppercase tracking-tighter hover:text-[#E30613] transition-colors">
            ← Volver a Web
          </Link>
          <Link to="/catalogo" className="text-[#E30613] font-black uppercase tracking-widest text-sm">
            Catálogo
          </Link>
        </nav>

        <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </main>

        {/* Footer */}
        <footer className="pt-6 sm:pt-8 border-t border-slate-900">
          <div className="bg-slate-900/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <VersionBadge variant="tooltip" />
                <div className="h-px w-full sm:h-6 sm:w-px bg-slate-800" />
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-700 uppercase">
                  Grupo Gregori Industrial
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-700 uppercase">
                  © 2024 Grupo Gregori - Industrial Solutions
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
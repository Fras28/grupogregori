import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import Logo from "../../assets/LogoNav.webp"


interface NavLink {
  path: string;
  label: string;
}

const Navbar = (): JSX.Element => {
  const location = useLocation();
  const { user } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks: NavLink[] = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/galeria', label: 'Galería' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              alt="Grupo Gregori" 
              className="h-12 w-auto" 
              src={Logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 uppercase text-[11px] font-black tracking-[0.2em]">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-[#E30613] ${
                  isActive(link.path) ? 'text-[#E30613]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/catalogo"
              className="hidden sm:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
            >
              Catálogo
            </Link>
            
            {user ? (
              <Link
                to={user.role === 'ADMIN' ? '/admin' : '/catalogo'}
                className="bg-[#E30613] text-white px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all"
              >
                {user.role === 'ADMIN' ? 'Admin' : 'Mi Cuenta'}
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#E30613] text-white px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all"
              >
                Cotizar
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-black uppercase tracking-widest ${
                    isActive(link.path) ? 'text-[#E30613]' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/catalogo"
                className="block text-sm font-black uppercase tracking-widest text-slate-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catálogo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
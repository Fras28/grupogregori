import { Link } from 'react-router-dom';

interface FooterLink {
  to: string;
  label: string;
}

const Footer = (): JSX.Element => {
  const soluciones: FooterLink[] = [
    { to: '/servicios', label: 'Cortinas' },
    { to: '/servicios', label: 'Persianas' },
    { to: '/servicios', label: 'Puertas' },
    { to: '/servicios', label: 'Motores' },
  ];

  const compania: FooterLink[] = [
    { to: '/nosotros', label: 'Empresa' },
    { to: '/galeria', label: 'Portfolio' },
    { to: '/contacto', label: 'Clientes' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <img 
              alt="Grupo Gregori" 
              className="h-10 w-auto mb-6 grayscale brightness-200" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1SFvT9JLyIqs_6p3lrnSeM3QEyefDS2YNaIM-ogZqxAH7THAFq84Cr42Lk9U7pk0Ib3XzswoxPaVxXvDarZd7GiorHVUzUSVKWjSuEbRxdcaIuBvSfsI_WD-nhE3Ph4wq1NmEXW-Uwki516tOeO7W1gOcYjw3AWxkDXp3UdacuXycm2HUhJ5E3FiaodzrfvwEOIzvDpWFGAPV93AMxibSbL-4Fyebf43yQT66BPgkKeddwxqbACYpvT4bhkUg7h04nqWDe_06vJQW"
            />
            <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-sm uppercase tracking-tight">
              Líderes en ingeniería de cerramientos industriales. Calidad certificada y tecnología aplicada a la seguridad de su planta.
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-8 text-[#E30613]">Soluciones</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              {soluciones.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-8 text-[#E30613]">Compañía</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              {compania.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-8 text-[#E30613]">Newsletter</h4>
            <div className="flex">
              <input 
                className="bg-[#141414] border-[#262626] w-full p-4 text-xs font-bold uppercase tracking-widest text-white focus:ring-[#E30613] focus:border-[#E30613] outline-none"
                placeholder="SU EMAIL" 
                type="email"
              />
              <button 
                className="bg-[#E30613] px-6 text-white hover:bg-red-700 transition-colors"
                type="button"
                aria-label="Enviar newsletter"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© 2024 GRUPO GREGORI. INDUSTRIAL SOLUTIONS.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#E30613] transition-colors">Legales</a>
            <a href="#" className="hover:text-[#E30613] transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
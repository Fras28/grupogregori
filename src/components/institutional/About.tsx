import { useEffect } from 'react';

interface Value {
  icon: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const About = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Nosotros | Grupo Gregori - Legado Industrial desde 1962';
  }, []);

  const values: Value[] = [
    {
      icon: 'verified',
      title: 'Calidad',
      desc: 'Excelencia en materiales y procesos certificados bajo estándares internacionales de resistencia.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Innovación',
      desc: 'Inversión constante en I+D para desarrollar sistemas de apertura más rápidos, seguros y silenciosos.'
    },
    {
      icon: 'handshake',
      title: 'Compromiso',
      desc: 'Acompañamiento técnico desde la fase de diseño hasta el mantenimiento post-venta de cada unidad.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "La durabilidad de las cortinas Gregori es incomparable. Llevamos 10 años con los mismos sistemas en nuestro centro logístico y el funcionamiento sigue siendo impecable.",
      name: "Ing. Ricardo Méndez",
      role: "Director Logístico",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh4cH3P-TsZ7ScH_oX1YOFkvjfFFr4dAwLqdP1Y-ZkZ9jOUhFLNsQzBO4RQrwO-oolrD9SqN16OKG6ZGHPAJQ53n591-QmXJP4tvCwHBuc4IGT1IT3qqm8Sen2B-c9iALf-d2kzTRtnQvMDAp7jOb9NyBsKwZwmFM_43QPPxTHK8Ft_5ylh64P1Ug10oa2YqFGEliQfEcWCKxkIqgcnKvxilLstk4UzWSuZ3WeAYrt_6KzHfakSwcWqM7-XURfK2tQte6XAS-e1cOL"
    },
    {
      quote: "Buscábamos una solución personalizada para un muelle de carga atípico. El equipo técnico de Gregori diseñó un sistema a medida que superó nuestras expectativas.",
      name: "Sofía González",
      role: "Jefa de Planta",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf66iwIUI2uVEsn45IzAhU0t11MJv3iZtnQ0JkUpkucHa8UHAt29wJM_RKyMiXYnuH9QmSZpyAuerEXpZabgU2ym3kVABqwlRcUH8j2GZjXTdA2a1cNeFPMiAf0uwLf7KNBSiO3ZjNFp07cG7xYaUckoN9c-Rf4YYVJV826awQwel6gom5yJxXE8BwCtgJsk3fQc08okJFnuZ9HR7vWDdE51_2atYdL2TX4KSACxvhUdqutQ4vWjqMC6FSqaYl2i4cUVRFT-iDx5Vm"
    },
    {
      quote: "La rapidez de respuesta en el servicio técnico es lo que los diferencia. Para una industria donde el tiempo es oro, Gregori es el socio estratégico ideal.",
      name: "Oscar Domínguez",
      role: "Operaciones",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0LgXLHMJPQ6o24bYO_OGEuEbjBNrAw3b61PnK3pPafzUxlZEBKF1y277YMRDIpuCordJUZd23lzXVVdMFeL4AguuHuWf-Z1bcElfSBVIjG_Q_s4J2XwpUdqg7YRXGRtJSKYeH0GNt8tIDKw3beaUUxMdTz0j-aS_5BhtayV0vXTN7X-gKe0MaO39W3t-DlH5ykPFm4I532sRZ5qlCUKqc5ykNu5WRM6ayoKPm1i1F9BFySQro9KdIH4y5M06bCBrA5J_sPnR3LxnT"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-20">
      {/* Hero */}
      <header className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Industrial Background" 
            className="w-full h-full object-cover grayscale opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlRlAAQ1h-wSErIAOkCFhyXgSmNx69qEDKXE2hLAXe3TwiRuDw7bRn_LfSbzIPkn6G7NXmi1IJ9KLWLONtsD6xDg-JVZpDGHyopl_2k6_mNOIgjGJXUf0MYjtQstvul9_4cf6uymBZ5ysWFiYbDE6i7UOEMnEKSfScbpKW-kqKjr2SBxDy3ApM24-gvbxhmYyuji0D5KqdR-kuApmoMtEM_3gEZ0ie_atjei3OZDZgptV7mf2xtPlt6LwA-VCPf6m7JaZV-NLWCJ8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-[#E30613] px-3 py-1 mb-6">
            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Trayectoria Industrial</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter">
            Desde 1962, <br/>
            <span className="text-[#E30613]">forjando confianza</span>
          </h1>
          <p className="mt-8 text-xl text-slate-400 max-w-2xl leading-relaxed">
            Más de seis décadas evolucionando junto a la industria argentina, proveyendo soluciones de cerramiento de alta ingeniería y durabilidad extrema.
          </p>
        </div>
      </header>

      {/* Legacy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Legado Industrial</h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Fundada en 1962, Grupo Gregori nació con la visión de transformar la seguridad y funcionalidad de los espacios productivos. Lo que comenzó como un taller metalúrgico especializado, se ha convertido hoy en el referente nacional de cortinas y persianas industriales.
              </p>
              <p>
                Nuestra historia no es solo sobre acero y motores; es sobre el compromiso inquebrantable con cada proyecto que lleva nuestra firma. Hemos crecido adaptándonos a las nuevas normativas de seguridad y eficiencia energética, integrando tecnología de vanguardia en procesos que conservan el rigor artesanal del detalle.
              </p>
              <p className="font-bold text-white">
                Hoy, seguimos liderando el mercado con la misma pasión que el primer día, proyectando el futuro de la industria desde nuestra planta de producción propia.
              </p>
            </div>
            
            <div className="flex gap-12 pt-4">
              <div>
                <span className="block text-4xl font-black text-[#E30613]">60+</span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Años de historia</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-[#E30613]">15k+</span>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">Obras terminadas</span>
              </div>
            </div>
          </div>

          {/* Blueprint Graphic */}
          <div className="relative group">
            <div className="relative bg-[#1a1a1a] border border-white/10 p-8 min-h-[500px] flex items-center justify-center" style={{
              backgroundImage: `radial-gradient(#333 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}>
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E30613]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E30613]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E30613]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E30613]"></div>
              
              <svg className="w-full h-full max-w-md opacity-80" viewBox="0 0 200 200">
                <rect fill="none" height="120" stroke="#666" strokeDasharray="4" strokeWidth="1" width="100" x="50" y="40"/>
                <path d="M50 40 L150 40 M50 55 L150 55 M50 70 L150 70 M50 85 L150 85 M50 100 L150 100 M50 115 L150 115 M50 130 L150 130 M50 145 L150 145 M50 160 L150 160" stroke="#E30613" strokeWidth="1.5"/>
                <circle cx="100" cy="30" fill="none" r="10" stroke="#E30613" strokeWidth="1"/>
                <line stroke="#E30613" strokeWidth="1" x1="40" x2="40" y1="40" y2="160"/>
                <line stroke="#E30613" strokeWidth="1" x1="35" x2="45" y1="40" y2="40"/>
                <line stroke="#E30613" strokeWidth="1" x1="35" x2="45" y1="160" y2="160"/>
                <text fill="#E30613" fontFamily="monospace" fontSize="8" transform="rotate(-90 25,105)" x="25" y="105">H: 4500mm</text>
                <line stroke="#E30613" strokeWidth="1" x1="50" x2="150" y1="175" y2="175"/>
                <line stroke="#E30613" strokeWidth="1" x1="50" x2="50" y1="170" y2="180"/>
                <line stroke="#E30613" strokeWidth="1" x1="150" x2="150" y1="170" y2="180"/>
                <text fill="#E30613" fontFamily="monospace" fontSize="8" x="85" y="190">W: 3200mm</text>
              </svg>
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Fig. 042 / Roller Component v2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value: Value, index: number) => (
              <div 
                key={index} 
                className="bg-[#E30613] p-12 flex flex-col justify-between aspect-square group hover:bg-red-700 transition-colors"
              >
                <span className="material-symbols-outlined text-white text-5xl">{value.icon}</span>
                <div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{value.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#141414]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-center">Voces de nuestros socios</h2>
            <div className="w-20 h-1 bg-[#E30613] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="bg-[#141414] p-8 relative">
                <span className="material-symbols-outlined text-[#E30613] text-6xl absolute -top-4 -left-4 opacity-20">format_quote</span>
                <p className="text-slate-400  mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 overflow-hidden">
                    <img alt={testimonial.name} className="w-full h-full object-cover" src={testimonial.image}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-tight">{testimonial.name}</h4>
                    <span className="text-xs text-[#E30613] font-black uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
// components/institutional/Home.tsx
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Persiana from "../../assets/persianaGreg.jpg"
import bgHero from "../../assets/bgGregoriHero2.jpg"
import industrial from "../../assets/works/Industrial1.jpg"
import Comercial from "../../assets/works/comercial1.jpg"
import Hogar from "../../assets/works/Hogar.jpg"

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  loading?: 'eager' | 'lazy';
}

const Home = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Grupo Gregori | Ingeniería en Cerramientos Industriales';
  }, []);

  const stats: Stat[] = [
    { value: '60+', label: 'Años de experiencia' },
    { value: '15K+', label: 'Obras completadas' },
    { value: '100%', label: 'Compromiso argentino' },
  ];

  const features: Feature[] = [
    {
      title: 'Cortinas y persianas',
      description: 'Líderes en ingeniería de cerramientos. Soluciones de alta resistencia para la protección de tu local, hogar e industria.',
      icon: 'warehouse',
      link: '/servicios',
    },
    {
      title: 'Automatizaciones',
      description: 'Automatización y control para accesos de gran envergadura.',
      icon: 'roller_shades',
      link: '/servicios',
    },
    {
      title: 'Seguridad',
      description: 'Soluciones de alta velocidad para flujo logístico continuo.',
      icon: 'sync_alt',
      link: '/servicios',
    },
  ];

  const projects: Project[] = [
    {
      title: 'Planta Logística Buenos Aires',
      category: 'Industrial',
      image: industrial,
      loading: 'eager',
    },
    {
      title: 'Oficinas Puerto Madero',
      category: 'Comercial',
      image: Comercial,
      loading: 'lazy',
    },
    {
      title: 'Residencia Nordelta',
      category: 'Residencial',
      image: Hogar,
      loading: 'lazy',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Grupo Gregori | Cortinas Metálicas y Persianas Industriales desde 1962</title>
        <meta name="description" content="Líderes en ingeniería de cerramientos industriales. 60+ años de trayectoria, planta de fabricación propia en Berazategui. Presupuesto en 24hs." />
        <link rel="canonical" href="https://grupogregori.com.ar/" />
        <link rel="preload" as="image" href={bgHero} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": features.map((feature, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": feature.title,
                "description": feature.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Grupo Gregori"
                }
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Industrial Background"
              className="w-full h-full object-cover opacity-30"
              src={bgHero}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/70 to-[#0a0a0a]"></div>
          </div>

          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(227, 6, 19, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(227, 6, 19, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <div className="inline-block bg-[#E30613]/5 border border-[#E30613]/30 px-4 py-2 mb-8">
              <span className="text-[#E30613] text-xs font-black uppercase tracking-[0.3em]">
                Desde 1962
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              forjamos
              <br />
              <span className="text-[#E30613] ">tu seguridad</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Líderes en ingeniería de cerramientos. Soluciones de alta resistencia para la protección de tu local, hogar e industria
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="bg-[#E30613] text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-red-700 transition-all"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                to="/servicios"
                className="border border-white/20 text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:border-[#E30613] hover:text-[#E30613] transition-all"
              >
                Ver Servicios
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat: Stat, index: number) => (
                <div key={index} className="text-center">
                  <span className="block text-3xl md:text-5xl font-black text-[#E30613]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <span className="material-symbols-outlined text-slate-500 text-3xl">
              expand_more
            </span>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Nuestras <span className="text-[#E30613]">Soluciones</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature: Feature, index: number) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-[#141414] border border-white/5 p-8 hover:border-[#E30613]/50 transition-all"
                >
                  <div className="w-16 h-16 bg-[#E30613]/10 flex items-center justify-center mb-6 group-hover:bg-[#E30613] transition-colors">
                    <span className="material-symbols-outlined text-3xl text-[#E30613] group-hover:text-white transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#E30613] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <span className="text-xs font-black uppercase tracking-widest text-[#E30613] flex items-center gap-2">
                    Ver más
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#E30613]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
              ¿Listo para tu proyecto?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
              Contactanos hoy mismo y recibí un presupuesto personalizado en 24
              horas.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-[#E30613] px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-white transition-all"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                  Por qué elegir <span className="text-[#E30613]">Grupo Gregori</span>
                </h2>
                <div className="space-y-6">
                  {[
                    'Más de 60 años de trayectoria ininterrumpida',
                    'Planta de fabricación propia en Punta Alta Prov.Bs As',
                    'Cobertura técnica en todo el territorio nacional',
                    'Garantía extendida en todos nuestros productos',
                    'Servicio de emergencia 24/7',
                  ].map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-[#E30613] flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="material-symbols-outlined text-white text-sm">
                          check
                        </span>
                      </div>
                      <span className="text-slate-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-[#141414] border border-white/5 overflow-hidden">
                  <OptimizedImage
                    alt="Instalación industrial"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    src={Persiana}
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#E30613] -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects Preview */}
        <section className="py-24 bg-[#111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                  Últimos <span className="text-[#E30613]">Proyectos</span>
                </h2>
                <p className="text-slate-400">Algunas de nuestras obras recientes</p>
              </div>
              <Link
                to="/galeria"
                className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#E30613] hover:text-white transition-colors"
              >
                Ver todos
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index: number) => (
                <Link
                  key={index}
                  to="/galeria"
                  className="group relative aspect-[4/3] bg-[#141414] overflow-hidden"
                >
                  <OptimizedImage
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    src={project.image}
                    loading={project.loading || 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/galeria"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#E30613]"
              >
                Ver todos
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Componente de imagen optimizado
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

const OptimizedImage = ({ src, alt, className = '', loading = 'lazy' }: OptimizedImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-[#1a1a1a] flex items-center justify-center`}>
        <span className="material-symbols-outlined text-slate-600 text-4xl">broken_image</span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className={`${className} bg-[#1a1a1a] animate-pulse absolute inset-0`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
};

export default Home;
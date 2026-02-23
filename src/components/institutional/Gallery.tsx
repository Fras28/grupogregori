import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: string;
  location?: string;
  year?: string;
}

interface Filter {
  key: string;
  label: string;
}

// ==========================================
// 🖼️ COMPONENTE DE IMAGEN OPTIMIZADA
// ==========================================
interface OptimizedImageProps {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
  className?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  aspect, 
  priority = false,
  className = ''
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${aspect} overflow-hidden bg-[#141414]`}>
      <img
        src={src}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-700
          ${loaded ? 'opacity-100 grayscale-0' : 'opacity-0'}
          ${className}
        `}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        width="800"
        height="600"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
      )}
    </div>
  );
};

const Gallery = (): JSX.Element => {
  const [filter, setFilter] = useState<string>('todos');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = 'Galería | Grupo Gregori - Trabajos Realizados';
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Planta Logística Buenos Aires',
      category: 'industrial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8U8-OPje4afkeOzLAV_Mli9XLPgk83XcXRuA0kdNKKySdLTgWL-S0JWw9nOoTP6vIZA1LAZ8QWBigH_kQQUAQiV3_QaJ6LdI9K32RB0IFQWcw3AXiqb_gDXrDgRXVI2IfBBmouhGbESQBP8ny2xO8aOGUUXocPU2rBr2J3bDEhvmEqgmIxnrWRr-PhgBU2-k3w-rMqQlyPtX-vsRM4fvZqgtkxMgS-zQOpYV73V_v5h54KQHl1b84k2jvcOzlYOJSUTItcKcnKJpK',
      aspect: 'aspect-[4/5]',
      location: 'Buenos Aires',
      year: '2023'
    },
    {
      id: 2,
      title: 'Oficinas Puerto Madero',
      category: 'corporativo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByBseeBusFJ7b_3YnBo4HyPFZ-z5lI0_2HGoJDzqJ1_GoeO_c14R-n7eLe2mMwAP-3zUuKvxJNXiGr91fGSROMv8WrVyT1w3JBSm2eRCd6r3cxIcEFF7n5ZXT2HEE5UNlpBrgNO3AWhT3a_AgvzTe6x1rLr4DzumRiBvQYB2yV3H6B7BPn4e6pny1aguoZE9AJ2Fx4jCQTQrfKyTZijEEo6I4Dyt64bOgtB9u1BANqsEwgyohmUur3s0rqwFM42k1PUQPYt2etWjv7',
      aspect: 'aspect-square',
      location: 'Puerto Madero, CABA',
      year: '2023'
    },
    {
      id: 3,
      title: 'Residencia Nordelta',
      category: 'residencial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2jCPSLqqap9bSlVhXcq-lml98XhXVAOCa0BztJfGB5OPDo4vGmfgEsfkHaHRz5IWbMBiFGPCmRM7AYhys_D3gxCAak4lsG3M2Ekmt0uD5yO6ZMCL6vvBifM2Ivh3fIQqVJ7aSm_1I_JR6dmQ4IzY2lYwhjoJ2S-hegiQChIkmOg7WjzW6TasMohQRTTgINWeGJ4bEm9wCo8KJl6b4SWWAVo19rhj0zRLqgPggSFP6Dhy4cUSeYpEeD5iercGDtVsCfRIrnGCkR2dT',
      aspect: 'aspect-[4/3]',
      location: 'Nordelta, Buenos Aires',
      year: '2024'
    },
    {
      id: 4,
      title: 'Centro de Distribución Sur',
      category: 'industrial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJIe5EmK9F2AfHXNKCY2S1HvfnWWfnf0WmqUhIMDyVypOCFnh-FsOZ4jvMuuER2mqXc49YG6ZHMSZN7RBDdzIUTFfyyJiY8XUKFBuNYBBJkUHjEC6Hh3u0sPSWhO6c5TYgQplWW3Iq8ne4fxkjs6olzagBiFPs7Q2nRhndVs3MexMuTUhdqwbjRfcypX67LKwrRSXEDLxuLs8huSZ8LQlCKUCuleR75brz8rI6Sp4QhMhdMlG8-TkjK2we-Z14Vw594MkgTKNLS98a',
      aspect: 'aspect-[16/9]',
      location: 'La Plata, Buenos Aires',
      year: '2024'
    },
    {
      id: 5,
      title: 'Edificio Tech-Hub',
      category: 'corporativo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjtiZK8fk_SBnSAUgtutDofBRBASk77XkHUZG1JuX9vYB-GNtFjvGV1Sk3QqZ5e2IZd7r8vtNVZltCmMP7-l-kp_bySk2U_gUjkwdW7dKg8i19KJdoXhx7_t4drFWfkkJFs7w0dhDUxwD0vWjI9EoE6a1rn1m69fvJHgbYfaoXZzTKWF-EMf2qEUQtsEXuVCQYiqyx5PmwvgR1uMx-rGJY73N9QGR6P8QGsvsp_lJkgMLGaSMY_Jw6uM_fNCthxvSnpnryGSUurcs_',
      aspect: 'aspect-[4/5]',
      location: 'Palermo, CABA',
      year: '2023'
    },
    {
      id: 6,
      title: 'Casa Minimalista Pilar',
      category: 'residencial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB391F132ytAI4zmEdbcmwBY_-1sgwNWV05qxwV1LpCb8ySKgk6HnclcGjEN24dWyucUFJhON2-KrJa0Xxd2WPLjHVDA11qVh5wHH2dMX-eScX0qe5LtlDbND3gFG5A7a-YnnHBNMe50XjL89Z3vPsju020Vk6OiM7Z1k_r3zv7hHSDmb9WjmAgFiXF64wjGtFQ-7AUzWsFJaN2kLJGRbnfHVbXLvvcP7cFBjmo328vhzohl3HzsGdvqexyitgTyEE8RV4kS-PD-pkm',
      aspect: 'aspect-square',
      location: 'Pilar, Buenos Aires',
      year: '2024'
    }
  ];

  const filters: Filter[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'corporativo', label: 'Corporativo' },
    { key: 'residencial', label: 'Residencial' }
  ];

  const filteredProjects: Project[] = filter === 'todos' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  // Schema para proyectos
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": visibleProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": `Proyecto ${project.category} en ${project.location}`,
        "image": project.image,
        "dateCreated": project.year,
        "locationCreated": {
          "@type": "Place",
          "name": project.location
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Galería | Grupo Gregori - Trabajos Realizados</title>
        <meta 
          name="description" 
          content="Proyectos de cortinas metálicas, persianas industriales y cerramientos ejecutados en toda Argentina. Planta logística, oficinas corporativas y residencias." 
        />
        <link rel="canonical" href="https://grupogregori.com.ar/galeria" />
        
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0a0a0a] min-h-screen pt-20">
        {/* Header */}
        <header className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#E30613] pl-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Galería de <br/>
              <span className="text-[#E30613]">Trabajos Realizados</span>
            </h1>
            <p className="mt-8 text-xl text-slate-400 max-w-2xl font-medium">
              Proyectos de alta envergadura ejecutados bajo los más altos estándares de calidad industrial en toda la región.
            </p>
          </div>
        </header>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-6">
            {filters.map((f: Filter) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setVisibleCount(6); // Reset al cambiar filtro
                }}
                className={`px-6 py-2 font-black uppercase text-sm tracking-widest transition-all ${
                  filter === f.key 
                    ? 'bg-[#E30613] text-white' 
                    : 'bg-transparent text-slate-400 hover:text-white border border-transparent hover:border-white/20'
                }`}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {visibleProjects.map((project: Project, index: number) => (
              <article 
                key={project.id}
                className="break-inside-avoid group cursor-pointer"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="name" content={project.title} />
                <meta itemProp="dateCreated" content={project.year} />
                
                <div className={`relative ${project.aspect} bg-[#141414] overflow-hidden`}>
                  {/* Blind reveal effect */}
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{
                    background: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 4px,
                      rgba(10, 10, 10, 0.4) 4px,
                      rgba(10, 10, 10, 0.4) 5px
                    )`
                  }}></div>
                  
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} - Proyecto ${project.category} en ${project.location} por Grupo Gregori`}
                    aspect={project.aspect}
                    priority={index < 3}
                    className="grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="bg-[#E30613] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-20 text-center">
              <button 
                onClick={loadMore}
                className="px-12 py-4 border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white transition-all font-black uppercase tracking-widest text-sm"
              >
                Cargar más proyectos
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Gallery;
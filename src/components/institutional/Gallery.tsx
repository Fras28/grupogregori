import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import industrial1 from "../../assets/works/Industrial1.jpg"
import industrial2 from "../../assets/works/Industrial2.jpg"
import industrial3 from "../../assets/works/Industrial3.png"
import industrial4 from "../../assets/works/Industrial4.jpeg"
import industrial5 from "../../assets/works/Industrial5.jpeg"
import comercial1 from "../../assets/works/comercial.jpg"

import comercial2 from "../../assets/works/comercial1.jpg"
import comercial3 from "../../assets/works/comercial2.jpg"
import hogar from "../../assets/works/Hogar.jpg"
import hogar1 from "../../assets/works/hogar1.jpg"
import hogar2 from "../../assets/works/hogar2.jpg"

interface Project {
  id: number;
  title: string;
  category: 'industrial' | 'comercial' | 'residencial';
  image: string;
  aspect: string;
  location?: string;
  year?: string;
}

interface Filter {
  key: 'todos' | 'industrial' | 'comercial' | 'residencial';
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
  const [filter, setFilter] = useState<Filter['key']>('todos');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = 'Galería | Grupo Gregori - Trabajos Realizados';
  }, []);

  // ==========================================
  // 📁 TODAS LAS IMÁGENES ORGANIZADAS
  // ==========================================
  const projects: Project[] = [
    // INDUSTRIAL (5 imágenes)
    {
      id: 1,
      title: 'Planta Logística Buenos Aires',
      category: 'industrial',
      image: industrial1,
      aspect: 'aspect-[4/3]',
      location: 'Buenos Aires',
      year: '2023'
    },
    {
      id: 2,
      title: 'Centro de Distribución Sur',
      category: 'industrial',
      image: industrial2,
      aspect: 'aspect-[16/9]',
      location: 'La Plata, Buenos Aires',
      year: '2024'
    },
    {
      id: 3,
      title: 'Depósito Automatizado',
      category: 'industrial',
      image: industrial3,
      aspect: 'aspect-[4/5]',
      location: 'Pilar, Buenos Aires',
      year: '2023'
    },
    {
      id: 4,
      title: 'Fábrica Metalúrgica',
      category: 'industrial',
      image: industrial4,
      aspect: 'aspect-square',
      location: 'Berazategui, Buenos Aires',
      year: '2024'
    },
    {
      id: 5,
      title: 'Parque Industrial Norte',
      category: 'industrial',
      image: industrial5,
      aspect: 'aspect-[4/3]',
      location: 'Tigre, Buenos Aires',
      year: '2023'
    },
    
    // COMERCIAL (3 imágenes)
    {
      id: 6,
      title: 'Oficinas Puerto Madero',
      category: 'comercial',
      image: comercial1,
      aspect: 'aspect-[4/5]',
      location: 'Puerto Madero, CABA',
      year: '2023'
    },
    {
      id: 7,
      title: 'Edificio Tech-Hub',
      category: 'comercial',
      image: comercial2,
      aspect: 'aspect-square',
      location: 'Palermo, CABA',
      year: '2024'
    },
    {
      id: 8,
      title: 'Centro Comercial Plaza',
      category: 'comercial',
      image: comercial3,
      aspect: 'aspect-[16/9]',
      location: 'Belgrano, CABA',
      year: '2023'
    },
    
    // RESIDENCIAL (3 imágenes)
    {
      id: 9,
      title: 'Residencia Nordelta',
      category: 'residencial',
      image: hogar,
      aspect: 'aspect-[4/3]',
      location: 'Nordelta, Buenos Aires',
      year: '2024'
    },
    {
      id: 10,
      title: 'Casa Minimalista Pilar',
      category: 'residencial',
      image: hogar1,
      aspect: 'aspect-square',
      location: 'Pilar, Buenos Aires',
      year: '2024'
    },
    {
      id: 11,
      title: 'Chalet San Isidro',
      category: 'residencial',
      image: hogar2,
      aspect: 'aspect-[4/5]',
      location: 'San Isidro, Buenos Aires',
      year: '2023'
    }
  ];

  const filters: Filter[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'comercial', label: 'Comercial' },
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

  // Resetear contador al cambiar filtro
  const handleFilterChange = (newFilter: Filter['key']) => {
    setFilter(newFilter);
    setVisibleCount(6);
  };

  // Schema para proyectos visibles
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

  // Contador por categoría
  const countByCategory = {
    todos: projects.length,
    industrial: projects.filter(p => p.category === 'industrial').length,
    comercial: projects.filter(p => p.category === 'comercial').length,
    residencial: projects.filter(p => p.category === 'residencial').length
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
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '1px'
              }}
            >
              Galería de <br />
              <span className="text-[#E30613]">Trabajos Realizados</span>
            </h1>
            <p className="mt-8 text-xl text-slate-400 max-w-2xl font-medium">
              Proyectos de alta envergadura ejecutados bajo los más altos estándares de calidad industrial en toda la región.
            </p>
          </div>
        </header>

        {/* Filters con contadores */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-6">
            {filters.map((f: Filter) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`px-6 py-2 font-black uppercase text-sm tracking-widest transition-all flex items-center gap-2 ${
                  filter === f.key
                    ? 'bg-[#E30613] text-white'
                    : 'bg-transparent text-slate-400 hover:text-white border border-transparent hover:border-white/20'
                }`}
                aria-pressed={filter === f.key}
              >
                {f.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === f.key ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {countByCategory[f.key]}
                </span>
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

          {/* Empty State */}
          {visibleProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-20 text-center">
              <button
                onClick={loadMore}
                className="px-12 py-4 border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white transition-all font-black uppercase tracking-widest text-sm"
              >
                Cargar más proyectos ({filteredProjects.length - visibleCount} restantes)
              </button>
            </div>
          )}

          {/* Info de total */}
          <div className="mt-8 text-center text-slate-500 text-sm">
            Mostrando {visibleProjects.length} de {filteredProjects.length} proyectos
            {filter !== 'todos' && ` en categoría "${filters.find(f => f.key === filter)?.label}"`}
          </div>
        </main>
      </div>
    </>
  );
};

export default Gallery;
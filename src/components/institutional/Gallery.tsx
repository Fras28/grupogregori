import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import industrial1 from "../../assets/works/Industrial1.jpg"
import industrial2 from "../../assets/works/Industrial2.jpg"
import industrial3 from "../../assets/works/Industrial3.png"
import industrial4 from "../../assets/works/Industrial4.jpeg"
import industrial5 from "../../assets/works/Industrial5.jpeg"
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
  location?: string;
  year?: string;
}

interface Filter {
  key: 'todos' | 'industrial' | 'comercial' | 'residencial';
  label: string;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const OptimizedImage = ({ src, alt, priority = false }: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
          <span className="text-slate-600 text-xs">Sin imagen</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full
           object-center
          transition-all duration-500 ease-out
          group-hover:scale-105
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setLoaded(true)}
        onError={() => { setError(true); setLoaded(true); }}
      />
    </>
  );
};

const Gallery = (): JSX.Element => {
  const [filter, setFilter] = useState<Filter['key']>('todos');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = 'Galería | Grupo Gregori - Trabajos Realizados';
  }, []);

  const projects: Project[] = [
    { id: 1, title: 'Planta Logística Buenos Aires', category: 'industrial', image: industrial1, location: 'Buenos Aires', year: '2023' },
    { id: 2, title: 'Centro de Distribución Sur', category: 'industrial', image: industrial2, location: 'La Plata, Buenos Aires', year: '2024' },
    { id: 3, title: 'Depósito Automatizado', category: 'industrial', image: industrial3, location: 'Pilar, Buenos Aires', year: '2023' },
    { id: 4, title: 'Fábrica Metalúrgica', category: 'industrial', image: industrial4, location: 'Berazategui, Buenos Aires', year: '2024' },
    { id: 5, title: 'Parque Industrial Norte', category: 'industrial', image: industrial5, location: 'Tigre, Buenos Aires', year: '2023' },
    { id: 6, title: 'Edificio Tech-Hub', category: 'comercial', image: comercial2, location: 'Palermo, CABA', year: '2024' },
    { id: 7, title: 'Centro Comercial Plaza', category: 'comercial', image: comercial3, location: 'Belgrano, CABA', year: '2023' },
    { id: 8, title: 'Residencia Nordelta', category: 'residencial', image: hogar, location: 'Nordelta, Buenos Aires', year: '2024' },
    { id: 9, title: 'Casa Minimalista Pilar', category: 'residencial', image: hogar1, location: 'Pilar, Buenos Aires', year: '2024' },
    { id: 10, title: 'Chalet San Isidro', category: 'residencial', image: hogar2, location: 'San Isidro, Buenos Aires', year: '2023' },
  ];

  const filters: Filter[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'comercial', label: 'Comercial' },
    { key: 'residencial', label: 'Residencial' },
  ];

  const filteredProjects = filter === 'todos' ? projects : projects.filter(p => p.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));

  const handleFilterChange = (newFilter: Filter['key']) => {
    setFilter(newFilter);
    setVisibleCount(6);
  };

  const countByCategory = {
    todos: projects.length,
    industrial: projects.filter(p => p.category === 'industrial').length,
    comercial: projects.filter(p => p.category === 'comercial').length,
    residencial: projects.filter(p => p.category === 'residencial').length,
  };

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
        "locationCreated": { "@type": "Place", "name": project.location },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Galería | Grupo Gregori - Trabajos Realizados</title>
        <meta name="description" content="Proyectos de cortinas metálicas, persianas industriales y cerramientos ejecutados en toda Argentina." />
        <link rel="canonical" href="https://grupogregori.com.ar/galeria" />
        <script type="application/ld+json">{JSON.stringify(projectsSchema)}</script>
      </Helmet>

      <div className="bg-[#0a0a0a] min-h-screen pt-20">

        {/* Header */}
        <header className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#E30613] pl-6">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
            >
              Galería de <br />
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
                onClick={() => handleFilterChange(f.key)}
                className={`px-6 py-2 font-black uppercase text-sm tracking-widest transition-all flex items-center gap-2 ${
                  filter === f.key
                    ? 'bg-[#E30613] text-white'
                    : 'bg-transparent text-slate-400 hover:text-white border border-transparent hover:border-white/20'
                }`}
                aria-pressed={filter === f.key}
              >
                {f.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${filter === f.key ? 'bg-white/20' : 'bg-white/10'}`}>
                  {countByCategory[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <meta itemProp="name" content={project.title} />
                <meta itemProp="dateCreated" content={project.year} />

                {/*
                  ✅ aspect-[4/3] uniforme — todas las fotos se muestran con
                     la misma proporción, sin recortes inesperados ni distorsión.

                  ✅ Sin grayscale — imágenes en color completo tal como fueron tomadas.

                  ✅ Overlay from-black/60 (antes /80) — permite ver los colores
                     reales de la foto sin que el texto quede ilegible.

                  ✅ Sin repeating-gradient "blind effect" — eliminado porque
                     superponía una trama de líneas que simulaba pixelado.
                */}
                <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} - Proyecto ${project.category} en ${project.location} por Grupo Gregori`}
                    priority={index < 3}
                  />

                  {/* Overlay solo en la franja inferior para legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <span className="bg-[#E30613] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-mono">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}

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
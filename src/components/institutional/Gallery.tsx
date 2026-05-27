import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

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

// Helper para aplicar transformaciones de optimización a URLs de Cloudinary
// Inserta f_auto,q_auto después de /upload/ para compresión y formato óptimo
const optimizeCloudinaryUrl = (url: string, width?: number): string => {
  const transforms = ['f_auto', 'q_auto'];
  if (width) transforms.push(`w_${width}`);
  return url.replace('/upload/', `/upload/${transforms.join(',')}/`);
};

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
    <div className="relative w-full h-full overflow-hidden">
      {!loaded && !error && (
        <div className="aspect-video bg-[#1a1a1a] animate-pulse w-full" />
      )}
      {error && (
        <div className="aspect-video flex items-center justify-center bg-[#1a1a1a]">
          <span className="text-slate-600 text-xs">Sin imagen</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`
          w-full h-auto block
          transition-all duration-500 ease-out
          group-hover:scale-105
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => { setError(true); setLoaded(true); }}
      />
    </div>
  );
};

const Gallery = (): JSX.Element => {
  const [filter, setFilter] = useState<Filter['key']>('todos');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = 'Galería | Grupo Gregori - Trabajos Realizados';
  }, []);

  // ============================================================================
  // TODAS LAS IMÁGENES DESDE CLOUDINARY - 26 PROYECTOS
  // ============================================================================
  const projects: Project[] = [
    // INDUSTRIAL (12 proyectos)
    {
      id: 1,
      title: 'Persiana Ciega Industrial - Agro Fiore',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909499/PERSIANA_CIEGA_AGROFIORE_mpu9b7.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 2,
      title: 'Persiana Ciega con Puerta de Escape - Credifin Express',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909500/PERSIANA_METALICA_CIEGA_CON_PUERTA_DE_ESCAPE_PARA_NAVE_INDUSTRIAL_CREDIFIN_L_dcaao2.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 3,
      title: 'Persiana Ciega Industrial - Aldea Romana',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909500/PERSIANA_METALICA_CIEGA_PARA_BAHIA_BLANCA_CORTALEZI_1600_ALDEA_ROMANA_BAHIA_BLANCA_itz5d3.jpg'),
      location: 'Bahía Blanca, Buenos Aires',
      year: '2024'
    },
    {
      id: 4,
      title: 'Persiana Ciega Nave Industrial - Neuquén',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909500/PERSIANA_METALICA_CIEGA_PARA_NAVE_INDUSTRIAL_EN_NEUQUEN_1_v2thao.jpg'),
      location: 'Neuquén',
      year: '2024'
    },
    {
      id: 5,
      title: 'Instalación Persiana Industrial - Neuquén',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909501/PERSIANA_METALICA_CIEGA_PARA_NAVE_INDUSTRIAL_EN_NEUQUEN_2.j_zyhnco.jpg'),
      location: 'Neuquén',
      year: '2024'
    },
    {
      id: 6,
      title: 'Persiana Ciega Nave Industrial - Neuquén (Exterior)',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909499/PERSIANA_METALICA_CIEGA_PARA_NAVE_INDUSTRIAL_EN_NEUQUEN_3.j_q1qsxt.jpg'),
      location: 'Neuquén',
      year: '2024'
    },
    {
      id: 7,
      title: 'Persiana Ciega Nave Industrial - Neuquén (Interior)',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909500/PERSIANA_METALICA_CIEGA_PARA_NAVE_INDUSTRIAL_EN_NEUQUEN_3.j_1_yn861k.jpg'),
      location: 'Neuquén',
      year: '2024'
    },
    {
      id: 8,
      title: 'Persiana Ciega Industrial - Pehuen-Co',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909499/PERSIANA_METALICA_CIEGA_PEHUEN_-CO_berqqk.jpg'),
      location: 'Pehuen-Co, Buenos Aires',
      year: '2024'
    },
    {
      id: 9,
      title: 'Persiana Metálica Perforada - Agro Fiore',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909502/PERSIANA_METALICA_PERFORADA_PARA_AGRO_FIORE_sxfmsf.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 10,
      title: 'Persiana Perforada Doble - Agro Fiore',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909502/PERSIANA_METALICA_PERFORADA_PARA_AGRO_FIORE_2_twm7lb.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 11,
      title: 'Persiana Perforada Interior - Agro Fiore',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909502/PERSIANA_MET%C3%81LICA_PERFORADA_PARA_AGRO_FIORE_m5swcl.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 12,
      title: 'Persianas Industriales Doble',
      category: 'industrial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909506/WhatsApp_Image_2026-05-06_at_13.36.32_swxek7.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },

    // COMERCIAL (6 proyectos)
    {
      id: 13,
      title: 'Persiana Ciega Comercial - Vicentina Accesorios',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909499/PERSIANA_METALICA_CIEGA_PARA_BAHIA_BLANCA_VICENTINA_gvgkkh.jpg'),
      location: 'Bahía Blanca, Buenos Aires',
      year: '2024'
    },
    {
      id: 14,
      title: 'Persiana Ciega Comercial - Colón e Irigoyen',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909502/PERSIANA_METALICA_CIEGA_USO_COMERCIAL_COLON_E_IRIGOYEN_PUNTA_ALTA_kfze1y.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 15,
      title: 'Persiana Metálica Comercial - Colón e Irigoyen',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909506/PERSIANAS_METALICA_USO_COMERCIAL_COLON_E_IRIGOYEN_jpg_shl4i6.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 16,
      title: 'Persiana Metálica Comercial',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909505/WhatsApp_Image_2026-05-06_at_13.36.27_brdznw.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 17,
      title: 'Persianas Metálicas Comerciales Múltiples',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909506/WhatsApp_Image_2026-05-06_at_15.42.41_plt0hu.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 18,
      title: 'Fachada Comercial Agro Fiore',
      category: 'comercial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909506/WhatsApp_Image_2026-05-06_at_15.42.42_f59xxa.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },

    // RESIDENCIAL (8 proyectos)
    {
      id: 19,
      title: 'Persiana Ciega Residencial',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909504/PERSIANA_METALICA_USO_RESIDENCIAL_u1lmiz.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 20,
      title: 'Portón Aluminio Extruido - Villa del Mar',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909504/PORTON_ALUMINIO_EXTRUIDO_USO_RESIDENCIAL_VILLA_DEL_MAR_xhbvi2.jpg'),
      location: 'Villa del Mar, Buenos Aires',
      year: '2024'
    },
    {
      id: 21,
      title: 'Portón Aluminio Extruido Residencial',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909504/PORTON_ALUMINIO_EXTRUIDO_USO_RESIDENCIAL_tencck.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
    {
      id: 22,
      title: 'Portón Enrollable Blanco - Punta Alta',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909504/PORTON_ENROLLABLE_COLOR_BLANCO_COLOCADA_EN_PUNTA_ALTA_ytefbk.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 23,
      title: 'Portón Enrollable Blanco Interior - Punta Alta',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909503/PORTON_ENROLLABLE_COLOR_BLANCO_COLOCADA_EN_PUNTA_ALTA_2_rx010t.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 24,
      title: 'Portón Enrollable Negro - Punta Alta',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909505/PORTON_ENROLLABLE_DE_ALUMINIO_EXTRUIDO_NEGRO_EN_PUNTA_ALTA_hut09y.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 25,
      title: 'Portón Enrollable Negro Exterior - Punta Alta',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909504/PORTON_ENROLLABLE_DE_ALUMINIO_EXTRUIDO_NEGRO_EN_PUNTA_ALTA_2_ir1gmz.jpg'),
      location: 'Punta Alta, Buenos Aires',
      year: '2024'
    },
    {
      id: 26,
      title: 'Portón Enrollable Residencial',
      category: 'residencial',
      image: optimizeCloudinaryUrl('https://res.cloudinary.com/ds8p4wwwe/image/upload/v1779909505/WhatsApp_Image_2026-05-06_at_13.36.25_f9mowe.jpg'),
      location: 'Buenos Aires',
      year: '2024'
    },
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
              Proyectos de alta envergadura ejecutados bajo los más altos estándares de calidad industrial.
            </p>
          </div>
        </header>

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
              >
                {f.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${filter === f.key ? 'bg-white/20' : 'bg-white/10'}`}>
                  {countByCategory[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Layout Masonry usando Columns de Tailwind */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="group cursor-pointer relative"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="relative bg-[#141414] overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} - Proyecto ${project.category}`}
                    priority={index < 3}
                  />

                  {/* Overlay gradiente para asegurar legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 p-5 z-10 w-full">
                    <span className="bg-[#E30613] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-300 mt-1 font-mono uppercase">
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
                Cargar más proyectos ({filteredProjects.length - visibleCount})
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Gallery;
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';



// Imágenes de materiales por categoría (cada una muestra los 3 colores)
import lamasCiega from "../../assets/materiales/LAMACIEGA.png"
import lamasPerforadas from "../../assets/materiales/LAMASPERFORADAS.png"
import lamasWindows from "../../assets/materiales/LAMASWONDOWS.png"

import Hogar from "../../assets/works/hogar1.jpg"
import Comercial from "../../assets/works/comercial1.jpg"
import Industrial from "../../assets/works/Industrial1.jpg"



interface ServiceSpec {
  label: string;
  value: string;
}

interface Service {
  id: string;
  division: string;
  title: string;
  description: string;
  specs: ServiceSpec[];
  image: string;
  reverse?: boolean;
  applications?: string[];
}

interface MaterialVariant {
  color: string;
  hex: string;
}

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  variants: MaterialVariant[];
  specs: {
    label: string;
    value: string;
  }[];
}

interface MethodologyStep {
  icon: string;
  title: string;
  desc: string;
}

const Servicios = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Servicios | Grupo Gregori - Cortinas y Persianas Industriales';
  }, []);

  const services: Service[] = [
    {
      id: '01',
      division: 'DIVISIÓN RESIDENCIAL',
      title: 'CONFORT Y ESTILO DOMÉSTICO',
      description: 'Implementación de sistemas de automatización y protección solar para proyectos arquitectónicos de alta gama. Soluciones que combinan estética minimalista con eficiencia térmica superior.',
      specs: [
        { label: 'Max Span', value: '6.000 MM' },
        { label: 'Load Rating', value: 'CAT 3 WIND' }
      ],
      image: Hogar,
      applications: ['Viviendas unifamiliares', 'Edificios residenciales', 'Country clubs', 'Condominios']
    },
    {
      id: '02',
      division: 'DIVISIÓN COMERCIAL',
      title: 'INFRAESTRUCTURA DE NEGOCIOS',
      description: 'Protección perimetral y cerramientos para locales comerciales y oficinas. Sistemas de seguridad integrados con control de acceso y gestión remota para máxima operatividad.',
      specs: [
        { label: 'Duty Cycle', value: '80 CYC/DAY' },
        { label: 'Safety Grade', value: 'LEVEL 4-B' }
      ],
      image: Comercial,
      reverse: true,
      applications: ['Locales comerciales', 'Oficinas corporativas', 'Centros comerciales', 'Showrooms']
    },
    {
      id: '03',
      division: 'DIVISIÓN INDUSTRIAL',
      title: 'SISTEMAS DE ALTO IMPACTO',
      description: 'Ingeniería aplicada a la logística pesada. Cortinas metálicas de gran porte, puertas rápidas de lona y sellos de dock. Equipamiento diseñado para trabajo pesado 24/7.',
      specs: [
        { label: 'Max Span', value: '12.000 MM' },
        { label: 'Load Rating', value: 'CAT 5 HEAVY' }
      ],
      image: Industrial,
      applications: ['Centros logísticos', 'Plantas industriales', 'Galpones', 'Puertos y aeropuertos']
    }
  ];

  // ==========================================
  // 📦 MATERIALES ORGANIZADOS POR CATEGORÍA
  // ==========================================
  const materials: Material[] = [
    {
      id: 'CIEGA',
      name: 'Lamas Ciegas',
      description: 'Máxima privacidad y oscuridad total. Ideal para cerramientos que requieren bloqueo completo de luz.',
      image: lamasCiega,
      variants: [
        { color: 'Natural', hex: '#C0C0C0' },
        { color: 'Negro', hex: '#1a1a1a' },
        { color: 'Blanco', hex: '#f5f5f5' }
      ],
      specs: [
        { label: 'Opacidad', value: '100%' },
        { label: 'Espesor', value: '0.4mm' }
      ]
    },
    {
      id: 'PERFORADA',
      name: 'Lamas Perforadas',
      description: 'Ventilación controlada con privacidad. Perfecto para flujo de aire manteniendo seguridad.',
      image: lamasPerforadas,
      variants: [
        { color: 'Natural', hex: '#C0C0C0' },
        { color: 'Negro', hex: '#1a1a1a' },
        { color: 'Blanco', hex: '#f5f5f5' }
      ],
      specs: [
        { label: 'Perforación', value: '15%' },
        { label: 'Ventilación', value: 'Alta' }
      ]
    },
    {
      id: 'WINDOWS',
      name: 'Lamas Windows',
      description: 'Diseño arquitectónico con visibilidad controlada. Estética moderna para fachadas contemporáneas.',
      image: lamasWindows,
      variants: [
        { color: 'Natural', hex: '#C0C0C0' },
        { color: 'Negro', hex: '#1a1a1a' },
        { color: 'Blanco', hex: '#f5f5f5' }
      ],
      specs: [
        { label: 'Visibilidad', value: '30%' },
        { label: 'Estética', value: 'Premium' }
      ]
    }
  ];

  const methodology: MethodologyStep[] = [
    { icon: 'settings', title: 'Medición', desc: 'Relevamiento técnico' },
    { icon: 'architecture', title: 'Diseño', desc: 'Planos e ingeniería' },
    { icon: 'factory', title: 'Producción', desc: 'Fabricación propia' },
    { icon: 'build', title: 'Instalación', desc: 'Puesta en marcha' }
  ];

  // Schema para servicios
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "serviceType": service.division,
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Grupo Gregori"
        },
        "areaServed": "Argentina"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Servicios | Grupo Gregori - Cortinas Metálicas y Persianas Industriales</title>
        <meta 
          name="description" 
          content="Soluciones de cerramiento industrial: cortinas metálicas de alta resistencia, persianas de enrollar automatizadas, puertas rápidas de lona. 60+ años de experiencia en Argentina." 
        />
        <link rel="canonical" href="https://grupogregori.com.ar/servicios" />
        
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0a0a0a]">
        {/* Hero Header */}
        <header className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#111]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-wider mb-4 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              NUESTROS SERVICIOS
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <span className="h-px w-12 bg-[#E30613]"></span>
              <p className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase">Industrial Solutions Division</p>
              <span className="h-px w-12 bg-[#E30613]"></span>
            </div>
          </div>
        </header>

        {/* Services Sections */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {services.map((service: Service, serviceIndex: number) => (
            <section 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 group ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content={service.division} />
              <meta itemProp="name" content={service.title} />
              
              <div className={`${service.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#E30613]/20 to-transparent animate-pulse"></div>
                  <img 
                    alt={`${service.title} - ${service.division} por Grupo Gregori`}
                    className="w-full h-full object-cover  "
                    src={service.image}
                    loading={serviceIndex < 2 ? "eager" : "lazy"}
                    fetchPriority={serviceIndex < 2 ? "high" : "auto"}
                    decoding="async"
                    width="800"
                    height="500"
                  />
                  <div className={`absolute bottom-4 ${service.reverse ? 'right-4' : 'left-4'} font-mono text-[10px] text-[#E30613] bg-black/80 px-2 py-1`}>
                    SYS_AUTH_{service.id}
                  </div>
                </div>
              </div>
              
              <div className={`${service.reverse ? 'lg:order-1' : ''}`}>
                <span className="text-[#E30613] font-mono text-sm mb-4 block">{service.id} / {service.division}</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {service.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-lg" itemProp="description">
                  {service.description}
                </p>
                
                {/* Aplicaciones */}
                {service.applications && (
                  <div className="mb-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Aplicaciones</p>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, i) => (
                        <span key={i} className="text-xs bg-[#E30613]/10 text-[#E30613] px-2 py-1 border border-[#E30613]/30">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 font-mono">
                  {service.specs.map((spec: ServiceSpec, i: number) => (
                    <div key={i}>
                      <p className="text-[10px] text-slate-500 uppercase mb-1">{spec.label}</p>
                      <p className="text-lg font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </main>

        {/* Materials Catalog - 3 CATEGORÍAS CON VARIANTES DE COLOR */}
        <section className="bg-[#111] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-black tracking-wide mb-2 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                CATÁLOGO DE MATERIALES
              </h2>
              <p className="font-mono text-xs text-[#E30613] tracking-widest uppercase">
                3 Tipologías • 3 Colores cada una
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {materials.map((mat: Material) => (
                <div 
                  key={mat.id} 
                  className="group relative bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer"
                >
                  {/* Imagen principal que muestra los 3 colores */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={mat.image}
                      alt={`${mat.name} - Disponible en ${mat.variants.map(v => v.color).join(', ')}`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    {/* Badge de categoría */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E30613] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                        {mat.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Información del material */}
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {mat.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {mat.description}
                    </p>
                    
                    {/* Variantes de color */}
                    <div className="mb-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                        Disponible en
                      </p>
                      <div className="flex items-center gap-3">
                        {mat.variants.map((variant) => (
                          <div 
                            key={variant.color}
                            className="flex items-center gap-2 group/color"
                            title={variant.color}
                          >
                            <div 
                              className="w-8 h-8 rounded-full border-2 border-white/20 shadow-lg transition-transform group-hover/color:scale-110"
                              style={{ 
                                backgroundColor: variant.hex,
                                boxShadow: `0 0 0 2px #0a0a0a, 0 0 0 4px ${variant.hex}`
                              }}
                            ></div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase hidden group-hover/color:inline-block transition-all">
                              {variant.color}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Especificaciones técnicas */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      {mat.specs.map((spec, i) => (
                        <div key={i}>
                          <p className="text-[9px] font-mono text-slate-500 uppercase">{spec.label}</p>
                          <p className="text-sm font-bold text-white">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E30613] transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            {/* Leyenda de colores */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 font-mono uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C0C0C0] border border-white/20"></div>
                <span>Natural (Aluminio)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border border-white/20"></div>
                <span>Negro (Anodizado)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f5f5f5] border border-white/20"></div>
                <span>Blanco (Lacado)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black tracking-wide mb-16 text-center uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              METODOLOGÍA DE TRABAJO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {methodology.map((step: MethodologyStep, index: number) => (
                <div key={index} className="relative text-center group">
                  <div className="w-16 h-16 bg-[#141414] border border-white/10 mx-auto flex items-center justify-center mb-6 group-hover:border-[#E30613] transition-colors">
                    <span className="material-symbols-outlined text-3xl text-[#E30613] group-hover:rotate-90 transition-transform duration-500">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-black uppercase tracking-widest text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 uppercase font-mono">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Servicios;
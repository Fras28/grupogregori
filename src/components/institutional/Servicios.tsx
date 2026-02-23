import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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

interface Material {
  code: string;
  name: string;
  desc: string;
  opacity: number;
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRlRlAAQ1h-wSErIAOkCFhyXgSmNx69qEDKXE2hLAXe3TwiRuDw7bRn_LfSbzIPkn6G7NXmi1IJ9KLWLONtsD6xDg-JVZpDGHyopl_2k6_mNOIgjGJXUf0MYjtQstvul9_4cf6uymBZ5ysWFiYbDE6i7UOEMnEKSfScbpKW-kqKjr2SBxDy3ApM24-gvbxhmYyuji0D5KqdR-kuApmoMtEM_3gEZ0ie_atjei3OZDZgptV7mf2xtPlt6LwA-VCPf6m7JaZV-NLWCJ8',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SFvT9JLyIqs_6p3lrnSeM3QEyefDS2YNaIM-ogZqxAH7THAFq84Cr42Lk9U7pk0Ib3XzswoxPaVxXvDarZd7GiorHVUzUSVKWjSuEbRxdcaIuBvSfsI_WD-nhE3Ph4wq1NmEXW-Uwki516tOeO7W1gOcYjw3AWxkDXp3UdacuXycm2HUhJ5E3FiaodzrfvwEOIzvDpWFGAPV93AMxibSbL-4Fyebf43yQT66BPgkKeddwxqbACYpvT4bhkUg7h04nqWDe_06vJQW',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlD5Bv_GReRRTq9VwvzjT2OYl7OZF_vr_rIKwpCI1Ohy8G4IrHiDAadW0xBnD-_eUKyFtkUDnvC9wrXfI-fK7rgYJx2BLgno0ydcNBz_Dk5dqr9cV65NbJ1PeEx8jxQPbr1eP7Ale9BfwICICiiTa-tmsh7A0A1NDlzPOriPZSjCrjrF4XWVTj7t6OLBVZLvWPrXzBdzvdpmIJlr5nQXE_g7OT-sDPzRMshETIDpP0DS_jGGHil85tA4gSQCSyThHVZIbw3D0WClZb',
      applications: ['Centros logísticos', 'Plantas industriales', 'Galpones', 'Puertos y aeropuertos']
    }
  ];

  const materials: Material[] = [
    { code: 'MAT_BK_01', name: 'BLACKOUT', desc: '100% OPACITY', opacity: 30 },
    { code: 'MAT_SC_05', name: 'SCREEN 5%', desc: 'THERMAL REG', opacity: 50 },
    { code: 'MAT_VN_09', name: 'VINYL COATED', desc: 'HIGH DURABILITY', opacity: 20 },
    { code: 'MAT_AC_02', name: 'ACOUSTIC', desc: 'NOISE REDUCTION', opacity: 60 },
    { code: 'MAT_FR_11', name: 'FIRE RETARDANT', desc: 'CLASS A CERT', opacity: 40 },
    { code: 'MAT_PF_04', name: 'PERFORATED', desc: 'AIR FLOW MAX', opacity: 30 }
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
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
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

        {/* Materials Catalog */}
        <section className="bg-[#111] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-black tracking-wide mb-2 uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                CATÁLOGO DE MATERIALES
              </h2>
              <p className="font-mono text-xs text-[#E30613] tracking-widest uppercase">Weave Textures & Technical Specs</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {materials.map((mat: Material, index: number) => (
                <div key={index} className="group relative aspect-square bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer">
                  <div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                      backgroundSize: '4px 4px'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-[#E30613]/0 group-hover:bg-[#E30613]/40 transition-all flex items-center justify-center p-4">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-all">
                      <p className="font-bold text-sm">{mat.name}</p>
                      <p className="text-[10px] font-mono">{mat.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500">{mat.code}</div>
                </div>
              ))}
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
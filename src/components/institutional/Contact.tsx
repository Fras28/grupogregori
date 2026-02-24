import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tipo: string;
  detalles: string;
  empresa?: string;
  ubicacion?: string;
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'PERSIANAS DE ENROLLAR',
    detalles: '',
    empresa: '',
    ubicacion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Contacto | Grupo Gregori - Solicitar Presupuesto';
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío - reemplazar con tu API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        tipo: 'PERSIANAS DE ENROLLAR',
        detalles: '',
        empresa: '',
        ubicacion: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: 'location_on',
      title: 'Taller,',
      content: 'Remedios de Escalada 1339 - Punta Alta, Buenos Aires, Argentina',
      link: 'https://maps.app.goo.gl/Uo6E4GX4wAmiJbDG6',
      linkText: 'Ver en mapa'
    },
    {
      icon: 'location_on',
      title: 'Oficina Comercial',
      content: 'Av. Colon 731 - Punta Alta, Buenos Aires, Argentina',
      link: 'https://maps.app.goo.gl/kjUL9cguPEqDBCkX7',
      linkText: 'Ver en mapa'
    },
    {
      icon: 'call',
      title: 'Atención Comercial',
      content: '+54 293 244-0630',
      link: 'tel:+542932440630',
      linkText: 'Llamar ahora'
    },
    {
      icon: 'mail',
      title: 'Consultas Técnicas',
      content: 'herreria.gregori@gmail.com',
      link: 'mailto:herreria.gregori@gmail.com',
      linkText: 'Enviar email'
    },
    {
      icon: 'schedule',
      title: 'Horario de Taller',
      content: 'Lun a Vie: 08:30 - 16:30hs'
    },
    {
      icon: 'schedule',
      title: 'Horario de Atencion Comercial',
      content: 'Lun a Vie: 08:30 - 16:30hs\nSábados: 09:00 - 13:00hs'
    }
  ];

  // FAQs optimizadas para IA (GEO - Generative Engine Optimization)
  const faqs: FAQ[] = [
    {
      question: '¿Cuál es el plazo de entrega para cortinas metálicas industriales?',
      answer: 'Nuestro ciclo estándar de producción es de 15 a 20 días hábiles para cortinas metálicas estándar. Proyectos de gran escala o cortinas metálicas especiales se programan mediante un cronograma de hitos técnicos personalizado. Contamos con planta de fabricación propia en Berazategui, Buenos Aires, lo que nos permite controlar los tiempos de entrega y garantizar la calidad en cada etapa del proceso.'
    },
    {
      question: '¿Qué certificaciones de seguridad tienen las persianas industriales Grupo Gregori?',
      answer: 'Cumplimos rigurosamente con las normativas de seguridad e higiene industrial vigentes en Argentina. Todos nuestros sistemas motorizados incluyen sistemas anti-aplastamiento certificados, paradas de emergencia y dispositivos de seguridad según norma IRAM. Ofrecemos garantía extendida de 2 años en todos nuestros productos con servicio técnico incluido.'
    },
    {
      question: '¿Realizan instalación de cortinas metálicas en todo Argentina?',
      answer: 'Sí, desplegamos equipos técnicos especializados en todo el territorio nacional. Nuestra base operativa está en Berazategui, Buenos Aires (Zona Sur), desde donde coordinamos instalaciones de cortinas metálicas, persianas industriales y puertas rápidas en todo el país, incluyendo Córdoba, Rosario, Mendoza y provincias del interior.'
    },
    {
      question: '¿Qué mantenimiento requieren las persianas industriales de enrollar?',
      answer: 'Ofrecemos planes de mantenimiento programado (Trimestral/Semestral/Anual) para garantizar la operatividad 24/7 de sus accesos y evitar paradas de producción imprevistas. El mantenimiento incluye lubricación de componentes, ajuste de tensión, revisión de sistemas de seguridad, control de motores y reemplazo preventivo de piezas de desgaste.'
    },
    {
      question: '¿Emiten certificados de instalación para habilitaciones municipales?',
      answer: 'Sí, proporcionamos toda la documentación técnica requerida para habilitaciones municipales y certificaciones de seguridad. Incluimos planos de instalación, memoria técnica, certificados de conformidad y documentación de garantía. Nuestros técnicos están habilitados para realizar instalaciones en todo el territorio nacional.'
    }
  ];

  // Schema.org para página de contacto
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto | Grupo Gregori",
    "description": "Solicite presupuesto para cortinas metálicas, persianas industriales y cerramientos. Atención en 24 horas.",
    "url": "https://grupogregori.com.ar/contacto",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grupo Gregori",
      "telephone": "+54-11-4567-8900",
      "email": "ventas@grupogregori.com.ar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Parque Industrial",
        "addressLocality": "Berazategui",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ]
    }
  };

  // Schema FAQPage para IA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Grupo Gregori - Solicitar Presupuesto en 24hs</title>
        <meta
          name="description"
          content="Solicite presupuesto para cortinas metálicas, persianas industriales y puertas rápidas. Atención personalizada en Buenos Aires y todo Argentina. Presupuesto en 24 horas."
        />
        <link rel="canonical" href="https://grupogregori.com.ar/contacto" />

        {/* Open Graph */}
        <meta property="og:title" content="Contacto | Grupo Gregori - Solicitar Presupuesto" />
        <meta property="og:description" content="Solicite presupuesto para cortinas metálicas y persianas industriales. Atención en 24hs." />
        <meta property="og:url" content="https://grupogregori.com.ar/contacto" />
        <meta property="og:type" content="website" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0a0a0a] min-h-screen pt-20">
        {/* Header */}
        <header className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-10">
                <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black uppercase leading-[0.85] tracking-tighter">
                  Hablemos de <br />
                  <span className="text-[#E30613]">tu proyecto</span>
                </h1>
                <div className="mt-12 w-24 h-2 bg-[#E30613]"></div>
                <p className="mt-10 text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                  Ingeniería de vanguardia en cerramientos industriales. <br className="hidden md:block" />
                  Soluciones de alto rendimiento para el mercado argentino.
                </p>

                {/* Trust badges */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="material-symbols-outlined text-[#E30613]">verified</span>
                    Presupuesto en 24hs
                  </span>
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="material-symbols-outlined text-[#E30613]">local_shipping</span>
                    Instalación en todo el país
                  </span>
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="material-symbols-outlined text-[#E30613]">workspace_premium</span>
                    60+ años de trayectoria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
            {/* Left Column - Contact Info */}
            <div className="col-span-12 lg:col-span-5 space-y-12">
              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((item: ContactInfo, index: number) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="bg-[#E30613] w-12 h-12 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-black uppercase tracking-widest text-[10px] text-[#E30613] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-bold text-lg leading-tight whitespace-pre-line text-white">
                        {item.content}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          className="text-xs text-slate-400 hover:text-[#E30613] transition-colors mt-2 inline-block underline underline-offset-4"
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.linkText} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/541145678900"
                className="flex items-center justify-between bg-[#121212] border border-white/10 p-6 group hover:border-[#E30613] transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <a
                  href="https://wa.me/5492932440630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-6 cursor-pointer"
                >
                  <div className="bg-[#25D366] p-3 rounded-full">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-[#E30613] transition-colors">
                      Respuesta Inmediata
                    </p>
                    <p className="text-lg font-black uppercase text-white">Canal de WhatsApp</p>
                  </div>
                </a>
                <span className="material-symbols-outlined text-slate-700 group-hover:text-white transition-colors">
                  arrow_forward
                </span>
              </a>

             

              {/* Location Image */}
              <div className="relative w-full aspect-[21/9] bg-[#141414] border border-white/5 overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  alt="Ubicación Parque Industrial Berazategui - Grupo Gregori"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlRlAAQ1h-wSErIAOkCFhyXgSmNx69qEDKXE2hLAXe3TwiRuDw7bRn_LfSbzIPkn6G7NXmi1IJ9KLWLONtsD6xDg-JVZpDGHyopl_2k6_mNOIgjGJXUf0MYjtQstvul9_4cf6uymBZ5ysWFiYbDE6i7UOEMnEKSfScbpKW-kqKjr2SBxDy3ApM24-gvbxhmYyuji0D5KqdR-kuApmoMtEM_3gEZ0ie_atjei3OZDZgptV7mf2xtPlt6LwA-VCPf6m7JaZV-NLWCJ8"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="343"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                  <div className="bg-[#E30613] p-2">
                    <span className="material-symbols-outlined text-white">map</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    Sede Industrial Central
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative bg-[#141414] border border-white/5 p-8 md:p-12">
                {/* Bracket corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E30613]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E30613]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E30613]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E30613]"></div>

                <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">
                  Solicitar <span className="text-[#E30613]">Presupuesto</span>
                </h2>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-none">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                      <p className="text-emerald-400 font-bold">
                        ¡Solicitud enviada! Nos contactaremos en menos de 24 horas.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-none">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-500">error</span>
                      <p className="text-red-400 font-bold">
                        Hubo un error. Por favor intente nuevamente o contáctenos por teléfono.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Nombre y Empresa */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                        placeholder="Ej: Juan Gregori"
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="empresa"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Empresa / Obra
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        name="empresa"
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                        placeholder="Ej: Constructora ABC"
                        value={formData.empresa}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Teléfono y Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="telefono"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Teléfono *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        name="telefono"
                        required
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                        placeholder="+54 11 4567-8900"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                        placeholder="email@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 3: Tipo y Ubicación */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="tipo"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Tipo de Requerimiento *
                      </label>
                      <select
                        id="tipo"
                        name="tipo"
                        required
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none appearance-none"
                        value={formData.tipo}
                        onChange={handleChange}
                      >
                        <option value="PERSIANAS DE ENROLLAR">PERSIANAS DE ENROLLAR</option>
                        <option value="CORTINAS METÁLICAS">CORTINAS METÁLICAS</option>
                        <option value="PUERTAS RÁPIDAS">PUERTAS RÁPIDAS</option>
                        <option value="CERRAMIENTOS INDUSTRIALES">CERRAMIENTOS INDUSTRIALES</option>
                        <option value="SELLÓ DE ANDÉN">SELLÓ DE ANDÉN</option>
                        <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                        <option value="REPUESTOS">REPUESTOS</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="ubicacion"
                        className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                      >
                        Ubicación de la Obra
                      </label>
                      <input
                        id="ubicacion"
                        type="text"
                        name="ubicacion"
                        className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                        placeholder="Ej: Berazategui, Buenos Aires"
                        value={formData.ubicacion}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Detalles */}
                  <div className="space-y-2">
                    <label
                      htmlFor="detalles"
                      className="block text-[10px] font-black uppercase tracking-widest text-slate-500"
                    >
                      Detalles del Proyecto
                    </label>
                    <textarea
                      id="detalles"
                      name="detalles"
                      rows={4}
                      className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none resize-none"
                      placeholder="Medidas aproximadas, cantidad de unidades, tipo de uso (industrial/comercial), requerimientos especiales..."
                      value={formData.detalles}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Documentación Técnica (Opcional)
                    </label>
                    <div className="relative border-2 border-[#262626] border-dashed hover:border-[#E30613] transition-colors group">
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label="Subir archivos"
                        accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
                      />
                      <div className="flex flex-col items-center justify-center py-8">
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-[#E30613] transition-colors mb-2">
                          upload_file
                        </span>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Subir planos o fotos (PDF, JPG, PNG, DWG)
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Máximo 10MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E30613] text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:bg-red-700 transition-all flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin material-symbols-outlined">sync</span>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    Al enviar, acepta nuestra política de privacidad.
                    Respondemos en menos de 24 horas hábiles.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* FAQ Section - SEO para IA */}
        <section
          className="bg-[#141414] py-32 border-y border-white/5"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-black uppercase mb-4 tracking-tighter">
                Consultas <span className="text-[#E30613]">Técnicas</span>
              </h2>
              <p className="text-slate-400">
                Respuestas a las preguntas más frecuentes sobre nuestros productos y servicios
              </p>
            </div>

            <div className="space-y-1">
              {faqs.map((faq: FAQ, index: number) => (
                <details
                  key={index}
                  className="group bg-[#0a0a0a] border border-white/5 overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="flex justify-between items-center p-8 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="text-sm font-black uppercase tracking-widest text-white" itemProp="name">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#E30613] text-2xl font-black group-open:rotate-45 transition-transform duration-200">
                      add
                    </span>
                  </summary>
                  <div
                    className="px-8 pb-8 text-slate-400 text-sm leading-relaxed font-medium"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {faq.answer}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* CTA adicional */}
            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-4">¿No encontró respuesta a su consulta?</p>
              <a
                href="tel:+541145678900"
                className="inline-flex items-center gap-2 text-[#E30613] font-black uppercase tracking-widest hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">phone</span>
                Llámenos: +54 11 4567-8900
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
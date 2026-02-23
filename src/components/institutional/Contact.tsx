import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
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
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'PERSIANAS DE ENROLLAR',
    detalles: ''
  });

  useEffect(() => {
    document.title = 'Contacto | Grupo Gregori - Solicitar Presupuesto';
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: 'location_on',
      title: 'Ubicación Estratégica',
      content: 'Parque Industrial, Berazategui\nBuenos Aires, Argentina'
    },
    {
      icon: 'call',
      title: 'Atención Comercial',
      content: '+54 11 4567-8900'
    },
    {
      icon: 'mail',
      title: 'Consultas',
      content: 'ventas@grupogregori.com.ar'
    },
    {
      icon: 'schedule',
      title: 'Operaciones',
      content: 'Lun a Vie: 08:00 - 18:00hs'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: '¿Cobertura de servicio en Argentina?',
      answer: 'Desplegamos equipos técnicos especializados en todo el territorio nacional, con base operativa en Buenos Aires para grandes obras industriales y logísticas.'
    },
    {
      question: '¿Plazos de fabricación y entrega?',
      answer: 'Nuestro ciclo estándar de producción es de 15 a 20 días hábiles. Proyectos de gran escala se programan mediante un cronograma de hitos técnicos.'
    },
    {
      question: '¿Certificaciones de seguridad?',
      answer: 'Cumplimos rigurosamente con las normativas de seguridad e higiene industrial vigentes. Todos nuestros sistemas motorizados incluyen sistemas anti-aplastamiento y paradas de emergencia.'
    },
    {
      question: '¿Mantenimiento preventivo?',
      answer: 'Ofrecemos planes de mantenimiento programado (Trimestral/Semestral) para garantizar la operatividad 24/7 de sus accesos y evitar paradas de producción imprevistas.'
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-20">
      {/* Header */}
      <header className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10">
              <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black uppercase leading-[0.85] tracking-tighter">
                Hablemos de <br/>
                <span className="text-[#E30613] ">tu proyecto</span>
              </h1>
              <div className="mt-12 w-24 h-2 bg-[#E30613]"></div>
              <p className="mt-10 text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                Ingeniería de vanguardia en cerramientos industriales. <br className="hidden md:block"/>
                Soluciones de alto rendimiento para el mercado argentino.
              </p>
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
                    <h3 className="font-black uppercase tracking-widest text-[10px] text-[#E30613] mb-2">{item.title}</h3>
                    <p className="font-bold text-lg leading-tight whitespace-pre-line">{item.content}</p>
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
            >
              <div className="flex items-center space-x-6">
                <div className="bg-[#25D366] p-3 rounded-full">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-[#E30613] transition-colors">Respuesta Inmediata</p>
                  <p className="text-lg font-black uppercase">Canal de WhatsApp</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-700 group-hover:text-white transition-colors">arrow_forward</span>
            </a>

            {/* Location Image */}
            <div className="relative w-full aspect-[21/9] bg-[#141414] border border-white/5 overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                alt="Ubicación Industrial" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlRlAAQ1h-wSErIAOkCFhyXgSmNx69qEDKXE2hLAXe3TwiRuDw7bRn_LfSbzIPkn6G7NXmi1IJ9KLWLONtsD6xDg-JVZpDGHyopl_2k6_mNOIgjGJXUf0MYjtQstvul9_4cf6uymBZ5ysWFiYbDE6i7UOEMnEKSfScbpKW-kqKjr2SBxDy3ApM24-gvbxhmYyuji0D5KqdR-kuApmoMtEM_3gEZ0ie_atjei3OZDZgptV7mf2xtPlt6LwA-VCPf6m7JaZV-NLWCJ8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                <div className="bg-[#E30613] p-2">
                  <span className="material-symbols-outlined text-white">map</span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em]">Sede Industrial Central</span>
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
                Solicitar <span className="text-[#E30613] ">Presupuesto</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Nombre Completo</label>
                    <input 
                      type="text"
                      name="nombre"
                      className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                      placeholder="EJ: JUAN GREGORI"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Teléfono Corporativo</label>
                    <input 
                      type="tel"
                      name="telefono"
                      className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                      placeholder="+54 11 ..."
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Email Empresa</label>
                    <input 
                      type="email"
                      name="email"
                      className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none"
                      placeholder="EMAIL@EMPRESA.COM"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Tipo de Requerimiento</label>
                    <select 
                      name="tipo"
                      className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none appearance-none"
                      value={formData.tipo}
                      onChange={handleChange}
                    >
                      <option>PERSIANAS DE ENROLLAR</option>
                      <option>CORTINAS METÁLICAS</option>
                      <option>PUERTAS RÁPIDAS</option>
                      <option>CERRAMIENTOS INDUSTRIALES</option>
                      <option>MANTENIMIENTO</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Detalles del Proyecto</label>
                  <textarea 
                    name="detalles"
                    rows={4}
                    className="w-full bg-[#0a0a0a] border-[#262626] p-4 text-sm text-white placeholder-slate-600 focus:ring-[#E30613] focus:border-[#E30613] transition-all duration-200 outline-none resize-none"
                    placeholder="MEDIDAS ESTIMADAS, CANTIDAD, UBICACIÓN DE OBRA..."
                    value={formData.detalles}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Documentación Técnica (Opcional)</label>
                  <div className="relative border-2 border-[#262626] border-dashed hover:border-[#E30613] transition-colors group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" aria-label="Subir archivos"/>
                    <div className="flex flex-col items-center justify-center py-8">
                      <span className="material-symbols-outlined text-slate-600 group-hover:text-[#E30613] transition-colors mb-2">upload_file</span>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Subir planos o fotos (PDF, JPG, PNG)</p>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E30613] text-white py-6 font-black uppercase tracking-[0.3em] text-sm hover:bg-red-700 transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Enviar Solicitud</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="bg-[#141414] py-32 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black uppercase mb-16 tracking-tighter text-center">
            Consultas <span className="text-[#E30613] ">Técnicas</span>
          </h2>
          
          <div className="space-y-1">
            {faqs.map((faq: FAQ, index: number) => (
              <details key={index} className="group bg-[#0a0a0a] border border-white/5 overflow-hidden">
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none hover:bg-white/5 transition-colors">
                  <span className="text-sm font-black uppercase tracking-widest">{faq.question}</span>
                  <span className="material-symbols-outlined text-[#E30613] text-2xl font-black group-open:rotate-45 transition-transform duration-200">add</span>
                </summary>
                <div className="px-8 pb-8 text-slate-400 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
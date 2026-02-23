// Schema para empresa industrial B2B con múltiples ubicaciones
export const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grupo Gregori",
    "alternateName": "Grupo Gregori - Ingeniería en Cerramientos Industriales",
    "url": "https://grupogregori.com.ar",
    "logo": "https://grupogregori.com.ar/logo.png",
    "description": "Líderes en ingeniería de cerramientos industriales desde 1962. Cortinas metálicas, persianas industriales, puertas rápidas y cerramientos para industria argentina.",
    "foundingDate": "1962",
    "sameAs": [
      "https://www.linkedin.com/company/grupo-gregori",
      "https://www.instagram.com/grupogregori"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Ventas",
      "telephone": "+54-11-4567-8900",
      "areaServed": "AR",
      "availableLanguage": "Spanish",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Parque Industrial, Berazategui",
      "addressLocality": "Berazategui",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluciones de Cerramiento Industrial",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cortinas Metálicas Industriales",
            "description": "Sistemas de alta resistencia para protección perimetral industrial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Persianas Industriales de Enrollar",
            "description": "Automatización y control para accesos de gran envergadura"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Puertas Rápidas de Lona",
            "description": "Soluciones de alta velocidad para flujo logístico continuo"
          }
        }
      ]
    }
  });
  
  // Schema para servicios específicos
  export const generateServiceSchema = (service: {
    title: string;
    description: string;
    url: string;
    image?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Grupo Gregori"
    },
    "description": service.description,
    "url": service.url,
    "image": service.image,
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    }
  });
  
  // Schema para proyectos/case studies (Galería)
  export const generateProjectSchema = (project: {
    title: string;
    description: string;
    category: string;
    image: string;
    dateCompleted?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "genre": project.category,
    "image": project.image,
    "dateCreated": project.dateCompleted,
    "creator": {
      "@type": "Organization",
      "name": "Grupo Gregori"
    }
  });
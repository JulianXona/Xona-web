import XONA from '../lib/data';

// ─────────────────────────────────────────────────────────────
//  JSON-LD — Datos estructurados para Google, Bing y AEO
//  (lo que leen las IAs como ChatGPT, Perplexity, Gemini)
//
//  Se inyectan en el <head> de cada página invisibles al usuario
//  pero legibles por todos los motores de búsqueda e IA.
// ─────────────────────────────────────────────────────────────

// Datos de la organización — va en TODAS las páginas
export function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": "https://xona.com.ar/#organization",
    "name": "Xona",
    "alternateName": ["Xona Marketing", "Xona Experiencias"],
    "url": "https://xona.com.ar",
    "logo": "https://xona.com.ar/logo.png",
    "image": "https://xona.com.ar/og-image.jpg",
    "description": "Agencia de marketing de experiencias con más de 20 años de trayectoria. Diseñamos, producimos y orquestamos eventos corporativos, branded content, programas de relacionamiento y estrategias digitales en Argentina, Chile e Italia.",
    "foundingDate": "2005",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 40 },
    "email": XONA.global.email,
    "telephone": XONA.global.telefonos["Buenos Aires"],
    "areaServed": [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Chile" },
      { "@type": "Country", "name": "Italia" }
    ],
    "knowsAbout": [
      "Marketing de experiencias",
      "Eventos corporativos",
      "Branded content",
      "Producción de eventos",
      "Programas de relacionamiento",
      "Travel experience",
      "PR y comunicación",
      "Estrategia digital",
      "Activaciones de marca",
      "Eventos en La Rural Buenos Aires",
      "Eventos en Patagonia",
      "Eventos virtuales",
      "Incentivos corporativos",
      "Loyalty programs"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Xona",
      "itemListElement": XONA.servicios.map((s, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.titulo,
          "description": s.bajada,
          "serviceType": s.titulo
        }
      }))
    },
    "location": [
      {
        "@type": "Place",
        "name": "Xona Buenos Aires",
        "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" },
        "telephone": XONA.global.telefonos["Buenos Aires"]
      },
      {
        "@type": "Place",
        "name": "Xona Bariloche",
        "address": { "@type": "PostalAddress", "addressLocality": "Bariloche", "addressRegion": "Río Negro", "addressCountry": "AR" },
        "telephone": XONA.global.telefonos["Bariloche"]
      },
      {
        "@type": "Place",
        "name": "Xona Santiago",
        "address": { "@type": "PostalAddress", "addressLocality": "Santiago", "addressCountry": "CL" },
        "telephone": XONA.global.telefonos["Santiago"]
      },
      {
        "@type": "Place",
        "name": "Xona Roma",
        "address": { "@type": "PostalAddress", "addressLocality": "Roma", "addressCountry": "IT" },
        "telephone": XONA.global.telefonos["Roma"]
      }
    ],
    "sameAs": [
      XONA.global.redes.LinkedIn,
      XONA.global.redes.Instagram,
      XONA.global.redes.Facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Datos de un caso específico — va en cada página /caso/[id]
export function JsonLdCase({ caso }) {
  if (!caso) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": caso.titulo,
    "description": caso.larga,
    "about": caso.corta,
    "creator": {
      "@type": "Organization",
      "name": "Xona",
      "@id": "https://xona.com.ar/#organization"
    },
    "client": caso.cliente,
    "dateCreated": caso.year,
    "locationCreated": {
      "@type": "Place",
      "name": caso.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": caso.ciudad,
        "addressCountry": caso.pais === "Argentina" ? "AR" : caso.pais === "Chile" ? "CL" : caso.pais === "Italia" ? "IT" : caso.pais
      }
    },
    "genre": caso.tipo,
    "keywords": caso.keywords ? caso.keywords.join(", ") : caso.tags.join(", "),
    "audience": {
      "@type": "Audience",
      "audienceType": caso.audiencia
    },
    "image": caso.hero,
    "url": `https://xona.com.ar/caso/${caso.id}`
  };

  // Si hay asistentes, los agrega
  if (caso.asistentes) {
    schema.attendeeCount = caso.asistentes;
  }

  // Si es un evento, agrega tipo Event además
  if (caso.tags.includes("Eventos")) {
    const eventSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": caso.titulo,
      "description": caso.corta,
      "organizer": {
        "@type": "Organization",
        "name": "Xona",
        "@id": "https://xona.com.ar/#organization"
      },
      "location": {
        "@type": "Place",
        "name": caso.venue,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": caso.ciudad,
          "addressCountry": caso.pais === "Argentina" ? "AR" : "CL"
        }
      },
      "startDate": caso.year,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": caso.formato === "Virtual"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
      "image": caso.hero,
      "keywords": caso.keywords ? caso.keywords.join(", ") : ""
    };
    if (caso.asistentes) eventSchema.maximumAttendeeCapacity = caso.asistentes;

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList — ayuda a Google a entender la estructura del sitio
export function JsonLdBreadcrumb({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `https://xona.com.ar${item.path}`
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema — muy útil para aparecer en respuestas de IAs
// Agregá preguntas reales que los clientes hacen a Xona
export function JsonLdFaq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es Xona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xona es una agencia de marketing de experiencias fundada en 2005, con oficinas en Buenos Aires, Bariloche, Santiago de Chile y Roma. Diseña, produce y orquesta eventos corporativos, branded content, programas de relacionamiento y estrategias digitales para marcas líderes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios ofrece Xona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xona ofrece cuatro disciplinas: Digital Hub (estrategia digital, social media, web), Branded Content & Producción (eventos, lanzamientos, activaciones, travel experience), Solución Integral (programas de relacionamiento, incentivos, loyalty) y PR & Comunicación (reputación, media relations, crisis management)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Xona organiza eventos en La Rural de Buenos Aires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Xona tiene experiencia produciendo eventos en los principales venues de Buenos Aires, incluyendo La Rural, Centro Costa Salguero, Puerto Madero y Palermo. También opera en Patagonia, Santiago de Chile y Roma."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos años de experiencia tiene Xona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xona fue fundada en 2005 y cuenta con más de 20 años de trayectoria en marketing de experiencias, con más de 150 clientes y más de 1.200 experiencias producidas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Xona trabaja con eventos virtuales e híbridos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Xona produjo eventos virtuales de escala global, como SAPPHIRE 2020 de SAP con 30.000 asistentes de todo el mundo. Tiene capacidad para eventos presenciales, virtuales e híbridos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo contactar a Xona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por email a hola@xona.com.ar, por teléfono al +54 (11) 4733-0700 (Buenos Aires) o a través del formulario de contacto en xona.com.ar/contacto."
        }
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

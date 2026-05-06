// XONA — contenido. Editable directo.
const XONA = {
  global: {
    nombre: "Xona",
    tagline: "Marketing de experiencias",
    email: "hola@xona.com.ar",
    telefonos: {
      "Buenos Aires": "+54 (11) 4733-0700",
      "Bariloche":    "+54 (294) 444-1712",
      "Santiago":     "+56 (2) 2981-1174",
      "Roma":         "+39 (06) 615-2371"
    },
    redes: {
      LinkedIn:  "https://www.linkedin.com/company/xona/",
      Instagram: "https://www.instagram.com/xonaok/",
      Facebook:  "https://www.facebook.com/xonaar"
    }
  },

  servicios: [
    {
      id: "digital", n: "01", titulo: "Digital Hub",
      bajada: "Estrategia digital de punta a punta.",
      items: ["Content & Inbound","Estrategia de contenidos","Social Media","Web & UX/UI","Reputación online","Email marketing","Consultoría estratégica"]
    },
    {
      id: "branded", n: "02", titulo: "Branded Content & Producción",
      bajada: "Marca, evento, audiencia. La narrativa entera.",
      items: ["Lanzamientos","Eventos & convenciones","Activaciones","Travel design experience","Audiovisuales · Diseño · Redacción","Storytelling & Brand ID"]
    },
    {
      id: "solucion", n: "03", titulo: "Solución Integral",
      bajada: "Programas que conectan negocio con personas.",
      items: ["Programas de relacionamiento","Incentivos","Loyalty & Rewards","Trade Mkt & Retail Solution"]
    },
    {
      id: "pr", n: "04", titulo: "PR & Comunicación",
      bajada: "Reputación, voceros, relaciones públicas.",
      items: ["Reputación & Brand PR","Media relations","Media training & coaching","Media audit","Crisis management","Business relations"]
    }
  ],

  casos: [
    {
      id: "sapphire-2020",
      titulo: "SAPPHIRE 2020",
      cliente: "SAP",
      year: "2020",
      corta: "El global main event de SAP, reproducido a nivel virtual con la misma intensidad. 30.000 asistentes alrededor del mundo.",
      larga: "El desafío de 2020 fue conservar la impronta única del evento y reproducirla en un entorno virtual de excelencia. Equipo interdisciplinario, curaduría de contenidos, capacitación de oradores y producción de contenido exclusivo. SAPPHIRE NOW siguió siendo el evento más convocante de su industria.",
      tags: ["Eventos","Digital"],
      color: "#3B5998",
      venue: "Virtual — Global",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Evento corporativo",
      formato: "Virtual",
      audiencia: "B2B",
      industria: "Tecnología / Software empresarial",
      asistentes: 30000,
      keywords: [
        "evento virtual corporativo","SAP SAPPHIRE","conferencia tecnología virtual",
        "producción evento online","agencia eventos digitales Argentina",
        "event marketing B2B","virtual event production"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1540304453527-62f979142a17?w=1200&q=80",
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
      ]
    },
    {
      id: "juntos-sudamerica",
      titulo: "JUNTOS POR SUDAMÉRICA",
      cliente: "CONMEBOL",
      year: "2020",
      corta: "Una organización de más de 100 años uniendo 10 países a través del fútbol — incluso cuando el juego se detuvo.",
      larga: "El desafío fue fortalecer la unión sudamericana en el año en que el juego se detuvo, pero los fans nos necesitaron más que nunca.",
      tags: ["Branded Content","Digital"],
      color: "#3DAA52",
      venue: "Multiplataforma digital",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Campaña branded content",
      formato: "Digital / Multiplataforma",
      audiencia: "B2C",
      industria: "Deporte / Fútbol",
      asistentes: null,
      keywords: [
        "branded content fútbol","CONMEBOL campaña digital","contenido deportivo Sudamérica",
        "agencia branded content Buenos Aires","marketing deportivo Argentina",
        "campaña fútbol latinoamérica","content marketing deporte"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=1200&q=80",
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80",
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80"
      ]
    },
    {
      id: "mujeres-historia",
      titulo: "MUJERES QUE CAMBIAN LA HISTORIA",
      cliente: "AVON",
      year: "2021",
      corta: "Alzamos la voz de mujeres emblemáticas de la historia argentina como core de un lanzamiento.",
      larga: "Una campaña que puso en valor el legado de mujeres que transformaron la historia argentina, conectando emocionalmente con las audiencias en una fecha clave.",
      tags: ["Branded Content","PR"],
      color: "#D44C7A",
      venue: "Multiplataforma — Buenos Aires",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Campaña de lanzamiento",
      formato: "Presencial + Digital",
      audiencia: "B2C",
      industria: "Belleza / Consumo masivo",
      asistentes: null,
      keywords: [
        "campaña lanzamiento producto belleza","PR campaña feminismo Argentina",
        "branded content género diversidad","agencia PR Buenos Aires",
        "lanzamiento marca consumo masivo","campaña 8M Argentina",
        "storytelling marcas belleza"
      ],
      _presupuesto: "medio",
      hero: "images/casos/avon/hero.jpg",
      cover: "images/casos/avon/cover.jpg",
      bg: "images/casos/avon/bg.jpg",
      video: "https://www.youtube.com/embed/-zETfrlwUrg?rel=0&modestbranding=1&showinfo=0",
      gallery: [
        "images/casos/avon/gallery-1.jpg","images/casos/avon/gallery-2.jpg",
        "images/casos/avon/gallery-3.jpg","images/casos/avon/gallery-4.jpg",
        "images/casos/avon/gallery-5.jpg","images/casos/avon/gallery-6.jpg",
        "images/casos/avon/gallery-7.jpg"
      ]
    },
    {
      id: "samsung-house",
      titulo: "SAMSUNG HOUSE",
      cliente: "Samsung",
      year: "2019",
      corta: "El primer flagship físico de Samsung en el país. Un antes y un después en cómo la marca se relaciona con sus clientes.",
      larga: "Un espacio único que marcó un antes y un después en la forma en que Samsung se relaciona con sus clientes en Argentina.",
      tags: ["Eventos","Branded Content"],
      color: "#1428A0",
      venue: "Palermo, Buenos Aires",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Flagship store / Activación de marca",
      formato: "Presencial",
      audiencia: "B2C",
      industria: "Tecnología / Consumer electronics",
      asistentes: null,
      keywords: [
        "flagship store producción Buenos Aires","activación de marca tecnología",
        "Samsung House Argentina","experiencia de marca retail",
        "agencia activaciones Buenos Aires","brand experience retail Argentina",
        "producción espacios de marca"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
      ]
    },
    {
      id: "retail-safari",
      titulo: "RETAIL SAFARI",
      cliente: "Zurich Santander",
      year: "2019",
      corta: "Un recorrido a medida por los mejores ejemplos de retail en Londres, para una audiencia selecta.",
      larga: "Una experiencia diseñada para despertar la curiosidad y la visión estratégica de los participantes a través de los mejores ejemplos de retail en Londres.",
      tags: ["Travel","Eventos"],
      color: "#003DA5",
      venue: "Londres, Reino Unido",
      ciudad: "Londres",
      pais: "Reino Unido",
      tipo: "Travel experience / Programa de relacionamiento",
      formato: "Presencial — Internacional",
      audiencia: "B2B",
      industria: "Seguros / Finanzas",
      asistentes: null,
      keywords: [
        "travel experience corporativo","programa relacionamiento ejecutivos",
        "incentivo viaje Londres","agencia travel design Argentina",
        "experiencia retail internacional","programa incentivos empresas",
        "viaje corporativo Londres","travel marketing B2B"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1200&q=80",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80"
      ]
    },
    {
      id: "luxury-congress",
      titulo: "LUXURY CONGRESS",
      cliente: "Kérastase",
      year: "2018",
      corta: "Tradujimos la esencia de un nuevo producto en una experiencia sensorial completa.",
      larga: "Diseñamos y produjimos un evento que tradujo la esencia del producto en una experiencia sensorial completa para los profesionales del sector.",
      tags: ["Eventos","Producción"],
      color: "#A77C3A",
      venue: "Buenos Aires",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Congreso / Evento de lanzamiento",
      formato: "Presencial",
      audiencia: "B2B",
      industria: "Belleza / Cuidado del cabello",
      asistentes: null,
      keywords: [
        "congreso belleza Buenos Aires","evento lanzamiento producto profesional",
        "producción evento luxury","agencia eventos belleza Argentina",
        "experiencia sensorial marca","congreso profesionales peluquería"
      ],
      _presupuesto: "medio",
      hero: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80"
      ]
    },
    {
      id: "tenemos-sueno",
      titulo: "TENEMOS UN SUEÑO",
      cliente: "Accenture",
      year: "2018",
      corta: "Inauguramos un edificio corporativo llevando a los invitados a Marte.",
      larga: "Una experiencia inmersiva que transformó la inauguración de un edificio corporativo en un viaje al futuro, reflejando la visión de innovación de Accenture.",
      tags: ["Eventos","Producción"],
      color: "#A100FF",
      venue: "Edificio Accenture, Puerto Madero, Buenos Aires",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "Inauguración / Evento corporativo inmersivo",
      formato: "Presencial",
      audiencia: "B2B",
      industria: "Consultoría / Tecnología",
      asistentes: null,
      keywords: [
        "evento inmersivo Buenos Aires","inauguración edificio corporativo",
        "experiencia inmersiva marca","Puerto Madero evento corporativo",
        "agencia eventos innovación Argentina","producción experiencial tecnología",
        "Accenture evento Argentina"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&q=80",
        "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1200&q=80",
        "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=1200&q=80"
      ]
    },
    {
      id: "circulo-fuego",
      titulo: "CÍRCULO DE FUEGO",
      cliente: "Volvo",
      year: "2017",
      corta: "Un programa de relacionamiento exclusivo para los clientes más estratégicos de la marca.",
      larga: "Un programa que combinó experiencias únicas con la esencia de la marca Volvo, fortaleciendo vínculos con sus clientes más estratégicos.",
      tags: ["Eventos","Travel"],
      color: "#16264D",
      venue: "Patagonia, Argentina",
      ciudad: "Bariloche",
      pais: "Argentina",
      tipo: "Programa de relacionamiento / Travel experience",
      formato: "Presencial — Nacional",
      audiencia: "B2B",
      industria: "Automotriz",
      asistentes: null,
      keywords: [
        "programa relacionamiento VIP","travel experience Patagonia",
        "evento Bariloche corporativo","agencia eventos Bariloche",
        "programa loyalty automotriz","experiencia Patagonia empresas",
        "Volvo programa clientes Argentina","incentivo Patagonia Argentina",
        "eventos Bariloche agencia"
      ],
      _presupuesto: "alto",
      hero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
      ]
    }
  ],

  imagenes: {
    homeHero: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1800&q=80"
    ],
    homeMosaic: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80"
    ],
    xomos: {
      portada: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80",
      retratos: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
      ]
    },
    servicios: {
      digital:  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80",
      branded:  "https://images.unsplash.com/photo-1540304453527-62f979142a17?w=1400&q=80",
      solucion: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80",
      pr:       "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1400&q=80"
    }
  },

  clientes: [
    "Accenture","Avon","Bayer","Conmebol","Ethicon","Galicia Seguros","Huawei","IBM",
    "L'Oréal","Mirgor","Movistar","Sanofi","Naranja","SAP","Novartis","Telecom",
    "Peugeot","Volvo","Samsung","Zurich Santander"
  ]
};

export default XONA;

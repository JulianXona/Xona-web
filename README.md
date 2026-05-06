# XONA — Next.js · Guía de setup completa

## URLs
- **Vercel (actual):** https://xona-n82p.vercel.app
- **GitHub:** https://github.com/JulianXona/xona

---

## Pasos para deployar

### 1. Subir al repo
Crear repo nuevo `xona-next` en GitHub, subir todos estos archivos.
Copiar la carpeta `public/` con: `logo.png`, `favicon.ico`, `images/`

### 2. Vercel
Conectar el repo nuevo en vercel.com → detecta Next.js automáticamente → Deploy.

---

## Configurar Google Analytics 4 (15 minutos)

1. Ir a **analytics.google.com**
2. Crear cuenta → Crear propiedad → Web
3. Ingresar `xona.com.ar` como URL del sitio
4. Copiar el **Measurement ID** (formato `G-XXXXXXXXXX`)
5. Abrir `components/analytics.jsx`
6. Reemplazar: `const GA_ID = 'G-XXXXXXXXXX'` con tu ID real

**Qué vas a ver en GA4:**
- Páginas más visitadas y tiempo en cada una
- De dónde viene el tráfico (Google, Instagram, LinkedIn, directo)
- Qué casos se ven más
- Tasa de conversión al formulario de contacto
- Comportamiento por país y dispositivo

---

## Configurar Microsoft Clarity (10 minutos)

1. Ir a **clarity.microsoft.com** → Sign up con cuenta Microsoft (gratis)
2. New Project → nombre "Xona" → Web
3. Copiar el **Project ID** (6-8 caracteres, ej: `m1x2y3z4`)
4. Abrir `components/analytics.jsx`
5. Reemplazar: `const CLARITY_ID = 'CLARITY_ID'` con tu ID real

**Qué vas a ver en Clarity:**
- 🔥 Heatmaps — dónde hace click la gente en cada página
- 📹 Grabaciones de sesiones reales — ves exactamente cómo navega cada usuario
- 📊 Scroll maps — hasta dónde llega la gente antes de abandonar
- ⚡ Dead clicks, rage clicks — dónde se frustra el usuario
- Todo gratis, sin límite de sesiones

---

## Configurar Formspree (5 minutos)

1. Ir a **formspree.io** → Sign up gratis
2. New Form → nombre "Xona Contacto"
3. Copiar el Form ID (ej: `xrgwknab`)
4. Abrir `pages/contacto.jsx`
5. Reemplazar: `const FORMSPREE_ID = 'YOUR_FORM_ID'` con tu ID

Los formularios llegan a `hola@xona.com.ar`. Plan gratuito: 50 envíos/mes.

---

## Campos nuevos en los casos (`lib/data.js`)

Cada caso ahora tiene:

```js
venue:      "La Rural, Buenos Aires"       // Donde se hizo
ciudad:     "Buenos Aires"                  // Ciudad
pais:       "Argentina"                     // País
tipo:       "Evento corporativo"            // Categoría
formato:    "Presencial"                    // Presencial / Virtual / Híbrido
audiencia:  "B2B"                           // B2B o B2C
industria:  "Tecnología"                    // Industria del cliente
asistentes: 5000                            // Número (null si no aplica)
keywords:   ["evento La Rural", "..."]      // Para SEO e IAs
_presupuesto: "alto"                        // INTERNO — no se muestra en el sitio
```

Estos campos se usan para:
1. Mostrarlos en el sidebar de cada caso (venue, tipo, industria, asistentes)
2. Generar JSON-LD estructurado que indexan Google y las IAs
3. Trackear en GA4 qué tipo de casos mira más la gente

---

## Para aparecer en ChatGPT, Perplexity y otras IAs

El archivo `components/jsonld.jsx` genera automáticamente:

- **Organization schema** — datos de Xona como empresa (en todas las páginas)
- **Event / CreativeWork schema** — datos de cada caso con venue, ciudad, industria
- **FAQ schema** — preguntas frecuentes que las IAs citan directamente
- **Breadcrumb schema** — estructura de navegación del sitio

Para reforzar la presencia en IAs, además del sitio:
1. **Google Business Profile** — completar al 100% en business.google.com
2. **LinkedIn de la empresa** — actualizar con todos los servicios y casos
3. **Wikidata** — crear entrada (20 años, 150 clientes lo justifica)

---

## Agregar un caso nuevo

1. Crear carpeta `public/images/casos/nombre-caso/`
2. Subir `hero.jpg`, `cover.jpg`, `bg.jpg`, `gallery-1.jpg`...
3. Agregar en `lib/data.js`:

```js
{
  id: "nombre-slug",
  titulo: "TÍTULO EN MAYÚSCULAS",
  cliente: "Cliente",
  year: "2025",
  corta: "Descripción corta (1-2 líneas).",
  larga: "Descripción larga (3-4 líneas).",
  tags: ["Eventos", "Branded Content"],
  color: "#HEXCOLOR",
  // Campos nuevos:
  venue: "La Rural, Buenos Aires",
  ciudad: "Buenos Aires",
  pais: "Argentina",
  tipo: "Evento corporativo",
  formato: "Presencial",
  audiencia: "B2B",
  industria: "Industria del cliente",
  asistentes: 2000,
  keywords: ["keyword 1", "keyword 2", "..."],
  _presupuesto: "alto",
  // Imágenes:
  hero: "images/casos/nombre-caso/hero.jpg",
  cover: "images/casos/nombre-caso/cover.jpg",
  bg: "images/casos/nombre-caso/bg.jpg",
  video: "https://www.youtube.com/embed/VIDEO_ID",
  gallery: ["images/casos/nombre-caso/gallery-1.jpg"]
}
```

---

## Archivo: `components/analytics.jsx`

Dos líneas a editar:
```js
const GA_ID      = 'G-XXXXXXXXXX';   // ← tu Measurement ID de GA4
const CLARITY_ID = 'CLARITY_ID';     // ← tu Project ID de Clarity
```

Los analytics solo cargan en producción (`NODE_ENV === 'production'`),
así que en desarrollo no hay ruido en las métricas.

---

## Conectar dominio xona.com.ar

1. Vercel → proyecto → Settings → Domains → agregar `xona.com.ar`
2. Vercel te da los DNS records
3. Configurarlos en el registrador del dominio
4. Listo en 10-30 minutos

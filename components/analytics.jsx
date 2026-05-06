import Script from 'next/script';

// ─────────────────────────────────────────────────────────────
//  INSTRUCCIONES DE CONFIGURACIÓN
//
//  1. Google Analytics 4
//     - Ir a analytics.google.com → Crear cuenta → Crear propiedad
//     - Copiar el "Measurement ID" (formato: G-XXXXXXXXXX)
//     - Reemplazar 'G-XXXXXXXXXX' abajo
//
//  2. Microsoft Clarity
//     - Ir a clarity.microsoft.com → Sign up gratis
//     - New Project → nombre "Xona" → copiar el Project ID (6-8 chars)
//     - Reemplazar 'CLARITY_ID' abajo
// ─────────────────────────────────────────────────────────────

const GA_ID      = 'G-XXXXXXXXXX';   // ← reemplazar
const CLARITY_ID = 'CLARITY_ID';     // ← reemplazar

// Helpers para trackear eventos desde cualquier componente
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (window.gtag) window.gtag('event', eventName, params);
}

export function trackCaseView(caso) {
  trackEvent('case_view', {
    case_id:       caso.id,
    case_title:    caso.titulo,
    case_client:   caso.cliente,
    case_year:     caso.year,
    case_type:     caso.tipo,
    case_city:     caso.ciudad,
    case_country:  caso.pais,
    case_format:   caso.formato,
    case_audience: caso.audiencia,
    case_industry: caso.industria,
  });
}

export function trackContactStart() {
  trackEvent('contact_start', { method: 'form' });
}

export function trackContactSent() {
  trackEvent('contact_sent', { method: 'form' });
}

export function trackServiceClick(serviceId) {
  trackEvent('service_click', { service_id: serviceId });
}

export function trackNavClick(destination) {
  trackEvent('nav_click', { destination });
}

// El componente — va en _app.jsx una sola vez
export default function Analytics() {
  const isProd = process.env.NODE_ENV === 'production';

  // No cargar en development para no contaminar métricas
  if (!isProd) return null;
  if (GA_ID === 'G-XXXXXXXXXX' || CLARITY_ID === 'CLARITY_ID') return null;

  return (
    <>
      {/* ── Google Analytics 4 ── */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>

      {/* ── Microsoft Clarity ── */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${CLARITY_ID}");
        `}
      </Script>
    </>
  );
}

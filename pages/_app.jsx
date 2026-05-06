import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LangProvider } from '../lib/LangContext';
import { Nav, Footer } from '../components/chrome';
import { ScrollProgress, CustomCursor } from '../components/ui';
import { JsonLdOrganization, JsonLdFaq } from '../components/jsonld';
import Analytics from '../components/analytics';

import '../styles/styles.css';
import '../styles/globals.css';

const SEO = {
  '/':            { title: 'Xona — Marketing de Experiencias', description: 'Agencia de marketing de experiencias. Eventos corporativos, branded content, PR y estrategia digital en Argentina, Chile e Italia.' },
  '/xomos':       { title: 'Quiénes somos — Xona', description: 'Un equipo multidisciplinario que cruza estrategia, creatividad y producción. Desde 2005.' },
  '/works':       { title: 'Works — Xona', description: 'Casos seleccionados. Marcas que confiaron en nosotros para crear algo extraordinario.' },
  '/que-hacemos': { title: 'Qué hacemos — Xona', description: 'Digital Hub, Branded Content, Solución Integral y PR & Comunicación.' },
  '/contacto':    { title: 'Contacto — Xona', description: 'Contanos tu desafío. Te respondemos en 24 horas hábiles.' },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const seo = SEO[pathname] || SEO['/'];

  // Reset scroll on every route change — múltiples métodos para garantizarlo
  useEffect(() => {
    const handleRouteChange = () => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <LangProvider>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://xona.com.ar/og-image.jpg" />
        <meta property="og:site_name" content="Xona" />
        <link rel="canonical" href={`https://xona.com.ar${pathname}`} />
        <link rel="icon" href="/favicon.ico" />
        <JsonLdOrganization />
        {pathname === '/' && <JsonLdFaq />}
      </Head>
      <Analytics />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main key={pathname}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </LangProvider>
  );
}

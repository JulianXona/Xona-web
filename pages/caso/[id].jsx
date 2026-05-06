import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useLang } from '../../lib/LangContext';
import { Img, Arrow, useReveal } from '../../components/ui';
import { JsonLdCase, JsonLdBreadcrumb } from '../../components/jsonld';
import { trackCaseView } from '../../components/analytics';
import XONA from '../../lib/data';

export default function Caso({ caso, prev, next }) {
  const { t } = useLang();
  useReveal();

  useEffect(() => {
    if (caso) trackCaseView(caso);
  }, [caso]);

  if (!caso) return <div style={{ padding: '10rem var(--px)' }}>Caso no encontrado.</div>;

  return (
    <>
      <Head>
        <title>{caso.titulo} — {caso.cliente} · Xona</title>
        <meta name="description" content={caso.corta} />
        <meta name="keywords" content={caso.keywords ? caso.keywords.join(', ') : caso.tags.join(', ')} />
        <meta property="og:title" content={`${caso.titulo} — Xona`} />
        <meta property="og:description" content={caso.corta} />
        <meta property="og:image" content={caso.hero.startsWith('http') ? caso.hero : `https://xona.com.ar/${caso.hero}`} />
        <JsonLdCase caso={caso} />
        <JsonLdBreadcrumb items={[
          { name: 'Inicio', path: '/' },
          { name: 'Works', path: '/works' },
          { name: caso.titulo, path: `/caso/${caso.id}` },
        ]} />
      </Head>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(7rem, 14vw, 11rem) var(--px) clamp(2.5rem, 6vw, 5rem)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Img src={caso.bg || caso.hero} treatment="cinematic" parallax style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.95) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: caso.color, zIndex: 2 }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          <div className="mono dim" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/">{t.nav.home}</Link><span className="gold">·</span>
            <Link href="/works">{t.nav.works}</Link><span className="gold">·</span>
            <span>{caso.titulo}</span>
          </div>
          <div className="eyebrow r" style={{ marginBottom: '1rem' }}>{caso.cliente} · {caso.year}</div>
          <h1 className="r r-1" style={{ fontSize: 'clamp(2.2rem, 8vw, 7rem)' }}>{caso.titulo}</h1>
          {caso.venue && <div className="mono dim r r-2" style={{ marginTop: '0.8rem' }}>📍 {caso.venue}</div>}
          <div className="tag-list r r-3" style={{ marginTop: '1.2rem' }}>
            {caso.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad">
        <div className="maxw caso-body-grid">
          <div>
            <h2 className="r" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)' }}>{caso.corta}</h2>
            <p className="lead r r-1" style={{ marginBottom: '1.8rem' }}>{caso.larga}</p>
            <div className="r r-2" style={{ marginTop: '2.5rem', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
              {caso.video
                ? <iframe src={caso.video} title={caso.titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
                : <Img src={caso.gallery[0]} ratio="16/9" treatment="cinematic" parallax caption={`${caso.cliente.toUpperCase()} · CASE FILM`} />
              }
            </div>
            {caso.gallery?.length > 0 && (
              <div className="caso-gallery">
                {caso.gallery.map((img, i) => (
                  <div key={i} className="r" style={{ aspectRatio: '4/3' }}>
                    <Img src={img} ratio="4/3" treatment="cinematic" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="caso-aside">
            <div className="sidebar-card r"><div className="mono gold" style={{ marginBottom: '0.6rem' }}>{t.caso.cliente}</div><div style={{ fontWeight: 500 }}>{caso.cliente}</div></div>
            <div className="sidebar-card r r-1"><div className="mono gold" style={{ marginBottom: '0.6rem' }}>{t.caso.ano}</div><div>{caso.year}</div></div>
            {caso.venue && <div className="sidebar-card r r-1"><div className="mono gold" style={{ marginBottom: '0.6rem' }}>Venue</div><div style={{ fontSize: '0.95rem' }}>{caso.venue}</div></div>}
            {caso.tipo && (
              <div className="sidebar-card r r-2">
                <div className="mono gold" style={{ marginBottom: '0.6rem' }}>Tipo</div>
                <div style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{caso.tipo}</div>
                {caso.formato && <div className="mono dim" style={{ fontSize: '0.65rem' }}>{caso.formato}</div>}
              </div>
            )}
            {caso.industria && (
              <div className="sidebar-card r r-2">
                <div className="mono gold" style={{ marginBottom: '0.6rem' }}>Industria</div>
                <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{caso.industria}</div>
                {caso.audiencia && <span className="tag" style={{ fontSize: '0.6rem' }}>{caso.audiencia}</span>}
              </div>
            )}
            {caso.asistentes && (
              <div className="sidebar-card r r-3">
                <div className="mono gold" style={{ marginBottom: '0.6rem' }}>Asistentes</div>
                <div style={{ fontSize: '1.4rem', fontFamily: 'var(--f-serif)', fontStyle: 'italic', color: 'var(--gold)' }}>{caso.asistentes.toLocaleString()}</div>
              </div>
            )}
            <div className="sidebar-card r r-3"><div className="mono gold" style={{ marginBottom: '0.6rem' }}>{t.caso.disciplinas}</div><div className="tag-list">{caso.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}</div></div>
            <div className="sidebar-card r r-4" style={{ background: 'var(--bg-2)' }}>
              <div className="mono gold" style={{ marginBottom: '0.6rem' }}>{t.caso.juntos}</div>
              <p className="dim" style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>{t.caso.juntosCuerpo}</p>
              <Link href="/contacto" className="btn" style={{ width: '100%', justifyContent: 'center' }}>{t.common.contact} <Arrow /></Link>
            </div>
          </aside>
        </div>
      </section>

      {(prev || next) && (
        <section className="section-pad" style={{ borderTop: '1px solid var(--fg-faint)' }}>
          <div className="maxw" style={{ display: 'grid', gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr', gap: '1.5rem' }}>
            {prev && <Link href={`/caso/${prev.id}`} className="prevnext"><div className="mono dim">← {t.caso.anterior}</div><h3 className="serif-it gold" style={{ marginTop: '0.4rem' }}>{prev.titulo}</h3></Link>}
            {next && <Link href={`/caso/${next.id}`} className="prevnext" style={{ textAlign: 'right' }}><div className="mono dim">{t.caso.siguiente} →</div><h3 className="serif-it gold" style={{ marginTop: '0.4rem' }}>{next.titulo}</h3></Link>}
          </div>
        </section>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return { paths: XONA.casos.map(c => ({ params: { id: c.id } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const idx = XONA.casos.findIndex(c => c.id === params.id);
  return {
    props: {
      caso: idx >= 0 ? XONA.casos[idx] : null,
      prev: idx > 0 ? XONA.casos[idx - 1] : null,
      next: idx < XONA.casos.length - 1 ? XONA.casos[idx + 1] : null,
    }
  };
}

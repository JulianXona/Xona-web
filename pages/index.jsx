import Head from 'next/head';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useLang } from '../lib/LangContext';
import { Img, SplitWords, Arrow, useReveal, hexToRgba } from '../components/ui';
import { ClientesMarquee } from '../components/chrome';
import XONA from '../lib/data';

function HomeCTA() {
  const { t } = useLang();
  return (
    <section className="section-pad" style={{ textAlign: 'center', padding: 'calc(var(--py) * 1.4) var(--px)' }}>
      <div className="r">
        <div className="eyebrow" style={{ marginBottom: '2rem', justifyContent: 'center', display: 'inline-flex' }}>{t.home.ctaKicker}</div>
        <h2 style={{ maxWidth: '20ch', margin: '0 auto 2.5rem', fontSize: 'clamp(1.8rem, 6vw, 5rem)' }}>
          {t.home.ctaTitulo[0]}<br /><span className="serif-it gold">{t.home.ctaTitulo[1]}</span>
        </h2>
        <Link href="/contacto" className="btn solid">{t.common.start} <Arrow /></Link>
      </div>
    </section>
  );
}

function HomeFrase() {
  const ref = useRef(null);
  const { t } = useLang();
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const center = (r.top + r.height / 2) - window.innerHeight / 2;
      const progress = Math.max(0, Math.min(1, 1 - Math.abs(center) / (window.innerHeight * 0.7)));
      el.style.setProperty('--reveal', progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const words = t.home.frase.split(' ');
  const accentSet = new Set(['extraordinaria.','infinito','straordinaria.','extraordinary.','infinito,','straordinarie.','extraordinario']);
  return (
    <section ref={ref} className="section-pad" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="maxw" style={{ width: '100%' }}>
        <div className="eyebrow r" style={{ marginBottom: '2rem' }}>{t.home.manifesto}</div>
        <h2 style={{ maxWidth: '20ch', fontSize: 'clamp(1.7rem, 6.5vw, 5.5rem)', lineHeight: 1.05 }}>
          {words.map((w, i) => {
            const isAccent = accentSet.has(w) || /(extraordinari|straordinari)/i.test(w);
            return (
              <span key={i} style={{
                display: 'inline-block',
                opacity: `calc(0.18 + var(--reveal, 0) * ${isAccent ? '0.85' : '0.75'})`,
                color: isAccent ? 'var(--gold)' : 'inherit',
                transition: 'opacity .6s ease',
                fontFamily: isAccent ? 'var(--f-serif)' : 'inherit',
                fontStyle: isAccent ? 'italic' : 'normal',
                fontWeight: isAccent ? 400 : 500,
                marginRight: '0.25em'
              }}>{w}</span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}

function HomeCases() {
  const { t } = useLang();
  const casos = XONA.casos.slice(0, 6);
  const [hovered, setHovered] = useState(null);
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="maxw">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem, 5vw, 3rem)', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="r">
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>{t.home.casosKicker}</div>
            <h2 style={{ maxWidth: '14ch' }}>
              {t.home.casosTitulo[0]} <span className="serif-it gold">{t.home.casosTitulo[1]}</span> {t.home.casosTitulo[2]}
            </h2>
          </div>
          <Link href="/works" className="btn r r-2">{t.common.viewAll} <Arrow /></Link>
        </div>
        <div className="cases-list">
          {casos.map((c, i) => (
            <Link
              key={c.id}
              href={`/caso/${c.id}`}
              className={`case-row ${hovered === i ? 'is-hovered' : ''} ${hovered != null && hovered !== i ? 'is-dimmed' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="case-row-bg" aria-hidden="true">
                <img src={c.cover || c.hero} alt="" loading="lazy" />
                <div className="grain"></div>
                <div className="tint" style={{ background: `linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, ${hexToRgba(c.color, 0.55)} 100%)` }}></div>
              </div>
              <div className="case-row-inner">
                <span className="case-num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="case-title">{c.titulo}</span>
                <span className="case-meta mono">{c.cliente} — {c.year}</span>
                <span className="case-arrow"><Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeStats() {
  const { t } = useLang();
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--fg-faint)', borderBottom: '1px solid var(--fg-faint)' }}>
      <div className="maxw">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--fg-faint)', border: '1px solid var(--fg-faint)' }}>
          {t.home.stats.map((s, i) => (
            <div key={i} className="stat-cell r" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="stat-num">{s.n}</div>
              <div className="mono dim">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeServiciosScrollH() {
  const { t } = useLang();
  return (
    <section className="section-pad">
      <div className="maxw">
        <div className="r" style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>{t.home.serviciosKicker}</div>
          <h2>{t.home.serviciosTitulo[0]} <span className="serif-it gold">{t.home.serviciosTitulo[1]}</span> {t.home.serviciosTitulo[2]}</h2>
        </div>
      </div>
      <div className="services-h-scroll">
        <div className="services-h-track">
          {XONA.servicios.map((s) => (
            <Link href={`/que-hacemos?s=${s.id}`} key={s.id} className="service-card">
              <div className="service-num mono">{s.n} / 04</div>
              <h3>{s.titulo}</h3>
              <p className="dim" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>{s.bajada}</p>
              <ul style={{ marginTop: '1.5rem' }}>
                {s.items.slice(0, 4).map((it, j) => (
                  <li key={j} className="mono" style={{ color: 'var(--fg-dim)', padding: '0.4rem 0', borderTop: '1px solid var(--fg-faint)' }}>{it}</li>
                ))}
              </ul>
              <div className="service-link mono">{t.common.explore} <Arrow /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFilosofia() {
  const { t } = useLang();
  const parts = t.home.diferencialTitulo.split('.');
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="maxw filosofia-grid">
        <div className="r">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>{t.home.diferencialKicker}</div>
          <h2 style={{ marginBottom: '2rem' }}>{parts[0]}.<br /><span className="serif-it gold">{parts[1]}.</span></h2>
          <p className="lead" style={{ marginBottom: '2rem' }}>{t.home.diferencialCuerpo}</p>
          <Link href="/xomos" className="btn">{t.common.whoWeAre} <Arrow /></Link>
        </div>
        <div className="r r-1" style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="https://player.vimeo.com/video/468557889?background=1&autoplay=1&loop=1&muted=1"
            title="XONA Reel"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
}

function HomeMosaic() {
  const { t } = useLang();
  const imgs = XONA.imagenes.homeMosaic;
  const captions = ['01 · STAGE','02 · GALA','03 · ACTIVATION','04 · STADIUM','05 · SHOWROOM','06 · TRAVEL'];
  return (
    <section className="section-pad">
      <div className="maxw">
        <div className="r" style={{ marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>{t.home.mosaicKicker}</div>
          <h2>{t.home.mosaicTitulo[0]} <span className="serif-it gold">{t.home.mosaicTitulo[1]}</span> {t.home.mosaicTitulo[2]}</h2>
        </div>
        <div className="mosaic">
          {imgs.map((src, i) => (
            <div key={i} className={`m m-${i+1} r`} style={{ transitionDelay: `${i*0.08}s` }}>
              <Img src={src} treatment="cinematic" parallax caption={captions[i]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  useReveal();

  return (
    <>
      <Head><title>Xona — Marketing de Experiencias</title></Head>
      <div className="dir-a">
        <section className="home-hero">
          <div className="grid-bg"></div>
          <div className="hero-bg-img" aria-hidden="true">
            <Img src={XONA.imagenes.homeHero[0]} treatment="cinematic" parallax style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="maxw" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 7vw, 5rem)', flexWrap: 'wrap', gap: '1rem' }}>
              <div className="eyebrow r">{t.home.eyebrow}</div>
              <div className="mono dim r r-1 hide-mobile">↓ {t.common.scroll}</div>
            </div>
            <h1>
              <SplitWords text={t.home.titulo[0]} /><br />
              <SplitWords text={t.home.titulo[1]} delay={0.2} /><br />
              <em><SplitWords text={t.home.titulo[2]} delay={0.5} /></em>
            </h1>
            <p className="lead r r-2" style={{ marginTop: '2rem', marginBottom: '2rem' }}>{t.home.sub}</p>
            <div className="r r-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/que-hacemos" className="btn">{t.common.whatWeDo} <Arrow /></Link>
              <Link href="/contacto" className="btn ghost">{t.common.contact}</Link>
            </div>
          </div>
          <div className="scroll-cue hide-mobile">
            <span>SCROLL</span>
            <div className="line"></div>
          </div>
        </section>

        <HomeCases />

        <section className="section-pad">
          <div className="maxw propuesta-grid">
            <div className="r r-1" style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/6fd6jevtPtc?rel=0&modestbranding=1&controls=1"
                title="XONA Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <div>
              <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{t.home.propuestaKicker}</div>
              <h2 className="r r-1" style={{ marginBottom: '2rem' }}>{t.home.propuestaTitulo}</h2>
              <p className="lead r r-2" style={{ marginBottom: '2rem' }}>{t.home.propuestaCuerpo}</p>
              <Link href="/que-hacemos" className="btn r r-3">{t.common.services} <Arrow /></Link>
            </div>
          </div>
        </section>

        <HomeServiciosScrollH />
        <HomeFrase />
        <HomeFilosofia />
        <HomeMosaic />
        <HomeStats />

        <section style={{ padding: 'clamp(2.5rem, 6vw, 5rem) 0', borderTop: '1px solid var(--fg-faint)' }}>
          <div style={{ padding: '0 var(--px)', marginBottom: '2rem' }}>
            <div className="eyebrow">{t.home.kickerClientes}</div>
          </div>
          <ClientesMarquee />
        </section>

        <HomeCTA />
      </div>
    </>
  );
}

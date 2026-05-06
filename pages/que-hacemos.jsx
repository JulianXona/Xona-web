import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLang } from '../lib/LangContext';
import { Img, Arrow, useReveal } from '../components/ui';
import XONA from '../lib/data';

function HomeCTA() {
  const { t } = useLang();
  return (
    <section className="section-pad" style={{ textAlign: 'center' }}>
      <div className="r">
        <h2 style={{ maxWidth: '20ch', margin: '0 auto 2.5rem', fontSize: 'clamp(1.8rem, 6vw, 5rem)' }}>
          {t.home.ctaTitulo[0]}<br /><span className="serif-it gold">{t.home.ctaTitulo[1]}</span>
        </h2>
        <Link href="/contacto" className="btn solid">{t.common.start} <Arrow /></Link>
      </div>
    </section>
  );
}

export default function QueHacemos() {
  const { query } = useRouter();
  const { t } = useLang();
  useReveal();
  return (
    <>
      <Head><title>Qué hacemos — Xona</title></Head>
      <div>
        <section className="section-pad" style={{ paddingTop: 'clamp(7rem, 14vw, 12rem)' }}>
          <div className="maxw">
            <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{t.queHacemos.eyebrow}</div>
            <h1 className="r r-1" style={{ maxWidth: '14ch', fontSize: 'clamp(2.4rem, 9vw, 8rem)' }}>
              {t.queHacemos.titulo[0]}<br /><span className="serif-it gold">{t.queHacemos.titulo[1]}</span><br />{t.queHacemos.titulo[2]}
            </h1>
            <p className="lead r r-2" style={{ marginTop: '1.5rem' }}>{t.queHacemos.sub}</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="maxw">
            <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{t.queHacemos.kickerDisciplinas}</div>
            <div className="services-stack">
              {XONA.servicios.map((s, i) => {
                const img = XONA.imagenes.servicios[s.id];
                return (
                  <div key={s.id} className={`service-block r ${query.s === s.id ? 'focused' : ''}`} style={{ transitionDelay: `${i * 0.06}s` }}>
                    <div><div className="mono gold">{s.n} / 0{XONA.servicios.length}</div></div>
                    <div className="service-block-title">
                      <h2>{s.titulo}</h2>
                      <p className="lead" style={{ marginTop: '0.8rem', marginBottom: '1.2rem' }}>{s.bajada}</p>
                      {img && <div style={{ aspectRatio: '4/3', marginTop: '0.8rem' }}><Img src={img} ratio="4/3" treatment="cinematic" caption={s.titulo.toUpperCase()} /></div>}
                    </div>
                    <div className="service-block-items">
                      {s.items.map((it, j) => (
                        <div key={j} className="service-item">
                          <span className="mono dim">{String(j+1).padStart(2,'0')}</span>
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <HomeCTA />
      </div>
    </>
  );
}

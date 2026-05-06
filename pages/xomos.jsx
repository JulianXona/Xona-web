import Head from 'next/head';
import Link from 'next/link';
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

export default function Xomos() {
  const { t } = useLang();
  const x = t.xomos;
  useReveal();
  return (
    <>
      <Head><title>Xomos — Quiénes somos · Xona</title></Head>
      <div>
        <section className="section-pad" style={{ paddingTop: 'clamp(7rem, 14vw, 12rem)' }}>
          <div className="maxw">
            <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{x.eyebrow}</div>
            <h1 className="r r-1" style={{ maxWidth: '14ch', fontSize: 'clamp(2.4rem, 9vw, 8rem)' }}>
              {x.titulo[0]}<br />{x.titulo[1]}<br /><em className="serif-it gold">{x.titulo[2]}</em>
            </h1>
            <p className="lead r r-2" style={{ marginTop: '1.5rem' }}>{x.sub}</p>
          </div>
        </section>

        <section className="section-pad" style={{ borderTop: '1px solid var(--fg-faint)', borderBottom: '1px solid var(--fg-faint)', textAlign: 'center', padding: 'clamp(3rem, 9vw, 7rem) var(--px)' }}>
          <div className="r" style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 'clamp(7rem, 22vw, 18rem)', lineHeight: '0.85', color: 'transparent', WebkitTextStroke: '1px var(--gold)', fontWeight: 400 }}>25</div>
          <div className="mono r r-1" style={{ marginTop: '1rem', color: 'var(--fg-dim)' }}>{x.bigNumLabel}</div>
        </section>

        <section className="section-pad">
          <div className="maxw">
            <div className="r" style={{ marginBottom: '2.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>{x.culturaKicker}</div>
              <h2 className="serif-it" style={{ maxWidth: '24ch', color: 'var(--fg-dim)', fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}>{x.pregunta}</h2>
            </div>
            <div className="valores-grid">
              {x.valores.map((v, i) => (
                <div key={v.n} className="r valor-cell" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="mono gold" style={{ marginBottom: '1.2rem' }}>{v.n}</div>
                  <h3 style={{ marginBottom: '0.8rem' }}>{v.t}</h3>
                  <p className="dim" style={{ fontSize: '0.95rem' }}>{v.d}</p>
                </div>
              ))}
            </div>
            <div className="r" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <p className="serif-it gold" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>" {x.cita} "</p>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
          <div className="maxw historia-grid">
            <div className="r r-1" style={{ aspectRatio: '4/3' }}>
              <Img src={XONA.imagenes.xomos.portada} ratio="4/3" treatment="cinematic" parallax caption="EQUIPO · 2025" />
            </div>
            <div>
              <div className="eyebrow r" style={{ marginBottom: '1.2rem' }}>{x.historia.kicker}</div>
              <h2 className="r r-1" style={{ marginBottom: '1.5rem' }}>
                {x.historia.titulo.split('.')[0]}.<br />
                <span className="serif-it gold">{x.historia.titulo.split('.')[1]}.</span>
              </h2>
              <p className="lead r r-2" style={{ marginBottom: '1.8rem' }}>{x.historia.cuerpo}</p>
              <Link href="/works" className="btn r r-3">{t.nav.works} <Arrow /></Link>
            </div>
          </div>
        </section>

        <HomeCTA />
      </div>
    </>
  );
}

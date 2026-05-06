import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../lib/LangContext';
import { Img, Arrow, useReveal } from '../components/ui';
import { ClientesMarquee } from '../components/chrome';
import XONA from '../lib/data';

function HomeCTA() {
  const { t } = useLang();
  return (
    <section className="section-pad" style={{ textAlign: 'center' }}>
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

export default function Works() {
  const { t } = useLang();
  useReveal();
  const casos = XONA.casos;
  const tags = ['todos', ...new Set(casos.flatMap(c => c.tags))];
  const [filter, setFilter] = useState('todos');
  const filtered = filter === 'todos' ? casos : casos.filter(c => c.tags.includes(filter));

  return (
    <>
      <Head><title>Works — Xona</title></Head>
      <div>
        <section className="section-pad" style={{ paddingTop: 'clamp(7rem, 14vw, 12rem)', paddingBottom: 'clamp(2.5rem, 6vw, 5rem)' }}>
          <div className="maxw">
            <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{t.works.eyebrow}</div>
            <h1 className="r r-1" style={{ maxWidth: '14ch', fontSize: 'clamp(2.4rem, 9vw, 8rem)' }}>
              {t.works.titulo[0]} <span className="serif-it gold">{t.works.titulo[1]}</span><br />{t.works.titulo[2]}
            </h1>
            <p className="lead r r-2" style={{ marginTop: '1.5rem' }}>{t.works.sub}</p>
          </div>
        </section>

        <section className="section-pad" style={{ background: 'var(--bg-2)', paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="maxw">
            <div className="r" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {tags.map(tg => (
                <button key={tg} className={`filtro-btn ${filter === tg ? 'is-active' : ''}`} onClick={() => setFilter(tg)}>
                  {tg === 'todos' ? t.works.todos : tg}
                </button>
              ))}
            </div>
            <div className="cases-grid">
              {filtered.map((c, i) => (
                <Link key={c.id} href={`/caso/${c.id}`} className="case-card" style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
                  <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                    <Img src={c.hero} ratio="4/5" treatment="cinematic" />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.color, zIndex: 4 }}></div>
                  </div>
                  <div className="case-card-info">
                    <div className="mono gold" style={{ marginTop: '0.8rem' }}>{c.cliente} · {c.year}</div>
                    <h3 style={{ marginTop: '0.4rem' }}>{c.titulo}</h3>
                    <div className="tag-list" style={{ marginTop: '0.6rem' }}>
                      {c.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'clamp(2.5rem, 6vw, 5rem) 0', borderTop: '1px solid var(--fg-faint)' }}>
          <div style={{ padding: '0 var(--px)', marginBottom: '1.5rem' }}>
            <div className="eyebrow">{t.works.kickerClientes}</div>
          </div>
          <ClientesMarquee />
        </section>

        <HomeCTA />
      </div>
    </>
  );
}

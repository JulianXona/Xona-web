import Head from 'next/head';
import { useState } from 'react';
import { useLang } from '../lib/LangContext';
import { Arrow, useReveal } from '../components/ui';
import XONA from '../lib/data';

export default function Contacto() {
  const { t } = useLang();
  const g = XONA.global;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  useReveal();

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Reemplazá YOUR_FORM_ID con tu ID de formspree.io
    const FORMSPREE_ID = 'YOUR_FORM_ID';
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setTimeout(() => { setSent(true); setSending(false); e.target.reset(); setTimeout(() => setSent(false), 4000); }, 800);
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSent(true); e.target.reset(); setTimeout(() => setSent(false), 5000); }
    } catch (_) {}
    setSending(false);
  };

  return (
    <>
      <Head><title>Contacto — Xona</title></Head>
      <section className="contacto-wrap">
        <div className="contacto-left">
          <div>
            <div className="eyebrow r" style={{ marginBottom: '1.5rem' }}>{t.contacto.eyebrow}</div>
            <h1 className="r r-1" style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
              {t.contacto.titulo[0]}<br /><span className="serif-it gold">{t.contacto.titulo[1]}</span>
            </h1>
            <p className="lead r r-2">{t.contacto.sub}</p>
          </div>
          <div className="r r-2">
            <a href={`mailto:${g.email}`} className="serif-it gold contacto-mail">{g.email} <Arrow /></a>
            <div className="contacto-phones">
              {Object.entries(g.telefonos).map(([c, tel]) => (
                <div key={c}>
                  <div className="mono gold" style={{ marginBottom: '0.3rem' }}>{c.toUpperCase()}</div>
                  <a href={`tel:${tel.replace(/\s/g,'')}`} className="dim" style={{ fontSize: '0.88rem' }}>{tel}</a>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {Object.entries(g.redes).map(([k, v]) => (
                <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="mono dim">{k}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="contacto-right">
          <h2 className="r" style={{ marginBottom: '2rem', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>{t.contacto.empecemos}</h2>
          <form onSubmit={submit} className="r r-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div className="form-row">
              <div className="field"><label>{t.contacto.nombre}</label><input name="nombre" required placeholder={t.contacto.nombrePh} /></div>
              <div className="field"><label>{t.contacto.empresa}</label><input name="empresa" placeholder={t.contacto.empresaPh} /></div>
            </div>
            <div className="form-row">
              <div className="field"><label>Email</label><input name="email" type="email" required placeholder="tu@email.com" /></div>
              <div className="field"><label>{t.contacto.telefono}</label><input name="telefono" placeholder="+54 9 11..." /></div>
            </div>
            <div className="field">
              <label>{t.contacto.necesitas}</label>
              <select name="servicio">
                <option>{t.contacto.seleccionar}</option>
                {XONA.servicios.map(s => <option key={s.id}>{s.titulo}</option>)}
                <option>{t.contacto.otro}</option>
              </select>
            </div>
            <div className="field"><label>{t.contacto.proyecto}</label><textarea name="proyecto" rows="3" placeholder={t.contacto.proyectoPh}></textarea></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
              <span className="mono dim" style={{ fontSize: '0.62rem' }}>{sent ? `✓ ${t.contacto.enviado}` : t.contacto.privacidad}</span>
              <button type="submit" className="btn solid" disabled={sending}>{sending ? '...' : t.contacto.enviar} <Arrow /></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

import { useRef, useState, useEffect } from 'react';

export function Arrow(props) {
  return (
    <svg className="arrow" viewBox="0 0 14 10" fill="none" {...props}>
      <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SplitWords({ text, className = '', as: Tag = 'span', delay = 0 }) {
  const words = (text || '').split(' ');
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} className="split-word" style={{ transitionDelay: `${delay + i * 0.05}s` }}>
          <span style={{ transitionDelay: `${delay + i * 0.05}s` }}>{w}{i < words.length - 1 ? '\u00A0' : ''}</span>
        </span>
      ))}
    </Tag>
  );
}

// Img — siempre visible, fade-in suave al cargar
export function Img({ src, alt = '', ratio, treatment = 'cinematic', parallax = false, className = '', style = {}, caption }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!parallax) return;
    const el = wrapRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-80, Math.min(80, -center * 0.08));
      if (imgRef.current) imgRef.current.style.transform = `translateY(${offset}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);

  // Si la imagen ya estaba en caché, el onLoad no dispara — chequeamos con naturalWidth
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className={`xona-img t-${treatment} ${loaded ? 'is-loaded' : ''} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // en caso de error igual mostrar
      />
      <div className="xona-img-grain"></div>
      <div className="xona-img-tint"></div>
      {caption && <div className="xona-img-caption mono">{caption}</div>}
    </div>
  );
}

export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (ref.current) ref.current.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" ref={ref}></div>;
}

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const isInteractive = e.target.closest('a, button, [data-cursor-hover], input, textarea, select');
      ringRef.current?.classList.toggle('hover', !!isInteractive);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    tick();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);
  return (
    <>
      <div className="cursor-ring" ref={ringRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
}

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.r:not(.in), .split-word:not(.in)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

export function hexToRgba(hex, a = 1) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substr(0, 2), 16);
  const g = parseInt(h.substr(2, 2), 16);
  const b = parseInt(h.substr(4, 2), 16);
  return `rgba(${r},${g},${b},${a})`;
}

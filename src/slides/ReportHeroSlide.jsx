import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section section--dark hero"
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100dvh', paddingTop: 'calc(var(--nav-h, 54px) + 0.5rem)',
        paddingBottom: '3.5rem', paddingLeft: '1.25rem', paddingRight: '1.25rem',
        textAlign: 'center', position: 'relative', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        background: '#1d1d1b',
      }}
    >
      {/* Subtle background word */}
      <div className="hero__bg-text" style={{ fontSize: 'clamp(4.5rem, 16vw, 12rem)', opacity: 0.02, letterSpacing: '-0.06em', color: '#ede8df' }}>
        ABRIL
      </div>

      {/* Report badge */}
      <div className="hero-enter" style={{ marginBottom: '1.25rem', zIndex: 2 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          fontSize: '0.54rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '0.4rem 0.85rem', borderRadius: '20px',
          background: 'rgba(237,232,223,0.06)', border: '1px solid rgba(237,232,223,0.14)',
          color: '#ede8df'
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ede8df', display: 'inline-block' }} />
          Informe de Rendimiento Digital
        </span>
      </div>

      {/* Logo - Inverted (White) */}
      <img
        src="./logo-invertido.png"
        alt="Roots Rioja"
        className="hero__logo hero-enter"
        style={{ height: 'clamp(42px, 9vw, 68px)', marginBottom: '1.5rem', objectFit: 'contain', zIndex: 2 }}
      />

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(1.85rem, 6vw, 3.4rem)', fontWeight: '900', lineHeight: 1.15,
          textTransform: 'uppercase', letterSpacing: '-0.04em',
          margin: '0 0 0.85rem 0', color: '#ede8df', zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'rgba(237,232,223,0.55)' }}>Abril 2026</span>
      </h1>

      {/* Sub */}
      <p
        className="hero__sub hero-enter"
        style={{
          fontSize: 'clamp(0.78rem, 2vw, 0.95rem)', maxWidth: '440px',
          color: '#ede8df', opacity: 0.75, margin: '0 auto 1.75rem',
          zIndex: 2, lineHeight: 1.45, fontWeight: 500
        }}
      >
        Análisis mensual de visibilidad y posicionamiento para{' '}
        <strong style={{ fontWeight: 700, color: '#ffffff' }}>Roots Logroño</strong>{' '}
        y{' '}
        <strong style={{ fontWeight: 700, color: '#ffffff' }}>Roots Haro</strong>.
      </p>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.45rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.58rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', borderRadius: '20px',
          border: '1px solid rgba(237,232,223,0.15)', color: '#ede8df', background: 'rgba(255,255,255,0.04)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: '0.58rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', borderRadius: '20px',
          border: '1px solid rgba(237,232,223,0.15)', color: '#ede8df', background: 'rgba(255,255,255,0.04)'
        }}>
          📍 Haro
        </span>
      </div>

      {/* Scroll hint */}
      <div className="hero-enter" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.45rem',
          fontSize: '0.52rem', fontWeight: '600', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(237,232,223,0.25)'
        }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(237,232,223,0.15)' }} />
          Desliza para comenzar
          <div style={{ width: '24px', height: '1px', background: 'rgba(237,232,223,0.15)' }} />
        </div>
      </div>
    </section>
  )
}

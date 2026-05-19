import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section hero"
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100dvh', paddingTop: 'calc(var(--nav-h, 54px) + 0.1rem)',
        paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem',
        textAlign: 'center', position: 'relative', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        background: '#e6dfd3',
      }}
    >
      {/* Subtle background word */}
      <div className="hero__bg-text" style={{ fontSize: 'clamp(4.5rem, 16vw, 12rem)', opacity: 0.03, letterSpacing: '-0.06em', color: '#1d1d1b' }}>
        ABRIL
      </div>

      {/* Logo */}
      <img
        src="./logo-invertido.png"
        alt="Roots Rioja"
        className="hero__logo hero-enter"
        style={{
          height: 'clamp(38px, 7.5vw, 54px)',
          marginBottom: '0.45rem',
          objectFit: 'contain',
          zIndex: 2,
          filter: 'brightness(0) saturate(100%)'
        }}
      />

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(1.75rem, 5.8vw, 3.2rem)', fontWeight: '900', lineHeight: 1.1,
          textTransform: 'uppercase', letterSpacing: '-0.04em',
          margin: '0 0 0.55rem 0', color: '#1d1d1b', zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'var(--color-muted)' }}>Abril 2026</span>
      </h1>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.35rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '0' }}>
        <span style={{
          fontSize: '0.52rem', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '0.25rem 0.65rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.12)', color: '#1d1d1b', background: 'rgba(255,255,255,0.4)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: '0.52rem', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '0.25rem 0.65rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.12)', color: '#1d1d1b', background: 'rgba(255,255,255,0.4)'
        }}>
          📍 Haro
        </span>
      </div>
    </section>
  )
}

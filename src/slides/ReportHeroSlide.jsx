import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section hero"
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100dvh', paddingTop: 'calc(var(--nav-h, 54px) + 0.25rem)',
        paddingBottom: '2.5rem', paddingLeft: '1.1rem', paddingRight: '1.1rem',
        textAlign: 'center', position: 'relative', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        background: '#e6dfd3',
      }}
    >
      {/* Subtle background word */}
      <div className="hero__bg-text" style={{ fontSize: 'clamp(4.5rem, 16vw, 12rem)', opacity: 0.03, letterSpacing: '-0.06em', color: '#1d1d1b' }}>
        ABRIL
      </div>

      {/* Report badge */}
      <div className="hero-enter" style={{ marginBottom: '0.8rem', zIndex: 2 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          fontSize: '0.52rem', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '0.38rem 0.8rem', borderRadius: '20px',
          background: 'rgba(29,29,27,0.06)', border: '1px solid rgba(29,29,27,0.12)',
          color: '#1d1d1b'
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-green)', display: 'inline-block' }} />
          Informe de Rendimiento Digital
        </span>
      </div>

      {/* Logo - Inverted image styled dynamically with CSS filter to dark brand black, removing any surrounding green circles */}
      <img
        src="./logo-invertido.png"
        alt="Roots Rioja"
        className="hero__logo hero-enter"
        style={{
          height: 'clamp(40px, 8.5vw, 62px)',
          marginBottom: '0.9rem',
          objectFit: 'contain',
          zIndex: 2,
          filter: 'brightness(0) saturate(100%)'
        }}
      />

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(1.8rem, 5.8vw, 3.2rem)', fontWeight: '900', lineHeight: 1.12,
          textTransform: 'uppercase', letterSpacing: '-0.04em',
          margin: '0 0 0.4rem 0', color: '#1d1d1b', zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'var(--color-muted)' }}>Abril 2026</span>
      </h1>

      {/* Sub */}
      <p
        className="hero__sub hero-enter"
        style={{
          fontSize: 'clamp(0.76rem, 1.85vw, 0.9rem)', maxWidth: '420px',
          color: '#1d1d1b', opacity: 0.82, margin: '0 auto 0.9rem',
          zIndex: 2, lineHeight: 1.4, fontWeight: 500
        }}
      >
        Análisis mensual de visibilidad y posicionamiento para{' '}
        <strong style={{ fontWeight: 700, color: 'var(--color-green)' }}>Roots Logroño</strong>{' '}
        y{' '}
        <strong style={{ fontWeight: 700, color: 'var(--color-green)' }}>Roots Haro</strong>.
      </p>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <span style={{
          fontSize: '0.55rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '0.3rem 0.75rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.12)', color: '#1d1d1b', background: 'rgba(255,255,255,0.4)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: '0.55rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '0.3rem 0.75rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.12)', color: '#1d1d1b', background: 'rgba(255,255,255,0.4)'
        }}>
          📍 Haro
        </span>
      </div>

      {/* Scroll hint - Moved substantially upwards */}
      <div className="hero-enter" style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.45rem',
          fontSize: '0.52rem', fontWeight: '600', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(29,29,27,0.32)'
        }}>
          <div style={{ width: '22px', height: '1px', background: 'rgba(29,29,27,0.15)' }} />
          Desliza para comenzar
          <div style={{ width: '22px', height: '1px', background: 'rgba(29,29,27,0.15)' }} />
        </div>
      </div>
    </section>
  )
}

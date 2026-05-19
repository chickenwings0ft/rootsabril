import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section hero"
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100dvh', paddingTop: 'calc(var(--nav-h, 54px) + 0.5rem)',
        paddingBottom: '3.5rem', paddingLeft: '1.25rem', paddingRight: '1.25rem',
        textAlign: 'center', position: 'relative', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        background: '#e6dfd3',
      }}
    >
      {/* Subtle background word */}
      <div className="hero__bg-text" style={{ fontSize: 'clamp(4.5rem, 16vw, 12rem)', opacity: 0.035, letterSpacing: '-0.06em', color: '#1d1d1b' }}>
        ABRIL
      </div>

      {/* Report badge */}
      <div className="hero-enter" style={{ marginBottom: '1.5rem', zIndex: 2 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          fontSize: '0.54rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '0.45rem 1rem', borderRadius: '20px',
          background: 'rgba(29,29,27,0.06)', border: '1px solid rgba(29,29,27,0.14)',
          color: '#1d1d1b'
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-green)', display: 'inline-block' }} />
          Informe de Rendimiento Digital
        </span>
      </div>

      {/* Logo Container - Styled seal to contrast logo-invertido (white) on cream */}
      <div 
        className="hero-enter"
        style={{
          width: 'clamp(80px, 15vw, 110px)',
          height: 'clamp(80px, 15vw, 110px)',
          borderRadius: '50%',
          background: '#1d3535',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(29,53,53,0.18)',
          marginBottom: '1.75rem',
          zIndex: 2,
          padding: '1.2rem'
        }}
      >
        <img
          src="./logo-invertido.png"
          alt="Roots Rioja"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(1.85rem, 6vw, 3.4rem)', fontWeight: '900', lineHeight: 1.15,
          textTransform: 'uppercase', letterSpacing: '-0.04em',
          margin: '0 0 0.85rem 0', color: '#1d1d1b', zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'var(--color-muted)' }}>Abril 2026</span>
      </h1>

      {/* Sub */}
      <p
        className="hero__sub hero-enter"
        style={{
          fontSize: 'clamp(0.78rem, 2vw, 0.95rem)', maxWidth: '440px',
          color: '#1d1d1b', opacity: 0.8, margin: '0 auto 1.75rem',
          zIndex: 2, lineHeight: 1.45, fontWeight: 500
        }}
      >
        Análisis mensual de visibilidad y posicionamiento para{' '}
        <strong style={{ fontWeight: 700, color: 'var(--color-green)' }}>Roots Logroño</strong>{' '}
        y{' '}
        <strong style={{ fontWeight: 700, color: 'var(--color-green)' }}>Roots Haro</strong>.
      </p>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.45rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.58rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.14)', color: '#1d1d1b', background: 'rgba(255,255,255,0.5)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: '0.58rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.14)', color: '#1d1d1b', background: 'rgba(255,255,255,0.5)'
        }}>
          📍 Haro
        </span>
      </div>

      {/* Scroll hint */}
      <div className="hero-enter" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.45rem',
          fontSize: '0.52rem', fontWeight: '600', letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(29,29,27,0.3)'
        }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(29,29,27,0.15)' }} />
          Desliza para comenzar
          <div style={{ width: '24px', height: '1px', background: 'rgba(29,29,27,0.15)' }} />
        </div>
      </div>
    </section>
  )
}

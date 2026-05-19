import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section section--dark hero"
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        height: '100dvh', paddingTop: 'calc(var(--nav-h, 54px) + 1rem)',
        paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'var(--color-cream)',
      }}
    >
      {/* Subtle background word */}
      <div className="hero__bg-text" style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', opacity: 0.035, letterSpacing: '-0.06em' }}>
        ABRIL
      </div>

      {/* Report badge */}
      <div className="hero-enter" style={{ marginBottom: '1.75rem', zIndex: 2 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.58rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '0.45rem 1rem', borderRadius: '20px',
          background: 'rgba(29,53,53,0.08)', border: '1px solid rgba(29,53,53,0.18)',
          color: 'var(--color-green)'
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-green)', display: 'inline-block' }} />
          Informe de Rendimiento Digital
        </span>
      </div>

      {/* Logo */}
      <img
        src="./logo-original.png"
        alt="Roots Rioja"
        className="hero__logo hero-enter"
        style={{ height: 'clamp(48px, 10vw, 80px)', marginBottom: '1.75rem', objectFit: 'contain', zIndex: 2 }}
      />

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(2rem, 6.5vw, 3.8rem)', fontWeight: '900', lineHeight: 1.1,
          textTransform: 'uppercase', letterSpacing: '-0.05em',
          margin: '0 0 1rem 0', color: '#1d1d1b', zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'var(--color-muted)' }}>Abril 2026</span>
      </h1>

      {/* Sub */}
      <p
        className="hero__sub hero-enter"
        style={{
          fontSize: 'clamp(0.82rem, 2.2vw, 1rem)', maxWidth: '460px',
          color: '#3d3d3b', opacity: 0.8, margin: '0 auto 2rem',
          zIndex: 2, lineHeight: 1.5, fontWeight: 500
        }}
      >
        Análisis mensual de visibilidad y posicionamiento para{' '}
        <strong style={{ fontWeight: 700, color: '#1d1d1b' }}>Roots Logroño</strong>{' '}
        y{' '}
        <strong style={{ fontWeight: 700, color: '#1d1d1b' }}>Roots Haro</strong>.
      </p>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '0.4rem 0.9rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.18)', color: '#1d1d1b', background: 'rgba(255,255,255,0.6)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: '0.6rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '0.4rem 0.9rem', borderRadius: '20px',
          border: '1px solid rgba(29,29,27,0.18)', color: '#1d1d1b', background: 'rgba(255,255,255,0.6)'
        }}>
          📍 Haro
        </span>
      </div>

      {/* Scroll hint */}
      <div className="hero-enter" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '0.55rem', fontWeight: '600', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'rgba(29,29,27,0.35)'
        }}>
          <div style={{ width: '28px', height: '1px', background: 'rgba(29,29,27,0.2)' }} />
          Desliza para comenzar
          <div style={{ width: '28px', height: '1px', background: 'rgba(29,29,27,0.2)' }} />
        </div>
      </div>
    </section>
  )
}

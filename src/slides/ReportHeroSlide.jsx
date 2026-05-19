import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section
      className="section section--dark hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100dvh',
        height: 'auto',
        paddingTop: 'calc(var(--nav-h, 54px) + 2rem)',
        paddingBottom: '6rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        textAlign: 'center',
        position: 'relative',
        background: '#1d1d1b',
        width: '100%',
        overflowY: 'auto'
      }}
    >
      {/* Subtle background word */}
      <div 
        className="hero__bg-text" 
        style={{ 
          fontSize: 'clamp(4.5rem, 16vw, 12rem)', 
          opacity: 0.015, 
          letterSpacing: '-0.06em', 
          color: '#ede8df',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        ABRIL
      </div>

      {/* Report badge */}
      <div className="hero-enter" style={{ marginBottom: '1.35rem', zIndex: 2 }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: 'clamp(0.5rem, 1.8vw, 0.58rem)',
          fontWeight: '800',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          padding: '0.4rem 0.85rem',
          borderRadius: '20px',
          background: 'rgba(237,232,223,0.06)',
          border: '1px solid rgba(237,232,223,0.14)',
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
        style={{ 
          height: 'clamp(40px, 8.5vw, 68px)', 
          marginBottom: '1.5rem', 
          objectFit: 'contain', 
          zIndex: 2,
          flexShrink: 0 
        }}
      />

      {/* Title */}
      <h1
        className="hero__title hero-enter"
        style={{
          fontSize: 'clamp(1.75rem, 5.5vw, 3.4rem)', 
          fontWeight: '900', 
          lineHeight: 1.15,
          textTransform: 'uppercase', 
          letterSpacing: '-0.04em',
          margin: '0 0 1rem 0', 
          color: '#ede8df', 
          zIndex: 2
        }}
      >
        Informe SEO{' '}
        <span style={{ color: 'rgba(237,232,223,0.55)' }}>Abril 2026</span>
      </h1>

      {/* Sub */}
      <p
        className="hero__sub hero-enter"
        style={{
          fontSize: 'clamp(0.76rem, 2vw, 0.95rem)', 
          maxWidth: '440px',
          color: '#ede8df', 
          opacity: 0.75, 
          margin: '0 auto 2rem',
          zIndex: 2, 
          lineHeight: 1.45, 
          fontWeight: 500
        }}
      >
        Análisis mensual de visibilidad y posicionamiento para{' '}
        <strong style={{ fontWeight: 700, color: '#ffffff' }}>Roots Logroño</strong>{' '}
        y{' '}
        <strong style={{ fontWeight: 700, color: '#ffffff' }}>Roots Haro</strong>.
      </p>

      {/* Location badges */}
      <div className="hero-enter" style={{ zIndex: 2, display: 'flex', gap: '0.45rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <span style={{
          fontSize: 'clamp(0.52rem, 1.6vw, 0.58rem)', 
          fontWeight: '700', 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', 
          borderRadius: '20px',
          border: '1px solid rgba(237,232,223,0.15)', 
          color: '#ede8df', 
          background: 'rgba(255,255,255,0.04)'
        }}>
          📍 Logroño
        </span>
        <span style={{
          fontSize: 'clamp(0.52rem, 1.6vw, 0.58rem)', 
          fontWeight: '700', 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase',
          padding: '0.35rem 0.8rem', 
          borderRadius: '20px',
          border: '1px solid rgba(237,232,223,0.15)', 
          color: '#ede8df', 
          background: 'rgba(255,255,255,0.04)'
        }}>
          📍 Haro
        </span>
      </div>

      {/* Scroll hint (Only layout visual spacer on mobile, fixed element hidden/absolute) */}
      <div className="hero-enter" style={{ zIndex: 2, marginTop: 'auto' }}>
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.45rem',
          fontSize: '0.52rem', 
          fontWeight: '600', 
          letterSpacing: '0.15em',
          textTransform: 'uppercase', 
          color: 'rgba(237,232,223,0.25)'
        }}>
          <div style={{ width: '20px', height: '1px', background: 'rgba(237,232,223,0.15)' }} />
          Desliza para comenzar
          <div style={{ width: '20px', height: '1px', background: 'rgba(237,232,223,0.15)' }} />
        </div>
      </div>
    </section>
  )
}

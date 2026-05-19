import React from 'react'

export default function ReportHeroSlide() {
  return (
    <section className="slide-section">
      <div 
        className="slide-inner" 
        style={{ 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: '1rem',
          height: '100%',
          paddingTop: 'calc(var(--nav-h) + 0.5rem)',
          paddingBottom: '3.5rem'
        }}
      >
        {/* Subtle background word */}
        <div className="hero__bg-text" style={{ fontSize: 'clamp(4.5rem, 16vw, 12rem)', opacity: 0.03, letterSpacing: '-0.06em', color: '#1d1d1b', position: 'absolute' }}>
          ABRIL
        </div>

        {/* Central cohesive block */}
        <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
          {/* Title */}
          <h1
            className="hero__title hero-enter"
            style={{
              fontSize: 'clamp(1.75rem, 5.8vw, 3.2rem)', 
              fontWeight: '900', 
              lineHeight: 1.1,
              textTransform: 'uppercase', 
              letterSpacing: '-0.04em',
              margin: '0', 
              color: '#1d1d1b'
            }}
          >
            Informe SEO{' '}
            <span style={{ color: 'var(--color-muted)' }}>Abril 2026</span>
          </h1>

          {/* Location badges */}
          <div className="hero-enter" style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.52rem', 
              fontWeight: '700', 
              letterSpacing: '0.06em', 
              textTransform: 'uppercase',
              padding: '0.28rem 0.7rem', 
              borderRadius: '20px',
              border: '1px solid rgba(29,29,27,0.12)', 
              color: '#1d1d1b', 
              background: 'rgba(255,255,255,0.45)'
            }}>
              📍 Logroño
            </span>
            <span style={{
              fontSize: '0.52rem', 
              fontWeight: '700', 
              letterSpacing: '0.06em', 
              textTransform: 'uppercase',
              padding: '0.28rem 0.7rem', 
              borderRadius: '20px',
              border: '1px solid rgba(29,29,27,0.12)', 
              color: '#1d1d1b', 
              background: 'rgba(255,255,255,0.45)'
            }}>
              📍 Haro
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

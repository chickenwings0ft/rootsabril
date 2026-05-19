import React from 'react'

export default function TransitionActionSlide() {
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
        <div className="hero__bg-text" style={{ fontSize: 'clamp(3.5rem, 14vw, 10rem)', opacity: 0.03, letterSpacing: '-0.06em', color: '#1d1d1b', position: 'absolute' }}>
          ACCIONES
        </div>

        {/* Central cohesive block */}
        <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
          {/* Title */}
          <h1
            className="hero__title hero-enter"
            style={{
              fontSize: 'clamp(2rem, 6.8vw, 3.8rem)', 
              fontWeight: '900', 
              lineHeight: 1.15,
              textTransform: 'uppercase', 
              letterSpacing: '-0.04em',
              margin: '0', 
              color: '#1d1d1b'
            }}
          >
            ¿Qué se ha{' '}
            <span style={{ color: 'var(--color-green)' }}>hecho?</span>
          </h1>

          {/* Subtitle / Transition label */}
          <p className="hero-enter" style={{
            fontSize: '0.62rem',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7a7060',
            marginTop: '0.2rem'
          }}>
            Implementación Técnica y Optimizaciones Web
          </p>

        </div>

      </div>
    </section>
  )
}

import React from 'react'

export default function TechImplementationSlideP2() {
  const handleOpenLanding = () => {
    window.open('https://rootsrioja.com/winebar', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem', height: '100%' }}>

        {/* Header */}
        <header className="slide-header" style={{ flexShrink: 0 }}>
          <p className="slide-label">Canales de Conversión · Páginas de Destino</p>
          <h2 className="slide-title reveal">Páginas de Destino Especializadas (Landings)</h2>
          <p className="slide-desc reveal">
            Sección de alto impacto diseñada para la conversión directa de Brunch, Menú y Vinos.
          </p>
        </header>

        {/* Browser Frame Layout */}
        <div 
          className="reveal"
          style={{
            flex: 1,
            width: '100%',
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid rgba(29, 53, 53, 0.15)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minHeight: 0,
            position: 'relative'
          }}
        >
          {/* Browser Top Bar Mock */}
          <div style={{
            padding: '0.55rem 0.85rem',
            background: '#ede8df',
            borderBottom: '1px solid rgba(29, 29, 27, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0
          }}>
            {/* Window dots */}
            <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
            </div>

            {/* Address Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1.5px solid rgba(29, 29, 27, 0.08)',
              borderRadius: '6px',
              padding: '0.2rem 1.5rem',
              fontSize: '0.62rem',
              color: 'var(--color-green)',
              fontWeight: '700',
              textAlign: 'center',
              width: '65%',
              maxWidth: '380px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}>
              🔒 <span style={{ opacity: 0.85 }}>rootsrioja.com/winebar</span>
            </div>

            {/* Empty Right Column for balance */}
            <div style={{ width: '36px' }} />
          </div>

          {/* Styled Hub/Preview Area */}
          <div style={{ 
            flex: 1, 
            background: 'var(--color-cream)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '1.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Decorative background visual items representing roots wine bar style */}
            <div style={{
              position: 'absolute', width: '280px', height: '280px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(29,53,53,0.03) 0%, transparent 70%)',
              top: '-10%', left: '-10%', pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute', width: '280px', height: '280px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(29,53,53,0.03) 0%, transparent 70%)',
              bottom: '-10%', right: '-10%', pointerEvents: 'none'
            }} />

            {/* Brand Logo and Content */}
            <div style={{ maxWidth: '400px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
              
              <div style={{
                fontSize: '1.8rem',
                lineHeight: 1,
                marginBottom: '0.25rem'
              }}>🍷</div>

              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-green)',
                margin: 0
              }}>
                Roots Winebar
              </h3>

              <p style={{
                fontSize: '0.72rem',
                color: 'var(--color-dark)',
                lineHeight: 1.5,
                margin: 0,
                opacity: 0.85,
                fontWeight: 500
              }}>
                Portal de reservas e información de producto en vivo. Desarrollada para agilizar el proceso de reserva y mejorar el posicionamiento SEO local de brunch, menús y vinos.
              </p>

              {/* Call to Action Button */}
              <button 
                onClick={handleOpenLanding}
                style={{
                  marginTop: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  background: '#1d3535',
                  color: '#ede8df',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '0.68rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 16px rgba(29,53,53,0.22)',
                  transition: 'transform 0.2s, background 0.25s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = '#254848'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#1d3535'; }}
              >
                Abrir Landing Page ↗
              </button>
            </div>
          </div>

          {/* User Hint Footer */}
          <div style={{
            padding: '0.55rem 0.85rem',
            background: '#fcfbfa',
            borderTop: '1px solid rgba(29, 29, 27, 0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <p style={{ margin: 0, fontSize: '0.54rem', fontWeight: '700', color: 'var(--color-muted)', textAlign: 'center' }}>
              💡 Al pulsar el botón se abrirá la web oficial en una nueva pestaña del navegador.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

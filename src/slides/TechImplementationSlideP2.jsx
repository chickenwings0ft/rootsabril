import React, { useState } from 'react'

export default function TechImplementationSlideP2() {
  const [iframeLoading, setIframeLoading] = useState(true)

  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.55rem', height: '100%' }}>

        {/* Header */}
        <header className="slide-header" style={{ flexShrink: 0 }}>
          <p className="slide-label">Canales de Conversión · Páginas de Destino</p>
          <h2 className="slide-title reveal">Nueva Landing Page en Vivo</h2>
          <p className="slide-desc reveal">
            Sección especializada para captación de clientes de Brunch, Menú y Vinos:{' '}
            <strong style={{ color: 'var(--color-green)' }}>rootsrioja.com/winebar</strong>
          </p>
        </header>

        {/* Browser Frame Layout */}
        <div 
          className="reveal swiper-no-swiping"
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
            padding: '0.45rem 0.85rem',
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
              width: '55%',
              maxWidth: '360px',
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

            {/* Live Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#27c93f',
                animation: 'pulseGreen 1.5s infinite'
              }} />
              <span style={{ fontSize: '0.52rem', fontWeight: '800', textTransform: 'uppercase', color: '#27c93f', letterSpacing: '0.05em' }}>
                Interactivo
              </span>
            </div>
          </div>

          {/* Iframe View Area */}
          <div style={{ flex: 1, position: 'relative', background: '#ffffff', minHeight: 0 }}>
            {iframeLoading && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(252, 251, 250, 0.98)',
                gap: '0.65rem',
                zIndex: 2
              }}>
                <div style={{
                  width: '26px',
                  height: '26px',
                  border: '2.5px solid rgba(29, 53, 53, 0.12)',
                  borderTop: '2.5px solid var(--color-green)',
                  borderRadius: '50%',
                  animation: 'spinLoader 0.8s linear infinite'
                }} />
                <span style={{ fontSize: '0.58rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-green)', letterSpacing: '0.08em' }}>
                  Cargando demo en vivo...
                </span>
              </div>
            )}
            <iframe
              src="https://rootsrioja.com/winebar"
              title="Demo en vivo de la Landing Page Winebar"
              style={{ width: '100%', height: '100%', border: 'none' }}
              onLoad={() => setIframeLoading(false)}
            />
          </div>

          {/* User Hint Footer */}
          <div style={{
            padding: '0.45rem 0.85rem',
            background: '#fcfbfa',
            borderTop: '1px solid rgba(29, 29, 27, 0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <p style={{ margin: 0, fontSize: '0.56rem', fontWeight: '700', color: 'var(--color-muted)', textAlign: 'center' }}>
              👆 <strong>Prueba real:</strong> Puedes hacer scroll, navegar y pulsar botones dentro de la ventana de arriba.
            </p>
          </div>
        </div>

      </div>

      {/* Animation rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.4); }
          70% { box-shadow: 0 0 0 5px rgba(39, 201, 63, 0); }
          100% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }
        @keyframes spinLoader {
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  )
}

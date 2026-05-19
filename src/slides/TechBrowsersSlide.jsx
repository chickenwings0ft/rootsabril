import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function TechBrowsersSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const browsers = [
    { icon: '🌐', name: 'Google Chrome', users: '526', pct: '46.34%', engagement: '61.95%', time: '57s', events: '4.598', barW: '46%', primary: true },
    { icon: '🍎', name: 'Safari (iPhone)', users: '468', pct: '41.23%', engagement: '63.59%', time: '40s', events: null, barW: '41%', primary: true },
  ]

  const others = [
    { name: 'Firefox', pct: '3.08%' },
    { name: 'Android Webview', pct: '2.47%' },
    { name: 'Edge', pct: '2.29%' },
    { name: 'Samsung Internet', pct: '2.03%' },
  ]

  return (
    <>
      <section className="slide-section">
        <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

          {/* Header */}
          <header className="slide-header">
            <p className="slide-label">Análisis Tecnológico</p>
            <h2 className="slide-title reveal">Navegadores de Usuarios</h2>
            <p className="slide-desc reveal">
              Dispositivos y navegadores que usan los clientes para acceder a la web de Roots — Abril 2026.
            </p>
          </header>

          {/* Main Body */}
          <div className="slide-body" style={{ gap: '0.6rem' }}>

            {/* Chart Frame */}
            <div className="chart-frame reveal" onClick={() => setIsLightboxOpen(true)} role="button" aria-label="Ver gráfico ampliado" style={{ height: 'clamp(100px, 18dvh, 170px)' }}>
              <img src="./datos-de-tec.png" alt="Gráfico de Distribución de Navegadores" className="chart-img" />
              <span className="zoom-badge">🔍 Zoom</span>
            </div>

            {/* Main browsers as structured cards */}
            <div className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
              {browsers.map((b) => (
                <div key={b.name} className="insight-card" style={{ padding: '0.75rem 0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.9rem' }}>{b.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.2 }}>{b.name}</div>
                        <div style={{ fontSize: '0.58rem', fontWeight: '600', color: '#7a7060' }}>{b.users} usuarios activos</div>
                      </div>
                    </div>
                    {/* Share badge */}
                    <div style={{
                      fontSize: '0.7rem', fontWeight: '900', color: 'var(--color-green)',
                      background: 'rgba(29,53,53,0.07)', border: '1px solid rgba(29,53,53,0.14)',
                      padding: '0.15rem 0.45rem', borderRadius: '20px'
                    }}>{b.pct}</div>
                  </div>
                  {/* Mini bar */}
                  <div style={{ height: '3px', background: 'rgba(29,29,27,0.07)', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.4rem' }}>
                    <div style={{ width: b.barW, height: '100%', background: 'linear-gradient(90deg, var(--color-green), var(--color-green-accent))', borderRadius: '3px' }} />
                  </div>
                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: '600', color: '#4a5a4a' }}>
                      <strong style={{ color: '#1a1a18' }}>{b.engagement}</strong> interacción
                    </span>
                    <span style={{ fontSize: '0.62rem', fontWeight: '600', color: '#4a5a4a' }}>
                      <strong style={{ color: '#1a1a18' }}>{b.time}</strong> sesión media
                    </span>
                    {b.events && (
                      <span style={{ fontSize: '0.62rem', fontWeight: '600', color: '#4a5a4a' }}>
                        <strong style={{ color: '#1a1a18' }}>{b.events}</strong> eventos
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Others row */}
              <div className="insight-card" style={{ padding: '0.6rem 0.95rem', background: 'rgba(255,255,255,0.35)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '0.85rem' }}>📊</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#1a1a18' }}>Otros Navegadores</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {others.map((o) => (
                    <span key={o.name} style={{
                      fontSize: '0.6rem', fontWeight: '700', padding: '0.18rem 0.5rem',
                      borderRadius: '20px', background: 'rgba(29,29,27,0.05)',
                      border: '1px solid rgba(29,29,27,0.1)', color: '#4a4a48'
                    }}>
                      {o.name} · {o.pct}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div className="lightbox swiper-no-swiping" onClick={() => setIsLightboxOpen(false)} role="dialog" aria-label="Cerrar imagen ampliada">
          <img src="./datos-de-tec.png" alt="Zoom Navegadores de Usuarios" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setIsLightboxOpen(false)}>✕ Cerrar</button>
        </div>,
        document.body
      )}
    </>
  )
}

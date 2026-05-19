import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function TechBrowsersSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const devices = [
    {
      icon: '📱',
      name: 'Dispositivo móvil',
      pct: '75,33%',
      desc: 'de los usuarios',
      barW: '75.33%',
      accent: true,
    },
    {
      icon: '💻',
      name: 'Desktop (ordenador)',
      pct: '23,96%',
      desc: 'de los usuarios',
      barW: '23.96%',
      accent: false,
    },
    {
      icon: '📲',
      name: 'Tablet',
      pct: '0,88%',
      desc: 'de los usuarios',
      barW: '1%',
      accent: false,
    },
  ]

  return (
    <>
      <section className="slide-section">
        <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

          {/* Header */}
          <header className="slide-header">
            <p className="slide-label">Análisis Tecnológico</p>
            <h2 className="slide-title reveal">Dispositivos de los Usuarios</h2>
            <p className="slide-desc reveal">
              Porcentaje de usuarios que acceden desde móvil, ordenador o tablet para consultar la web de Roots.
            </p>
          </header>

          {/* Main Body */}
          <div className="slide-body" style={{ gap: '0.6rem' }}>

            {/* Chart Frame */}
            <div className="chart-frame reveal" onClick={() => setIsLightboxOpen(true)} role="button" aria-label="Ver gráfico ampliado" style={{ height: 'clamp(100px, 18dvh, 170px)' }}>
              <img src="./datos-de-tec.png" alt="Gráfico de Distribución de Dispositivos" className="chart-img" />
              <span className="zoom-badge">🔍 Zoom</span>
            </div>

            {/* Devices list as structured cards */}
            <div className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1, justifyContent: 'center' }}>
              {devices.map((d) => (
                <div key={d.name} className="insight-card" style={{ 
                  padding: '0.7rem 0.95rem',
                  borderColor: d.accent ? 'rgba(29,53,53,0.22)' : undefined,
                  background: d.accent ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.55)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{d.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '800', color: d.accent ? 'var(--color-green)' : '#1a1a18', lineHeight: 1.2 }}>{d.name}</div>
                        <div style={{ fontSize: '0.6rem', fontWeight: '600', color: '#7a7060', marginTop: '0.04rem' }}>{d.desc}</div>
                      </div>
                    </div>
                    {/* Share percentage badge */}
                    <div style={{
                      fontSize: '0.85rem', fontWeight: '900', color: d.accent ? 'var(--color-green)' : '#1d3535',
                      background: d.accent ? 'rgba(29,53,53,0.07)' : 'rgba(29,29,27,0.04)', 
                      border: `1px solid ${d.accent ? 'rgba(29,53,53,0.14)' : 'rgba(29,29,27,0.08)'}`,
                      padding: '0.2rem 0.55rem', borderRadius: '20px'
                    }}>{d.pct}</div>
                  </div>
                  {/* Visual scale bar */}
                  <div style={{ height: '4px', background: 'rgba(29,29,27,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: d.barW, 
                      height: '100%', 
                      background: d.accent ? 'linear-gradient(90deg, var(--color-green), var(--color-green-accent))' : 'rgba(29,29,27,0.22)', 
                      borderRadius: '3px' 
                    }} />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div className="lightbox swiper-no-swiping" onClick={() => setIsLightboxOpen(false)} role="dialog" aria-label="Cerrar imagen ampliada">
          <img src="./datos-de-tec.png" alt="Zoom Distribución de Dispositivos" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setIsLightboxOpen(false)}>✕ Cerrar</button>
        </div>,
        document.body
      )}
    </>
  )
}

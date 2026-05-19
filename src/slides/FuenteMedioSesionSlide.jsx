import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function FuenteMedioSesionSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const sources = [
    {
      icon: '🔍',
      name: 'Google / Organic (SEO)',
      sessions: '664',
      pct: '44%',
      engagement: null,
      time: null,
      barW: '44%',
      accent: true,
    },
    {
      icon: '⭐',
      name: 'Directo',
      sessions: '449',
      pct: '29,72%',
      engagement: null,
      time: null,
      barW: '30%',
      accent: false,
    },
    {
      icon: '📸',
      name: 'Instagram',
      sessions: '138',
      pct: '9,15%',
      engagement: null,
      time: null,
      barW: '9%',
      accent: false,
    },
  ]

  return (
    <>
      <section className="slide-section">
        <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.6rem' }}>

          {/* Header */}
          <header className="slide-header">
            <p className="slide-label">Origen del Tráfico</p>
            <h2 className="slide-title reveal">Fuente / Medio de Sesión</h2>
            <p className="slide-desc reveal">
              Esta métrica nos dice exactamente de dónde proviene cada una de las visitas que recibe la web, sin importar si es un cliente nuevo o alguien que vuelve a entrar.
            </p>
          </header>

          {/* Main Body */}
          <div className="slide-body" style={{ gap: '0.55rem' }}>

            {/* Chart Frame */}
            <div
              className="chart-frame reveal"
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              aria-label="Ver gráfico ampliado"
              style={{ height: 'clamp(100px, 18dvh, 165px)' }}
            >
              <img src="./fuente-medio-sesion.png" alt="Gráfico de Fuente y Medio de la Sesión" className="chart-img" />
              <span className="zoom-badge">🔍 Zoom</span>
            </div>

            {/* Global summary pill */}
            <div className="reveal" style={{
              background: 'rgba(29,53,53,0.06)', border: '1px solid rgba(29,53,53,0.14)',
              borderRadius: '10px', padding: '0.5rem 0.85rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0
            }}>
              <span style={{ fontSize: '0.85rem' }}>📊</span>
              <p style={{ fontSize: '0.7rem', fontWeight: '600', color: '#1a1a18', margin: 0, lineHeight: 1.3 }}>
                <strong>1.509 sesiones totales</strong> · interacción global <strong>61.63%</strong> · permanencia media <strong>35 segundos</strong>
              </p>
            </div>

            {/* Sources list */}
            <div className="reveal-stagger" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem', overflowY: 'auto', paddingRight: '3px' }}>
              {sources.map((s) => (
                <div key={s.name} className="insight-card" style={{
                  padding: '0.6rem 0.9rem',
                  borderColor: s.accent ? 'rgba(29,53,53,0.22)' : undefined,
                  background: s.accent ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.55)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem' }}>{s.icon}</span>
                      <span style={{ fontSize: '0.74rem', fontWeight: s.accent ? '800' : '700', color: s.accent ? 'var(--color-green)' : '#1a1a18' }}>{s.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {s.engagement && (
                        <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#2d6a2d', background: 'rgba(45,106,45,0.08)', border: '1px solid rgba(45,106,45,0.16)', padding: '0.1rem 0.4rem', borderRadius: '20px' }}>
                          {s.engagement} interacción
                        </span>
                      )}
                      {s.time && (
                        <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#5a7a5a' }}>{s.time}</span>
                      )}
                      <span style={{ fontSize: '0.72rem', fontWeight: '900', color: '#1d3535', minWidth: '38px', textAlign: 'right' }}>{s.sessions}</span>
                      <span style={{ fontSize: '0.62rem', fontWeight: '600', color: '#7a7060', minWidth: '36px' }}>({s.pct})</span>
                    </div>
                  </div>
                  <div style={{ height: '3px', background: 'rgba(29,29,27,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: s.barW, height: '100%', borderRadius: '3px',
                      background: s.accent ? 'linear-gradient(90deg, var(--color-green), var(--color-green-accent))' : 'rgba(29,29,27,0.2)'
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
          <img src="./fuente-medio-sesion.png" alt="Zoom Fuente y Medio de la Sesión" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setIsLightboxOpen(false)}>✕ Cerrar</button>
        </div>,
        document.body
      )}
    </>
  )
}

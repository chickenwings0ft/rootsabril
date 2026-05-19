import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ConversionesSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const insights = [
    {
      icon: '📄',
      title: 'Páginas Vistas',
      stats: [
        { val: '3.227', label: 'Páginas vistas en total' },
        { val: '2,84', label: 'Páginas por usuario' },
      ],
      body: 'Cada persona visita una media de casi 3 secciones distintas de la web (ej. inicio, carta, reservas).',
    },
    {
      icon: '🍷',
      title: 'Reservas Roots Logroño',
      stats: [
        { val: '68', label: 'Clics en el botón de reserva', accent: true },
        { val: '45', label: 'Personas distintas', accent: true },
      ],
      body: 'Refleja directamente cuántos usuarios pulsaron el nuevo botón de contacto con la intención de reservar mesa.',
      highlight: true,
    },
  ]

  return (
    <>
      <section className="slide-section">
        <div className="slide-inner">

          {/* Header */}
          <header className="slide-header">
            <p className="slide-label">Conversiones y Eventos</p>
            <h2 className="slide-title reveal">Análisis de Interacciones (14 de abril - 14 de mayo 2026)</h2>
            <p className="slide-desc reveal">
              Al ser el primer mes que medimos estos datos, estas cifras establecen nuestro punto de partida o "línea base".
            </p>
          </header>

          {/* Main Content */}
          <div className="slide-body" style={{ minHeight: 0 }}>

            {/* Chart */}
            <div
              className="chart-frame reveal"
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              aria-label="Ver gráfico ampliado"
              style={{ height: 'clamp(90px, 15dvh, 130px)', flexShrink: 0 }}
            >
              <img
                src="./3. Convcersiones.png"
                alt="Gráfico de Conversiones y Eventos — GA4"
                className="chart-img"
              />
              <span className="zoom-badge">🔍 Zoom</span>
            </div>

            {/* Insight Cards & Footnote Stack */}
            <div className="insight-stack reveal-stagger" style={{ 
              flex: 1, 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              paddingRight: '3px',
              minHeight: 0
            }}>
              {insights.map((ins) => (
                <div key={ins.title} className="insight-card" style={{
                  padding: '0.8rem 1.05rem',
                  borderColor: ins.highlight ? 'rgba(29,53,53,0.22)' : undefined,
                  background: ins.highlight ? 'rgba(255,255,255,0.78)' : undefined,
                  flexShrink: 0
                }}>
                  <div className="insight-card__head" style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="insight-card__icon" style={{ fontSize: '1.1rem', lineHeight: 1 }}>{ins.icon}</span>
                    <h3 className={`insight-card__title${ins.highlight ? ' insight-card__title--accent' : ''}`} style={{ fontSize: '0.95rem', margin: 0 }}>{ins.title}</h3>
                  </div>
                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.45rem' }}>
                    {ins.stats.map((s) => (
                      <div key={s.label} style={{
                        flex: 1, textAlign: 'center', padding: '0.4rem 0.6rem',
                        borderRadius: '6px',
                        background: s.accent ? 'rgba(29,53,53,0.06)' : 'rgba(29,29,27,0.03)',
                        border: `1px solid ${s.accent ? 'rgba(29,53,53,0.12)' : 'rgba(29,29,27,0.06)'}`,
                      }}>
                        <div style={{
                          fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.04em',
                          color: s.accent ? 'var(--color-green)' : '#1a1a18', lineHeight: 1
                        }}>{s.val}</div>
                        <div style={{ fontSize: '0.58rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7a7060', marginTop: '0.1rem' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="insight-card__body" style={{ fontSize: '0.8rem', lineHeight: 1.45, margin: 0 }}>{ins.body}</p>
                </div>
              ))}

              {/* Note Footer inside the stack underneath the cards */}
              <div className="insight-analysis reveal" style={{ padding: '0.6rem 0.8rem', gap: '0.5rem', marginTop: '0.1rem', flexShrink: 0 }}>
                <span className="insight-analysis__icon" style={{ fontSize: '1.05rem' }}>📝</span>
                <p className="insight-analysis__text" style={{ fontSize: '0.68rem', lineHeight: 1.4, margin: 0 }}>
                  <strong>NOTA:</strong> no tenemos datos de cuánta gente reserva desde la web hasta ahora. La idea es ir mejorando mes a mes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div className="lightbox swiper-no-swiping" onClick={() => setIsLightboxOpen(false)} role="dialog" aria-label="Cerrar imagen ampliada">
          <img src="./3. Convcersiones.png" alt="Zoom Conversiones" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setIsLightboxOpen(false)}>✕ Cerrar</button>
        </div>,
        document.body
      )}
    </>
  )
}

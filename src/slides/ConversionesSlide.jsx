import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ConversionesSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const insights = [
    {
      icon: '📊',
      title: 'Volumen Total de Actividad',
      stats: [
        { val: '8.766', label: 'Eventos' },
        { val: '1.135', label: 'Usuarios únicos' },
      ],
      body: 'Actividad registrada durante el primer mes de medición — línea base de rendimiento.',
    },
    {
      icon: '📄',
      title: 'Páginas Vistas',
      stats: [
        { val: '3.227', label: 'Páginas vistas' },
        { val: '2.84', label: 'Páginas / usuario' },
      ],
      body: 'Una media de casi 3 páginas por usuario indica exploración activa del contenido.',
    },
    {
      icon: '🍷',
      title: 'Reservas Roots Logroño',
      stats: [
        { val: '68', label: 'Clics reserva', accent: true },
        { val: '45', label: 'Usuarios únicos', accent: true },
      ],
      body: 'Clics de intención de reserva (click_reserva_banner_contacto) en el primer mes.',
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
            <h2 className="slide-title reveal">Análisis de Interacciones</h2>
            <p className="slide-desc reveal">
              Del 14 de abril al 14 de mayo 2026. Primer mes de recopilación — línea base de rendimiento.
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

            {/* Insight Cards */}
            <div className="insight-stack reveal-stagger" style={{ 
              flex: 1, 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.35rem', 
              paddingRight: '3px',
              minHeight: 0
            }}>
              {insights.map((ins) => (
                <div key={ins.title} className="insight-card" style={{
                  padding: '0.5rem 0.75rem',
                  borderColor: ins.highlight ? 'rgba(29,53,53,0.22)' : undefined,
                  background: ins.highlight ? 'rgba(255,255,255,0.78)' : undefined,
                  flexShrink: 0
                }}>
                  <div className="insight-card__head" style={{ marginBottom: '0.2rem' }}>
                    <span className="insight-card__icon" style={{ fontSize: '0.75rem' }}>{ins.icon}</span>
                    <h3 className={`insight-card__title${ins.highlight ? ' insight-card__title--accent' : ''}`} style={{ fontSize: '0.74rem' }}>{ins.title}</h3>
                  </div>
                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    {ins.stats.map((s) => (
                      <div key={s.label} style={{
                        flex: 1, textAlign: 'center', padding: '0.25rem 0.35rem',
                        borderRadius: '6px',
                        background: s.accent ? 'rgba(29,53,53,0.06)' : 'rgba(29,29,27,0.03)',
                        border: `1px solid ${s.accent ? 'rgba(29,53,53,0.12)' : 'rgba(29,29,27,0.06)'}`,
                      }}>
                        <div style={{
                          fontSize: '0.85rem', fontWeight: '900', letterSpacing: '-0.04em',
                          color: s.accent ? 'var(--color-green)' : '#1a1a18', lineHeight: 1
                        }}>{s.val}</div>
                        <div style={{ fontSize: '0.45rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7a7060', marginTop: '0.05rem' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="insight-card__body" style={{ fontSize: '0.66rem', lineHeight: 1.35 }}>{ins.body}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Analysis Footer */}
          <div className="insight-analysis reveal" style={{ padding: '0.45rem 0.75rem', gap: '0.4rem', marginTop: 'auto', flexShrink: 0 }}>
            <span className="insight-analysis__icon" style={{ fontSize: '0.85rem' }}>🎯</span>
            <p className="insight-analysis__text" style={{ fontSize: '0.66rem', lineHeight: 1.35 }}>
              <strong>Análisis:</strong> El tráfico orgánico es compuesto por usuarios con intención de consumo real. Estas cifras son la línea base para optimizar la conversión.
            </p>
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

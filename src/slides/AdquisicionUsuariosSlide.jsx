import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function AdquisicionUsuariosSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const insights = [
    {
      icon: '🔍',
      title: 'SEO',
      stat: '485',
      statLabel: 'nuevos usuarios',
      pct: '43%',
      body: 'El posicionamiento web organico es el canal número uno. Casi la mitad de los visitantes entran de forma orgánica, lo que significa que la web aparece exactamente cuando la gente busca dónde comer o tomar algo.',
    },
    {
      icon: '⏱️',
      title: 'Visitas de alta calidad',
      stat: '51s',
      statLabel: 'de media',
      pct: null,
      body: 'Las personas que nos encuentran a través de Google son las que más tiempo pasan navegando por la web.',
    },
  ]

  return (
    <>
      <section className="slide-section">
        <div className="slide-inner">

          {/* Header */}
          <header className="slide-header">
            <p className="slide-label">Captación de Clientes</p>
            <h2 className="slide-title reveal">Rendimiento de Captación</h2>
            <p className="slide-desc reveal">
              Esta métrica nos dice exactamente cómo nos descubrió cada cliente la primera vez que pisó nuestra página web.
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
                src="./1. Adquisicion de usuarios.png"
                alt="Gráfico de Adquisición de Usuarios — GA4"
                className="chart-img"
              />
              <span className="zoom-badge">🔍 Zoom</span>
            </div>

            {/* Insight Cards */}
            <div className="insight-stack reveal-stagger">
              {insights.map((ins) => (
                <div key={ins.title} className="insight-card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Stat block */}
                  <div style={{
                    flexShrink: 0, minWidth: '60px', textAlign: 'center',
                    background: 'rgba(29,53,53,0.07)', border: '1px solid rgba(29,53,53,0.14)',
                    borderRadius: '10px', padding: '0.4rem 0.5rem'
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '900', letterSpacing: '-0.04em', color: 'var(--color-green)', lineHeight: 1 }}>{ins.stat}</div>
                    <div style={{ fontSize: '0.48rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5a7a5a', marginTop: '0.15rem', whiteSpace: 'nowrap' }}>{ins.statLabel}</div>
                    {ins.pct && <div style={{ fontSize: '0.62rem', fontWeight: '800', color: '#2d6a2d', marginTop: '0.1rem' }}>{ins.pct}</div>}
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="insight-card__head" style={{ marginBottom: '0.1rem' }}>
                      <span className="insight-card__icon">{ins.icon}</span>
                      <h3 className="insight-card__title">{ins.title}</h3>
                    </div>
                    <p className="insight-card__body">{ins.body}</p>
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
          <img src="./1. Adquisicion de usuarios.png" alt="Zoom Adquisición de Usuarios" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setIsLightboxOpen(false)}>✕ Cerrar</button>
        </div>,
        document.body
      )}
    </>
  )
}

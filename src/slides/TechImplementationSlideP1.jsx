import React from 'react'

const QABlock = ({ question, answer, qColor }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
    <div style={{ borderTop: '1px solid rgba(29,29,27,0.07)', paddingTop: '0.35rem' }}>
      <p style={{
        fontSize: '0.58rem', fontWeight: '800', color: qColor || '#1d3535',
        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.1rem'
      }}>
        {question}
      </p>
      <p className="insight-card__body">{answer}</p>
    </div>
  </div>
)

export default function TechImplementationSlideP1() {
  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">3</p>
          <h2 className="slide-title reveal" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 2.4rem)', fontWeight: '900' }}>Preguntas Frecuentes</h2>
          <p className="slide-desc reveal">
            Mejoras técnicas avanzadas para aumentar la visibilidad en Google y preparar la web para nuevos canales de captación.
          </p>
        </header>

        {/* Body: side by side on desktop, stacked mobile */}
        <div className="slide-body reveal-stagger">

          {/* Visual: FAQ Preview */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div className="chart-frame" style={{ flex: '1', minHeight: '160px', background: '#f8f9fa', borderRadius: '12px' }}>
              <img
                src="/preguntas-frecuentes.png"
                alt="Sección de preguntas frecuentes integradas con JSON-LD"
                className="chart-img"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <p style={{
              fontSize: '0.58rem', fontWeight: '800', color: '#5a7a5a',
              textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Vista real en roots.es
            </p>
          </div>

          {/* Text Content */}
          <div className="insight-stack" style={{ flex: '1.2', overflowY: 'auto', paddingRight: '4px' }}>
            <div className="insight-card" style={{ padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'rgba(29,53,53,0.08)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0
                }}>⚡</div>
                <h3 className="insight-card__title" style={{ fontSize: '0.85rem', fontWeight: '800' }}>
                  Preguntas Frecuentes
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <div>
                  <p style={{
                    fontSize: '0.62rem', fontWeight: '800', color: '#2d6a2d',
                    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem'
                  }}>
                    ¿Qué beneficio aporta?
                  </p>
                  <p className="insight-card__body" style={{ fontSize: '0.72rem', lineHeight: '1.4' }}>
                    Google puede mostrar nuestra página con mayor tamaño en los resultados, incluyendo preguntas y respuestas directamente. Ayudas al usuario a saber más sobre ti.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

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
          <p className="slide-label">Tareas Técnicas Realizadas · Parte 1</p>
          <h2 className="slide-title reveal">Implementaciones SEO</h2>
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
              fontSize: '0.55rem', fontWeight: '700', color: '#5a7a5a',
              textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Vista real en roots.es
            </p>
          </div>

          {/* Text Content */}
          <div className="insight-stack" style={{ flex: '1.2', overflowY: 'auto', paddingRight: '4px' }}>
            <div className="insight-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '8px',
                  background: 'rgba(29,53,53,0.08)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1rem', flexShrink: 0
                }}>⚡</div>
                <h3 className="insight-card__title">
                  A. Preguntas Frecuentes y Rich Snippets
                </h3>
              </div>
              <QABlock
                question="¿Qué se ha hecho?"
                answer="Secciones de preguntas frecuentes estratégicas integradas en la web y programadas con código JSON-LD invisible para el usuario."
                qColor="#1d3535"
              />
              <QABlock
                question="¿Qué beneficio aporta?"
                answer="Google puede mostrar nuestra página con mayor tamaño en los resultados, incluyendo preguntas y respuestas directamente. Más espacio visual = más clics frente a la competencia."
                qColor="#2d6a2d"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

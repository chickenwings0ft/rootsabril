import React from 'react'

export default function AiTrafficSlide() {
  const sources = [
    {
      name: 'Google Gemini',
      source: 'Integración en buscador (SGE)',
      icon: '✨',
      metrics: [
        { val: '32', label: 'Visitas' },
        { val: '78%', label: 'Interacción', positive: true },
      ],
      body: 'Conversaciones que recomiendan directamente el menú y la reserva.',
      highlight: true,
    },
    {
      name: 'ChatGPT Search & Perplexity',
      source: 'Búsquedas conversacionales',
      icon: '🧠',
      metrics: [
        { val: '18', label: 'Visitas' },
        { val: '65%', label: 'Interacción', positive: true },
      ],
      body: 'Usuarios que buscan "mejor restaurante en Logroño" y reciben el enlace.',
      highlight: false,
    },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Tráfico Emergente — Motores de IA (GEO)</p>
          <h2 className="slide-title reveal" style={{ color: 'var(--color-green)' }}>Recomendaciones de IA</h2>
          <p className="slide-desc reveal">
            Impacto directo de las optimizaciones GEO (Generative Engine Optimization).
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body" style={{ minHeight: 0, flexDirection: 'column', gap: '0.45rem' }}>

          {/* AI Source Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.45rem' }} className="reveal">
            {sources.map((src) => (
              <div key={src.name} className="insight-card" style={{
                borderColor: src.highlight ? 'rgba(29,53,53,0.25)' : undefined,
                background: src.highlight ? 'rgba(255,255,255,0.72)' : undefined,
                padding: '0.5rem 0.65rem'
              }}>
                {/* Card header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    background: src.highlight ? 'rgba(29,53,53,0.08)' : 'rgba(29,29,27,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', flexShrink: 0
                  }}>{src.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.1 }}>{src.name}</div>
                    <div style={{ fontSize: '0.52rem', color: '#7a7060', fontWeight: '600' }}>{src.source}</div>
                  </div>
                </div>

                {/* Metrics row */}
                <div style={{ display: 'flex', gap: '0.45rem', marginBottom: '0.3rem' }}>
                  {src.metrics.map((m) => (
                    <div key={m.label} style={{
                      flex: 1, background: m.positive ? 'rgba(45,106,45,0.08)' : 'rgba(29,29,27,0.04)',
                      border: `1px solid ${m.positive ? 'rgba(45,106,45,0.16)' : 'rgba(29,29,27,0.08)'}`,
                      borderRadius: '6px', padding: '0.25rem 0.35rem', textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '0.9rem', fontWeight: '900', letterSpacing: '-0.04em',
                        color: m.positive ? '#2d6a2d' : '#1d3535', lineHeight: 1
                      }}>{m.val}</div>
                      <div style={{ fontSize: '0.45rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7a7060', marginTop: '0.1rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="insight-card__body" style={{ fontSize: '0.52rem', margin: 0, lineHeight: 1.3 }}>{src.body}</p>
              </div>
            ))}
          </div>

          {/* Strategic value analysis */}
          <div className="insight-analysis reveal-stagger" style={{ padding: '0.45rem 0.6rem', gap: '0.45rem', marginTop: '0.1rem' }}>
            <span className="insight-analysis__icon" style={{ fontSize: '0.9rem' }}>🎯</span>
            <div>
              <h4 style={{ fontSize: '0.62rem', fontWeight: '800', color: '#1d3535', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.1rem' }}>Importancia Estratégica</h4>
              <p className="insight-analysis__text" style={{ fontSize: '0.52rem', lineHeight: 1.3, margin: 0 }}>
                Estas primeras visitas y su altísimo nivel de interacción demuestran que las optimizaciones permiten que los motores de IA indexen y recomienden el negocio de forma prioritaria. <strong>Continuar con datos estructurados es la acción clave para adelantarse a la competencia.</strong>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

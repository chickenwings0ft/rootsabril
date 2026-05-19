import React from 'react'

export default function AiTrafficSlide() {
  const sources = [
    {
      icon: '💬',
      name: 'ChatGPT',
      source: 'chatgpt.com (Direct & Referral)',
      metrics: [
        { val: '15', label: 'Sesiones Totales' },
        { val: '84.6%', label: 'Tasa Interacción', positive: true },
      ],
      body: '13 sesiones directas desde la interfaz de chat + 2 sesiones de referral. La mayor tasa de interacción registrada en el informe.',
      highlight: true,
    },
    {
      icon: '✨',
      name: 'Gemini',
      source: 'gemini.google.com',
      metrics: [
        { val: '2', label: 'Sesiones' },
        { val: '100%', label: 'Relevancia de Enlace', positive: true },
      ],
      body: 'El motor conversacional de Google ya incluye y recomienda activamente el negocio en respuestas para La Rioja.',
      highlight: false,
    },
  ]

  return (
    <section className="slide-section" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <div className="slide-inner swiper-no-swiping" style={{ height: 'auto', minHeight: '100%', paddingBottom: '4.5rem', gap: '0.8rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Tráfico Emergente — Motores de IA (GEO)</p>
          <h2 className="slide-title reveal" style={{ color: 'var(--color-green)' }}>Recomendaciones de IA</h2>
          <p className="slide-desc reveal">
            Impacto directo de las optimizaciones GEO (Generative Engine Optimization).
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body" style={{ flexDirection: 'column', gap: '0.65rem' }}>

          {/* AI Source Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem' }} className="reveal">
            {sources.map((src) => (
              <div key={src.name} className="insight-card" style={{
                borderColor: src.highlight ? 'rgba(29,53,53,0.25)' : undefined,
                background: src.highlight ? 'rgba(255,255,255,0.72)' : undefined,
              }}>
                {/* Card header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: src.highlight ? 'rgba(29,53,53,0.08)' : 'rgba(29,29,27,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0
                  }}>{src.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.2 }}>{src.name}</div>
                    <div style={{ fontSize: '0.58rem', color: '#7a7060', fontWeight: '600' }}>{src.source}</div>
                  </div>
                </div>

                {/* Metrics row */}
                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.45rem' }}>
                  {src.metrics.map((m) => (
                    <div key={m.label} style={{
                      flex: 1, background: m.positive ? 'rgba(45,106,45,0.08)' : 'rgba(29,29,27,0.04)',
                      border: `1px solid ${m.positive ? 'rgba(45,106,45,0.16)' : 'rgba(29,29,27,0.08)'}`,
                      borderRadius: '8px', padding: '0.4rem 0.5rem', textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '1.1rem', fontWeight: '900', letterSpacing: '-0.04em',
                        color: m.positive ? '#2d6a2d' : '#1d3535', lineHeight: 1
                      }}>{m.val}</div>
                      <div style={{ fontSize: '0.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7a7060', marginTop: '0.15rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="insight-card__body">{src.body}</p>
              </div>
            ))}
          </div>

          {/* Strategic value analysis */}
          <div className="insight-analysis reveal-stagger">
            <span className="insight-analysis__icon">🎯</span>
            <div>
              <h4 style={{ fontSize: '0.72rem', fontWeight: '800', color: '#1d3535', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>Importancia Estratégica</h4>
              <p className="insight-analysis__text">
                Estas primeras visitas y su altísimo nivel de interacción demuestran que las optimizaciones permiten que los motores de IA indexen y recomienden el negocio de forma prioritaria. <strong>Continuar con datos estructurados es la acción clave para adelantarse a la competencia.</strong>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

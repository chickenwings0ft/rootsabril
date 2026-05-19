import React from 'react'

export default function AiTrafficSlide() {
  const sources = [
    {
      name: 'chatgpt.com / (not set)',
      source: 'ChatGPT Directo',
      icon: '🧠',
      metrics: [
        { val: '13', label: 'Sesiones' },
        { val: '84,62%', label: 'Interacción', positive: true },
      ],
      body: 'Destaca por tener el porcentaje de interacción más alto de los canales principales, consumiendo el contenido de forma muy activa.',
      highlight: true,
    },
    {
      name: 'chatgpt.com / referral',
      source: 'Enlace en Chat',
      icon: '🔗',
      metrics: [
        { val: '2', label: 'Sesiones' },
        { val: 'Enlace directo', label: 'Recomendado', positive: true },
      ],
      body: 'Confirmación de que ChatGPT ya enlaza directamente a la web en sus respuestas de texto.',
      highlight: false,
    },
    {
      name: 'gemini.google.com',
      source: 'Google Gemini Referral',
      icon: '✨',
      metrics: [
        { val: '2', label: 'Sesiones' },
        { val: 'Enlace directo', label: 'Recomendado', positive: true },
      ],
      body: 'Confirmación de que el asistente de Google ya recomienda y enlaza de forma directa en sus respuestas.',
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
            Impacto directo de la reciente implementación del SEO orientado a Inteligencia Artificial (GEO).
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body" style={{ minHeight: 0, flexDirection: 'column', gap: '0.35rem' }}>

          {/* AI Source Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.35rem' }} className="reveal">
            {sources.map((src) => (
              <div key={src.name} className="insight-card" style={{
                borderColor: src.highlight ? 'rgba(29,53,53,0.25)' : undefined,
                background: src.highlight ? 'rgba(255,255,255,0.72)' : undefined,
                padding: '0.45rem 0.6rem'
              }}>
                {/* Card header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '5px',
                    background: src.highlight ? 'rgba(29,53,53,0.08)' : 'rgba(29,29,27,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', flexShrink: 0
                  }}>{src.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.1 }}>{src.name}</div>
                    <div style={{ fontSize: '0.5rem', color: '#7a7060', fontWeight: '600' }}>{src.source}</div>
                  </div>
                </div>

                {/* Metrics row */}
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.25rem' }}>
                  {src.metrics.map((m) => (
                    <div key={m.label} style={{
                      flex: 1, background: m.positive ? 'rgba(45,106,45,0.08)' : 'rgba(29,29,27,0.04)',
                      border: `1px solid ${m.positive ? 'rgba(45,106,45,0.16)' : 'rgba(29,29,27,0.08)'}`,
                      borderRadius: '5px', padding: '0.2rem 0.3rem', textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '0.85rem', fontWeight: '900', letterSpacing: '-0.04em',
                        color: m.positive ? '#2d6a2d' : '#1d3535', lineHeight: 1
                      }}>{m.val}</div>
                      <div style={{ fontSize: '0.42rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7a7060', marginTop: '0.08rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="insight-card__body" style={{ fontSize: '0.5rem', margin: 0, lineHeight: 1.3 }}>{src.body}</p>
              </div>
            ))}
          </div>

          {/* Strategic value analysis */}
          <div className="insight-analysis reveal-stagger" style={{ padding: '0.4rem 0.55rem', gap: '0.4rem', marginTop: '0.05rem' }}>
            <span className="insight-analysis__icon" style={{ fontSize: '0.85rem' }}>🎯</span>
            <div>
              <h4 style={{ fontSize: '0.6rem', fontWeight: '800', color: '#1d3535', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.08rem' }}>Evolución Estratégica</h4>
              <p className="insight-analysis__text" style={{ fontSize: '0.5rem', lineHeight: 1.3, margin: 0 }}>
                Antes de activar estas optimizaciones técnicas en la estructura de la web, <strong>no se registraba ninguna actividad desde estas plataformas</strong>. Desde su puesta en marcha, se constata el impacto directo de la indexación semántica en los asistentes virtuales.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

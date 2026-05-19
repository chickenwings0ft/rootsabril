import React from 'react'

export default function AiTrafficSlide() {
  const sources = [
    {
      name: 'Tráfico directo desde ChatGPT',
      source: 'chatgpt.com / (not set)',
      icon: '🧠',
      metrics: [
        { val: '13', label: 'visitas' },
        { val: '84,62%', label: 'interacción', positive: true },
      ],
      body: 'Los usuarios que llegan recomendados por ChatGPT registran un 84,62% de interacción. Este es el porcentaje de atención más alto de todos los canales principales, lo que significa que quien llega desde esta IA no cierra la página, sino que consume el contenido y la carta de forma muy activa.',
      highlight: true,
    },
    {
      name: 'Enlaces en respuestas de ChatGPT',
      source: 'chatgpt.com / referral',
      icon: '🔗',
      metrics: [
        { val: '2', label: 'visitas' },
        { val: 'Enlace directo', label: 'Recomendado', positive: true },
      ],
      body: 'Esto es la confirmación técnica de que ChatGPT ya no solo menciona el local, sino que está generando un enlace directo a la web cuando los usuarios le piden recomendaciones.',
      highlight: false,
    },
    {
      name: 'Recomendaciones en Google Gemini',
      source: 'gemini.google.com',
      icon: '✨',
      metrics: [
        { val: '2', label: 'visitas' },
        { val: 'Enlace directo', label: 'Recomendado', positive: true },
      ],
      body: 'Confirma que el asistente virtual de Google también ha empezado a recomendar el restaurante, enlazando la web de forma directa en las respuestas que da a sus usuarios.',
      highlight: false,
    },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Tráfico Emergente — Motores de IA (GEO)</p>
          <h2 className="slide-title reveal" style={{ color: 'var(--color-green)' }}>Recomendaciones de Inteligencia Artificial (IA)</h2>
          <p className="slide-desc reveal">
            Este apartado refleja el impacto directo de la reciente implementación del SEO orientado a Inteligencia Artificial (GEO).
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body" style={{ minHeight: 0, flexDirection: 'column', gap: '0.65rem' }}>

          {/* AI Source Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem' }} className="reveal">
            {sources.map((src) => (
              <div key={src.name} className="insight-card" style={{
                borderColor: src.highlight ? 'rgba(29,53,53,0.25)' : undefined,
                background: src.highlight ? 'rgba(255,255,255,0.72)' : undefined,
                padding: '0.65rem 0.85rem'
              }}>
                {/* Card header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '6px',
                    background: src.highlight ? 'rgba(29,53,53,0.08)' : 'rgba(29,29,27,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0
                  }}>{src.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.15 }}>{src.name}</div>
                    <div style={{ fontSize: '0.58rem', color: '#7a7060', fontWeight: '600', marginTop: '0.04rem' }}>{src.source}</div>
                  </div>
                </div>

                {/* Metrics row */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  {src.metrics.map((m) => (
                    <div key={m.label} style={{
                      flex: 1, background: m.positive ? 'rgba(45,106,45,0.08)' : 'rgba(29,29,27,0.04)',
                      border: `1px solid ${m.positive ? 'rgba(45,106,45,0.16)' : 'rgba(29,29,27,0.08)'}`,
                      borderRadius: '6px', padding: '0.25rem 0.4rem', textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '1.05rem', fontWeight: '900', letterSpacing: '-0.04em',
                        color: m.positive ? '#2d6a2d' : '#1d3535', lineHeight: 1
                      }}>{m.val}</div>
                      <div style={{ fontSize: '0.46rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7a7060', marginTop: '0.1rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="insight-card__body" style={{ fontSize: '0.6rem', margin: 0, lineHeight: 1.4 }}>{src.body}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

import React from 'react'

export default function ActionPlanMaySlide() {
  const steps = [
    {
      num: '01',
      icon: '🎯',
      title: 'Creación de Landings Pages',
      body: 'Seguir con la creación de landing pages para mejorar y conseguir más usuarios y clientes.',
    },
    {
      num: '02',
      icon: '⭐',
      title: 'Optimización de la ficha de Google',
      body: 'Seguir respondiendo reseñas con menos de 24 horas desde que llegan y revisando y actualizando.',
    },
    {
      num: '03',
      icon: '📊',
      title: 'Seguimiento GA4 y Reservas',
      body: 'Control de las métricas para ir viendo la evolución diaria y tomar las decisiones para ir actualizando los contenidos y la web.',
    },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">6</p>
          <h2 className="slide-title reveal">Próximos Pasos: Mayo</h2>
          <p className="slide-desc reveal">
            Acciones concretas para consolidar e incrementar los resultados obtenidos en abril.
          </p>
        </header>

        {/* Steps */}
        <div className="slide-body">
          <div className="insight-stack reveal-stagger">
            {steps.map((step) => (
              <div
                key={step.num}
                className="insight-card"
                style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}
              >
                {/* Number badge */}
                <div style={{
                  flexShrink: 0,
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--color-green)', color: 'var(--color-cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: '900', letterSpacing: '0.05em'
                }}>
                  {step.num}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="insight-card__head" style={{ marginBottom: '0.2rem' }}>
                    <span className="insight-card__icon">{step.icon}</span>
                    <h3 className="insight-card__title">{step.title}</h3>
                  </div>
                  <p className="insight-card__body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="reveal" style={{
            background: 'var(--color-green)',
            color: 'var(--color-cream)',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '0.68rem',
            fontWeight: '800',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 16px rgba(29,53,53,0.25)'
          }}>
            📈 Objetivo: Consolidar y escalar en Mayo
          </div>
        </div>

      </div>
    </section>
  )
}

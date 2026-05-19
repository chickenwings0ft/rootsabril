import React from 'react'

export default function GenerativeAIOptSlide() {
  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">5</p>
          <h2 className="slide-title reveal">Motores de Búsqueda IA</h2>
          <p className="slide-desc reveal" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
            Los usuarios buscan hablando de forma natural: <em>"Restaurante acogedor en Logroño con buen vino"</em>. Nos preparamos para que la IA nos recomiende.
          </p>
        </header>

        {/* Body */}
        <div className="slide-body reveal-stagger">

          {/* Visual Column */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div className="chart-frame" style={{ flex: '1', minHeight: '160px', background: '#f8f9fa', borderRadius: '12px' }}>
              <img
                src="/llms-checker.png"
                alt="Ficha de lectura para Inteligencia Artificial"
                className="chart-img"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <p style={{
              fontSize: '0.58rem', fontWeight: '800', color: '#5a7a5a',
              textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Lectura y validador de IA (llms.txt)
            </p>
          </div>

          {/* Text Content Column */}
          <div className="insight-stack" style={{ flex: '1.2', overflowY: 'auto', paddingRight: '4px' }}>

            <div className="insight-card" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '1rem 1.25rem', marginBottom: '0.65rem' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 className="insight-card__title" style={{ marginBottom: '0.3rem', fontSize: '0.82rem', fontWeight: '800' }}>Ficha Especial para IA (llms.txt)</h4>
                <p className="insight-card__body" style={{ fontSize: '0.7rem', lineHeight: '1.4', color: 'var(--color-dark)', opacity: 0.85 }}>
                  Creamos una ficha de lectura sencilla para que herramientas como ChatGPT lean directamente quiénes somos y nuestra carta viva, facilitando que nos recomienden de inmediato.
                </p>
              </div>
            </div>

            <div className="insight-card" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '1rem 1.25rem' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 className="insight-card__title" style={{ marginBottom: '0.3rem', fontSize: '0.82rem', fontWeight: '800' }}>Confianza de Marca</h4>
                <p className="insight-card__body" style={{ fontSize: '0.7rem', lineHeight: '1.4', color: 'var(--color-dark)', opacity: 0.85 }}>
                  Conectamos las menciones y premios de Roots en internet para que las inteligencias artificiales confíen en nosotros y nos elijan como su recomendación estrella.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

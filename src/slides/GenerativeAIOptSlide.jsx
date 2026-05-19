import React from 'react'

export default function GenerativeAIOptSlide() {
  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Innovación &amp; GEO</p>
          <h2 className="slide-title reveal">Motores de Búsqueda IA</h2>
          <p className="slide-desc reveal">
            Los usuarios buscan en lenguaje natural: <em>"Restaurante acogedor en Logroño con buen vino"</em>. Optimizamos para ser la respuesta que da la IA.
          </p>
        </header>

        {/* Body */}
        <div className="slide-body">

          <div className="insight-stack reveal-stagger">

            <div className="insight-card" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0, width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(29,53,53,0.08)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.1rem'
              }}>🤖</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 className="insight-card__title" style={{ marginBottom: '0.2rem' }}>Fichero /llms.txt</h4>
                <p className="insight-card__body">
                  Creamos una ficha estandarizada para que los rastreadores de IA lean la esencia y carta viva de Roots directamente de la fuente, facilitando su indexación prioritaria.
                </p>
              </div>
            </div>

            <div className="insight-card" style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0, width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(29,53,53,0.08)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.1rem'
              }}>💬</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 className="insight-card__title" style={{ marginBottom: '0.2rem' }}>Contexto Semántico</h4>
                <p className="insight-card__body">
                  Enlazamos menciones y premios gastronómicos para aumentar la probabilidad de recomendación en ChatGPT, Claude y Perplexity.
                </p>
              </div>
            </div>

          </div>

          {/* GEO insight box */}
          <div className="insight-analysis reveal">
            <span className="insight-analysis__icon">🏆</span>
            <p className="insight-analysis__text">
              <strong>GEO (Generative Engine Optimization):</strong> Posicionamos a Roots a la vanguardia tecnológica antes de que el sector reaccione a esta nueva era de búsquedas. Un canal emergente que ya genera resultados medibles.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

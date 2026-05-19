import React from 'react'

export default function LocalSeoRiojaMetricsSlide() {
  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Posicionamiento Local — Logroño</p>
          <h2 className="slide-title reveal">Interacciones y Búsqueda</h2>
          <p className="slide-desc reveal">
            Acciones generadas en la ficha local y términos clave que activaron su aparición en el buscador.
          </p>
        </header>

        {/* Main Body */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingRight: '4px', width: '100%' }} className="reveal-stagger">

          {/* Acciones directas card — with sub-metrics */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">🖱️</span>
              <h3 className="insight-card__title">Acciones Directas de Negocio</h3>
            </div>
            <p className="insight-card__body" style={{ marginBottom: '0.5rem' }}>
              <strong>1.288 interacciones totales</strong> dentro de la ficha (+40,3% interanual).
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{
                flex: 1, background: 'rgba(29,53,53,0.07)', border: '1px solid rgba(29,53,53,0.14)',
                borderRadius: '10px', padding: '0.55rem 0.65rem', textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.04em', color: 'var(--color-green)', lineHeight: 1 }}>806</div>
                <div style={{ fontSize: '0.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5a7a5a', marginTop: '0.2rem' }}>Rutas (Directions)</div>
                <div style={{ fontSize: '0.55rem', fontWeight: '700', color: '#4a9a4a', marginTop: '0.15rem' }}>+70,0%</div>
              </div>
              <div style={{
                flex: 1, background: 'rgba(29,53,53,0.07)', border: '1px solid rgba(29,53,53,0.14)',
                borderRadius: '10px', padding: '0.55rem 0.65rem', textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '-0.04em', color: 'var(--color-green)', lineHeight: 1 }}>307</div>
                <div style={{ fontSize: '0.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5a7a5a', marginTop: '0.2rem' }}>Clics a la Web</div>
                <div style={{ fontSize: '0.55rem', fontWeight: '700', color: '#4a9a4a', marginTop: '0.15rem' }}>+4,4%</div>
              </div>
            </div>
          </div>

          {/* Búsquedas de categoría */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">🔎</span>
              <h3 className="insight-card__title">Búsquedas de Categoría</h3>
            </div>
            <p className="insight-card__body" style={{ marginBottom: '0.4rem' }}>
              Sólida indexación en términos genéricos sin marca predefinida:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {[
                { kw: '"restaurantes"', n: '1.273' },
                { kw: '"restaurants"', n: '491' },
                { kw: '"cafeterías"', n: '332' },
                { kw: '"bar"', n: '155' },
              ].map(({ kw, n }) => (
                <span key={kw} style={{
                  fontSize: '0.62rem', fontWeight: '700', padding: '0.2rem 0.5rem',
                  borderRadius: '20px', background: 'rgba(29,53,53,0.07)',
                  border: '1px solid rgba(29,53,53,0.14)', color: '#1d3535', whiteSpace: 'nowrap'
                }}>
                  {kw} <strong style={{ color: '#2d6a2d' }}>{n}</strong>
                </span>
              ))}
            </div>
          </div>

          {/* Segmentos especializados */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">🎯</span>
              <h3 className="insight-card__title">Segmentos Especializados</h3>
            </div>
            <p className="insight-card__body" style={{ marginBottom: '0.4rem' }}>
              Visibilidad específica en nichos clave del negocio:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {[
                { kw: '"brunch logroño"', n: '198' },
                { kw: '"brunch"', n: '78' },
                { kw: '"coffee"', n: '68' },
                { kw: '"desayuno"', n: '67' },
              ].map(({ kw, n }) => (
                <span key={kw} style={{
                  fontSize: '0.62rem', fontWeight: '700', padding: '0.2rem 0.5rem',
                  borderRadius: '20px', background: 'rgba(45,106,45,0.07)',
                  border: '1px solid rgba(45,106,45,0.18)', color: '#1a2e1a', whiteSpace: 'nowrap'
                }}>
                  {kw} <strong style={{ color: '#2d6a2d' }}>{n}</strong>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

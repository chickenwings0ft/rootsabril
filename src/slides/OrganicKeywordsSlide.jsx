import React from 'react'

export default function OrganicKeywordsSlide() {
  const bad = [
    { text: '"carta de vinos la rioja"', tag: 'Informativo' },
    { text: '"historia de logroño"', tag: 'Genérico' },
    { text: '"restaurante cerca de mí"', tag: 'Muy competido' },
  ]
  const good = [
    { text: '"restaurante brasa logroño centro"' },
    { text: '"cenar en haro barrio de la estacion"' },
    { text: '"cenas de grupo y eventos logroño"' },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Contenido &amp; Palabras Clave</p>
          <h2 className="slide-title reveal">Búsquedas Orgánicas</h2>
          <p className="slide-desc reveal">
            Reorientación del contenido web hacia palabras clave transaccionales de alta conversión.
          </p>
        </header>

        {/* Comparison Grid */}
        <div className="slide-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', flex: 1 }} className="reveal">

            {/* Column — Before */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{
                fontSize: '0.55rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#b84040', background: 'rgba(184,64,64,0.07)', border: '1px solid rgba(184,64,64,0.18)',
                padding: '0.3rem 0.6rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.15rem'
              }}>
                Baja Intención
              </div>
              {bad.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.72rem',
                  padding: '0.55rem 0.7rem', borderRadius: '10px',
                  border: '1px solid rgba(184,64,64,0.15)', background: 'rgba(184,64,64,0.04)',
                  fontWeight: '600', color: '#2d2d2b', lineHeight: '1.35'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c85050', flexShrink: 0, marginTop: '4px' }}></span>
                  <span>{item.text} <em style={{ color: '#b84040', fontWeight: '500', fontSize: '0.62rem' }}>({item.tag})</em></span>
                </div>
              ))}
            </div>

            {/* Column — After */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{
                fontSize: '0.55rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#2d6a2d', background: 'rgba(45,106,45,0.07)', border: '1px solid rgba(45,106,45,0.18)',
                padding: '0.3rem 0.6rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.15rem'
              }}>
                Alta Conversión ✓
              </div>
              {good.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.72rem',
                  padding: '0.55rem 0.7rem', borderRadius: '10px',
                  border: '1px solid rgba(45,106,45,0.2)', background: 'rgba(45,106,45,0.05)',
                  fontWeight: '700', color: '#1a2e1a', lineHeight: '1.35'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a9a4a', flexShrink: 0, marginTop: '4px' }}></span>
                  {item.text}
                </div>
              ))}
            </div>

          </div>

          {/* Insight footer */}
          <div className="insight-analysis reveal">
            <span className="insight-analysis__icon">💡</span>
            <p className="insight-analysis__text">
              <strong>Impacto directo:</strong> Las visitas a las landings optimizadas se traducen en clics al motor de reservas del restaurante, cerrando el ciclo de conversión.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

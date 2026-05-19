import React from 'react'

export default function OrganicKeywordsSlide() {
  const bad = [
    { text: '"restaurante Haro"', tag: 'Informativo, sin intención de visita' },
    { text: '"desayuno y brunch en Logroño"', tag: 'Genérico, muy competido' },
    { text: '"restaurante cerca de mí"', tag: 'Sin contexto de marca ni diferenciación' },
  ]
  const good = [
    { text: '"brunch café especialidad logroño centro"' },
    { text: '"bar de vinos naturales logroño"' },
    { text: '"donde tomar café de especialidad en la rioja"' },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">1</p>
          <h2 className="slide-title reveal">Contenido &amp; Palabras Clave</h2>
          <p className="slide-desc reveal">
            Reorientación del contenido web hacia palabras clave transaccionales de alta conversión.
          </p>
        </header>

        {/* Comparison Grid */}
        <div className="slide-body" style={{ minHeight: 0, flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', minHeight: 0, overflowY: 'auto', paddingRight: '2px' }} className="reveal">

            {/* Column — Before */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#b84040', background: 'rgba(184,64,64,0.07)', border: '1px solid rgba(184,64,64,0.18)',
                padding: '0.35rem 0.7rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.15rem',
                alignSelf: 'flex-start'
              }}>
                Baja Intención
              </div>
              {bad.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.76rem',
                  padding: '0.55rem 0.75rem', borderRadius: '8px',
                  border: '1px solid rgba(184,64,64,0.12)', background: 'rgba(184,64,64,0.03)',
                  fontWeight: '600', color: '#2d2d2b', lineHeight: '1.3'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c85050', flexShrink: 0, marginTop: '5px' }}></span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.06rem' }}>
                    <span style={{ fontWeight: '700' }}>{item.text}</span>
                    <span style={{ color: '#b84040', fontWeight: '500', fontSize: '0.6rem' }}>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Column — After */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#2d6a2d', background: 'rgba(45,106,45,0.07)', border: '1px solid rgba(45,106,45,0.18)',
                padding: '0.35rem 0.7rem', borderRadius: '20px', display: 'inline-block', marginBottom: '0.15rem',
                alignSelf: 'flex-start'
              }}>
                Alta Conversión ✓
              </div>
              {good.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem',
                  padding: '0.55rem 0.75rem', borderRadius: '8px',
                  border: '1px solid rgba(45,106,45,0.16)', background: 'rgba(45,106,45,0.04)',
                  fontWeight: '700', color: '#1a2e1a', lineHeight: '1.25'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a9a4a', flexShrink: 0 }}></span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Insight footer repositioned right below the comparison cards */}
          <div className="insight-analysis reveal" style={{ padding: '0.65rem 0.85rem', gap: '0.5rem', marginTop: '0.8rem', flexShrink: 0 }}>
            <span className="insight-analysis__icon" style={{ fontSize: '1.1rem' }}>💡</span>
            <p className="insight-analysis__text" style={{ fontSize: '0.72rem', lineHeight: 1.4, margin: 0 }}>
              <strong>Impacto directo:</strong> Las visitas a las landings optimizadas —diferenciando claramente las dos ubicaciones (Logroño y Haro) y los tres momentos de consumo (café, brunch y bistró)
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

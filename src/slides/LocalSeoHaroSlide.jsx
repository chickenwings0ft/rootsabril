import React from 'react'

export default function LocalSeoHaroSlide() {
  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Posicionamiento Local — Haro</p>
          <h2 className="slide-title reveal">Ficha Google: Haro</h2>
          <p className="slide-desc reveal">
            Impacto de la visibilidad y comportamiento de búsqueda en Roots Haro frente a abril de 2025.
          </p>
        </header>

        {/* Main Body */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingRight: '4px', width: '100%' }} className="reveal-stagger">

          {/* Metric highlight row */}
          <div style={{ display: 'flex', gap: '0.55rem' }}>
            <div style={{
              flex: 1, background: 'var(--color-dark)', color: 'var(--color-cream)', borderRadius: '12px',
              padding: '0.85rem 1rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: 1 }}>7.838</div>
              <div style={{ fontSize: '0.5rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(231,224,211,0.65)', marginTop: '0.25rem' }}>Visualizaciones</div>
            </div>
            <div style={{
              flex: 1, background: 'rgba(45,106,45,0.9)', color: '#fff', borderRadius: '12px',
              padding: '0.85rem 1rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(45,106,45,0.25)'
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: 1 }}>+36.1%</div>
              <div style={{ fontSize: '0.5rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>vs. Abril 2025</div>
            </div>
          </div>

          {/* Plataformas card — condensed with internal data rows */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">📱</span>
              <h3 className="insight-card__title">Distribución por Plataforma</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.35rem' }}>
              {[
                { label: 'Google Maps (Móvil)', val: '3.931', pct: '50%', w: '50%' },
                { label: 'Google Search (Móvil)', val: '3.375', pct: '43%', w: '43%' },
                { label: 'Escritorio (Search + Maps)', val: '532', pct: '7%', w: '7%' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.67rem', fontWeight: '600', color: '#2d2d2a', marginBottom: '0.15rem' }}>
                    <span>{item.label}</span>
                    <span style={{ fontWeight: '800' }}>{item.val} <span style={{ color: '#7a7060', fontWeight: '600' }}>({item.pct})</span></span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(29,29,27,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: item.w, height: '100%', background: 'linear-gradient(90deg, var(--color-green), var(--color-green-accent))', borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="insight-card__body" style={{ marginTop: '0.4rem', color: '#5a6a5a', fontStyle: 'italic' }}>
              El <strong>93% de la visibilidad</strong> procede exclusivamente de dispositivos móviles.
            </p>
          </div>

          {/* Profile management */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">💬</span>
              <h3 className="insight-card__title">Saneamiento del Perfil</h3>
            </div>
            <p className="insight-card__body">
              Respuesta completa a reseñas recientes y antiguas. Ficha completada al máximo para garantizar exposición local óptima.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

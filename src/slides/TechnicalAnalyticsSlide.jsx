import React from 'react'

export default function TechnicalAnalyticsSlide() {
  const items = [
    { label: 'Salud del Tracking (GA4 & GTM)', value: 100, note: 'Activo y verificado' },
    { label: 'Schema.org (JSON-LD) de Restaurante', value: 100, note: 'Implementado en producción' },
    { label: 'Medición de Conversión de Reservas', value: 90, note: 'En fase de refinamiento' },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Configuración Técnica</p>
          <h2 className="slide-title reveal">Medición &amp; Código</h2>
          <p className="slide-desc reveal">
            No podemos mejorar lo que no medimos. En abril estructuramos las herramientas para garantizar la precisión de los datos.
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body">

          {/* Progress Items */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {items.map((item, i) => (
              <div key={i} className="insight-card" style={{ padding: '0.85rem 1.05rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#1a1a18' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.6rem', color: '#5a8a5a', fontWeight: '600' }}>{item.note}</span>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: '900', color: item.value === 100 ? '#2d6a2d' : '#1d3535',
                      background: item.value === 100 ? 'rgba(45,106,45,0.1)' : 'rgba(29,53,53,0.08)',
                      padding: '0.15rem 0.45rem', borderRadius: '20px', minWidth: '38px', textAlign: 'center'
                    }}>
                      {item.value}%
                    </span>
                  </div>
                </div>
                <div style={{ height: '5px', background: 'rgba(29,29,27,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${item.value}%`, height: '100%', borderRadius: '4px',
                    background: item.value === 100
                      ? 'linear-gradient(90deg, #2d6a2d, #4a9a4a)'
                      : 'linear-gradient(90deg, var(--color-green), var(--color-green-accent))'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Technical schema box snippet */}
          <div className="code-block reveal">
            <span style={{ color: '#5a7a5a' }}>// JSON-LD schema.org/Restaurant</span><br />
            <span style={{ color: '#7bb87b' }}>"name":</span> <span style={{ color: '#d4e8d4' }}>"Roots Rioja"</span>,{' '}
            <span style={{ color: '#7bb87b' }}>"servesCuisine":</span> <span style={{ color: '#d4e8d4' }}>"Cocina de mercado, brasas"</span>
          </div>

        </div>
      </div>
    </section>
  )
}

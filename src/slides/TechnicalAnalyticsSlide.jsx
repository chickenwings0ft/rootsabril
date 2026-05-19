import React from 'react'

export default function TechnicalAnalyticsSlide() {
  const items = [
    { 
      label: 'Salud del Tracking (GA4 & GTM)', 
      value: 100, 
      note: 'Activo y verificado',
      desc: 'Asegura que cada visita y acción en la web se mida de forma real y exacta, sin perder datos por el camino.'
    },
    { 
      label: 'Schema.org (JSON-LD) de Restaurante', 
      value: 100, 
      note: 'Implementado en producción',
      desc: 'Código invisible que le explica directamente a Google que somos un restaurante físico, facilitando que nos recomiende en su buscador.'
    },
    { 
      label: 'Medición de Conversión del botón de Reservar', 
      value: 100, 
      note: 'Verificado y activo',
      desc: 'Registra de manera exacta cuántas personas de las que visitan la web deciden dar el paso de pulsar el botón para reservar una mesa.'
    },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner">

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">2</p>
          <h2 className="slide-title reveal">Medición &amp; Código</h2>
          <p className="slide-desc reveal">
            En abril estructuramos las herramientas para garantizar la precisión de los datos.
          </p>
        </header>

        {/* Main Body */}
        <div className="slide-body">

          {/* Progress Items */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {items.map((item, i) => (
              <div key={i} className="insight-card" style={{ padding: '0.95rem 1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1a1a18', letterSpacing: '-0.02em' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.68rem', color: '#5a8a5a', fontWeight: '700' }}>{item.note}</span>
                    <span style={{
                      fontSize: '0.82rem', fontWeight: '900', color: item.value === 100 ? '#2d6a2d' : '#1d3535',
                      background: item.value === 100 ? 'rgba(45,106,45,0.1)' : 'rgba(29,53,53,0.08)',
                      padding: '0.15rem 0.5rem', borderRadius: '20px', minWidth: '40px', textAlign: 'center'
                    }}>
                      {item.value}%
                    </span>
                  </div>
                </div>

                {/* Beginner-friendly explanation */}
                <p style={{ fontSize: '0.68rem', color: '#6a6a60', margin: '0 0 0.6rem 0', lineHeight: '1.35', fontWeight: '500' }}>
                  {item.desc}
                </p>

                <div style={{ height: '7px', background: 'rgba(29,29,27,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
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


        </div>
      </div>
    </section>
  )
}

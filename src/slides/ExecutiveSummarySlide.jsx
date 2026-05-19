import React from 'react'

export default function ExecutiveSummarySlide() {
  const points = [
    {
      icon: '🔍',
      num: '01',
      title: 'Google SEO: Canal Principal',
      dato: '664 sesiones (44% del tráfico total) · 70.33% interacción · 42s en web',
      valor: 'Tráfico orgánico de alta calidad: usuarios que encuentran exactamente lo que buscan.',
      accent: false,
    },
    {
      icon: '🍷',
      num: '02',
      title: 'Sistema de Reservas Activado',
      dato: '68 clics al botón de reserva de 45 usuarios únicos — 3.96% del total de visitas',
      valor: 'La diferencia entre clics y usuarios únicos refleja interés recurrente antes de finalizar la reserva.',
      accent: false,
    },
    {
      icon: '🤖',
      num: '03',
      title: 'Éxito Inicial en IA (GEO)',
      dato: '17 sesiones combinadas desde ChatGPT y Gemini · 84.62% de interacción',
      valor: 'El tráfico de IA registra la tasa de interacción más alta del mes. Roots ya es recomendado por las IAs.',
      accent: true,
    },
    {
      icon: '📱',
      num: '04',
      title: 'Perfil Tecnológico del Cliente',
      dato: '87.57% del tráfico en Chrome (46.34%) y Safari (41.23%)',
      valor: 'Alto volumen en Safari confirma que gran parte de los clientes busca desde móvil y en movilidad.',
      accent: false,
    },
  ]

  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">7</p>
          <h2 className="slide-title reveal" style={{ color: 'var(--color-green)' }}>Resumen del Informe</h2>
          <p className="slide-desc reveal">
            Síntesis estratégica de los cuatro pilares de rendimiento digital — Roots Logroño &amp; Haro · Abril 2026.
          </p>
        </header>

        {/* Grid of summary cards */}
        <div
          style={{ flex: 1, overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.5rem', paddingRight: '4px', alignContent: 'start' }}
          className="reveal-stagger"
        >
          {points.map((p) => (
            <div key={p.num} className="insight-card" style={{
              borderColor: p.accent ? 'rgba(29,53,53,0.25)' : undefined,
              background: p.accent ? 'rgba(255,255,255,0.78)' : undefined,
            }}>
              {/* Card top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', marginBottom: '0.4rem' }}>
                <div style={{
                  flexShrink: 0, width: '30px', height: '30px', borderRadius: '8px',
                  background: p.accent ? 'rgba(29,53,53,0.1)' : 'rgba(29,29,27,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'
                }}>{p.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.54rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: p.accent ? 'var(--color-green)' : '#7a7060', marginBottom: '0.1rem' }}>
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1a1a18', lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
                </div>
              </div>

              {/* Dato */}
              <div style={{
                background: 'rgba(29,53,53,0.05)', border: '1px solid rgba(29,53,53,0.12)',
                borderRadius: '7px', padding: '0.35rem 0.55rem', marginBottom: '0.35rem'
              }}>
                <div style={{ fontSize: '0.55rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-green)', marginBottom: '0.08rem' }}>El dato</div>
                <p style={{ fontSize: '0.68rem', fontWeight: '700', color: '#1a1a18', lineHeight: 1.4, margin: 0 }}>{p.dato}</p>
              </div>

              {/* Valor */}
              <div>
                <div style={{ fontSize: '0.55rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7a7060', marginBottom: '0.08rem' }}>El valor</div>
                <p style={{ fontSize: '0.67rem', fontWeight: '500', color: '#2d2d2a', lineHeight: 1.45, margin: 0 }}>{p.valor}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

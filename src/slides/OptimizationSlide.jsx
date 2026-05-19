export default function OptimizationSlide() {
  const KWS = [
    { kw: 'bar de vinos logroño', vol: '2.4K', cpc: '€1.15', kd: 32, kdColor: '#4ade80', pos: '#8', ai: 'Alta' },
    { kw: 'donde cenar en logroño', vol: '8.1K', cpc: '€2.40', kd: 55, kdColor: '#facc15', pos: '#42', ai: 'Media' },
    { kw: 'restaurantes de vino logroño', vol: '1.2K', cpc: '€1.80', kd: 28, kdColor: '#4ade80', pos: '#15', ai: 'Alta' },
    { kw: 'mejores bares de logroño', vol: '15.0K', cpc: '€0.85', kd: 68, kdColor: '#f87171', pos: '>50', ai: 'Baja' },
    { kw: 'bodega centro de logroño', vol: '850', cpc: '€1.20', kd: 21, kdColor: '#4ade80', pos: '#11', ai: 'Muy Alta' },
    { kw: 'cena y vino logroño', vol: '3.2K', cpc: '€2.10', kd: 45, kdColor: '#facc15', pos: '#22', ai: 'Media' },
    { kw: 'desayuno especial logroño', vol: '4.8K', cpc: '€1.05', kd: 38, kdColor: '#4ade80', pos: '#28', ai: 'Alta' },
    { kw: 'restaurante con rieslings logroño', vol: '240', cpc: '€0.90', kd: 12, kdColor: '#4ade80', pos: '-', ai: 'Muy Alta' },
  ]

  return (
    <section className="section section--dark" id="optimization" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <p className="section-label reveal">05 — Investigación Estratégica</p>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          
          {/* Header Column */}
          <div style={{ flex: '0 0 35%' }}>
            <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              No es saber,<br />
              <span style={{ color: 'var(--color-muted)' }}>es investigar.</span>
            </h2>
            <p className="section-body reveal" style={{ marginTop: '1.5rem', fontSize: '1.05rem', paddingRight: '1rem' }}>
              Para cada landing o acción que se toma, dispongo de <strong>herramientas profesionales</strong> que me permiten analizar con todo detalle qué busca y qué no busca el usuario para darle justo lo que quiere. Análisis de tendencias actualizado.
            </p>
            <div className="reveal" style={{ marginTop: '2.5rem', opacity: 0.8 }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#71717a', display: 'block', marginBottom: '1rem' }}>Powered Data by</span>
              <img src="./semrush-lockup-rgb.png" alt="Semrush" style={{ height: '54px', filter: 'grayscale(100%) brightness(2)' }} />
            </div>
          </div>

          {/* Table Column */}
          <div style={{ flex: '1', minWidth: 0 }}>
            <div className="reveal" style={{ 
              background: '#111110', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              {/* Table Header UI */}
              <div style={{ 
                padding: '1rem 1.5rem', 
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)'
              }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.05em' }}>
                  KEYWORD EXPLORER — ROOTS RIOJA
                </div>
              </div>

              {/* Table Content */}
              <div style={{ padding: '0 1rem 1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Palabra Clave</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Volumen</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>KD %</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>CPC</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Posición</th>
                      <th style={{ padding: '1.2rem 0.5rem 0.8rem', color: '#71717a', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Mención IA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {KWS.map((k, i) => (
                      <tr key={i} style={{ transition: 'background 0.2s', borderBottom: i !== KWS.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                        <td style={{ padding: '0.8rem 0.5rem', color: '#e4e4e7', fontWeight: 500 }}>{k.kw}</td>
                        <td style={{ padding: '0.8rem 0.5rem', color: '#a1a1aa' }}>{k.vol}</td>
                        <td style={{ padding: '0.8rem 0.5rem' }}>
                          <span style={{ 
                            display: 'inline-block',
                            width: '24px', height: '24px', 
                            lineHeight: '24px', textAlign: 'center', 
                            borderRadius: '50%', 
                            background: k.kdColor + '20', 
                            color: k.kdColor,
                            fontSize: '0.7rem',
                            fontWeight: 700
                          }}>{k.kd}</span>
                        </td>
                        <td style={{ padding: '0.8rem 0.5rem', color: '#a1a1aa' }}>{k.cpc}</td>
                        <td style={{ padding: '0.8rem 0.5rem', color: k.pos === '#8' || k.pos === '#11' || k.pos === '#15' ? 'var(--color-floral)' : '#a1a1aa', fontWeight: k.pos.includes('8') ? 700 : 400 }}>{k.pos}</td>
                        <td style={{ padding: '0.8rem 0.5rem', color: k.ai === 'Muy Alta' || k.ai === 'Alta' ? '#e4e4e7' : '#71717a', fontWeight: k.ai.includes('Alta') ? 600 : 400 }}>{k.ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

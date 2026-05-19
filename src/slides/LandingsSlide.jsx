export default function LandingsSlide() {
  const cases = [
    {
      keyword: 'Restaurante vinos Logroño',
      type: 'Landing Local',
      volume: '1.2K',
      dificultad: 'Media',
      proposed: '/restaurante-vinos-logrono',
      color: 'var(--color-green)',
    },
    {
      keyword: 'Bar tapas Haro La Rioja',
      type: 'Landing Local',
      volume: '480',
      dificultad: 'Baja',
      proposed: '/bar-tapas-haro',
      color: 'var(--color-green)',
    },
    {
      keyword: 'Desayunos Logroño centro',
      type: 'Landing Categoría',
      volume: '720',
      dificultad: 'Baja',
      proposed: '/desayunos-logrono',
      color: '#2a4d4d',
    },
    {
      keyword: 'Carta de vinos Rioja restaurante',
      type: 'Landing Temática',
      volume: '960',
      dificultad: 'Media',
      proposed: '/carta-vinos-rioja',
      color: '#2a4d4d',
    },
  ]

  return (
    <section className="section section--cream" id="landings">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>06 — Landings & Casos</p>
        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Páginas que<br />
          posicionan.
        </h2>
        <p className="section-body reveal">
          Creamos páginas de aterrizaje específicas para las búsquedas más
          rentables. Cada landing tiene un objetivo claro: aparecer y convertir.
        </p>

        <div className="card-grid card-grid--2 reveal-stagger" style={{ marginTop: '3rem' }}>
          {cases.map((c, i) => (
            <div key={i} className="card card--cream" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: c.color,
              }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge--dark">{c.type}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vol. {c.volume}/mes</span>
              </div>
              <div className="card__title" style={{ color: 'var(--color-dark)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {c.keyword}
              </div>
              <div className="code-block" style={{ marginTop: '1rem', fontSize: '0.72rem', background: '#f0ebe2', border: '1px solid rgba(29,29,27,0.1)', color: 'var(--color-green)' }}>
                rootsrioja.com<span style={{ color: 'var(--color-dark)' }}>{c.proposed}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem', alignItems: 'center' }}>
                <span className="label">Dificultad: {c.dificultad}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-green)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>→ Planificada</span>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-bar reveal" style={{ marginTop: '2.5rem', background: 'white', border: '1px solid rgba(29,29,27,0.1)' }}>
          <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
          <div className="highlight-bar__content">
            <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>Estrategia de contenido optimizada</div>
            <div className="highlight-bar__text">
              Creación de 10 Landing Pages de posicionamiento para CENAS / COMIDAS y así posicionar a ROOTS más como un restaurante.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

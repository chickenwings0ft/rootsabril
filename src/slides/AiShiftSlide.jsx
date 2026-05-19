import AnimatedCounter from '../components/AnimatedCounter'

export default function AiShiftSlide() {
  return (
    <section className="section section--cream" id="ai-shift">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '1.5rem' }}>¡PERO!</h2>
          <p className="section-body reveal" style={{ margin: '0 auto', maxWidth: '650px', fontSize: '1.05rem', fontWeight: 500 }}>
            Este último año el mundo ha cambiado de forma radical.<br/>
            Ahora ya no se busca *solo* en Google.<br/><br/>
            "La gente no está dejando de buscar información; está cambiando dónde y cómo lo hace."
          </p>
        </div>

        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto 3rem' }}>
          <h3 className="step__title" style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 800 }}>El Cambio de Paradigma</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--color-white)', borderRadius: '12px', overflow: 'hidden', border: '3px solid var(--color-dark)', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
            <thead>
              <tr style={{ background: 'var(--color-dark)', color: 'var(--color-cream)' }}>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Comportamiento</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Búsqueda Tradicional (Google)</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Búsqueda IA (ChatGPT)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-dark)' }}>Longitud de consulta</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-muted)' }}>Corta / Palabras clave (~4 palabras)</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 500 }}>Larga, compleja y conversacional (~23 palabras)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-dark)' }}>Tiempo de sesión</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-muted)' }}>Entrar y salir (segundos)</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-dark)', fontWeight: 500 }}>Exploración profunda (~6 minutos)</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-dark)' }}>Tasa de conversión</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'var(--color-muted)' }}>Estándar de la industria</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#50a050', fontWeight: 800 }}>Hasta 4.4 veces mayor (Alta intención)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="metric-grid reveal-stagger" style={{ maxWidth: '900px', margin: '0 auto', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="metric">
            <div className="metric__number">&lt;<AnimatedCounter end={90} suffix="%" /></div>
            <div className="metric__label">Cuota actual Google</div>
          </div>
          <div className="metric">
            <div className="metric__number"><AnimatedCounter end={60} suffix="%" /></div>
            <div className="metric__label">Búsquedas "Zero Clics"</div>
          </div>
          <div className="metric">
            <div className="metric__number" style={{ color: '#7bb87b' }}>+<AnimatedCounter end={740} suffix="%" /></div>
            <div className="metric__label">Tráfico ChatGPT en 1 año</div>
          </div>
          <div className="metric">
            <div className="metric__number">+<AnimatedCounter end={50} suffix="%" /></div>
            <div className="metric__label">Gen Z usa IA vs Buscador</div>
          </div>
        </div>
      </div>
    </section>
  )
}

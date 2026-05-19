export default function AiReadinessSlide() {
  return (
    <section className="section section--cream" id="ai-readiness">
      <div className="container">
        <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>04 — IA & Futuro</p>
        <h2 className="section-title reveal" style={{ color: 'var(--color-dark)' }}>
          Visible para<br />
          humanos.<br/>
          <span style={{ color: 'var(--color-muted)' }}>Y para IAs.</span>
        </h2>
        <p className="section-body reveal">
          ChatGPT, Perplexity y Google AI ya responden preguntas de los usuarios 
          antes de mostrarles resultados web. Roots debe aparecer ahí también.
        </p>

        <div className="card-grid card-grid--2 reveal-stagger" style={{ marginTop: '3rem' }}>
          <div className="card" style={{ borderColor: 'rgba(141,128,112,0.3)' }}>
            <div className="card__icon">🤖</div>
            <div className="card__label">Archivo /llms.txt</div>
            <div className="card__title">Legible por IAs</div>
            <div className="card__body">
              Un archivo de texto en la raíz de la web que les dice a los sistemas 
              de IA quién eres, qué ofreces y cómo citar Roots correctamente.
              Nuevo estándar emergente para visibilidad en IA.
            </div>
            <div className="code-block" style={{ marginTop: '1.25rem', fontSize: '0.72rem' }}>
              <span className="comment"># rootsrioja.com/llms.txt</span><br />
              <span className="key">Name:</span> <span className="val">Roots Rioja</span><br />
              <span className="key">Type:</span> <span className="val">Restaurant & Wine Bar</span><br />
              <span className="key">Locations:</span> <span className="val">Logroño, Haro</span><br />
              <span className="key">Cuisine:</span> <span className="val">Riojana, Vinos D.O.Ca.</span>
            </div>
          </div>

          <div className="card" style={{ borderColor: 'rgba(141,128,112,0.3)' }}>
            <div className="card__icon">💬</div>
            <div className="card__label">Búsqueda Conversacional</div>
            <div className="card__title">Así busca la gente hoy</div>
            <div className="card__body">
              Las búsquedas ya no son palabras clave. Son preguntas completas.
              Optimizamos el contenido para responder a estas consultas naturales.
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                '"¿Cuál es el mejor bar de vinos en Logroño?"',
                '"Restaurante para desayunar en Logroño Calle Laurel"',
                '"Restaurante riojano con carta de vinos amplia"',
              ].map((q, i) => (
                <div key={i} style={{
                  background: 'rgba(29,29,27,0.06)',
                  border: '1px solid rgba(29,29,27,0.1)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.82rem',
                  color: 'var(--color-dark)',
                  fontStyle: 'italic',
                }}>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="highlight-bar reveal" style={{ marginTop: '2.5rem', background: 'white', border: '1px solid rgba(29,29,27,0.1)' }}>
          <div className="highlight-bar__accent" style={{ background: 'var(--color-dark)' }}></div>
          <div className="highlight-bar__content">
            <div className="highlight-bar__title" style={{ color: 'var(--color-dark)' }}>Ventaja competitiva ahora</div>
            <div className="highlight-bar__text">
              El 90% de restaurantes en La Rioja no tiene /llms.txt. Implantarlo ahora posiciona 
              a Roots como referente antes de que todos lo hagan.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

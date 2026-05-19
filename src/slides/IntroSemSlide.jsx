export default function IntroSemSlide() {
  return (
    <section className="section section--light" id="sem-fundamentals">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="two-col" style={{ gap: '4rem', alignItems: 'center' }}>
          
          <div className="reveal-stagger">
            <h2 className="section-title" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              El Atajo
            </h2>
            
            <p className="section-body" style={{ marginBottom: '3rem', paddingLeft: '1.5rem', borderLeft: '3px solid #c85050', fontSize: '1.05rem', lineHeight: 1.6 }}>
              <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.4rem' }}>SEM (Patrocinado)</strong>
              Posición instantánea pagando anuncios. Útil para acciones urgentes, pero si dejas de pagar, desapareces hoy mismo.
            </p>

            <div className="highlight-bar" style={{ maxWidth: '600px' }}>
              <div className="highlight-bar__accent" style={{ background: '#50a050' }}></div>
              <div className="highlight-bar__content">
                <div className="highlight-bar__text" style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem' }}>
                  "Quien posiciona primero en resultado orgánico es un negocio más fiable y mejor valorado para el usuario"
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-stagger" style={{ flex: 1, padding: '1rem' }}>
            {/* SEM Result Card */}
            <div style={{ background: '#f8f9fa', borderRadius: '8px', padding: '1.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontFamily: 'arial, sans-serif', border: '1px solid #eee' }}>
              <p style={{ fontSize: '0.8rem', color: '#202124', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: '#333' }}>Patrocinado</span> 
                <span style={{ opacity: 0.8 }}>rootsrioja.com</span>
              </p>
              <h3 style={{ fontSize: '1.4rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.5rem', textDecoration: 'none' }}>
                Roots | Bar especializado en vinos y cafés en Logroño
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4d5156', lineHeight: 1.5, marginTop: '0.5rem' }}>
                BAR, DESAYUNOS, CAFÉS, TAPAS, VINO Y BUEN AMBIENTE EN EL CENTRO DE LOGROÑO.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

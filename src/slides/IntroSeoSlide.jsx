export default function IntroSeoSlide() {
  return (
    <section className="section section--light" id="seo-fundamentals">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="two-col" style={{ gap: '4rem', alignItems: 'center' }}>
          
          <div className="reveal-stagger">
            <p className="section-label">Fundamentos</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              ¿Qué es el SEO<br/>exactamente?
            </h2>
            <p className="section-body" style={{ marginBottom: '2.5rem', fontWeight: 500, fontSize: '0.95rem' }}>
              <strong>Search Engine Optimization.</strong> Conocer a fondo cómo funciona el motor de búsqueda para adaptarnos y dominar las primeras posiciones. <em>3 Primeras posiciones - 90% de los clicks.</em>
            </p>
            
            <p className="section-body" style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', borderLeft: '3px solid #50a050', fontSize: '1.05rem', lineHeight: 1.6 }}>
              <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.4rem' }}>SEO (Orgánico)</strong>
              Resultados obtenidos por contenido, fiabilidad y calidad del negocio y presencia online. Trabajas para el largo plazo. Una vez bien posicionado, perduras en el tiempo.
            </p>
          </div>

          <div className="reveal-stagger" style={{ flex: 1, padding: '1rem' }}>
            {/* SEO Result Card */}
            <div style={{ background: '#1d1d1b', borderRadius: '8px', padding: '1.8rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', fontFamily: 'arial, sans-serif' }}>
              <p style={{ fontSize: '0.85rem', color: '#a0aab2', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '24px', height: '24px', background: '#333', borderRadius: '50%', display: 'inline-block' }}></span>
                rootsrioja.com <span style={{ color: '#5f6368' }}>› restaurante-logrono</span>
              </p>
              <h3 style={{ fontSize: '1.4rem', color: '#e7e0d3', fontWeight: 400, marginBottom: '0.5rem' }}>
                Roots Rioja — Bar especializado en vinos y cafés en Logroño
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#d1cdc5', marginBottom: '0.5rem' }}>
                <span style={{ color: '#fbbc04', letterSpacing: '2px', fontSize: '1rem' }}>★★★★★</span>
                <span style={{ fontWeight: 'bold', color: '#e7e0d3' }}>4.8</span>
                <span>· 127 reseñas</span>
              </div>
              
              <p style={{ fontSize: '0.85rem', color: '#a0aab2', marginBottom: '0.8rem' }}>
                <span style={{ color: '#50a050', fontWeight: 'bold' }}>Abierto ahora</span> · €€ · Logroño, La Rioja
              </p>
              
              <p style={{ fontSize: '0.9rem', color: '#d1cdc5', lineHeight: 1.5 }}>
                Restaurante de vinos con más de 200 referencias. Desayunos, tapas y menú de temporada. Reserva tu mesa en línea para catar la gastronomía riojana.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

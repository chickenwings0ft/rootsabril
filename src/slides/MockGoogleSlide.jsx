export default function MockGoogleSlide() {
  return (
    <section className="section" style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#202124', fontFamily: 'arial, sans-serif' }} id="mockup-serp">
      
      {/* Fake Google Header */}
      <header className="reveal" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #dfe1e5', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-1px', color: '#4285f4' }}>
          G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
        </div>
        <div style={{ flex: 1, maxWidth: '690px', background: '#fff', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', boxShadow: '0 1px 6px rgba(32,33,36,0.28)' }}>
          <span style={{ color: '#202124', fontSize: '1.1rem', flex: 1 }}>restaurante vinos centro logroño</span>
          <div style={{ display: 'flex', gap: '1rem', color: '#4285f4' }}>
            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>✖</span>
            <span style={{ borderLeft: '1px solid #dfe1e5', paddingLeft: '1rem', cursor: 'pointer' }}>🔍</span>
          </div>
        </div>
      </header>

      {/* Search Results Body */}
      <div className="container reveal" style={{ maxWidth: '1400px', margin: '0 auto', flex: 1, padding: '2rem 1rem' }}>
        
        {/* Results Stats */}
        <p style={{ color: '#70757a', fontSize: '0.85rem', marginBottom: '2rem' }}>Cerca de 1.450.000 resultados (0,32 segundos)</p>

        <div style={{ maxWidth: '650px' }}>
          
          {/* 1. SEM Result (Native Style) */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 700, color: '#202124', fontSize: '0.85rem' }}>Patrocinado</span> 
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#ececec', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#333' }}>
                R
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Roots Rioja</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://rootsrioja.com</p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.4rem', textDecoration: 'none' }}>
              Roots | Bar especializado en vinos y cafés en Logroño
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58, marginTop: '0.3rem' }}>
              BAR, DESAYUNOS, CAFÉS, TAPAS, VINO Y BUEN AMBIENTE EN EL CENTRO DE LOGROÑO.
            </p>
          </div>

          {/* 2. SEO Rich Snippet Result (Native Style) */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#1d1d1b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#e7e0d3' }}>
                R
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Roots Rioja</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://rootsrioja.com <span style={{ color: '#5f6368' }}>› restaurante-logrono</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem', textDecoration: 'none' }}>
              Roots Rioja — Bar especializado en vinos y cafés en Logroño
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4d5156', marginBottom: '0.5rem' }}>
              <span style={{ color: '#fbbc04', letterSpacing: '2px', fontSize: '1rem' }}>★★★★★</span>
              <span style={{ fontWeight: 'bold' }}>4.8</span>
              <span>· 127 reseñas</span>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: '#70757a', marginBottom: '0.5rem' }}>
              <span style={{ color: '#188038', fontWeight: 'bold' }}>Abierto ahora</span> · €€ · Logroño, La Rioja
            </p>
            
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58 }}>
              Restaurante de vinos con más de 200 referencias. Desayunos, tapas y menú de temporada. Reserva tu mesa en línea para catar la gastronomía riojana.
            </p>
          </div>

          {/* 3. Tripadvisor Generic */}
          <div className="reveal-stagger" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#34e0a1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ backgroundImage: 'radial-gradient(circle, #000 3px, transparent 3px)', backgroundSize: '8px 8px', width: '16px', height: '16px', borderRadius: '50%' }}></span>
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ fontSize: '0.85rem', color: '#202124', margin: 0 }}>Tripadvisor</p>
                <p style={{ fontSize: '0.8rem', color: '#4d5156', margin: 0 }}>https://www.tripadvisor.es <span style={{ color: '#5f6368' }}>› Restaurants-g...</span></p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#1a0dab', fontWeight: 400, marginBottom: '0.3rem', textDecoration: 'none' }}>
              Los 10 mejores restaurantes de vinos en Logroño
            </h3>
            
            <p style={{ fontSize: '0.875rem', color: '#4d5156', lineHeight: 1.58 }}>
              Descubre las mejores opciones para disfrutar de la gastronomía riojana maridada con espectaculares vinos de D.O.C.a. Rioja en Logroño.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

import React from 'react'

const KeywordPill = ({ text, accent }) => (
  <span style={{
    fontSize: '0.6rem', fontWeight: '700', padding: '0.22rem 0.55rem',
    borderRadius: '20px',
    background: accent ? 'rgba(45,106,45,0.07)' : 'rgba(29,53,53,0.06)',
    border: `1px solid ${accent ? 'rgba(45,106,45,0.18)' : 'rgba(29,53,53,0.14)'}`,
    color: accent ? '#1a2e1a' : '#1d3535',
    whiteSpace: 'nowrap', display: 'inline-block'
  }}>
    {text}
  </span>
)

export default function LocalSeoHaroMetricsSlide() {
  return (
    <section className="slide-section">
      <div className="slide-inner" style={{ justifyContent: 'flex-start', gap: '0.65rem' }}>

        {/* Header */}
        <header className="slide-header">
          <p className="slide-label">Posicionamiento Local — Haro</p>
          <h2 className="slide-title reveal">Términos de Búsqueda</h2>
          <p className="slide-desc reveal">
            4.902 apariciones (+27,9%) — términos que captan demanda sin marca predefinida.
          </p>
        </header>

        {/* Main Body */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingRight: '4px', width: '100%' }} className="reveal-stagger">

          {/* Categoría Local */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">🔎</span>
              <h3 className="insight-card__title">Búsquedas de Categoría Local</h3>
            </div>
            <p className="insight-card__body" style={{ marginBottom: '0.4rem' }}>Indexación relevante en términos generales de alta intención:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {[
                '"restaurantes" (1.938)',
                '"haro" (359)',
                '"restaurantes en haro" (298)',
                '"restaurantes haro" (171)',
                '"restaurante haro" (153)',
                '"comer en haro" (127)',
                '"donde comer en haro" (124)',
              ].map((kw) => <KeywordPill key={kw} text={kw} />)}
            </div>
          </div>

          {/* Ocio y Cena */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">🍷</span>
              <h3 className="insight-card__title">Intenciones de Ocio y Cena</h3>
            </div>
            <p className="insight-card__body" style={{ marginBottom: '0.4rem' }}>Búsquedas de tarde/noche y experiencia especializada:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {[
                '"bares" (117)',
                '"cenar en haro" (57)',
                '"donde cenar en haro" (48)',
                '"tapas" (40)',
                '"mejores bares para tapear en haro" (30)',
                '"wine bar haro" (24)',
              ].map((kw) => <KeywordPill key={kw} text={kw} />)}
            </div>
          </div>

          {/* Marca */}
          <div className="insight-card">
            <div className="insight-card__head">
              <span className="insight-card__icon">📍</span>
              <h3 className="insight-card__title">Búsquedas de Marca</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.15rem' }}>
              {[
                '"roots" (210)',
                '"roots haro, calle lucrecia arana" (126)',
                '"roots haro" (36)',
              ].map((kw) => <KeywordPill key={kw} text={kw} accent />)}
            </div>
          </div>

          {/* Significado estratégico */}
          <div className="insight-analysis">
            <span className="insight-analysis__icon">🎯</span>
            <p className="insight-analysis__text">
              El <strong>+36,1% de crecimiento interanual</strong> confirma que las optimizaciones locales en Haro están ganando tracción. El negocio capta tráfico cualificado de usuarios que buscan opciones gastronómicas generales, sin depender únicamente de su nombre de marca.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

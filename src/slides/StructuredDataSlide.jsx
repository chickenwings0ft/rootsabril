export default function StructuredDataSlide() {
  return (
    <section className="section section--dark" id="structured-data">
      <div className="container">
        <div className="two-col--40-60 two-col">
          <div>
            <p className="section-label reveal">03 — Datos Estructurados</p>
            <h2 className="section-title reveal">
              Habla el<br />
              idioma de<br />
              Google.
            </h2>
            <p className="section-body reveal">
              Los datos estructurados son un lenguaje que le dice a Google 
              exactamente qué eres, dónde estás y qué ofreces.
            </p>

            <div className="highlight-bar reveal" style={{ marginTop: '2rem' }}>
              <div className="highlight-bar__accent"></div>
              <div className="highlight-bar__content">
                <div className="highlight-bar__title">Rich Snippets</div>
                <div className="highlight-bar__text">
                  Resultados enriquecidos en Google: estrellas, horarios, 
                  precio y carta visible antes de entrar a la web.
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div className="badge badge--green" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>Restaurant Schema</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>LocalBusiness</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem', marginRight: '0.5rem' }}>Menu</div>
              <div className="badge badge--outline" style={{ marginBottom: '0.5rem' }}>Review</div>
            </div>
          </div>

          <div className="reveal">
            <p className="label" style={{ marginBottom: '1rem' }}>Cómo apareces hoy</p>
            <div className="snippet-preview" style={{ marginBottom: '1.5rem', opacity: 0.6, filter: 'grayscale(0.4)' }}>
              <div className="snippet-preview__url">rootsrioja.com</div>
              <div className="snippet-preview__title">Roots Rioja — Restaurante</div>
              <div className="snippet-preview__desc">Restaurante en Logroño y Haro.</div>
            </div>

            <p className="label" style={{ marginBottom: '1rem', color: 'var(--color-cream)' }}>Con Rich Snippets activos</p>
            <div className="snippet-preview">
              <div className="snippet-preview__url">rootsrioja.com › restaurante-logrono</div>
              <div className="snippet-preview__title">Roots Rioja — Bar especializado en vinos y cafés en Logroño</div>
              <div className="snippet-preview__stars">★★★★★ 4.8 · 127 reseñas</div>
              <div className="snippet-preview__extra">Abierto ahora · €€ · Logroño, La Rioja</div>
              <div className="snippet-preview__desc">Restaurante de vinos con más de 200 referencias. Desayunos, tapas y menú de temporada. Reserva tu mesa en línea.</div>
            </div>

            <p className="label" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>JSON-LD que implementamos</p>
            <div className="code-block">
              <span className="comment">{'// Script en el <head> de la web'}</span><br/>
              {'{'}<br/>
              &nbsp;&nbsp;<span className="key">"@type"</span>: <span className="val">"Restaurant"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"name"</span>: <span className="val">"Roots Rioja"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"servesCuisine"</span>: <span className="val">"Spanish"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"priceRange"</span>: <span className="val">"€€"</span>,<br/>
              &nbsp;&nbsp;<span className="key">"aggregateRating"</span>: {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">"ratingValue"</span>: <span className="val">"4.8"</span><br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

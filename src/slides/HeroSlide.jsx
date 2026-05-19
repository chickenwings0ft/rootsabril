export default function HeroSlide() {
  return (
    <section className="hero">
      <div className="hero__bg-text">SEO</div>

      <div className="hero-enter" style={{ position: 'relative', zIndex: 10, marginBottom: '2rem' }}>
        <span className="badge badge--dark" style={{ letterSpacing: '0.15em', padding: '0.5rem 1rem' }}>Propuesta SEO · Roots Rioja</span>
      </div>

      <img
        src="./logo-invertido.png"
        alt="Roots Rioja"
        className="hero__logo hero-enter"
        style={{ opacity: 1, mixBlendMode: 'darken' }}
      />

      <p className="hero__sub hero-enter" style={{ maxWidth: '600px' }}>
        Plan de acción SEO 2026 centrado en destacar comidas y cenas de ROOTS Logroño y Haro.
      </p>





      <div className="hero__scroll hero-enter">
        <div className="hero__scroll-line"></div>
        <span>Scroll para explorar</span>
      </div>
    </section>
  )
}

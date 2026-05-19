import { useEffect, useRef, useState } from 'react'

const RESULTS = [
  { pos: 1, name: 'TripAdvisor', url: 'tripadvisor.es › restaurantes-logroño', title: 'Los 10 mejores restaurantes de Logroño', stars: null },
  { pos: 2, name: 'TheFork', url: 'thefork.es › centro-logroño', title: 'Restaurantes con reserva · Centro · Logroño', stars: null },
  { pos: 3, name: 'El Rincón de José', url: 'elrinconlogrono.com', title: 'El Rincón de José — Cocina riojana clásica', stars: '4.5', reviews: 89 },
  { pos: 4, name: 'La Galería', url: 'lagaleria-logrono.com', title: 'La Galería — Tapas y vinos de autor', stars: '4.3', reviews: 54 },
  { pos: 5, name: 'Cachetero', url: 'cachetero.es', title: 'Restaurante Cachetero — Av. Laurel, Logroño', stars: '4.4', reviews: 120 },
  { pos: 6, name: 'Gobierno de La Rioja', url: 'larioja.org › restaurantes', title: 'Guía gastronómica de La Rioja — Restaurantes...', stars: null },
  { pos: 7, name: 'Zubía', url: 'restaurantezubia.com', title: 'Zubía — Menú de temporada en Logroño', stars: '4.2', reviews: 41 },
  { pos: 8, name: 'Roots Rioja', url: 'rootsrioja.com', title: 'Roots Rioja — Bar especializado en vinos y cafés en Logroño', stars: '4.1', reviews: 18, isRoots: true },
]

export default function GoogleRankingSlide() {
  const sectionRef = useRef(null)
  const [position, setPosition] = useState(7) // index (0-based), starts at bottom
  const [phase, setPhase] = useState('idle') // idle | climbing | done

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAnimation()
        else { setPosition(7); setPhase('idle') }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function startAnimation() {
    setPosition(7)
    setPhase('idle')
    let cur = 7
    const interval = setInterval(() => {
      cur -= 1
      setPosition(cur)
      if (cur <= 0) {
        clearInterval(interval)
        setPhase('done')
      }
    }, 700)
  }

  const sortedResults = [...RESULTS]
  const rootsItem = sortedResults.splice(7, 1)[0]
  sortedResults.splice(position, 0, rootsItem)

  return (
    <section
      ref={sectionRef}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', background: '#ffffff', fontFamily: 'arial, sans-serif', overflow: 'hidden', color: '#202124' }}
      id="google-ranking"
    >
      {/* Fake search bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', width: '100%', maxWidth: '720px', padding: '0 1rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px', flexShrink: 0 }}>
          G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
        </div>
        <div style={{ flex: 1, border: '1px solid #dfe1e5', borderRadius: '24px', padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', boxShadow: '0 1px 6px rgba(32,33,36,.15)' }}>
          <span style={{ fontSize: '0.95rem', color: '#202124' }}>restaurante vinos centro logroño</span>
          <span style={{ marginLeft: 'auto', color: '#4285f4' }}>🔍</span>
        </div>
      </div>

      {/* Results list */}
      <div style={{ width: '100%', maxWidth: '720px', padding: '0 1rem', position: 'relative' }}>
        {sortedResults.map((r) => (
          <div
            key={r.name}
            style={{
              padding: '0.7rem 0.9rem',
              marginBottom: '0.4rem',
              borderRadius: '8px',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: r.isRoots ? (phase === 'done' ? 'rgba(52,168,83,0.08)' : 'transparent') : 'transparent',
              border: r.isRoots && phase === 'done' ? '1px solid rgba(52,168,83,0.3)' : '1px solid transparent',
              boxShadow: r.isRoots && phase === 'done' ? '0 2px 8px rgba(52,168,83,0.12)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 800, color: r.isRoots ? (phase === 'done' ? '#188038' : '#1a0dab') : '#70757a',
                minWidth: '1.4rem', textAlign: 'right', transition: 'color 0.4s'
              }}>#{sortedResults.indexOf(r) + 1}</span>
              <div style={{ width: '22px', height: '22px', background: r.isRoots ? '#1d1d1b' : '#f1f3f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 'bold', color: r.isRoots ? '#e7e0d3' : '#5f6368', flexShrink: 0 }}>
                {r.name[0]}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#202124', margin: 0, fontWeight: r.isRoots ? 700 : 400 }}>{r.name}</p>
              <p style={{ fontSize: '0.7rem', color: '#4d5156', margin: 0 }}>· {r.url}</p>
            </div>
            <h3 style={{ fontSize: r.isRoots ? '1.05rem' : '0.95rem', color: '#1a0dab', fontWeight: 400, margin: '0 0 0.2rem 2.2rem', lineHeight: 1.3 }}>
              {r.title}
            </h3>
            {r.stars && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: '2.2rem', fontSize: '0.78rem', color: '#4d5156' }}>
                <span style={{ color: '#fbbc04' }}>★★★★{'★'.repeat(r.stars >= 4.5 ? 1 : 0)}</span>
                <span style={{ fontWeight: '600' }}>{r.stars}</span>
                <span>· {r.reviews} reseñas</span>
              </div>
            )}
            {r.isRoots && r.stars && (
              <div style={{ marginLeft: '2.2rem', fontSize: '0.78rem', color: phase === 'done' ? '#188038' : '#70757a', transition: 'color 0.4s' }}>
                {phase === 'done' ? '★ Abierto ahora · €€ · Logroño, La Rioja' : `Abierto ahora · €€ · Logroño`}
              </div>
            )}
          </div>
        ))}
      </div>

      {phase === 'done' && (
        <div style={{ marginTop: '2rem', padding: '0.8rem 2rem', background: '#1d1d1b', borderRadius: '100px', color: '#e7e0d3', fontSize: '0.9rem', fontWeight: 600, animation: 'fadeUp 0.6s ease forwards' }}>
          🎯 Roots Rioja en posición #1
        </div>
      )}
    </section>
  )
}

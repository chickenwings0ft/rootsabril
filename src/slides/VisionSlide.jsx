import { useEffect, useRef, useState } from 'react'

// --- Google ranking data ---
const RESULTS = [
  { name: 'TripAdvisor', url: 'tripadvisor.es', title: 'Los 10 mejores restaurantes de vinos en Logroño' },
  { name: 'TheFork', url: 'thefork.es', title: 'Restaurantes · Centro · Logroño — reserva ya' },
  { name: 'El Rincón de José', url: 'elrincon.com', title: 'El Rincón de José — Cocina riojana clásica' },
  { name: 'La Galería', url: 'lagaleria.com', title: 'La Galería — Tapas y vinos de autor en Logroño' },
  { name: 'Cachetero', url: 'cachetero.es', title: 'Restaurante Cachetero — Av. Laurel' },
  { name: 'Zubía', url: 'zubia.com', title: 'Zubía — Menú de temporada, Logroño' },
  { name: 'La Bodeguilla', url: 'labodeguilla.com', title: 'La Bodeguilla del Camino — vinos & tapas' },
  { name: 'Roots Rioja', url: 'rootsrioja.com', title: 'Roots Rioja — Bar especializado en vinos y cafés en Logroño', isRoots: true },
]

// --- ChatGPT typewriter text ---
const RESPONSE = `Claro. Para cenar con rieslings en el centro de Logroño te recomiendo **Roots Rioja**. Tienen más de 200 referencias, incluyendo rieslings alemanes y alsacianos excepcionales. Cocina de producto, ambiente premium y atención personalizada al vino. 4.8⭐ con más de 127 reseñas.

Pregunta por **Roots Rioja** esta noche, no te decepcionará.`

function TypewriterText({ text, trigger, speed = 22 }) {
  const [displayed, setDisplayed] = useState('')
  const timerRef = useRef(null)
  const idxRef = useRef(0)

  useEffect(() => {
    clearTimeout(timerRef.current)
    idxRef.current = 0
    setDisplayed('')
    if (!trigger) return
    const tick = () => {
      idxRef.current++
      setDisplayed(text.slice(0, idxRef.current))
      if (idxRef.current < text.length) timerRef.current = setTimeout(tick, speed)
    }
    timerRef.current = setTimeout(tick, 400)
    return () => clearTimeout(timerRef.current)
  }, [trigger])

  const parts = displayed.split(/(\*\*[^*]+\*\*)/)
  return (
    <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: '#ececec', margin: 0, whiteSpace: 'pre-wrap' }}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i} style={{ color: '#b8a469', fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
      <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#b8a469', marginLeft: '2px', animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
    </p>
  )
}

export default function VisionSlide() {
  const sectionRef = useRef(null)
  const [position, setPosition] = useState(7)
  const [rankDone, setRankDone] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPosition(7); setRankDone(false); setTriggered(false)
          setTimeout(() => startRanking(), 300)
          setTimeout(() => setTriggered(true), 400)
        } else {
          setPosition(7); setRankDone(false); setTriggered(false)
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function startRanking() {
    let cur = 7
    const iv = setInterval(() => {
      cur--
      setPosition(cur)
      if (cur <= 0) { clearInterval(iv); setRankDone(true) }
    }, 380)
  }

  const list = [...RESULTS]
  const rootsItem = list.splice(7, 1)[0]
  list.splice(position, 0, rootsItem)

  return (
    <section ref={sectionRef} style={{ display: 'flex', minHeight: '100vh', width: '100%', overflow: 'hidden' }} id="vision-slide">
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* LEFT: Google */}
      <div style={{ flex: 1, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2.5rem 2rem', fontFamily: 'arial, sans-serif', borderRight: '1px solid #e0e0e0' }}>
        {/* Mini search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>
            G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
          </span>
          <div style={{ flex: 1, border: '1px solid #dfe1e5', borderRadius: '20px', padding: '0.4rem 0.9rem', fontSize: '0.75rem', color: '#202124', boxShadow: '0 1px 4px rgba(0,0,0,.12)' }}>
            restaurante vinos centro logroño
          </div>
        </div>

        {list.map((r, idx) => (
          <div key={r.name} style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.4rem 0.5rem', borderRadius: '6px', marginBottom: '0.15rem',
            transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            background: r.isRoots && rankDone ? 'rgba(52,168,83,0.08)' : 'transparent',
            border: r.isRoots && rankDone ? '1px solid rgba(52,168,83,0.25)' : '1px solid transparent',
          }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: r.isRoots ? (rankDone ? '#188038' : '#1a0dab') : '#9aa0a6', minWidth: '1.2rem', textAlign: 'right', transition: 'color 0.3s' }}>
              #{idx + 1}
            </span>
            <div style={{ width: '18px', height: '18px', background: r.isRoots ? '#1d1d1b' : '#f1f3f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 'bold', color: r.isRoots ? '#e7e0d3' : '#5f6368', flexShrink: 0 }}>
              {r.name[0]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.68rem', color: '#4d5156', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.url}</div>
              <div style={{ fontSize: r.isRoots ? '0.82rem' : '0.75rem', color: '#1a0dab', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: r.isRoots ? 700 : 400 }}>
                {r.title}
              </div>
              {r.isRoots && <div style={{ fontSize: '0.65rem', color: rankDone ? '#188038' : '#70757a', transition: 'color 0.4s' }}>★★★★★ 4.8 · 127 reseñas · {rankDone ? '✓ Abierto ahora' : 'Logroño'}</div>}
            </div>
          </div>
        ))}
        {rankDone && (
          <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#188038' }}>
            🎯 Roots Rioja — Posición #1
          </div>
        )}
      </div>

      {/* RIGHT: ChatGPT */}
      <div style={{ flex: 1, background: '#212121', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2.5rem 2rem', gap: '1rem' }}>
        {/* Header mock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '24px', height: '24px', background: '#10a37f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 41 41" fill="#fff"><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.371-3.904 10.079 10.079 0 0 0-9.888 4.957 9.964 9.964 0 0 0-6.654 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.373 3.904 10.079 10.079 0 0 0 9.89-4.958 9.967 9.967 0 0 0 6.654-4.811 10.079 10.079 0 0 0-1.243-11.817z"/></svg>
          </div>
          <span style={{ color: '#ececec', fontSize: '0.8rem', fontWeight: 600 }}>ChatGPT</span>
        </div>

        {/* User message */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#2f2f2f', borderRadius: '14px 14px 3px 14px', padding: '0.6rem 1rem', maxWidth: '85%' }}>
            <p style={{ fontSize: '0.78rem', color: '#ececec', margin: 0 }}>
              Donde puedo ir a cenar en Logroño en el centro que tenga rieslings
            </p>
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <div style={{ width: '24px', height: '24px', background: '#10a37f', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <TypewriterText text={RESPONSE} trigger={triggered} speed={22} />
          </div>
        </div>
      </div>
    </section>
  )
}

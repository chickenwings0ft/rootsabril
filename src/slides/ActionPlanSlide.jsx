import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

const G_RESULTS = [
  { name: 'TripAdvisor', url: 'tripadvisor.es', title: 'Los 10 mejores restaurantes de vinos en Logroño' },
  { name: 'TheFork', url: 'thefork.es', title: 'Restaurantes · Centro · Logroño — reserva ya' },
  { name: 'El Rincón de José', url: 'elrincon.com', title: 'El Rincón de José — Cocina riojana clásica' },
  { name: 'La Galería', url: 'lagaleria.com', title: 'La Galería — Tapas y vinos de autor' },
  { name: 'Cachetero', url: 'cachetero.es', title: 'Restaurante Cachetero — Av. Laurel' },
  { name: 'Zubía', url: 'zubia.com', title: 'Zubía — Menú de temporada' },
  { name: 'La Bodeguilla', url: 'labodeguilla.com', title: 'La Bodeguilla — vinos & tapas' },
  { name: 'Roots Rioja', url: 'rootsrioja.com', title: 'Roots Rioja — Bar especializado en vinos y cafés en Logroño', isRoots: true },
]

const RESPONSE = `Claro. Para cenar con rieslings en el centro de Logroño te recomiendo **Roots Rioja**. Más de 200 referencias, rieslings alemanes y alsacianos de gran nivel. Cocina de producto, ambiente premium y atención personalizada al vino. ★4.8 · 127 reseñas.\n\nSin duda, **Roots Rioja** es tu mejor opción esta noche.`

// --- Scramble component ---
function ScrambleText({ text, delay = 0, trigger }) {
  const [display, setDisplay] = useState(() => text.split('').map(() => ' '))
  const rafRef = useRef(null)

  useEffect(() => {
    if (!trigger) { setDisplay(text.split('').map(() => ' ')); return }
    let start = null
    const duration = 900
    const chars = text.split('')
    const tick = (ts) => {
      if (!start) start = ts + delay
      const elapsed = ts - start
      if (elapsed < 0) { rafRef.current = requestAnimationFrame(tick); return }
      const progress = Math.min(elapsed / duration, 1)
      const resolved = Math.floor(progress * chars.length)
      setDisplay(chars.map((ch, i) => {
        if (ch === ' ') return ' '
        if (i < resolved) return ch
        return elapsed > 0 ? CHARS[Math.floor(Math.random() * CHARS.length)] : ' '
      }))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [trigger, text, delay])

  return (
    <span style={{ display: 'inline-block', whiteSpace: 'pre' }}>
      {display.map((ch, i) => (
        <span key={i} style={{ display: 'inline-block', minWidth: ch === ' ' ? '0.35em' : undefined }}>{ch}</span>
      ))}
    </span>
  )
}

// --- Typewriter component ---
function TypewriterText({ text, trigger, onDone, speed = 12 }) {
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
      else if (onDone) setTimeout(onDone, 400)
    }
    timerRef.current = setTimeout(tick, 300)
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

export default function ActionPlanSlide() {
  const sectionRef = useRef(null)
  // Scramble state
  const [triggered, setTriggered] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  // Vision overlay state
  const [showVision, setShowVision] = useState(false)
  const [visionVisible, setVisionVisible] = useState(false)
  // Google ranking state
  const [position, setPosition] = useState(7)
  const [rankDone, setRankDone] = useState(false)
  // ChatGPT done
  const [chatDone, setChatDone] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Reset all
        setTriggered(false); setLineVisible(false)
        setShowVision(false); setVisionVisible(false)
        setPosition(7); setRankDone(false); setChatDone(false)
        // Start scramble
        setTimeout(() => {
          setTriggered(true)
          setTimeout(() => setLineVisible(true), 1600)
          // After scramble is fully settled, show vision overlay
          setTimeout(() => {
            setShowVision(true)
            setTimeout(() => setVisionVisible(true), 50)
            // Start Google ranking
            let cur = 7
            const iv = setInterval(() => {
              cur--; setPosition(cur)
              if (cur <= 0) { clearInterval(iv); setRankDone(true) }
            }, 750)
          }, 3600)
        }, 80)
      } else {
        setTriggered(false); setLineVisible(false)
        setShowVision(false); setVisionVisible(false)
        setPosition(7); setRankDone(false); setChatDone(false)
      }
    }, { threshold: 0.5 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Overlay stays visible once shown — no auto-dismiss

  const list = [...G_RESULTS]
  const rootsItem = list.splice(7, 1)[0]
  list.splice(position, 0, rootsItem)

  const rowStyle = {
    display: 'block',
    fontFamily: 'var(--font-heading, sans-serif)',
    fontWeight: 800,
    fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
    textTransform: 'uppercase',
    letterSpacing: '-0.04em',
    lineHeight: 1,
  }

  return (
    <section ref={sectionRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', backgroundColor: '#1d1d1b', overflow: 'hidden', position: 'relative' }} id="action-plan-chapter">
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* Main scramble text */}
      <div style={{ textAlign: 'center', transform: visionVisible ? 'translateY(-100vh)' : 'translateY(0)', opacity: visionVisible ? 0 : 1, transition: 'all 1.4s cubic-bezier(0.87, 0, 0.13, 1)' }}>
        <span style={{ ...rowStyle, color: '#e7e0d3', display: 'block', marginBottom: '0.05em' }}>
          <ScrambleText text="PLAN" delay={0} trigger={triggered} />
        </span>
        <span style={{ ...rowStyle, color: '#e7e0d3', display: 'block', marginBottom: '0.05em' }}>
          <ScrambleText text="DE" delay={200} trigger={triggered} />
        </span>
        <span style={{ ...rowStyle, color: '#b8a469', display: 'block' }}>
          <ScrambleText text="ACCIÓN" delay={400} trigger={triggered} />
        </span>
        <div style={{ height: '3px', width: lineVisible ? '260px' : '0px', background: '#e7e0d3', margin: '2.5rem auto 0', borderRadius: '2px', transition: lineVisible ? 'width 1s cubic-bezier(0.87,0,0.13,1)' : 'none' }} />
      </div>

      {/* Vision overlay */}
      {showVision && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          transform: visionVisible ? 'translateY(0)' : 'translateY(100vh)',
          transition: 'transform 1.4s cubic-bezier(0.87, 0, 0.13, 1)',
          zIndex: 20,
        }}>
          {/* LEFT: Google */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', fontFamily: 'arial, sans-serif', borderRight: '1px solid #e0e0e0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <span style={{ fontSize: '1rem', fontWeight: 800 }}>
                G<span style={{ color: '#ea4335' }}>o</span><span style={{ color: '#fbbc04' }}>o</span>g<span style={{ color: '#34a853' }}>l</span><span style={{ color: '#ea4335' }}>e</span>
              </span>
              <div style={{ flex: 1, border: '1px solid #dfe1e5', borderRadius: '20px', padding: '0.35rem 0.9rem', fontSize: '0.72rem', color: '#202124', boxShadow: '0 1px 4px rgba(0,0,0,.12)' }}>
                restaurante vinos centro logroño
              </div>
            </div>
            {list.map((r, idx) => (
              <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.4rem', borderRadius: '5px', marginBottom: '0.1rem', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', background: r.isRoots && rankDone ? 'rgba(52,168,83,0.08)' : 'transparent', border: r.isRoots && rankDone ? '1px solid rgba(52,168,83,0.25)' : '1px solid transparent' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: r.isRoots ? (rankDone ? '#188038' : '#1a0dab') : '#9aa0a6', minWidth: '1.1rem', textAlign: 'right', transition: 'color 0.3s' }}>#{idx + 1}</span>
                <div style={{ width: '16px', height: '16px', background: r.isRoots ? '#1d1d1b' : '#f1f3f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 'bold', color: r.isRoots ? '#e7e0d3' : '#5f6368', flexShrink: 0 }}>{r.name[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.62rem', color: '#4d5156', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.url}</div>
                  <div style={{ fontSize: r.isRoots ? '0.78rem' : '0.7rem', color: '#1a0dab', fontWeight: r.isRoots ? 700 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</div>
                  {r.isRoots && <div style={{ fontSize: '0.6rem', color: rankDone ? '#188038' : '#70757a', transition: 'color 0.4s' }}>★★★★★ 4.8 · {rankDone ? '✓ Abierto ahora' : 'Logroño'}</div>}
                </div>
              </div>
            ))}
            {rankDone && <div style={{ marginTop: '0.8rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#188038' }}>Roots Rioja — Posición #1</div>}
          </div>

          {/* RIGHT: ChatGPT */}
          <div style={{ flex: 1, background: '#212121', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', gap: '1rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <div style={{ width: '22px', height: '22px', background: '#10a37f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="11" height="11" viewBox="0 0 41 41" fill="#fff"><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.371-3.904 10.079 10.079 0 0 0-9.888 4.957 9.964 9.964 0 0 0-6.654 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.373 3.904 10.079 10.079 0 0 0 9.89-4.958 9.967 9.967 0 0 0 6.654-4.811 10.079 10.079 0 0 0-1.243-11.817z"/></svg>
              </div>
              <span style={{ color: '#ececec', fontSize: '0.75rem', fontWeight: 600 }}>ChatGPT</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ background: '#2f2f2f', borderRadius: '14px 14px 3px 14px', padding: '0.55rem 0.9rem', maxWidth: '85%' }}>
                <p style={{ fontSize: '0.75rem', color: '#ececec', margin: 0 }}>Donde puedo ir a cenar en Logroño en el centro que tenga rieslings</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', background: '#10a37f', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ flex: 1 }}>
                {showVision && <TypewriterText text={RESPONSE} trigger={showVision} speed={28} onDone={() => setChatDone(true)} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

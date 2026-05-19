import { useEffect, useRef, useState } from 'react'

const FULL_RESPONSE = `Claro, te recomiendo varias opciones en el centro de Logroño que casan muy bien con tu búsqueda.

En primer lugar, **Roots Rioja** destaca especialmente. Es un bar de vinos y restaurante que cuenta con más de 200 referencias de vinos, incluyendo rieslings alemanes y alsacianos de gran nivel. Su carta incluye desayunos, tapas creativas y un menú de temporada centrado en la gastronomía riojana. Está en pleno centro y tiene muy buenas reseñas —4.8 sobre 5 con más de 127 opiniones. Es el tipo de sitio donde el personal conoce cada vino y puede guiarte perfectamente.

Otras opciones a considerar serían El Cachetero o La Galería, aunque si buscas específicamente rieslings con conocimiento de causa, **Roots Rioja** es sin duda tu mejor apuesta esta noche.

¿Quieres que te ayude a hacer la reserva?`

function TypewriterText({ text, trigger, speed = 18 }) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!trigger) {
      setDisplayed('')
      indexRef.current = 0
      return
    }
    indexRef.current = 0
    setDisplayed('')
    const tick = () => {
      indexRef.current++
      setDisplayed(text.slice(0, indexRef.current))
      if (indexRef.current < text.length) {
        timerRef.current = setTimeout(tick, speed)
      }
    }
    timerRef.current = setTimeout(tick, 600)
    return () => clearTimeout(timerRef.current)
  }, [trigger, text, speed])

  // Parse bold (**text**) inline
  const parts = displayed.split(/(\*\*[^*]+\*\*)/)
  return (
    <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#ececec', margin: 0, whiteSpace: 'pre-wrap' }}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i} style={{ color: '#b8a469', fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
      <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#b8a469', marginLeft: '2px', animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
    </p>
  )
}

export default function ChatGptMentionSlide() {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(false)
          setTimeout(() => setTriggered(true), 300)
        } else {
          setTriggered(false)
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', background: '#212121', overflow: 'hidden' }}
      id="chatgpt-mention"
    >
      <style>{`@keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }`}</style>

      <div style={{ width: '100%', maxWidth: '760px', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {/* User question bubble */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#2f2f2f', borderRadius: '18px 18px 4px 18px', padding: '0.8rem 1.2rem', maxWidth: '80%' }}>
            <p style={{ fontSize: '0.9rem', color: '#ececec', margin: 0 }}>
              Donde puedo ir a cenar hoy en Logroño a un restaurante en el centro que tenga rieslings
            </p>
          </div>
        </div>

        {/* ChatGPT response */}
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
          <div style={{ width: '32px', height: '32px', background: '#10a37f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
            <svg width="16" height="16" viewBox="0 0 41 41" fill="#fff">
              <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.371-3.904 10.079 10.079 0 0 0-9.888 4.957 9.964 9.964 0 0 0-6.654 4.811 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.373 3.904 10.079 10.079 0 0 0 9.89-4.958 9.967 9.967 0 0 0 6.654-4.811 10.079 10.079 0 0 0-1.243-11.817z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            {triggered && <TypewriterText text={FULL_RESPONSE} trigger={triggered} speed={16} />}
          </div>
        </div>
      </div>
    </section>
  )
}

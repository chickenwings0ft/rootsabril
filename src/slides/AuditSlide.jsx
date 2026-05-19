import { useEffect, useRef, useState } from 'react'

export default function AuditSlide() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const boxStyle = {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: '12px',
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    overflow: 'hidden'
  }

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    fontSize: '0.82rem',
    color: '#a1a1aa',
    lineHeight: 1.4
  }

  // Consistent color for FASE markers instead of the "arcoiris" 
  const faseColor = '#71717a' // subtle grey

  return (
    <section 
      ref={sectionRef} 
      className="section section--dark" 
      id="audit"
      style={{ overflow: 'hidden' }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        <p className="section-label reveal">0X — Fase 1</p>
        <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
          Auditoría Técnica.
        </h2>
        <p className="section-body reveal" style={{ marginTop: '1.5rem', maxWidth: '600px', fontSize: '1.05rem' }}>
          Antes de redactar o salir a buscar enlaces, necesitamos que Google pueda leer, entender y priorizar la web sin fricciones tecnológicas. Esto es todo lo que auditamos por debajo del capó:
        </p>

        {/* Global Progress Line (Red to Yellow to Green) */}
        <div style={{ marginTop: '3.5rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #ef4444 0%, #facc15 50%, #22c55e 100%)',
            borderRadius: '4px',
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'
          }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          
          {/* Card 1: Indexación */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 01</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Rastreo e Indexación</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Análisis de archivo Robots.txt</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Optimización de Sitemap.xml</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Detección de errores 404 y redirecciones</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Presupuesto de rastreo (Crawl Budget)</li>
            </ul>
          </div>

          {/* Card 2: Core Web Vitals */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 02</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Core Web Vitals</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Velocidad de carga (LCP)</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Estabilidad visual (CLS)</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Interactividad (INP / FID)</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Optimización UX Mobile-First</li>
            </ul>
          </div>

          {/* Card 3: Arquitectura */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 03</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Arquitectura y Semántica</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Jerarquía de encabezados (H1, H2, H3)</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Prevención de canibalización de palabras clave</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Estructura de URLs amigables</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Sistema de enlazado interno (PageRank)</li>
            </ul>
          </div>

          {/* Card 4: Seguridad y Autoridad */}
          <div className="reveal" style={{...boxStyle, transform: inView ? 'translateY(0)' : 'translateY(30px)', opacity: inView ? 1 : 0, transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s'}}>
            <div style={{ fontSize: '0.75rem', color: faseColor, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>FASE 04</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-floral)', letterSpacing: '0.01em', marginBottom: '0.5rem' }}>Seguridad de Dominio</h3>
            <ul style={listStyle}>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Certificados SSL y Mixed Content</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Limpieza de enlaces tóxicos (Spam)</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Etiquetas Canonical para contenido duplicado</li>
              <li style={{display: 'flex', gap: '8px'}}><span style={{color: 'var(--color-floral)'}}>✓</span> Redirecciones Www vs Non-Www</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

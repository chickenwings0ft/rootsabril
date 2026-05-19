import { useEffect, useRef, useState } from 'react'

export default function AnalyticsSlide() {
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

  // Simulated SVG path for GA4 Traffic (Bar chart-like heights)
  const ga4Bars = [40, 55, 45, 70, 65, 85, 80, 100, 120, 110, 130, 150]

  // Simulated SVG paths for GSC (Line charts Clicks/Impressions)
  // Scaled for a 400x120 viewBox
  const gscClicksPath = "M0,100 Q40,90 80,85 T160,70 T240,65 T320,40 T400,20"
  const gscImpPath = "M0,110 Q40,100 80,105 T160,90 T240,75 T320,55 T400,30"

  const panelStyle = {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.04)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }

  const headerStyle = {
    padding: '1.2rem 1.5rem',
    borderBottom: '1px solid #f1f3f4',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  }

  const kpiGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    background: '#f1f3f4',
    borderBottom: '1px solid #f1f3f4'
  }

  const kpiBox = {
    background: '#fff',
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  }

  return (
    <section 
      ref={sectionRef} 
      className="section section--cream" 
      id="analytics"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '4rem 0' }}
    >
      <div className="container" style={{ maxWidth: '1400px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="section-label reveal" style={{ color: 'var(--color-muted)' }}>02 — Medición</p>
          <h2 className="section-title reveal" style={{ color: 'var(--color-dark)', marginBottom: '0.5rem', fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
            Medición = Resultados
          </h2>
          <p className="reveal" style={{ fontSize: '0.9rem', color: 'var(--color-muted)', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            * Se entregará <strong style={{color: 'var(--color-dark)'}}>INFORME DE RESULTADOS</strong> mensual
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2.5rem', 
          flex: 1,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          
          {/* GA4 DASHBOARD MOCK */}
          <div className="reveal" style={{...panelStyle, transform: inView ? 'translateY(0)' : 'translateY(40px)', opacity: inView ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'}}>
            <div style={headerStyle}>
              <img src="./logo-ga4.png" alt="GA4" style={{ height: '28px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#5f6368', letterSpacing: '-0.3px' }}>Google Analytics 4</span>
            </div>
            
            <div style={kpiGrid}>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Usuarios</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>14.8K</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 24.5%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Usuarios nuevos</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>12.1K</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 18.2%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Tiempo de interacc.</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>1m 42s</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 12.0%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Conversiones</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>842</span>
                <span style={{ fontSize: '0.7rem', color: '#137333', fontWeight: 500 }}>↑ 45.8%</span>
              </div>
            </div>

            <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', color: '#3c4043', fontWeight: 500, marginBottom: '1.5rem' }}>Tráfico de usuarios por mes</span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px', height: '100%' }}>
                {ga4Bars.map((h, i) => (
                  <div key={i} style={{ 
                    flex: 1, 
                    background: '#e8f0fe',
                    borderRadius: '4px 4px 0 0', 
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end'
                  }}>
                    <div style={{
                      width: '100%',
                      background: '#1a73e8',
                      borderRadius: '4px 4px 0 0',
                      height: inView ? `${(h/150)*100}%` : '0%',
                      transition: `height 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + (i*0.05)}s`
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem', color: '#80868b', fontSize: '0.65rem' }}>
                <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                <span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
              </div>
            </div>
          </div>

          {/* GSC DASHBOARD MOCK */}
          <div className="reveal" style={{...panelStyle, transform: inView ? 'translateY(0)' : 'translateY(40px)', opacity: inView ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s'}}>
            <div style={headerStyle}>
              <img src="./logo-gsc.png" alt="GSC" style={{ height: '28px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#5f6368', letterSpacing: '-0.3px' }}>Google Search Console</span>
            </div>
            
            <div style={kpiGrid}>
              <div style={{...kpiBox, borderTop: '4px solid #4285f4'}}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Clics totales</span>
                <span style={{ fontSize: '1.6rem', color: '#4285f4', fontWeight: 500 }}>3.45 K</span>
              </div>
              <div style={{...kpiBox, borderTop: '4px solid #5e35b1'}}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Impresiones totales</span>
                <span style={{ fontSize: '1.6rem', color: '#5e35b1', fontWeight: 500 }}>124 K</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>CTR medio</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>2.8%</span>
              </div>
              <div style={kpiBox}>
                <span style={{ fontSize: '0.75rem', color: '#5f6368', fontWeight: 500 }}>Posición media</span>
                <span style={{ fontSize: '1.6rem', color: '#202124', fontWeight: 400 }}>14.2</span>
              </div>
            </div>

            <div style={{ padding: '2rem 1.5rem', flex: 1, position: 'relative' }}>
              <span style={{ fontSize: '0.85rem', color: '#3c4043', fontWeight: 500, marginBottom: '2rem', display: 'block' }}>Rendimiento en Búsqueda</span>
              
              <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 3rem)' }}>
                {/* Grid lines */}
                <div style={{ position: 'absolute', inset: 0, borderTop: '1px solid #f1f3f4', borderBottom: '1px solid #f1f3f4' }} />
                <div style={{ position: 'absolute', top: '50%', width: '100%', borderTop: '1px dashed #f1f3f4' }} />

                {/* SVG Charts */}
                <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, overflow: 'visible', width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4285f4" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#4285f4" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5e35b1" stopOpacity="0.15"/>
                      <stop offset="100%" stopColor="#5e35b1" stopOpacity="0"/>
                    </linearGradient>
                  </defs>

                  {/* Impressions (Purple) */}
                  <path 
                    d={`M0,120 L0,110 Q40,100 80,105 T160,90 T240,75 T320,55 T400,30 L400,120 Z`} 
                    fill="url(#purpleGrad)" 
                    style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease 0.6s' }}
                  />
                  <path 
                    d={gscImpPath} 
                    fill="none" 
                    stroke="#5e35b1" 
                    strokeWidth="2.5"
                    strokeDasharray="600"
                    strokeDashoffset={inView ? 0 : 600}
                    style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s' }}
                  />

                  {/* Clicks (Blue) */}
                  <path 
                    d={`M0,120 L0,100 Q40,90 80,85 T160,70 T240,65 T320,40 T400,20 L400,120 Z`} 
                    fill="url(#blueGrad)" 
                    style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease 0.8s' }}
                  />
                  <path 
                    d={gscClicksPath} 
                    fill="none" 
                    stroke="#4285f4" 
                    strokeWidth="2.5" 
                    strokeDasharray="600"
                    strokeDashoffset={inView ? 0 : 600}
                    style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1) 0.7s' }}
                  />
                </svg>

                {/* X Axis dates */}
                <div style={{ position: 'absolute', bottom: '-20px', left: 0, width: '100%', display: 'flex', justifyContent: 'space-between', color: '#80868b', fontSize: '0.65rem' }}>
                  <span>24 ene</span>
                  <span>14 mar</span>
                  <span>2 may</span>
                  <span>20 jun</span>
                  <span>8 ago</span>
                  <span>26 oct</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

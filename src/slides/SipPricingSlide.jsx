import { useRef, useState } from 'react'

export default function SipPricingSlide() {
  const containerRef = useRef(null)
  const [closed, setClosed] = useState(false)
  
  const handleClose = () => {
    setClosed(true)
  }

  return (
    <section 
      ref={containerRef}
      className="section" 
      id="pricing-sip"
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: 0,
        background: '#ffffff',
        color: '#1a1a1a',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          padding: '2rem'
        }}
      >
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6c757d', marginBottom: '1.5rem', fontWeight: 600 }}>
          Presupuesto
        </span>
        <img 
          src="./sip-and-wonder-brunch-alicante-mobile-logo.webp" 
          alt="Sip and Wonder" 
          className="reveal"
          style={{ width: '180px', marginBottom: '2.5rem', objectFit: 'contain' }}
        />

        {/* Pricing Table Concept - Sip & Wonder */}
        <div className="reveal" style={{ 
          background: '#f8f9fa', 
          border: '1px solid #e9ecef', 
          padding: '3rem', 
          borderRadius: '16px',
          width: '100%',
          maxWidth: '520px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>Sip and Wonder</div>
          <div style={{ fontSize: '0.85rem', color: '#6c757d', marginBottom: '2rem' }}>Estrategia de SEO + Publicación de contenidos semanales</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e9ecef' }}>
             <div>
                <div style={{ fontSize: '0.75rem', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 600 }}>Puesta en marcha</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a' }}>€ 1.000</div>
              </div>
              <div style={{ width: '1px', background: '#e9ecef' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: 600 }}>Mantenimiento</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a' }}>€ 350<span style={{ fontSize: '1rem', fontWeight: 500, color: '#adb5bd' }}>/m</span></div>
              </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#495057', margin: '0 1.5rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#212529', flexShrink: 0}} /> Auditoría y Setup Técnico Inicial</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#212529', flexShrink: 0}} /> Arquitectura Web: 10 Landings de inicio y 4 al mes</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#212529', flexShrink: 0}} /> Estrategia SEO Local y Perfil Google Business Profile</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: '#212529', flexShrink: 0}} /> Dashboard Analítico (GA4) & Reporte de KPIs</div>
          </div>
        </div>

      </div>
    </section>
  )
}

import { useRef, useState } from 'react'

export default function PricingSlide() {
  const containerRef = useRef(null)

  return (
    <section 
      ref={containerRef}
      className="section" 
      id="pricing-roots"
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: 0,
        background: '#1d1d1b',
        color: '#e7e0d3'
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
        <span className="reveal" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-floral)', marginBottom: '1.5rem' }}>
          Presupuesto
        </span>
        <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center', lineHeight: 1.1 }}>
          El momento <br/>de estar.
        </h2>

        {/* Pricing Table Concept - Roots */}
        <div className="reveal" style={{ 
          background: '#21211e', 
          border: '1px solid rgba(255,255,255,0.06)', 
          padding: '3rem', 
          borderRadius: '16px',
          width: '100%',
          maxWidth: '520px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-floral)' }}>Roots</div>
          <div style={{ fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '2rem' }}>Doble Estrategia (Logroño + Haro) + Énfasis IA + Ajustes y medición</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
             <div>
                <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Puesta en marcha</div>
                <div style={{ fontSize: '2rem', fontWeight: 600 }}>€ 1.400</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.06)' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Mantenimiento</div>
                <div style={{ fontSize: '2rem', fontWeight: 600 }}>€ 500<span style={{ fontSize: '1rem', fontWeight: 400, color: '#a1a1aa' }}>/m</span></div>
              </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#ececec', margin: '0 1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Auditoría Inicial y Setup Técnico Integral</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Arquitectura Web: 10 Landings de inicio y 4 al mes</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Gestión Dual: Fichas GBP Logroño + Haro</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--color-floral)', flexShrink: 0}} /> Soporte técnico "All-in" (Cubro cualquier necesidad del cliente)</div>
          </div>
        </div>

        {/* Note: The closing button was moved to the very last slide (Sip and Wonder) so the presentation flows naturally from brand to brand before closing */}

      </div>
    </section>
  )
}

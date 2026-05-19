import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function SearchIntentGoogleSlide() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <>
      <section className="section section--cream" id="search-intent-google">
        <div className="container" style={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <span className="badge" style={{ background: 'var(--color-dark)', color: 'var(--color-cream)', fontSize: '1.2rem', padding: '8px 16px' }}>Google</span>
              Búsqueda Tradicional
            </h2>
            <p className="card__body" style={{ fontSize: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
              <strong style={{ color: 'var(--color-dark)', display: 'block', marginBottom: '0.5rem', fontSize: '1.4rem' }}>"¿Dónde cenar hoy en Logroño?"</strong>
              <em style={{ color: 'var(--color-muted)' }}>Aquí miras reseñas, fotos, nombres, mapas, cuál te suena, si repetir…</em>
            </p>
          </div>

          <div className="reveal" style={{ width: '100%', maxWidth: '1100px' }}>
            <div 
              style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', height: '55vh', cursor: 'zoom-in' }}
              onClick={(e) => { e.stopPropagation(); setLightboxImage('/google-search-new.png'); }}
            >
              <img src="./google-search-new.png" alt="Búsqueda Google" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Overlay */}
      {lightboxImage && typeof document !== 'undefined' && createPortal(
        <div 
          className="swiper-no-swiping"
          onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(29,29,27,0.95)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem'
          }}
        >
          <img 
            src={lightboxImage} 
            alt="Zoom Search Screenshot" 
            style={{ 
              maxWidth: '100vw', 
              maxHeight: '100vh', 
              objectFit: 'contain',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              borderRadius: '8px',
              animation: 'fadeUp 0.3s ease forwards'
            }} 
          />
        </div>,
        document.body
      )}
    </>
  )
}

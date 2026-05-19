import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function SearchIntentChatGptSlide() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <>
      <section className="section section--dark" id="search-intent-chatgpt">
        <div className="container" style={{ maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 className="section-title inverted" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <span className="badge" style={{ background: '#10a37f', color: '#fff', fontSize: '1.2rem', padding: '8px 16px', border: 'none' }}>ChatGPT</span>
              IA
            </h2>
            <p className="card__body" style={{ fontSize: '1.25rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--color-cream)' }}>
              <strong style={{ color: '#10a37f', display: 'block', marginBottom: '0.8rem', fontSize: '1.4rem' }}>"Donde puedo ir a cenar hoy en Logroño a un restaurante en el centro que tenga rieslings"</strong>
              <em style={{ opacity: 0.8, display: 'block', maxWidth: '800px', margin: '0 auto' }}>Aquí está la verdadera venta. Fíjate la enorme diferencia de restaurantes que ha mostrado ChatGPT solo por que ha querido y cómo argumenta.</em>
            </p>
          </div>

          <div className="reveal" style={{ width: '100%', maxWidth: '1100px' }}>
            <div 
              style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', height: '52vh', cursor: 'zoom-in' }}
              onClick={(e) => { e.stopPropagation(); setLightboxImage('/chatgpt-search-riesling.png'); }}
            >
              <img src="./chatgpt-search-riesling.png" alt="Búsqueda ChatGPT" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
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

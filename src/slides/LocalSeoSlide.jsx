import { useState } from 'react'
import { createPortal } from 'react-dom'
import AnimatedCounter from '../components/AnimatedCounter'

export default function LocalSeoSlide() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      <section className="section section--green" id="diagnostico">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <p className="section-label">01 — Diagnóstico</p>
          
          <div className="two-col two-col--60-40" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            <div>
              <h2 className="section-title reveal" style={{ marginBottom: '1.5rem' }}>
                SEO Local
              </h2>
              <p className="section-body reveal" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '2.5rem' }}>
                Optimizar Google Business Profile<br/>
                + Apple Maps<br/>
                + Bing Places<br/>
                + Directorios.
              </p>

              <div className="highlight-bar reveal" style={{ marginBottom: '2.5rem' }}>
                <div className="highlight-bar__accent"></div>
                <div className="highlight-bar__content">
                  <div className="highlight-bar__title">Oportunidad Real</div>
                  <div className="highlight-bar__text">
                    Búsquedas como "restaurante vinos Logroño" tienen altísima intención de visita. Roots debe dominar ese top 3 o estar lo más cerca posible.
                  </div>
                </div>
              </div>

              <div className="reveal-stagger">
                <div className="step">
                  <div className="step__num">01</div>
                  <div className="step__content">
                    <h3 className="step__title">Optimizar Ficha GBP</h3>
                    <p className="step__body">Categorías correctas, atributos de bar de vinos y cafés, características que hacen único a Roots...</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num">02</div>
                  <div className="step__content">
                    <h3 className="step__title">Estrategia de Reseñas</h3>
                    <p className="step__body">Protocolo de respuestas al 100% de las reseñas y solicitar reseñas a clientes satisfechos.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num">03</div>
                  <div className="step__content">
                    <h3 className="step__title">Consistencia y Actividad</h3>
                    <p className="step__body">Datos idénticos en todas las plataformas y publicaciones semanales para contentar al algoritmo. <strong>Importante: esto necesita colaboración.</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div 
                className="reveal" 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(29,29,27,0.1)', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
                  cursor: 'zoom-in',
                  height: '75vh',
                  width: '100%'
                }}
                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
              >
                <img 
                  src="./ficha-google.png" 
                  alt="Ficha de Google de Roots" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Overlay */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="swiper-no-swiping"
          onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
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
            src="./ficha-google.png" 
            alt="Zoom Ficha de Google" 
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

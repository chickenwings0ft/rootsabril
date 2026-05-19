import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules'

// Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Components
import Preloader from './components/Preloader'
import Nav from './components/Nav'

// Slides
import ReportHeroSlide from './slides/ReportHeroSlide'
import AdquisicionUsuariosSlide from './slides/AdquisicionUsuariosSlide'
import FuenteMedioSesionSlide from './slides/FuenteMedioSesionSlide'
import AiTrafficSlide from './slides/AiTrafficSlide'
import ConversionesSlide from './slides/ConversionesSlide'
import TechBrowsersSlide from './slides/TechBrowsersSlide'
import LocalSeoRiojaSlide from './slides/LocalSeoRiojaSlide'
import LocalSeoRiojaMetricsSlide from './slides/LocalSeoRiojaMetricsSlide'
import LocalSeoHaroSlide from './slides/LocalSeoHaroSlide'
import LocalSeoHaroMetricsSlide from './slides/LocalSeoHaroMetricsSlide'
import OrganicKeywordsSlide from './slides/OrganicKeywordsSlide'
import TechnicalAnalyticsSlide from './slides/TechnicalAnalyticsSlide'
import TechImplementationSlideP1 from './slides/TechImplementationSlideP1'
import TechImplementationSlideP2 from './slides/TechImplementationSlideP2'
import GenerativeAIOptSlide from './slides/GenerativeAIOptSlide'
import ActionPlanMaySlide from './slides/ActionPlanMaySlide'
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)
  const [introFinished, setIntroFinished] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auth local check
  useEffect(() => {
    const authState = localStorage.getItem('roots_auth')
    if (authState === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'rootsabril') {
      localStorage.setItem('roots_auth', 'true')
      setIsAuthenticated(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper)
  }

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const handleNextSlide = () => {
    if (swiperInstance) {
      if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
        swiperInstance.slideTo(0)
      } else {
        swiperInstance.slideNext()
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div style={{
        width: '100vw', height: '100dvh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#e6dfd3',
        color: '#1d1d1b', fontFamily: '"Inter", sans-serif',
        position: 'relative', overflow: 'hidden'
      }}>
        <img src="./logo-invertido.png" alt="Roots Rioja" style={{ width: '220px', marginBottom: '3rem', position: 'relative', zIndex: 1 }} />

        <form onSubmit={handleLogin} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.85rem', width: '100%', maxWidth: '260px', position: 'relative', zIndex: 1
        }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setAuthError(false) }}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: authError ? '1.5px solid #c85050' : '1.5px solid rgba(29,29,27,0.15)',
              background: 'rgba(255,255,255,0.85)',
              color: '#1d1d1b',
              outline: 'none',
              textAlign: 'center',
              letterSpacing: '0.12em',
              fontSize: '0.9rem',
              transition: 'border 0.25s, background 0.25s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          />
          {authError && (
            <p style={{ fontSize: '0.65rem', color: '#c85050', fontWeight: '600', letterSpacing: '0.06em', margin: '0' }}>Contraseña incorrecta</p>
          )}
          <button type="submit" style={{
            width: '100%',
            padding: '0.85rem',
            background: '#1d3535',
            color: '#ede8df',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'transform 0.2s, background 0.25s',
            boxShadow: '0 4px 16px rgba(29,53,53,0.22)'
          }}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.03)'; e.target.style.background = '#254848'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.background = '#1d3535'; }}
          >
            Acceder al Informe
          </button>
        </form>

        <p style={{ position: 'absolute', bottom: '2rem', fontSize: '0.55rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.35)' }}>
          Roots Rioja · Informe Abril 2026
        </p>
      </div>
    )
  }

  const isLastSlide = swiperInstance && activeIndex === swiperInstance.slides.length - 1
  const isFirstSlide = activeIndex === 0

  return (
    <div style={{ width: '100vw', height: '100dvh', overflow: 'hidden', background: 'var(--color-cream)', position: 'relative' }}>
      <Preloader onFinish={() => setIntroFinished(true)} />
      <div style={{ opacity: isLastSlide ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Nav />
      </div>
      
      <Swiper
        allowTouchMove={introFinished}
        allowSlideNext={introFinished}
        allowSlidePrev={introFinished}
        direction="horizontal"
        slidesPerView={1}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Keyboard, Pagination]}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        speed={800}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide><ReportHeroSlide /></SwiperSlide>
        <SwiperSlide><AdquisicionUsuariosSlide /></SwiperSlide>
        <SwiperSlide><FuenteMedioSesionSlide /></SwiperSlide>
        <SwiperSlide><AiTrafficSlide /></SwiperSlide>
        <SwiperSlide><ConversionesSlide /></SwiperSlide>
        <SwiperSlide><TechBrowsersSlide /></SwiperSlide>
        <SwiperSlide><LocalSeoRiojaSlide /></SwiperSlide>
        <SwiperSlide><LocalSeoRiojaMetricsSlide /></SwiperSlide>
        <SwiperSlide><LocalSeoHaroSlide /></SwiperSlide>
        <SwiperSlide><LocalSeoHaroMetricsSlide /></SwiperSlide>
        <SwiperSlide><OrganicKeywordsSlide /></SwiperSlide>
        <SwiperSlide><TechnicalAnalyticsSlide /></SwiperSlide>
        <SwiperSlide><TechImplementationSlideP1 /></SwiperSlide>
        <SwiperSlide><TechImplementationSlideP2 /></SwiperSlide>
        <SwiperSlide><GenerativeAIOptSlide /></SwiperSlide>
        <SwiperSlide><ActionPlanMaySlide /></SwiperSlide>
        <SwiperSlide><ExecutiveSummarySlide /></SwiperSlide>
      </Swiper>

      {/* Floating navigation button */}
      {introFinished && (
        <button
          onClick={handleNextSlide}
          className="swiper-no-swiping"
          style={{
            position: 'absolute',
            bottom: '1.6rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 999,
            background: isFirstSlide ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            color: isFirstSlide ? '#ede8df' : 'rgba(29,29,27,0.32)',
            border: isFirstSlide ? '1px solid rgba(237,232,223,0.22)' : '1px solid rgba(29,29,27,0.13)',
            borderRadius: '50px',
            padding: '0.42rem 1.1rem',
            fontSize: '0.56rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'opacity 0.3s, color 0.3s, border-color 0.3s, background 0.3s',
            opacity: isFirstSlide ? 0.85 : 0.65,
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.color = isFirstSlide ? '#1d1d1b' : '#1d1d1b'
            e.currentTarget.style.borderColor = isFirstSlide ? '#ede8df' : 'rgba(29,29,27,0.3)'
            e.currentTarget.style.background = isFirstSlide ? '#ede8df' : 'rgba(255,255,255,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = isFirstSlide ? '0.85' : '0.65'
            e.currentTarget.style.color = isFirstSlide ? '#ede8df' : 'rgba(29,29,27,0.32)'
            e.currentTarget.style.borderColor = isFirstSlide ? 'rgba(237,232,223,0.22)' : 'rgba(29,29,27,0.13)'
            e.currentTarget.style.background = isFirstSlide ? 'rgba(255, 255, 255, 0.08)' : 'transparent'
          }}
        >
          {isLastSlide ? '↺ Volver al inicio' : 'Siguiente →'}
        </button>
      )}
    </div>
  )
}

export default App

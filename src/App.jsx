import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

import ReportHeroSlide from './slides/ReportHeroSlide'
import AdquisicionUsuariosSlide from './slides/AdquisicionUsuariosSlide'
import FuenteMedioSesionSlide from './slides/FuenteMedioSesionSlide'
import AiTrafficSlide from './slides/AiTrafficSlide'
import ConversionesSlide from './slides/ConversionesSlide'
import TechBrowsersSlide from './slides/TechBrowsersSlide'
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide'
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

import Nav from './components/Nav'
import Preloader from './components/Preloader'
import { prepareSlideAnimations, animateSlideIn } from './animations'

function App() {
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [introFinished, setIntroFinished] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('roots_auth') === 'true'
  })
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'rootsabril') {
      setIsAuthenticated(true)
      sessionStorage.setItem('roots_auth', 'true')
    } else {
      setAuthError(true)
    }
  }

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
    if (swiper.slides && swiper.slides[swiper.activeIndex]) {
      const activeSlide = swiper.slides[swiper.activeIndex]
      animateSlideIn(activeSlide)
    }
  }

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper)
    if (swiper.slides && swiper.slides.length) {
      swiper.slides.forEach(slide => prepareSlideAnimations(slide))
      setTimeout(() => {
        if (swiper.slides && swiper.slides[swiper.activeIndex]) {
          animateSlideIn(swiper.slides[swiper.activeIndex])
        }
      }, 100)
    }
  }

  const handleNextSlide = () => {
    if (!swiperInstance) return
    if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
      swiperInstance.slideTo(0)
    } else {
      swiperInstance.slideNext()
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

  return (
    <div style={{ width: '100vw', height: '100dvh', overflow: 'hidden', background: 'var(--color-cream)', position: 'relative' }}>
      <Preloader onFinish={() => setIntroFinished(true)} />
      <div style={{ opacity: isLastSlide ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Nav />
      </div>
      
      <Swiper
        allowTouchMove={true}
        allowSlideNext={true}
        allowSlidePrev={true}
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
            bottom: '0.85rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 999,
            background: 'rgba(255, 255, 255, 0.85)',
            color: '#1d1d1b',
            border: '1.5px solid rgba(29,29,27,0.18)',
            borderRadius: '50px',
            padding: '0.3rem 0.85rem',
            fontSize: '0.48rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'opacity 0.25s, transform 0.2s, background 0.25s',
            opacity: 0.9,
            whiteSpace: 'nowrap',
            boxShadow: '0 3px 10px rgba(0,0,0,0.06)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.transform = 'translateX(-50%) scale(1.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'
            e.currentTarget.style.transform = 'translateX(-50%) scale(1)'
          }}
        >
          {isLastSlide ? '↺ Inicio' : 'Siguiente →'}
        </button>
      )}
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onFinish }) {
  const [complete, setComplete] = useState(false)
  const containerRef = useRef(null)
  const darkLayerRef = useRef(null)
  const creamLogoRef = useRef(null)
  const darkLogoRef = useRef(null)

  useEffect(() => {
    // 1. Initial Reveal (Plays immediately on mount to establish the screen)
    gsap.set(darkLayerRef.current, { clipPath: 'circle(0% at 50% 50%)' })
    gsap.set(darkLogoRef.current, { scale: 0.9, opacity: 0 })
    gsap.fromTo(creamLogoRef.current, 
      { scale: 0.9, opacity: 0 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    )

    // 2. The Interactive Wipe Timeline (Paused until user scrolls/keys)
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        setComplete(true)
        if (onFinish) onFinish()
      }
    })

    tl
      // Liquid expanding circle wipe revealing the Dark background & Dark logo
      .to(darkLayerRef.current, { 
        clipPath: 'circle(150% at 50% 50%)', 
        duration: 1.5, 
        ease: 'power4.inOut' 
      })
      // Animate the dark logo simultaneously
      .to(darkLogoRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, "<0.3")
      
      // Hold the dark logo briefly
      .to({}, { duration: 0.5 })

      // Slide the entire preloader UP to reveal the presentation
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
      })

    // 3. Attach Scroll, Key, Tap & Touch Listeners
    const handleScroll = (e) => {
      // Ignorar scroll hacia arriba o teclas irrelevantes
      if (e.type === 'wheel' && e.deltaY <= 0) return;
      if (e.type === 'keydown' && !['ArrowDown', 'ArrowRight', ' ', 'Enter'].includes(e.key)) return;
      
      tl.play();
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
      window.removeEventListener('click', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleScroll);
    window.addEventListener('click', handleScroll);
    window.addEventListener('touchstart', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
      window.removeEventListener('click', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
      tl.kill();
    };
  }, [])

  if (complete) return null

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#e7e0d3', // Updated Beige value
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Cream Logo Layer */}
      <img 
        ref={creamLogoRef}
        src="./logo-invertido.png" 
        alt="Roots Rioja"
        style={{ width: '250px', objectFit: 'contain', zIndex: 1, position: 'absolute' }}
      />

      {/* Dark Layer that expands via clip-path */}
      <div 
        ref={darkLayerRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#1d1d1b',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          ref={darkLogoRef}
          src="./logo-original.png" 
          alt="Roots Rioja"
          style={{ width: '250px', objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

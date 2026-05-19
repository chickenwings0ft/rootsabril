import { useEffect, useRef } from 'react'
import { animateCounter } from '../animations'

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          animateCounter(el, end, duration, suffix)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, suffix, duration])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

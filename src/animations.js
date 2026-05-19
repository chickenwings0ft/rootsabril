import gsap from 'gsap'

export function prepareSlideAnimations(slideEl) {
  // Hide all animated elements initially
  const reveals = slideEl.querySelectorAll('.reveal')
  const staggers = slideEl.querySelectorAll('.reveal-stagger > *')
  const enters = slideEl.querySelectorAll('.hero-enter')
  
  if (reveals.length) gsap.set(reveals, { opacity: 0, y: 40 })
  if (staggers.length) gsap.set(staggers, { opacity: 0, y: 35 })
  if (enters.length) gsap.set(enters, { opacity: 0, y: 30 })
}

export function animateSlideIn(slideEl) {
  const reveals = slideEl.querySelectorAll('.reveal')
  const staggerGroups = slideEl.querySelectorAll('.reveal-stagger')
  const enters = slideEl.querySelectorAll('.hero-enter')

  if (enters.length) {
    gsap.to(enters, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.1,
    })
  }

  if (reveals.length) {
    gsap.to(reveals, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.2,
    })
  }

  staggerGroups.forEach((group) => {
    gsap.to(group.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.4,
    })
  })
}

export function animateCounter(el, end, duration = 2, suffix = '') {
  const obj = { val: 0 }
  gsap.killTweensOf(obj)
  gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.round(obj.val).toLocaleString('es-ES') + suffix
    },
  })
}

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useFadeIn({ delay = 0, y = 32, x = 0 } = {}) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    if (prefersReduced()) {
      gsap.set(el, { opacity: 1, y: 0, x: 0 })
      return
    }

    gsap.fromTo(
      el,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  return ref
}

export function useWipeReveal({ delay = 0, duration = 1.1 } = {}) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    if (prefersReduced()) {
      gsap.set(el, { clipPath: 'inset(0 0% 0 0)' })
      return
    }

    gsap.fromTo(
      el,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration,
        ease: 'expo.out',
        delay,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  return ref
}

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Fades + lifts a group of elements in as the trigger enters the viewport.
 * No-ops instantly (elements left at their natural, visible state) when the
 * visitor has requested reduced motion.
 */
export function revealGroup(trigger, elements, { y = 28, stagger = 0.08, start = "top 82%" } = {}) {
  const targets = (Array.isArray(elements) ? elements : [elements]).filter(Boolean)
  if (!trigger || targets.length === 0) return () => {}

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(targets, { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" })
    return () => {}
  }

  gsap.set(targets, { opacity: 0, y })

  const tween = gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger,
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none reverse",
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

/**
 * Reveals an image through a smooth clip-path mask as it scrolls into view.
 */
export function revealClip(trigger, element, { start = "top 85%" } = {}) {
  if (!trigger || !element) return () => {}

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(element, { clipPath: "inset(0% 0% 0% 0%)" })
    return () => {}
  }

  gsap.set(element, { clipPath: "inset(0% 0% 100% 0%)" })

  const tween = gsap.to(element, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none reverse",
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

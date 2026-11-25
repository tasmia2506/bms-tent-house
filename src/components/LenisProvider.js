"use client"

import { useEffect } from "react"
import { ReactLenis, useLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function LenisTicker() {
  const lenis = useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    if (!lenis) return undefined

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(update)
  }, [lenis])

  return null
}

export default function LenisProvider({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, autoRaf: false }}>
      <LenisTicker />
      {children}
    </ReactLenis>
  )
}

"use client"

import { useEffect, useRef } from "react"

export default function CopyrightYear() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) ref.current.textContent = String(new Date().getFullYear())
  }, [])

  return <span ref={ref} suppressHydrationWarning />
}

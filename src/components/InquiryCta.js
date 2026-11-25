"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import Button from "./ui/Button"
import { revealGroup } from "@/lib/scrollReveal"
import styles from "./InquiryCta.module.css"

export default function InquiryCta() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    return revealGroup(root, [
      root.querySelector(`.${styles.eyebrow}`),
      root.querySelector(`.${styles.heading}`),
      root.querySelector(`.${styles.text}`),
      root.querySelector(`.${styles.actions}`),
    ])
  }, [])

  return (
    <section className={styles.cta} ref={sectionRef}>
      <Image
        src="/images/backgrounds/cta-bg-v2.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 1360px, 100vw"
        className={styles.flourish}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Planning An Event?</p>
        <h2 className={styles.heading}>Let&apos;s Make It Happen.</h2>
        <p className={styles.text}>
          Tell us what you&apos;re planning. We&apos;ll help you explore the right rental equipment and event
          arrangements.
        </p>
        <div className={styles.actions}>
          <Button to="/contact" variant="dark" pill icon="arrow-up-right">
            Request a Quote
          </Button>
          <Button
            href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I would like to enquire about your rental products.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
            pill
            icon="whatsapp"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { yearsOfExperience } from "@/lib/business"
import Button from "./ui/Button"
import styles from "./Hero.module.css"

const headlineLines = [
  {
    script: false,
    words: [{ text: "Make" }, { text: "Every", highlight: true }, { text: "Event" }],
  },
  {
    script: true,
    words: [{ text: "Memorable." }],
  },
]

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const eyebrow = root.querySelector(`.${styles.eyebrow}`)
    const words = root.querySelectorAll(`.${styles.word}`)
    const lead = root.querySelector(`.${styles.lead}`)
    const actions = root.querySelectorAll(`.${styles.actionItem}`)
    const image = root.querySelector(`.${styles.imageEl}`)
    const meta = root.querySelector(`.${styles.meta}`)
    const scrollCue = root.querySelector(`.${styles.scrollCue}`)

    if (reduceMotion) {
      gsap.set([eyebrow, words, lead, actions, meta, scrollCue], { opacity: 1, y: 0, clearProps: "transform" })
      gsap.set(image, { scale: 1 })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0)
      .fromTo(eyebrow, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, 0.15)
      .fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 0.75, stagger: 0.08 }, 0.3)
      .fromTo(lead, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 0.85)
      .fromTo(actions, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 1.0)
      .fromTo(meta, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.2)

    if (scrollCue) {
      gsap.fromTo(scrollCue, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.3 })
      gsap.to(scrollCue, { y: 6, duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 })
    }

    return () => tl.kill()
  }, [])

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={styles.visual}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/backgrounds/hero-collage-v2.webp"
            alt="BMS Tent House event collage — premium tent canopy, dining tables, lounge furniture, stage with sound and lighting, and cooling equipment"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className={styles.imageEl}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.scrollCueDot} aria-hidden="true" />
            Event Infrastructure · Rentals · Event Solutions
          </p>

          <h1
            className={styles.headline}
            aria-label={headlineLines.map((line) => line.words.map((w) => w.text).join(" ")).join(" ")}
          >
            {headlineLines.map((line, lineIndex) => (
              <span
                className={`${styles.lineMask} ${line.script ? styles.scriptLine : ""}`}
                key={`line-${lineIndex}`}
              >
                {line.words.map((w, i) => (
                  <span
                    className={`${styles.word} ${w.highlight ? styles.wordLemon : ""}`}
                    key={`${w.text}-${i}`}
                  >
                    {w.text}
                    {i < line.words.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className={styles.lead}>
            From elegant tents and canopies to premium furniture, dining arrangements, staging, sound, lighting and
            cooling equipment.
            <br />
            Everything you need to bring an event to life.
          </p>

          <div className={styles.actions}>
            <span className={styles.actionItem}>
              <Button to="/products" variant="lemon" pill icon="arrow-up-right">
                Explore Rentals
              </Button>
            </span>
            <span className={styles.actionItem}>
              <Button to="/contact" variant="outline-dark" pill icon="arrow-up-right">
                Plan Your Event
              </Button>
            </span>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.meta}>
            <p className={styles.metaText}>
              <span className={styles.scrollCueDot} aria-hidden="true" />
              Bengaluru &middot; {yearsOfExperience}+ Years Of Trusted Event Rentals
            </p>
          </div>

          <span className={styles.scrollCue} aria-hidden="true">
            <span className={styles.scrollCueDot} />
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}

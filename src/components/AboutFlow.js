"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { yearsOfExperience, branches } from "@/lib/business"
import Button from "./ui/Button"
import { revealGroup, revealClip } from "@/lib/scrollReveal"
import styles from "./AboutFlow.module.css"

const storyStats = [
  { value: `${yearsOfExperience}+`, label: "Years of Experience" },
  { value: `${branches.length}`, label: "Locations in Bengaluru" },
  { value: "Bengaluru", label: "Our Service Area" },
]

export default function AboutFlow() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const cleanups = [
      revealGroup(root, [
        root.querySelector(`.${styles.tag}`),
        root.querySelector(`.${styles.eyebrow}`),
        root.querySelector(`.${styles.heading}`),
        root.querySelector(`.${styles.text}`),
        root.querySelector(`.${styles.stats}`),
        root.querySelector(`.${styles.link}`),
      ]),
      revealClip(root, root.querySelector(`.${styles.collageImageA}`)),
    ]

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section className={styles.flow} ref={sectionRef}>
      <div className={styles.imagePanel}>
        <div className={styles.imageInner}>
          <Image
            src="/images/backgrounds/about-brand-collage.webp"
            alt="BMS Tent House brand collage — tents, dining, stage and lounge furniture"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={styles.collageImageA}
          />
        </div>
      </div>

      <div className={styles.textPanel}>
        <div className={styles.content}>
          <p className={styles.tag}>
            <span className={styles.tagDot} aria-hidden="true" />
            About Us
          </p>
          <p className={`script ${styles.eyebrow}`}>Built Around Every Occasion</p>
          <h2 className={styles.heading}>We Bring The Event Together.</h2>
          <p className={styles.text}>
            BMS Tent House provides event rental essentials for celebrations, gatherings and professional
            occasions. From tent structures and dining furniture to stage equipment and event setups, we help
            bring the practical details of an event together.
          </p>
          <div className={styles.stats}>
            {storyStats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.link}>
            <Button to="/about" variant="lemon" pill icon="arrow-up-right">
              More About BMS
            </Button>
            <Button to="/contact" variant="lemon" pill icon="arrow-up-right">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import styles from "./ClientExperiences.module.css"

const testimonials = [
  {
    quote: "Every detail was handled with care, from the first planning call to the last moment of the event.",
    name: "Wedding Client",
    meta: "Wedding — Bengaluru",
  },
  {
    quote: "The team understood what we needed and translated it into a setup our guests are still talking about.",
    name: "Corporate Client",
    meta: "Corporate Event — Bengaluru",
  },
  {
    quote: "They managed the tent, furniture and staging so smoothly that we could just enjoy the celebration.",
    name: "Celebration Client",
    meta: "Private Celebration — Bengaluru",
  },
  {
    quote: "Setup was on time, the stage and lighting looked exactly as discussed, and breakdown was just as smooth.",
    name: "Exhibition Client",
    meta: "Exhibition — Bengaluru",
  },
  {
    quote: "From the first call to the final pickup, communication was clear and nothing was left to guesswork.",
    name: "Birthday Client",
    meta: "Birthday Party — Bengaluru",
  },
  {
    quote: "Good range of furniture and decor options, and the crew worked around our venue's tight timeline.",
    name: "Inauguration Client",
    meta: "Inauguration — Bengaluru",
  },
]

export default function ClientExperiences() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector("[data-card]")
    const amount = card ? card.getBoundingClientRect().width + 24 : 320
    track.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector("[data-card]")
    const amount = card ? card.getBoundingClientRect().width + 24 : 320
    setActive(Math.round(track.scrollLeft / amount))
  }

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.eyebrow}>Testimonials</p>
            <h2 className={styles.heading}>
              What Our <span className={styles.headingAccent}>Clients Say.</span>
            </h2>
          </div>
          <div className={styles.arrows}>
            <button type="button" aria-label="Previous testimonial" className={styles.arrowButton} onClick={() => scrollByCard(-1)}>
              <ArrowLeft size={16} />
            </button>
            <button type="button" aria-label="Next testimonial" className={styles.arrowButton} onClick={() => scrollByCard(1)}>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
          {testimonials.map((t) => (
            <div key={t.name + t.meta} data-card className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <p className={styles.name}>{t.name}</p>
              <p className={styles.meta}>{t.meta}</p>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((t, i) => (
            <span key={t.name + t.meta} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { faqItems } from "@/data/faq"
import styles from "./FAQSection.module.css"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <p className={`script ${styles.eyebrow}`}>Need to Know More?</p>
        <h2 className={styles.heading}>Frequently Asked Questions.</h2>

        <div className={styles.faqList}>
          {faqItems.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.question} className={styles.faqItem}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className={styles.faqButton}
                >
                  <span className={styles.faqQuestion}>{item.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && <p className={styles.faqAnswer}>{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import styles from "./HowItWorks.module.css"

const steps = [
  { title: "Browse Rentals", subtitle: "Explore the collection and equipment you need." },
  { title: "Request a Quote", subtitle: "Share your event details with our team." },
  { title: "Confirm Your Booking", subtitle: "Finalise your selection and dates." },
  { title: "Get Event-Ready", subtitle: "We deliver, set up and handle the rest." },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.posterHeading}>
          <p className={styles.posterCaps}>BOOK YOUR EVENT</p>
          <p className={`script ${styles.posterScript}`}>Stress-Free.</p>
        </div>

        <div className={styles.row}>
        <div className={styles.photoWrap}>
          <Image
            src="/images/backgrounds/contact-hero-v2.webp"
            alt="Elegant black and white table setting for an event"
            fill
            sizes="(min-width: 900px) 40vw, 100vw"
            className={styles.photo}
          />
        </div>

        <div className={styles.card}>
          <p className={`script ${styles.eyebrow}`}>How It Works</p>
          <h2 className={styles.heading}>A Simple Process.</h2>
          <p className={styles.lead}>From first enquiry to event-ready delivery, here&apos;s how we make it easy.</p>

          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}.</span>
                <div>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepSubtitle}>{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

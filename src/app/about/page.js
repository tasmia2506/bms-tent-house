import Image from "next/image"
import Button from "@/components/ui/Button"
import { business, branches, contacts, yearsOfExperience } from "@/lib/business"
import styles from "./page.module.css"

const principles = [
  {
    code: "01",
    title: "Infrastructure",
    text: "Tents, staging, furniture, lighting and cooling equipment maintained to a professional, event-ready standard.",
  },
  {
    code: "02",
    title: "Experience",
    text: `${yearsOfExperience} years of hands-on setups across weddings, corporate events, exhibitions and inaugurations.`,
  },
  {
    code: "03",
    title: "Execution",
    text: "Delivery, setup and breakdown handled start to finish by our own team, not outsourced on the day.",
  },
  {
    code: "04",
    title: "Consistency",
    text: `The same standard of quality across every one of our ${branches.length} Bengaluru locations.`,
  },
]

export const metadata = {
  title: "About Us",
  description: "35 years of experience in event infrastructure rental. Learn about BMS Tent House, our proprietors, and our commitment to quality.",
}

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/backgrounds/contact-floral-dark.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className={styles.heroBgImage}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>About Us</h1>
          <p className={styles.sub}>Event Rentals In Bengaluru</p>
        </div>
        <div className={styles.heroThumb}>
          <Image
            src="/images/backgrounds/about-brand-collage.webp"
            alt="BMS Tent House brand collage — tents, dining, stage and lounge furniture"
            fill
            sizes="(min-width: 768px) 400px, 70vw"
            className={styles.heroThumbImage}
          />
        </div>
      </section>

      <section className={styles.introSection}>
        <p className={styles.introEyebrow}>{business.name}.</p>
        <h2 className={styles.introHeading}>
          We Rent. We Deliver. <span className={styles.introAccent}>We Set Up.</span>
        </h2>
        <div className={styles.introColumns}>
          <p className={styles.introText}>
            {business.name} brings {yearsOfExperience} years of experience to event setups, and has grown into a
            complete event infrastructure and rental solutions partner for weddings, corporate events, exhibitions,
            inaugurations and large-scale gatherings across Bengaluru.
          </p>
          <p className={styles.introText}>
            From tents, canopies and stage structures to furniture, lighting, cooling and catering equipment, we
            bring together everything an event needs — backed by decades of hands-on experience and a promise of
            no compromise in quality.
          </p>
        </div>
        <p className={styles.venuesNote}>
          Our team has supplied rental infrastructure for venues and projects including Mantri, The Leela Palace,
          Greenage and SNN Raj. Mention does not imply an official partnership or endorsement.
        </p>
        <div className={styles.statsRow}>
          <div>
            <p className={styles.statValue}>{yearsOfExperience}</p>
            <p className={styles.statLabel}>Years of Experience</p>
          </div>
          <div>
            <p className={styles.statValue}>{branches.length}</p>
            <p className={styles.statLabel}>Bengaluru Locations</p>
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.splitImageWrap}>
          <Image
            src="/images/about/split-table.jpg"
            alt="Pink and green table setting by BMS Tent House"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className={styles.splitImage}
          />
        </div>
        <div className={styles.splitContent}>
          <h2 className={styles.splitHeading}>
            Whether you&apos;re planning an intimate gathering or a large-scale event, we work from setup through to
            breakdown.
          </h2>
          <Button to="/contact" variant="dark" pill icon="arrow-up-right">
            Plan An Event With Us
          </Button>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className={styles.principlesInner}>
          <div className={styles.principlesIntro}>
            <h2 className={styles.principlesHeading}>Our Four Brand Principles.</h2>
            <p className={styles.principlesLead}>The standard we hold ourselves to for every event we undertake.</p>
            <Button to="/products" variant="outline-light" pill icon="arrow-up-right">
              See Our Rentals
            </Button>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((p) => (
              <div key={p.code} className={styles.principleItem}>
                <p className={styles.principleCode}>{p.code}</p>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className={styles.leadershipInner}>
          <span className={styles.leadershipEyebrow}>Leadership</span>
          <h2 className={styles.leadershipHeading}>Led By People Who Know the Business.</h2>
          <div className={styles.leadershipGrid}>
            {contacts.map((c) => (
              <div key={c.phone} className={styles.leadershipCard}>
                <h3 className={styles.leadershipName}>{c.name}</h3>
                <p className={styles.leadershipRole}>{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

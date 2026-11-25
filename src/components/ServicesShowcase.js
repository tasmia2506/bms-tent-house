import Image from "next/image"
import Link from "next/link"
import { Heart, Briefcase, Camera, PartyPopper, Megaphone, UtensilsCrossed } from "lucide-react"
import { services } from "@/data/services"
import styles from "./ServicesShowcase.module.css"

const featuredSlugs = [
  "corporate-events",
  "private-parties",
  "wedding-events",
  "exhibitions",
  "stage-event-setup",
  "dining-arrangements",
]

const iconFor = {
  "wedding-events": Heart,
  "corporate-events": Briefcase,
  exhibitions: Camera,
  "private-parties": PartyPopper,
  "stage-event-setup": Megaphone,
  "dining-arrangements": UtensilsCrossed,
}

const items = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean)

export default function ServicesShowcase() {
  return (
    <section id="other-services" className={styles.section}>
      <div className={styles.sidePhoto} data-side="left">
        <Image src="/images/backgrounds/services-left.webp" alt="" aria-hidden="true" fill sizes="22vw" className={styles.photoImage} />
      </div>
      <div className={styles.sidePhoto} data-side="right">
        <Image
          src="/images/backgrounds/services-right.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="22vw"
          className={styles.photoImage}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <p className={`script ${styles.eyebrow}`}>Other Services</p>
          <h2 className={styles.heading}>More Than Just Rentals.</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => {
            const Icon = iconFor[item.slug]
            return (
              <Link key={item.slug} href={`/products/${item.categorySlug}`} className={styles.item}>
                <span className={styles.iconCircle}>
                  <Icon size={26} />
                </span>
                <div>
                  <p className={styles.itemTitle}>{item.name}</p>
                  <p className={styles.itemText}>{item.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

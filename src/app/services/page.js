import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import Button from "@/components/ui/Button"
import WhatsAppIcon from "@/components/icons/WhatsAppIcon"
import { primaryWhatsApp, toTelHref, toWhatsAppHref } from "@/lib/business"
import styles from "./page.module.css"

export const metadata = {
  title: "Services",
  description:
    "Event rental services from BMS Tent House — tents and structures for weddings, private celebrations, stage and event setups, and corporate events in Bengaluru.",
}

const serviceCards = [
  {
    tag: "Weddings",
    title: "Wedding Events",
    image: "/images/categories/wedding-events.webp",
    description:
      "Wedding tents, premium seating, stage and dining setups for ceremonies and receptions, sized for everything from intimate functions to large venues.",
    bullets: ["Wedding Tents & Canopies", "Premium Seating & Stage", "Dining Setups For Receptions"],
    cta: "Explore Wedding Rentals",
    href: "/products/tents-canopies",
  },
  {
    tag: "Private Celebrations",
    title: "Birthday & Private Parties",
    image: "/images/categories/private-parties.webp",
    description: "Party furniture, sofas, chairs and tables for birthdays, anniversaries and private gatherings.",
    bullets: ["Party Furniture & Sofas", "Chairs & Tables", "Setup For Private Gatherings"],
    cta: "Explore Party Rentals",
    href: "/products/furniture-rentals",
  },
  {
    tag: "Full-Service Setup",
    title: "Stage & Event Setup",
    image: "/images/categories/stage-event-structures.webp",
    description: "Stages, dance floors, podiums and lighting for ceremonies, inaugurations and large gatherings.",
    bullets: ["Stages & Dance Floors", "Podiums & Lighting", "Support For Large Gatherings"],
    cta: "Explore Stage Rentals",
    href: "/products/stage-event-structures",
  },
  {
    tag: "Corporate",
    title: "Corporate Events",
    image: "/images/categories/sound-lighting-cooling.webp",
    description: "Event tents, seating, tables, lighting and sound equipment for conferences and company functions.",
    bullets: ["Event Tents & Seating", "Tables & Dining Setup", "Lighting & Sound Equipment"],
    cta: "Explore Corporate Rentals",
    href: "/products/sound-lighting-cooling",
  },
]

function ContactStrip() {
  return (
    <section className={styles.contactStrip}>
      <a href={toTelHref(primaryWhatsApp)} className={styles.contactItem}>
        <Phone size={16} />
        Call Us
      </a>
      <a
        href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I'd like to discuss services for my event.")}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactItem}
      >
        <WhatsAppIcon size={16} />
        Chat With Us
      </a>
      <Button to="/contact" variant="dark" pill icon="arrow-up-right">
        Plan Your Event
      </Button>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <p className={`script ${styles.script}`}>Our Event Rental Services</p>
        <h1 className={styles.heading}>From The First Tent To The Final Setup.</h1>
      </section>

      <section className={styles.cardsSection}>
        {serviceCards.map((card, i) => (
          <div key={card.title} className={`${styles.card} ${i % 2 === 1 ? styles.cardReverse : ""}`}>
            <div className={styles.cardImageWrap}>
              <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardTag}>{card.tag}</p>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
              <ul className={styles.cardBullets}>
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link href={card.href} className={styles.cardCta}>
                {card.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}

        <ContactStrip />
      </section>
    </>
  )
}

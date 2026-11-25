"use client"

import { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tent, Armchair, UtensilsCrossed, Mic2, Volume2, ChefHat, Settings2 } from "lucide-react"
import { categories } from "@/data/products"
import Button from "./ui/Button"
import { revealGroup, revealClip } from "@/lib/scrollReveal"
import styles from "./ServicesByCategory.module.css"

const featured = [
  {
    slug: "tents-canopies",
    subtitle: "Wedding tents, outdoor canopies and covered event structures.",
    tags: ["Outdoor", "Wedding"],
    icon: Tent,
  },
  {
    slug: "furniture-rentals",
    subtitle: "Carved puja chairs, banquet seating, Tiffany and Chiavari chairs, sofas and lounge furniture.",
    tags: ["Seating", "Lounge"],
    icon: Armchair,
  },
  {
    slug: "tables-dining-furniture",
    title: "Table & Dining Furniture",
    subtitle: "Round tables, buffet tables, dining tables and seating arrangements.",
    tags: ["Dining", "Seating"],
    icon: UtensilsCrossed,
  },
  {
    slug: "stage-event-structures",
    subtitle: "Stage platforms, trussing and event structures.",
    tags: ["Staging", "Structures"],
    icon: Mic2,
  },
  {
    slug: "sound-lighting-cooling",
    title: "Sound, Lighting & Cooling",
    subtitle: "Professional speakers, lighting equipment, air coolers and fans.",
    tags: ["Sound", "Lighting"],
    icon: Volume2,
  },
  {
    slug: "catering-service-equipment",
    title: "Catering & Service Equipment",
    subtitle: "Brass pooja thalis, catering vessels and dining support equipment.",
    tags: ["Catering", "Serving"],
    icon: ChefHat,
  },
  {
    slug: "event-management-equipment",
    title: "Event Equipment & Setups",
    subtitle: "Event setup equipment and supporting rental arrangements.",
    tags: ["Setup", "Support"],
    icon: Settings2,
  },
]

const tiles = featured
  .map(({ slug, title, subtitle, tags, icon }) => {
    const category = categories.find((c) => c.slug === slug)
    return category ? { ...category, title: title ?? category.name, subtitle, tags, icon } : null
  })
  .filter(Boolean)

export default function ServicesByCategory() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const cleanups = [
      revealGroup(root.querySelector(`.${styles.headerRow}`), [
        root.querySelector(`.${styles.eyebrow}`),
        root.querySelector(`.${styles.heading}`),
        root.querySelector(`.${styles.lead}`),
      ]),
      revealGroup(root.querySelector(`.${styles.grid}`), root.querySelectorAll(`.${styles.tile}`), {
        y: 36,
        stagger: 0.1,
      }),
      ...Array.from(root.querySelectorAll(`.${styles.tileImageWrap}`)).map((el) => revealClip(el, el)),
    ]

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      <div className={styles.headerRow}>
        <div>
          <p className={`script ${styles.eyebrow}`}>Our Rental Collection</p>
          <h2 className={styles.heading}>Every Detail. Ready For Your Event.</h2>
          <p className={styles.lead}>
            Explore our range of event essentials, carefully arranged to help create memorable celebrations and
            professional gatherings.
          </p>
        </div>
        <Button to="/products" variant="lemon" pill icon="arrow-up-right">
          View All Categories
        </Button>
      </div>

      <div className={styles.grid}>
        {tiles.map((category) => (
          <div key={category.slug} className={styles.tile}>
            <Link
              href={`/products/${category.slug}`}
              className={styles.tileOverlayLink}
              aria-label={`Explore ${category.title}`}
            />
            <div className={styles.tileImageWrap}>
              <div className={styles.tileImageInner}>
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className={styles.tileImage}
                />
              </div>
              <span className={styles.tileYearBadge}>{category.code}</span>
              <span className={styles.tileIconBadge}>
                <category.icon size={16} />
              </span>
            </div>
            <p className={styles.tileName}>{category.title}</p>
            <p className={styles.tileSubtitle}>{category.subtitle}</p>
            <div className={styles.tileTags}>
              {category.tags.map((tag) => (
                <span key={tag} className={styles.tileTag}>
                  {tag}
                </span>
              ))}
            </div>
            <Button
              to={`/products/${category.slug}`}
              variant="lemon"
              size="compact"
              pill
              icon="arrow-up-right"
              className={styles.tileExploreBtn}
            >
              Explore
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

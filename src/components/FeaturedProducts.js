"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { categories } from "@/data/products"
import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import Button from "./ui/Button"
import styles from "./FeaturedProducts.module.css"

const allProducts = categories.flatMap((category) =>
  category.products.map((product) => ({
    name: product.name,
    image: product.image,
    category: category.name,
    categorySlug: category.slug,
  })),
)

export default function FeaturedProducts() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector("[data-card]")
    const amount = card ? card.getBoundingClientRect().width + 16 : 240
    track.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div className={styles.textCol}>
            <p className={`script ${styles.eyebrow}`}>The Rental Edit</p>
            <h2 className={styles.heading}>A Curated Collection of Event Essentials.</h2>
            <p className={styles.lead}>Premium tents, furniture and event equipment for every occasion.</p>
          </div>
          <Button to="/products/all" variant="lemon" pill icon="arrow-up-right" className={styles.viewAllLink}>
            View All Rentals
          </Button>
        </div>

        <div className={styles.carouselWrap}>
          <button
            type="button"
            aria-label="Scroll previous"
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Scroll next"
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight size={20} />
          </button>

          <div className={styles.grid} ref={trackRef}>
            {allProducts.map((item, index) => (
              <div key={`${item.name}-${index}`} data-card className={styles.card}>
                <div className={styles.imageBlock}>
                  <Link href={`/products/${item.categorySlug}`} className={styles.imageWrap}>
                    <Image src={item.image} alt={item.name} fill sizes="320px" className={styles.image} />
                  </Link>
                  <span className={styles.wishlist} aria-hidden="true">
                    <Heart size={14} />
                  </span>
                  <span className={styles.ribbon}>{item.category}</span>
                </div>

                <div className={styles.infoRow}>
                  <p className={styles.name}>{item.name}</p>
                  <a
                    href={toWhatsAppHref(primaryWhatsApp, `Hello BMS Tent House, I'd like to enquire about ${item.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${item.name} on WhatsApp`}
                    className={styles.ctaLink}
                  >
                    Check Availability
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

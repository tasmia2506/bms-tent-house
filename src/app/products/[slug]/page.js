import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import Button from "@/components/ui/Button"
import { categories, getCategory } from "@/data/products"
import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import styles from "./page.module.css"

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: category.name,
    description: `${category.description} Enquire or request a quote from BMS Tent House, Bengaluru.`,
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  return (
    <>
      <section className={styles.hero}>
        <Image src={category.heroImage} alt={category.name} fill sizes="100vw" priority className={styles.heroImage} />
        <div className={styles.overlay} />
        <div className={styles.heroInner}>
          <Link href="/products" className={styles.backLink}>
            <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} />
            All Products &amp; Services
          </Link>
          <h1 className={styles.heading}>{category.name}</h1>
          <p className={styles.description}>{category.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            {category.products.map((product) => (
              <ProductCard key={product.name} product={product} categoryName={category.name} />
            ))}
          </div>

          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              Don&apos;t see exactly what you need? Tell us about your event and we&apos;ll help you put the right
              setup together.
            </p>
            <div className={styles.ctaActions}>
              <Button
                href={toWhatsAppHref(primaryWhatsApp, `Hello BMS Tent House, I'd like to enquire about ${category.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                icon="whatsapp"
              >
                Enquire on WhatsApp
              </Button>
              <Button to="/contact" variant="outline-light">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

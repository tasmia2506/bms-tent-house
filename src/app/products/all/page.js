import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { categories } from "@/data/products"
import styles from "./page.module.css"

export const metadata = {
  title: "All Products",
  description:
    "Every tent, furniture, dining, stage, sound, lighting, cooling and catering product available to rent from BMS Tent House, Bengaluru.",
}

const allProducts = categories.flatMap((category) =>
  category.products.map((product) => ({ product, categorySlug: category.slug, categoryName: category.name })),
)

export default function AllProducts() {
  return (
    <>
      <section className={styles.hero}>
        <Link href="/products" className={styles.backLink}>
          <ArrowRight size={14} style={{ transform: "rotate(180deg)" }} />
          All Categories
        </Link>
        <p className={`script ${styles.script}`}>Find What You Need</p>
        <h1 className={styles.heading}>Everything Your Event Needs.</h1>
        <p className={styles.description}>
          The complete BMS Tent House catalogue in one place — {allProducts.length} products across {categories.length}{" "}
          categories.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            {allProducts.map(({ product, categorySlug, categoryName }) => (
              <ProductCard key={`${categorySlug}-${product.name}`} product={product} categoryName={categoryName} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

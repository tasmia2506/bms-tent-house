import ProductCategoryCard from "@/components/ProductCategoryCard"
import { categories } from "@/data/products"
import styles from "./page.module.css"

export const metadata = {
  title: "Products & Services",
  description:
    "Tents, furniture, tables, stages, lighting, cooling and catering equipment for rent in Bengaluru — explore the complete BMS Tent House collection.",
}

export default function Products() {
  return (
    <>
      <section className={styles.hero}>
        <p className={`script ${styles.script}`}>Find What You Need</p>
        <h1 className={styles.heading}>Everything Your Event Needs.</h1>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {categories.map((c) => (
            <ProductCategoryCard key={c.slug} category={c} />
          ))}
        </div>
        <p className={styles.note}>
          Product availability may vary by branch and event date. Please confirm exact specifications and
          availability with our team before finalising your order.
        </p>
      </section>
    </>
  )
}

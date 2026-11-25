import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import styles from "./ProductCard.module.css"

export default function ProductCard({ product, categoryName }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.imageInner}>
          {product.external ? (
            // eslint-disable-next-line @next/next/no-img-element -- unconfigured remote (Unsplash) placeholder
            <img src={product.image} alt={product.name} loading="lazy" className={styles.image} />
          ) : (
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className={styles.image} />
          )}
        </div>
        {product.representative && <span className={styles.badge}>Representative image</span>}
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{categoryName}</p>
        <h4 className={styles.name}>{product.name}</h4>
        <a
          href={toWhatsAppHref(
            primaryWhatsApp,
            `Hello BMS Tent House, I'd like to enquire about "${product.name}" (${categoryName}).`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.action}
        >
          Request Quote
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  )
}

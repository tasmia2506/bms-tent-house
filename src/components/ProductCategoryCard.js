import Link from "next/link"
import Image from "next/image"
import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import Button from "./ui/Button"
import Pill from "./ui/Pill"
import styles from "./ProductCategoryCard.module.css"

export default function ProductCategoryCard({ category }) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${category.slug}`} className={styles.imageWrap}>
        <Image src={category.heroImage} alt={category.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className={styles.image} />
        <Pill solid className={styles.code}>
          {category.code}
        </Pill>
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>{category.name}</h3>
        <p className={styles.description}>{category.description}</p>
        <div className={styles.actions}>
          <Button to={`/products/${category.slug}`} variant="ghost" icon="arrow-right" size="link">
            Explore Category
          </Button>
          <Button
            href={toWhatsAppHref(primaryWhatsApp, `Hello BMS Tent House, I'd like to enquire about ${category.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="compact"
            icon="whatsapp"
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  )
}

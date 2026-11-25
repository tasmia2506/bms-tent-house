import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import Button from "./ui/Button"
import styles from "./GalleryTeaser.module.css"

const preview = [galleryItems[16], galleryItems[9], galleryItems[0], galleryItems[1]].filter(Boolean)

export default function GalleryTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <p className={`script ${styles.eyebrow}`}>Our Work</p>
          <h2 className={styles.heading}>Events We&apos;ve Brought to Life.</h2>
        </div>
        <Button to="/our-work" variant="ghost" icon="arrow-up-right" size="link">
          View Gallery
        </Button>
      </div>

      <div className={styles.grid}>
        {preview.map((item) => (
          <div key={item.image + item.caption} className={styles.imageWrap}>
            <Image src={item.image} alt={item.caption} fill sizes="(min-width: 1024px) 25vw, 50vw" className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  )
}

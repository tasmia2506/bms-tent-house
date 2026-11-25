import MasonryGallery from "@/components/MasonryGallery"
import styles from "./page.module.css"

export const metadata = {
  title: "Our Work",
  description: "A gallery of tent installations, furniture, tables and stage setups from BMS Tent House, Bengaluru.",
}

export default function Work() {
  return (
    <>
      <section className={styles.hero}>
        <p className={`script ${styles.script}`}>Our Work</p>
        <h1 className={styles.heading}>Spaces Made for Celebrations.</h1>
        <p className={styles.sub}>Tent installations, furniture, tables and stage setups from our rental collection.</p>
      </section>

      <section className={styles.section}>
        <MasonryGallery />
      </section>
    </>
  )
}

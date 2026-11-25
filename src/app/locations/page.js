import LocationCard from "@/components/LocationCard"
import { branches } from "@/lib/business"
import styles from "./page.module.css"

export const metadata = {
  title: "Our Locations",
  description: "BMS Tent House branches across Bengaluru — Bommanahalli, Electronic City, Neeladri Road and Bellandur Road.",
}

export default function Locations() {
  return (
    <>
      <section className={styles.hero}>
        <p className={`script ${styles.script}`}>Find Us</p>
        <h1 className={styles.heading}>Serving Events Across Bengaluru.</h1>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {branches.map((b) => (
            <LocationCard key={b.id} branch={b} />
          ))}
        </div>
        <p className={styles.note}>
          Not every product is stocked at every branch. Please call ahead to confirm availability at your nearest
          location.
        </p>
      </section>
    </>
  )
}

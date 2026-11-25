import { yearsOfExperience, branches } from "@/lib/business"
import styles from "./ExperienceStrip.module.css"

const stats = [
  { value: `${yearsOfExperience}+`, label: "Years of Experience" },
  { value: `${branches.length}`, label: "Locations in Bengaluru" },
  { value: "Bengaluru", label: "Our Service Area" },
]

// Duplicated so the track can loop seamlessly from 0 to -50%.
const loopStats = [...stats, ...stats]

export default function ExperienceStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <div className={styles.track}>
          {loopStats.map((stat, i) => (
            <div key={`${stat.label}-${i}`} className={styles.stat} aria-hidden={i >= stats.length}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

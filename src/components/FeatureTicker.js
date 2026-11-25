import { Clock, IndianRupee, Sparkles, MapPin, BadgeCheck } from "lucide-react"
import styles from "./FeatureTicker.module.css"

const features = [
  { icon: BadgeCheck, label: "35+ Years", text: "Trusted event rental experience" },
  { icon: Clock, label: "Quick Response", text: "WhatsApp enquiries answered fast" },
  { icon: IndianRupee, label: "Transparent Pricing", text: "Clear quotes, no hidden costs" },
  { icon: Sparkles, label: "Premium Equipment", text: "Clean, inspected & event-ready" },
  { icon: MapPin, label: "4 Locations", text: "Serving all of Bengaluru" },
]

// Duplicated so the track can loop seamlessly from 0 to -50%.
const loopFeatures = [...features, ...features]

export default function FeatureTicker() {
  return (
    <section className={styles.section} aria-label="Why choose BMS Tent House">
      <div className={styles.track}>
        {loopFeatures.map((item, i) => (
          <span key={`${item.label}-${i}`} className={styles.item} aria-hidden={i >= features.length}>
            <item.icon size={16} className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
            <span className={styles.text}>— {item.text}</span>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}

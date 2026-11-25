import { MapPin } from "lucide-react"
import { toMapsHref, toTelHref } from "@/lib/business"
import Button from "./ui/Button"
import Pill from "./ui/Pill"
import styles from "./LocationCard.module.css"

export default function LocationCard({ branch }) {
  return (
    <div className={styles.card}>
      {branch.isHeadOffice && (
        <Pill solid icon={<MapPin size={13} />} className={styles.badge}>
          Head Office
        </Pill>
      )}
      <h3 className={styles.name}>{branch.name}</h3>
      <p className={styles.address}>
        {branch.address}
        {!branch.addressVerified && (
          <span className={styles.note}>Exact address to be confirmed — please call ahead for directions.</span>
        )}
      </p>
      <div className={styles.actions}>
        <Button href={toTelHref(branch.phone)} variant="outline" size="compact">
          {branch.phone}
        </Button>
        <Button href={toMapsHref(branch.mapsQuery)} target="_blank" rel="noopener noreferrer" variant="dark" size="compact" icon="arrow-up-right">
          Get Directions
        </Button>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Phone, ArrowUpRight } from "lucide-react"
import { primaryWhatsApp, toTelHref, toWhatsAppHref } from "@/lib/business"
import WhatsAppIcon from "./icons/WhatsAppIcon"
import styles from "./StickyMobileCta.module.css"

export default function StickyMobileCta() {
  return (
    <div className={styles.bar}>
      <a href={toTelHref(primaryWhatsApp)} className={styles.item}>
        <Phone size={16} />
        <span className={styles.label}>Call</span>
      </a>
      <a
        href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I would like to enquire about your rental products.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.item} ${styles.itemMid}`}
      >
        <WhatsAppIcon size={16} />
        <span className={styles.label}>WhatsApp</span>
      </a>
      <Link href="/contact" className={`${styles.item} ${styles.itemDark}`}>
        <ArrowUpRight size={16} />
        <span className={styles.label}>Get a Quote</span>
      </Link>
    </div>
  )
}

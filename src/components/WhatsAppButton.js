import { primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import WhatsAppIcon from "./icons/WhatsAppIcon"
import styles from "./WhatsAppButton.module.css"

export default function WhatsAppButton({
  message = "Hello BMS Tent House, I would like to enquire about your rental products.",
}) {
  return (
    <a
      href={toWhatsAppHref(primaryWhatsApp, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={styles.button}
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}

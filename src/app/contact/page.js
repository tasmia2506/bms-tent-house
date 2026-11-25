import { Phone, MapPin, Mail, Check } from "lucide-react"
import EnquiryForm from "@/components/EnquiryForm"
import Button from "@/components/ui/Button"
import CopyButton from "@/components/CopyButton"
import {
  branches,
  business,
  contacts,
  primaryWhatsApp,
  toMapsHref,
  toTelHref,
  toWhatsAppHref,
  yearsOfExperience,
} from "@/lib/business"
import styles from "./page.module.css"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BMS Tent House for event rental enquiries, quotes and catalogue requests in Bengaluru.",
}

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function Contact() {
  const headOffice = branches[0]

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInfo}>
          <p className={`script ${styles.eyebrow}`}>Contact Us</p>
          <h1 className={styles.heroHeading}>
            Let&apos;s Make Your Event <span className={styles.heroHighlight}>Memorable.</span>
          </h1>
          <p className={styles.heroLead}>
            Every event starts with a conversation. Tell us what you&apos;re planning, and our team will help bring
            it to life.
          </p>

          <div className={styles.badgeRow}>
            <span className={`${styles.badge} ${styles.badgeLemon}`}>
              <Check size={13} />
              {yearsOfExperience}+ Years of Experience
            </span>
            <span className={`${styles.badge} ${styles.badgeLemon}`}>
              <Check size={13} />
              {branches.length} Locations in Bengaluru
            </span>
          </div>

          <div className={styles.personGrid}>
            {contacts.map((c) => (
              <a
                key={c.phone}
                href={toTelHref(c.phone)}
                className={`${styles.personCard} ${styles.personLemon}`}
              >
                <span className={styles.personAvatar} aria-hidden="true">
                  {initials(c.name)}
                </span>
                <div>
                  <p className={styles.personName}>{c.name}</p>
                  <p className={styles.personRole}>
                    {c.role} &middot; {c.phone}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.heroFormCard}>
          <h2 className={styles.formHeading}>Send Us A Message</h2>
          <div className={styles.formDivider} aria-hidden="true">
            <span>✦</span>
          </div>
          <p className={styles.formLead}>
            Fill in your details below and our team will connect with you right away.
          </p>
          <div className={styles.formWrap}>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className={styles.infoCards}>
        <div className={styles.infoCard}>
          <span className={`${styles.infoIcon} ${styles.infoIconMagenta}`}>
            <Phone size={22} />
          </span>
          <h3 className={styles.infoTitle}>Direct Contact Hotline</h3>
          <p className={styles.infoText}>
            Call or WhatsApp our team directly for instant pricing, availability and event planning support.
          </p>
          <p className={styles.infoPhone}>
            <a href={toTelHref(contacts[0].phone)}>+91 {contacts[0].phone}</a>
            <span className={styles.infoPhoneTag}>Primary</span>
          </p>
          <Button
            href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I would like to enquire about your rental products.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            pill
            icon="whatsapp"
            className={styles.infoButton}
          >
            Chat on WhatsApp
          </Button>
        </div>

        <div className={styles.infoCard}>
          <span className={`${styles.infoIcon} ${styles.infoIconLemon}`}>
            <MapPin size={22} />
          </span>
          <h3 className={styles.infoTitle}>Service Area &amp; Locations</h3>
          <p className={styles.infoText}>
            We serve events across Bengaluru from {branches.length} rental locations.
          </p>
          <ul className={styles.branchMini}>
            {branches.map((b) => (
              <li key={b.id}>{b.name}</li>
            ))}
          </ul>
          <Button
            href={toMapsHref(headOffice.mapsQuery)}
            target="_blank"
            rel="noopener noreferrer"
            variant="lemon"
            pill
            icon="arrow-up-right"
            className={styles.infoButton}
          >
            View on Google Maps
          </Button>
        </div>

        <div className={styles.infoCard}>
          <span className={`${styles.infoIcon} ${styles.infoIconMagenta}`}>
            <Mail size={22} />
          </span>
          <h3 className={styles.infoTitle}>Email &amp; Enquiries</h3>
          <p className={styles.infoText}>
            For bulk orders, vendor tie-ups or detailed requirements, email our team directly.
          </p>
          <div className={styles.infoCopyWrap}>
            <CopyButton value={business.email} />
          </div>
          <Button href={`mailto:${business.email}`} variant="dark" pill icon="arrow-up-right" className={styles.infoButton}>
            Send an Email
          </Button>
        </div>
      </section>

      <section className={styles.mapSection}>
        <p className={styles.mapEyebrow}>Find Us Here</p>
        <h2 className={styles.mapHeading}>Our Bengaluru Locations.</h2>

        <div className={styles.mapFrameWrap}>
          <div className={styles.mapOverlay}>
            <p className={styles.mapOverlayLabel}>Our Location</p>
            <h3 className={styles.mapOverlayName}>{headOffice.name}</h3>
            <p className={styles.mapOverlayAddress}>{headOffice.address}</p>
            <Button
              href={toMapsHref(headOffice.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              variant="lemon"
              pill
              icon="arrow-up-right"
            >
              View on Google Maps
            </Button>
          </div>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(headOffice.mapsQuery)}&output=embed`}
            title={`Map for ${headOffice.name}`}
            loading="lazy"
            className={styles.mapFrame}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.otherBranches}>
          {branches.slice(1).map((b) => (
            <a
              key={b.id}
              href={toMapsHref(b.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.otherBranchRow}
            >
              <span>{b.name}</span>
              <span className={styles.otherBranchArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

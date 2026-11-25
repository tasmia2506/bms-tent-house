import Link from "next/link"
import { business, branches, primaryContact, primaryWhatsApp, toTelHref, toWhatsAppHref, yearsOfExperience } from "@/lib/business"
import { categories } from "@/data/products"
import CopyrightYear from "./CopyrightYear"
import styles from "./Footer.module.css"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Rentals" },
  { to: "/our-work", label: "Gallery" },
  { to: "/#reviews", label: "Reviews" },
  { to: "/#faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
]

const headOffice = branches[0]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <p className={styles.brandName}>{business.name}</p>
          <p className={styles.brandTagline}>{business.tagline}</p>
          <p className={styles.brandMeta}>
            Event Infrastructure &amp; Rentals
            <br />
            Bengaluru, Karnataka
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Navigation</p>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Rental Categories</p>
          {categories.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`}>
              {c.name}
            </Link>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Business Information</p>
          <p className={styles.infoLine}>
            <span className={styles.infoLabel}>Legal Entity:</span> {business.legalUnit}
          </p>
          <p className={styles.infoLine}>
            <span className={styles.infoLabel}>Head Office:</span> {headOffice.address}
          </p>
          <p className={styles.infoLine}>
            <span className={styles.infoLabel}>Experience:</span> {yearsOfExperience} Years
          </p>
        </div>
      </div>

      <div className={styles.contactRow}>
        <a href={toTelHref(primaryContact.phone)}>Call Us</a>
        <span aria-hidden="true">&middot;</span>
        <a
          href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I would like to enquire about your rental products.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
      </div>

      <div className={styles.legalRow}>
        <p>
          © <CopyrightYear /> {business.name}. All rights reserved.
          <Link href="/terms" className={styles.legalInlineLink}>
            Terms &amp; Conditions
          </Link>
        </p>
        <div className={styles.legalLinks}>
          <Link href="/locations">Our Locations</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <div className={styles.creditRow}>
        <a href="https://naazailabs.com" target="_blank" rel="noopener noreferrer">
          Designed &amp; developed by <span className={styles.creditBrand}>naazailabs.com</span>
        </a>
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { business, primaryWhatsApp, toWhatsAppHref } from "@/lib/business"
import { categories } from "@/data/products"
import Button from "../ui/Button"
import styles from "./MobileMenu.module.css"

export default function MobileMenu({ open, onClose, servicesMenu }) {
  const [expanded, setExpanded] = useState(null) // "services" | "rentals" | null
  const panelRef = useRef(null)
  const linksRef = useRef([])
  const servicesPanelRef = useRef(null)
  const rentalsPanelRef = useRef(null)

  useEffect(() => {
    if (!panelRef.current) return

    if (open) {
      document.body.style.overflow = "hidden"
      gsap.set(panelRef.current, { visibility: "visible" })
      const tl = gsap.timeline()
      tl.fromTo(panelRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power1.out" })
      tl.fromTo(
        linksRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power3.out" },
        "-=0.1",
      )
    } else {
      document.body.style.overflow = ""
      gsap.to(panelRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(panelRef.current, { visibility: "hidden" })
          setExpanded(null)
        },
      })
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const toggleExpand = (key, ref) => {
    const next = expanded === key ? null : key
    setExpanded(next)
    if (ref.current) {
      gsap.to(ref.current, {
        height: next === key && key ? ref.current.scrollHeight : 0,
        duration: 0.35,
        ease: "power2.inOut",
      })
    }
  }

  const addLinkRef = (el) => {
    if (el && !linksRef.current.includes(el)) linksRef.current.push(el)
  }

  return (
    <div ref={panelRef} className={styles.panel}>
      <div className={styles.topRow}>
        <span className={styles.brand}>{business.name}</span>
        <button type="button" aria-label="Close menu" onClick={onClose} className={styles.closeButton}>
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </button>
      </div>

      <div className={styles.links}>
        <div ref={addLinkRef} className={styles.linkRow}>
          <Link href="/" onClick={onClose} className={styles.topLink}>
            Home
          </Link>
        </div>

        <div ref={addLinkRef} className={styles.linkRow}>
          <button type="button" className={styles.expandRow} onClick={() => toggleExpand("services", servicesPanelRef)}>
            <span className={styles.topLink}>Services</span>
            <ChevronDown size={20} className={`${styles.chevron} ${expanded === "services" ? styles.chevronOpen : ""}`} />
          </button>
          <div ref={servicesPanelRef} className={styles.subPanel}>
            {servicesMenu.map((col) => (
              <div key={col.code}>
                <p className={styles.subGroupTitle}>
                  {col.code} — {col.title}
                </p>
                <div className={styles.subList}>
                  {col.items.map((item) => {
                    const label = typeof item === "string" ? item : item.label
                    const slug = typeof item === "string" ? col.categorySlug : item.categorySlug
                    return (
                      <Link key={label} href={slug ? `/products/${slug}` : "/products"} onClick={onClose} className={styles.subLink}>
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={addLinkRef} className={styles.linkRow}>
          <button type="button" className={styles.expandRow} onClick={() => toggleExpand("rentals", rentalsPanelRef)}>
            <span className={styles.topLink}>Rental Collection</span>
            <ChevronDown size={20} className={`${styles.chevron} ${expanded === "rentals" ? styles.chevronOpen : ""}`} />
          </button>
          <div ref={rentalsPanelRef} className={styles.subPanel}>
            <div className={styles.subList}>
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/products/${cat.slug}`} onClick={onClose} className={styles.subLink}>
                  {cat.code} — {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {[
          { href: "/about", label: "About" },
          { href: "/our-work", label: "Gallery" },
          { href: "/contact", label: "Contact" },
        ].map((link) => (
          <div key={link.label} ref={addLinkRef} className={styles.linkRow}>
            <Link href={link.href} onClick={onClose} className={styles.topLink}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>

      <div ref={addLinkRef} className={styles.bottomRow}>
        <Button
          href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I would like to enquire about your rental products.")}
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
          icon="whatsapp"
          className={styles.whatsappCta}
        >
          Enquire on WhatsApp
        </Button>
        <a href={`tel:+91${primaryWhatsApp}`} className={styles.phone}>
          {primaryWhatsApp}
        </a>
      </div>
    </div>
  )
}

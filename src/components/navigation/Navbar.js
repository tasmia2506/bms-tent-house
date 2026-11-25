"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { Phone, LayoutGrid, ArrowUpRight } from "lucide-react"
import { business, primaryContact, primaryWhatsApp, toTelHref, toWhatsAppHref } from "@/lib/business"
import { categories } from "@/data/products"
import { servicesMenu } from "@/data/serviceMenu"
import Button from "../ui/Button"
import MobileMenu from "./MobileMenu"
import styles from "./Navbar.module.css"

const rentalGroups = [
  {
    title: "Structures & Furniture",
    slugs: ["tents-canopies", "furniture-rentals", "tables-dining-furniture", "stage-event-structures"],
  },
  {
    title: "Technical & Support",
    slugs: ["sound-lighting-cooling", "catering-service-equipment", "event-management-equipment"],
  },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null) // "services" | "rentals" | null
  const [mobileOpen, setMobileOpen] = useState(false)

  const headerRef = useRef(null)
  const megaRef = useRef(null)
  const rentalRef = useRef(null)
  const closeTimeout = useRef(null)

  // One-time header reveal on mount.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.fromTo(
      headerRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 },
    )
  }, [])

  const animatePanel = (ref, show) => {
    if (!ref.current) return
    gsap.killTweensOf(ref.current)
    if (show) {
      gsap.set(ref.current, { visibility: "visible", pointerEvents: "auto" })
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      )
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(ref.current, { visibility: "hidden", pointerEvents: "none" }),
      })
    }
  }

  const handleEnter = (menu, ref) => {
    window.clearTimeout(closeTimeout.current)
    setOpenMenu(menu)
    animatePanel(ref, true)
  }

  const handleLeave = (menu, ref) => {
    closeTimeout.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current))
      animatePanel(ref, false)
    }, 120)
  }

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo/bms-logo.webp" alt="" width={40} height={40} className={styles.logoMark} />
            <span className={styles.logoRule} aria-hidden="true" />
            <span className={styles.logoText}>
              <span className={styles.logoMain}>{business.name.split(" ")[0]}</span>
              <span className={styles.logoSub}>Tent House</span>
            </span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
              Home
            </Link>

            <div
              className={styles.navItem}
              onMouseEnter={() => handleEnter("services", megaRef)}
              onMouseLeave={() => handleLeave("services", megaRef)}
            >
              <Link href="/services" className={styles.link}>
                Services
              </Link>
            </div>

            <div
              className={styles.navItem}
              onMouseEnter={() => handleEnter("rentals", rentalRef)}
              onMouseLeave={() => handleLeave("rentals", rentalRef)}
            >
              <button type="button" className={styles.link}>
                Rental Collection
              </button>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <a href={toTelHref(primaryContact.phone)} className={styles.phoneLink}>
              <Phone size={15} />
              +91 {primaryContact.phone}
            </a>
            <Button to="/contact" variant="dark" size="compact" pill icon="arrow-up-right">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>

        {/* Services mega menu */}
        <div
          ref={megaRef}
          className={styles.panel}
          onMouseEnter={() => handleEnter("services", megaRef)}
          onMouseLeave={() => handleLeave("services", megaRef)}
        >
          <div className={styles.panelInner}>
            <div className={styles.megaGrid}>
              {servicesMenu.map((col) => (
                <div key={col.code} className={styles.megaColumn}>
                  <div className={styles.megaColumnTitle}>
                    <span className={styles.megaColumnTitleLabel}>
                      <col.icon size={15} />
                      <span>{col.title}</span>
                    </span>
                    <Link href="/products/all" className={styles.exploreAll}>
                      Explore All
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <div className={styles.megaThumbList}>
                    {col.items.map((item) => (
                      <Link key={item.label} href={`/products/${item.categorySlug}`} className={styles.megaThumbItem}>
                        <span className={styles.megaThumbIcon}>
                          <item.icon size={18} />
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.megaBanner}>
            <span>Not sure what you need? Chat with our team for quick recommendations.</span>
            <Button
              href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I'd like help choosing services for my event.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="lemon"
              size="compact"
              pill
              icon="whatsapp"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Rental Collection dropdown */}
        <div
          ref={rentalRef}
          className={styles.panel}
          onMouseEnter={() => handleEnter("rentals", rentalRef)}
          onMouseLeave={() => handleLeave("rentals", rentalRef)}
        >
          <div className={styles.panelInner}>
            <div className={styles.rentalSections}>
              {rentalGroups.map((group) => {
                const groupCategories = group.slugs.map((slug) => categories.find((cat) => cat.slug === slug)).filter(Boolean)
                return (
                  <div key={group.title} className={styles.rentalSection}>
                    <div className={styles.megaColumnTitle}>
                      <span className={styles.megaColumnTitleLabel}>
                        <LayoutGrid size={15} />
                        <span>{group.title}</span>
                      </span>
                      <Link href="/products/all" className={styles.exploreAll}>
                        Explore All
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                    <div className={styles.rentalProductGrid}>
                      {groupCategories.flatMap((cat) =>
                        cat.products.map((product) => (
                          <Link
                            key={`${cat.slug}-${product.name}`}
                            href={`/products/${cat.slug}`}
                            className={styles.rentalProductLink}
                          >
                            <span className={styles.rentalProductThumb}>
                              {product.external ? (
                                // eslint-disable-next-line @next/next/no-img-element -- unconfigured remote (Unsplash) placeholder
                                <img src={product.image} alt="" loading="lazy" />
                              ) : (
                                <Image src={product.image} alt="" fill sizes="32px" />
                              )}
                            </span>
                            {product.name}
                          </Link>
                        )),
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.megaBanner}>
            <span>Need bulk pricing or a custom package? Our team can put one together for you.</span>
            <Button
              href={toWhatsAppHref(primaryWhatsApp, "Hello BMS Tent House, I'd like a custom rental package for my event.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="lemon"
              size="compact"
              pill
              icon="whatsapp"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} servicesMenu={servicesMenu} />
    </>
  )
}

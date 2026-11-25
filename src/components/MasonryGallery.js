"use client"

import { useState } from "react"
import { galleryFilters, galleryItems } from "@/data/gallery"
import TagButton from "./ui/TagButton"
import styles from "./MasonryGallery.module.css"

export default function MasonryGallery() {
  const [active, setActive] = useState("All")
  const items = active === "All" ? galleryItems : galleryItems.filter((i) => i.filter === active)

  return (
    <div>
      <div className={styles.filters}>
        {["All", ...galleryFilters].map((f) => (
          <TagButton key={f} active={active === f} onClick={() => setActive(f)}>
            {f}
          </TagButton>
        ))}
      </div>

      <div className={styles.columns}>
        {items.map((item) => (
          <figure key={item.image + item.caption} className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element -- natural masonry sizing */}
            <img src={item.image} alt={item.caption} loading="lazy" />
            <figcaption className={styles.caption}>
              {item.caption}
              {item.representative && <span className={styles.representativeNote}>(representative image)</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

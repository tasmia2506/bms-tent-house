"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import styles from "./CopyButton.module.css"

export default function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable in this browser/context — ignore.
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={styles.box} aria-label={`Copy ${value}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.icon}>{copied ? <Check size={15} /> : <Copy size={15} />}</span>
    </button>
  )
}

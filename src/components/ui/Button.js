import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import WhatsAppIcon from "../icons/WhatsAppIcon"
import styles from "./Button.module.css"

const variantClass = {
  solid: styles.solid,
  dark: styles.dark,
  outline: styles.outline,
  "outline-light": styles.outlineLight,
  "outline-dark": styles.outlineDark,
  ghost: styles.ghost,
  "ghost-light": styles.ghostLight,
  lemon: styles.lemon,
}

const sizeClass = {
  button: styles.sizeButton,
  compact: styles.sizeCompact,
  link: styles.sizeLink,
}

function renderIcon(icon) {
  if (icon === "arrow-up-right") return <ArrowUpRight size={14} />
  if (icon === "arrow-right") return <ArrowRight size={14} />
  if (icon === "whatsapp") return <WhatsAppIcon size={16} />
  return null
}

export default function Button({
  variant = "solid",
  icon = "none",
  size = "button",
  pill = false,
  to,
  href,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    styles.base,
    pill ? styles.pill : size === "link" ? "" : styles.rect,
    variantClass[variant],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <>
      {icon === "whatsapp" && <span className={styles.whatsappChip}>{renderIcon("whatsapp")}</span>}
      <span>{children}</span>
      {(icon === "arrow-up-right" || icon === "arrow-right") && renderIcon(icon)}
    </>
  )

  if (to) {
    return (
      <Link href={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={rest.type ?? "button"} className={classes} {...rest}>
      {content}
    </button>
  )
}

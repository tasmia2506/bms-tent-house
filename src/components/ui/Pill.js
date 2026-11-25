import styles from "./Pill.module.css"

export default function Pill({ icon, solid, light, solidLight, className = "", children }) {
  const palette = solidLight ? styles.solidLight : solid ? styles.solid : light ? styles.light : styles.outline
  return (
    <span className={`${styles.pill} ${palette} ${className}`}>
      {icon}
      {children}
    </span>
  )
}

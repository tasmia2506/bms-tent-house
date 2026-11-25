import styles from "./TagButton.module.css"

export default function TagButton({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={`${styles.tag} ${active ? styles.active : ""}`}>
      {children}
    </button>
  )
}

import styles from "./ClientsStrip.module.css"

const venues = ["Mantri", "The Leela Palace", "Greenage", "SNN Raj"]

export default function ClientsStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Trust Built Through Experience</span>
        <h2 className={styles.heading}>Venues &amp; Projects We Have Worked With.</h2>
        <div className={styles.names}>
          {venues.map((name) => (
            <span key={name} className={styles.name}>
              {name}
            </span>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Named as venues and projects our team has supplied rental infrastructure for. Mention does not imply an
          official partnership or endorsement.
        </p>
      </div>
    </section>
  )
}

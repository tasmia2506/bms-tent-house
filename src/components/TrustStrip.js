import styles from "./TrustStrip.module.css"

const clients = ["Mantri", "Leela Palace", "Greenage", "SNN Raj"]

export default function TrustStrip() {
  return (
    <section id="trust" className={styles.section}>
      <div className={styles.labelRow}>
        <span className={styles.label}>
          <span className={styles.labelDot} aria-hidden="true">
            ✦
          </span>
          Trusted By Venues &amp; Projects Including
        </span>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {clients.map((name) => (
            <span key={name} className={styles.marqueeItem}>
              {name}
              <span className={styles.dot} aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

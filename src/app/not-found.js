import Button from "@/components/ui/Button"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <section className={styles.section}>
      <p className={styles.code}>404</p>
      <h1 className={styles.heading}>Page Not Found</h1>
      <p className={styles.text}>The page you are looking for doesn&apos;t exist.</p>
      <div className={styles.action}>
        <Button to="/" variant="outline" icon="arrow-up-right">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

import { business } from "@/lib/business"
import styles from "./page.module.css"

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for BMS Tent House rental enquiries.",
}

export default function Terms() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Terms &amp; Conditions</h1>
      <div className={styles.body}>
        <p>These terms govern your use of this website and enquiries submitted to {business.name}.</p>
        <p>
          <strong>Enquiries &amp; quotes:</strong> submitting an enquiry or quote request through this website does
          not constitute a confirmed booking. All bookings, pricing, product availability and delivery terms are
          confirmed directly with our team.
        </p>
        <p>
          <strong>Product information:</strong> product images and descriptions on this website are for reference.
          Actual products supplied may vary based on availability, branch and stock at the time of your event.
        </p>
        <p>
          <strong>Contact:</strong> for questions about these terms, please reach us at{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </div>
    </section>
  )
}

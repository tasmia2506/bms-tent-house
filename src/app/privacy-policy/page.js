import { business } from "@/lib/business"
import styles from "./page.module.css"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BMS Tent House.",
}

export default function PrivacyPolicy() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <div className={styles.body}>
        <p>This Privacy Policy explains how {business.name} collects and uses information submitted through this website.</p>
        <p>
          <strong>Information we collect:</strong> when you submit an enquiry or quote request form, we collect the
          details you provide — such as your name, phone number and event details — solely to respond to your
          enquiry.
        </p>
        <p>
          <strong>How we use it:</strong> information submitted is used only to contact you about your enquiry and
          is not sold or shared with third parties for marketing purposes.
        </p>
        <p>
          <strong>Cookies:</strong> this website does not use its own cookies to track visitors. Some pages embed
          Google Maps to show our locations; Google may set its own cookies when that embedded map loads, governed
          by Google&apos;s own privacy policy. We do not control or access those cookies.
        </p>
        <p>
          <strong>Contact:</strong> for any questions about this policy, please reach us at{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </div>
    </section>
  )
}

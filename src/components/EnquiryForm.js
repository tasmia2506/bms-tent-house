"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { enquiryFormEndpoint } from "@/lib/business"
import Button from "./ui/Button"
import styles from "./EnquiryForm.module.css"

const eventTypes = ["Wedding", "Corporate Event", "Exhibition", "Birthday / Private Party", "Other"]

const initialState = {
  name: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventLocation: "",
  products: "",
  guestCount: "",
  requirements: "",
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = "Please enter your full name."
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = "Enter a valid 10-digit phone number."
    if (!form.eventType.trim()) next.eventType = "Please select the event type."
    if (!form.eventDate.trim()) next.eventDate = "Please select an event date."
    if (!form.eventLocation.trim()) next.eventLocation = "Please tell us the event location."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    try {
      const res = await fetch(enquiryFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Enquiry — ${form.eventType || "Event"} on ${form.eventDate || "TBD"}`,
          Name: form.name,
          Phone: form.phone,
          "Event Type": form.eventType,
          "Event Date": form.eventDate,
          "Event Location": form.eventLocation,
          "Required Products / Services": form.products,
          "Approximate Guest Count": form.guestCount,
          "Additional Requirements": form.requirements,
        }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setForm(initialState)
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <h3 className={styles.successHeading}>Thank You.</h3>
        <p className={styles.successText}>Your enquiry has been received. Our team will get back to you shortly.</p>
        <div className={styles.successAction}>
          <Button type="button" onClick={() => setStatus("idle")} variant="ghost" size="link">
            Submit another enquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.field}>
        <input className={styles.input} placeholder="Full Name *" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
          inputMode="numeric"
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
      </div>
      <div className={styles.field}>
        <select
          className={`${styles.input} ${form.eventType ? "" : styles.selectPlaceholder}`}
          value={form.eventType}
          onChange={update("eventType")}
          aria-invalid={!!errors.eventType}
        >
          <option value="">Select Event Type *</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className={styles.chevron} />
        {errors.eventType && <p className={styles.error}>{errors.eventType}</p>}
      </div>
      <div className={styles.field}>
        <input type="date" className={styles.input} value={form.eventDate} onChange={update("eventDate")} aria-invalid={!!errors.eventDate} />
        {errors.eventDate && <p className={styles.error}>{errors.eventDate}</p>}
      </div>
      <div className={`${styles.field} ${styles.span2}`}>
        <input
          className={styles.input}
          placeholder="Event Location *"
          value={form.eventLocation}
          onChange={update("eventLocation")}
          aria-invalid={!!errors.eventLocation}
        />
        {errors.eventLocation && <p className={styles.error}>{errors.eventLocation}</p>}
      </div>
      <div className={`${styles.field} ${styles.span2}`}>
        <input className={styles.input} placeholder="Required Products / Services" value={form.products} onChange={update("products")} />
      </div>
      <div className={styles.field}>
        <input className={styles.input} placeholder="Approximate Guest Count" value={form.guestCount} onChange={update("guestCount")} inputMode="numeric" />
      </div>
      <div className={`${styles.field} ${styles.span2}`}>
        <textarea className={styles.input} placeholder="Additional Requirements" rows={4} value={form.requirements} onChange={update("requirements")} />
      </div>

      {status === "error" && (
        <p className={styles.submitError}>
          Something went wrong while sending your enquiry. Please try again, or reach us directly on WhatsApp /
          phone.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} variant="dark" className={styles.submit}>
        {status === "submitting" ? "Sending..." : "Request a Quote"}
      </Button>
    </form>
  )
}

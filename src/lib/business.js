// Central business configuration.
// Update contact numbers, branches, and catalogue details here only —
// every component reads from this single source.

export const business = {
  name: "BMS Tent House",
  legalUnit: "Eventwala — A Unit of BMS Tent House",
  tagline: "Making Every Event Memorable.",
  website: "www.bmstenthouse.in",
  email: "bmstenthouse@gmail.com",
  catalogueUrl: "/catalogue/bms-tent-house-catalogue.pdf",
  // Not yet supplied — set this once the Google Business Profile URL is confirmed.
  // Until then, no rating/review count is shown anywhere on the site.
  googleReviewsUrl: null,
}

// Fixed per the client brief ("35 years of experience, as supplied") —
// not derived from a founding year, so it never drifts with the current date.
export const yearsOfExperience = 35

// Primary number is used for the main click-to-call / WhatsApp CTAs site-wide.
export const contacts = [
  { name: "Syed Sikandar", role: "Owner", phone: "9845001633" },
  { name: "Naveed", role: "Second Son", phone: "7204099021" },
  { name: "Afreed", role: "Elder Son", phone: "9380411870" },
  { name: "Shahid", role: "Third Son", phone: "6364584165" },
]

export const primaryContact = contacts[0]
export const primaryWhatsApp = primaryContact.phone

export const toTelHref = (phone) => `tel:+91${phone}`
export const toWhatsAppHref = (phone, message) => `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`

export const branches = [
  {
    id: "bommanahalli",
    name: "Head Office — Bommanahalli",
    isHeadOffice: true,
    address: "Bommanahalli, Bengaluru — full address available on request",
    addressVerified: false,
    phone: primaryContact.phone,
    mapsQuery: "BMS Tent House, Bommanahalli, Bengaluru",
  },
  {
    id: "electronic-city",
    name: "Electronic City",
    address: "Electronic City, Bengaluru — full address available on request",
    addressVerified: false,
    phone: contacts[1].phone,
    mapsQuery: "BMS Tent House, Electronic City, Bengaluru",
  },
  {
    id: "electronic-city-neeladri",
    name: "Electronic City — Neeladri Road",
    address: "Neeladri Road, Electronic City, Bengaluru — full address available on request",
    addressVerified: false,
    phone: contacts[2].phone,
    mapsQuery: "Neeladri Road, Electronic City, Bengaluru",
  },
  {
    id: "bellandur",
    name: "Bellandur Road",
    address: "Bellandur Road, Bengaluru — full address available on request",
    addressVerified: false,
    phone: contacts[3].phone,
    mapsQuery: "Bellandur Road, Bengaluru",
  },
]

export const toMapsHref = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

// Enquiry form submission endpoint (FormSubmit — no backend required).
// First submission from a new business email requires a one-time confirmation
// click sent to that inbox before deliveries start.
export const enquiryFormEndpoint = `https://formsubmit.co/ajax/${business.email}`

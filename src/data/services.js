// Service-by-category organisation of the product catalogue. Each entry
// links through to the relevant product category page — there is no
// separate event-type inventory, only one rental catalogue organised by
// product.

export const services = [
  {
    slug: "wedding-events",
    name: "Wedding Events",
    description: "Wedding tents, premium seating, stage and dining setups for ceremonies and receptions.",
    image: "/images/categories/wedding-events.webp",
    categorySlug: "tents-canopies",
  },
  {
    slug: "corporate-events",
    name: "Corporate Events",
    description: "Event tents, seating, tables, lighting and sound equipment for conferences and company functions.",
    image: "/images/categories/sound-lighting-cooling.webp",
    categorySlug: "sound-lighting-cooling",
  },
  {
    slug: "exhibitions",
    name: "Exhibitions",
    description: "Canopy and tent structures with setup equipment for exhibitions and trade stalls.",
    image: "/images/categories/exhibitions.webp",
    categorySlug: "tents-canopies",
  },
  {
    slug: "private-parties",
    name: "Birthday & Private Parties",
    description: "Party furniture, sofas, chairs and tables for birthdays and private gatherings.",
    image: "/images/categories/private-parties.webp",
    categorySlug: "furniture-rentals",
  },
  {
    slug: "stage-event-setup",
    name: "Stage & Event Setup",
    description: "Stages, dance floors, podiums and lighting for ceremonies and large gatherings.",
    image: "/images/categories/stage-event-structures.webp",
    categorySlug: "stage-event-structures",
  },
  {
    slug: "dining-arrangements",
    name: "Dining Arrangements",
    description: "Round, buffet and long tables finished with premium linen for every dining layout.",
    image: "/images/categories/dining-arrangements.webp",
    categorySlug: "tables-dining-furniture",
  },
  {
    slug: "inauguration-events",
    name: "Inauguration Events",
    description: "Traditional inauguration lamps and podiums for ceremonies and launch events.",
    image: "/images/categories/inauguration-events.webp",
    categorySlug: "stage-event-structures",
  },
]

// Product data. `image` entries under /images/catalogue and /images/categories
// are real company photographs (catalogue scans and category hero shots).
// Entries marked `representative: true` are professional stock references
// used only where no company photograph exists yet — never presented as
// the company's own installation or project.

export const categories = [
  {
    slug: "tents-canopies",
    code: "01",
    name: "Tents & Canopies",
    description:
      "German hanger structures, pagoda canopies and pandal shamiyanas built to shelter weddings, receptions and large gatherings in every season.",
    heroImage: "/images/categories/tents-canopies-v2.webp",
    products: [
      { name: "German Hanger Tent", image: "/images/catalogue/page_31.webp" },
      { name: "Pagoda Tent Structure", image: "/images/catalogue/page_32.webp" },
      { name: "Pop-up Canopy", image: "/images/catalogue/page_33.webp", representative: true },
      { name: "Pipe Shamiyana", image: "/images/catalogue/page_32.webp" },
      { name: "Chinese Canopy", image: "/images/catalogue/page_33.webp", representative: true },
      { name: "Outdoor Tent Structures", image: "/images/catalogue/page_31.webp" },
    ],
  },
  {
    slug: "furniture-rentals",
    code: "02",
    name: "Furniture Rentals",
    description:
      "Carved puja chairs, banquet seating, Tiffany and Chiavari chairs, sofas and lounge furniture finished to a premium standard for every kind of event.",
    heroImage: "/images/categories/furniture-rentals-v2.webp",
    products: [
      { name: "Puja Chair — Gold Carved", image: "/images/catalogue/page_01.webp" },
      { name: "Puja Chair — White Carved", image: "/images/catalogue/page_02.webp" },
      { name: "Carved Wooden Armchair", image: "/images/catalogue/page_12.webp" },
      { name: "White Tufted Armchair", image: "/images/catalogue/page_13.webp" },
      { name: "White Tufted Loveseat", image: "/images/catalogue/page_14.webp" },
      { name: "Gold Carved Chaise Lounge", image: "/images/catalogue/page_15.webp" },
      { name: "Gold & Silver Wedding Sofa", image: "/images/catalogue/page_16.webp" },
      { name: "Banquet Chair — Red & Gold", image: "/images/catalogue/page_21.webp" },
      { name: "Chiavari Chair — Wood Finish", image: "/images/catalogue/page_22.webp" },
      { name: "Tiffany Chair — Resin", image: "/images/catalogue/page_23.webp" },
      { name: "Wedding Chair — Resin Folding", image: "/images/catalogue/page_24.webp" },
      { name: "Regular Plastic Chairs", image: "/images/catalogue/page_27.webp" },
      { name: "Chair Cover with Sash", image: "/images/catalogue/page_28.webp" },
    ],
  },
  {
    slug: "tables-dining-furniture",
    code: "03",
    name: "Tables & Dining Furniture",
    description:
      "Round and glass-top tables dressed with premium linen in a palette to match any décor, plus cake and buffet display furniture.",
    heroImage: "/images/categories/tables-dining-furniture-v2.webp",
    products: [
      { name: "Round Table — Black Skirting", image: "/images/catalogue/page_05.webp" },
      { name: "Round Table — Sky Blue & Black", image: "/images/catalogue/page_06.webp" },
      { name: "Round Table — Peach & Black", image: "/images/catalogue/page_07.webp" },
      { name: "Round Table — Sky Blue & White", image: "/images/catalogue/page_08.webp" },
      { name: "Glass-Top Rectangular Table", image: "/images/catalogue/page_09.webp" },
      { name: "Glass-Top Round Table", image: "/images/catalogue/page_10.webp" },
      { name: "Accent & Side Tables", image: "/images/catalogue/page_20.webp" },
      { name: "Table Skirting — Premium Linen", image: "/images/catalogue/page_29.webp" },
      { name: "Cake & Dessert Display Plinths", image: "/images/catalogue/page_35.webp" },
    ],
  },
  {
    slug: "stage-event-structures",
    code: "04",
    name: "Stage & Event Structures",
    description:
      "Podiums, lecterns and ceremonial fixtures finished to a standard fit for inaugurations, receptions and premium venue events.",
    heroImage: "/images/categories/stage-event-structures-v2.webp",
    products: [
      { name: "Podium — Wood & Chrome", image: "/images/catalogue/page_03.webp" },
      { name: "Podium — Glass & Chrome", image: "/images/catalogue/page_19.webp" },
      { name: "Traditional Brass Inauguration Lamp", image: "/images/catalogue/page_04.webp" },
      { name: "Wedding & Dance Stages", image: "/images/catalogue/page_32.webp", representative: true },
    ],
  },
  {
    slug: "sound-lighting-cooling",
    code: "05",
    name: "Sound, Lighting & Cooling",
    description:
      "Outdoor mist-cooling fans for large shamiyanas and open-air venues, alongside sound and lighting equipment for every event scale.",
    heroImage: "/images/categories/sound-lighting-cooling-v3.webp",
    products: [
      { name: "Outdoor Mist Cooling Fan", image: "/images/catalogue/page_18.webp" },
      { name: "Heavy-Duty Mist Cooler", image: "/images/catalogue/page_25.webp" },
      {
        name: "Sound Systems",
        image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1200&q=80",
        representative: true,
        external: true,
      },
      {
        name: "Event Lighting",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
        representative: true,
        external: true,
      },
    ],
  },
  {
    slug: "catering-service-equipment",
    code: "06",
    name: "Catering & Service Equipment",
    description:
      "Ceremonial and serving essentials — from brass pooja thalis to dining support equipment — for weddings and traditional functions.",
    heroImage: "/images/categories/catering-service-equipment-v2.webp",
    products: [
      { name: "Brass Pooja Thali & Chowki Set", image: "/images/catalogue/page_26.webp" },
      {
        name: "Catering Vessels",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
        representative: true,
        external: true,
      },
      {
        name: "Crockery & Serving Equipment",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
        representative: true,
        external: true,
      },
    ],
  },
  {
    slug: "event-management-equipment",
    code: "07",
    name: "Event Management Equipment",
    description:
      "Queue management stanchions and arrangement essentials that keep large gatherings organised and premium venues looking sharp.",
    heroImage: "/images/categories/event-management-equipment-v2.webp",
    products: [
      { name: "Queue Management Stanchion & Rope", image: "/images/catalogue/page_17.webp" },
      { name: "Chair Covers & Sashes", image: "/images/catalogue/page_28.webp" },
      { name: "Table Skirting & Linen", image: "/images/catalogue/page_30.webp" },
    ],
  },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)

import { Sparkles, LayoutGrid, Heart, Briefcase, Camera, Flag, PartyPopper, Megaphone, UtensilsCrossed } from "lucide-react"

export const servicesMenu = [
  {
    code: "01",
    title: "Event Types",
    icon: Sparkles,
    categorySlug: null,
    items: [
      { label: "Wedding Events", categorySlug: "tents-canopies", icon: Heart },
      { label: "Corporate Events", categorySlug: "sound-lighting-cooling", icon: Briefcase },
      { label: "Exhibitions", categorySlug: "tents-canopies", icon: Camera },
      { label: "Inauguration Events", categorySlug: "stage-event-structures", icon: Flag },
    ],
  },
  {
    code: "02",
    title: "Setups",
    icon: LayoutGrid,
    categorySlug: null,
    items: [
      { label: "Birthday & Private Parties", categorySlug: "furniture-rentals", icon: PartyPopper },
      { label: "Stage & Event Setup", categorySlug: "stage-event-structures", icon: Megaphone },
      { label: "Dining Arrangements", categorySlug: "tables-dining-furniture", icon: UtensilsCrossed },
    ],
  },
]

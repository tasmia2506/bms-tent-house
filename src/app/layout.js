import { Oswald, Instrument_Serif, DM_Sans } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/components/LenisProvider"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyMobileCta from "@/components/StickyMobileCta"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata = {
  metadataBase: new URL("https://www.bmstenthouse.in"),
  title: {
    default: "BMS Tent House | Event Infrastructure & Rental Solutions, Bengaluru",
    template: "%s | BMS Tent House",
  },
  description:
    "Premium tent, furniture and event infrastructure rentals for weddings, corporate events and celebrations in Bengaluru. 35 years of experience. No compromise in quality.",
}

export const viewport = {
  themeColor: "#C2185B",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCta />
        </LenisProvider>
      </body>
    </html>
  )
}

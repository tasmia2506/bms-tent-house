import Hero from "@/components/Hero"
import FeatureTicker from "@/components/FeatureTicker"
import TrustStrip from "@/components/TrustStrip"
import ServicesByCategory from "@/components/ServicesByCategory"
import ServicesShowcase from "@/components/ServicesShowcase"
import AboutFlow from "@/components/AboutFlow"
import FeaturedProducts from "@/components/FeaturedProducts"
import HowItWorks from "@/components/HowItWorks"
import ClientExperiences from "@/components/ClientExperiences"
import FAQSection from "@/components/FAQSection"
import InquiryCta from "@/components/InquiryCta"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureTicker />
      <ServicesByCategory />
      <AboutFlow />
      <FeaturedProducts />
      <ServicesShowcase />
      <TrustStrip />
      <HowItWorks />
      <ClientExperiences />
      <FAQSection />
      <InquiryCta />
    </>
  )
}

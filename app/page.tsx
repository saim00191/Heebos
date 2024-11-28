import Billing from "@/components/Billing";
import CardDeal from "@/components/CardDeal";
import CTA from "@/components/CTA";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import SubHero from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero />
      <FeatureSection />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

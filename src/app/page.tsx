import { AnalyticsSection } from "@/components/landing/AnalyticsSection";
import { ContactCTA } from "@/components/landing/ContactCTA";
import { FeatureDeepDive } from "@/components/landing/FeatureDeepDive";
import { Footer } from "@/components/landing/Footer";
import { HardwareWorkflow } from "@/components/landing/HardwareWorkflow";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { PartnersMarquee } from "@/components/landing/PartnersMarquee";
import { AnimatedBackground } from "@/components/motion/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <PartnersMarquee />
        <FeatureDeepDive />
        <AnalyticsSection />
        <HardwareWorkflow />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

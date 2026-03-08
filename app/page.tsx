import HeroSection from "@/components/HeroSection";
import BackgroundVideo from "@/components/BackgroundVideo";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServiceCards from "@/components/ServiceCards";
import PhilosophySection from "@/components/PhilosophySection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden">
      <BackgroundVideo />
      <HeroSection />
      <PortfolioGrid />
      <ServiceCards />
      <PhilosophySection />
      <ContactCTA />
    </main>
  );
}

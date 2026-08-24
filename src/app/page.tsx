import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Formats } from "@/components/Formats";
import { Events } from "@/components/Events";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Formats />
        <Events />
        <HowItWorks />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}

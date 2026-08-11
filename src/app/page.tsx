import Header from "@/components/Header";
import Packages from "@/components/Packages";
import Hero from "@/components/Hero";
import Included from "@/components/Included";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Criteria from "@/components/Criteria";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Packages />
        <Hero />
        <Included />
        <Stats />
        <About />
        <Criteria />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

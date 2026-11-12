import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { VisionSection } from "@/components/vision-section";
import { OfferingsSection } from "@/components/offerings-section";
import { ProductsSection } from "@/components/products-section";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <VisionSection />
        <OfferingsSection />
        <ProductsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

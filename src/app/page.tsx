import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { Marquee } from "@/components/marquee";
import { HomeIntro } from "@/components/home/home-intro";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WholesaleBand } from "@/components/home/wholesale-band";
import { WhySection } from "@/components/home/why-section";
import { Nationwide } from "@/components/home/nationwide";
import { ContactBand } from "@/components/home/contact-band";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee
        items={[
          "Jawla Dry Fish",
          "Mixed Dry Fish",
          "Bulk Supply Enquiries",
          "Other Dry Fish Varieties",
          "Wholesale Pricing on Enquiry",
          "Madh Island · Mumbai",
        ]}
      />
      <HomeIntro />
      <FeaturedProducts />
      <WholesaleBand />
      <WhySection />
      <Nationwide />
      <ContactBand />
    </>
  );
}

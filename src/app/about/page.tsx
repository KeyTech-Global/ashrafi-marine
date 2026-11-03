import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactBand } from "@/components/home/contact-band";
import { SiteImage } from "@/components/site-image";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About the Business",
  description:
    "Ashrafi Marine Products is a dry fish merchant and wholesale supplier based in Madh Island, Mumbai, working with trade buyers across India. Learn how the business works.",
  path: "/about",
  openGraphTitle: "About Ashrafi Marine Products",
  openGraphDescription:
    "A dry fish wholesale business based in Madh Island, Mumbai, focused on trade relationships and requirements across India.",
});

const whatWeDo = [
  "Wholesale dry fish supply",
  "Bulk quantity enquiries",
  "Product-specific discussions",
  "Nationwide business enquiries",
];

const whoWeServe = [
  "Wholesale buyers",
  "Retailers",
  "Local fish merchants",
  "Distributors",
  "Bulk purchasers",
  "Exporters & commercial buyers",
];

const principles = [
  {
    title: "Clarity before commitment",
    copy: "Product, quantity and destination are discussed before any commercial terms are confirmed.",
  },
  {
    title: "Direct communication",
    copy: "Buyers speak with the business directly — on call or WhatsApp — rather than through layers.",
  },
  {
    title: "Requirement-led conversations",
    copy: "Availability and pricing are discussed against the specific enquiry, not a fixed online catalogue price.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About"
        eyebrow="About the business"
        title={["Built around marine products.", "Focused on business relationships."]}
        description="A dry fish merchant and wholesale supplier based in Madh Island, Mumbai — working with commercial buyers across India."
        imageKey="harbourSunny"
        imageAlt="Fishing boats docked in a harbour on the Mumbai coast"
        meta={["Madh Island, Mumbai", "Dry fish wholesale", "Enquiries across India"]}
      />

      <section className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">01</span> Who we are
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                A dry fish business, built for{" "}
                <span className="italic text-teal">wholesale trade.</span>
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              <Reveal delay={0.14}>
                <p className="lede">
                  Ashrafi Marine Products is a dry fish merchant and wholesale
                  supplier based in Madh Island, Mumbai. The business
                  specialises in dry fish wholesale, offering Jawla, mixed dry
                  fish and other varieties for commercial buyers.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="body-copy">
                  The business operates across India, connecting wholesale
                  buyers, retailers, local fish merchants, distributors and
                  exporters with the dry fish products they enquire about. Every
                  conversation starts with the requirement — the variety, the
                  quantity and the destination.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="body-copy">
                  There is no online checkout here. Instead, there is a direct
                  line to the business, a clear product range and a team that
                  responds to each wholesale enquiry individually.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.32}>
              <blockquote className="mt-9 border-l-2 border-gold pl-5">
                <p className="font-display text-[1.35rem] leading-snug text-navy/80">
                  &ldquo;Clear product communication, direct contact and a
                  practical approach to wholesale requirements.&rdquo;
                </p>
                <footer className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-navy/40">
                  How the business works
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy/5 sm:aspect-[5/4] lg:aspect-[4/5]">
                  <SiteImage
                    imageKey="marketFish"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 rounded-full border border-pearl/25 bg-navy/25 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-pearl/85 backdrop-blur-sm">
                    Trade · Mumbai
                  </p>
                </div>
                <div className="absolute -bottom-9 -left-5 hidden w-40 border-[6px] border-pearl shadow-soft sm:block lg:-left-10 lg:w-48">
                  <div className="relative aspect-[3/4] overflow-hidden bg-navy/5">
                    <SiteImage
                      imageKey="fishHeads"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 hidden h-24 w-24 border-r border-t border-gold/60 lg:block" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-pearl sm:py-24">
        <div className="grain pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="wrap relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow text-gold">What we do</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="display-3 mt-4 text-pearl">
                  Wholesale dry fish, discussed requirement by requirement.
                </h2>
              </Reveal>
              <ul className="mt-8 divide-y divide-pearl/12 border-y border-pearl/12">
                {whatWeDo.map((item, index) => (
                  <li key={item} className="py-3.5">
                    <Reveal
                      delay={0.1 + index * 0.05}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-[0.98rem] text-pearl/80">{item}</span>
                      <Check className="h-4 w-4 text-gold" strokeWidth={1.8} aria-hidden="true" />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Reveal>
                <p className="eyebrow text-gold">Who we serve</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="display-3 mt-4 text-pearl">
                  Trade buyers across the supply chain.
                </h2>
              </Reveal>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {whoWeServe.map((item, index) => (
                  <li
                    key={item}
                    className="rounded-full border border-pearl/20 px-4 py-2 text-[0.78rem] text-pearl/70"
                  >
                    <Reveal delay={0.1 + index * 0.04}>{item}</Reveal>
                  </li>
                ))}
              </ul>
              <Reveal delay={0.34}>
                <div className="mt-10 flex items-start gap-3 border border-pearl/12 bg-pearl/[0.04] p-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-pearl/60">
                      Business office
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-pearl/80">
                      {site.location.display}
                    </p>
                    <p className="mt-1 text-[0.75rem] text-pearl/60">
                      Enquiries welcomed from across India
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading
            index="02"
            label="Working principles"
            title={
              <>
                A straightforward way of{" "}
                <span className="italic text-teal">doing business.</span>
              </>
            }
            intro="Three principles shape how every wholesale conversation is handled."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <article className="flex h-full flex-col bg-pearl p-7">
                  <span className="font-display text-sm text-gold">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-[1.45rem] leading-snug text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-navy/55">
                    {principle.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-navy/12 pt-7 sm:flex-row sm:items-center">
              <p className="max-w-xl text-[0.92rem] leading-relaxed text-navy/55">
                Curious about the product range or have a bulk requirement to
                discuss? The next step is a direct conversation.
              </p>
              <Link href="/wholesale" className="btn btn-navy shrink-0">
                Request a wholesale quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

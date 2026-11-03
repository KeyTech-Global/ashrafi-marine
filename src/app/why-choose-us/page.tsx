import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FeatureIcon } from "@/components/feature-icons";
import { SiteImage } from "@/components/site-image";
import { ContactBand } from "@/components/home/contact-band";
import { contacts, features, site } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "Why trade buyers start with Ashrafi Marine Products: a wholesale-focused process, multiple dry fish varieties, bulk quantity enquiries, India-wide operations and direct communication.",
  path: "/why-choose-us",
  openGraphTitle: "Why Choose Ashrafi Marine Products",
  openGraphDescription:
    "A wholesale-first dry fish business in Madh Island, Mumbai — built around direct communication, bulk requirements and buyers across India.",
});

const principles = [
  {
    index: "01",
    title: "Requirement before quotation",
    copy: "Product, quantity and destination are established first, so any pricing discussion is relevant to your actual requirement.",
  },
  {
    index: "02",
    title: "A direct line to the business",
    copy: "Call or WhatsApp the representatives directly. There is no layered call centre between your enquiry and the business.",
  },
  {
    index: "03",
    title: "Confirmation in writing",
    copy: "Commercial details are agreed directly with you before dispatch is coordinated for the confirmed destination.",
  },
];

const clarity = [
  {
    title: "Pricing is shared, not listed",
    copy: "Wholesale pricing depends on the product, quantity, grade and destination. It is confirmed for each enquiry rather than published as a fixed online price.",
  },
  {
    title: "Quantities in KG or tonnes",
    copy: "Share the requirement in the unit that suits your business — from smaller trade lots to larger bulk consignments.",
  },
  {
    title: "Availability checked per requirement",
    copy: "The range shown on this website is a starting point. Tell the team what you need and availability is confirmed against it.",
  },
  {
    title: "Enquiries are not stored here",
    copy: "The form prepares a WhatsApp message. Your details go to the business through WhatsApp, not into a database on this website.",
  },
];

const buyers = [
  "Wholesale buyers",
  "Retailers",
  "Local fish merchants",
  "Distributors",
  "Bulk purchasers",
  "Commercial buyers",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        current="Why Us"
        eyebrow="Why Ashrafi Marine"
        title={["A trade-first approach,", "from the first enquiry."]}
        description="No layered sales process and no automated checkout. Just a clear dry fish range, direct contact and a conversation built around your wholesale requirement."
        imageKey="driedHanging"
        imageAlt="Dried fish hanging from a rope in the sun"
        meta={[
          "Wholesale-focused",
          "Madh Island, Mumbai",
          "Enquiries across India",
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/wholesale" className="btn btn-gold">
            Request a wholesale quote
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </Link>
          <a
            href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <MessageCircle
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            WhatsApp the team
          </a>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="wrap">
          <SectionHeading
            index="01"
            label="The difference"
            title={
              <>
                Practical reasons to{" "}
                <span className="italic text-teal">start here.</span>
              </>
            }
            intro="Six aspects of the business that matter when you are sourcing dry fish for trade, rather than buying a single retail pack."
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.index} delay={index * 0.05} className="h-full">
                <article className="group relative flex h-full flex-col bg-pearl p-7 transition-colors duration-500 hover:bg-white lg:p-8">
                  <div className="flex items-start justify-between">
                    <FeatureIcon
                      name={feature.icon}
                      className="h-9 w-9 text-teal transition-transform duration-500 group-hover:-translate-y-0.5"
                    />
                    <span className="font-display text-sm text-gold">
                      {feature.index}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-[1.45rem] leading-snug text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-navy/55">
                    {feature.copy}
                  </p>
                  <span
                    className="mt-auto block h-px w-0 bg-gold pt-6 transition-all duration-700 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-pearl sm:py-24">
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="grain pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div className="wrap relative z-10 grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-pearl/50">
                <span className="text-gold">02</span> Working principles
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                A straightforward way of{" "}
                <span className="italic text-gold-soft">
                  doing business.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-6 max-w-md text-pearl/60">
                The process is deliberately simple: understand the requirement,
                confirm what can be supplied, then agree the terms directly.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/wholesale" className="btn btn-gold">
                  Start an enquiry
                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={contacts[0].phoneHref}
                  className="btn btn-outline"
                >
                  <Phone
                    className="h-4 w-4"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  Call the business
                </a>
              </div>
            </Reveal>
          </div>

          <ol className="divide-y divide-pearl/12 border-y border-pearl/12">
            {principles.map((principle, index) => (
              <li key={principle.index} className="py-6 first:pt-7 last:pb-7">
                <Reveal delay={0.12 + index * 0.07} className="flex gap-6">
                  <span className="font-display text-[1.35rem] leading-none text-gold/80">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="font-sans text-[1rem] font-semibold tracking-wide text-pearl">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[0.87rem] leading-relaxed text-pearl/50">
                      {principle.copy}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-navy/10 py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">03</span> Clear from the start
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                What you can expect{" "}
                <span className="italic text-teal">from this website.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-6 max-w-lg">
                This is a business enquiry site, not an online store. Knowing
                that upfront keeps the process clear for both sides.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {clarity.map((item, index) => (
                <Reveal key={item.title} delay={0.18 + index * 0.05}>
                  <div className="flex gap-3.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal/25 bg-teal/[0.06] text-teal"
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="text-[0.9rem] font-semibold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-navy/50">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.36}>
              <div className="mt-9 flex items-start gap-3 border-t border-navy/12 pt-5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="text-[0.8rem] leading-relaxed text-navy/50">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/35">
                    Business office
                  </span>
                  {site.location.display} · Enquiries welcomed from across India
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                <SiteImage
                  imageKey="dryingRack"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow text-gold">Trade buyers</p>
                  <p className="mt-2 max-w-xs font-display text-[1.45rem] leading-snug text-pearl">
                    A focused range and a direct conversation.
                  </p>
                </div>
              </div>

              <div className="mt-5 border border-navy/12 bg-sand-soft/50 p-5">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/40">
                  Buyers we work with
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {buyers.map((buyer) => (
                    <li
                      key={buyer}
                      className="rounded-full border border-navy/12 bg-pearl px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy/55"
                    >
                      {buyer}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-gold/60 lg:block"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

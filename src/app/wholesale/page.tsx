import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Phone,
  Package,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteImage } from "@/components/site-image";
import { WholesaleEnquiry } from "@/components/wholesale-enquiry";
import { contacts, processSteps, products, site } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale & Bulk Dry Fish Supply",
  description:
    "Share your dry fish requirement with Ashrafi Marine Products — product, quantity in KG or tonnes, and delivery location. Wholesale and bulk enquiries from buyers across India.",
  path: "/wholesale",
  openGraphDescription:
    "Wholesale dry fish enquiries for trade buyers across India. Share your product, quantity and delivery location directly with the business.",
});

const buyerTypes = [
  {
    index: "01",
    title: "Wholesale buyers",
    copy: "Businesses sourcing dry fish in trade quantities for onward sale.",
  },
  {
    index: "02",
    title: "Retailers",
    copy: "Retail counters and shops looking to source dry fish for their customers.",
  },
  {
    index: "03",
    title: "Distributors",
    copy: "Distribution businesses building a dry fish range for their territory.",
  },
  {
    index: "04",
    title: "Local fish merchants",
    copy: "Merchants comparing availability and wholesale terms on a specific variety.",
  },
  {
    index: "05",
    title: "Bulk purchasers",
    copy: "Larger quantity requirements shared in kilograms or tonnes.",
  },
  {
    index: "06",
    title: "Commercial buyers",
    copy: "Trade buyers with a defined product, quantity and delivery destination.",
  },
];

const notListed = [
  "No fixed online price list",
  "No automated checkout",
  "No stored enquiry database",
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        current="Wholesale"
        eyebrow="Wholesale & bulk supply"
        title={["Wholesale dry fish,", "handled directly."]}
        description="Share the product, quantity and delivery location. The team reviews your requirement and responds with availability and wholesale pricing for that specific enquiry."
        imageKey="driedContainer"
        imageAlt="Dried fish arranged in a white container"
        meta={[
          "KG & tonne quantities",
          "Buyers across India",
          "Direct business contact",
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#enquiry" className="btn btn-gold">
            Start your enquiry
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </a>
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
            WhatsApp Amin
          </a>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">01</span> Who we supply
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                Built for trade buyers with a{" "}
                <span className="italic text-teal">defined requirement.</span>
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              <Reveal delay={0.14}>
                <p className="lede">
                  Ashrafi Marine Products works with businesses that buy dry
                  fish to sell, distribute or supply onward. The conversation
                  starts with what you need, not a generic catalogue price.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="body-copy">
                  Based in Madh Island, Mumbai, the business welcomes wholesale
                  and bulk enquiries from across India. Whether you are
                  sourcing a single variety or an assortment, the team can
                  review the requirement and confirm what is available.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.26}>
              <div className="mt-9 border-l-2 border-gold pl-5">
                <p className="font-display text-[1.2rem] leading-snug text-navy/75">
                  &ldquo;Product, quantity and destination first — then the
                  commercial details.&rdquo;
                </p>
                <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-navy/40">
                  The wholesale enquiry approach
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-9 space-y-2.5">
                {notListed.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[0.82rem] text-navy/55"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full border border-navy/15"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-teal" strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <div className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2">
              {buyerTypes.map((buyer, index) => (
                <Reveal key={buyer.index} delay={index * 0.05} className="h-full">
                  <article className="group flex h-full flex-col bg-pearl p-6 transition-colors duration-500 hover:bg-white">
                    <span className="font-display text-sm text-gold">
                      {buyer.index}
                    </span>
                    <h3 className="mt-5 font-display text-[1.25rem] leading-snug text-navy">
                      {buyer.title}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-navy/50">
                      {buyer.copy}
                    </p>
                    <span
                      className="mt-auto block h-px w-0 bg-gold pt-5 transition-all duration-700 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-4 border border-navy/12 bg-sand-soft/45 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Package
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <p className="text-[0.8rem] leading-relaxed text-navy/60">
                    Have a product list or purchase plan? Send it through
                    WhatsApp and the team can review it directly.
                  </p>
                </div>
                <a
                  href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow shrink-0"
                >
                  WhatsApp
                  <ArrowUpRight
                    className="h-3.5 w-3.5"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-pearl sm:py-24">
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-teal/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="grain pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div className="wrap relative z-10">
          <SectionHeading
            index="02"
            label="The enquiry process"
            tone="light"
            title={
              <>
                Four clear steps,{" "}
                <span className="italic text-gold-soft">
                  no online checkout.
                </span>
              </>
            }
            intro="A wholesale enquiry moves through a direct conversation with the business. Nothing is bought or paid for on this website."
          />

          <ol className="mt-14 grid gap-px overflow-hidden border border-pearl/12 bg-pearl/12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.index} className="bg-navy">
                <Reveal delay={index * 0.07} className="h-full">
                  <div className="flex h-full flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[2.4rem] leading-none text-gold/80">
                        {step.index}
                      </span>
                      <span
                        className="h-px w-10 bg-pearl/20"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-7 font-display text-[1.3rem] leading-snug text-pearl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.84rem] leading-relaxed text-pearl/50">
                      {step.copy}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.25}>
            <p className="mt-8 text-[0.72rem] leading-relaxed text-pearl/55">
              Timing, logistics and commercial terms are confirmed directly
              between your business and Ashrafi Marine Products for the agreed
              requirement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="wrap">
          <SectionHeading
            index="03"
            label="Products to discuss"
            title={
              <>
                Start with a variety, then{" "}
                <span className="italic text-teal">share the details.</span>
              </>
            }
            intro="Select a product to pre-fill the enquiry form below. Availability is confirmed for the quantity and destination you provide."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.07}>
                <Link
                  href={`/wholesale?product=${product.slug}#enquiry`}
                  className="group block border border-navy/12 bg-white transition-colors duration-500 hover:border-navy/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                    <SiteImage
                      imageKey={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                    <span className="absolute left-4 top-4 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-pearl/80">
                      {product.index}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-teal">
                        {product.category}
                      </p>
                      <h3 className="mt-1.5 font-display text-[1.28rem] leading-snug text-navy">
                        {product.name}
                      </h3>
                    </div>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy/50 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                      <ArrowUpRight
                        className="h-3.5 w-3.5"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="relative scroll-mt-28 overflow-hidden border-t border-navy/10 bg-sand-soft/50 py-20 sm:py-24"
      >
        <div className="wrap grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">04</span> Your requirement
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                Tell us what you need to{" "}
                <span className="italic text-teal">source.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-6 max-w-md">
                Complete the form and it will prepare a WhatsApp message to the
                business. Nothing is submitted to or stored on this website.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 space-y-3">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex flex-col gap-4 border border-navy/12 bg-pearl p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-[0.9rem] font-semibold text-navy">
                        {contact.name}
                      </p>
                      <a
                        href={contact.phoneHref}
                        className="mt-0.5 inline-flex items-center gap-2 text-[0.8rem] text-navy/55 transition-colors hover:text-navy"
                      >
                        <Phone
                          className="h-3.5 w-3.5"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        {contact.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={whatsappLink(
                          contact.whatsapp,
                          defaultWhatsAppMessage,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-navy/20 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:border-navy"
                      >
                        <MessageCircle
                          className="h-3.5 w-3.5 text-teal"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <address className="mt-6 flex items-start gap-3 not-italic">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span className="text-[0.8rem] leading-relaxed text-navy/50">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/35">
                    Business office
                  </span>
                  {site.location.display}
                </span>
              </address>
            </Reveal>
          </div>

          <WholesaleEnquiry />
        </div>
      </section>
    </>
  );
}

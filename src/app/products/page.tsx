import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProductCatalogue } from "@/components/product-catalogue";
import { ContactBand } from "@/components/home/contact-band";
import { contacts } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Dry Fish Products",
  description:
    "Explore the Ashrafi Marine Products range: Jawla dried tiny prawns, mixed dry fish and other dry fish varieties for wholesale and bulk buyers across India.",
  path: "/products",
  openGraphTitle: "Dry Fish Products — Jawla, Mixed & Other Varieties",
  openGraphDescription:
    "A focused dry fish range for wholesale buyers. Jawla, mixed dry fish and other varieties, with availability and pricing confirmed on enquiry.",
});

const enquiryNotes = [
  {
    index: "01",
    title: "Name the variety",
    copy: "Jawla, a mixed lot or a specific variety. If you know the grade or presentation you need, include it.",
  },
  {
    index: "02",
    title: "State the quantity",
    copy: "Share the requirement in kilograms or tonnes so the team can respond to the right scale of supply.",
  },
  {
    index: "03",
    title: "Confirm the destination",
    copy: "Add the delivery city and state. Availability and commercial terms are confirmed against that requirement.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        current="Products"
        eyebrow="The product range"
        title={["Dry fish, selected for", "wholesale trade."]}
        description="Jawla, mixed dry fish and other varieties — presented for trade buyers, with availability and wholesale pricing confirmed against each specific enquiry."
        imageKey="dryingRack"
        imageAlt="Dried fish hanging on an outdoor drying rack"
        meta={[
          "Jawla dry fish",
          "Mixed dry fish",
          "Other varieties",
          "Wholesale pricing on enquiry",
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

      <section className="py-20 sm:py-24">
        <div className="wrap">
          <SectionHeading
            index="01"
            label="Product range"
            title={
              <>
                Browse by variety, then{" "}
                <span className="italic text-teal">start a conversation.</span>
              </>
            }
            intro="Filter the range by category. Every product is supplied against a confirmed wholesale requirement — this website does not publish fixed prices or take online orders."
            action={
              <div className="rounded-sm border border-navy/12 bg-sand-soft/50 px-5 py-4">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/40">
                  Looking for something else?
                </p>
                <p className="mt-1.5 max-w-[15rem] text-[0.82rem] leading-relaxed text-navy/65">
                  Tell us the variety, grade or pack you need and availability
                  can be checked.
                </p>
              </div>
            }
          />

          <div className="mt-12">
            <ProductCatalogue />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-pearl sm:py-24">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="grain pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div className="wrap relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow eyebrow-line text-pearl/50">
                  <span className="text-gold">02</span> A useful enquiry
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-2 mt-6">
                  Three details that make the{" "}
                  <span className="italic text-gold-soft">
                    response specific.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="lede mt-6 max-w-md text-pearl/60">
                  Wholesale conversations move faster when the requirement is
                  clear from the start. You do not need a formal specification —
                  just the essentials.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="/wholesale"
                  className="btn btn-gold mt-8"
                >
                  Start a wholesale enquiry
                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </div>

            <ol className="divide-y divide-pearl/12 border-y border-pearl/12">
              {enquiryNotes.map((note, index) => (
                <li key={note.index} className="py-6 first:pt-7 last:pb-7">
                  <Reveal delay={0.12 + index * 0.07} className="flex gap-6">
                    <span className="font-display text-[1.35rem] leading-none text-gold/80">
                      {note.index}
                    </span>
                    <div>
                      <h3 className="font-sans text-[1rem] font-semibold tracking-wide text-pearl">
                        {note.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-[0.87rem] leading-relaxed text-pearl/50">
                        {note.copy}
                      </p>
                    </div>
                    <Check
                      className="ml-auto mt-1 hidden h-4 w-4 shrink-0 text-gold/70 sm:block"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={0.24}>
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-pearl/12 pt-5 text-[0.7rem] leading-relaxed text-pearl/60">
              <span>No online checkout.</span>
              <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
              <span>No published price list.</span>
              <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
              <span>Every enquiry reviewed individually.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

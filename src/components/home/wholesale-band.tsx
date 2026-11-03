import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SiteImage } from "@/components/site-image";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { contacts } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const points = [
  {
    title: "Tonnes or kilograms",
    copy: "Share the quantity in the unit that matches your requirement — from smaller trade lots to bulk consignments.",
  },
  {
    title: "Product-specific conversation",
    copy: "Jawla, mixed dry fish or another variety. Discuss what fits your market before committing.",
  },
  {
    title: "Direct with the business",
    copy: "Availability and wholesale pricing are confirmed one-to-one, not through an automated checkout.",
  },
];

export function WholesaleBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-pearl">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-teal/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="wrap relative z-10 grid gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:py-24">
        <div>
          <Reveal>
            <p className="eyebrow eyebrow-line text-pearl/50">
              <span className="text-gold">03</span> Wholesale &amp; bulk supply
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display-2 mt-6">
              Bulk requirements?{" "}
              <span className="italic text-gold-soft">Let&apos;s connect.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="lede mt-6 max-w-lg text-pearl/65">
              Whether you are a wholesaler, retailer, distributor or commercial
              buyer, connect with Ashrafi Marine Products for dry fish product
              and bulk quantity enquiries.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={0.2 + index * 0.06}>
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-[0.92rem] font-semibold tracking-wide text-pearl">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[0.85rem] leading-relaxed text-pearl/50">
                      {point.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.36}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic strength={7}>
                <Link href="/wholesale" className="btn btn-gold w-full sm:w-auto">
                  Request a wholesale quote
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </Magnetic>
              <a
                href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                WhatsApp the team
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep sm:aspect-[5/5] lg:aspect-[4/5]">
              <SiteImage
                imageKey="marketFish"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="rounded-sm border border-pearl/15 bg-navy/55 p-5 backdrop-blur-md">
                  <p className="eyebrow text-gold">Enquiry checklist</p>
                  <dl className="mt-4 space-y-3">
                    {[
                      ["Product", "Jawla / Mixed / Other"],
                      ["Quantity", "In KG or tonnes"],
                      ["Destination", "City & state"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 border-b border-pearl/10 pb-2.5 last:border-0 last:pb-0"
                      >
                        <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-pearl/55">
                          {label}
                        </dt>
                        <dd className="text-right text-[0.8rem] text-pearl/85">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-[0.7rem] leading-relaxed text-pearl/55">
                    Share these three details for a more accurate response.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-gold/50 lg:block"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

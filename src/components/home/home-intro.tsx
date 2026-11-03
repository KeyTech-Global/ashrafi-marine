import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/site-image";
import { Reveal } from "@/components/reveal";

export function HomeIntro() {
  return (
    <section id="business" className="relative py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">01</span> The business
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                A wholesale dry fish business, built around{" "}
                <span className="italic text-teal">trade.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-7 max-w-md">
                Ashrafi Marine Products works with buyers who source dry fish
                for their own markets — wholesale traders, retailers,
                distributors and commercial customers.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="link-arrow mt-8 text-navy hover:text-teal"
              >
                About the business
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-10 grid gap-0 border-t border-navy/12">
                {[
                  ["Head office", "Madh Island, Mumbai"],
                  ["Operating region", "All over India"],
                  ["Enquiry focus", "Wholesale & bulk"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-6 border-b border-navy/12 py-3.5"
                  >
                    <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-navy/40">
                      {label}
                    </dt>
                    <dd className="text-right text-[0.85rem] font-medium text-navy/80">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden bg-navy/5">
                  <SiteImage
                    imageKey="dryingRack"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="transition-transform duration-[1.8s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <p className="rounded-full border border-pearl/25 bg-navy/25 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-pearl/80 backdrop-blur-sm">
                      Coastal trade · Maharashtra
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-5 hidden w-36 border-[6px] border-pearl shadow-soft sm:block lg:-left-8 lg:w-44">
                  <div className="relative aspect-[3/4] overflow-hidden bg-navy/5">
                    <SiteImage
                      imageKey="driedHanging"
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 hidden h-20 w-20 border-r border-t border-gold/60 lg:block" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold">
                    What we supply
                  </p>
                  <p className="body-copy mt-3">
                    Jawla, mixed dry fish and other varieties, discussed against
                    the buyer&apos;s requirement rather than sold from a fixed
                    online shelf.
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold">
                    How we work
                  </p>
                  <p className="body-copy mt-3">
                    A direct, conversation-led process. Share the product,
                    quantity and destination — the team responds with
                    availability and pricing for that enquiry.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

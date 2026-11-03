import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { regions, site } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { CoverageGraphic } from "@/components/home/coverage-graphic";

export function Nationwide() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow eyebrow-line text-navy/45">
              <span className="text-gold">05</span> Nationwide business presence
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-2 mt-6">
              From Madh Island to buyers{" "}
              <span className="italic text-teal">across India.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mt-6 max-w-lg">
              Wholesale and bulk enquiries are welcomed nationwide. Share the
              destination and the team will confirm what can be arranged for
              your requirement.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {regions.map((region, index) => (
              <Reveal key={region.name} delay={0.18 + index * 0.05}>
                <div className="border-t border-navy/15 pt-4">
                  <h3 className="flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-navy">
                    <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
                    {region.name}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-navy/50">
                    {region.states}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-col gap-4 rounded-sm border border-navy/12 bg-sand-soft/50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-navy/45">
                    Business office
                  </p>
                  <p className="mt-1 text-[0.85rem] font-medium text-navy">{site.location.display}</p>
                </div>
              </div>
              <Link href="/contact" className="link-arrow shrink-0">
                Contact
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.44}>
            <p className="mt-4 text-[0.7rem] leading-relaxed text-navy/35">
              The diagram is illustrative of enquiry coverage, not a map of
              branch offices or distribution centres.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <CoverageGraphic />
        </Reveal>
      </div>
    </section>
  );
}

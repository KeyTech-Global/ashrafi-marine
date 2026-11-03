import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { FeatureIcon } from "@/components/feature-icons";
import { Reveal } from "@/components/reveal";

export function WhySection() {
  return (
    <section className="relative bg-sand-soft/45 py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          index="04"
          label="Why Ashrafi"
          title={
            <>
              A trade-first approach, from the{" "}
              <span className="italic text-teal">first enquiry.</span>
            </>
          }
          intro="Practical reasons wholesale buyers choose to start a conversation with Ashrafi Marine Products."
          action={
            <Link href="/why-choose-us" className="btn btn-outline-dark">
              Why choose us
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.index} delay={index * 0.05} className="h-full">
              <article className="group relative flex h-full flex-col bg-pearl p-6 transition-colors duration-500 hover:bg-white sm:p-7 lg:p-8">
                <div className="flex items-start justify-between">
                  <FeatureIcon
                    name={feature.icon}
                    className="h-9 w-9 text-teal transition-transform duration-500 group-hover:-translate-y-0.5"
                  />
                  <span className="font-display text-sm text-gold">{feature.index}</span>
                </div>
                <h3 className="mt-7 font-display text-[1.35rem] leading-snug text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-navy/55">
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
  );
}

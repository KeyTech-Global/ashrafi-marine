import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq";
import { CoverageGraphic } from "@/components/home/coverage-graphic";
import { contacts, regions, site } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Enquiries",
  description:
    "Contact Ashrafi Marine Products in Madh Island, Mumbai. Call or WhatsApp Amin Machiwala and Rehan Macchiwala for dry fish wholesale and bulk enquiries across India.",
  path: "/contact",
  openGraphTitle: "Contact Ashrafi Marine Products",
  openGraphDescription:
    "Direct contact for dry fish wholesale enquiries — Madh Island, Mumbai. Call or WhatsApp the business, or prepare an enquiry online.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        eyebrow="Contact & enquiries"
        title={["Let's talk about", "your requirement."]}
        description="Call or WhatsApp the business directly, or use the enquiry form to prepare a message with your product, quantity and delivery location."
        imageKey="harbourSunny"
        imageAlt="Fishing boats docked in a sunny harbour"
        meta={[
          "Amin Machiwala",
          "Rehan Macchiwala",
          "Madh Island, Mumbai",
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            WhatsApp the team
          </a>
          <a href={contacts[0].phoneHref} className="btn btn-outline">
            <Phone className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            Call Amin
          </a>
        </div>
      </PageHero>

      <section id="enquiry" className="scroll-mt-28 py-20 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">01</span> Direct contact
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                Speak with{" "}
                <span className="italic text-teal">the business.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-6 max-w-md">
                Both representatives handle business enquiries. Choose either
                number to call or start a WhatsApp conversation.
              </p>
            </Reveal>

            <div className="mt-9 space-y-3">
              {contacts.map((contact, index) => (
                <Reveal key={contact.id} delay={0.18 + index * 0.06}>
                  <div className="border border-navy/12 bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-sand-soft/60 font-display text-[0.85rem] text-teal">
                          {contact.initials}
                        </span>
                        <div>
                          <h3 className="font-display text-[1.3rem] leading-tight text-navy">
                            {contact.name}
                          </h3>
                          <p className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/35">
                            {contact.role}
                          </p>
                        </div>
                      </div>
                      <span className="font-display text-sm text-gold">
                        0{index + 1}
                      </span>
                    </div>

                    <a
                      href={contact.phoneHref}
                      className="mt-4 block font-display text-[1.45rem] leading-none tracking-wide text-navy transition-colors hover:text-teal"
                    >
                      {contact.phoneDisplay}
                    </a>

                    <div className="mt-4 flex gap-2">
                      <a
                        href={contact.phoneHref}
                        className="inline-flex items-center gap-2 rounded-sm border border-navy/20 px-3.5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:border-navy"
                      >
                        <Phone
                          className="h-3.5 w-3.5"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        Call
                      </a>
                      <a
                        href={whatsappLink(
                          contact.whatsapp,
                          defaultWhatsAppMessage,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-teal/30 bg-teal/[0.06] px-3.5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-teal transition-colors hover:border-teal"
                      >
                        <MessageCircle
                          className="h-3.5 w-3.5"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32}>
              <div className="mt-6 flex items-start gap-3 border-t border-navy/12 pt-5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <address className="not-italic">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy/35">
                    Business office
                  </span>
                  <span className="mt-1 block text-[0.88rem] leading-relaxed text-navy/60">
                    {site.location.display}
                  </span>
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <p className="mt-5 text-[0.72rem] leading-relaxed text-navy/40">
                No street address or map pin is published here. Share your
                requirement on call or WhatsApp and the team will guide you on
                the next step.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <EnquiryForm
              intent="Business enquiry"
              requireQuantity={false}
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-navy/10 bg-sand-soft/45 py-20 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line text-navy/45">
                <span className="text-gold">02</span> Where we operate
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-2 mt-6">
                Madh Island, Mumbai.{" "}
                <span className="italic text-teal">
                  Enquiries across India.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede mt-6 max-w-lg">
                The business is based in Madh Island, Mumbai, and welcomes
                wholesale and bulk enquiries from buyers and businesses across
                the country.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {regions.map((region, index) => (
                <Reveal key={region.name} delay={0.18 + index * 0.05}>
                  <div className="border-t border-navy/15 pt-3.5">
                    <h3 className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-navy">
                      <span
                        className="h-1 w-1 rounded-full bg-teal"
                        aria-hidden="true"
                      />
                      {region.name}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-navy/50">
                      {region.states}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="mt-7 text-[0.7rem] leading-relaxed text-navy/35">
                The diagram is illustrative of enquiry coverage, not a map of
                branch offices or distribution centres.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <CoverageGraphic />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-6 border border-navy/12 bg-white p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="eyebrow text-teal">Wholesale requirement?</p>
            <p className="mt-2 max-w-xl font-display text-[1.55rem] leading-snug text-navy sm:text-[1.8rem]">
              Share the product, quantity and destination for a more specific
              response.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <Link href="/wholesale" className="btn btn-navy">
              Wholesale enquiry
              <ArrowUpRight
                className="h-4 w-4"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </Link>
            <a
              href={whatsappLink(contacts[1].whatsapp, defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <MessageCircle
                className="h-4 w-4"
                strokeWidth={1.7}
                aria-hidden="true"
              />
              WhatsApp Rehan
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              index="03"
              label="Common questions"
              title={
                <>
                  Questions buyers ask{" "}
                  <span className="italic text-teal">before enquiring.</span>
                </>
              }
              intro="Clear answers about pricing, quantities and how the enquiry form works."
            />
          </div>
          <Reveal delay={0.1}>
            <FaqList />
          </Reveal>
        </div>
      </section>
    </>
  );
}

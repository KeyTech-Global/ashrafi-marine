import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { contacts, site } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";
import { CallButton, WhatsAppButton } from "@/components/buttons";

export function ContactBand() {
  return (
    <section className="relative overflow-hidden border-t border-gold/40 bg-sand py-20 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow eyebrow-line text-navy/50">
              <span className="text-teal">06</span> Direct contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-2 mt-6">
              Speak directly with{" "}
              <span className="italic text-teal">the business.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mt-6 max-w-md">
              Call or message either representative. For a detailed wholesale
              quote, share the product, quantity and delivery location.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-navy">
                Contact &amp; enquiries
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                WhatsApp now
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex items-start gap-3 text-[0.82rem] leading-relaxed text-navy/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.6} aria-hidden="true" />
              <p>
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-navy/40">
                  Business office
                </span>
                {site.location.display}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <Reveal key={contact.id} delay={0.1 + index * 0.07}>
              <div className="group flex flex-col gap-5 rounded-sm border border-navy/10 bg-pearl p-5 transition-colors duration-500 hover:border-navy/25 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white font-display text-[0.95rem] text-teal">
                    {contact.initials}
                  </span>
                  <div>
                    <p className="font-display text-xl leading-tight text-navy">{contact.name}</p>
                    <a
                      href={contact.phoneHref}
                      className="mt-1 block text-[0.82rem] font-medium tracking-wide text-navy/55 transition-colors hover:text-navy"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CallButton
                    href={contact.phoneHref}
                    variant="outline-dark"
                    className="!px-4 !py-3 text-[0.62rem]"
                  >
                    Call
                  </CallButton>
                  <WhatsAppButton
                    href={whatsappLink(contact.whatsapp, defaultWhatsAppMessage)}
                    variant="gold"
                    className="!px-4 !py-3 text-[0.62rem]"
                  >
                    WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <p className="px-1 pt-1 text-[0.7rem] leading-relaxed text-navy/40">
              Messages sent through WhatsApp go directly to the selected
              representative. This website does not store enquiry details.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

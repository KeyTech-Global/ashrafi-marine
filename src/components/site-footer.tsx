import Link from "next/link";
import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contacts, navigation, products } from "@/content/site";
import { Logo } from "@/components/logo";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await copyrightYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-pearl">
      <div className="grain pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-teal/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="grid gap-12 border-b border-pearl/12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold">Wholesale dry fish · Madh Island, Mumbai</p>
            <p className="mt-6 max-w-xl font-display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.14]">
              Let&apos;s talk about your next{" "}
              <span className="italic text-gold-soft">dry fish requirement.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/wholesale"
                className="btn btn-gold"
              >
                Request a wholesale quote
              </Link>
              <a
                href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                WhatsApp the team
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-pearl/60">Explore</p>
              <ul className="mt-5 space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.88rem] text-pearl/65 transition-colors hover:text-gold-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-pearl/60">Products</p>
              <ul className="mt-5 space-y-3">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products#${product.slug}`}
                      className="text-[0.88rem] leading-snug text-pearl/65 transition-colors hover:text-gold-soft"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/wholesale"
                    className="text-[0.88rem] text-pearl/65 transition-colors hover:text-gold-soft"
                  >
                    Bulk supply enquiries
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-pearl/12 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" compact />
            <p className="mt-5 max-w-xs text-[0.85rem] leading-relaxed text-pearl/50">
              Dry fish merchant and wholesale supplier serving trade buyers,
              retailers, distributors and commercial buyers across India.
            </p>
          </div>

          <div>
            <p className="eyebrow text-pearl/60">Business office</p>
            <div className="mt-5 flex items-start gap-3 text-[0.88rem] leading-relaxed text-pearl/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
              <address className="not-italic">
                Madh Island
                <br />
                Mumbai, Maharashtra
                <br />
                India
              </address>
            </div>
            <p className="mt-4 text-[0.78rem] leading-relaxed text-pearl/60">
              Operating region: all over India
            </p>
          </div>

          <div>
            <p className="eyebrow text-pearl/60">Direct contact</p>
            <ul className="mt-5 space-y-4">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <p className="text-[0.88rem] font-semibold text-pearl/85">{contact.name}</p>
                  <a
                    href={contact.phoneHref}
                    className="mt-1 inline-flex items-center gap-2 text-[0.85rem] text-pearl/55 transition-colors hover:text-gold-soft"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                    {contact.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-pearl/60">Enquiries</p>
            <div className="mt-5 space-y-3">
              <a
                href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.85rem] text-pearl/65 transition-colors hover:text-gold-soft"
              >
                <MessageCircle className="h-4 w-4 text-teal-bright" strokeWidth={1.6} aria-hidden="true" />
                WhatsApp — Amin
              </a>
              <a
                href={whatsappLink(contacts[1].whatsapp, defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.85rem] text-pearl/65 transition-colors hover:text-gold-soft"
              >
                <MessageCircle className="h-4 w-4 text-teal-bright" strokeWidth={1.6} aria-hidden="true" />
                WhatsApp — Rehan
              </a>
              <a
                href={contacts[0].phoneHref}
                className="flex items-center gap-2 text-[0.85rem] text-pearl/65 transition-colors hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                Call the business
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-[0.85rem] text-pearl/65 transition-colors hover:text-gold-soft"
              >
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.72rem] tracking-wide text-pearl/60">
            © {year} Ashrafi Marine Products. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[0.72rem] tracking-wide text-pearl/60">
              Dry fish wholesale · Mumbai · India
            </p>
            <Link
              href="#top"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-pearl/20 text-pearl/60 transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowUp
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mb-[2.5vw] select-none overflow-hidden text-center font-display text-[19vw] leading-[0.78] tracking-[0.06em] text-pearl/[0.035] after:block after:content-['ASHRAFI']"
      />
    </footer>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { SiteImage } from "@/components/site-image";
import { contacts, navigation } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Page not found",
  description:
    "The page you were looking for could not be found. Explore the Ashrafi Marine Products range or contact the business directly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy pb-20 pt-32 text-pearl sm:pb-24 sm:pt-40">
      <div className="absolute inset-0" aria-hidden="true">
        <SiteImage
          imageKey="oceanAerial"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(8,127,131,0.3),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[34vw] leading-none tracking-tight text-pearl/[0.035] sm:-right-4"
      >
        404
      </div>

      <div className="wrap relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pearl/55">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-soft">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-pearl/75">
              404
            </li>
          </ol>
        </nav>

        <p className="eyebrow flex items-center gap-3 text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          Error 404
        </p>
        <h1 className="display-1 mt-6 max-w-3xl text-shadow-hero">
          This page has{" "}
          <span className="italic text-gold-soft">drifted.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-pearl/65 sm:text-[1.05rem]">
          The page you were looking for could not be found. The product range
          and wholesale enquiry pages are a good place to continue.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className="btn btn-gold">
            View the product range
            <ArrowRight className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          </Link>
          <Link href="/wholesale" className="btn btn-outline">
            Wholesale enquiry
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
            WhatsApp
          </a>
        </div>

        <div className="mt-16 max-w-2xl border-t border-pearl/15 pt-6">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-pearl/60">
            Explore the website
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.8rem] text-pearl/60 transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

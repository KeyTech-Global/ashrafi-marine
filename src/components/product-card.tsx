import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/content/site";
import { contacts } from "@/content/site";
import { productEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { SiteImage } from "@/components/site-image";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const whatsapp = whatsappLink(contacts[0].whatsapp, productEnquiryMessage(product.name));

  return (
    <article className="group relative flex h-full flex-col" id={product.slug}>
      <Link
        href={`/products#${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-navy/5"
        aria-label={`View ${product.name}`}
      >
        <SiteImage
          imageKey={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
          <span className="eyebrow text-pearl/80">{product.index}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-pearl/30 bg-navy/10 text-pearl backdrop-blur-sm transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="eyebrow text-gold-soft">{product.shortName}</p>
          <h3 className="mt-2 font-display text-[1.6rem] leading-tight text-pearl sm:text-[1.75rem]">
            {product.name}
          </h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <p className="body-copy">{product.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-navy/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/55"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-navy/10 pt-4">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-teal"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            WhatsApp enquiry
          </a>
          <Link
            href={`/wholesale?product=${product.slug}`}
            className="group/link inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-teal"
          >
            Request quote
            <span className="h-px w-5 bg-teal transition-all duration-500 group-hover/link:w-8" />
          </Link>
        </div>
      </div>
    </article>
  );
}

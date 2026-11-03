"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  categories,
  contacts,
  products,
  type Product,
} from "@/content/site";
import { productEnquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { SiteImage } from "@/components/site-image";
import { cn } from "@/lib/cn";

type Category = (typeof categories)[number];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductCatalogue() {
  const [active, setActive] = useState<Category>("All");
  const reduce = useReducedMotion();
  const visible =
    active === "All"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-navy/12 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((category) => {
            const count =
              category === "All"
                ? products.length
                : products.filter((product) => product.category === category)
                    .length;
            const selected = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={selected}
                className={cn(
                  "relative overflow-hidden rounded-full border px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300",
                  selected
                    ? "border-navy bg-navy text-pearl"
                    : "border-navy/15 bg-transparent text-navy/65 hover:border-navy/35 hover:text-navy",
                )}
              >
                {category === "All" ? "All products" : category}
                <span
                  className={cn(
                    "ml-2 text-[0.6rem]",
                    selected ? "text-gold" : "text-navy/60",
                  )}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy/60">
          {visible.length} {visible.length === 1 ? "product" : "products"} shown
        </p>
      </div>

      <div className="mt-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease }}
          >
            {visible.map((product, index) => (
              <ProductRow
                key={product.slug}
                product={product}
                reversed={index % 2 === 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductRow({
  product,
  reversed,
}: {
  product: Product;
  reversed: boolean;
}) {
  const whatsapp = whatsappLink(
    contacts[0].whatsapp,
    productEnquiryMessage(product.name),
  );

  return (
    <article
      id={product.slug}
      className="grid gap-8 border-b border-navy/12 py-12 first:pt-10 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-16"
    >
      <div
        className={cn(
          "lg:col-span-6",
          reversed ? "lg:order-2" : "lg:order-1",
        )}
      >
        <Link
          href={`/wholesale?product=${product.slug}`}
          className="group relative block aspect-[5/4] overflow-hidden bg-navy/5 sm:aspect-[4/3] lg:aspect-[5/4]"
          aria-label={`${product.index} — ${product.category}. Enquire about ${product.name}`}
        >
          <SiteImage
            imageKey={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/5 to-transparent" />
          <span className="absolute left-5 top-5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-pearl/75">
            {product.index} — {product.category}
          </span>
          <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-pearl/30 bg-navy/20 text-pearl backdrop-blur-sm transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>

      <div
        className={cn(
          "lg:col-span-6",
          reversed ? "lg:order-1" : "lg:order-2",
        )}
      >
        <p className="eyebrow flex items-center gap-3 text-teal">
          <span className="h-px w-7 bg-teal/40" aria-hidden="true" />
          {product.category} dry fish
        </p>
        <h3 className="display-3 mt-4">{product.name}</h3>
        <p className="body-copy mt-4 max-w-xl">{product.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-navy/12 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/65"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href={`/wholesale?product=${product.slug}`}
            className="btn btn-navy"
          >
            Enquire about {product.shortName}
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </Link>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <MessageCircle
              className="h-4 w-4"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            WhatsApp
          </a>
        </div>

        <p className="mt-4 text-[0.72rem] leading-relaxed text-navy/60">
          Availability and wholesale pricing are shared against your specific
          requirement. No prices are listed online.
        </p>
      </div>
    </article>
  );
}

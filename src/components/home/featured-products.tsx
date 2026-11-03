import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function FeaturedProducts() {
  return (
    <section className="border-t border-navy/10 py-20 sm:py-28">
      <div className="wrap">
        <SectionHeading
          index="02"
          label="The range"
          title={
            <>
              Dry fish, presented for{" "}
              <span className="italic text-teal">wholesale buyers.</span>
            </>
          }
          intro="A focused range of dry fish products for trade requirements, with availability and wholesale pricing confirmed directly against your enquiry."
          action={
            <Link href="/products" className="btn btn-outline-dark">
              View the full range
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[0.8rem] leading-relaxed text-navy/50">
              No prices are displayed on this website. Wholesale pricing is
              shared against the product, quantity and delivery location you
              confirm with the business.
            </p>
            <Link href="/wholesale" className="link-arrow shrink-0">
              Request wholesale pricing
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import type { ImageKey } from "@/content/images";
import { SiteImage } from "@/components/site-image";
import { TextLines } from "@/components/reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  imageKey,
  imageAlt,
  meta,
  current,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string[];
  description: ReactNode;
  imageKey: ImageKey;
  imageAlt?: string;
  meta?: string[];
  current: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70svh] items-end overflow-hidden bg-navy pb-12 pt-32 text-pearl sm:min-h-[76svh] sm:pb-16 sm:pt-40"
    >
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <SiteImage
          imageKey={imageKey}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(8,127,131,0.28),transparent_58%)]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="wrap relative z-10 w-full">
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-pearl/55">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-soft">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" strokeWidth={1.6} />
            </li>
            <li aria-current="page" className="text-pearl/80">
              {current}
            </li>
          </ol>
        </nav>

        <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "eyebrow flex items-center gap-3 text-gold",
              align === "center" && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            {eyebrow}
          </motion.p>

          <h1 className="display-1 mt-5 text-shadow-hero sm:mt-6">
            <TextLines lines={title} delay={0.08} />
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-pearl/70 sm:text-[1.05rem]">
              {description}
            </p>
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </div>

        {meta && meta.length > 0 && (
          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-pearl/15 pt-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-pearl/50"
          >
            {meta.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { SiteImage } from "@/components/site-image";
import { TextLines } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { contacts } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy text-pearl"
    >
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 -z-20"
        aria-hidden="true"
      >
        <SiteImage
          imageKey="heroHarbour"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,28,44,0.88)_0%,rgba(7,28,44,0.42)_36%,rgba(7,28,44,0.72)_72%,rgba(4,18,29,0.97)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_78%,rgba(8,127,131,0.34),transparent_55%),radial-gradient(ellipse_at_88%_12%,rgba(197,164,109,0.16),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="wrap relative z-10 flex flex-1 flex-col justify-end pb-8 pt-32 sm:pb-12 sm:pt-36"
      >
        <div className="max-w-[60rem]">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-pearl/70"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-gold">Madh Island, Mumbai</span>
            <span className="h-1 w-1 rounded-full bg-pearl/30" aria-hidden="true" />
            Dry fish wholesale across India
          </motion.p>

          <h1 className="display-1 mt-6 text-shadow-hero sm:mt-8">
            <TextLines
              delay={0.22}
              lines={[
                "Quality dry fish.",
                "Reliable wholesale",
                <span key="supply" className="text-gold-soft italic">
                  supply.
                </span>,
              ]}
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.68, ease }}
            className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-pearl/75 sm:text-[1.06rem]"
          >
            Your trusted business connection for dry fish wholesale and bulk
            marine product enquiries across India.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic strength={8}>
              <Link href="/products" className="btn btn-gold w-full sm:w-auto">
                Explore our products
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </Magnetic>
            <Magnetic strength={8}>
              <Link href="/wholesale" className="btn btn-outline w-full sm:w-auto">
                Request wholesale enquiry
              </Link>
            </Magnetic>
            <a
              href={whatsappLink(contacts[0].whatsapp, defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-1 py-2 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-pearl/70 transition-colors hover:text-gold-soft sm:ml-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-14 grid gap-6 border-t border-pearl/15 pt-6 sm:mt-20 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              "Wholesale dry fish",
              "Bulk quantity enquiries",
              "Buyers across India",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-pearl/55"
              >
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#business"
            className="group inline-flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-pearl/55 transition-colors hover:text-pearl"
          >
            Scroll to explore
            <span className="relative h-12 w-px overflow-hidden bg-pearl/20" aria-hidden="true">
              <span className="scroll-cue absolute inset-x-0 top-0 h-full bg-gold" />
            </span>
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-pearl/55 xl:flex"
      >
        <span className="h-px w-8 bg-pearl/30" />
        Dry fish wholesale · India
      </div>
    </section>
  );
}

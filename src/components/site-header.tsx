"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts, navigation } from "@/content/site";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-navy"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-navy/10 bg-pearl/92 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="wrap flex h-[4.6rem] items-center justify-between gap-6 sm:h-[5.25rem]">
          <Logo tone={solid ? "dark" : "light"} compact />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative rounded-sm px-3.5 py-2 text-[0.78rem] font-semibold tracking-[0.04em] transition-colors",
                    solid
                      ? active
                        ? "text-navy"
                        : "text-navy/60 hover:text-navy"
                      : active
                        ? "text-pearl"
                        : "text-pearl/70 hover:text-pearl",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left transition-transform duration-500",
                      solid ? "bg-gold" : "bg-gold",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={contacts[0].phoneHref}
              className={cn(
                "hidden items-center gap-2 text-[0.78rem] font-semibold tracking-wide transition-colors xl:inline-flex",
                solid ? "text-navy/70 hover:text-navy" : "text-pearl/75 hover:text-pearl",
              )}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
              {contacts[0].phoneDisplay}
            </a>

            <Link
              href="/wholesale"
              className={cn(
                "btn hidden !px-4 !py-3.5 text-[0.66rem] sm:inline-flex lg:!px-5",
                solid ? "btn-navy" : "btn-gold",
              )}
            >
              <span>Wholesale enquiry</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className={cn(
                "group relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                solid
                  ? "border-navy/15 text-navy hover:border-navy/40"
                  : "border-pearl/25 text-pearl hover:border-pearl/60",
              )}
            >
              <span className="sr-only">Open menu</span>
              <span className="flex w-5 flex-col items-end gap-[5px]" aria-hidden="true">
                <span className="h-px w-5 bg-current transition-all duration-300" />
                <span className="h-px w-3.5 bg-current transition-all duration-300 group-hover:w-5" />
              </span>
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className={cn(
            "h-[2px] origin-left bg-gold transition-opacity duration-300",
            solid ? "opacity-100" : "opacity-0",
          )}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-navy text-pearl lg:hidden"
          >
            <div className="grain absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="wrap relative z-10 flex min-h-full flex-col pb-10 pt-24 sm:pt-28">
              <div className="flex items-center justify-between">
                <Logo tone="light" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/25 text-pearl transition-colors hover:border-gold hover:text-gold"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-12 flex-1">
                <ul>
                  {navigation.map((item, index) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.08 + index * 0.055,
                          ease,
                        }}
                        className="border-b border-pearl/10"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between gap-6 py-4"
                          aria-current={active ? "page" : undefined}
                        >
                          <span className="flex items-baseline gap-4">
                            <span
                              className={cn(
                                "font-sans text-[0.6rem] font-semibold tracking-[0.2em]",
                                active ? "text-gold" : "text-pearl/60",
                              )}
                            >
                              0{index + 1}
                            </span>
                            <span
                              className={cn(
                                "font-display text-[1.9rem] leading-tight transition-colors sm:text-[2.3rem]",
                                active ? "text-gold" : "text-pearl group-hover:text-gold-soft",
                              )}
                            >
                              {item.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="h-5 w-5 text-pearl/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-gold"
                            strokeWidth={1.4}
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease }}
                className="mt-10"
              >
                <p className="eyebrow text-pearl/45">Direct business contact</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="rounded-sm border border-pearl/12 bg-pearl/[0.04] p-4"
                    >
                      <p className="font-display text-lg">{contact.name}</p>
                      <p className="mt-1 text-[0.78rem] text-pearl/55">
                        {contact.phoneDisplay}
                      </p>
                      <div className="mt-3 flex gap-2">
                        <a
                          href={contact.phoneHref}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-pearl/20 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-pearl transition-colors hover:border-pearl/50"
                        >
                          <Phone className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
                          Call
                        </a>
                        <a
                          href={whatsappLink(contact.whatsapp, defaultWhatsAppMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-gold px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-gold-soft"
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
                  ))}
                </div>
                <p className="mt-6 text-[0.7rem] leading-relaxed text-pearl/60">
                  Madh Island, Mumbai, Maharashtra · Wholesale enquiries across India
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

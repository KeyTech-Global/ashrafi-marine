"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contacts } from "@/content/site";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const ease = [0.22, 1, 0.36, 1] as const;

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-[max(1.1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            className="w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-sm border border-navy/10 bg-pearl shadow-[0_30px_80px_-24px_rgba(7,28,44,0.5)]"
            role="dialog"
            aria-label="Contact Ashrafi Marine Products on WhatsApp"
          >
            <div className="flex items-start justify-between gap-4 bg-navy px-5 py-4 text-pearl">
              <div>
                <p className="eyebrow text-gold">WhatsApp enquiries</p>
                <p className="mt-1.5 font-display text-lg leading-snug">
                  Choose a representative
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close WhatsApp contacts"
                className="mt-0.5 text-pearl/55 transition-colors hover:text-pearl"
              >
                <X className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              </button>
            </div>

            <div className="divide-y divide-navy/10">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center gap-3 px-4 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/10 font-display text-[0.8rem] text-teal">
                    {contact.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.85rem] font-semibold text-navy">{contact.name}</p>
                    <p className="text-[0.72rem] text-navy/50">{contact.phoneDisplay}</p>
                  </div>
                  <a
                    href={contact.phoneHref}
                    aria-label={`Call ${contact.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 text-navy/70 transition-colors hover:border-navy/40 hover:text-navy"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
                  </a>
                  <a
                    href={whatsappLink(contact.whatsapp, defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${contact.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#128C7E] text-white transition-colors hover:bg-[#0e7569]"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>

            <p className="border-t border-navy/10 bg-sand-soft/60 px-4 py-2.5 text-[0.68rem] leading-relaxed text-navy/55">
              Messages open in WhatsApp. Share your product, quantity and delivery
              location for a faster response.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp contact options" : "Contact us on WhatsApp"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-[0_14px_34px_-10px_rgba(18,140,126,0.75)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full border border-[#25D366]/60 ping-soft"
            aria-hidden="true"
          />
        )}
        {open ? (
          <X className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

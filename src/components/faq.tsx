import { Plus } from "lucide-react";
import { faqs } from "@/content/site";

export function FaqList() {
  return (
    <div className="divide-y divide-navy/12 border-y border-navy/12">
      {faqs.map((faq, index) => (
        <details key={faq.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden sm:py-6">
            <span className="flex items-start gap-4">
              <span className="mt-1 font-display text-[0.85rem] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.15rem] leading-snug text-navy sm:text-[1.3rem]">
                {faq.q}
              </span>
            </span>
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy/55 transition-all duration-300 group-open:rotate-45 group-open:border-teal group-open:text-teal"
              aria-hidden="true"
            >
              <Plus className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </summary>
          <div className="pb-6 pl-9 pr-12">
            <p className="max-w-2xl text-[0.88rem] leading-relaxed text-navy/60">
              {faq.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

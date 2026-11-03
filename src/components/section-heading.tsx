import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  index,
  label,
  title,
  intro,
  tone = "dark",
  align = "left",
  className,
  action,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  const muted = tone === "light" ? "text-pearl/60" : "text-navy/55";
  const text = tone === "light" ? "text-pearl" : "text-navy";

  return (
    <div
      className={cn(
        "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        <Reveal>
          <p
            className={cn(
              "eyebrow flex items-center gap-3",
              muted,
              align === "center" && "justify-center",
            )}
          >
            {index && <span className="text-gold">{index}</span>}
            <span
              className={cn(
                "h-px w-7",
                tone === "light" ? "bg-pearl/30" : "bg-navy/25",
              )}
              aria-hidden="true"
            />
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className={cn("display-2 mt-5", text)}>{title}</h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p
              className={cn(
                "lede mt-6 max-w-2xl",
                tone === "light" && "text-pearl/65",
                align === "center" && "mx-auto",
              )}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.2}>{action}</Reveal>}
    </div>
  );
}

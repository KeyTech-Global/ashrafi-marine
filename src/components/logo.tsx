import Link from "next/link";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

export function LogoMark({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "pearl" | "navy";
}) {
  const stroke =
    tone === "pearl" ? "#F8FAFA" : tone === "navy" ? "#071C2C" : "#C5A46D";
  const fish = tone === "pearl" ? "#F8FAFA" : "#C5A46D";

  return (
    <svg
      viewBox="0 0 48 48"
      role="presentation"
      aria-hidden="true"
      className={cn("h-11 w-11", className)}
      fill="none"
    >
      <circle
        cx="24"
        cy="24"
        r="22.4"
        stroke={stroke}
        strokeOpacity={tone === "pearl" ? 0.5 : 0.75}
        strokeWidth="1"
      />
      <path
        d="M12 22.6c4.1-6.5 12.7-7.9 18.5-3.6 1.9 1.4 3.4 3.2 4.4 5.1-1 1.9-2.5 3.7-4.4 5.1-5.8 4.3-14.4 2.9-18.5-3.6Z"
        fill={fish}
      />
      <path
        d="M35 24.1c2.3-2.2 4.3-3.6 5.7-4.4-.8 2.6-.8 6.2 0 8.8-1.4-.8-3.4-2.2-5.7-4.4Z"
        fill={fish}
      />
      <circle cx="17.2" cy="23.1" r="1.1" fill="#071C2C" />
      <path
        d="M10.8 34.4c3-2.5 6-2.5 9 0s6 2.5 9 0 6-2.5 9 0"
        stroke="#087F83"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
  href = "/",
  compact = false,
}: {
  tone?: Tone;
  className?: string;
  href?: string;
  compact?: boolean;
}) {
  const text = tone === "light" ? "text-pearl" : "text-navy";
  const sub = tone === "light" ? "text-pearl/55" : "text-navy/50";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <LogoMark
        tone={tone === "light" ? "gold" : "gold"}
        className={compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.06rem] tracking-[0.17em] sm:text-[1.16rem]",
            text,
          )}
        >
          ASHRAFI
        </span>
        <span
          className={cn(
            "mt-[0.32rem] text-[0.44rem] font-semibold tracking-[0.29em] sm:text-[0.48rem]",
            sub,
          )}
        >
          MARINE PRODUCTS
        </span>
      </span>
    </Link>
  );
}

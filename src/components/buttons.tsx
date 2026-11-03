import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "navy" | "outline" | "outline-dark";

type CommonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: "right" | "up" | "none";
};

const variants: Record<Variant, string> = {
  gold: "btn btn-gold",
  navy: "btn btn-navy",
  outline: "btn btn-outline",
  "outline-dark": "btn btn-outline-dark",
};

function Arrow({ kind }: { kind: "right" | "up" }) {
  return kind === "up" ? (
    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
  ) : (
    <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className,
  arrow = "right",
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={cn(variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow !== "none" && <Arrow kind={arrow} />}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant = "gold",
  className,
  arrow = "right",
  external,
  ...rest
}: CommonProps &
  Omit<ComponentProps<"a">, "href" | "className" | "children"> & {
    external?: boolean;
  }) {
  return (
    <a
      href={href}
      className={cn(variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <span>{children}</span>
      {arrow !== "none" && <Arrow kind={arrow} />}
    </a>
  );
}

export function WhatsAppButton({
  href,
  children = "WhatsApp",
  className,
  variant = "outline-dark",
  compact = false,
}: {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  compact?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variants[variant], compact && "px-4 py-3", className)}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export function CallButton({
  href,
  children = "Call",
  variant = "outline-dark",
  className,
}: {
  href: string;
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={href} className={cn(variants[variant], className)}>
      <Phone className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

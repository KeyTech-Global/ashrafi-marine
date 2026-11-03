"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Reveal key={index} delay={delay + index * 0.08}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

export function TextLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: Array<string | ReactNode>;
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={lineClassName ? `${lineClassName} block` : "block"}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.05,
              delay: delay + index * 0.11,
              ease,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

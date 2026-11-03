export function Marquee({
  items,
  tone = "dark",
  className,
}: {
  items: string[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const row = [...items, ...items];
  const isDark = tone === "dark";

  return (
    <div
      className={[
        "marquee group relative flex overflow-hidden border-y py-5",
        isDark ? "border-navy/12 bg-pearl" : "border-pearl/12 bg-navy",
        className ?? "",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="marquee-track items-center gap-0">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={[
              "flex shrink-0 items-center whitespace-nowrap px-6 font-display text-[1.05rem] tracking-wide sm:text-[1.2rem]",
              isDark ? "text-navy/60" : "text-pearl/60",
            ].join(" ")}
          >
            {item}
            <span
              className={["ml-12 h-1 w-1 rounded-full", isDark ? "bg-gold" : "bg-gold"].join(" ")}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

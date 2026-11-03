export function CoverageGraphic() {
  const nodes = [
    { name: "Delhi", x: 330, y: 110, lx: 330, ly: 92, anchor: "middle" },
    { name: "Ahmedabad", x: 155, y: 220, lx: 133, ly: 216, anchor: "end" },
    { name: "Kolkata", x: 455, y: 235, lx: 477, ly: 231, anchor: "start" },
    { name: "Hyderabad", x: 300, y: 405, lx: 318, ly: 410, anchor: "start" },
    { name: "Chennai", x: 345, y: 470, lx: 363, ly: 475, anchor: "start" },
    { name: "Bengaluru", x: 240, y: 470, lx: 222, ly: 475, anchor: "end" },
  ] as const;

  const arcs = [
    "M270 330 Q 292 214 330 110",
    "M270 330 Q 208 268 155 220",
    "M270 330 Q 380 258 455 235",
    "M270 330 Q 318 370 300 405",
    "M270 330 Q 332 408 345 470",
    "M270 330 Q 250 410 240 470",
  ];

  return (
    <div className="group relative overflow-hidden rounded-sm border border-navy/15 bg-navy shadow-soft">
      <svg
        viewBox="0 0 560 560"
        role="img"
        aria-label="Illustrative diagram of Indian cities connected to the Mumbai business office for wholesale enquiries"
        className="h-auto w-full"
      >
        <defs>
          <pattern id="coverage-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#F8FAFA" fillOpacity="0.13" />
          </pattern>
          <radialGradient id="coverage-glow" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#087F83" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#087F83" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="560" height="560" fill="#071C2C" />
        <rect width="560" height="560" fill="url(#coverage-dots)" />
        <circle cx="270" cy="330" r="210" fill="url(#coverage-glow)" />

        <g fill="none" stroke="#F8FAFA" strokeOpacity="0.09">
          <circle cx="270" cy="330" r="120" />
          <circle cx="270" cy="330" r="180" />
          <circle cx="270" cy="330" r="240" />
          <line x1="0" y1="330" x2="560" y2="330" strokeDasharray="2 8" />
          <line x1="270" y1="0" x2="270" y2="560" strokeDasharray="2 8" />
        </g>

        <g
          fill="none"
          stroke="#C5A46D"
          strokeOpacity="0.38"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="transition-opacity duration-700 group-hover:opacity-70"
        >
          {arcs.map((arc) => (
            <path key={arc} d={arc} />
          ))}
        </g>

        {nodes.map((node) => (
          <g key={node.name}>
            <circle cx={node.x} cy={node.y} r="8" fill="#C5A46D" fillOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r="3.6" fill="#C5A46D" />
            <text
              x={node.lx}
              y={node.ly}
              textAnchor={node.anchor}
              className="fill-pearl/55 text-[10px] font-semibold uppercase tracking-[0.14em]"
            >
              {node.name}
            </text>
          </g>
        ))}

        <g>
          <circle cx="270" cy="330" r="22" fill="none" stroke="#087F83" strokeOpacity="0.35" />
          <circle cx="270" cy="330" r="13" fill="none" stroke="#087F83" strokeOpacity="0.6" />
          <circle cx="270" cy="330" r="6.5" fill="#087F83" />
          <circle cx="270" cy="330" r="16" fill="none" stroke="#0B9BA0" strokeOpacity="0.5" className="ping-soft" style={{ transformOrigin: "270px 330px" }} />
          <text
            x="294"
            y="327"
            className="fill-pearl text-[12px] font-bold uppercase tracking-[0.18em]"
          >
            Mumbai
          </text>
          <text
            x="294"
            y="343"
            className="fill-gold-soft/80 text-[8.5px] font-semibold uppercase tracking-[0.18em]"
          >
            Madh Island
          </text>
        </g>

        <text
          x="28"
          y="38"
          className="fill-pearl/45 text-[9px] font-bold uppercase tracking-[0.22em]"
        >
          Enquiry coverage
        </text>
        <text
          x="532"
          y="38"
          textAnchor="end"
          className="fill-gold text-[9px] font-bold uppercase tracking-[0.22em]"
        >
          India
        </text>
        <line x1="28" y1="52" x2="532" y2="52" stroke="#F8FAFA" strokeOpacity="0.12" />
        <text
          x="28"
          y="534"
          className="fill-pearl/30 text-[8px] font-semibold uppercase tracking-[0.18em]"
        >
          Illustrative · not a map of offices
        </text>
        <text
          x="532"
          y="534"
          textAnchor="end"
          className="fill-pearl/30 text-[8px] font-semibold uppercase tracking-[0.18em]"
        >
          Wholesale enquiries
        </text>
      </svg>
    </div>
  );
}

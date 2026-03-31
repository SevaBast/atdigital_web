import { useEffect, useRef } from "react";

/* ─── animated neural-network banner ─── */

/*
  Two layouts: desktop uses all 11 nodes in a wide viewBox,
  mobile uses a compact 6-node subset in a taller, narrower viewBox.
  Both are pure SVG — no JS layout logic, just CSS class toggling.
*/

interface Node { x: number; y: number; label: string; r: number }

/* Desktop: 11 nodes, 1200×340 */
const desktopNodes: Node[] = [
  { x: 60,  y: 170, label: "IoT",            r: 7 },
  { x: 170, y: 55,  label: "3D Scanning",    r: 6 },
  { x: 300, y: 220, label: "Digital Twin",    r: 8 },
  { x: 420, y: 80,  label: "AI / ML",         r: 7 },
  { x: 540, y: 260, label: "Intralogistics",  r: 6 },
  { x: 600, y: 120, label: "Smart Factory",   r: 8 },
  { x: 750, y: 230, label: "Simulation",      r: 6 },
  { x: 830, y: 60,  label: "Analytics",       r: 7 },
  { x: 940, y: 190, label: "RTLS",            r: 6 },
  { x: 1060, y: 90, label: "Automation",      r: 7 },
  { x: 1140, y: 250, label: "Lean",           r: 6 },
];

const desktopConns = [
  [0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 4],
  [3, 5], [4, 5], [4, 6], [5, 6], [5, 7], [6, 7],
  [6, 8], [7, 8], [7, 9], [8, 9], [8, 10], [9, 10],
  [0, 3], [1, 5], [3, 6], [5, 8], [7, 10], [2, 5], [4, 7], [6, 9],
];

/* Mobile: 7 key nodes, 400×420 — bigger nodes & text, taller layout */
const mobileNodes: Node[] = [
  { x: 200, y: 40,  label: "AI / ML",        r: 10 },
  { x: 70,  y: 120, label: "IoT",            r: 9 },
  { x: 330, y: 130, label: "Digital Twin",   r: 10 },
  { x: 140, y: 220, label: "Smart Factory",  r: 10 },
  { x: 300, y: 250, label: "3D Scanning",    r: 9 },
  { x: 60,  y: 330, label: "Analytics",      r: 9 },
  { x: 260, y: 370, label: "Automation",     r: 9 },
];

const mobileConns = [
  [0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 4],
  [3, 4], [3, 5], [4, 6], [5, 6], [0, 3], [1, 4], [3, 6], [5, 3],
];

/* Shared rendering logic */
const renderNetwork = (
  nodes: Node[],
  conns: number[][],
  prefix: string,
) => (
  <>
    {/* connection lines */}
    {conns.map(([a, b], i) => {
      const na = nodes[a], nb = nodes[b];
      const mx = (na.x + nb.x) / 2;
      const my = (na.y + nb.y) / 2 + (i % 2 === 0 ? -20 : 12);
      return (
        <path
          key={`${prefix}c-${i}`}
          className="circuit-path"
          d={`M ${na.x} ${na.y} Q ${mx} ${my} ${nb.x} ${nb.y}`}
          stroke="hsl(200 95% 55% / 0.18)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      );
    })}

    {/* flowing particles */}
    {conns.map(([a, b], i) => {
      const na = nodes[a], nb = nodes[b];
      const mx = (na.x + nb.x) / 2;
      const my = (na.y + nb.y) / 2 + (i % 2 === 0 ? -20 : 12);
      const pid = `${prefix}fp-${i}`;
      return (
        <g key={`${prefix}p-${i}`}>
          <path id={pid} d={`M ${na.x} ${na.y} Q ${mx} ${my} ${nb.x} ${nb.y}`} fill="none" stroke="none" />
          <circle r="2" fill="hsl(200 95% 65% / 0.7)" filter="url(#softGlow)">
            <animateMotion dur={`${4 + (i % 5) * 0.8}s`} repeatCount="indefinite" begin={`${i * 0.3}s`}>
              <mpath href={`#${pid}`} />
            </animateMotion>
          </circle>
        </g>
      );
    })}

    {/* nodes */}
    {nodes.map((n, i) => (
      <g
        key={`${prefix}n-${i}`}
        className="opacity-0 animate-[fadeNode_0.6s_ease-out_forwards]"
        style={{ animationDelay: `${600 + i * 120}ms` }}
      >
        <circle
          cx={n.x} cy={n.y} r={n.r * 3}
          fill="url(#nodePulse)"
          className="animate-[pulse_4s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 350}ms` }}
        />
        <circle
          cx={n.x} cy={n.y} r={n.r}
          fill="hsl(200 95% 55% / 0.7)"
          stroke="hsl(200 95% 65% / 0.3)"
          strokeWidth="1"
          filter="url(#glow)"
        />
        <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill="hsl(200 100% 90% / 0.9)" />
        <text
          x={n.x}
          y={n.y > 200 ? n.y - n.r * 3 - 6 : n.y + n.r * 3 + 15}
          textAnchor="middle"
          fill="hsl(220 12% 65%)"
          fontSize={prefix === "m" ? "13" : "11"}
          fontWeight="500"
          letterSpacing="0.03em"
        >
          {n.label}
        </text>
      </g>
    ))}
  </>
);

const CircuitBanner = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgMobileRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animate = (svg: SVGSVGElement | null) => {
      if (!svg) return [] as Animation[];
      const paths = svg.querySelectorAll<SVGPathElement>(".circuit-path");
      const anims: Animation[] = [];
      paths.forEach((path, i) => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        anims.push(
          path.animate(
            [{ strokeDashoffset: `${len}` }, { strokeDashoffset: "0" }],
            { duration: 1400 + i * 80, delay: 200 + i * 60, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" },
          ),
        );
      });
      return anims;
    };

    const a1 = animate(svgRef.current);
    const a2 = animate(svgMobileRef.current);
    return () => { a1.forEach((a) => a.cancel()); a2.forEach((a) => a.cancel()); };
  }, []);

  /* shared SVG defs */
  const defs = (
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(200 95% 55% / 0.5)" />
        <stop offset="100%" stopColor="hsl(200 95% 55% / 0)" />
      </radialGradient>
      <linearGradient id="fadeL" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(220 20% 8%)" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(220 20% 8%)" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(220 20% 8%)" stopOpacity="0" />
        <stop offset="100%" stopColor="hsl(220 20% 8%)" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="fadeT" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(220 20% 8%)" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(220 20% 8%)" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fadeB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(220 20% 8%)" stopOpacity="0" />
        <stop offset="100%" stopColor="hsl(220 20% 8%)" stopOpacity="1" />
      </linearGradient>
    </defs>
  );

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Desktop SVG — hidden on mobile */}
        <svg
          ref={svgRef}
          viewBox="0 0 1200 340"
          className="hidden md:block w-full h-auto"
          fill="none"
          aria-hidden="true"
        >
          {defs}
          {renderNetwork(desktopNodes, desktopConns, "d")}
          <rect x="0" y="0" width="100" height="340" fill="url(#fadeL)" />
          <rect x="1100" y="0" width="100" height="340" fill="url(#fadeR)" />
        </svg>

        {/* Mobile SVG — visible only on small screens */}
        <svg
          ref={svgMobileRef}
          viewBox="0 0 400 420"
          className="block md:hidden w-full h-auto max-h-[380px] mx-auto"
          fill="none"
          aria-hidden="true"
        >
          {defs}
          {renderNetwork(mobileNodes, mobileConns, "m")}
          <rect x="0" y="0" width="400" height="40" fill="url(#fadeT)" />
          <rect x="0" y="380" width="400" height="40" fill="url(#fadeB)" />
        </svg>
      </div>
    </section>
  );
};

export default CircuitBanner;

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const STATS = [
  { value: "30+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "6", label: "Key Sectors" },
  { value: "100%", label: "Compliance Rate" },
];

const TopoVisual = () => (
  <svg
    viewBox="0 0 480 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full max-w-[420px]"
  >
    {/* Topographic contour rings — terrain cross-section */}
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <ellipse
        key={i}
        cx="240"
        cy="240"
        rx={20 + i * 24}
        ry={12 + i * 15}
        stroke="hsl(85 55% 45%)"
        strokeWidth={i === 1 ? "1.5" : "0.8"}
        strokeOpacity={0.12 + (9 - i) * 0.07}
        fill="none"
        transform={`rotate(${i * 4} 240 240)`}
      />
    ))}
    {[10, 11, 12, 13].map((i) => (
      <ellipse
        key={i}
        cx="240"
        cy="240"
        rx={20 + i * 24}
        ry={12 + i * 15}
        stroke="hsl(140 40% 55%)"
        strokeWidth="0.5"
        strokeOpacity={0.06}
        fill="none"
        transform={`rotate(${i * 4} 240 240)`}
      />
    ))}

    {/* Central survey point */}
    <circle cx="240" cy="240" r="4" fill="hsl(85 55% 45%)" opacity="0.9" />
    <circle cx="240" cy="240" r="10" stroke="hsl(85 55% 45%)" strokeWidth="1" opacity="0.4" fill="none" />
    <circle cx="240" cy="240" r="20" stroke="hsl(85 55% 45%)" strokeWidth="0.5" opacity="0.2" fill="none" />

    {/* Cross-hair */}
    <line x1="240" y1="200" x2="240" y2="225" stroke="hsl(85 55% 45%)" strokeWidth="1" opacity="0.5" />
    <line x1="240" y1="255" x2="240" y2="280" stroke="hsl(85 55% 45%)" strokeWidth="1" opacity="0.5" />
    <line x1="200" y1="240" x2="225" y2="240" stroke="hsl(85 55% 45%)" strokeWidth="1" opacity="0.5" />
    <line x1="255" y1="240" x2="280" y2="240" stroke="hsl(85 55% 45%)" strokeWidth="1" opacity="0.5" />

    {/* Scattered survey markers */}
    {([
      [120, 140], [360, 100], [80, 320], [400, 360], [340, 290], [150, 370],
    ] as [number, number][]).map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="2.5" fill="hsl(85 55% 45%)" opacity={0.25 + i * 0.06} />
        <circle cx={cx} cy={cy} r="6" stroke="hsl(85 55% 45%)" strokeWidth="0.5" opacity={0.1 + i * 0.03} fill="none" />
      </g>
    ))}

    {/* Connecting dashed lines */}
    <polyline
      points="120,140 240,240 360,100"
      stroke="hsl(85 55% 45%)"
      strokeWidth="0.5"
      strokeDasharray="4 6"
      opacity="0.12"
      fill="none"
    />
    <polyline
      points="80,320 240,240 400,360"
      stroke="hsl(140 40% 55%)"
      strokeWidth="0.5"
      strokeDasharray="4 6"
      opacity="0.1"
      fill="none"
    />

    {/* Elevation labels */}
    <text x="258" y="195" fill="hsl(85 55% 45%)" fontSize="9" opacity="0.35" fontFamily="'Syne', sans-serif" letterSpacing="1">1240m</text>
    <text x="258" y="148" fill="hsl(85 55% 45%)" fontSize="9" opacity="0.2" fontFamily="'Syne', sans-serif" letterSpacing="1">980m</text>
  </svg>
);

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{ background: "hsl(140 45% 11%)", fontFamily: "'Figtree', sans-serif" }}
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* "1991" watermark */}
      <div
        aria-hidden
        className="absolute right-0 bottom-12 select-none pointer-events-none"
        style={{
          fontSize: "clamp(10rem, 28vw, 24rem)",
          color: "hsl(140 40% 14%)",
          fontFamily: "'Fraunces', serif",
          fontWeight: 900,
          lineHeight: 0.85,
        }}
      >
        1991
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(140 35% 17% / 0.35) 1px, transparent 1px),
            linear-gradient(90deg, hsl(140 35% 17% / 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main content */}
      <div className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 flex items-center">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center w-full">

          {/* Left column */}
          <div
            className="flex flex-col"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            {/* Overline */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-block w-10 h-px"
                style={{ background: "hsl(85 55% 47%)" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "hsl(85 55% 47%)", fontFamily: "'Syne', sans-serif" }}
              >
                Est. 1991 · Kampala, Uganda
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 leading-[0.92]"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "hsl(0 0% 96%)",
                letterSpacing: "-0.02em",
              }}
            >
              Practical
              <br />
              <em style={{ color: "hsl(85 55% 50%)", fontStyle: "italic", fontWeight: 300 }}>
                Environmental
              </em>
              <br />
              Solutions.
            </h1>

            {/* Body */}
            <p
              className="mb-10 leading-relaxed max-w-lg"
              style={{
                color: "hsl(140 15% 60%)",
                fontSize: "1.05rem",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300,
              }}
            >
              Uganda's foremost environmental consultancy. We deliver rigorous audits,
              impact assessments, and compliance strategies that enable organisations
              to develop responsibly — protecting ecosystems while driving progress.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 transition-all duration-300"
                style={{
                  background: "hsl(85 55% 47%)",
                  color: "hsl(140 45% 9%)",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Get a Consultation
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 transition-all duration-300"
                style={{
                  color: "hsl(140 15% 70%)",
                  border: "1px solid hsl(140 25% 28%)",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                View Our Work
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>

            {/* Sector tags */}
            <div className="flex flex-wrap gap-2">
              {["Mining & Minerals", "Oil & Gas", "Infrastructure", "Agriculture", "Urban Dev", "Wetlands"].map((tag) => (
                <Link
                  key={tag}
                  to="/sectors"
                  className="text-xs px-3 py-1.5 transition-colors duration-200"
                  style={{
                    color: "hsl(140 20% 50%)",
                    border: "1px solid hsl(140 30% 20%)",
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Right column: topographic visual */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 1.1s ease 0.2s, transform 1.1s ease 0.2s",
            }}
          >
            <TopoVisual />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-10 w-full border-t"
        style={{ borderColor: "hsl(140 35% 18%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="py-6 px-4 flex flex-col gap-0.5"
              style={{ borderRight: i < 3 ? "1px solid hsl(140 35% 18%)" : "none" }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: "hsl(85 55% 50%)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                className="text-xs mt-1"
                style={{
                  color: "hsl(140 15% 45%)",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

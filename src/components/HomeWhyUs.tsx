import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    label: "Field-Proven Expertise",
    body: "Over three decades conducting audits across Uganda's most challenging terrains — from wetlands and national parks to industrial corridors and oil fields.",
  },
  {
    label: "Regulatory Depth",
    body: "Deep knowledge of NEMA frameworks, Uganda's Environmental Act, and international standards including IFC Performance Standards and World Bank guidelines.",
  },
  {
    label: "Stakeholder Trust",
    body: "We engage communities, government bodies, and investors with equal rigour — building lasting relationships that outlive any single project.",
  },
];

const HomeWhyUs = () => (
  <section
    style={{ background: "hsl(140 45% 13%)", fontFamily: "'Figtree', sans-serif" }}
    className="relative overflow-hidden"
  >
    {/* Background accent */}
    <div
      className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, hsl(85 55% 30% / 0.12), transparent 70%)",
      }}
    />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 relative z-10">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

        {/* Left: editorial statement */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-8 h-px" style={{ background: "hsl(85 55% 47%)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "hsl(85 55% 47%)", fontFamily: "'Syne', sans-serif" }}
            >
              Why Gissat
            </span>
          </div>

          <h2
            className="mb-8"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "hsl(0 0% 96%)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Uganda's environment
            <br />
            demands more than
            <br />
            <em style={{ color: "hsl(85 55% 50%)", fontWeight: 300, fontStyle: "italic" }}>
              compliance.
            </em>
          </h2>

          <p
            className="mb-10 leading-relaxed max-w-md"
            style={{
              color: "hsl(140 15% 58%)",
              fontSize: "1rem",
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 300,
            }}
          >
            Uganda sits at the heart of one of the world's most biodiverse regions.
            Development here carries weight — for Lake Victoria, the Albertine Rift, and the
            communities who depend on them. We don't treat environmental work as a checkbox.
            We treat it as a responsibility.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5"
            style={{
              background: "transparent",
              color: "hsl(0 0% 90%)",
              border: "1px solid hsl(140 25% 32%)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            About Gissat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right: pillars */}
        <div className="flex flex-col gap-0 divide-y" style={{ borderColor: "hsl(140 35% 20%)" }}>
          {PILLARS.map((p, i) => (
            <div key={i} className="py-8 first:pt-0">
              <div className="flex items-start gap-5">
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "hsl(85 55% 42%)",
                    paddingTop: "3px",
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "hsl(0 0% 92%)",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "hsl(140 15% 52%)",
                      fontFamily: "'Figtree', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeWhyUs;

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Environmental Audits",
    desc: "Systematic, independent evaluation of environmental performance against legal and operational standards.",
    href: "/services",
  },
  {
    num: "02",
    title: "Environmental Impact Assessment",
    desc: "Rigorous pre-project analysis identifying environmental risks before development begins.",
    href: "/services",
  },
  {
    num: "03",
    title: "Environmental Monitoring",
    desc: "Ongoing measurement and reporting of air, water, and soil quality across project lifecycles.",
    href: "/services",
  },
  {
    num: "04",
    title: "Strategic Environmental Assessment",
    desc: "High-level policy and programme assessments informing government and institutional planning.",
    href: "/services",
  },
  {
    num: "05",
    title: "Waste Management",
    desc: "Integrated waste reduction strategies, compliance frameworks, and disposal planning.",
    href: "/services",
  },
  {
    num: "06",
    title: "Resettlement Action Plans",
    desc: "Equitable frameworks for communities affected by infrastructure and development projects.",
    href: "/services",
  },
];

const HomeServices = () => (
  <section
    style={{ background: "hsl(140 10% 97%)", fontFamily: "'Figtree', sans-serif" }}
    className="relative overflow-hidden"
  >
    {/* Decorative vertical text */}
    <div
      aria-hidden
      className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden xl:block"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "translateY(-50%) rotate(180deg)",
        color: "hsl(140 15% 88%)",
        fontFamily: "'Fraunces', serif",
        fontWeight: 700,
        fontSize: "7rem",
        letterSpacing: "-0.04em",
        lineHeight: 1,
      }}
    >
      Services
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 xl:pl-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-8 h-px"
              style={{ background: "hsl(85 55% 40%)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "hsl(85 55% 40%)", fontFamily: "'Syne', sans-serif" }}
            >
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "hsl(140 45% 15%)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            End-to-end
            <br />
            <em style={{ fontWeight: 300, fontStyle: "italic", color: "hsl(140 35% 35%)" }}>
              environmental expertise.
            </em>
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold self-start md:self-auto"
          style={{
            color: "hsl(140 45% 22%)",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "0.06em",
            textDecoration: "none",
            borderBottom: "1px solid hsl(140 35% 60%)",
            paddingBottom: "2px",
          }}
        >
          All Services
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Service cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "hsl(140 15% 86%)" }}>
        {SERVICES.map((s) => (
          <Link
            key={s.num}
            to={s.href}
            className="group flex flex-col p-8 transition-all duration-300"
            style={{ background: "hsl(140 10% 97%)", textDecoration: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "hsl(140 45% 14%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "hsl(140 10% 97%)";
            }}
          >
            <ServiceCard {...s} />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) => (
  <>
    <span
      className="mb-6 block"
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.18em",
        color: "hsl(85 55% 42%)",
      }}
    >
      {num}
    </span>
    <h3
      className="mb-3 group-hover:text-white transition-colors duration-300"
      style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 600,
        fontSize: "1.2rem",
        color: "hsl(140 45% 18%)",
        lineHeight: 1.2,
      }}
    >
      {title}
    </h3>
    <p
      className="text-sm leading-relaxed flex-1 group-hover:text-white/60 transition-colors duration-300"
      style={{
        color: "hsl(140 10% 45%)",
        fontFamily: "'Figtree', sans-serif",
        fontWeight: 300,
      }}
    >
      {desc}
    </p>
    <div
      className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold group-hover:text-lime-300 transition-colors duration-300"
      style={{
        color: "hsl(85 55% 42%)",
        fontFamily: "'Syne', sans-serif",
        letterSpacing: "0.08em",
      }}
    >
      Learn more
      <ArrowUpRight className="w-3.5 h-3.5" />
    </div>
  </>
);

export default HomeServices;

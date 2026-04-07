import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeCTA = () => (
  <section
    style={{ background: "hsl(85 52% 42%)", fontFamily: "'Figtree', sans-serif" }}
    className="relative overflow-hidden"
  >
    {/* Decorative rings */}
    <div
      aria-hidden
      className="absolute -right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${i * 120}px`,
            height: `${i * 120}px`,
            borderColor: "hsl(140 45% 25% / 0.15)",
            top: `${-i * 60}px`,
            left: `${-i * 60}px`,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] mb-4"
            style={{
              color: "hsl(140 45% 20%)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Ready to work with us?
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "hsl(140 45% 12%)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Start with a
            <br />
            <em style={{ fontWeight: 300, fontStyle: "italic" }}>free consultation.</em>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 transition-all duration-200"
            style={{
              background: "hsl(140 45% 14%)",
              color: "hsl(85 55% 50%)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 transition-all duration-200"
            style={{
              background: "transparent",
              color: "hsl(140 45% 14%)",
              border: "1px solid hsl(140 45% 25%)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeCTA;

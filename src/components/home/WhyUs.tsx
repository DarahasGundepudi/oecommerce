"use client";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "@/components/MagneticButton";
import { ParticleField } from "@/components/ParticleField";
import flowers from "@/assets/flowers-spread.jpg";

const REASONS = [
  { title: "100% Natural", copy: "No additives, no synthetics — only what the plant gave us." },
  { title: "No Preservatives", copy: "Stable shelf life through process, not chemistry." },
  { title: "Export Quality", copy: "FSSAI, ISO and globally compliant batches." },
  { title: "Hygienic Processing", copy: "Stainless-steel facility, lab-tested at every stage." },
  { title: "Sustainable Farming", copy: "Regenerative practices, drying, water recycling." },
  { title: "Custom Packaging", copy: "From sachets to 25 kg drums — your way." },
  { title: "Private Labelling", copy: "Your brand, our craftsmanship — end-to-end." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-forest-grad py-32 text-cream lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.86 0.17 82 / 0.55), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.45em] text-turmeric">
              Why Phyto Health Organics
            </span>
            <h2 className="mt-3 text-display text-[clamp(36px,5vw,72px)] leading-[1.02] text-cream">
              The standard, <em className="not-italic shimmer-text">non-negotiable</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-cream/75 leading-relaxed">
            Seven uncompromising commitments — embedded in every batch we ship, from a single sachet
            to a thousand drums.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-cream/12 bg-cream/8 p-7 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-turmeric/55 hover:bg-cream/10 hover:shadow-[0_18px_55px_oklch(0.12_0.04_155_/_0.22)] ${
                i < 3 ? "lg:col-span-4" : "lg:col-span-3"
              }`}
            >
              <div className="text-display text-2xl text-cream">{r.title}</div>
              <p className="mt-3 text-sm text-cream/75 leading-relaxed">{r.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative flower band */}
      <div className="relative mx-auto mt-24 max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
          <img
            src={flowers}
            alt=""
            loading="lazy"
            className="h-[44vh] min-h-[300px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/65 via-forest-deep/20 to-transparent" />
          <ParticleField density={50} />
          <div className="absolute inset-0 flex items-center px-8 lg:px-16">
            <div className="max-w-xl text-cream">
              <h3 className="text-display text-[clamp(28px,3.6vw,48px)] leading-tight">
                Eighteen powders. Infinite possibilities.
              </h3>
              <p className="mt-4 text-cream/85">
                Vegetable, fruit, flower and superfood — formulated for food, wellness, cosmetics
                and nutraceuticals.
              </p>
              <div className="mt-6">
                <Link to="/products">
                  <MagneticButton variant="gold">See the Range</MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/Hero.jsx
import Image from "next/image";
import { ArrowRight, ShieldCheck, Video, Award } from "lucide-react";

export default function Hero({ content, onOpenBooking }) {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[var(--border-color)]/50">
      {/* Subtle organic background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[var(--primary-light)]/40 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[var(--secondary)]/30 blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* SEO Location Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[var(--surface-alt)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Exactly One H1 per assignment & SEO rules */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.12] tracking-tight text-[var(--ink)]">
              {hero.h1}
            </h1>

            {/* Benefit-driven Subheadline */}
            <p className="text-base sm:text-lg text-[var(--ink-muted)] leading-relaxed max-w-2xl font-normal">
              {hero.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-base font-semibold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] bg-white/80 hover:bg-white text-[var(--ink)] text-base font-medium px-6 py-3.5 rounded-full transition-all hover:border-[var(--primary)]"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Trust Strip matching professional credibility */}
            <div className="pt-6 sm:pt-8 border-t border-[var(--border-color)]/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--ink)] leading-snug">
                    {hero.trustBadges[0].title}
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)]">
                    {hero.trustBadges[0].desc}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--ink)] shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--ink)] leading-snug">
                    {hero.trustBadges[1].title}
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)]">
                    {hero.trustBadges[1].desc}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--ink)] leading-snug">
                    {hero.trustBadges[2].title}
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)]">
                    {hero.trustBadges[2].desc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Border */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl border-2 border-[var(--border-color)] -rotate-1 pointer-events-none"
              />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[var(--surface-alt)]">
                <Image
                  src={hero.heroImage}
                  alt={hero.heroAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent" />

                {/* Floating Office Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Santa Monica Practice
                    </p>
                    <p className="text-xs font-medium text-[var(--ink)]">
                      123th Street 45 W, Suite 200
                    </p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-[var(--primary-light)] text-[var(--primary)]">
                    Now Welcoming Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

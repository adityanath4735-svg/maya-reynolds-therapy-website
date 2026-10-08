// src/components/HowWeWork.jsx
import Image from "next/image";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function HowWeWork({ content, onOpenBooking }) {
  const { howWeWork } = content;

  return (
    <section id="approach" className="py-16 md:py-24 bg-[var(--surface)] border-b border-[var(--border-color)]/60 scroll-mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[var(--border-color)]">
              <Image
                src="/images/service-anxiety.jpg"
                alt="A tranquil, sunlit therapy office space promoting calm and grounded reflection in Santa Monica"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Callout Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl border border-[var(--border-color)] shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)]">
                    Evidence-Based Integration
                  </h4>
                  <p className="text-[11px] text-[var(--ink-muted)]">
                    CBT, EMDR & Somatic practices tailored to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Modalities */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                {howWeWork.eyebrow}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-[var(--ink)]">
                {howWeWork.heading}
              </h2>
              <p className="text-base text-[var(--ink-muted)] font-medium pt-1">
                {howWeWork.subheading}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
              {howWeWork.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Modalities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {howWeWork.modalitiesList.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--surface-alt)] p-4 rounded-xl border border-[var(--border-color)]/60 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-bold text-[var(--ink)]">
                      {m.title}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--ink-muted)] leading-normal pl-7">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                <span>{howWeWork.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

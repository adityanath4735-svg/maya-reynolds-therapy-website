// src/components/CtaBanner.jsx
import { Calendar, PhoneCall, Sparkles } from "lucide-react";

export default function CtaBanner({ content, onOpenBooking }) {
  const { ctaBanner } = content;

  return (
    <section className="py-20 md:py-28 bg-[var(--surface-alt)] relative overflow-hidden border-b border-[var(--border-color)]/60">
      {/* Decorative ambient gradients */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--primary-light)]/60 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-[var(--border-color)] shadow-xl">
          <div className="inline-flex items-center gap-2 bg-[var(--surface-alt)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--primary)]">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{ctaBanner.badge}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[var(--ink)]">
            {ctaBanner.heading}
          </h2>

          <p className="text-base sm:text-lg text-[var(--ink-muted)] leading-relaxed max-w-xl mx-auto">
            {ctaBanner.subheading}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-base font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>{ctaBanner.buttonPrimary}</span>
            </button>

            <a
              href="tel:3105550194"
              className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] bg-[var(--surface-alt)] hover:bg-white text-[var(--ink)] text-base font-medium px-7 py-4 rounded-full transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[var(--accent)]" />
              <span>(310) 555-0194</span>
            </a>
          </div>

          <p className="text-xs text-[var(--ink-muted)] pt-2 font-medium">
            {ctaBanner.directContact}
          </p>
        </div>
      </div>
    </section>
  );
}

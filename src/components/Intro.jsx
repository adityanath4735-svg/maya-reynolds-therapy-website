// src/components/Intro.jsx
import { HeartHandshake } from "lucide-react";

export default function Intro({ content }) {
  const { intro } = content;

  return (
    <section className="py-16 md:py-24 bg-[var(--surface-alt)]/60 border-b border-[var(--border-color)]/60">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            <HeartHandshake className="w-4 h-4" />
            <span>{intro.eyebrow}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[var(--ink)]">
            {intro.heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[var(--ink-muted)] leading-relaxed text-left sm:text-center font-normal pt-2">
            {intro.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="pt-4 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-[var(--primary)] opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

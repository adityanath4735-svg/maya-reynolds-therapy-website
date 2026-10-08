// src/components/ExpertisePills.jsx
import { CheckCircle2 } from "lucide-react";

export default function ExpertisePills({ content }) {
  const { expertisePills } = content;

  return (
    <section className="py-14 md:py-20 bg-[var(--surface-alt)] border-b border-[var(--border-color)]/60">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            {expertisePills.eyebrow}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--ink)]">
            {expertisePills.heading}
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 max-w-4xl mx-auto">
          {expertisePills.items.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[var(--border-color)] text-xs sm:text-sm font-medium text-[var(--ink)] shadow-xs hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors hover:shadow"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

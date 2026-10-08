// src/components/WhoWeHelp.jsx
import { Briefcase, Zap, ShieldAlert, ArrowUpRight } from "lucide-react";

export default function WhoWeHelp({ content, onOpenBooking }) {
  const { whoWeHelp } = content;

  const iconMap = {
    "high-achievers": <Briefcase className="w-5 h-5" />,
    "anxiety-panic": <Zap className="w-5 h-5" />,
    "trauma-recovery": <ShieldAlert className="w-5 h-5" />,
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--surface)] border-b border-[var(--border-color)]/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            {whoWeHelp.eyebrow}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)]">
            {whoWeHelp.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)]">
            {whoWeHelp.introText}
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whoWeHelp.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                    {iconMap[card.id] || <Briefcase className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--surface-alt)] text-[var(--ink-muted)]">
                    {card.tag}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h3 className="font-heading text-2xl font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--accent)] tracking-wide">
                    {card.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[var(--ink-muted)] leading-relaxed pt-1">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] flex items-center gap-1 transition-colors"
                >
                  <span>Discuss this with Dr. Reynolds</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

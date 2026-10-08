// src/components/Services.jsx
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Services({ content, onOpenBooking }) {
  const { services } = content;

  return (
    <section id="services" className="py-16 md:py-24 bg-[var(--surface)] border-b border-[var(--border-color)]/60 scroll-mt-12">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            {services.eyebrow}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)]">
            {services.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)]">
            {services.subheading}
          </p>
        </div>

        {/* 3 Featured Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.cards.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with smooth zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-alt)]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="font-heading text-2xl font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-[var(--accent)] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="pt-2 space-y-2 border-t border-gray-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                      Key Outcomes:
                    </p>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[var(--ink)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--surface-alt)] hover:bg-[var(--primary)] text-[var(--ink)] hover:text-white font-semibold text-xs transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

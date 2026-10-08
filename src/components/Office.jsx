// src/components/Office.jsx
// PART 3: The Custom "Our Office" Section
// Completely new section not present in original template, seamlessly integrated.
import Image from "next/image";
import { MapPin, Sun, ShieldCheck, Armchair, Video, Navigation } from "lucide-react";

export default function Office({ content, onOpenBooking }) {
  const { office } = content;

  return (
    <section id="office" className="py-16 md:py-24 bg-[var(--surface)] border-b border-[var(--border-color)]/60 scroll-mt-12">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            <Armchair className="w-4 h-4" />
            <span>{office.badge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)]">
            {office.heading}
          </h2>
          <p className="text-base text-[var(--ink-muted)] max-w-2xl mx-auto">
            {office.subheading}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Office Story, Address & Feature Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--surface-alt)] p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[var(--ink)]">
                  Physical Practice Location
                </h4>
                <p className="text-xs text-[var(--ink-muted)]">
                  {office.addressNote}
                </p>
                <div className="pt-1 flex items-center gap-3 text-[11px] text-[var(--primary)] font-semibold">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3 h-3" /> Dedicated Parking Available
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
              {office.description}
            </p>

            {/* Office Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {office.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-[var(--border-color)]/60 shadow-xs space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-[10px]">
                      {idx === 0 && <Sun className="w-3 h-3" />}
                      {idx === 1 && <ShieldCheck className="w-3 h-3" />}
                      {idx === 2 && <Armchair className="w-3 h-3" />}
                      {idx === 3 && <MapPin className="w-3 h-3" />}
                    </div>
                    <span className="text-xs font-bold text-[var(--ink)]">
                      {feature.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)] leading-normal pl-6">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Telehealth Callout */}
            <div className="p-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary-light)]/40 flex items-center gap-3">
              <Video className="w-5 h-5 text-[var(--primary)] shrink-0" />
              <p className="text-xs text-[var(--ink)] font-medium leading-relaxed">
                {office.telehealthNote}
              </p>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                <span>Schedule an In-Person Session</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Image Collage from Profile */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Large Image */}
              <div className="sm:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)] group">
                <Image
                  src={office.images[0].src}
                  alt={office.images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xs font-bold tracking-wide">
                    {office.images[0].caption}
                  </p>
                  <p className="text-[10px] text-white/80">
                    Quiet, comfortable armchairs and natural light
                  </p>
                </div>
              </div>

              {/* Secondary Image 1 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[var(--border-color)] group">
                <Image
                  src={office.images[1].src}
                  alt={office.images[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <p className="text-xs font-bold">{office.images[1].caption}</p>
                </div>
              </div>

              {/* Secondary Image 2 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[var(--border-color)] group">
                <Image
                  src={office.images[2].src}
                  alt={office.images[2].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-white">
                  <p className="text-xs font-bold">{office.images[2].caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/About.jsx
import Image from "next/image";
import { Award, CheckCircle2, MapPin, Calendar } from "lucide-react";

export default function About({ content, onOpenBooking }) {
  const { about } = content;

  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--surface-alt)]/60 border-b border-[var(--border-color)]/60 scroll-mt-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer decorative ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-3.5 rounded-3xl border-2 border-[var(--border-color)] rotate-1 pointer-events-none"
              />

              {/* Headshot Card */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[var(--surface)]">
                <Image
                  src={about.image}
                  alt={about.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent" />

                {/* Floating Credential Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--ink)]">
                        Dr. Maya Reynolds, PsyD
                      </p>
                      <p className="text-[11px] text-[var(--ink-muted)]">
                        Licensed Clinical Psychologist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                {about.eyebrow}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-[var(--ink)]">
                {about.heading}
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium text-[var(--ink-muted)] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Practicing in Santa Monica, CA & Statewide Telehealth</span>
              </div>
            </div>

            {/* Paragraphs in her authentic voice */}
            <div className="space-y-4 text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quote block */}
            <div className="border-l-2 border-[var(--accent)] pl-4 py-1 italic font-heading text-lg sm:text-xl text-[var(--ink)]">
              {about.quote}
            </div>

            {/* Credentials Badges */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-2.5">
                Credentials & Background:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {about.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-[var(--ink)] bg-white px-3 py-2 rounded-lg border border-[var(--border-color)]/70 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

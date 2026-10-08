// src/components/QuoteBanner.jsx

export default function QuoteBanner({ content }) {
  const { quoteBanner } = content;

  return (
    <section className="py-20 md:py-28 bg-[var(--primary)] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight text-white/95">
            {quoteBanner.quote}
          </blockquote>
          <p className="text-sm sm:text-base uppercase tracking-widest text-[var(--secondary)] font-medium">
            — {quoteBanner.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}

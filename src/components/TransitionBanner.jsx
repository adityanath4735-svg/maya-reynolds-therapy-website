// src/components/TransitionBanner.jsx

export default function TransitionBanner({ content }) {
  const { transitionBanner } = content;

  return (
    <div className="py-12 sm:py-16 bg-[var(--surface-alt)] border-b border-[var(--border-color)]/60 text-center">
      <div className="container-custom max-w-3xl">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-[var(--ink)]">
          {transitionBanner.text}
        </h2>
      </div>
    </div>
  );
}

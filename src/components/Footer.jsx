// src/components/Footer.jsx
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ content, onOpenBooking }) {
  const { footer, practitioner } = content;

  return (
    <footer id="contact" className="bg-[var(--surface-alt)] border-t border-[var(--border-color)] text-[var(--ink)] pt-16 pb-24 md:pb-16">
      <div className="container-custom space-y-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
                {practitioner.name}
              </span>
              <p className="text-xs uppercase tracking-wider text-[var(--primary)] font-semibold">
                {practitioner.title}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
              {footer.bioSummary}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Request a Consultation</span>
              </button>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Navigation & Care
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-muted)]">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--primary)] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Direct Contact (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Santa Monica Office & Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[var(--ink-muted)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{footer.addressBlock.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <a
                  href={`tel:${footer.addressBlock.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-[var(--primary)] font-medium"
                >
                  {footer.addressBlock.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <a
                  href={`mailto:${footer.addressBlock.email}`}
                  className="hover:text-[var(--primary)] font-medium"
                >
                  {footer.addressBlock.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[var(--ink-muted)] shrink-0 mt-0.5" />
                <span className="text-[11px]">{practitioner.hours}</span>
              </div>
            </div>

            {/* Serving Areas */}
            <div className="pt-2 text-[11px] text-[var(--ink-muted)] border-t border-[var(--border-color)]/70">
              <span className="font-semibold text-[var(--ink)]">Serving: </span>
              {footer.serviceLocations}
            </div>
          </div>
        </div>

        {/* Emergency Mental Health Notice */}
        <div className="p-4 rounded-xl bg-white border border-[var(--border-color)]/80 text-[11px] text-[var(--ink-muted)] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
          <p>{footer.disclaimer}</p>
        </div>

        {/* Bottom Bar: Copyright & Professional Ethics */}
        <div className="pt-6 border-t border-[var(--border-color)]/70 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--ink-muted)]">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Practice</span>
            <span>•</span>
            <span>Good Faith Estimate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

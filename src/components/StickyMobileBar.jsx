// src/components/StickyMobileBar.jsx
"use client";

import { Calendar, Phone } from "lucide-react";

export default function StickyMobileBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[var(--border-color)] p-3 flex items-center gap-3 sm:hidden shadow-2xl">
      <a
        href="tel:3105550194"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-[var(--border-color)] bg-[var(--surface-alt)] text-[var(--ink)] text-xs font-semibold"
      >
        <Phone className="w-3.5 h-3.5 text-[var(--primary)]" />
        <span>(310) 555-0194</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-[1.4] inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[var(--primary)] text-white text-xs font-semibold shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Consultation</span>
      </button>
    </div>
  );
}

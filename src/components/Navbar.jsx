"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X, Calendar, Sparkles, ChevronDown } from "lucide-react";

export default function Navbar({ content, onOpenBooking, activeTheme, onThemeChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themes = [
    { id: "sage", name: "Calm Sage & Sand (Default)", tag: "Dr. Maya" },
    { id: "ocean", name: "Ocean Mist & Sun", tag: "Santa Monica" },
    { id: "clay", name: "Warm Terracotta", tag: "Grounded" },
    { id: "conejo", name: "Conejo Valley Palette", tag: "Original Clone" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Location Bar */}
      <div className="bg-[var(--primary)] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="container-custom flex justify-between items-center text-xs tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5" />
              123th Street 45 W, Santa Monica, CA 90401
            </span>
            <span className="opacity-40">•</span>
            <span className="opacity-90">In-Person & California Telehealth</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:3105550194"
              className="flex items-center gap-1.5 hover:underline font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              (310) 555-0194
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b border-[var(--border-color)]/60 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-sm"
            : "bg-[var(--surface)]/95 backdrop-blur-md py-4 sm:py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo & Practitioner Branding */}
          <Link href="/" className="flex flex-col group">
            <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
              {content.nav.brand}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[var(--ink-muted)] font-medium">
              {content.nav.brandSubtitle}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {content.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme & Palette Switcher (Interactive proof of design systems & re-theming) */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--surface-alt)] hover:bg-[var(--secondary)] text-[var(--ink)] transition-colors"
                title="Preview Re-theme Palettes"
              >
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="hidden md:inline">Theme:</span>
                <span className="capitalize font-semibold">{activeTheme}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {themeDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-[var(--border-color)] p-2 z-50 text-xs"
                  onMouseLeave={() => setThemeDropdownOpen(false)}
                >
                  <div className="px-2 py-1.5 font-semibold text-[var(--ink-muted)] uppercase tracking-wider text-[10px] border-b border-gray-100">
                    Switch Theme Palette
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onThemeChange(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between transition-colors ${
                        activeTheme === t.id
                          ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                          : "hover:bg-gray-50 text-[var(--ink)]"
                      }`}
                    >
                      <span>{t.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                        {t.tag}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{content.nav.ctaButton}</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--ink)] hover:bg-[var(--surface-alt)] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--surface)] px-5 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 pt-2">
              {content.nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--ink)] hover:text-[var(--primary)] py-1.5 transition-colors border-b border-[var(--border-color)]/30"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Palette Switcher */}
            <div className="pt-2">
              <label className="text-xs font-semibold text-[var(--ink-muted)] block mb-1.5 uppercase tracking-wider">
                Select Visual Palette:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onThemeChange(t.id)}
                    className={`text-xs px-2.5 py-2 rounded-lg border text-left flex items-center justify-between ${
                      activeTheme === t.id
                        ? "border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)] font-bold"
                        : "border-[var(--border-color)] bg-white text-[var(--ink)]"
                    }`}
                  >
                    <span>{t.id.toUpperCase()}</span>
                    <span className="text-[10px] opacity-70">{t.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact & CTA */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-semibold py-3 rounded-full text-sm shadow"
              >
                <Calendar className="w-4 h-4" />
                {content.nav.ctaButton}
              </button>
              <a
                href="tel:3105550194"
                className="w-full flex items-center justify-center gap-2 border border-[var(--border-color)] bg-[var(--surface-alt)] text-[var(--ink)] font-medium py-2.5 rounded-full text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (310) 555-0194
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

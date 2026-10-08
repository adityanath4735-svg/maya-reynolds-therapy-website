// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertisePills from "@/components/ExpertisePills";
import HowWeWork from "@/components/HowWeWork";
import TransitionBanner from "@/components/TransitionBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import StickyMobileBar from "@/components/StickyMobileBar";
import { mayaContent } from "@/data/content";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("sage");

  useEffect(() => {
    // Apply theme data attribute to html/body
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", activeTheme);
    }
  }, [activeTheme]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface)] transition-colors duration-300">
      <Navbar
        content={mayaContent}
        onOpenBooking={() => setIsBookingOpen(true)}
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 2: Intro / Empathy Hook */}
        <Intro content={mayaContent} />

        {/* Section 3: Who We Help (3-column grid) */}
        <WhoWeHelp
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 4: Quote Banner */}
        <QuoteBanner content={mayaContent} />

        {/* Section 5: Clinical Expertise Pills */}
        <ExpertisePills content={mayaContent} />

        {/* Section 6: How We Work & Modalities */}
        <HowWeWork
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 7: Transition Statement */}
        <TransitionBanner content={mayaContent} />

        {/* Section 8: Core Services & Specialties */}
        <Services
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 9: About Dr. Maya Reynolds, PsyD */}
        <About
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 10 [NEW CUSTOM SECTION]: Our Office in Santa Monica */}
        <Office
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 11: Frequently Asked Questions */}
        <Faq
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 12: Call to Action Banner */}
        <CtaBanner
          content={mayaContent}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Section 13: Footer */}
      <Footer
        content={mayaContent}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyMobileBar onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

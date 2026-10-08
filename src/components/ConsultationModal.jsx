// src/components/ConsultationModal.jsx
"use client";

import { useState } from "react";
import { X, Calendar, CheckCircle2, Phone, Mail, Shield } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "In-Person (Santa Monica)",
    focus: "Anxiety & Panic",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[var(--border-color)] overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-[var(--surface-alt)] p-6 sm:p-7 border-b border-[var(--border-color)] flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
              Dr. Maya Reynolds, PsyD
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
              Schedule a Free Consultation
            </h3>
            <p className="text-xs text-[var(--ink-muted)]">
              15-minute phone or video conversation • Confidential & No Obligation
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200/60 text-[var(--ink-muted)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-2xl font-semibold text-[var(--ink)]">
                Inquiry Received
              </h4>
              <p className="text-sm text-[var(--ink-muted)] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[var(--ink)]">{formData.name}</span>. Dr. Maya Reynolds or our intake coordinator will reach out to you within 24 business hours at {formData.email}.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[var(--primary)] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-medium text-[var(--ink)] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-medium text-[var(--ink)] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[var(--ink)] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(310) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-medium text-[var(--ink)] mb-1">
                    Preferred Session Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="In-Person (Santa Monica)">In-Person (Santa Monica Office)</option>
                    <option value="Telehealth (California)">Telehealth (Across California)</option>
                    <option value="Hybrid / Flexible">Hybrid / Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-[var(--ink)] mb-1">
                    Primary Area of Focus
                  </label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="Anxiety & Panic">Anxiety & Panic</option>
                    <option value="Trauma & EMDR">Trauma & EMDR</option>
                    <option value="Burnout & Perfectionism">Burnout & Perfectionism</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-[var(--ink)] mb-1">
                  How can Dr. Reynolds best support you? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share what is bringing you to therapy, or any scheduling preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold py-3.5 rounded-full text-sm shadow transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[var(--ink-muted)]">
                <Shield className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Your information is encrypted & strictly confidential.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

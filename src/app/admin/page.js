// src/app/admin/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Mail,
  Phone,
  Clock,
  MapPin,
  Video,
  CheckCircle,
  RefreshCw,
  Search,
  ExternalLink,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  PlusCircle,
} from "lucide-react";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [formatFilter, setFormatFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  const fetchInquiries = async () => {
    try {
      setRefreshing(true);
      const res = await fetch("/api/contact", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load inquiries");
      const data = await res.json();
      setInquiries(data.inquiries || []);
      setError(null);
    } catch (err) {
      setError(err.message || "Unable to fetch inquiries");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const updateStatus = (id, newStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const createQuickTestInquiry = async () => {
    try {
      setRefreshing(true);
      const sampleNames = ["David Miller", "Rachel Adams", "Carlos Mendez", "Jessica Taylor"];
      const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const randomEmail = `${randomName.toLowerCase().replace(" ", ".")}@example.com`;

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: randomName,
          email: randomEmail,
          phone: "(310) 555-0182",
          format: Math.random() > 0.5 ? "In-Person (Santa Monica)" : "Telehealth (California)",
          focus: "Anxiety & Panic",
          notes: "Testing new client intake request from Santa Monica resident.",
        }),
      });

      await fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesFormat =
      formatFilter === "all" ||
      (formatFilter === "in-person" && item.format.includes("In-Person")) ||
      (formatFilter === "telehealth" && item.format.includes("Telehealth"));

    return matchesSearch && matchesStatus && matchesFormat;
  });

  const totalInquiries = inquiries.length;
  const newCount = inquiries.filter((i) => i.status === "New").length;
  const inPersonCount = inquiries.filter((i) => i.format.includes("In-Person")).length;
  const telehealthCount = inquiries.filter((i) => i.format.includes("Telehealth")).length;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A202C] font-sans antialiased">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Live Intake Backend
                </span>
                <span className="text-xs text-gray-500">Dr. Maya Reynolds, PsyD</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Client Consultation Inquiries
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={createQuickTestInquiry}
              className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <PlusCircle className="w-4 h-4 text-emerald-600" />
              <span>Simulate Client Submission</span>
            </button>

            <button
              onClick={fetchInquiries}
              disabled={refreshing}
              className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg bg-[#354D43] hover:bg-[#283b33] text-white shadow-xs transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
            >
              <span>View Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Total Received</span>
              <Users className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{totalInquiries}</div>
            <p className="text-xs text-gray-500 mt-1">Live inquiries in database</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="flex items-center justify-between text-emerald-600 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">New Requests</span>
              <Clock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-700">{newCount}</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting 24-hr callback</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="flex items-center justify-between text-blue-600 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">In-Person (Santa Monica)</span>
              <MapPin className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{inPersonCount}</div>
            <p className="text-xs text-gray-500 mt-1">123th Street 45 W</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Telehealth (California)</span>
              <Video className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{telehealthCount}</div>
            <p className="text-xs text-gray-500 mt-1">Secure California HIPAA</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by client name, email, notes..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354D43]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#354D43]"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Scheduled">Scheduled</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>Format:</span>
              <select
                value={formatFilter}
                onChange={(e) => setFormatFilter(e.target.value)}
                className="px-2.5 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#354D43]"
              >
                <option value="all">All Formats</option>
                <option value="in-person">In-Person (Santa Monica)</option>
                <option value="telehealth">Telehealth</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-gray-900 text-base">Inquiry Records</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                {filteredInquiries.length} shown
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>HIPAA Compliant Protocol (Demonstration)</span>
            </div>
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-500 space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-gray-400" />
              <p className="text-sm">Loading inquiry records...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-600 space-y-2">
              <p className="font-semibold">Error Loading Data</p>
              <p className="text-xs text-gray-500">{error}</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="py-16 text-center text-gray-500 space-y-2">
              <p className="text-base font-medium text-gray-700">No matching inquiries found</p>
              <p className="text-xs text-gray-400">
                Submit an inquiry via the homepage modal to see it appear here live.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredInquiries.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 hover:bg-gray-50/80 transition-colors flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-base font-semibold text-gray-900">{item.name}</span>

                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          item.status === "New"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : item.status === "Contacted"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-blue-100 text-blue-800 border border-blue-200"
                        }`}
                      >
                        {item.status}
                      </span>

                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        {item.focus}
                      </span>

                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 flex items-center gap-1">
                        {item.format.includes("In-Person") ? (
                          <MapPin className="w-3 h-3 text-teal-600" />
                        ) : (
                          <Video className="w-3 h-3 text-purple-600" />
                        )}
                        <span>{item.format}</span>
                      </span>
                    </div>

                    {/* Contact details */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                      <a
                        href={`mailto:${item.email}`}
                        className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span className="underline">{item.email}</span>
                      </a>

                      <a
                        href={`tel:${item.phone}`}
                        className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.phone}</span>
                      </a>

                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {new Date(item.receivedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Client message / notes */}
                    {item.notes && (
                      <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900 block text-xs mb-1">
                          Client Notes & Focus:
                        </span>
                        {item.notes}
                      </div>
                    )}
                  </div>

                  {/* Actions & Status Dropdown */}
                  <div className="flex items-center lg:flex-col lg:items-end gap-2 pt-2 lg:pt-0 shrink-0">
                    <span className="text-xs text-gray-400">Update Status:</span>
                    <div className="flex items-center gap-1">
                      {["New", "Contacted", "Scheduled"].map((statusOption) => (
                        <button
                          key={statusOption}
                          onClick={() => updateStatus(item.id, statusOption)}
                          className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                            item.status === statusOption
                              ? "bg-gray-900 text-white font-medium"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {statusOption}
                        </button>
                      ))}
                    </div>

                    <a
                      href={`mailto:${item.email}?subject=Dr. Maya Reynolds, PsyD - Consultation Follow Up`}
                      className="mt-2 text-xs font-medium text-emerald-800 hover:text-emerald-900 flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* API Info Footer */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Direct JSON API:</span>
            <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-800">
              GET /api/contact
            </code>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/api/contact" target="_blank" className="hover:text-emerald-700 underline">
              View Raw JSON Response
            </Link>
            <Link href="/" className="hover:text-emerald-700 underline">
              Return to Patient Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

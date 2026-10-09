// src/app/api/contact/route.js
import { NextResponse } from "next/server";

// In-memory persistent storage for serverless runtime instance
if (!globalThis._inquiries) {
  globalThis._inquiries = [
    {
      id: "inq-101",
      name: "Sarah Jenkins",
      email: "sarah.j@example.com",
      phone: "(310) 555-0198",
      format: "In-Person (Santa Monica)",
      focus: "Anxiety & Panic",
      notes: "Experiencing heightened panic attacks during executive meetings. Looking for in-person CBT support in Santa Monica.",
      status: "New",
      receivedAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(), // 42 mins ago
    },
    {
      id: "inq-102",
      name: "Michael Chen",
      email: "mchen.tech@example.com",
      phone: "(415) 555-0244",
      format: "Telehealth (California)",
      focus: "Burnout & Perfectionism",
      notes: "Tech lead feeling chronic emotional exhaustion and perfectionistic paralysis. Interested in bi-weekly telehealth sessions.",
      status: "Contacted",
      receivedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    },
    {
      id: "inq-103",
      name: "Elena Rostova",
      email: "elena.rostova@example.com",
      phone: "(310) 555-0142",
      format: "In-Person (Santa Monica)",
      focus: "Trauma & EMDR",
      notes: "Referred by my primary physician for EMDR trauma processing regarding a motor vehicle incident last year.",
      status: "Scheduled",
      receivedAt: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(), // 14 hours ago
    },
  ];
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Unsupported Media Type. Content-Type must be application/json" },
        { status: 415 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Malformed request payload" },
        { status: 400 }
      );
    }

    const { name, email, phone, format, focus, notes } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a valid name (1–100 characters)." },
        { status: 400 }
      );
    }

    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (notes && (typeof notes !== "string" || notes.length > 1000)) {
      return NextResponse.json(
        { error: "Notes must be under 1,000 characters." },
        { status: 400 }
      );
    }

    // New inquiry object
    const newInquiry = {
      id: "inq-" + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim().slice(0, 30) : "(Not provided)",
      format: format || "In-Person (Santa Monica)",
      focus: focus || "General Consultation",
      notes: notes ? notes.trim() : "No additional notes provided.",
      status: "New",
      receivedAt: new Date().toISOString(),
    };

    // Store in memory (latest first)
    globalThis._inquiries.unshift(newInquiry);

    console.log(`[Contact API] Stored inquiry ${newInquiry.id} for ${newInquiry.email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been safely received. Dr. Maya Reynolds or our intake coordinator will respond within 24 business hours.",
        inquiry: {
          id: newInquiry.id,
          name: newInquiry.name,
          email: newInquiry.email,
          format: newInquiry.format,
          receivedAt: newInquiry.receivedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Server error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      service: "Dr. Maya Reynolds Intake Management API",
      totalInquiries: globalThis._inquiries ? globalThis._inquiries.length : 0,
      inquiries: globalThis._inquiries || [],
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

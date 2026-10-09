// src/app/api/contact/route.js
import { NextResponse } from "next/server";

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

    // Sanitize values
    const inquiry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim().slice(0, 30) : null,
      format: format || "In-Person (Santa Monica)",
      focus: focus || "General Consultation",
      notes: notes ? notes.trim() : null,
      receivedAt: new Date().toISOString(),
    };

    // Log securely without medical/sensitive data in production
    console.log(`[Contact API] Valid inquiry received for ${inquiry.email} (${inquiry.format})`);

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been safely received. Dr. Maya Reynolds or our intake coordinator will respond within 24 business hours.",
        inquiry: {
          name: inquiry.name,
          email: inquiry.email,
          format: inquiry.format,
          receivedAt: inquiry.receivedAt,
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
      service: "Dr. Maya Reynolds Consultation API",
      status: "operational",
      version: "1.0",
      endpoints: {
        "POST /api/contact": "Submit 15-minute consultation request",
      },
    },
    { status: 200 }
  );
}

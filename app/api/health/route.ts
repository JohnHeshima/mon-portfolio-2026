import { NextResponse } from "next/server";

// Basic health endpoint for deployment checks and uptime probes.
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "john-heshima-portfolio",
    runtime: "nodejs",
    timestamp: new Date().toISOString(),
  });
}

import { NextResponse } from "next/server";
import { publicProfilePayload } from "@/lib/site-data";

// Exposes portfolio content as structured data for future integrations.
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    data: publicProfilePayload,
  });
}

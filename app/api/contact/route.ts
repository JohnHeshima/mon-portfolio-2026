import { NextRequest, NextResponse } from "next/server";
import {
  contactSchema,
  persistContactSubmission,
} from "@/lib/contact-store";

// Contact requests are handled in Node runtime to allow validation and storage.
export const runtime = "nodejs";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  const limited = checkRateLimit(clientIp);

  if (limited) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Trop de tentatives récentes. Merci de réessayer dans un moment.",
      },
      { status: 429 },
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];

    return NextResponse.json(
      {
        ok: false,
        error: issue?.message ?? "Le formulaire contient des champs invalides.",
      },
      { status: 400 },
    );
  }

  await persistContactSubmission(parsed.data, clientIp);

  return NextResponse.json({
    ok: true,
    message: "Message reçu avec succès. Merci, je vous répondrai rapidement.",
  });
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "local";
}

function checkRateLimit(ip: string) {
  // A lightweight in-memory limiter is enough to avoid form abuse on a portfolio.
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

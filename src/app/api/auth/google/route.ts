import { NextRequest, NextResponse } from "next/server";
import { encodeSession, SESSION_COOKIE } from "@/lib/session";

/**
 * POST /api/auth/google — the production endpoint takes a Google credential
 * (JWT), verifies it, creates/loads the account, and answers {to, created}.
 * The clone accepts the local consent sheet's request and answers the same
 * shape so the client-side flow (location.assign(a.to)) is identical.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const intent = body?.intent === "join" ? "join" : "signin";
  const email = typeof body?.email === "string" && body.email.includes("@") ? body.email : "you@example.com";
  const to = body?.next && String(body.next).startsWith("/") ? String(body.next) : "/account";
  const res = NextResponse.json({ to, created: intent === "join" });
  res.cookies.set(SESSION_COOKIE, encodeSession({ email, plan: "free", created: intent === "join" }), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

import { NextRequest, NextResponse } from "next/server";
import { encodeSession, SESSION_COOKIE } from "@/lib/session";

/**
 * POST /api/join — the production behavior: accepts FormData (email, next),
 * would email a sign-in link, and redirects HTML clients home with #join.
 * The clone accepts, sets the session (no mail is sent), and answers JSON
 * clients with ok — the client then shows the real "Check your email" state.
 */
export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const email = String(form?.get("email") ?? "").trim().toLowerCase();
  const wantsJson = (req.headers.get("accept") ?? "").includes("application/json");
  if (!email || !email.includes("@")) {
    return wantsJson
      ? NextResponse.json({ error: "email required" }, { status: 400 })
      : NextResponse.redirect(new URL("/?join=unsent#join", req.url), 303);
  }
  const res = wantsJson
    ? NextResponse.json({ ok: true, sent: true })
    : NextResponse.redirect(new URL("/?join=sent#join", req.url), 303);
  res.cookies.set(SESSION_COOKIE, encodeSession({ email, plan: "free", created: true }), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

/** GET /api/me → 200 {email, plan} | 204 (no session) — the site's contract. */
export async function GET() {
  const s = await getSession();
  if (!s) return new NextResponse(null, { status: 204 });
  return NextResponse.json({ email: s.email, plan: s.plan });
}

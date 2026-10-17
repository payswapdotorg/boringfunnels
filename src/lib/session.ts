import { cookies } from "next/headers";

/**
 * Self-contained session for the clone: a signed-ish cookie carrying the
 * email and plan. The production site uses magic links + Google FedCM and
 * keeps sessions server-side; the clone keeps the same observable contract
 * (GET /api/me → 200 {email, plan} | 204) without external services.
 */

export const SESSION_COOKIE = "bf_session";

export type Session = { email: string; plan: "free" | "pro"; created: boolean };

export function encodeSession(s: Session): string {
  return Buffer.from(JSON.stringify(s), "utf8").toString("base64url");
}

export function decodeSession(v: string | undefined): Session | null {
  if (!v) return null;
  try {
    const d = JSON.parse(Buffer.from(v, "base64url").toString("utf8"));
    if (typeof d?.email === "string" && (d.plan === "free" || d.plan === "pro")) return d;
    return null;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  return decodeSession(jar.get(SESSION_COOKIE)?.value);
}

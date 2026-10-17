import Link from "next/link";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const nav = [
  { href: "/library", label: "Library" },
  { href: "/account", label: "Downloads" },
  { href: "/account/changelog", label: "Changelog" },
  { href: "/account/license", label: "License" },
  { href: "/account/purchases", label: "Purchases" },
  { href: "/account/support", label: "Support" },
  { href: "/account/settings", label: "Settings" },
];

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/access");
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip">Skip to the content</a>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 h-16 flex items-center justify-between">
          <Link href="/library" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
              <rect x="1" y="1" width="24" height="24" rx="7" fill="#00a651" />
              <path d="M6 8.5h14l-4.4 5.2v4.6L12.5 21v-7.3L6 8.5z" fill="#fff" />
            </svg>
            boringfunnels
          </Link>
          <p className="text-[13px] text-muted">Signed in as {session.email}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 w-full flex-1 grid sm:grid-cols-[200px_1fr] gap-10 py-10">
        <nav aria-label="Account">
          <ul className="space-y-2 text-[15px]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted hover:text-go-text">{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/access" className="text-muted hover:text-go-text">Sign out</Link>
            </li>
          </ul>
        </nav>
        <main id="main" className="min-w-0 max-w-[680px]">{children}</main>
      </div>
    </div>
  );
}

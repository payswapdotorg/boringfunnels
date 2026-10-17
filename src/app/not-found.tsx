import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-5">
      <div className="text-center">
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="font-display font-extrabold text-[2rem] mt-2">Nothing here.</h1>
        <p className="mt-2 text-muted">The library page you wanted may have moved, or never was.</p>
        <Link href="/library" className="btn-go mt-6">Back to the library</Link>
      </div>
    </div>
  );
}

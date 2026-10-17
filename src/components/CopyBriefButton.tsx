"use client";

import { useState } from "react";

/**
 * CopyBriefButton — the production site's "Copy agent brief" affordance.
 * The brief text (verbatim from the free-tier clipboard captures) is passed
 * in from the server data and copied to the clipboard on click.
 */
export function CopyBriefButton({ brief, label = "Copy agent brief", className = "btn-go" }: { brief: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
    } catch {
      // clipboard API unavailable (insecure context): fall back to a
      // hidden-textarea execCommand copy, same as the production fallback
      const ta = document.createElement("textarea");
      ta.value = brief;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* noop */ }
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 2200);
  }

  return (
    <button className={className} type="button" onClick={copy} aria-live="polite">
      {done ? "Brief copied ✓" : label}
    </button>
  );
}

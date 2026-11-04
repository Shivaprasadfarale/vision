/** Scrub / "slinky" tuning helpers shared by scroll-driven block animations. */
const mobileQuery = "(max-width: 1023.98px)";

function isDesktop() {
  return !window.matchMedia(mobileQuery).matches;
}

let scrubOverride: number | boolean | null = null;
try {
  const v = new URLSearchParams(window.location.search).get("scrub");
  if (v !== null) {
    const n = parseFloat(v);
    if (!Number.isNaN(n)) scrubOverride = n <= 0 ? true : n;
  }
} catch {}

/** Desktop uses an exact scrub (Lenis already smooths); touch devices get lag smoothing. */
export function getScrub(fallback = 0.3): number | boolean {
  if (scrubOverride !== null) return scrubOverride;
  return isDesktop() ? true : fallback;
}

let slinkyOverride: boolean | null = null;
try {
  const v = new URLSearchParams(window.location.search).get("slinky");
  if (v !== null) slinkyOverride = v !== "0";
} catch {}

export function useSlinky(): boolean {
  if (slinkyOverride !== null) return slinkyOverride;
  return true;
}

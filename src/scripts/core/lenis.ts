/**
 * Smooth scrolling (Lenis) — desktop only (>= 1024px), driven by the GSAP ticker
 * so ScrollTrigger stays in sync. Mirrors the original theme configuration.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
const desktopQuery = window.matchMedia("(min-width: 1024px)");

function createLenis() {
  if (lenis) return;
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.8,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);
}

function destroyLenis() {
  if (!lenis) return;
  lenis.destroy();
  lenis = null;
  ScrollTrigger.refresh();
}

function raf(time: number) {
  lenis?.raf(time * 1000);
}

export function initSmoothScroll() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.ticker.add(raf);
  if (desktopQuery.matches) createLenis();
  desktopQuery.addEventListener("change", (e) => (e.matches ? createLenis() : destroyLenis()));
}

export function getLenis() {
  return lenis;
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}

export function resizeLenis() {
  lenis?.resize();
}

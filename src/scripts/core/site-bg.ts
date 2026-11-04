/** Fixed page background colour that cross-fades as `[data-bg-color]` sections enter. */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BRAND_COLORS: Record<string, string> = {
  maron: "#231800",
  parme: "#DBB6FC",
  sable: "#FFEAD4",
  transparent: "transparent",
};

export function setInitialPageBg(container: HTMLElement) {
  const base = document.querySelector<HTMLElement>(".site-bg__base");
  if (!base) return;
  const key = container.dataset?.initialBg;
  const color = key && BRAND_COLORS[key] ? BRAND_COLORS[key] : "transparent";
  base.style.setProperty("--page-bg", color);
  base.style.backgroundColor = color;
}

export function initBgColorTriggers(container: HTMLElement) {
  const base = document.querySelector(".site-bg__base");
  if (!base || !container) return;
  container.querySelectorAll<HTMLElement>("[data-bg-color]").forEach((section) => {
    const color = BRAND_COLORS[section.dataset.bgColor || ""];
    if (!color || color === "transparent") return;
    gsap
      .timeline({ scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" } })
      .to(base, { backgroundColor: color, duration: 0.8, ease: "power2.inOut" });
  });
}

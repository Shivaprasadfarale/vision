/**
 * Barba.js page transitions — the "osmo" curved wipe.
 *
 * Leave: the transition panel sweeps up over the page (yPercent 0 → -100) while
 * its top curve grows, the outgoing page drifts up 15dvh (desktop) and the
 * Ronnsquare wordmark fades in. Enter: the wordmark fades out, the panel exits
 * (-100 → -200) as its bottom curve flattens, and the new page rises from
 * 30dvh. Browser back/forward restores the previous scroll position.
 */
import barba from "@barba/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { setHeaderTheme, renderBreadcrumb, closeMobileMenu } from "./header";
import { setInitialPageBg } from "./site-bg";
import { initPage, destroyPage } from "./page";
import { scrollToTop, resizeLenis } from "./lenis";
import { rememberScroll, getRememberedScroll, restoreScroll, restoreAfterImages } from "./scroll-memory";
import { pauseResizeReload, resumeResizeReload } from "./resize-reload";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("osmo", "0.625, 0.05, 0, 1");

const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let reduced = reducedQuery.matches;
reducedQuery.addEventListener?.("change", (e) => (reduced = e.matches));
const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function overlay() {
  const wrap = document.querySelector("[data-transition-wrap]")!;
  return {
    panel: wrap.querySelector("[data-transition-panel]"),
    top: wrap.querySelector("[data-transition-panel-top]"),
    bottom: wrap.querySelector("[data-transition-panel-bottom]"),
    logo: wrap.querySelector("[data-transition-logo]"),
  };
}

function leaveTimeline(current: HTMLElement) {
  const { panel, top, bottom, logo } = overlay();
  const tl = gsap.timeline();
  if (reduced) return tl.set(current, { autoAlpha: 0 });
  tl.set(panel, { autoAlpha: 1, yPercent: 0 }, 0)
    .set(top, { scaleY: 0, height: "15vw" }, 0)
    .set(bottom, { scaleY: 1, height: "20vw" }, 0)
    .set(logo, { opacity: 0 }, 0)
    .to(panel, { yPercent: -100, duration: 0.8, ease: "osmo" }, 0)
    .to(top, { scaleY: 1, duration: 0.8, ease: "osmo" }, 0);
  if (isDesktop()) tl.to(current, { y: "-15dvh", duration: 0.8, ease: "osmo", force3D: false }, 0);
  tl.to(logo, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0.27);
  return tl;
}

function enterTimeline(next: HTMLElement) {
  const { panel, bottom, logo } = overlay();
  const tl = gsap.timeline();
  if (reduced) return tl.set(panel, { autoAlpha: 0 }).set(logo, { opacity: 0 });
  tl.add("startEnter", 0.45)
    .to(logo, { opacity: 0, duration: 0.35, ease: "power2.in" }, "startEnter-=0.2")
    .fromTo(panel, { yPercent: -100 }, { yPercent: -200, duration: 0.9, ease: "osmo", immediateRender: false }, "startEnter")
    .to(bottom, { scaleY: 0, duration: 0.9, ease: "osmo" }, "startEnter")
    .from(next, { y: "30dvh", duration: 0.9, ease: "osmo", force3D: false }, "startEnter")
    .add("pageReady")
    .set(next, { clearProps: "transform" }, "pageReady")
    .set(panel, { autoAlpha: 0 }, "pageReady")
    .set(logo, { opacity: 0 }, "pageReady");
  return tl;
}

type BarbaData = {
  current: { container: HTMLElement; namespace: string; url: { href: string } };
  next: { container: HTMLElement; namespace: string; url: { href: string }; html: string };
  trigger: string | HTMLElement;
};

async function leave(data: BarbaData) {
  pauseResizeReload();
  closeMobileMenu();
  document.documentElement.classList.remove("rs-first-load");
  if (reduced) {
    destroyPage();
    return;
  }
  if (!isDesktop()) ScrollTrigger.getAll().forEach((t) => t.disable(false));
  const clone = document.querySelector("body > [data-brand-clone]");
  if (clone) gsap.to(clone, { autoAlpha: 0, duration: 0.35, ease: "power1.out", overwrite: "auto" });
  await leaveTimeline(data.current.container);
  destroyPage();
  gsap.set(data.current.container, { display: "none" });
}

async function enter(data: BarbaData) {
  const next = data.next.container;
  setHeaderTheme(next.dataset.navTheme || "light");
  renderBreadcrumb(next);
  setInitialPageBg(next);
  const tl = enterTimeline(next);
  const earlyFire = isDesktop() ? 0.6 : 0;
  if (earlyFire > 0 && !reduced) {
    const at = Math.max(0, tl.duration() - earlyFire);
    await new Promise((r) => tl.call(r as () => void, undefined, at));
  } else await tl;
  const isHistory = data.trigger === "back" || data.trigger === "forward";
  const skipEntrance = isHistory && getRememberedScroll(data.next.url.href) != null;
  await initPage(next, { skipEntrance });
  if (tl.isActive()) await tl;
}

function syncDocumentMeta(html: string) {
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const desc = doc.querySelector('meta[name="description"]')?.getAttribute("content");
    if (desc) document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
    const bodyClass = doc.body.getAttribute("class");
    if (bodyClass !== null) document.body.setAttribute("class", bodyClass);
  } catch {}
}

export function initTransitions() {
  barba.hooks.beforeLeave((data) => rememberScroll((data as unknown as BarbaData).current.url.href));
  barba.hooks.enter((data) => {
    syncDocumentMeta((data as unknown as BarbaData).next.html);
    ScrollTrigger.clearScrollMemory();
    scrollToTop();
  });
  barba.hooks.after((data) => {
    const d = data as unknown as BarbaData;
    ScrollTrigger.refresh();
    const isHistory = d.trigger === "back" || d.trigger === "forward";
    const y = isHistory ? getRememberedScroll(d.next.url.href) : null;
    if (y == null) scrollToTop();
    resizeLenis();
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        if (y != null) {
          restoreScroll(y);
          restoreAfterImages(d.next.container, y);
        }
        resumeResizeReload();
      }),
    );
  });
  barba.init({
    preventRunning: true,
    prevent: ({ el }: { el: HTMLAnchorElement }) =>
      !!(
        el.href &&
        (el.href.includes("/api/") ||
          el.href.startsWith("mailto:") ||
          el.href.startsWith("tel:") ||
          (el.href.includes("#") && el.href.split("#")[0] === window.location.href.split("#")[0]))
      ),
    transitions: [
      { name: "osmo-wipe", leave: leave as never, enter: enter as never },
      { name: "self", leave: leave as never, enter: enter as never },
    ],
  } as never);
}

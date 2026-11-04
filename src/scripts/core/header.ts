/**
 * Header behaviour: desktop dropdowns, language switcher, mobile menu + hamburger
 * morph, mobile accordions, Escape handling, hide-on-scroll, theme switching,
 * breadcrumb rendering and the first-load header entrance.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./lenis";

gsap.registerPlugin(ScrollTrigger);

const CLOSE_DELAY = 150;
let cleanups: Array<() => void> = [];
let hamburgerTl: gsap.core.Timeline | null = null;
let scrollCleanup: (() => void) | null = null;
let hideNavTriggers: ScrollTrigger[] = [];
let headerEl: HTMLElement | null = null;

export type NavTheme = "light" | "dark-sable" | "dark-parme";

/* ------------------------------------------------------------------ */
/* Desktop dropdowns                                                   */
/* ------------------------------------------------------------------ */
function closeItem(item: Element) {
  item.classList.remove("is-open");
  item.querySelector(".header-ronn__chevron-toggle")?.setAttribute("aria-expanded", "false");
}

function bindDropdowns(header: HTMLElement) {
  const items = header.querySelectorAll(".header-ronn__nav-item--has-sub");
  const timers = new Map<Element, number>();
  items.forEach((item) => {
    const toggle = item.querySelector(".header-ronn__chevron-toggle");
    const open = () => {
      clearTimeout(timers.get(item));
      items.forEach((other) => other !== item && closeItem(other));
      item.classList.add("is-open");
      toggle?.setAttribute("aria-expanded", "true");
    };
    const scheduleClose = () => timers.set(item, window.setTimeout(() => closeItem(item), CLOSE_DELAY));
    const cancelClose = () => clearTimeout(timers.get(item));
    item.addEventListener("mouseenter", open);
    item.addEventListener("mouseleave", scheduleClose);
    const dropdown = item.querySelector(".header-ronn__dropdown");
    dropdown?.addEventListener("mouseenter", cancelClose);
    dropdown?.addEventListener("mouseleave", scheduleClose);
    const onToggle = (e: Event) => {
      e.preventDefault();
      item.classList.contains("is-open") ? closeItem(item) : open();
    };
    toggle?.addEventListener("click", onToggle);
    cleanups.push(() => {
      item.removeEventListener("mouseenter", open);
      item.removeEventListener("mouseleave", scheduleClose);
      dropdown?.removeEventListener("mouseenter", cancelClose);
      dropdown?.removeEventListener("mouseleave", scheduleClose);
      toggle?.removeEventListener("click", onToggle);
      clearTimeout(timers.get(item));
    });
  });
}

/* ------------------------------------------------------------------ */
/* Language switcher                                                   */
/* ------------------------------------------------------------------ */
function bindLanguage(header: HTMLElement) {
  const wrap = header.querySelector<HTMLElement>("[data-header-ronn-lang]");
  if (!wrap) return;
  const btn = wrap.querySelector(".header-ronn__lang");
  let timer: number;
  const open = () => {
    clearTimeout(timer);
    wrap.classList.add("is-open");
    btn?.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    timer = window.setTimeout(() => {
      wrap.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    }, CLOSE_DELAY);
  };
  const onClick = (e: Event) => {
    e.preventDefault();
    if (wrap.classList.contains("is-open")) {
      wrap.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    } else open();
  };
  wrap.addEventListener("mouseenter", open);
  wrap.addEventListener("mouseleave", close);
  btn?.addEventListener("click", onClick);
  cleanups.push(() => {
    wrap.removeEventListener("mouseenter", open);
    wrap.removeEventListener("mouseleave", close);
    btn?.removeEventListener("click", onClick);
    clearTimeout(timer);
  });
}

/* ------------------------------------------------------------------ */
/* Mobile menu                                                         */
/* ------------------------------------------------------------------ */
function buildHamburgerTimeline(header: HTMLElement) {
  const top = header.querySelector(".header-ronn__hamburger-line--top");
  const bottom = header.querySelector(".header-ronn__hamburger-line--bottom");
  if (!top || !bottom) return null;
  return gsap
    .timeline({ paused: true })
    .to(top, { y: 4, rotation: 45, svgOrigin: "12 8", duration: 0.4, ease: "power2.inOut" }, 0)
    .to(bottom, { y: -4, rotation: -45, svgOrigin: "12 16", duration: 0.4, ease: "power2.inOut" }, 0);
}

function setMenuClosedState(header: HTMLElement, menu: Element, toggle: Element | null) {
  header.classList.remove("is-menu-open");
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("is-header-menu-open");
}

function bindMobileMenu(header: HTMLElement) {
  const toggle = header.querySelector<HTMLElement>("[data-header-ronn-toggle]");
  const menu = header.querySelector<HTMLElement>("[data-header-ronn-menu]");
  if (!toggle || !menu) return;
  hamburgerTl = buildHamburgerTimeline(header);
  const open = () => {
    header.classList.add("is-menu-open");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("is-header-menu-open");
    hamburgerTl?.play();
    requestAnimationFrame(() => menu.focus({ preventScroll: true }));
  };
  const close = () => {
    setMenuClosedState(header, menu, toggle);
    hamburgerTl?.reverse();
    toggle.focus();
  };
  const onToggle = () => (menu.classList.contains("is-open") ? close() : open());
  toggle.addEventListener("click", onToggle);

  // Focus trap while the menu is open.
  const onKey = (e: KeyboardEvent) => {
    if (!menu.classList.contains("is-open") || e.key !== "Tab") return;
    const focusables = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  };
  document.addEventListener("keydown", onKey);
  cleanups.push(() => {
    toggle.removeEventListener("click", onToggle);
    document.removeEventListener("keydown", onKey);
    close();
  });
}

function bindMobileAccordions(header: HTMLElement) {
  header.querySelectorAll<HTMLElement>("[data-header-ronn-accordion]").forEach((group) => {
    const btn = group.querySelector(".header-ronn__chevron-toggle, .header-ronn__menu-link--lang");
    const sub = group.querySelector<HTMLElement>(".header-ronn__menu-sub");
    if (!btn || !sub) return;
    sub.hidden = false;
    const onClick = () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      group.classList.toggle("is-open", !expanded);
    };
    btn.addEventListener("click", onClick);
    cleanups.push(() => btn.removeEventListener("click", onClick));
  });
}

function bindEscape(header: HTMLElement) {
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    header.querySelectorAll(".header-ronn__nav-item--has-sub.is-open").forEach(closeItem);
    const menu = header.querySelector("[data-header-ronn-menu]");
    if (menu?.classList.contains("is-open")) {
      const toggle = header.querySelector<HTMLElement>("[data-header-ronn-toggle]");
      setMenuClosedState(header, menu, toggle);
      hamburgerTl?.reverse();
      toggle?.focus();
    }
  };
  document.addEventListener("keydown", onKey);
  cleanups.push(() => document.removeEventListener("keydown", onKey));
}

/* ------------------------------------------------------------------ */
/* Breadcrumb overflow fades                                           */
/* ------------------------------------------------------------------ */
let updateBreadcrumbFades = () => {};
function bindBreadcrumbFades() {
  const nav = document.querySelector<HTMLElement>(".header-ronn__breadcrumb");
  const track = nav?.querySelector<HTMLElement>(".header-ronn__breadcrumb-track");
  if (!nav || !track) return;
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const overflowing = max > 1;
    const x = track.scrollLeft;
    nav.style.setProperty("--bc-fade-l", overflowing && x > 1 ? "1" : "0");
    nav.style.setProperty("--bc-fade-r", overflowing && x < max - 1 ? "1" : "0");
  };
  updateBreadcrumbFades = update;
  track.addEventListener("scroll", update, { passive: true });
  new ResizeObserver(update).observe(track);
  update();
}

export function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header-ronn]");
  if (!header) return;
  bindDropdowns(header);
  bindLanguage(header);
  bindMobileMenu(header);
  bindMobileAccordions(header);
  bindEscape(header);
  bindBreadcrumbFades();
  return { destroy: destroyHeader };
}

function destroyHeader() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  hamburgerTl?.kill();
  hamburgerTl = null;
}

/** Close the mobile menu without moving focus (used on page leave). */
export function closeMobileMenu() {
  const header = document.querySelector<HTMLElement>("[data-header-ronn]");
  if (!header) return;
  const menu = header.querySelector("[data-header-ronn-menu]");
  const toggle = header.querySelector("[data-header-ronn-toggle]");
  if (menu?.classList.contains("is-open")) {
    setMenuClosedState(header, menu, toggle);
    hamburgerTl?.reverse();
  }
}

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */
export function setHeaderTheme(theme: string) {
  const header = document.querySelector("[data-header-ronn]");
  if (!header) return;
  header.classList.remove("header-ronn--light", "header-ronn--dark-sable", "header-ronn--dark-parme");
  header.classList.add(`header-ronn--${theme}`);
}

/* ------------------------------------------------------------------ */
/* Hide on scroll                                                      */
/* ------------------------------------------------------------------ */
export function destroyHeaderScroll() {
  scrollCleanup?.();
  scrollCleanup = null;
  hideNavTriggers.forEach((t) => t.kill());
  hideNavTriggers = [];
  if (headerEl) {
    gsap.killTweensOf(headerEl);
    gsap.set(headerEl, { clearProps: "transform" });
    headerEl = null;
  }
}

export function initHeaderScroll(container: HTMLElement | null, scrolledTheme?: string) {
  destroyHeaderScroll();
  const header = document.querySelector<HTMLElement>("[data-header-ronn]");
  if (!header) return;
  headerEl = header;
  const DURATION = 0.45;
  const HIDE_EASE = "power2.inOut";
  const SHOW_EASE = "power3.out";
  const HIDE_AFTER = window.innerHeight * 0.5;
  const MIN_DELTA = 8;
  const TOP_ZONE = 50;
  const JUMP_LIMIT = window.innerHeight * 0.4;
  const REFRESH_GRACE = 300;
  let hidden = false;
  let inHideZone = false;
  let themeSwapped = false;
  const baseTheme = container?.dataset?.navTheme || "light";
  gsap.set(header, { clearProps: "transform" });

  function hide() {
    if (hidden) return;
    gsap.to(header, {
      yPercent: -130,
      duration: DURATION,
      ease: HIDE_EASE,
      overwrite: "auto",
      onComplete: () => {
        if (scrolledTheme) setHeaderTheme(scrolledTheme);
      },
    });
    hidden = true;
    themeSwapped = true;
  }
  function show() {
    if (!hidden) return;
    const y = getLenis()?.scroll ?? window.scrollY;
    if (scrolledTheme && y <= TOP_ZONE) setHeaderTheme(baseTheme);
    gsap.to(header, { yPercent: 0, duration: DURATION, ease: SHOW_EASE, overwrite: "auto" });
    hidden = false;
  }

  (container || document).querySelectorAll<HTMLElement>("[data-hide-nav]").forEach((el) => {
    const trigger = el.parentElement?.classList.contains("pin-spacer") ? el.parentElement : el;
    hideNavTriggers.push(
      ScrollTrigger.create({
        trigger,
        start: "top bottom",
        end: "bottom top",
        invalidateOnRefresh: true,
        onEnter: () => {
          inHideZone = true;
          hide();
        },
        onLeave: () => {
          inHideZone = false;
        },
        onEnterBack: () => {
          inHideZone = true;
          hide();
        },
        onLeaveBack: () => {
          inHideZone = false;
          show();
        },
      }),
    );
  });

  function restoreThemeAtTop(y: number) {
    if (!scrolledTheme || !themeSwapped) return;
    if (y <= TOP_ZONE && !hidden) {
      setHeaderTheme(baseTheme);
      themeSwapped = false;
    }
  }

  function onLenisScroll({ scroll, direction }: { scroll: number; direction: number }) {
    if (inHideZone) return;
    if (scroll > HIDE_AFTER && direction === 1 && !hidden) hide();
    else if (direction === -1 && hidden && !inHideZone) show();
    restoreThemeAtTop(scroll);
  }

  let lastY = window.scrollY;
  let ticking = false;
  let graceUntil = 0;
  const onRefresh = () => {
    lastY = window.scrollY;
    graceUntil = performance.now() + REFRESH_GRACE;
  };
  ScrollTrigger.addEventListener("refresh", onRefresh);

  function onNativeScroll() {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) >= MIN_DELTA) {
        const down = delta > 0;
        if (!down && (Math.abs(delta) > JUMP_LIMIT || performance.now() < graceUntil || ScrollTrigger.isRefreshing)) {
          lastY = y;
        } else if (y > HIDE_AFTER && down && !hidden) {
          hide();
          lastY = y;
        } else {
          if (!down && hidden && !inHideZone) show();
          lastY = y;
        }
      }
      restoreThemeAtTop(y);
      ticking = false;
    });
    ticking = true;
  }

  const lenis = getLenis();
  if (lenis) {
    lenis.on("scroll", onLenisScroll as never);
    scrollCleanup = () => {
      lenis.off("scroll", onLenisScroll as never);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    };
  } else {
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    scrollCleanup = () => {
      window.removeEventListener("scroll", onNativeScroll);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    };
  }
}

/* ------------------------------------------------------------------ */
/* Header entrance (first load only)                                   */
/* ------------------------------------------------------------------ */
let headerRevealed = false;

function headerParts() {
  const header = document.querySelector("[data-header-ronn]");
  if (!header) return [];
  return [
    header.querySelector(".header-ronn__cta-bar"),
    header.querySelector(".header-ronn__main"),
    header.querySelector(".header-ronn__breadcrumb"),
  ].filter(Boolean) as Element[];
}

/** Reveal the header instantly. */
export function revealHeaderNow() {
  if (headerRevealed) return;
  const parts = headerParts();
  if (!parts.length) return;
  gsap.set(parts, { autoAlpha: 1 });
  headerRevealed = true;
}

/** Add the staggered header reveal to an entrance timeline at `position`. */
export function addHeaderEntrance(tl: gsap.core.Timeline, position: string | number) {
  if (headerRevealed) return;
  const header = document.querySelector("[data-header-ronn]");
  if (!header) return;
  const bar = header.querySelector(".header-ronn__cta-bar");
  const main = header.querySelector(".header-ronn__main");
  const crumb = header.querySelector(".header-ronn__breadcrumb");
  gsap.set([bar, main, crumb].filter(Boolean), { autoAlpha: 0 });
  if (bar) tl.fromTo(bar, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" }, position);
  if (main) tl.fromTo(main, { autoAlpha: 0, y: -15 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" }, `${position}+=0.15`);
  if (crumb) tl.fromTo(crumb, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: "power2.out" }, `${position}+=0.4`);
  tl.call(() => {
    headerRevealed = true;
  });
}

/* ------------------------------------------------------------------ */
/* Breadcrumb                                                          */
/* ------------------------------------------------------------------ */
function escapeHtml(s: string) {
  const span = document.createElement("span");
  span.textContent = s || "";
  return span.innerHTML;
}

export function renderBreadcrumb(container: HTMLElement) {
  const nav = document.querySelector<HTMLElement>(".header-ronn__breadcrumb");
  const track = nav?.querySelector<HTMLElement>(".header-ronn__breadcrumb-track");
  if (!nav || !track) return;
  let crumbs: Array<{ label: string; url: string }> = [];
  try {
    crumbs = container.dataset.breadcrumbs ? JSON.parse(container.dataset.breadcrumbs) : [];
  } catch {
    crumbs = [];
  }
  if (!crumbs.length) {
    nav.classList.add("header-ronn__breadcrumb--empty");
    track.innerHTML = "";
    return;
  }
  track.innerHTML = crumbs
    .map((c, i) => {
      const sep = i > 0 ? '<span class="header-ronn__breadcrumb-sep">/</span>' : "";
      return i === crumbs.length - 1
        ? `${sep}<span class="header-ronn__breadcrumb-link" aria-current="page">${escapeHtml(c.label)}</span>`
        : `${sep}<a href="${escapeHtml(c.url)}" class="header-ronn__breadcrumb-link header-ronn__breadcrumb-link--inactive">${escapeHtml(c.label)}</a>`;
    })
    .join("");
  nav.classList.remove("header-ronn__breadcrumb--empty");
  gsap.set(nav, { autoAlpha: 1 });
  track.scrollLeft = 0;
  updateBreadcrumbFades();
}

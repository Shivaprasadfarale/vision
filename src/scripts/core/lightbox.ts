/**
 * Gallery lightbox: any `[data-lightbox-full]` element opens the modal; images
 * from the same `[data-block]` form the navigable set. Arrow keys, Escape,
 * swipe and focus trapping are supported. Drags (>8px) never open it.
 */
import { getLenis } from "./lenis";

const SWIPE_THRESHOLD = 40;
const CLICK_TOLERANCE = 8;

export function initLightbox() {
  const modal = document.querySelector<HTMLElement>("[data-lightbox-modal]");
  if (!modal) return;
  const img = modal.querySelector<HTMLImageElement>(".lightbox__img")!;
  const prev = modal.querySelector<HTMLButtonElement>("[data-lightbox-prev]");
  const next = modal.querySelector<HTMLButtonElement>("[data-lightbox-next]");
  const closers = modal.querySelectorAll("[data-lightbox-close]");
  const visibleButtons = () => [...modal.querySelectorAll<HTMLButtonElement>("button")].filter((b) => !b.hidden);
  let items: Array<{ full: string; alt: string }> = [];
  let index = 0;
  let returnFocus: Element | null = null;
  const isOpen = () => modal.dataset.open === "true";
  const show = () => {
    const item = items[index];
    if (item) {
      img.src = item.full;
      img.alt = item.alt;
    }
  };
  const go = (i: number) => {
    if (!items.length) return;
    index = (i + items.length) % items.length;
    show();
  };
  function open() {
    show();
    modal!.hidden = false;
    void modal!.offsetHeight;
    modal!.dataset.open = "true";
    getLenis()?.stop();
    returnFocus = document.activeElement;
    modal!.querySelector<HTMLButtonElement>("button[data-lightbox-close]")?.focus();
  }
  function close() {
    modal!.dataset.open = "false";
    getLenis()?.start();
    setTimeout(() => {
      if (!isOpen()) {
        modal!.hidden = true;
        img.removeAttribute("src");
      }
    }, 300);
    (returnFocus as HTMLElement | null)?.focus?.();
    returnFocus = null;
  }
  function openFrom(trigger: HTMLElement) {
    const scope = trigger.closest("[data-block]") || document;
    const map = new Map<string, { full: string; alt: string }>();
    scope.querySelectorAll<HTMLElement>("[data-lightbox-full]").forEach((el) => {
      const full = el.dataset.lightboxFull!;
      if (!map.has(full)) map.set(full, { full, alt: el.dataset.lightboxAlt || "" });
    });
    items = [...map.values()];
    index = Math.max(0, items.findIndex((i) => i.full === trigger.dataset.lightboxFull));
    const single = items.length < 2;
    if (prev) prev.hidden = single;
    if (next) next.hidden = single;
    open();
  }
  let downX = 0;
  let downY = 0;
  document.addEventListener(
    "pointerdown",
    (e) => {
      downX = e.clientX;
      downY = e.clientY;
    },
    true,
  );
  document.addEventListener(
    "click",
    (e) => {
      const t = (e.target as Element).closest<HTMLElement>("[data-lightbox-full]");
      if (!t) return;
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > CLICK_TOLERANCE) return;
      e.preventDefault();
      openFrom(t);
    },
    true,
  );
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const t = (e.target as Element)?.closest?.<HTMLElement>("[data-lightbox-full]");
    if (t) {
      e.preventDefault();
      openFrom(t);
    }
  });
  prev?.addEventListener("click", () => go(index - 1));
  next?.addEventListener("click", () => go(index + 1));
  closers.forEach((c) => c.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === "ArrowRight") go(index + 1);
    else if (e.key === "Tab") {
      const btns = visibleButtons();
      const first = btns[0];
      const last = btns[btns.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!modal.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  let touchX = 0;
  modal.addEventListener("touchstart", (e) => (touchX = e.changedTouches[0].clientX), { passive: true });
  modal.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) >= SWIPE_THRESHOLD) go(dx < 0 ? index + 1 : index - 1);
    },
    { passive: true },
  );
}

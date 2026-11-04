/** `[data-scroll-next]` links smooth-scroll to the following block (or `data-scroll-target`). */
import { getLenis } from "./lenis";

const OFFSET = -80;

function nextBlock(el: Element) {
  let n = el.closest("[data-block]")?.nextElementSibling || null;
  while (n && !n.matches("[data-block]")) n = n.nextElementSibling;
  return n as HTMLElement | null;
}

function targetFor(el: Element) {
  const sel = el.getAttribute("data-scroll-target");
  return sel ? document.querySelector<HTMLElement>(sel) : nextBlock(el);
}

export function prepareScrollNext(root: ParentNode = document) {
  root.querySelectorAll("[data-scroll-next]").forEach((el) => {
    if (el.hasAttribute("data-scroll-target")) return;
    const t = nextBlock(el);
    if (!t) return;
    if (!t.id) t.id = t.dataset.block || "";
    el.setAttribute("href", "#" + t.id);
  });
}

let bound = false;
export function initScrollNext() {
  if (bound) return;
  bound = true;
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as Element).closest("[data-scroll-next]");
      if (!el) return;
      const target = targetFor(el);
      if (!target) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(target, { offset: OFFSET });
      else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + OFFSET, behavior: "smooth" });
    },
    true,
  );
}

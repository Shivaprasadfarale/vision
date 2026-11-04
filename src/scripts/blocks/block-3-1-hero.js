// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-3-1-hero-anim).
import { d as a, S as i } from "../vendor/gsap-core.js";
import { a as n } from "../core/exports.js";
a.registerPlugin(i);
function c(e) {
  if (!e) return;
  const o = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    r = e.querySelector('[data-anim="title"]');
  if (o) {
    r && a.set(r, { autoAlpha: 1, y: 0 });
    return;
  }
  const t = a.timeline({ id: "block-3-1-hero", paused: !0 });
  (r && t.splitReveal(r, { duration: 1.2 }, 0),
    e.dataset.entrance === "above-fold"
      ? n.set(e, t)
      : i.create({
          trigger: e,
          start: "top 75%",
          onEnter: () => t.play(),
          onEnterBack: () => t.play(),
          onLeaveBack: () => t.reverse(),
        }));
}
export { c as init };

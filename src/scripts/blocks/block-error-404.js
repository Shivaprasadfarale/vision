// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-error-404-anim).
import { d as a, S as n } from "../vendor/gsap-core.js";
import { a as s } from "../core/exports.js";
a.registerPlugin(n);
function p(e) {
  if (!e) return;
  const d = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    r = e.querySelector('[data-anim="title"]'),
    i = e.querySelector('[data-anim="subtitle"]'),
    o = e.querySelector('[data-anim="cta"]'),
    l = [r, i, o].filter(Boolean);
  if (d) {
    a.set(l, { autoAlpha: 1, y: 0 });
    return;
  }
  a.set(l, { autoAlpha: 0, y: 28 });
  const t = a.timeline({ id: "block-error-404", paused: !0 });
  (r && t.fadeSlideUp(r, { y: 28, duration: 0.9 }, 0),
    i && t.fadeSlideUp(i, { y: 24, duration: 0.7 }, "<0.25"),
    o && t.fadeSlideUp(o, { y: 24, duration: 0.6 }, "<0.3"),
    e.dataset.entrance === "above-fold"
      ? s.set(e, t)
      : n.create({
          trigger: e,
          start: "top 75%",
          onEnter: () => t.play(),
          onEnterBack: () => t.play(),
          onLeaveBack: () => t.reverse(),
        }));
}
export { p as init };

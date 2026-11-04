// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-2-1-hero-anim).
import { d as r, S as n } from "../vendor/gsap-core.js";
import { a as c } from "../core/exports.js";
r.registerPlugin(n);
function p(e) {
  if (!e) return;
  const l = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    o = e.querySelector('[data-anim="title"]'),
    t = e.querySelector('[data-anim="image"]'),
    i = e.querySelector('[data-anim="card"]');
  if (l) {
    if ((r.set([o, i].filter(Boolean), { autoAlpha: 1, y: 0 }), t)) {
      const d = t.querySelector("[data-anim-img-inner]") || t;
      (r.set(t, { autoAlpha: 1 }), r.set(d, { clipPath: "none", scale: 1 }));
    }
    return;
  }
  i && r.set(i, { autoAlpha: 0, y: 60 });
  const a = r.timeline({ id: "block-2-1-hero", paused: !0 });
  (o && a.splitReveal(o, { duration: 1.2 }, 0),
    t && a.revealImage(t, { duration: 1 }, "<0.3"),
    i && a.fadeSlideUp(i, { y: 60, duration: 0.7 }, "<0.3"),
    e.dataset.entrance === "above-fold"
      ? c.set(e, a)
      : n.create({
          trigger: e,
          start: "top 75%",
          onEnter: () => a.play(),
          onEnterBack: () => a.play(),
          onLeaveBack: () => a.reverse(),
        }));
}
export { p as init };

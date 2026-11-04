// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-4-1-hero-anim).
import { d as a, S as l } from "../vendor/gsap-core.js";
import { a as d } from "../core/exports.js";
a.registerPlugin(l);
function f(e) {
  if (!e) return;
  const u = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    n = e.querySelector('[data-anim="title"]'),
    o = e.querySelector('[data-anim="description"]'),
    r = e.querySelector('[data-anim="image"]'),
    i = e.querySelector('[data-anim="btn"]');
  if (u) {
    if ((a.set([n, o, i].filter(Boolean), { autoAlpha: 1, y: 0 }), r)) {
      const s = r.querySelector("[data-anim-img-inner]") || r;
      (a.set(r, { autoAlpha: 1 }), a.set(s, { clipPath: "none", scale: 1 }));
    }
    return;
  }
  (o && a.set(o, { autoAlpha: 0, y: 24 }),
    i && a.set(i, { autoAlpha: 0, y: 24 }));
  const t = a.timeline({ id: "block-4-1-hero", paused: !0 });
  (n && t.splitReveal(n, { duration: 1.2 }, 0),
    o &&
      t.to(o, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.3),
    r && t.revealImage(r, { duration: 1 }, 0.3),
    i &&
      t.to(i, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.7),
    e.dataset.entrance === "above-fold"
      ? d.set(e, t)
      : l.create({
          trigger: e,
          start: "top 75%",
          onEnter: () => t.play(),
          onEnterBack: () => t.play(),
          onLeaveBack: () => t.reverse(),
        }));
}
export { f as init };

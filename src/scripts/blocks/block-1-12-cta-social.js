// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-1-12-cta-social-network-anim).
import { d as r, S as c } from "../vendor/gsap-core.js";
r.registerPlugin(c);
function m(e) {
  if (!e) return;
  const s = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    o = e.querySelector('[data-anim="cards"]'),
    a = Array.from(e.querySelectorAll('[data-anim="card"]')),
    n = e.querySelector('[data-anim="title"]'),
    l = e.querySelector('[data-anim="buttons"]'),
    i = Array.from(e.querySelectorAll('[data-anim="btn"]')),
    u = [o, n, l].filter(Boolean);
  if (s) {
    r.set(u, { autoAlpha: 1, y: 0 });
    return;
  }
  (r.set(o, { autoAlpha: 0 }),
    r.set(l, { autoAlpha: 0 }),
    r.set(i, { autoAlpha: 0, y: 16 }),
    a.forEach((d) => {
      r.set(d, { rotation: 0, xPercent: 0, yPercent: 0, scale: 0.9 });
    }));
  const t = r.timeline({ id: "block-1-12-cta-social", paused: !0 });
  (t.to(o, { autoAlpha: 1, duration: 0.3 }),
    a[1] &&
      t.to(
        a[1],
        { scale: 1, yPercent: -5, duration: 0.5, ease: "power2.out" },
        "<",
      ),
    a[0] &&
      t.to(
        a[0],
        {
          rotation: -13.25,
          xPercent: -42,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      ),
    a[2] &&
      t.to(
        a[2],
        {
          rotation: 13.25,
          xPercent: 42,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "<",
      ),
    n && t.splitReveal(n, { duration: 1.2 }, "-=0.2"),
    t.to(l, { autoAlpha: 1, duration: 0.1 }, "-=0.1"),
    t.to(
      i,
      { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "<",
    ),
    c.create({
      trigger: e,
      start: "top 75%",
      onEnter: () => t.play(),
      onEnterBack: () => t.play(),
      onLeaveBack: () => t.reverse(),
    }));
}
export { m as init };

// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-4-3-relevant-accompagnement-anim).
import { d as r, S as i } from "../vendor/gsap-core.js";
r.registerPlugin(i);
function c(t) {
  if (!t) return;
  const o = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    n = t.querySelector('[data-anim="title"]'),
    a = t.querySelectorAll('[data-anim="card"]');
  if (o) {
    r.set([n, ...a].filter(Boolean), { autoAlpha: 1, y: 0 });
    return;
  }
  r.set([...a], { autoAlpha: 0, y: 40 });
  const e = r.timeline({ id: "block-4-3-relevant-accompagnement", paused: !0 });
  (n && e.splitReveal(n, { duration: 1.2 }),
    a.length && e.fadeSlideUp([...a], { stagger: 0.15, duration: 0.8 }, "<0.3"),
    i.create({
      trigger: t,
      start: "top 75%",
      onEnter: () => e.play(),
      onEnterBack: () => e.play(),
      onLeaveBack: () => e.reverse(),
    }));
}
export { c as init, c as initBlock43RelevantAccompagnementAnim };

// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-5-2-advantages-anim).
import { d as a, S as o } from "../vendor/gsap-core.js";
a.registerPlugin(o);
function u(r) {
  if (!r) return;
  const i = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    t = r.querySelectorAll('[data-anim="figure"]');
  if (i) {
    a.set([...t], { autoAlpha: 1, y: 0, rotation: 0, scale: 1 });
    return;
  }
  const n = (s, c) =>
    (s % 2 ? -1 : 1) *
    (c.classList.contains("block-5-2-advantages__figure--diamond") ? 16 : 10);
  a.set([...t], { autoAlpha: 0, y: 60, scale: 0.85, rotation: n });
  const e = a.timeline({ id: "block-5-2-advantages", paused: !0 });
  (t.length &&
    e.to([...t], {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.9,
      ease: "back.out(1.6)",
      stagger: 0.15,
    }),
    o.create({
      trigger: r,
      start: "top 75%",
      onEnter: () => e.play(),
      onEnterBack: () => e.play(),
      onLeaveBack: () => e.reverse(),
    }));
}
export { u as init, u as initBlock52AdvantagesAnim };

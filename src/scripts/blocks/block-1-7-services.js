// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-1-7-services-anim).
import { _ as n } from "../core/exports.js";
import { d as i, S as o } from "../vendor/gsap-core.js";
i.registerPlugin(o);
function s(e, r, a) {
  if (!r) return;
  if (a) {
    i.set(r, { autoAlpha: 1, clearProps: "transform" });
    return;
  }
  i.set(r, { autoAlpha: 0 });
  const t = i.timeline({ paused: !0 });
  (t.splitReveal(r, { duration: 1 }),
    o.create({ trigger: e, start: "top 80%", onEnter: () => t.play() }));
}
function d(e) {
  if (!e) return;
  const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    a = e.querySelector('[data-anim="title"]');
  (s(e, a, r),
    e.dataset.servicesTotem !== void 0 &&
      n(
        () => import("../lib/services-totem.js"),
        [],
        import.meta.url,
      ).then((t) => t.initServicesTotem(e)));
}
export { d as init, d as initBlockServicesAnim };

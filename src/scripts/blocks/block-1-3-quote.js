// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (block-1-3-quote-anim).
import { S as it, m as nt, _ as W } from "../core/exports.js";
import { d as m, S as Y } from "../vendor/gsap-core.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { g as T } from "../lib/matrix.js";
import { i as Z, b as ct } from "../lib/totem-sway.js";
import { b as ut } from "../lib/totem-formation.js";
import { buildMainQuoteTimeline as pt } from "../lib/main-quote-reveal.js";
// MotionPathPlugin (was inlined in the original bundle) — use the npm build.
const ot = MotionPathPlugin;
m.registerPlugin(Y);
const Pt = 150,
  wt = 110,
  xt = 1024,
  U = 2,
  j = -200,
  z = 200,
  St = "top top",
  Tt = 0.5,
  I = 1;
function Q(r) {
  const e = [r];
  for (let t = 0; t < U; t++) (e.push(0), t < U - 1 && e.push(r));
  return e;
}
function bt(r, e) {
  const t = e.querySelector('[data-shape="diamond"]'),
    i = e.querySelector('[data-shape="triangle"]');
  !t ||
    !i ||
    (m.set(t, { y: j }),
    m.set(i, { y: z }),
    r.to(
      t,
      { keyframes: { y: Q(j), ease: "none" }, duration: I, ease: "none" },
      0,
    ),
    r.to(
      i,
      { keyframes: { y: Q(z), ease: "none" }, duration: I, ease: "none" },
      0,
    ));
}
function At(r, e) {
  if (!r || !e || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  const t = r.querySelector(".equilibre-totem");
  if (!t) return;
  let i = !1;
  const o = (c) => e.classList.toggle("is-landed", c.progress >= Tt),
    n = () => {
      i || ((i = !0), Z(r, e, { mobile: !0, start: St }));
    },
    a = m.timeline({
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "top top",
        scrub: !0,
        onUpdate: o,
        onLeave: n,
        onRefresh: (c) => {
          (o(c), c.progress >= 1 && n());
        },
      },
    });
  (a.fromTo(
    r,
    {
      y: () => {
        const c = window.innerWidth < xt ? wt : Pt;
        return -window.innerHeight * (c / 100);
      },
    },
    { y: 0, duration: I, ease: "none" },
    0,
  ),
    bt(a, t));
}
m.registerPlugin(Y);
const Rt = 0.96;
function Lt(r, e, t, i) {
  if (
    !r ||
    !e ||
    !t ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const o = e.querySelector(".equilibre-totem");
  if (!o) return;
  const n = t.classList.contains("block-1-3-quote--totem-left"),
    a = r.duration() || i;
  ut(o, { flipX: !n, target: r, base: a * 0.04, span: a * 0.9 });
  const s = o.querySelector('[data-shape="sway"]'),
    c = o.querySelector('[data-shape="diamond"]'),
    h = ct(o);
  if (s && c && h) {
    let u = !1,
      l = [];
    const g = (y) => {
      y !== u &&
        ((u = y),
        l.forEach((f) => f.kill()),
        (l = []),
        y
          ? h.play(0)
          : (h.pause(),
            (l = [
              m.to(s, {
                rotation: 0,
                svgOrigin: "142 545",
                duration: 0.4,
                ease: "power2.out",
              }),
              m.to(c, {
                rotation: 0,
                svgOrigin: "142 283",
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => m.set(c, { transformOrigin: "50% 50%" }),
              }),
            ])));
    };
    r.eventCallback("onUpdate", () => g(r.progress() >= Rt));
  }
}
m.registerPlugin(Y, ot);
const Mt = {
  destroy: () =>
    W(
      () => import("../lib/quote-exit-destroy.js"),
      [],
      import.meta.url,
    ),
  land: () =>
    W(
      () => import("../lib/quote-exit-land.js"),
      [],
      import.meta.url,
    ),
};
function J(r) {
  if (!r) return;
  const e = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    t = window.matchMedia("(min-width: 1024px)").matches,
    i = r.querySelector("[data-highlight-text]"),
    o = r.querySelector('[data-anim="totem"]'),
    n = r.querySelector(".block-1-3-quote__pin-wrapper");
  if (!i) return;
  if (e) {
    if ((m.set(i, { autoAlpha: 1 }), o)) {
      const d = o.querySelectorAll("[data-totem-shape]");
      d.length && m.set(d, { autoAlpha: 1 });
    }
    return;
  }
  const a = new it(i, { types: "words, chars" });
  if (!a.chars || !a.chars.length) return;
  m.set(a.chars, { opacity: 0.05 });
  const s = o ? [...o.querySelectorAll(".block-1-3-quote__totem-shape")] : [],
    c = r.classList.contains("block-1-3-quote--wiggle"),
    h = r.classList.contains("block-1-3-quote--stretch"),
    u = r.classList.contains("block-1-3-quote--assemble"),
    l = r.classList.contains("block-1-3-quote--fly-in"),
    g = r.dataset.quoteExit || null;
  let y = !1;
  const f = m.timeline({
      scrollTrigger: {
        trigger: r,
        start: "top top",
        end: "+=100%",
        pin: !0,
        pinSpacing: !0,
        pinType: t ? "transform" : "fixed",
        anticipatePin: 1,
        invalidateOnRefresh: !0,
        scrub: nt(),
        onLeave: () => {
          if (y || !g || !s.length) return;
          y = !0;
          const d = Mt[g];
          if (!d) {
            console.warn(`[block-1-3-quote] unknown exit type: "${g}"`);
            return;
          }
          d().then((w) => {
            const L = w.init || w.default;
            L && L(s, o, r);
          });
        },
      },
    }),
    p = 1 + a.chars.length * 0.1;
  if (
    (f.to(
      a.chars,
      { opacity: 1, duration: 40 * 0.1, stagger: 0.1, ease: "none" },
      0,
    ),
    o && h)
  )
    At(o, r);
  else if (o && c) Z(o, r, { mobile: !0 });
  else if (o && u) Lt(f, o, r, p);
  else if (o && n && s.length) {
    const d = r.classList.contains("block-1-3-quote--totem-left");
    l ? vt(f, o, p, d) : Ot(f, s, n, o, p, d);
  }
}
function vt(r, e, t, i) {
  const o = r.duration() || t;
  pt(e, { flipX: i, target: r, base: o * 0.04, span: o * 0.9 });
}
function Ot(r, e, t, i, o, n) {
  const a = i.offsetLeft,
    s = i.offsetTop,
    c = t.offsetWidth,
    h = t.offsetHeight,
    u = n ? c - a - i.offsetWidth : a,
    l = n ? 1 : -1;
  e.forEach((P) => (P.style.visibility = "visible"));
  const g = [3, 2, 1, 0],
    y = o * 0.05,
    f = (o * 0.8) / g.length,
    p = (P, d) => P + Math.random() * (d - P);
  g.forEach((P, d) => {
    const w = e[P],
      L = Math.random() > 0.5 ? 1 : -1,
      H = y + d * f;
    let b, M, v, D;
    (P === 3
      ? ((b = l * (u + p(130, 200))),
        (M = -(s + p(240, 310))),
        (v = l * (u * p(0.1, 0.2))),
        (D = -(s - p(60, 120))))
      : ((n ? d % 2 !== 0 : d % 2 === 0)
          ? ((b = l * p(100, 300)), (v = l * p(30, 80)))
          : ((b = -l * (u * p(0.3, 0.5))), (v = -l * (u * p(0.05, 0.15)))),
        (M = h - s + p(100, 250)),
        (D = (h - s) * p(0.15, 0.35))),
      m.set(w, { x: b, y: M }),
      r.to(
        w,
        {
          motionPath: {
            path: [
              { x: b, y: M },
              { x: v, y: D },
              { x: 0, y: 0 },
            ],
            curviness: p(1.8, 2.8),
          },
          duration: f * 1.2,
          ease: "none",
        },
        H,
      ),
      r.fromTo(
        w,
        { rotation: L * p(40, 120) },
        { rotation: 0, duration: f * 1.2, ease: "power2.out" },
        H,
      ));
  });
}
const It = Object.freeze(
  Object.defineProperty(
    { __proto__: null, init: J, initBlockQuoteAnim: J },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { ot as M, It as b, J as init };

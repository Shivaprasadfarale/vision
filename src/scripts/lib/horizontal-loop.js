// @ts-nocheck
// Ported from the original Ronnsquare theme bundle (horizontal-loop).
import { d as T } from "../vendor/gsap-core.js";
import { D as J } from "../vendor/draggable.js";
// InertiaPlugin (inlined in the original bundle) — use the npm build.
import { InertiaPlugin as z } from "gsap/InertiaPlugin";
T.registerPlugin(J, z);
function qe(s, e) {
  ((s = T.utils.toArray(s)), (e = e || {}));
  let i = e.onChange,
    r = 0,
    t = T.timeline({
      repeat: e.repeat,
      paused: e.paused,
      defaults: { ease: "none" },
      onUpdate:
        i &&
        function () {
          let g = t.closestIndex();
          r !== g && ((r = g), i(s[g], g));
        },
      onReverseComplete: () => t.totalTime(t.rawTime() + t.duration() * 100),
    }),
    n = s.length,
    p = s[0].offsetLeft,
    a = [],
    c = [],
    o = [],
    l = 0,
    h = !1,
    d = (e.speed || 1) * 100,
    f = e.snap === !1 ? (g) => g : T.utils.snap(e.snap || 1),
    _,
    u,
    v,
    b,
    k,
    y,
    w,
    I = (g, m, C) => {
      let P = g.length,
        S = 1e10,
        V = 0,
        N;
      for (; P--;)
        ((N = Math.abs(g[P] - m)),
          N > C / 2 && (N = C - N),
          N < S && ((S = N), (V = P)));
      return V;
    };
  for (
    T.set(s, {
      xPercent: (g, m) => {
        let C = (c[g] = parseFloat(T.getProperty(m, "width", "px")));
        return (
          (o[g] = f(
            (parseFloat(T.getProperty(m, "x", "px")) / C) * 100 +
              T.getProperty(m, "xPercent"),
          )),
          o[g]
        );
      },
    }),
      T.set(s, { x: 0 }),
      u =
        s[n - 1].offsetLeft +
        (o[n - 1] / 100) * c[n - 1] -
        p +
        s[n - 1].offsetWidth * T.getProperty(s[n - 1], "scaleX") +
        (parseFloat(e.paddingRight) || 0),
      w = 0;
    w < n;
    w++
  )
    ((y = s[w]),
      (v = (o[w] / 100) * c[w]),
      (b = y.offsetLeft + v - p),
      (k = b + c[w] * T.getProperty(y, "scaleX")),
      t
        .to(y, { xPercent: f(((v - k) / c[w]) * 100), duration: k / d }, 0)
        .fromTo(
          y,
          { xPercent: f(((v - k + u) / c[w]) * 100) },
          {
            xPercent: o[w],
            duration: (v - k + u - v) / d,
            immediateRender: !1,
          },
          k / d,
        )
        .add("label" + w, b / d),
      (a[w] = b / d));
  _ = T.utils.wrap(0, t.duration());
  function A(g, m) {
    ((m = m || {}), Math.abs(g - l) > n / 2 && (g += g > l ? -n : n));
    let C = T.utils.wrap(0, n, g),
      P = a[C];
    return (
      P > t.time() != g > l &&
        g !== l &&
        (P += t.duration() * (g > l ? 1 : -1)),
      (P < 0 || P > t.duration()) && (m.modifiers = { time: _ }),
      (l = C),
      (m.overwrite = !0),
      m.duration === 0 ? t.time(_(P)) : t.tweenTo(P, m)
    );
  }
  if (
    ((t.toIndex = (g, m) => A(g, m)),
    (t.closestIndex = (g) => {
      let m = I(a, t.time(), t.duration());
      return (g && ((l = m), (h = !1)), m);
    }),
    (t.current = () => (h ? t.closestIndex(!0) : l)),
    (t.next = (g) => A(t.current() + 1, g)),
    (t.previous = (g) => A(t.current() - 1, g)),
    (t.times = a),
    t.progress(1, !0).progress(0, !0),
    e.reversed && (t.vars.onReverseComplete(), t.reverse()),
    e.draggable && typeof J == "function")
  ) {
    let g = document.createElement("div"),
      m = T.utils.wrap(0, 1),
      C,
      P,
      S,
      V,
      N,
      se,
      oe = () => t.progress(m(P + (S.startX - S.x) * C)),
      ae = () => t.closestIndex(!0);
    (typeof z > "u" &&
      console.warn(
        "InertiaPlugin required for momentum-based scrolling and snapping.",
      ),
      (S = J.create(g, {
        trigger: s[0].parentNode,
        type: "x",
        onPressInit() {
          let D = this.x;
          (T.killTweensOf(t),
            (se = !t.paused()),
            t.pause(),
            (P = t.progress()),
            (C = 1 / u),
            (N = P / -C - D),
            T.set(g, { x: P / -C }));
        },
        onDrag: oe,
        onThrowUpdate: oe,
        overshootTolerance: 0,
        inertia: !0,
        snap(D) {
          if (Math.abs(P / -C - this.x) < 10) return V + N;
          let ce = -(D * C) * t.duration(),
            ue = _(ce),
            Me = a[I(a, ue, t.duration())],
            G = Me - ue;
          return (
            Math.abs(G) > t.duration() / 2 &&
              (G += G < 0 ? t.duration() : -t.duration()),
            (V = (ce + G) / t.duration() / -C),
            V
          );
        },
        onRelease() {
          (ae(), S.isThrowing && (h = !0));
        },
        onThrowComplete: () => {
          (ae(), se && t.play());
        },
      })[0]),
      (t.draggable = S));
  }
  return (t.closestIndex(!0), (r = l), i && i(s[l], l), t);
}
export { qe as h };

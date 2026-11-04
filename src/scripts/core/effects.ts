/**
 * Registered GSAP effects shared by block animations (available on any
 * timeline thanks to `extendTimeline`):
 *  - splitReveal: lines slide up from a clipped wrapper (headings/paragraphs)
 *  - fadeSlideUp: fade + rise into place
 *  - clipReveal:  left-to-right clip-path wipe
 *  - revealImage: bottom-up clip reveal with a settling zoom
 */
import { gsap } from "gsap";
import SplitType from "split-type";

gsap.registerEffect({
  name: "splitReveal",
  effect: (targets: gsap.TweenTarget, cfg: { duration: number; stagger: number; ease: string }) => {
    const tl = gsap.timeline();
    gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
      const split = new SplitType(el, { types: "lines,words", lineClass: "reveal-line" });
      (split.lines || []).forEach((line) => {
        const wrap = document.createElement("div");
        wrap.className = "reveal-line-wrapper";
        line.parentNode!.insertBefore(wrap, line);
        wrap.appendChild(line);
      });
      tl.set(el, { autoAlpha: 1 });
      tl.from(split.lines, { y: "100%", opacity: 0, duration: cfg.duration, stagger: cfg.stagger, ease: cfg.ease }, "<");
    });
    return tl;
  },
  defaults: { duration: 1.5, stagger: 0.12, ease: "expo.out" },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "fadeSlideUp",
  effect: (targets: gsap.TweenTarget, cfg: { duration: number; stagger: number; ease: string }) =>
    gsap.to(gsap.utils.toArray(targets), { autoAlpha: 1, y: 0, duration: cfg.duration, stagger: cfg.stagger, ease: cfg.ease }),
  defaults: { y: 24, duration: 0.6, stagger: 0.12, ease: "power2.out" },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "clipReveal",
  effect: (targets: gsap.TweenTarget, cfg: { duration: number; ease: string }) =>
    gsap.to(gsap.utils.toArray(targets), { clipPath: "inset(0 0% 0 0)", duration: cfg.duration, ease: cfg.ease }),
  defaults: { from: "inset(0 100% 0 0)", duration: 0.7, ease: "power3.out" },
  extendTimeline: true,
});

gsap.registerEffect({
  name: "revealImage",
  effect: (targets: gsap.TweenTarget, cfg: { duration: number; scale: number; ease: string }) => {
    const tl = gsap.timeline();
    gsap.utils.toArray<HTMLElement>(targets).forEach((el) => {
      const inner = el.querySelector("[data-anim-img-inner]") || el;
      tl.set(el, { autoAlpha: 1 }, 0);
      tl.fromTo(
        inner,
        { clipPath: "inset(100% 0 0 0)", scale: cfg.scale, transformOrigin: "center center" },
        { clipPath: "inset(0% 0 0 0)", duration: cfg.duration, ease: cfg.ease },
        0,
      );
      tl.to(inner, { scale: 1, duration: cfg.duration * 1.4, ease: "power2.out" }, 0);
    });
    return tl;
  },
  defaults: { duration: 1, scale: 1.1, ease: "power3.inOut" },
  extendTimeline: true,
});

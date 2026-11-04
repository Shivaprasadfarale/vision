/** Generic `[data-parallax="trigger"]` scroll parallax (yPercent / xPercent). */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrub } from "./scrub";

gsap.registerPlugin(ScrollTrigger);

const conditions = {
  isMobile: "(max-width:479px)",
  isMobileLandscape: "(max-width:767px)",
  isTablet: "(max-width:991px)",
  isDesktop: "(min-width:992px)",
};

export function initParallax(root?: ParentNode) {
  const triggers = (root || document).querySelectorAll<HTMLElement>('[data-parallax="trigger"]');
  if (!triggers.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.matchMedia().add(conditions, (ctx) => {
    const { isMobile, isMobileLandscape, isTablet } = ctx.conditions as Record<string, boolean>;
    triggers.forEach((trigger) => {
      const disable = trigger.getAttribute("data-parallax-disable");
      if ((disable === "mobile" && isMobile) || (disable === "mobileLandscape" && isMobileLandscape) || (disable === "tablet" && isTablet)) return;
      const target = trigger.querySelector('[data-parallax="target"]') || trigger;
      const prop = (trigger.getAttribute("data-parallax-direction") || "vertical") === "horizontal" ? "xPercent" : "yPercent";
      const scrubAttr = trigger.getAttribute("data-parallax-scrub");
      const scrub = scrubAttr ? parseFloat(scrubAttr) : getScrub();
      const startAttr = trigger.getAttribute("data-parallax-start");
      const from = startAttr !== null ? parseFloat(startAttr) : 20;
      const endAttr = trigger.getAttribute("data-parallax-end");
      const to = endAttr !== null ? parseFloat(endAttr) : -20;
      const scrollStart = trigger.getAttribute("data-parallax-scroll-start") || "top bottom";
      const scrollEnd = trigger.getAttribute("data-parallax-scroll-end") || "bottom top";
      gsap.fromTo(
        target,
        { [prop]: from },
        {
          [prop]: to,
          ease: "none",
          scrollTrigger: { trigger, start: `clamp(${scrollStart})`, end: `clamp(${scrollEnd})`, scrub, invalidateOnRefresh: true },
        },
      );
    });
  });
}

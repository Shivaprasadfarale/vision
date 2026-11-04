/**
 * Lottie loader. `[data-lottie="trigger"]` animations are page-scoped (destroyed
 * on leave); `[data-lottie="persistent"]` ones live outside the Barba container
 * (e.g. the footer logo) and are mounted once.
 */
type LottieModule = typeof import("lottie-web").default;
type Mounted = { anim: ReturnType<LottieModule["loadAnimation"]>; observer: IntersectionObserver | null };

let pageAnims: Mounted[] = [];
let lazyObservers: IntersectionObserver[] = [];
let lottiePromise: Promise<LottieModule> | null = null;

function loadLottie() {
  if (!lottiePromise) lottiePromise = import("lottie-web").then((m) => m.default);
  return lottiePromise;
}

function whenNear(el: Element, cb: (l: LottieModule) => void) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) {
        obs.disconnect();
        loadLottie().then(cb);
      }
    },
    { rootMargin: "200px" },
  );
  io.observe(el);
  return io;
}

function boolAttr(el: Element, name: string, fallback = true) {
  const v = el.getAttribute(name);
  return v === null ? fallback : !(v === "false" || v === "0");
}

function mount(el: HTMLElement, lottie: LottieModule): Mounted | null {
  const path = el.getAttribute("data-lottie-src");
  if (!path) return null;
  const loop = boolAttr(el, "data-lottie-loop", true);
  const autoplay = boolAttr(el, "data-lottie-autoplay", true);
  const renderer = (el.getAttribute("data-lottie-renderer") || "svg") as "svg";
  const speed = parseFloat(el.getAttribute("data-lottie-speed") || "") || 1;
  const onScroll = el.getAttribute("data-lottie-play") === "scroll";
  const viewBox = el.getAttribute("data-lottie-viewbox");
  const rendererSettings: Record<string, unknown> = { progressiveLoad: true };
  if (viewBox && renderer === "svg") rendererSettings.viewBoxSize = viewBox;
  const anim = lottie.loadAnimation({ container: el, renderer, loop, autoplay: autoplay && !onScroll, path, rendererSettings });
  if (speed !== 1) anim.setSpeed(speed);
  anim.addEventListener("DOMLoaded", () => el.parentElement?.classList.add("is-lottie-mounted"));
  let observer: IntersectionObserver | null = null;
  if (onScroll && autoplay) {
    observer = new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? anim.play() : anim.pause())), { threshold: 0.25 });
    observer.observe(el);
  }
  return { anim, observer };
}

export async function initPageLotties(root?: ParentNode) {
  const all = [...(root || document).querySelectorAll<HTMLElement>('[data-lottie="trigger"]')];
  if (!all.length) return;
  const lazy = all.filter((el) => el.getAttribute("data-lottie-play") === "scroll");
  const eager = all.filter((el) => el.getAttribute("data-lottie-play") !== "scroll");
  lazy.forEach((el) => {
    lazyObservers.push(
      whenNear(el, (l) => {
        const m = mount(el, l);
        if (m) pageAnims.push(m);
      }),
    );
  });
  if (eager.length) {
    const l = await loadLottie();
    eager.forEach((el) => {
      const m = mount(el, l);
      if (m) pageAnims.push(m);
    });
  }
}

export async function initPersistentLotties() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-lottie="persistent"]')].filter((el) => !el.dataset.lottieMounted);
  for (const el of els) {
    el.dataset.lottieMounted = "1";
    if (el.getAttribute("data-lottie-play") === "scroll") whenNear(el, (l) => mount(el, l));
    else mount(el, await loadLottie());
  }
}

export function destroyPageLotties() {
  lazyObservers.forEach((o) => o.disconnect());
  lazyObservers = [];
  pageAnims.forEach(({ anim, observer }) => {
    observer?.disconnect();
    try {
      anim.destroy();
    } catch {}
  });
  pageAnims = [];
}

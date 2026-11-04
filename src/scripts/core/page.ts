/**
 * Page lifecycle — mirrors the original theme's initPage / destroyPage.
 *
 * initPage(container): sets header theme + page background, binds global UI
 * once, syncs the language switcher, then dynamically imports and runs the
 * animation module for every `[data-block]` in the container inside a single
 * gsap.context (so everything can be reverted on leave), plus parallax,
 * lotties, header hide-on-scroll and finally the page entrance timeline.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setHeaderTheme, initHeader, initHeaderScroll, destroyHeaderScroll } from "./header";
import { initAnimatedButtons } from "./buttons";
import { setInitialPageBg, initBgColorTriggers } from "./site-bg";
import { initParallax } from "./parallax";
import { initPageLotties, initPersistentLotties, destroyPageLotties } from "./lottie";
import { initLegalModals } from "./legal-modal";
import { initLightbox } from "./lightbox";
import { initNewsletterForms } from "./forms";
import { initCallback } from "./callback";
import { initScrollNext, prepareScrollNext } from "./scroll-next";
import { aboveFoldTimelines } from "./entrance-registry";

gsap.registerPlugin(ScrollTrigger);

type BlockModule = { init?: (el: HTMLElement) => unknown; default?: (el: HTMLElement) => unknown };
type Entrance = { buildEntrance: (c: HTMLElement, isTransition: boolean, aboveFold: gsap.core.Timeline | null, skip?: boolean) => gsap.core.Timeline | null };

// Block animation modules, keyed by file name (= data-block value).
const blockModules = import.meta.glob<BlockModule>("../blocks/*.js");
const blockLoaders = new Map<string, () => Promise<BlockModule>>(
  Object.entries(blockModules).map(([path, loader]) => [path.split("/").pop()!.replace(/\.js$/, ""), loader]),
);
const entranceModules = import.meta.glob<Entrance>("../entrances/*.js");

let ctx: gsap.Context | null = null;
let entranceTl: gsap.core.Timeline | null = null;
let isTransition = false;
let globalsBound = false;

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));

export async function initPage(container?: HTMLElement | null, opts: { skipEntrance?: boolean } = {}) {
  container = container || document.querySelector<HTMLElement>('[data-barba="container"]');
  if (!container) return;
  const namespace = container.dataset.barbaNamespace || "default";
  const viaTransition = isTransition;
  isTransition = true;
  if (!viaTransition) setHeaderTheme(container.dataset.navTheme || "light");
  destroyPage();
  setInitialPageBg(container);

  if (!globalsBound) {
    initHeader();
    initLegalModals();
    initLightbox();
    initPersistentLotties();
    initNewsletterForms();
    initCallback();
    initScrollNext();
    globalsBound = true;
  }

  // Keep the language switcher pointing at this page's translations.
  if (container.dataset.langUrls) {
    try {
      const urls = JSON.parse(container.dataset.langUrls);
      document.querySelectorAll<HTMLAnchorElement>("[data-lang]").forEach((a) => {
        const l = a.dataset.lang!;
        if (urls[l]) a.href = urls[l];
      });
    } catch {}
  }

  document.dispatchEvent(new CustomEvent("rs:legal-modal", { detail: { which: container.dataset.openModal || null } }));

  ctx = gsap.context(() => {}, container);
  if (viaTransition && !window.matchMedia("(min-width: 1024px)").matches) gsap.set(container, { clearProps: "transform" });
  ctx.add(() => initAnimatedButtons());
  prepareScrollNext(container);

  const blocks = [...container.querySelectorAll<HTMLElement>("[data-block]")];
  const loaded = await Promise.all(
    blocks.map(async (el) => {
      const loader = blockLoaders.get(el.dataset.block!);
      if (!loader) return null;
      return { el, mod: await loader() };
    }),
  );
  for (const item of loaded) {
    if (!item) continue;
    const init = item.mod.init || item.mod.default;
    if (init) ctx.add(() => init(item.el));
  }
  ctx.add(() => initParallax(container!));
  initPageLotties(container);

  const aboveFoldEl = container.querySelector('[data-entrance="above-fold"]');
  const aboveFold = aboveFoldEl ? aboveFoldTimelines.get(aboveFoldEl) || null : null;
  initHeaderScroll(container, container.dataset.navThemeScrolled);
  ctx.add(() => initBgColorTriggers(container!));

  await nextFrame();
  ScrollTrigger.sort();
  entranceTl?.kill();
  entranceTl = null;

  const loader = entranceModules[`../entrances/${namespace}.js`] || entranceModules["../entrances/default.js"];
  try {
    entranceTl = (await loader()).buildEntrance(container, viaTransition, aboveFold, opts.skipEntrance);
  } catch {
    entranceTl = (await entranceModules["../entrances/default.js"]()).buildEntrance(container, viaTransition, aboveFold, opts.skipEntrance);
  }
  const done = () => document.dispatchEvent(new CustomEvent("rs:entrance-complete", { detail: { firstLoad: !viaTransition } }));
  if (entranceTl) entranceTl.then(done);
  else done();
}

export function destroyPage() {
  destroyHeaderScroll();
  destroyPageLotties();
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  ScrollTrigger.getAll().forEach((t) => {
    if (t.vars.scrub && t.animation) t.animation.kill();
    t.kill();
  });
}

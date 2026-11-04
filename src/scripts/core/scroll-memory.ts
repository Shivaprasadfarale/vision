/** Per-URL scroll positions so browser back/forward restores where you were. */
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./lenis";

const positions = new Map<string, number>();

export function rememberScroll(url: string) {
  const lenis = getLenis();
  positions.set(url, lenis ? lenis.scroll : window.scrollY);
}

export function getRememberedScroll(url: string) {
  return positions.has(url) ? positions.get(url)! : null;
}

function jumpTo(y: number) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(y, { immediate: true });
    ScrollTrigger.update();
  } else window.scrollTo(0, y);
}

export function restoreScroll(y: number) {
  jumpTo(y);
}

/** Re-apply the restored position once late images have loaded (layout shift guard). */
export function restoreAfterImages(container: HTMLElement, y: number) {
  if (!container) return;
  const pending = [...container.querySelectorAll("img")].filter((i) => !i.complete);
  if (!pending.length) return;
  let done = false;
  let left = pending.length;
  const finish = () => {
    if (done) return;
    done = true;
    const lenis = getLenis();
    const cur = lenis ? lenis.scroll : window.scrollY;
    ScrollTrigger.refresh();
    if (Math.abs(cur - y) < 4) jumpTo(y);
  };
  const one = () => {
    if (--left <= 0) finish();
  };
  pending.forEach((img) => {
    img.addEventListener("load", one, { once: true });
    img.addEventListener("error", one, { once: true });
  });
  setTimeout(finish, 1500);
}

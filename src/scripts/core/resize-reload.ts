/**
 * The original theme reloads the page when the viewport *width* changes so all
 * pinned / measured scroll animations are rebuilt cleanly. Height-only changes
 * (mobile URL bar) are ignored. Paused during page transitions.
 */
let paused = false;

export function initResizeReload() {
  let width = document.documentElement.clientWidth;
  let timer: number;
  window.addEventListener("resize", () => {
    if (paused) return;
    const w = document.documentElement.clientWidth;
    if (w === width) return;
    width = w;
    clearTimeout(timer);
    timer = window.setTimeout(() => location.reload(), 300);
  });
}

export function pauseResizeReload() {
  paused = true;
}

export function resumeResizeReload() {
  paused = false;
}

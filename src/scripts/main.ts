/** Site bootstrap: smooth scroll, resize handling, Barba transitions, first page init. */
import "./core/effects";
import { initSmoothScroll } from "./core/lenis";
import { initResizeReload } from "./core/resize-reload";
import { initTransitions } from "./core/transitions";
import { initPage } from "./core/page";

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) document.documentElement.classList.add("is-safari");

function boot() {
  initSmoothScroll();
  initResizeReload();
  initTransitions();
  initPage(document.querySelector<HTMLElement>('[data-barba="container"]'));
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();

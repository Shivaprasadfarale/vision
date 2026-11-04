/**
 * "Callback in 1 min" links (`#callpage`, `[data-callpage]`).
 * When a CallPage widget id is configured (PUBLIC_CALLPAGE_ID) the original
 * third-party widget is lazy-loaded on first interaction exactly like the
 * production theme. Without it, a built-in callback request dialog is used.
 */
import { getLenis } from "./lenis";
import { bindForm } from "./forms";

declare global {
  interface Window {
    rsCallpageConfig?: { id?: string; showBubble?: boolean };
    callpage?: ((...args: unknown[]) => unknown) & { execute?: unknown; __cp?: unknown; methods?: unknown[] };
    __rsCpUserOpen?: boolean;
    __rsCpPendingOpen?: boolean;
  }
}

const POLYFILL = "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js";
const WIDGET = "//cdn-widget.callpage.io/build/js/callpage.js";
let widgetReady = false;
let widgetLoading = false;

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.async = true;
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function openWidget() {
  window.__rsCpUserOpen = true;
  window.callpage?.("api.widget.open");
}

function loadCallPage() {
  const cfg = window.rsCallpageConfig;
  if (widgetLoading || !cfg?.id || window.callpage) return;
  widgetLoading = true;
  const stub = function (this: { methods?: unknown[] }, cmd: string) {
    if (cmd === "__getQueue") return this.methods;
    if (cmd) {
      if (typeof window.callpage?.execute === "function") return (window.callpage.execute as (...a: unknown[]) => unknown).apply(this, arguments as never);
      (this.methods = this.methods || []).push({ arguments });
    }
  } as unknown as Window["callpage"];
  window.callpage = stub;
  window.callpage!.__cp = { id: cfg.id, version: "1.1" };
  const version = new Date().toISOString().split("T")[0].split("-").join("");
  loadScript(POLYFILL)
    .catch(() => {})
    .then(() => loadScript(`${WIDGET}?v=${version}`).catch(() => {}))
    .then(() => {
      const poll = setInterval(() => {
        if (typeof window.callpage?.execute !== "function") return;
        clearInterval(poll);
        window.callpage!("event.onWidgetOpened", () => {
          if (!window.__rsCpUserOpen) window.callpage!("api.widget.close");
          window.__rsCpUserOpen = false;
        });
        window.callpage!("event.onReady", () => {
          widgetReady = true;
          window.callpage!("api.scoring.toggle", false);
          window.callpage!(cfg.showBubble ? "api.button.autoshow" : "api.button.hide");
          if (window.__rsCpPendingOpen) {
            window.__rsCpPendingOpen = false;
            openWidget();
          }
        });
      }, 100);
      setTimeout(() => clearInterval(poll), 20000);
    });
}

/* Built-in callback dialog ------------------------------------------------ */
function openDialog() {
  const modal = document.querySelector<HTMLElement>("[data-callback-modal]");
  if (!modal) return;
  modal.hidden = false;
  void modal.offsetHeight;
  modal.classList.add("is-open");
  getLenis()?.stop();
  modal.querySelector<HTMLInputElement>("input[type=tel]")?.focus();
}
function closeDialog() {
  const modal = document.querySelector<HTMLElement>("[data-callback-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  getLenis()?.start();
  setTimeout(() => {
    if (!modal.classList.contains("is-open")) modal.hidden = true;
  }, 300);
}

let bound = false;
export function initCallback() {
  if (bound) return;
  bound = true;
  const useWidget = !!window.rsCallpageConfig?.id;
  if (useWidget) ["pointerdown", "keydown", "touchstart", "scroll"].forEach((ev) => window.addEventListener(ev, loadCallPage, { once: true, passive: true }));

  const modal = document.querySelector<HTMLElement>("[data-callback-modal]");
  if (modal) {
    modal.querySelectorAll("[data-callback-close]").forEach((el) => el.addEventListener("click", closeDialog));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeDialog();
    });
    bindForm(modal.querySelector("form"), {
      endpoint: "callback",
      successPopup: document.querySelector('[data-form-success="callback"]'),
      onSuccess: () => closeDialog(),
    });
  }

  document.addEventListener(
    "click",
    (e) => {
      const trigger = (e.target as Element).closest('a[href*="#callpage"], a[href="#cp-widget"], [data-callpage]');
      if (!trigger) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if (useWidget) {
        loadCallPage();
        if (widgetReady) openWidget();
        else window.__rsCpPendingOpen = true;
      } else openDialog();
    },
    true,
  );
}

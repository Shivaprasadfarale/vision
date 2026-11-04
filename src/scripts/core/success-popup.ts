/**
 * Form success popup — either a modal (with backdrop, focus + scroll lock) or a
 * toast-style card anchored above the form on mobile. Auto-dismisses.
 */
import { getLenis } from "./lenis";

const FADE_MS = 400;
const MOBILE = "(max-width: 47.9375em)";
const GAP = 16;
const MIN_TOP = 16;

type PopupEl = HTMLElement & { _sp?: { cleanup: () => void } | null };

export function showSuccessPopup(popup: PopupEl | null, { duration = 4000, anchor = null as HTMLElement | null } = {}) {
  if (!popup) return;
  const isModal = popup.classList.contains("success-popup--modal");
  popup.classList.remove("is-anchored");
  popup.style.top = "";
  const card = popup.querySelector<HTMLElement>(".success-popup__card") || popup;
  const closers = popup.querySelectorAll("[data-success-close]");
  popup._sp?.cleanup();
  const prevFocus = isModal ? (document.activeElement as HTMLElement | null) : null;
  if (isModal) getLenis()?.stop();
  popup.style.setProperty("--sp-duration", `${duration}ms`);
  popup.hidden = false;
  void popup.offsetWidth;
  if (!isModal && anchor && window.matchMedia(MOBILE).matches) {
    popup.classList.add("is-anchored");
    const r = anchor.getBoundingClientRect();
    popup.style.top = `${Math.max(r.top - GAP - popup.offsetHeight, MIN_TOP)}px`;
  }
  popup.classList.add("is-open");
  if (isModal) (card.querySelector<HTMLElement>(".success-popup__cta") || card.querySelector<HTMLElement>(".success-popup__close"))?.focus();

  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    clearTimeout(timer);
    document.removeEventListener("keydown", onKey);
    closers.forEach((c) => c.removeEventListener("click", close));
    popup._sp = null;
  };
  function close() {
    cleanup();
    popup!.classList.remove("is-open");
    if (isModal) getLenis()?.start();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      popup!.hidden = true;
      popup!.classList.remove("is-anchored");
      popup!.style.top = "";
      prevFocus?.focus?.();
    };
    const onEnd = (e: TransitionEvent) => {
      if (e.target === popup && e.propertyName === "opacity") {
        popup!.removeEventListener("transitionend", onEnd);
        finish();
      }
    };
    popup!.addEventListener("transitionend", onEnd);
    setTimeout(finish, FADE_MS);
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  closers.forEach((c) => c.addEventListener("click", close));
  if (isModal) document.addEventListener("keydown", onKey);
  const timer = setTimeout(close, duration);
  popup._sp = { cleanup };
}

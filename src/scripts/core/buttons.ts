/**
 * Splits button labels into per-character spans with a staggered transition
 * delay so the CSS hover "char roll" effect can run (tablet/desktop only).
 */
const CHAR_DELAY = 0.01;

export function initAnimatedButtons(root: ParentNode = document) {
  if (!window.matchMedia("(min-width: 48em)").matches) return;
  root.querySelectorAll<HTMLElement>("[data-button-animate-chars]").forEach((btn) => {
    const label =
      btn.querySelector<HTMLElement>(".btn__label") ||
      btn.querySelector<HTMLElement>(".quick-action__label") ||
      btn.querySelector<HTMLElement>(".header-ronn__btn-label") ||
      btn.querySelector<HTMLElement>(".header-ronn__cta-btn-label");
    if (!label) return;
    const text = (label.dataset.text || label.textContent || "").replace(/\n/g, " ");
    label.dataset.text = text;
    label.innerHTML = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.transitionDelay = `${i * CHAR_DELAY}s`;
      if (ch === " ") span.style.whiteSpace = "pre";
      label.appendChild(span);
    });
  });
}

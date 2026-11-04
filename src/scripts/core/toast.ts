/** Lightweight toast notifications with an aria-live region. */
let container: HTMLElement | null = null;
let live: HTMLElement | null = null;
let current: { el: HTMLElement; message: string; type: string } | null = null;

function getContainer() {
  if (!container || !document.body.contains(container)) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  return container;
}
function getLiveRegion() {
  if (!live || !document.body.contains(live)) {
    live = document.createElement("div");
    live.className = "toast-live-region";
    live.setAttribute("aria-live", "assertive");
    live.setAttribute("aria-atomic", "true");
    document.body.appendChild(live);
  }
  return live;
}

export function showToast(message: string, { type = "error", duration = 5000, position = "top" } = {}) {
  if (!message) return null;
  const wrap = getContainer();
  if (current && current.message === message && current.type === type) return current.el;
  wrap.dataset.position = position;
  wrap.replaceChildren();
  const el = document.createElement("div");
  el.className = "toast";
  el.dataset.state = type;
  el.textContent = message;
  wrap.appendChild(el);
  current = { el, message, type };
  const region = getLiveRegion();
  region.textContent = "";
  requestAnimationFrame(() => {
    el.classList.add("is-visible");
    region.textContent = message;
  });
  const remove = () => {
    el.remove();
    if (current?.el === el) current = null;
  };
  let hiding = false;
  const hide = () => {
    if (hiding) return;
    hiding = true;
    el.classList.remove("is-visible");
    el.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 400);
  };
  const timer = setTimeout(hide, duration);
  el.addEventListener("click", () => {
    clearTimeout(timer);
    hide();
  });
  return el;
}

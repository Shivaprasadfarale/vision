/**
 * Legal notice / privacy policy modals. Content is loaded lazily (on hover or
 * open) from static JSON generated from the legal pages, rendered into the
 * modal with a sidebar table of contents that tracks the visible section.
 */
import { getLenis } from "./lenis";

type Section = { slug: string; title: string; body: string };

function bindDocModal(doc: "legal" | "privacy", { param = null as string | null } = {}) {
  const modal = document.querySelector<HTMLElement>(`[data-${doc}-modal]`);
  if (!modal) return;
  const closers = modal.querySelectorAll(`[data-${doc}-close]`);
  const navList = modal.querySelector<HTMLElement>(`[data-${doc}-nav-list]`);
  const scroller = modal.querySelector<HTMLElement>(`[data-${doc}-scroll]`);
  let navButtons: HTMLButtonElement[] = [];
  let loading: Promise<void> | null = null;
  const base = modal.classList[0];
  const activeClass = `${base}__nav-item--active`;
  const dataKey = `${doc}Nav`;

  function open() {
    modal!.hidden = false;
    void modal!.offsetHeight;
    modal!.dataset.open = "true";
    getLenis()?.stop();
    load();
  }
  function close() {
    modal!.dataset.open = "false";
    getLenis()?.start();
    setTimeout(() => {
      if (modal!.dataset.open !== "true") modal!.hidden = true;
    }, 300);
  }
  function setActive(slug?: string) {
    navButtons.forEach((b) => {
      const on = b.dataset[dataKey] === slug;
      b.classList.toggle(activeClass, on);
      b.setAttribute("aria-current", on ? "true" : "false");
    });
  }
  function render(sections: Section[]) {
    if (!scroller || !navList) return;
    const items = sections.map((s) => {
      const section = document.createElement("section");
      section.className = `${base}__section`;
      section.id = `${doc}-section-${s.slug}`;
      section.dataset[`${doc}Section`] = s.slug;
      section.innerHTML = `<h3 class="${base}__section-title"></h3><div class="${base}__section-body">${s.body}</div>`;
      (section.firstElementChild as HTMLElement).textContent = s.title;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `${base}__nav-item`;
      btn.dataset[dataKey] = s.slug;
      btn.textContent = s.title;
      btn.addEventListener("click", () => {
        setActive(s.slug);
        scroller.scrollTo({ top: section.offsetTop - scroller.offsetTop, behavior: "smooth" });
      });
      return { section, btn };
    });
    scroller.replaceChildren(...items.map((i) => i.section));
    navList.replaceChildren(...items.map((i) => i.btn));
    navButtons = items.map((i) => i.btn);
    setActive(sections[0]?.slug);
    if (items.length > 1 && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive((e.target as HTMLElement).dataset[`${doc}Section`])),
        { root: scroller, rootMargin: "0px 0px -70% 0px", threshold: 0 },
      );
      items.forEach((i) => io.observe(i.section));
    }
  }
  function fallbackToPage() {
    const url = modal!.dataset.url;
    if (url && new URL(url, location.origin).pathname !== location.pathname) location.assign(url);
    else close();
  }
  function load() {
    if (loading) return loading;
    const lang = (document.documentElement.lang || "en").slice(0, 2);
    loading = fetch(`/api/legal/${doc}-${lang}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => render(data.sections))
      .catch(() => {
        loading = null;
        if (modal!.dataset.open === "true") fallbackToPage();
      });
    return loading;
  }

  if (param) {
    document.addEventListener(
      "click",
      (e) => {
        const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
        if (!a) return;
        try {
          if (new URL(a.href, location.origin).searchParams.get("modal") === param) {
            e.preventDefault();
            e.stopImmediatePropagation();
            open();
          }
        } catch {}
      },
      true,
    );
    if (new URLSearchParams(location.search).get("modal") === param) {
      requestAnimationFrame(() => {
        open();
        const u = new URL(location.href);
        u.searchParams.delete("modal");
        history.replaceState(history.state, "", u.pathname + u.search + u.hash);
      });
    }
  }
  document.addEventListener(
    "click",
    (e) => {
      if ((e.target as Element).closest(`[data-${doc}-open]`)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        open();
      }
    },
    true,
  );
  document.addEventListener(
    "pointerover",
    (e) => {
      if ((e.target as Element).closest?.(`[data-${doc}-open]`)) load();
    },
    true,
  );
  closers.forEach((c) => c.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.dataset.open === "true") close();
  });
  document.addEventListener("rs:legal-modal", (e) => {
    const which = (e as CustomEvent).detail?.which || null;
    if (which === doc) {
      if (modal.dataset.open !== "true") open();
    } else if (modal.dataset.open === "true") close();
  });
}

export function initLegalModals() {
  bindDocModal("legal", { param: "legal" });
  bindDocModal("privacy", { param: "privacy" });
}

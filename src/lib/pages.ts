/**
 * Centralised route metadata (title, description, Barba namespace, theme,
 * breadcrumbs, language alternates) for every page of the site.
 */
import meta from "../data/pages-meta.json";
import type { PageMeta } from "./types";

const pages = meta as Record<string, PageMeta>;

/** Look up a page by its key (e.g. "home", "realisations/abylsen", "404"). */
export function getPageMeta(key: string): PageMeta {
  const page = pages[key];
  if (!page) throw new Error(`Unknown page key: ${key}`);
  return page;
}

export function allPages() {
  return Object.entries(pages).map(([key, page]) => ({ key, ...page }));
}

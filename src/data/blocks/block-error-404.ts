/**
 * 404 error block. Keyed by "<page>/<section-index>".
 */
export type Error404Props = {
  title: string;
  subtitle: string;
  button: { label: string; href: string };
};

export const error404: Record<string, Error404Props> = {
  "404/01": {
    title: "404",
    subtitle: "Page not found",
    button: { label: "Discover our projects", href: "/en/realisations/" },
  },
};

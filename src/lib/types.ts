export type Crumb = { label: string; url?: string };

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  bodyClass: string;
  namespace: string;
  postId?: string;
  initialBg: "sable" | "maron" | "parme" | string;
  navTheme: string;
  navThemeScrolled?: string;
  hasBreadcrumb: boolean;
  breadcrumbs: Crumb[];
  frUrl: string;
  openModal?: string;
  ogImage?: string;
};

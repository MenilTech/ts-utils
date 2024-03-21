export interface WithCount {
  count: number;
}

export interface WithLabel {
  label: string;
}

export interface WithLink {
  link: string;
}


export interface Clickable extends WithLink {
  newPage?: boolean;
}

export function clickableLink({ link, newPage, pageName }: Clickable & { pageName?: string }) {
  if (newPage) return window.open(link, pageName ?? link.toString());
  return document.location.assign(link);
}

export interface CanLoad {
  loading?: boolean;
}

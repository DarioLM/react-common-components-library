export const LINK_TARGETS = ["_blank", "_parent", "_self", "_top"] as const;

export interface LinkProps {
    className?: string,
    theme?: "light" | "dark";
    to: string,
    content: string,
    target?: typeof LINK_TARGETS[number],
  }
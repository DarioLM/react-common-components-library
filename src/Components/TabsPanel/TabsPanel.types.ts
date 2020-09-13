
interface TabProps {
  label: string,
  value: number,
  loading?: boolean,
  disabled?: boolean,
  content: any,
}

export interface TabsPanelProps {
    className?: string,
    theme?: "light" | "dark";
    initTab?: TabProps,
    tabs: Array<TabProps>,
  }

interface TabProps {
  label: string,
  value: number,
  loading?: boolean,
  disabled?: boolean,
  content: any,
}

export interface TabsPanelProps {
    theme?: "light" | "dark";
    initTab?: TabProps,
    icon?: string,
    tabs: Array<TabProps>,
  }
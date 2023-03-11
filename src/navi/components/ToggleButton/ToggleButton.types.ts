export interface ToggleButtonProps {
  buttonType?: "button" | "icon";
  size?: "small" | "large";
  intent?: "muted" | "info" | "info-light" | "muted-light";
  defaultSelected?: string;
  disabled?: boolean;
  options?: ToggleButtonOptionsProps[];
  onSelect: (s: ToggleButtonOptionsProps) => void;
}

export interface ToggleButtonOptionsProps {
  id: string;
  text?: string;
  icon?: React.ReactElement;
  tooltipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  tooltipTitle?: string;
}

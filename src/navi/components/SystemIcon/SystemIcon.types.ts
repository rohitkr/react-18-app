import { HTMLAttributes } from "react";
import { ForwardedRef } from "react";

export type TooltipPositionTypes =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

export interface SystemIconProps extends HTMLAttributes<HTMLDivElement> {
  "data-testid"?: string;
  size?: "medium" | "small" | "large";
  tabIndex?: number;
  intent?:
    | "muted-dark"
    | "muted-light"
    | "info"
    | "warning"
    | "success"
    | "critical";
  disabled?: boolean;
  children: React.ReactNode;
  transparent?: boolean;
  onClick?: React.MouseEventHandler;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
}

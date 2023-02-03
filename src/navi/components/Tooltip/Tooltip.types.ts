import { TooltipProps as MuiTooltipProps } from "@material-ui/core/Tooltip";
import { ForwardedRef } from "react";

export type TooltipPositionTypes =
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
export interface NaviTooltipProps extends MuiTooltipProps {
  position: TooltipPositionTypes;
  "data-testid"?: string;
  showArrow?: boolean;
  size?: "compact" | "relaxed";
  title: string;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
  maxWidth?: number;
  open?: boolean
}

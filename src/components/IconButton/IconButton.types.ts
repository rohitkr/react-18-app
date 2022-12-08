import { ButtonProps as NaviButtonProps } from "../Button/Button.types";

export type TooltipPositionTypes =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

export interface IconButtonProps extends NaviButtonProps {
  title: string;
  tooltipPosition?: TooltipPositionTypes;
  showArrow?: boolean;
}

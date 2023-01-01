import { TooltipPositionTypes } from "./../Tooltip/Tooltip.types";
import { InputBaseProps as MuiInputBaseProps } from "@material-ui/core/InputBase";
import { CSSProperties } from "react";

export interface NavInputStyles extends CSSProperties {
  boxSizing: "border-box" | "content-box" | "initial" | "inherit";
}

export interface NaviInputProps extends MuiInputBaseProps {
  inputType: "default" | "disabled" | "success" | "critical" | "read-only";
  "data-testid"?: string;
  size?: "large" | "small";
  label?: string;
  // value?: string;
  maxCharacters?: number;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  moreInfo?: string;
  tooltipPlacement?: TooltipPositionTypes;
  minWidth?: number,
  maxWidth?: number
}

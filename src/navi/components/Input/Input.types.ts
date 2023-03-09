import { TooltipPositionTypes } from "./../Tooltip/Tooltip.types";
import { InputBaseProps as MuiInputBaseProps } from "@material-ui/core/InputBase";
import { CSSProperties, ForwardedRef } from "react";

export interface NavInputStyles extends CSSProperties {
  boxSizing: "border-box" | "content-box" | "initial" | "inherit";
}

export interface NaviInputProps
  extends Pick<MuiInputBaseProps, Exclude<keyof MuiInputBaseProps, "translate">> {
  inputType?: "default" | "disabled" | "success" | "critical" | "read-only";
  "data-testid"?: string;
  width?: string | number | 'auto' | 'inherit';
  size?: "large" | "small";
  label?: string;
  inputClassName?: string;
  maxCharacters?: number;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  requiredStateError?: string,
  moreInfo?: string;
  tooltipPlacement?: TooltipPositionTypes;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  ref?: ForwardedRef<HTMLInputElement>;
  translate?: string;
  defaultValue?: string;
}

import { TooltipPositionTypes } from "./../Tooltip/Tooltip.types";
import { TextFieldProps } from "@material-ui/core";
import { CSSProperties, ForwardedRef } from "react";

export interface NavInputStyles extends CSSProperties {
  boxSizing: "border-box" | "content-box" | "initial" | "inherit";
}

export interface NaviInputProps
  extends Pick<TextFieldProps, Exclude<keyof TextFieldProps, "translate" | "size">> {
    inputType?: "default" | "disabled" | "success" | "critical" | "read-only";
  "data-testid"?: string;
  dataValue?: string;
  size?: "large" | "small";
  label?: string;
  width?: string | number;
  maxCharacters?: number;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  moreInfo?: string;
  tooltipPlacement?: TooltipPositionTypes;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  ref?: ForwardedRef<HTMLInputElement>;
  translate?: string;
}

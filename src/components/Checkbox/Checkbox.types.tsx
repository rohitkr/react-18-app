import { CheckboxProps as MuiCheckboxProps } from "@material-ui/core/Checkbox";

export type labelPlacementOptions = "bottom" | "top" | "end" | "start";
export type checkboxSizeTypes = "small" | "standard";

export interface CheckboxProps
  extends Pick<MuiCheckboxProps, Exclude<keyof MuiCheckboxProps, "size">> {
  "data-testid"?: string;
  size?: checkboxSizeTypes;
  label?: React.ReactNode | string;
  labelPlacement?: labelPlacementOptions;
  orientation?: "vertical" | "horizontal";
  spacing?: "sm" | "md" | "lg";
  justify?: boolean;
}

export interface CheckboxOptionProps
  extends Pick<CheckboxProps, Exclude<keyof CheckboxProps, "size">> {
  label: React.ReactNode | string;
  value: string;
  labelPlacement?: labelPlacementOptions;
  spacing?: "sm" | "md" | "lg";
  justify?: boolean;
  size?: checkboxSizeTypes;
}

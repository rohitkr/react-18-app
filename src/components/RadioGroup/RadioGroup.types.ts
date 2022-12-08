import { RadioProps as MuiRadioProps } from "@material-ui/core/Radio";
import { RadioGroupProps as MuiRadioGroupProps } from "@material-ui/core/RadioGroup";

export type labelPlacementOptions = "bottom" | "top" | "end" | "start";
export type radioSizeTypes = "small" | "standard";

export interface RadioGroupProps extends MuiRadioGroupProps {
  size?: radioSizeTypes;
  labelPlacement?: labelPlacementOptions;
  options?: RadioOptionProps[];
  orientation?: "vertical" | "horizontal";
  spacing?: "sm" | "md" | "lg";
  justify?: boolean;
}

export interface RadioProps
  extends Pick<MuiRadioProps, Exclude<keyof MuiRadioProps, "size">> {
  "data-testid"?: string;
  label?: React.ReactNode | string;
}

export interface RadioOptionProps
  extends Pick<RadioProps, Exclude<keyof RadioProps, "size">> {
  label: React.ReactNode | string;
  value: string;
  labelPlacement?: labelPlacementOptions;
  orientation?: "vertical" | "horizontal";
  spacing?: "sm" | "md" | "lg";
  justify?: boolean;
  size?: radioSizeTypes;
}

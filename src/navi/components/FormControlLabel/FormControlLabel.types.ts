import { FormControlLabelProps as MuiFormControlLabelProps } from "@material-ui/core/FormControlLabel";
import { FormControlLabelClassKey } from "@material-ui/core/FormControlLabel";

interface Styles extends Partial<Record<FormControlLabelClassKey, string>> {
  focusVisible?: string;
}

export interface FormControlLabelProps
  extends Pick<
    MuiFormControlLabelProps,
    Exclude<keyof MuiFormControlLabelProps, "size">
  > {
  classes?: Styles;
  label: React.ReactNode | string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  orientation?: "vertical" | "horizontal";
  justify?: boolean;
  spacing?: "none" | "sm" | "md" | "lg";
  "data-testid"?: string;
}

import { ForwardedRef } from "react";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
export interface ButtonProps
  extends Pick<MuiButtonProps, Exclude<keyof MuiButtonProps, "variant">> {
  buttonType?: 'button' | 'icon';
  rounded?: boolean;
  "data-testid"?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'selected';
  intent?: 'muted' | 'prime' | 'info' | 'critical' | 'warning' | 'success' | 'mutedLight';
  size?: 'large' | 'small';
  leadingIcon?: React.ReactNode | MuiButtonProps["startIcon"];
  trailingIcon?: React.ReactNode | MuiButtonProps["endIcon"];
  classes?: any;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
}
export interface MUIButtonProps {
  children?: any;
  variant?: "text" | "outlined" | "contained";
  size?: "large" | "small";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

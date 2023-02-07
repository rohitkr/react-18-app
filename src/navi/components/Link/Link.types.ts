import { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { ForwardedRef } from "react";
export interface LinkProps
  extends Pick<MuiLinkProps, Exclude<keyof MuiLinkProps, "variant" | "translate">> {
  "data-testid"?: string;
  size?: string | "xsmall" | "small" | "medium" | "large";
  classes?: any;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  leadingIcon?: React.ReactNode | boolean;
  trailingIcon?: React.ReactNode | boolean;
  forwardedRef?: ForwardedRef<HTMLLinkElement>;
  translate?: string;
}

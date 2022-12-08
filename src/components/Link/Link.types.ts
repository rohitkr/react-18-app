import { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

export interface LinkProps
  extends Pick<MuiLinkProps, Exclude<keyof MuiLinkProps, "variant">> {
  "data-testid"?: string;
  size?: string | "xsmall" | "small" | "medium" | "large";
  classes?: any;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  leadingIcon?: React.ReactNode | boolean;
  trailingIcon?: React.ReactNode | boolean;
}

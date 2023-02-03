import { ForwardedRef } from "react";
import { IconProps } from "tabler-icons-react";

export type BadgeIntentTypes =
  | "muted"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "orange"
  | "crimson";

export type BadgeVariantTypes = "neutral" | "bold" | "transparent" | "outline";

export type BadgeTypes = "status" | "notification";

export type BadgeSizeTypes = "large" | "small";
export interface BadgeProps {
  type: BadgeTypes;
  label?: string;
  variant?: BadgeVariantTypes;
  size?: BadgeSizeTypes;
  intent?: BadgeIntentTypes;
  LeadingIcon?: React.FunctionComponent<IconProps>;
  leadingIconProps?: Object;
  TrailingIcon?: React.FunctionComponent<IconProps>;
  trailingIconProps?: Object;
  dataTestId?: string;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
}

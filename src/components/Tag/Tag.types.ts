import { ForwardedRef } from "react";
export type TagIntentTypes =
  | "muted"
  | "info"
  | "success"
  | "warning"
  | "critical";
export type TagVariantTypes = "neutral" | "bold" | "outline";
export type TagSizeTypes = "large" | "small";
export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  variant?: TagVariantTypes;
  size?: TagSizeTypes;
  intent?: TagIntentTypes;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  dataTestId?: string;
  dismissible?: boolean;
  onDismiss?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  onHover?: (e: React.MouseEvent) => void;
  onFocus?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  tabIndex?: number;
  disabled?: boolean;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
  "data-testid"?: string
}

export interface DismissibleCloseIconProps {
  dismissible?: boolean;
  size: "small" | "large";
  handleDismiss: (e: React.MouseEvent) => void;
  intent:
    | "info"
    | "success"
    | "warning"
    | "critical"
    | "muted"
    | "muted-light"
    | "muted-dark";
  variant: string;
  disabled: boolean;
}

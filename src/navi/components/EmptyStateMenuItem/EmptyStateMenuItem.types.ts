export interface EmptyStateMenuItemProps {
  size?: "large" | "small";
  title?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  value?: string | number;
  width?: string;
  "data-testid"?: string;
}

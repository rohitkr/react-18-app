import { MenuItemProps as MuiMenuItemProps } from "@material-ui/core/MenuItem";

export interface DescriptiveMenuItemProps extends MuiMenuItemProps {
  title?: string;
  size?: "large" | "small";
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  description?: string;
  avatarSrc?: string;
  avatar?: string;
  checked?: boolean;
  value: string | number;
  onMenuItemClick?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    value: string | number
  ) => void;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean;
  onBulkActionClick?: Function;
}

export interface DividerMenuItemProps {
  size?: "large" | "small";
  value?: string | number;
}

export interface EmptyStateMenuItemProps {
  size?: "large" | "small";
  title?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  value?: string | number;
}

export interface GroupHeadingMenuItemProps {
  size?: "large" | "small";
  title?: string;
  value?: string | number;
}
export interface MenuItemProps extends MuiMenuItemProps {
  title?: string;
  size?: "large" | "small";
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatarSrc?: string;
  avatar?: string;
  checked?: boolean;
  value: string | number;
  onMenuItemClick?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    value: string | number
  ) => void;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean;
  onBulkActionClick?: Function;
  isSelected?: boolean;
  children?: React.ReactNode;
}

import { MenuItemProps as MuiMenuItemProps } from "@material-ui/core/MenuItem";
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
  disabled?: boolean;
  "data-testid"?: string;
}

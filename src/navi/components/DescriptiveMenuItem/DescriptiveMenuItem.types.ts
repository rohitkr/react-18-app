import { MenuItemProps } from "../MenuItem/MenuItem.types";

export interface DescriptiveMenuItemProps extends MenuItemProps {
  title?: string;
  size?: "large" | "small";
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  description?: string;
  avatarSrc?: string;
  avatar?: string;
  checked?: boolean;
  value: string | number;
  _onMenuItemClick?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    value: string | number
  ) => void;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean;
  onBulkActionClick?: Function;
  disabled?: boolean;
  width?: string;
  "data-testid"?: string;
}

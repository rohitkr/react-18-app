import { MenuItemProps as MuiMenuItemProps } from "@material-ui/core/MenuItem";

export enum MenuItemTypeEnum {
  GROUP_HEADING = "group-heading",
  BULK_ACTION = "bulk-action",
  TEXT_ONLY = "text-only",
  DIVIDER = "divider",
  EMPTY = "empty",
  DESCRIPTIVE = "descriptive",
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
  type?: MenuItemTypeEnum;
  onMenuItemClick?: Function;
  onCheckboxChange?: Function;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean;
  onBulkActionClick?: Function;
  bulkActionTooltip?: string;
  isSelected?: boolean;
  children?: React.ReactNode;
}

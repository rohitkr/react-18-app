export enum MenuItemTypeEnum {
  GROUP_HEADING = "group-heading",
  BULK_ACTION = "bulk-action",
  TEXT_ONLY = 'text-only',
  DIVIDER = "divider",
  EMPTY = "empty",
  DESCRIPTIVE = "descriptive",
}

export interface MenuItemProps {
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
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  onMenuItemClick?: React.MouseEventHandler<HTMLLIElement>;
  onCheckboxChange?: Function;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean;
  onBulkActionClick?: Function
  bulkActionTooltip?: string;
}

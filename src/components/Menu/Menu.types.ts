import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
export interface MenuDataProps {
  title?: string;
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  value?: string;
  type?: "divider" | "select";
  divider?: boolean;
}
export interface MenuProps extends MuiMenuProps {
  size?: "small" | "large";
  open: boolean;
  anchorEl?: Element | null | undefined;
  onMenuChange?: (selectedItem: Object) => void;
  handleClose?: () => void;
  width?: string;
  height?: string;
  multiselect?: boolean;
  menuPlacement?:
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";
}

export enum MenuItemTypeEnum {
  GROUP_HEADING = "group-heading",
  BULK_ACTION = "bulk-action",
  DIVIDER = "divider",
  EMPTY = "empty",
}

export interface MenuItemProps {
  title?: string;
  size?: "large" | "small";
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatarSrc?: string;
  avatarText?: string;
  checked?: boolean;
  value: string;
  type?: MenuItemTypeEnum;
  onMenuItemClick?: React.MouseEventHandler<HTMLLIElement>;
  onCheckboxChange?: Function;
  selectable?: boolean;
  disableHoverStyle?: boolean;
  disableItemClick?: boolean
}

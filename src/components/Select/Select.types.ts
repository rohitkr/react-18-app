import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
import { MenuItemProps as MuiMenuItemProps } from "@material-ui/core/MenuItem";
import { NaviInputProps } from "../Input/Input.types";
export interface SelectDataProps {
  title?: string;
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  value?: string;
  checked?: boolean;
  type?: "divider" | "select";
  divider?: boolean;
  disabled?: boolean;
}
export interface SelectProps extends MuiMenuProps {
  open: boolean;
  size?: 'small' | 'large';
  anchorEl?: HTMLElement | null;
  multiSelect?: boolean;
  selectAll?: boolean;
  checkboxes?: boolean;
  inputProps?: NaviInputProps;
  onMenuChange?: (
    event: React.MouseEvent<{ name?: string; value?: unknown }>,
    child: React.ReactNode
  ) => void;
  data: SelectDataProps[];
}
export interface MenuItemProps {
  selectValue: string[];
  title?: string;
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  selected?: boolean;
  checkboxes?: boolean;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}

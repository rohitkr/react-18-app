import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
import { SelectProps } from "@material-ui/core/Select";
export interface MenuDataProps {
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
  // checked?: boolean;
}
export interface MenuProps extends MuiMenuProps {
  open: boolean;
  anchorEl?: HTMLElement | null;
  multiSelect?: boolean;
  selectAll?: boolean;
  onMenuChange?: (
    event: React.MouseEvent<{ name?: string; value?: unknown }>,
    // event: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => void;
  data: MenuDataProps[];
}
export interface MenuItemCardProps {
  title?: string;
  description?: string;
  trallingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  selected?: boolean;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  _onchange?: (
    event: React.MouseEvent<{ name?: string; value?: unknown }>,
    child: string,
    checked?: boolean,
  ) => void;
  // _onchange?: (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>,
  //   child: React.ReactNode
  // ) => void;
}

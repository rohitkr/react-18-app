import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
export interface MenuProps extends MuiMenuProps {
  size?: "small" | "large";
  open: boolean;
  anchorEl?: any;
  onMenuChange?: (selectedItem: Array<string | number>) => void;
  handleClose?: () => void;
  width?: string | number;
  height?: string | number;
  multiSelect?: boolean;
  selectedValue?: Array<string | number>;
  showSelectedValue?: boolean;
  children: React.ReactNode | React.ReactNode[];
  useSelectAll?: boolean;
  hideOnSelect?: boolean;
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

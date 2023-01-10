import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
export interface MenuProps extends MuiMenuProps {
  size?: "small" | "large";
  open: boolean;
  anchorEl: Element | null | undefined;
  onMenuChange?: (selectedItem: Array<string | number>) => void;
  handleClose?: () => void;
  width?: string;
  height?: string;
  multiSelect?: boolean;
  selectedValue?: Array<string | number>;
  showSelectedValue?: boolean;
  children: React.ReactNode | React.ReactNode[];
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

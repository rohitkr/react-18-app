import { ForwardedRef } from 'react';
export interface SplitButtonMenuProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onMenuItemClick?: (
    selectedMenuItem: {
      label: string;
      value: string;
      icon: React.ReactNode;
    },
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
}
export interface SplitButtonProps {
  size?: "small" | "large";
  intent?: "info-soft" | "info-bold" | "muted-light" | "muted-bold" | "prime";
  buttonIcon?: React.ReactNode;
  tooltipPosition?:
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
  tooltip: string;
  buttonText: string;
  menuItems: Array<React.ReactNode>;
  menuProps?: {
    open?: boolean;
    onMenuChange?: (selectedItem: Array<string | number>) => void;
    handleClose?: () => void;
    width?: string | number;
    height?: string | number;
    multiSelect?: boolean;
    selectedValue?: Array<string | number>;
    showSelectedValue?: boolean;
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
  };
  onChange?: (selectedMenuItem: Array<string | number>) => void;
  forwardedRef?: ForwardedRef<HTMLDivElement> | null;
}

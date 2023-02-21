import { DividerMenuItemProps } from "./../DividerMenuItem/DividerMenuItem.types";
import { EmptyStateMenuItemProps } from "../EmptyStateMenuItem/EmptyStateMenuItem.types";
import { DescriptiveMenuItemProps } from "./../DescriptiveMenuItem/DescriptiveMenuItem.types";
import { ForwardedRef } from "react";
import { GroupHeadingMenuItemProps } from "../GroupHeadingMenuItem/GroupHeadingMenuItem.types";
import { MenuItemType } from "../MenuItem/MenuItem.types";
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

type MenuItemsPropsContent = DescriptiveMenuItemProps &
  EmptyStateMenuItemProps &
  GroupHeadingMenuItemProps &
  DividerMenuItemProps;
interface MenuItemsProps extends MenuItemsPropsContent {
  type: MenuItemType;
}
export interface SplitButtonProps {
  id?: string;
  dataTestId?: string;
  size?: "small" | "large";
  intent?: "info-soft" | "info-bold" | "muted-light" | "muted-bold" | "prime";
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
  menuItems: Array<MenuItemsProps>;
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

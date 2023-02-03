import React from "react";
import { MenuItemProps } from "./MenuItem.types";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "./MenuItem.scss";

const MenuItemCard = ({
  title,
  size = "large",
  description,
  avatarSrc,
  avatar,
  trallingIcon,
  leadingIcon,
  value,
  disableHoverStyle = false,
  disableItemClick = false,
  isSelected,
  button,
  ...props
}: MenuItemProps) => {
  const MenuItemStyles = () => ({
    root: {
      "&:hover": {
        backgroundColor: disableHoverStyle ? "transparent" : "#F6F6F9",
      },
    },
  });

  const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

  const onMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!disableItemClick) {
      props.onMenuItemClick && props.onMenuItemClick(e, value);
      props.onClick && props.onClick(e);
    }
  };

  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item ${size} ${
        isSelected ? "navi-item-selected" : ""
      } `}
      disableGutters
      onClick={onMenuItemClick}
    >
      {props.children}
    </StyledMenuItem>
  );
};

export default MenuItemCard;

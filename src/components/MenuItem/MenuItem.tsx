import React from "react";
import Box from "../Box/Box";
import { MenuItemProps, MenuItemTypeEnum } from "./MenuItem.types";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import GroupHeadingMenuItem from "./GroupHeadingMenuItem";
import Divider from "../Divider/Divider";
import EmptyStateMenuItem from "./EmptyStateMenuItem";
import "./MenuItem.scss";
import DescriptiveMenuItem from "./DescriptiveMenuItem";

const MenuItemCard = ({
  title,
  size = "large",
  description,
  avatarSrc,
  avatar,
  trallingIcon,
  leadingIcon,
  checked = false,
  value,
  type = MenuItemTypeEnum.DESCRIPTIVE,
  disableHoverStyle = false,
  disableItemClick = false,
  ...props
}: MenuItemProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const MenuItemStyles = () => ({
    root: {
      "&:hover": {
        backgroundColor:
          type === MenuItemTypeEnum.DIVIDER ||
            type === MenuItemTypeEnum.GROUP_HEADING ||
            type === MenuItemTypeEnum.EMPTY ||
            type === MenuItemTypeEnum.BULK_ACTION ||
            disableHoverStyle
            ? "transparent"
            : "#F6F6F9",
      },
    },
  });

  const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

  const menuItemContent = React.useMemo(() => {
    switch (type) {
      case MenuItemTypeEnum.GROUP_HEADING:
        return <GroupHeadingMenuItem heading={title} />;
      case MenuItemTypeEnum.DIVIDER:
        return (
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            className={`divider-${size}`}
          >
            <Divider orientation="horizontal" />
          </Box>
        );
      case MenuItemTypeEnum.EMPTY:
        return <EmptyStateMenuItem />;
      default:
        return (
          <DescriptiveMenuItem
            {...props}
            title={title}
            description={description}
            leadingIcon={leadingIcon}
            avatarSrc={avatarSrc}
            avatar={avatar}
            type={type}
            checked={isChecked}
          />
        );
    }
  }, [type, isChecked]);

  const onMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!disableItemClick) {
      // TODO: Check the callback function arguments
      props.onMenuItemClick && props.onMenuItemClick(e);
    }
  };

  const handleTrailingIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    props.onBulkActionClick && props.onBulkActionClick(e);
  };

  return (
    <MenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item ${type || "descriptive"}-${size} ${isChecked ? "navi-item-selected" : ""
        } `}
      disableGutters
      onClick={(e) => {
        props.onClick && props.onClick(e);
        onMenuItemClick(e)
      }}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="inherit"
        padding="4px 8px"
      >
        {menuItemContent}
        {trallingIcon && (
          <Box
            className={`navi-menu-item-action-icon-${size} ${isChecked ? "navi-icon-selected" : ""
              }`}
            display="flex"
            onClick={handleTrailingIconClick}
            margin="0px 8px"
          >
            {trallingIcon}
          </Box>
        )}
      </Box>
    </MenuItem>
  );
};

export default MenuItemCard;

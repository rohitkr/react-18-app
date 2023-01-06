import React from "react";
import Box from "../Box/Box";
import { MenuItemProps, MenuItemTypeEnum } from "./Menu.types";
import MenuItem from "@material-ui/core/MenuItem";
import CheckBox from "../Checkbox/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import tokenObj from "../../tokens/build/json/tokens.json";
import GroupHeadingMenuItem from "./GroupHeadingMenuItem";
import Divider from "../Divider/Divider";
import EmptyStateMenuItem from "./EmptyStateMenuItem";
import PersonaMenuItem from "./PersonaMenuItem";
// import DescriptiveMenuItem from "./DescriptiveMenuItem";
import "./Menu.scss";
import BulkActionMenuItem from "./BulkActionMenuItem";

const TitleTypography = withStyles((theme) => ({
  root: {
    color: tokenObj["color-secondary-800"],
    fontFamily: tokenObj["text-body-03-font-family"],
    fontSize: tokenObj["text-body-03-font-size"],
    fontWeight: Number(tokenObj["text-body-03-font-weight"]),
    lineHeight: tokenObj["text-body-03-line-height"],
  },
}))(Typography);

const DescriptionTypography = withStyles((theme) => ({
  root: {
    color: tokenObj["color-secondary-600"],
    fontFamily: tokenObj["text-body-04-font-family"],
    fontSize: tokenObj["text-body-04-font-size"],
    fontWeight: Number(tokenObj["text-body-04-font-weight"]),
    lineHeight: tokenObj["text-body-04-line-height"],
    marginTop: tokenObj["spacing-2"],
  },
}))(Typography);

const MenuItemCard = ({
  title,
  size = "large",
  description,
  avatarSrc,
  avatarText,
  trallingIcon,
  leadingIcon,
  checked = false,
  value,
  type,
  disableHoverStyle = false,
  disableItemClick = false,
  selectable = false,
  ...props
}: MenuItemProps) => {
  const [isChecked, setCheck] = React.useState(checked);

  React.useEffect(() => {
    setCheck(checked);
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
      case MenuItemTypeEnum.BULK_ACTION:
        return <BulkActionMenuItem title={title} size={size} />;
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
          <PersonaMenuItem
            title={title}
            description={description}
            leadingIcon={leadingIcon}
            avatarSrc={avatarSrc}
            avatarText={avatarText}
            {...props}
          />
        );
    }
  }, [type]);

  const onMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!disableItemClick) {
      props.onMenuItemClick && props.onMenuItemClick(e);
    }
  };

  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item ${type}-${size} ${isChecked ? "navi-item-selected" : ""
        } `}
      onClick={onMenuItemClick}
    >
      <Box width="100%" display="flex" alignItems="center" height="inherit">
        {selectable && !type && (
          <Box margin="0 8px">
            <CheckBox
              label={""}
              value={value}
              checked={isChecked}
              size="small"
            />
          </Box>
        )}
        {menuItemContent}
        {trallingIcon && (
          <Box className="navi-menu-item-right-icon-container">
            {trallingIcon}
          </Box>
        )}
      </Box>
    </StyledMenuItem>
  );
};

export default MenuItemCard;

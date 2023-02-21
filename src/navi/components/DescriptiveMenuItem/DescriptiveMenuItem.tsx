import React from "react";
import Box from "../Box/Box";
import Avatar from "@material-ui/core/Avatar";
import tokenObj from "../../tokens/build/json/tokens.json";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "../Checkbox/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import "./DescriptiveMenuItem.scss";
import { DescriptiveMenuItemProps } from "./DescriptiveMenuItem.types";

const DescriptiveMenuItem: React.FC<DescriptiveMenuItemProps> = ({
  avatarSrc,
  avatar,
  title,
  description,
  leadingIcon,
  selectable = false,
  _onMenuItemClick,
  selected,
  trailingIcon,
  onBulkActionClick,
  disableHoverStyle,
  size,
  disableItemClick,
  value,
  button,
  width,
  disabled = false,
  ...props
}) => {
  const TitleTypography = withStyles((theme) => ({
    root: {
      color: disabled
        ? tokenObj["color-secondary-500"]
        : tokenObj["color-secondary-800"],
      fontFamily: tokenObj["text-body-03-font-family"],
      fontSize: tokenObj["text-body-03-font-size"],
      fontWeight: Number(tokenObj["text-body-03-font-weight"]),
      lineHeight: tokenObj["text-body-03-line-height"],
    },
  }))(Typography);

  const DescriptionTypography = withStyles((theme) => ({
    root: {
      color: disabled
        ? tokenObj["color-secondary-500"]
        : tokenObj["color-secondary-600"],
      fontFamily: tokenObj["text-body-04-font-family"],
      fontSize: tokenObj["text-body-04-font-size"],
      fontWeight: Number(tokenObj["text-body-04-font-weight"]),
      lineHeight: tokenObj["text-body-04-line-height"],
      marginTop: tokenObj["spacing-2"],
    },
  }))(Typography);

  const MenuItemStyles = () => ({
    root: {
      "&:hover": {
        backgroundColor:
          disableHoverStyle || disabled ? "transparent" : "#F6F6F9",
      },
    },
  });

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (!disableItemClick && !disabled) {
      _onMenuItemClick && _onMenuItemClick(e, value);
      props.onClick && props.onClick(e);
    }
  };

  const handleTrailingIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onBulkActionClick && onBulkActionClick(e);
  };

  const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);
  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`${
        selected ? "navi-item-selected" : ""
      } navi-menu-list-item descriptive-${size}`}
      disableGutters
      onClick={handleMenuItemClick}
      style={{ ...props.style, width }}
    >
      <Box
        width={width || "100%"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="inherit"
        padding="4px 8px"
      >
        <Box display="flex" width="100%" alignItems="center">
          {selectable && (
            <Box marginLeft="8px">
              <Checkbox
                label={""}
                value={value}
                checked={selected}
                size="small"
              />
            </Box>
          )}
          {leadingIcon && (
            <Box display="flex" marginLeft="8px">
              {leadingIcon}
            </Box>
          )}
          {(avatarSrc || avatar) && (
            <Box marginLeft="8px">
              {avatarSrc ? (
                <Avatar src={avatarSrc} />
              ) : (
                <Avatar>{avatar}</Avatar>
              )}
            </Box>
          )}
          <Box marginLeft="8px">
            <TitleTypography>{title}</TitleTypography>
            {description && (
              <DescriptionTypography>{description}</DescriptionTypography>
            )}
          </Box>
        </Box>

        {trailingIcon && (
          <Box
            className={`${
              selected ? "navi-icon-selected" : ""
            } navi-menu-item-action-icon-${size}`}
            display="flex"
            onClick={handleTrailingIconClick}
            margin="0px 8px"
          >
            {trailingIcon}
          </Box>
        )}
      </Box>
    </StyledMenuItem>
  );
};

export default React.memo(DescriptiveMenuItem);

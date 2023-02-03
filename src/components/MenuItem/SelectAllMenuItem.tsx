import React from "react";
import Box from "../Box/Box";
import tokenObj from "../../tokens/build/json/tokens.json";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "../Checkbox/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import "./SelectAllMenuItem.scss";

const SelectAllMenuItem: React.FC<any> = ({
  selectable = true,
  _onMenuItemClick,
  checked,
  disableHoverStyle,
  size,
  disableItemClick,
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
      _onMenuItemClick && _onMenuItemClick(e, "_select_all");
      props.onClick && props.onClick(e);
    }
  };

  const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);
  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item descriptive-${size} ${checked ? "navi-item-selected" : ""
        } `}
      disableGutters
      onClick={handleMenuItemClick}
    >
      <Box
        width="100%"
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
                value={"_select_all"}
                checked={checked}
                size="small"
              />
            </Box>
          )}
          <Box marginLeft="8px">
            <TitleTypography>Select all</TitleTypography>
          </Box>
        </Box>
      </Box>
    </StyledMenuItem>
  );
};

export default React.memo(SelectAllMenuItem);

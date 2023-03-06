import React from "react";
import Box from "../Box/Box";
import Divider from "../Divider/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import "./GroupHeadingMenuItem.scss";
import { withStyles } from "@material-ui/core/styles";
import tokenObj from "../../tokens/build/json/tokens.json";
import { GroupHeadingMenuItemProps } from "./GroupHeadingMenuItem.types";
const GroupHeadingMenuItem: React.FC<GroupHeadingMenuItemProps> = (props) => {
  const { size = "large" } = props;
  const MenuItemStyles = () => ({
    root: {
      height: size === "small" ? "36px" : "48px",
      color: tokenObj["color-secondary-800"],
      fontFamily: tokenObj["text-body-03-font-family"],
      fontSize:
        size === "small"
          ? tokenObj["text-body-04-font-size"]
          : tokenObj["text-body-03-font-size"],
      fontWeight: Number(tokenObj["text-body-03-font-weight"]),
      lineHeight:
        size === "small"
          ? tokenObj["text-body-03-line-height"]
          : tokenObj["text-body-04-line-height"],
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  });
  const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);
  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item`}
      disableGutters
      selected={false}
    >
      <Box height="inherit" padding="8px" width="100%" display="flex">
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          paddingTop="8px"
          paddingLeft="8px"
          paddingRight="8px"
        >
          <Box paddingRight="4px">{props.title}</Box>
          <Divider orientation="horizontal" paddingLeft="8px" />
        </Box>
      </Box>
    </StyledMenuItem>
  );
};

export default GroupHeadingMenuItem;

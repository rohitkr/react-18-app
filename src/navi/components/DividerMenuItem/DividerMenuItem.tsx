import React from "react";
import Box from "../Box/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "../Divider/Divider";
import { withStyles } from "@material-ui/core/styles";
import "./DividerMenuItem.scss";
import { DividerMenuItemProps } from "./DividerMenuItem.types";

const MenuItemStyles = () => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

const DividerMenuItem: React.FC<DividerMenuItemProps> = ({
  size = "large",
  width,
  ...props
}) => {
  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item divider-${size}`}
      disableGutters
    >
      <Box
        display="flex"
        alignItems="center"
        width={width || "100%"}
        className={`divider-${size}`}
        padding="0px 8px"
      >
        <Divider orientation="horizontal" />
      </Box>
    </StyledMenuItem>
  );
};

export default DividerMenuItem;

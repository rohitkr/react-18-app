import React from "react";
import Box from "../Box/Box";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import './EmptyStateMenuItem.scss'
import { EmptyStateMenuItemProps } from "./EmptyStateMenuItem.types";

const MenuItemStyles = () => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

const EmptyStateMenuItem: React.FC<EmptyStateMenuItemProps> = (props) => {
  const { size, title, leadingIcon, trailingIcon } = props;
  return (
    <StyledMenuItem
      {...props}
      disableRipple
      className={`navi-menu-list-item empty-${size}`}
      disableGutters
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {leadingIcon}
        <Box component="span" padding="0px 8px">
          {title}
        </Box>
        {trailingIcon}
      </Box>
    </StyledMenuItem>
  );
};

export default EmptyStateMenuItem;

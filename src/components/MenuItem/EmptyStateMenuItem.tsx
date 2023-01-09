import React from "react";
import Box from "../Box/Box";
import { MoodSad } from "tabler-icons-react";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const MenuItemStyles = () => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

const EmptyStateMenuItem: React.FC<any> = (props) => {
  const { size, description, leadingIcon, trailingIcon } = props;
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
        <Box component="span" padding="0px 8px">{description}</Box>
        {trailingIcon}
      </Box>
    </StyledMenuItem>
  );
};

export default EmptyStateMenuItem;
import React from "react";
import Box from "../Box/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "../Divider/Divider";
import { withStyles } from "@material-ui/core/styles";
import './DividerMenuItem.scss'

const MenuItemStyles = () => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const StyledMenuItem = withStyles(MenuItemStyles)(MenuItem);

const DividerMenuItem: React.FC<any> = (props) => {
  const { size } = props;
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
        width="100%"
        className={`divider-${size}`}
        padding="0px 8px"
      >
        <Divider orientation="horizontal" />
      </Box>
    </StyledMenuItem>
  );
};

export default DividerMenuItem;

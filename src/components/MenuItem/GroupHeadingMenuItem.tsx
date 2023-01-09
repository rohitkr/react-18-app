import React from "react";
import Box from "../Box/Box";
import Divider from "../Divider/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import "./GroupHeadingMenuItem.scss";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import tokenObj from "../../tokens/build/json/tokens.json";

const TitleTypography = withStyles((theme) => ({
  root: {
    color: tokenObj["color-secondary-800"],
    fontFamily: tokenObj["text-body-03-font-family"],
    fontSize: tokenObj["text-body-03-font-size"],
    fontWeight: Number(tokenObj["text-body-03-font-weight"]),
    lineHeight: tokenObj["text-body-03-line-height"],
  },
}))(Typography);

const GroupHeadingMenuItem: React.FC<any> = (props) => {
  const MenuItemStyles = () => ({
    root: {
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
      className={`navi-menu-list-item group-heading-${props.size}`}
      disableGutters
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
          <TitleTypography>{props.title}</TitleTypography>
          <Divider orientation="horizontal" paddingLeft="8px" />
        </Box>
      </Box>
    </StyledMenuItem>
  );
};

export default GroupHeadingMenuItem;

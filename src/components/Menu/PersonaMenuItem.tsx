import React from "react";
import Box from "../Box/Box";
import Avatar from "@material-ui/core/Avatar";
import tokenObj from "../../tokens/build/json/tokens.json";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

const PersonaMenuItem: React.FC<any> = ({
  avatarSrc,
  avatarText,
  title,
  description,
  leadingIcon,
}) => {
  return (
    <Box display="flex" width="100%" alignItems="center">
      {leadingIcon && (
        <Box className="navi-menu-item-left-icon-container" margin="0 8px">
          {leadingIcon}
        </Box>
      )}
      {(avatarSrc || avatarText) && (
        <Box className="navi-menu-item-avatar-container" margin="0 8px">
          {avatarSrc ? (
            <Avatar className="avatar-component" src={avatarSrc} />
          ) : (
            <Avatar className="avatar-component">{avatarText}</Avatar>
          )}
        </Box>
      )}
      <Box className="navi-menu-item-text-container">
        <TitleTypography>{title}</TitleTypography>
        {description && (
          <DescriptionTypography>{description}</DescriptionTypography>
        )}
      </Box>
    </Box>
  );
};

export default PersonaMenuItem;

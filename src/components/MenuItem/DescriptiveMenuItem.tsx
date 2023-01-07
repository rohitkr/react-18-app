import React from "react";
import Box from "../Box/Box";
import Avatar from "@material-ui/core/Avatar";
import tokenObj from "../../tokens/build/json/tokens.json";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MenuItemTypeEnum } from "./MenuItem.types";
import Checkbox from "../Checkbox/Checkbox";

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

const DescriptiveMenuItem: React.FC<any> = ({
  avatarSrc,
  avatar,
  title,
  description,
  leadingIcon,
  selectable = false,
  type,
  ...props
}) => {
  return (
    <Box display="flex" width="100%" alignItems="center">
      {selectable && type === MenuItemTypeEnum.DESCRIPTIVE && (
        <Box marginLeft="8px">
          <Checkbox
            label={""}
            value={props.checked}
            checked={props.checked}
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
        <Box className="navi-menu-item-avatar-container" marginLeft="8px">
          {avatarSrc ? (
            <Avatar className="avatar-component" src={avatarSrc} />
          ) : (
            <Avatar className="avatar-component">{avatar}</Avatar>
          )}
        </Box>
      )}
      <Box className="navi-menu-item-text-container" marginLeft="8px">
        <TitleTypography>{title}</TitleTypography>
        {description && (
          <DescriptionTypography>{description}</DescriptionTypography>
        )}
      </Box>
    </Box>
  );
};

export default DescriptiveMenuItem;

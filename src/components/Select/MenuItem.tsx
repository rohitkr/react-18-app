import React from "react";
import { MenuItemProps } from "./Select.types";
import {
  withStyles
} from '@material-ui/core';
import "./Select.scss";
import CheckBox from "../Checkbox/Checkbox";
import Box from "../Box/Box";
import Typography from '@material-ui/core/Typography'
import tokenObj from '../../tokens/build/json/tokens.json';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from "@material-ui/core/MenuItem";


const TitleTypography = withStyles((theme) => ({
  root: {
    color: tokenObj['color-secondary-800'],
    fontFamily: tokenObj['text-body-03-font-family'],
    fontSize: tokenObj['text-body-03-font-size'],
    fontWeight: Number(tokenObj['text-body-03-font-weight']),
    lineHeight: tokenObj['text-body-03-line-height'],
  }
}))(Typography);

const DescriptionTypography = withStyles((theme) => ({
  root: {
    color: tokenObj['color-secondary-600'],
    fontFamily: tokenObj['text-body-04-font-family'],
    fontSize: tokenObj['text-body-04-font-size'],
    fontWeight: Number(tokenObj['text-body-04-font-weight']),
    lineHeight: tokenObj['text-body-04-line-height'],
    marginTop: tokenObj['spacing-2']
  }
}))(Typography);

const MenuItemComp = ({
  title = "",
  multiSelect,
  selectValue,
  leadingIcon,
  avatar,
  description,
  trallingIcon,
  checked,
  checkboxes = true,

  // selectValue: string[];
  // title?: string;
  // description?: string;
  // trallingIcon?: React.ReactNode;
  // leadingIcon?: React.ReactNode;
  // avatar?: React.ReactNode;
  // multiSelect?: boolean;
  selected = false,
  // checkboxes?: boolean;
  value,
  // checked?: boolean;
  disabled = false,


  ...val }: MenuItemProps) => {

  return (<MenuItem {...val}>
    {multiSelect && checkboxes && <Box className="navi-menu-item-checkbox-container">
      <CheckBox checked={checked} label={undefined} value={""} />
    </Box>}
    {leadingIcon && <Box className="navi-menu-item-left-icon-container">
      {leadingIcon}
    </Box>}
    {avatar && <Box className="navi-menu-item-avatar-container">
      {typeof avatar === 'string' ?
        <Avatar className="avatar-component" src={avatar} /> :
        <Avatar className="avatar-component" >{avatar}</Avatar>}
    </Box>}
    <Box className="navi-menu-item-text-container">
      <TitleTypography>
        {title}
      </TitleTypography>
      {description && <DescriptionTypography>
        {description}
      </DescriptionTypography>}
    </Box>
    {trallingIcon && <Box className="navi-menu-item-right-icon-container">
      {trallingIcon}
    </Box>}
  </MenuItem>)
}

export default MenuItemComp
import React from "react";
import { MenuItemCardProps } from "./Menu.types";
import {
  withStyles
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import "./Menu.scss";
import CheckBox from "../Checkbox/Checkbox";
import Box from "../Box/Box";
import Typography from '@material-ui/core/Typography'
import tokenObj from '../../tokens/build/json/tokens.json';
import Avatar from '@material-ui/core/Avatar';

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


const MenuItemCard = ({
  title,
  description,
  avatar,
  trallingIcon,
  leadingIcon,
  multiSelect = false,
  value,
  disabled,
  checked,
  _onchange
}: MenuItemCardProps) => {
  const [isChecked, setCheck] = React.useState(checked);

  React.useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <MenuItem key={title} value={title}
      selected={checked}
      disabled={disabled}
      onClick={(e) => { console.log(e.target) }}
    >
      {multiSelect && <Box className="navi-menu-item-checkbox-container">
        {/* <CheckBox label={""} value="checked" checked={isChecked} size="small" /> */}
        <CheckBox 
        // checked={personName.indexOf(title) > -1} 
        label={undefined} value={""} />
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
    </MenuItem>
  )
}

export default MenuItemCard;

import React from "react";
import { MenuProps, MenuItemCardProps } from "./Menu.types";
import {
  Menu as MuiMenu,
  withStyles
} from '@material-ui/core';
import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
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


const MenuItemCard = ({ title,
  description,
  avatar,
  trallingIcon,
  leadingIcon,
  multiSelect = false,
  value,
  checked,
  _onchange
}: MenuItemCardProps) => {
  const [isChecked, setCheck] = React.useState(checked);

  React.useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <MenuItem
      value={value || title}
      data-my-value={value || title}
      onClick={(e) => {
        // const { myValue } = e.currentTarget.dataset;
        console.log(e.currentTarget.getAttribute("value"));
        setCheck(!isChecked);
        _onchange && _onchange(e, e.currentTarget.getAttribute("value") || "", isChecked);
      }}
      disableRipple
      className={`navi-menu-item-list-item ${isChecked ? 'navi-item-selected' : ''} `}
    >
      <Box className="navi-menu-item-list-item-content">
        {multiSelect && <Box className="navi-menu-item-checkbox-container">
          <CheckBox label={""} value="checked" checked={isChecked} size="small" />
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
      </Box>
    </MenuItem>
  )
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    minWidth: "320px"
  }
})((props: MuiMenuProps) => (
  <MuiMenu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     width: "100%",
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white
//       }
//     }
//   }
// }))(MenuItem);

const Menu: React.FC<MenuProps> = ({ onClose, data, multiSelect, selectAll, onMenuChange, ...props }) => {
  const [open, setOpen] = React.useState(props.open);
  const array: string[] = [];
  const [selecteData, setSelecteData] = React.useState(array);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);


  return (
    <>
      <StyledMenu
        anchorEl={props.anchorEl}
        onClose={(e, reason) => { setOpen(false); onClose && onClose(e, reason) }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onChange={(e) => { console.log("onSelect: ", e); }}
        {...props}
        className="navi-menu-component"
      >
        {data && data.map((val, i) => {
          return val.divider ?
            <Box
              key={i}
              style={{ width: "100%", height: "2px", margin: "12px 0", background: tokenObj['color-secondary-100'] }} /> :
            <MenuItemCard
              key={i}
              title={val.title}
              description={val.description}
              value={val.title}
              avatar={val.avatar}
              trallingIcon={val.trallingIcon}
              leadingIcon={val.leadingIcon}
              multiSelect={multiSelect}
              checked={val.checked || selectAll}
              _onchange={(event, value = "", checked) => {

                if (checked) {
                  setSelecteData([...selecteData, value]);
                } else {
                  setSelecteData([...selecteData.splice(selecteData.indexOf(value), 1)]);
                }

                console.log("selecteData: ", selecteData)
                onMenuChange && onMenuChange(event, selecteData);
              }}
            />
        }
        )}
      </StyledMenu>
    </>
  );
}
export default Menu;


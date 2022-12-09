import React from "react";
import { MenuProps } from "./Menu.types";
import {
  Select,
  Input,
  withStyles
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import "./Menu.scss";
import CheckBox from "../Checkbox/Checkbox";
import Box from "../Box/Box";
import Typography from '@material-ui/core/Typography'
import tokenObj from '../../tokens/build/json/tokens.json';
import Avatar from '@material-ui/core/Avatar';
import { MenuDataProps } from './Menu.types'
// import { TextInput } from "navi-design-system";
import TextInput from "../Input/Input";

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


const Menu: React.FC<MenuProps> = ({ onClose, data, multiSelect, selectAll, onMenuChange, ...props }) => {
  const [open, setOpen] = React.useState(props.open);
  const array: string[] = [];
  const [selecteData, setSelecteData] = React.useState(array);

  const [personName, setPersonName] = React.useState<string[]>([]);
  const [menuData, setMenuData] = React.useState<MenuDataProps[]>(data);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    const data = [...menuData];
    if (value instanceof Array) {
      if (value.length) {
        value.forEach((selectedValue) => {
          data.map((obj) => {
            obj.checked = obj.title === selectedValue;
            return obj;
          });
        });
      } else {
        data.map((obj) => {
          obj.checked = false;
          return obj;
        });
      }
      setMenuData([...data]);
    }

    setPersonName(value as string[]);
  };

  React.useEffect(() => {
    setMenuData(data);
  }, [data]);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);


  console.log(open);

  return (
    <Box className="navi-menu-component">
      {props.children}
      <Select
        multiple
        value={personName}
        onChange={handleChange}
        renderValue={(selected) => {
          return ((selected) as string[]).join(', ')
        }}
        input={<Input style={{ width: "600px" }} />}
        // input={
        //   <TextInput
        //     errorMessage="Error message"
        //     helperText="Helper text"
        //     inputType="default"
        //     label="Sample label"
        //     maxCharacters={100}
        //     minWidth={280}
        //     moreInfo="More information text"
        //     required
        //     size="large"
        //     successMessage="Success message"
        //     tooltipPlacement="top"
        //     type="default"
        //   />
        // }
        // style={{ visibility: "hidden", width: 0, height: 0 }}
        // open={open}
        onClose={() => {
          console.log("closing...");
          setOpen(false);
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
      >

        {menuData && menuData.map(({ avatar, leadingIcon, trallingIcon, title = "", description, checked, ...val }, i) => {

          if (checked && personName.indexOf(title) === -1) {
            setPersonName([...personName, title])
          }

          return val.divider ?
            <Box
              key={i}
              style={{ width: "100%", height: "2px", margin: "12px 0", background: tokenObj['color-secondary-100'] }} />
            :
            <MenuItem key={title} value={title}
              // selected={checked}
              disabled={val.disabled}
            // onClick={(e) => { console.log(e.target) }}
            >
              {multiSelect && <Box className="navi-menu-item-checkbox-container">
                {/* <CheckBox label={""} value="checked" checked={isChecked} size="small" /> */}
                <CheckBox checked={personName.indexOf(title) > -1} label={undefined} value={""} />
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
        }
        )}
      </Select>
    </Box>
  );
}
export default Menu;


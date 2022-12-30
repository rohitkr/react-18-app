import React from "react";
import { SelectProps, SelectDataProps, SelectItemCardProps } from "./Select.types";
import {
  Select,
  withStyles
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import "./Select.scss";
import CheckBox from "../Checkbox/Checkbox";
import Box from "../Box/Box";
import Typography from '@material-ui/core/Typography'
import tokenObj from '../../tokens/build/json/tokens.json';
import Avatar from '@material-ui/core/Avatar';
import TextInput from "../Input/Input";
import Divider from "../Divider/Divider";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "../IconButton/IconButton";
import MenuItemComp from "./MenuItem";

const Menu: React.FC<SelectProps> = ({
  onClose,
  data,
  multiSelect,
  selectAll,
  onMenuChange,
  inputProps,
  ...props }) => {
  // const [open, setOpen] = React.useState(props.open);
  const array: string[] = [];
  // const [selecteData, setSelecteData] = React.useState(array);

  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [menuData, setMenuData] = React.useState<SelectDataProps[]>(data);

  const handleChange = (value: unknown, selectAll: boolean) => {
    const data = [...menuData];

    if (selectAll) {
      selectAllOptions(true);
      return;
    }

    if (value instanceof Array) {
      if (value.length) {
        value.forEach((selectedValue) => {
          console.log("value: ", value)
          data.map((obj) => {
            obj.checked = (obj.title === selectedValue) || selectAll;
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

    setSelectValue(value as string[]);
  };

  const selectAllOptions = (select: boolean) => {
    const data = [...menuData];
    const value: string[] = [];
    if (select) {
      data.map((obj) => {
        obj.checked = true;
        obj.title && value.push(obj.title);
        return obj;
      });
    }
    // setMenuData([...data]);
    setSelectValue(value as string[]);
  }

  React.useEffect(() => {
    setMenuData(data);
  }, [data]);

  // React.useEffect(() => {
  //   setOpen(props.open);
  // }, [props.open]);

  console.log("selectValue: ", selectValue);
  return (
    <Box className="navi-menu-component">
      {props.children}
      <Select
        multiple={multiSelect}
        value={selectValue}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          const { value } = event.target;
          const selectAllOption = value instanceof Array && (value[0] === "select-all");
          handleChange(value, selectAllOption);
        }}
        renderValue={(selected) => {
          return typeof selected === 'string' ? selected : ((selected) as string[]).join(', ')
        }}
        input={
          <TextInput
            className="navi-select-input-container"
            {...inputProps}
            inputType={"default"}
          />
        }
        // onClose={() => {
        //   setOpen(false);
        // }}
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
        // startAdornment={
        //   <ClearIcon />
        // }
        endAdornment={
          <IconButton
            size="small"
            variant="tertiary"
            intent="muted"
            style={{ display: selectValue.length ? "block" : "none" }}
            title={"Clear"}
            onClick={() => {
              setSelectValue([]);
            }}
          >
            <ClearIcon />
          </IconButton>
        }
      >
        {selectAll ?
          <MenuItem
            value={"select-all"}
            // onClick={(e)={}}
            disabled={menuData.length === 0}>
            <MenuItemComp
              // avatar={avatar}
              // leadingIcon={leadingIcon}
              // trallingIcon={trallingIcon}
              // description={description}
              selectValue={selectValue}
              title={"Select All"}
              // checked={checked}
              multiSelect={multiSelect}
            />
          </MenuItem> : null}

        {menuData && menuData.map(({ avatar, leadingIcon, trallingIcon, title = "", description, checked, ...val }, i) => {

          if (checked && selectValue.indexOf(title) === -1) {
            setSelectValue([...selectValue, title])
          }

          return val.divider ?
            <Box
              key={i}
              style={{ width: "100%", height: "2px", margin: "12px 0", background: tokenObj['color-secondary-100'] }} />

            // <Divider orientation={"horizontal"} color="dark" />
            :

            <MenuItem
              key={title}
              value={title}
              disabled={val.disabled}>
              <MenuItemComp
                avatar={avatar}
                leadingIcon={leadingIcon}
                trallingIcon={trallingIcon}
                description={description}
                selectValue={selectValue}
                title={title}
                checked={checked}
                multiSelect={multiSelect}
                {...val}
              />
            </MenuItem>
        }
        )}
      </Select>
    </Box>
  );
}

export default Menu;

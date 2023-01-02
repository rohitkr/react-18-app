import React from "react";
import { SelectProps, SelectDataProps } from "./Select.types";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Box from "../Box/Box";
import tokenObj from '../../tokens/build/json/tokens.json';
import TextInput from "../Input/Input";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "../IconButton/IconButton";
import MenuItemComp from "./MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { InputAdornment } from '@material-ui/core';
import "./Select.scss";

const Menu: React.FC<SelectProps> = ({
  onClose,
  data,
  multiSelect,
  selectAll,
  onMenuChange,
  inputProps,
  ...props }) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [menuData, setMenuData] = React.useState<SelectDataProps[]>(data);
  const [open, setOpen] = React.useState(false);

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
    setSelectValue(value as string[]);
  }

  React.useEffect(() => {
    setMenuData(data);
  }, [data]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <Box className="navi-menu-component"
      ref={inputRef}
    >
      {props.children}
      <Select
        multiple={multiSelect}
        value={selectValue}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          const { value } = event.target;
          const selectAllOption = value instanceof Array && (value[0] === "select-all");
          console.log(inputRef.current);
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
        open={open}

        // Hide the actual dropdown select icon
        inputProps={{ IconComponent: () => null }}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
        // Placement of custom clear and dropdown icon button
        endAdornment={
          <InputAdornment position="start" style={{ marginRight: "0px" }}>
            <IconButton
              // position="start"
              // style={{ marginRight: "20px" }}
              size="small"
              variant="tertiary"
              intent="muted"
              style={{ display: selectValue.length ? "block" : "none", marginRight: "0px" }}
              title={"Clear"}
              onClick={() => {
                setSelectValue([]);
                setMenuData((oldData) => {
                  return oldData.map(v => {
                    v.checked = false;
                    return v;
                  });
                });
              }}
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              size="small"
              variant="tertiary"
              intent="muted"
              style={{ marginRight: "0px", transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}` }}
              title={"Open"}
              onClick={() => {
                setOpen(true);
              }}
            >
              <ArrowDropDown />
            </IconButton>
          </InputAdornment>
        }

        MenuProps={{
          // Height of the menu dropdown
          PaperProps: {
            style: {
              maxHeight: 'calc(100% - 200px)', minWidth: `calc(${inputRef.current?.offsetWidth}px + 100px`
            },
            className: "navi-menu-item-container",
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          className: "navi-menu-item-container",
          // anchorEl: inputRef.current,
          // getContentAnchorEl: () => inputRef.current,
          getContentAnchorEl: null
        }}
      >
        {selectAll ?
          <MenuItem
            value={"select-all"}
            className="navi-menu-item-list-item"
            disabled={menuData.length === 0}>
            <MenuItemComp
              selectValue={selectValue}
              title={"Select All"}
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
              className={`navi-menu-item-list-item ${checked ? 'navi-item-selected' : ''} `}
              disableRipple

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

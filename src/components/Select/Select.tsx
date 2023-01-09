import React from "react";
import { SelectProps, SelectDataProps } from "./Select.types";
import MuiSelect from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuItem from "../MenuItem/MenuItem";
import MenuItemComp from "./MenuItem";

import Box from "../Box/Box";
import TextInput from "../Input/Input";
import Divider from "../Divider/Divider";
// import ClearIcon from "tabler-icons-react";
import IconButton from "../IconButton/IconButton";
import { X, CaretDown } from "tabler-icons-react";
import { InputAdornment } from '@material-ui/core';
import "./Select.scss";
import { MenuItemProps } from "../MenuItem/MenuItem.types";

const Select: React.FC<SelectProps> = ({
  onClose,
  data = [],
  multiSelect,
  selectAll,
  onMenuChange,
  inputProps,
  checkboxes = true,
  size = 'large',
  children,
  ...props }) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [menuData, setMenuData] = React.useState<SelectDataProps[]>(data);
  const [open, setOpen] = React.useState(false);
  const [selectAllItems, setSelectAllItems] = React.useState(selectAll);
  const inputRef = React.useRef<any>(null);
  const [selectionMap, setSelectionMap] = React.useState(() => {
    if (multiSelect) {
      // if (children?.length) {
      if (React.Children.count(children)) {
        // const map = children.reduce((acc, child) => {

        const map = React.Children.toArray(children).reduce((acc, child) => {
          if (!React.isValidElement(child)) {
            return {};
          }

          if (!child.props.type) {
            // acc.props.checked = true;
            acc[child.props.value] = child.props.checked ? true : false;
          }
          return acc;
        }, {});
        
        // const map = React.Children.map(children, (child) => {
        //   if (!React.isValidElement(child)) {
        //     return null;
        //   }
      
        //   if (!child.props.type) {
        //     child.props.checked = child.props.checked ? true : false;
        //   }
        //   return child;
        // });
        return map;
      }
    }
    return {};
  });


  const onMenuItemClick = React.useCallback(
    // (event: React.MouseEventHandler<HTMLLIElement> | undefined) => {
    (event: React.MouseEventHandler<HTMLLIElement>) => {

      console.log(event);
      // if (!multiSelect) {
      //   props.onChange && props.onChange({ value, title });
      //   handleClose();
      // } else {
      //   let updatedMap = { ...selectionMap, [value]: !selectionMap[value] };
      //   setSelectionMap(updatedMap);
      //   props.onChange && props.onChange(updatedMap);
      // }
    },
    [selectionMap]
  );

  // const onMenuItemClick = (event: any) => {
  //   console.log(event.value);
  // };


  const handleChange = (value: unknown) => {
    const data = [...menuData];

    if (selectAll) {
      return;
    }

    if (value instanceof Array) {
      if (value.length) {
        value.forEach((selectedValue) => {
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
    const value: string[] = [""];

    if (select) {
      data.map((obj) => {
        obj.checked = true;
        obj.title && value.push(obj.title);
        return obj;
      });
      value.push('select-all');
      setSelectValue(value);
    } else {
      setSelectValue(['']);
      setMenuData((val) => {
        val.map((obj) => {
          obj.checked = false;
          return obj;
        });
        return val
      });
    }
  }

  React.useEffect(() => {
    setMenuData(data);
    setSelectAllItems(selectAll);
  }, [data, selectAll]);

  // console.log("React.Children: ", React.Children);
  
  const items = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const item = child as React.ReactElement<React.PropsWithChildren<MenuItemProps>>;

    return React.cloneElement(item, {
      key: child.props.value,
      onMenuItemClick: (e: React.MouseEventHandler<HTMLLIElement>) => {onMenuItemClick(e)},
      size: size,
      selectable: true,
      checked: true,
    });
});

  return (
    <Box className="navi-menu-component"
    >
      <MuiSelect
        multiple={multiSelect}
        value={selectValue}
        defaultValue=""
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          const { value } = event.target;
          const selectAllOption = value instanceof Array && (value.indexOf("select-all") !== -1);
          const input = event.nativeEvent.target as HTMLElement;
          input.innerText !== 'Select All' && handleChange(value);
        }}
        renderValue={(selected) => {
          return typeof selected === 'string' ? selected : ((selected) as string[]).join(', ')
        }}
        inputRef={inputRef}
        input={
          <TextInput
            className="navi-select-input-container"
            {...inputProps}
            size={size}
            inputType={"default"}
          />
        }
        open={open}

        // Hide the actual dropdown select icon
        inputProps={{
          IconComponent: () => null
        }}
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
              <X />
            </IconButton>
            <IconButton
              size="small"
              variant="tertiary"
              intent="muted"
              style={{ marginRight: "5px", transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}` }}
              title={"Open"}
              onClick={(e) => {
                setOpen(true);
              }}
            >
              <CaretDown />
            </IconButton>
          </InputAdornment>
        }

        MenuProps={{
          // Height of the menu dropdown
          PaperProps: {
            style: {
              maxHeight: 'calc(100% - 200px)',
              minWidth: `calc(${inputRef?.current?.node.offsetWidth}px - 8px)`
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
          // className: "navi-menu-item-container",
          // anchorEl: inputRef.current,
          // getContentAnchorEl: () => inputRef.current,
          getContentAnchorEl: null
        }}
      >
        {/* {multiSelect ?
          <MenuItem
            value={"select-all"}
            // className="navi-menu-item-list-item"
            disableRipple
            className={`navi-menu-item-list-item ${(selectValue.indexOf("select-all") > -1) ? 'navi-item-selected' : ''} `}
            onClick={(e) => {
              selectAllOptions(!(selectValue.indexOf("select-all") > -1))
            }}
            disabled={menuData.length === 0}>
            <MenuItemComp
              checkboxes={checkboxes}
              checked={selectValue.indexOf("select-all") > -1}
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
            // <Box
            //   key={i}
            //   style={{ width: "100%", height: "2px", margin: "12px 0", background: tokenObj['color-secondary-100'] }} />

            <Divider orientation={"horizontal"} />
            :

            <MenuItem
              key={title}
              value={title}
              className={`navi-menu-item-list-item ${(selectValue.indexOf(title) > -1) ? 'navi-item-selected' : ''} `}
              disableRipple

              disabled={val.disabled}>
              <MenuItemComp
                avatar={avatar}
                leadingIcon={leadingIcon}
                trallingIcon={trallingIcon}
                description={description}
                selectValue={selectValue}
                title={title}
                checked={selectValue.indexOf(title) > -1 || selectAllItems}
                checkboxes={checkboxes}
                multiSelect={multiSelect}
                {...val}
              />
            </MenuItem>
        }
        )}
        */}

        {/* {props.children} */}
        {items}
      </MuiSelect>
    </Box>
  );
}

export default Select;

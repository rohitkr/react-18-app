import React from "react";
import { SelectProps, SelectDataProps } from "./Select.types";
import MuiSelect from '@material-ui/core/Select';
import Box from "../Box/Box";
import TextInput from "../Input/Input";
import IconButton from "../IconButton/IconButton";
import { X, CaretDown } from "tabler-icons-react";
import { InputAdornment } from '@material-ui/core';
import "./Select.scss";
import { MenuItemProps } from "../MenuItem/MenuItem.types";

// interface SelectionMapInterface: string[];

const Select: React.FC<SelectProps> = ({
  onClose,
  multiSelect,
  selectAll = false,
  // onMenuChange,
  inputProps,
  checkboxes = true,
  size = 'large',
  children,
  ...props }) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (selectAll) {
      const valueArr: string[] = [];
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const value = child.props.value;
          valueArr.push(value);
        }
      });
      setSelectValue(getSelectedValue());
    }
  }, [selectAll]);

  const getSelectedValue = () => {
    const valueArr: string[] = [];
    React.Children.toArray(children).forEach(child => {
      if (React.isValidElement(child)) {
        valueArr.push(child.props.value);
      }
    });
    return valueArr;
  }


  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const item = child as React.ReactElement<React.PropsWithChildren<MenuItemProps>>;
      const value = child.props.value;
      let checked = selectAll || child.props.checked;

      if (selectValue.indexOf(value) !== -1) {
        checked = selectValue.indexOf(value) !== -1;
      }
      checked = selectValue.indexOf(value) !== -1;

      return React.cloneElement(item, {
        key: value,
        size: size,
        selectable: multiSelect,
        checked: checked,
      });
    }
  });

  return (
    <Box className="navi-menu-component"
    >
      <MuiSelect
        renderValue={(selected) => {
          return typeof selected === 'string' ? selected : ((selected) as string[]).join(', ')
        }}
        {...props}
        onChange={(event: React.ChangeEvent<{ value: unknown }>, ele) => {
          const { value } = event.target;
          let valueArr: string[] | string = [];
          if (Array.isArray(value)) {
            setSelectValue(value);
            valueArr = value;
          } else if (typeof value === 'string') {
            setSelectValue([value]);
            valueArr = value;
          }
          props.onChange && props.onChange(valueArr);
        }}
        multiple={multiSelect}
        value={selectValue}
        defaultValue=""
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
          getContentAnchorEl: null,
          disableAutoFocusItem: true,
        }}
      >
        {items}
      </MuiSelect>
    </Box>
  );
}

export default Select;
